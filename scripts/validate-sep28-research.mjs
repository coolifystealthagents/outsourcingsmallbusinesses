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
const current = load('app/sep28-research.ts', () => previous);
const posts = current.septemberTwentyEightResearchBatch;
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-28/research.json', 'utf8'));
const fail = (message) => { throw new Error(message); };
const tokens = (text) => text.toLowerCase().match(/[a-z0-9']+/g) || [];
const shingles = (text) => {
  const words = tokens(text);
  const result = new Set();
  for (let index = 0; index + 4 < words.length; index += 1) result.add(words.slice(index, index + 5).join(' '));
  return result;
};
const jaccard = (left, right) => {
  let intersection = 0;
  for (const value of left) if (right.has(value)) intersection += 1;
  return intersection / (left.size + right.size - intersection);
};

if (manifest.family !== 'research' || manifest.cycleLabel !== 'September28' || manifest.publicationDate !== '2026-09-28' || manifest.timezone !== 'UTC' || manifest.requiredCount !== 5 || posts.length !== 5) fail('batch contract mismatch');
if (manifest.baselineSha !== 'da179b96a46a2ba3b33471d173cc25cb7a763200') fail('baseline mismatch');
const inventory = fs.readdirSync('app').filter((name) => name.endsWith('.ts') && name !== 'sep28-research.ts').map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const serviceSlugs = new Set([...fs.readFileSync('app/service-data.ts', 'utf8').matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]));
const result = posts.map((post) => {
  const words = tokens(post.body.join(' ')).length;
  const hash = crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex');
  const entry = manifest.entries.find((candidate) => candidate.slug === post.slug);
  if (!entry || entry.wordCount !== words || entry.contentHash !== hash) fail(`manifest mismatch ${post.slug}`);
  if (words < 1200 || post.published !== '2026-09-28' || post.referenceSources.length < 3) fail(`editorial contract ${post.slug}`);
  if (post.referenceSources.some((source) => source.checked !== 'September 28, 2026')) fail(`source date mismatch ${post.slug}`);
  if (inventory.includes(post.slug)) fail(`duplicate slug ${post.slug}`);
  const serviceSlug = post.serviceHandoff.href.replace('/services/', '');
  if (!serviceSlugs.has(serviceSlug)) fail(`invalid service handoff ${post.slug}`);
  if (entry.commitSha !== null || entry.deploymentUuid !== null || entry.verifiedAt !== null) fail(`premature publication evidence ${post.slug}`);
  return { slug: post.slug, words, hash, shingles: shingles(post.body.join(' ')) };
});
if (new Set(posts.map((post) => post.slug)).size !== 5) fail('duplicate batch slug');
const overlaps = [];
for (let left = 0; left < result.length; left += 1) {
  for (let right = left + 1; right < result.length; right += 1) {
    const overlap = jaccard(result[left].shingles, result[right].shingles);
    if (overlap >= 0.5) fail(`body overlap ${result[left].slug} ${result[right].slug}`);
    overlaps.push({ left: result[left].slug, right: result[right].slug, overlap: Number(overlap.toFixed(4)) });
  }
}
const output = result.map(({ shingles: ignored, ...entry }) => entry);
console.log(JSON.stringify({ count: 5, publicationDate: '2026-09-28', minimumWords: Math.min(...result.map((entry) => entry.words)), maximumPairwiseFiveWordShingleJaccard: Math.max(...overlaps.map((entry) => entry.overlap)), result: output, overlaps }, null, 2));
