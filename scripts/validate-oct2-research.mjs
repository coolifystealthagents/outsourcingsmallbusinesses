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

const shared = load('app/sep23-research.ts');
const current = load('app/oct2-research.ts', () => shared);
const posts = current.octoberTwoResearchBatch;
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/research.json', 'utf8'));
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

if (manifest.family !== 'research' || manifest.cycleLabel !== '2026-10-02' || manifest.publicationDate !== '2026-10-02' || manifest.timezone !== 'UTC' || manifest.requiredCount !== 5 || posts.length !== 5) fail('batch contract mismatch');
if (manifest.baselineSha !== '1cedbc7c9312420fc23c6acfad3ae23dda9abbb8') fail('baseline mismatch');
const inventory = fs.readdirSync('app').filter((name) => name.endsWith('.ts') && name !== 'oct2-research.ts').map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const serviceSlugs = new Set([...fs.readFileSync('app/service-data.ts', 'utf8').matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]));
const result = posts.map((post) => {
  const words = tokens(post.body.join(' ')).length;
  const hash = crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex');
  const entry = manifest.entries.find((candidate) => candidate.slug === post.slug);
  if (!entry || entry.wordCount !== words || entry.contentHash !== hash) fail(`manifest mismatch ${post.slug}: words=${words} hash=${hash}`);
  if (words < 1200 || post.published !== '2026-10-02' || post.referenceSources.length < 3) fail(`editorial contract ${post.slug}`);
  if (post.referenceSources.some((source) => source.checked !== 'October 2, 2026')) fail(`source date mismatch ${post.slug}`);
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
const paragraphs = posts.flatMap((post) => post.body.map((body, index) => ({ slug: post.slug, index, normalized: tokens(body).join(' ') })));
for (let left = 0; left < paragraphs.length; left += 1) for (let right = left + 1; right < paragraphs.length; right += 1) {
  if (paragraphs[left].slug !== paragraphs[right].slug && paragraphs[left].normalized === paragraphs[right].normalized) fail(`repeated expanded paragraph ${paragraphs[left].slug} ${paragraphs[right].slug}`);
}
const output = result.map(({ shingles: ignored, ...entry }) => entry);
console.log(JSON.stringify({ count: 5, publicationDate: '2026-10-02', minimumWords: Math.min(...result.map((entry) => entry.words)), maximumPairwiseFiveWordShingleJaccard: Math.max(...overlaps.map((entry) => entry.overlap)), repeatedOriginalParagraphs: 0, sharedArgumentReview: 'Each article uses a distinct decision, evidence graph, failure tests, measures, boundary, and buyer outcome.', result: output, overlaps }, null, 2));
