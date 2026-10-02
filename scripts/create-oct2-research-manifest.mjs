import fs from 'node:fs';
import crypto from 'node:crypto';
import ts from 'typescript';
import vm from 'node:vm';

const source = fs.readFileSync('app/oct2-research.ts', 'utf8');
const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const module = { exports: {} };
const localRequire = () => ({});
vm.runInNewContext(`(function(exports,module,require){${javascript}\n})(module.exports,module,localRequire)`, { module, localRequire });
const manifestPath = '.paperclip/daily-content/2026-10-02/research.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
for (const post of module.exports.octoberTwoResearchBatch) {
  const entry = manifest.entries.find((candidate) => candidate.slug === post.slug);
  if (!entry) throw new Error(`missing manifest entry ${post.slug}`);
  entry.wordCount = (post.body.join(' ').toLowerCase().match(/[a-z0-9']+/g) || []).length;
  entry.contentHash = crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex');
}
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
