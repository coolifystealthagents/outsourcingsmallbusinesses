#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const batchFile = resolve(process.env.DAILY_BLOG_BATCH_FILE || "ops/daily-blog-batch.json");
const stateFile = resolve(process.env.DEPLOYMENT_STATE_FILE || "ops/.deployment-state.json");
const now = new Date().toISOString();
const allowed = new Set(["SKIPPED_INCOMPLETE", "NO_NEW_CHANGES", "ALREADY_DEPLOYED", "DEPLOYMENT_ALREADY_PENDING", "SKIPPED_COOLIFY_QUEUE", "DEPLOYMENT_SUBMITTED", "DEPLOYMENT_IN_PROGRESS", "DEPLOYMENT_FAILED", "LIVE_VERIFIED"]);
const read = (file) => { try { return JSON.parse(readFileSync(file, "utf8")); } catch { return null; } };
const save = (record) => { const previous = read(stateFile) || {}; writeFileSync(stateFile, `${JSON.stringify({ ...previous, ...record }, null, 2)}\n`); };
const finish = (outcome, details = {}) => { if (!allowed.has(outcome)) throw new Error("invalid routine outcome"); const record = { outcome, timestampUtc: now, ...details }; save(record); console.log(JSON.stringify(record)); };
const git = (args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
const statusOf = (item) => String(item.status || item.deployment_status || "").toLowerCase().replace(/[\s-]+/g, "_");
const shaOf = (item) => item.commit_sha || item.git_commit_sha || item.commit || item.commit_uuid || null;
const idOf = (item) => item.deployment_uuid || item.uuid || item.id || null;
const listOf = (body) => Array.isArray(body) ? body : (body?.data || body?.deployments || body?.items || []);
const active = new Set(["queued", "in_progress", "running", "building", "deploying"]);
const success = new Set(["success", "successful", "finished", "completed"]);

const required = ["COOLIFY_API_URL", "COOLIFY_API_TOKEN", "COOLIFY_APPLICATION_UUID"];
const api = async (path, options = {}) => {
  const response = await fetch(`${process.env.COOLIFY_API_URL.replace(/\/$/, "")}${path}`, {
    ...options,
    headers: { Accept: "application/json", Authorization: `Bearer ${process.env.COOLIFY_API_TOKEN}`, ...(options.headers || {}) },
  });
  const text = await response.text();
  let body; try { body = JSON.parse(text); } catch { body = {}; }
  if (!response.ok) throw new Error(`Coolify HTTP ${response.status}`);
  return body;
};
const liveVerify = async (batch) => {
  const domain = (process.env.COOLIFY_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || process.env.COOLIFY_FQDN || "").replace(/\/$/, "");
  if (!domain) return false;
  const paths = ["/", ...(batch.tasks || []).flatMap((task) => task.paths || (task.slug ? [`/blog/${task.slug}`] : []))];
  try { for (const path of paths) { const response = await fetch(`${domain}${path.startsWith("/") ? path : `/${path}`}`); if (!response.ok) return false; } return true; } catch { return false; }
};

if (!existsSync(batchFile)) finish("SKIPPED_INCOMPLETE", { reason: "daily Blog batch manifest is missing" });
else {
  const batch = read(batchFile);
  const complete = batch?.status === "completed" && batch.validated === true && Array.isArray(batch.tasks) && batch.tasks.length > 0 && batch.tasks.every((task) => task.status === "completed" && task.validated === true && task.imagesComplete === true && task.metadataComplete === true && task.linksComplete === true && task.ctaComplete === true);
  if (!complete) finish("SKIPPED_INCOMPLETE", { reason: "daily Blog batch is incomplete or lacks required validation evidence" });
  else if (required.some((key) => !process.env[key])) finish("DEPLOYMENT_FAILED", { reason: "required protected Coolify configuration is missing", missingConfig: required.filter((key) => !process.env[key]) });
  else {
    const state = read(stateFile) || {};
    const head = git(["rev-parse", "HEAD"]);
    const changed = git(["status", "--short"]);
    if (!changed && state.deployedSha === head) finish("ALREADY_DEPLOYED", { gitSha: head });
    else if (!changed && state.pushedSha !== head) finish("NO_NEW_CHANGES", { gitSha: head });
    else {
      try {
        execFileSync("npm", ["run", "build"], { cwd: root, stdio: "inherit" });
        const files = [...new Set(batch.tasks.flatMap((task) => task.files || []))];
        const operational = new Set(["ops/.deployment-state.json", "ops/daily-blog-batch.json"]);
        const unrelated = git(["status", "--short"]).split("\n").filter(Boolean).map((line) => line.slice(3)).filter((file) => !files.includes(file) && !operational.has(file));
        if (unrelated.length) throw new Error("unrelated files in batch");
        if (git(["status", "--short"])) { execFileSync("git", ["add", "--", ...files], { cwd: root, stdio: "inherit" }); execFileSync("git", ["commit", "-m", `Publish daily Blog batch ${batch.batchId || now.slice(0, 10)}`], { cwd: root, stdio: "inherit" }); execFileSync("git", ["push", "origin", process.env.COOLIFY_BRANCH || "main"], { cwd: root, stdio: "inherit" }); }
        const commitSha = git(["rev-parse", "HEAD"]);
        save({ pushedSha: commitSha, batchId: batch.batchId || null });
        const deployments = listOf(await api("/api/v1/deployments"));
        const same = deployments.find((item) => shaOf(item) === commitSha);
        if (same && active.has(statusOf(same))) finish(statusOf(same) === "queued" ? "DEPLOYMENT_ALREADY_PENDING" : "DEPLOYMENT_IN_PROGRESS", { gitSha: commitSha, deploymentUuid: idOf(same) });
        else if (same && success.has(statusOf(same))) { const live = await liveVerify(batch); finish(live ? "LIVE_VERIFIED" : "DEPLOYMENT_FAILED", { gitSha: commitSha, deploymentUuid: idOf(same), reason: live ? undefined : "live verification failed" }); }
        else {
          const queuedCount = deployments.filter((item) => statusOf(item) === "queued").length;
          if (queuedCount >= 3) finish("SKIPPED_COOLIFY_QUEUE", { gitSha: commitSha, queuedCount });
          else {
            const accepted = await api("/api/v1/deploy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ uuid: process.env.COOLIFY_APPLICATION_UUID, force: false }) });
            const deploymentUuid = accepted?.uuid || accepted?.deployment_uuid || accepted?.id || accepted?.data?.uuid || accepted?.data?.deployment_uuid;
            if (!deploymentUuid) throw new Error("uncertain deployment response; no retry");
            finish("DEPLOYMENT_SUBMITTED", { domain: process.env.COOLIFY_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || process.env.COOLIFY_FQDN || null, paperclipProject: process.env.PAPERCLIP_PROJECT || "Onboarding", applicationUuid: process.env.COOLIFY_APPLICATION_UUID, gitSha: commitSha, deploymentUuid, triggerTimeUtc: now, acceptedStatus: "accepted", queuedCount });
          }
        }
      } catch (error) { finish("DEPLOYMENT_FAILED", { reason: error.message === "uncertain deployment response; no retry" ? error.message : "validation, push, or Coolify operation failed" }); }
    }
  }
}
