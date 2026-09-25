import fs from 'node:fs';
import ts from 'typescript';
import vm from 'node:vm';
import crypto from 'node:crypto';

const load = (file, require = () => ({})) => {
  const source = fs.readFileSync(file, 'utf8');
  const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(`(function(exports,module,require){${javascript}\n})(module.exports,module,require)`, { module, require });
  return module.exports;
};
const previous = load('app/sep23-research.ts');
const current = load('app/sep25-research.ts', () => previous);
const posts = current.septemberTwentyFiveResearchBatch;
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/research.json', 'utf8'));
const fail = (message) => { throw new Error(message); };

if (manifest.family !== 'research' || manifest.publicationDate !== '2026-09-25' || manifest.timezone !== 'UTC' || manifest.requiredCount !== 5 || posts.length !== 5) fail('batch contract mismatch');
const inventory = fs.readdirSync('app').filter((name) => name.endsWith('.ts') && name !== 'sep25-research.ts').map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const serviceSlugs = new Set([...fs.readFileSync('app/service-data.ts', 'utf8').matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]));
const result = posts.map((post) => {
  const words = post.body.join(' ').match(/[A-Za-z0-9']+/g)?.length || 0;
  const hash = crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex');
  const entry = manifest.entries.find((candidate) => candidate.slug === post.slug);
  if (!entry || entry.wordCount !== words || entry.contentHash !== hash) fail(`manifest mismatch ${post.slug}`);
  if (words < 1200 || post.published !== '2026-09-25' || post.referenceSources.length < 3) fail(`editorial contract ${post.slug}`);
  if (inventory.includes(post.slug)) fail(`duplicate slug ${post.slug}`);
  const serviceSlug = post.serviceHandoff.href.replace('/services/', '');
  if (!serviceSlugs.has(serviceSlug)) fail(`invalid service handoff ${post.slug}`);
  if (entry.commitSha !== null || entry.deploymentUuid !== null || entry.verifiedAt !== null) fail(`premature publication evidence ${post.slug}`);
  return { slug: post.slug, words, hash };
});
if (new Set(posts.map((post) => post.slug)).size !== 5) fail('duplicate batch slug');
console.log(JSON.stringify({ count: 5, publicationDate: '2026-09-25', minimumWords: Math.min(...result.map((entry) => entry.words)), result }, null, 2));
