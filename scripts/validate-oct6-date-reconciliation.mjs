import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const baseRef = process.env.RECONCILIATION_BASE_REF || 'origin/main';
const directory = '.paperclip/daily-content/2026-10-05';
const read = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));
const readBase = (path) => JSON.parse(execFileSync('git', ['show', `${baseRef}:${path}`], { encoding: 'utf8' }));
const failures = [];
const families = [];

for (const family of ['blog', 'research']) {
  const path = `${directory}/${family}.json`;
  const before = readBase(path);
  const after = read(path);
  if (before.cycleLabel !== '2026-10-05' || after.cycleLabel !== '2026-10-05') failures.push(`${family}: cycle label changed`);
  if (after.timezone !== 'UTC') failures.push(`${family}: timezone is not UTC`);
  if (after.actualPublicationDate !== '2026-10-06' || after.publicationDateCandidate !== '2026-10-06') failures.push(`${family}: reconciled date mismatch`);
  if (before.entries.length !== after.entries.length) failures.push(`${family}: entry count changed`);
  const entries = after.entries.map((entry, index) => {
    const prior = before.entries[index];
    const bodyHashUnchanged = prior?.slug === entry.slug && prior.bodyHash === entry.bodyHash;
    const paragraphOrderUnchanged = family === 'research' || JSON.stringify(prior?.paragraphHashes) === JSON.stringify(entry.paragraphHashes);
    const sourcesUnchanged = JSON.stringify(prior?.sources) === JSON.stringify(entry.sources);
    const wordCountUnchanged = prior?.wordCount === entry.wordCount;
    if (!bodyHashUnchanged) failures.push(`${family}/${entry.slug}: ordered body hash changed`);
    if (!paragraphOrderUnchanged) failures.push(`${family}/${entry.slug}: ordered paragraph hashes changed`);
    if (!sourcesUnchanged) failures.push(`${family}/${entry.slug}: sources changed`);
    if (!wordCountUnchanged) failures.push(`${family}/${entry.slug}: word count changed`);
    return {
      slug: entry.slug,
      beforeBodyHash: prior?.bodyHash,
      afterBodyHash: entry.bodyHash,
      bodyHashUnchanged,
      paragraphOrderUnchanged,
      sourcesUnchanged,
      wordCount: entry.wordCount,
      wordCountUnchanged,
      beforeContentHash: prior?.contentHash,
      afterContentHash: entry.contentHash,
      contentHashChangedOnlyBecauseDatedSourceChanged: prior?.contentHash !== entry.contentHash,
    };
  });
  families.push({
    family,
    count: entries.length,
    beforeActualPublicationDate: before.actualPublicationDate,
    beforePublicationDateCandidate: before.publicationDateCandidate,
    afterActualPublicationDate: after.actualPublicationDate,
    afterPublicationDateCandidate: after.publicationDateCandidate,
    entries,
  });
}

const changedFiles = execFileSync('git', ['diff', '--name-only', baseRef], { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
const priorCycleChanges = changedFiles.filter((path) => /2026-(?:0[1-9]|09|10-0[1-4])/.test(path) && !path.includes('2026-10-05'));
if (priorCycleChanges.length) failures.push(`prior-cycle files changed: ${priorCycleChanges.join(', ')}`);

const report = {
  cycleLabel: '2026-10-05',
  reconciledPublicationDate: '2026-10-06',
  timezone: 'UTC',
  baseRef,
  baseSha: execFileSync('git', ['rev-parse', baseRef], { encoding: 'utf8' }).trim(),
  changedFiles,
  priorCycleChanges,
  families,
  failures,
};
fs.writeFileSync(`${directory}/date-reconciliation.json`, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({
  baseSha: report.baseSha,
  counts: families.map(({ family, count }) => ({ family, count })),
  unchangedBodyHashes: families.flatMap(({ entries }) => entries).filter((entry) => entry.bodyHashUnchanged).length,
  priorCycleChanges,
  failures,
}, null, 2));
if (failures.length) process.exitCode = 1;
