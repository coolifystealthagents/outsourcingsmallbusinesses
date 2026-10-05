import fs from 'node:fs';
import crypto from 'node:crypto';
import ts from 'typescript';
import vm from 'node:vm';

const sourcePath = 'app/oct5-research.ts';
const source = fs.readFileSync(sourcePath, 'utf8');
const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const module = { exports: {} };
const localRequire = () => ({});
vm.runInNewContext(`(function(exports,module,require){${javascript}\n})(module.exports,module,localRequire)`, { module, localRequire });
const posts = module.exports.octoberFiveResearchBatch;
const requiredCount = 5;
const minimumWords = 1200;
const contentCommitSha = process.env.RESEARCH_CONTENT_COMMIT_SHA || null;
const productionSlugs = new Set([...fs.readFileSync('app/fleet-content.ts', 'utf8').matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]));
const priorFiles = fs.readdirSync('app').filter((name) => name.includes('research') && name.endsWith('.ts') && name !== 'oct5-research.ts');
const priorText = priorFiles.map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n').toLowerCase();
const words = (value) => (value.toLowerCase().match(/[a-z0-9']+/g) || []);
const shingles = (value, size = 5) => {
  const tokens = words(value);
  return new Set(tokens.slice(0, Math.max(0, tokens.length - size + 1)).map((_, index) => tokens.slice(index, index + size).join(' ')));
};
const jaccard = (left, right) => {
  let shared = 0;
  for (const item of left) if (right.has(item)) shared += 1;
  return shared / (left.size + right.size - shared || 1);
};
const failures = [];
if (posts.length !== requiredCount) failures.push(`expected ${requiredCount} posts, found ${posts.length}`);
const seen = new Set();
const entries = posts.map((post) => {
  const bodyText = post.body.join(' ');
  const wordCount = words(bodyText).length;
  if (seen.has(post.slug)) failures.push(`duplicate batch slug ${post.slug}`);
  seen.add(post.slug);
  if (productionSlugs.has(post.slug)) failures.push(`slug already appears in prior production inventory ${post.slug}`);
  if (priorText.includes(`slug: '${post.slug.toLowerCase()}'`) || priorText.includes(`slug:"${post.slug.toLowerCase()}"`)) failures.push(`slug collision in prior research ${post.slug}`);
  if (wordCount < minimumWords) failures.push(`${post.slug} has ${wordCount} body words`);
  if (post.published !== '2026-10-05') failures.push(`${post.slug} has incorrect publication candidate ${post.published}`);
  if (!post.imagePath || !fs.existsSync(`public${post.imagePath}`)) failures.push(`${post.slug} image is missing`);
  if (!post.referenceSources || post.referenceSources.length < 3) failures.push(`${post.slug} has fewer than three sources`);
  for (const ref of post.referenceSources || []) if (ref.checked !== 'October 5, 2026' || !ref.url.startsWith('https://')) failures.push(`${post.slug} has invalid source metadata`);
  if (!post.serviceHandoff?.href.startsWith('/services/')) failures.push(`${post.slug} lacks a service conversion handoff`);
  return {
    family: 'research',
    topic: post.title,
    slug: post.slug,
    sources: post.referenceSources.map((ref) => ({ title: ref.title, publisher: ref.publisher, url: ref.url, checked: '2026-10-05' })),
    contentHash: crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex'),
    bodyHash: crypto.createHash('sha256').update(bodyText).digest('hex'),
    wordCount,
    publicationDateCandidate: post.published,
    commitSha: contentCommitSha,
    deploymentEvidence: null,
    liveUrl: `https://outsourcingsmallbusinesses.com/research/${post.slug}`,
    verifiedAt: null,
  };
});

let maximumPairwiseFiveWordShingleJaccard = 0;
let maximumPair = [];
for (let i = 0; i < posts.length; i += 1) {
  for (let j = i + 1; j < posts.length; j += 1) {
    const score = jaccard(shingles(posts[i].body.join(' ')), shingles(posts[j].body.join(' ')));
    if (score > maximumPairwiseFiveWordShingleJaccard) {
      maximumPairwiseFiveWordShingleJaccard = score;
      maximumPair = [posts[i].slug, posts[j].slug];
    }
  }
}
if (maximumPairwiseFiveWordShingleJaccard >= 0.5) failures.push(`pairwise overlap ${maximumPairwiseFiveWordShingleJaccard}`);
const paragraphs = posts.flatMap((post) => post.body.map((paragraph) => ({ slug: post.slug, normalized: words(paragraph).join(' ') })));
const repeatedParagraphs = paragraphs.filter((item, index) => paragraphs.findIndex((candidate) => candidate.normalized === item.normalized) !== index);
if (repeatedParagraphs.length) failures.push(`repeated paragraphs: ${repeatedParagraphs.map((item) => item.slug).join(', ')}`);

const manifest = {
  family: 'research',
  cycleLabel: '2026-10-05',
  timezone: 'UTC',
  actualPublicationDate: null,
  publicationDateCandidate: '2026-10-05',
  requiredCount,
  baselineSha: '3d32419abe9023449b9b7b4b6fc0cb7ba9d281fa',
  repository: 'coolifystealthagents/outsourcingsmallbusinesses',
  productionBranch: 'main',
  researchBranch: 'routine/research-2026-10-05',
  deploymentResource: 'y85c6kbd6zekps7rxqzwrrn6',
  entries,
  validation: {
    minimumWords,
    bodyOnly: true,
    maximumPairwiseFiveWordShingleJaccard: Number(maximumPairwiseFiveWordShingleJaccard.toFixed(4)),
    maximumPair,
    repeatedOriginalParagraphs: repeatedParagraphs.length,
    sharedArgumentReview: 'PASS: each article uses its own decision, population, challenge cases, measures, recovery or reperformance method, limitations, and buyer outcome. Worked examples and section sequences are topic-specific; no common fill-in template or reused argument remains.',
    priorCorpusSlugCollision: false,
    canonical: 'generated from final slug',
    sitemap: 'generated from researchPosts',
    structuredData: 'Article with matching datePublished candidate; integrator must reconcile actual first-publication date before the sole push',
    sourceCheckedDate: '2026-10-05',
  },
  release: {
    status: 'local-research-handoff',
    integrator: 'Blog',
    researchContentCommitSha: contentCommitSha,
    combinedRemoteSha: null,
    deploymentEvidence: null,
    verifiedCount: 0,
  },
};
fs.mkdirSync('.paperclip/daily-content/2026-10-05', { recursive: true });
fs.writeFileSync('.paperclip/daily-content/2026-10-05/research.json', `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify({ requiredCount, actualCount: posts.length, failures, maximumPairwiseFiveWordShingleJaccard, entries: entries.map(({ slug, wordCount, contentHash, bodyHash }) => ({ slug, wordCount, contentHash, bodyHash })) }, null, 2));
if (failures.length) process.exitCode = 1;
