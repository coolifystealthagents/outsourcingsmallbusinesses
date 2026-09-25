import fs from 'node:fs';
import crypto from 'node:crypto';

const root = new URL('../', import.meta.url);
const batch = fs.readFileSync(new URL('app/sep25-blog-batch.ts', root), 'utf8');
const data = fs.readFileSync(new URL('app/data.ts', root), 'utf8');
const page = fs.readFileSync(new URL('app/blog/[slug]/page.tsx', root), 'utf8');
const sitemap = fs.readFileSync(new URL('app/sitemap.xml/route.ts', root), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('.paperclip/daily-content/2026-09-25/blog.json', root), 'utf8'));
const topicSource = batch.split('export const septemberTwentyFiveSources')[0];
const slugs = [...topicSource.matchAll(/^\s*\['([^']+)','/gm)].map((match) => match[1]);
if (slugs.length !== 12 || new Set(slugs).size !== 12) throw new Error(`Expected 12 unique slugs, got ${slugs.length}`);
const trackedFiles = fs.readdirSync(new URL('app/', root)).filter((name) => /(?:blog-batch|content)\.ts$/.test(name) && name !== 'sep25-blog-batch.ts');
const older = trackedFiles.map((name) => fs.readFileSync(new URL(`app/${name}`, root), 'utf8')).join('\n') + fs.readFileSync(new URL('app/data.ts', root), 'utf8').split("import { septemberTwentyFiveBlogBatch")[0];
for (const slug of slugs) if (older.includes(`'${slug}'`) || older.includes(`"${slug}"`)) throw new Error(`Slug already existed: ${slug}`);
if (manifest.requiredCount !== 12 || manifest.entries.length !== 12) throw new Error('Manifest count mismatch');
for (const slug of slugs) {
  const entry = manifest.entries.find((item) => item.slug === slug && item.liveUrl === `https://outsourcingsmallbusinesses.com/blog/${slug}`);
  if (!entry) throw new Error(`Missing manifest entry: ${slug}`);
}
for (const marker of ['septemberTwentyFiveBlogBatch','2026-09-25','datePublished','canonical','article:published_time']) if (!(batch + data + page + sitemap).includes(marker)) throw new Error(`Missing integration marker: ${marker}`);
const decode = (value) => value.replace(/<[^>]+>/g, ' ').replace(/&(?:#x27|apos);/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const words = (value) => value.toLowerCase().replace(/[^a-z0-9']+/g, ' ').trim().split(/\s+/).filter(Boolean);
const shingles = (value, size = 8) => {
  const tokens = words(value); const result = new Set();
  for (let index = 0; index <= tokens.length - size; index++) result.add(tokens.slice(index, index + size).join(' '));
  return result;
};
const rendered = slugs.map((slug) => {
  const artifact = new URL(`.next/server/app/blog/${slug}.html`, root);
  if (!fs.existsSync(artifact)) throw new Error(`Missing clean-build artifact for originality audit: ${slug}`);
  const html = fs.readFileSync(artifact, 'utf8');
  const article = html.match(/<article class="container guide-article strict-article"[\s\S]*?<\/article>/)?.[0];
  if (!article) throw new Error(`Missing rendered article body: ${slug}`);
  const sections = [...article.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)].slice(0, 11).map((match) => decode(match[1]));
  if (sections.length !== 11) throw new Error(`Expected 11 substantive sections for ${slug}, got ${sections.length}`);
  const body = sections.join(' '); const wordCount = words(body).length;
  if (wordCount < 900) throw new Error(`Only ${wordCount} rendered substantive words for ${slug}`);
  const contentHash = crypto.createHash('sha256').update(body).digest('hex');
  const manifestEntry = manifest.entries.find((item) => item.slug === slug);
  if (manifestEntry.contentHash !== contentHash) throw new Error(`Manifest content hash mismatch for ${slug}: expected ${contentHash}`);
  return { slug, body, wordCount, contentHash };
});
let maximum = { score: 0, first: '', second: '' };
for (let left = 0; left < rendered.length; left++) for (let right = left + 1; right < rendered.length; right++) {
  const a = shingles(rendered[left].body); const b = shingles(rendered[right].body);
  const intersection = [...a].filter((value) => b.has(value)).length;
  const score = intersection / (a.size + b.size - intersection);
  if (score > maximum.score) maximum = { score, first: rendered[left].slug, second: rendered[right].slug };
}
if (maximum.score >= 0.5) throw new Error(`Maximum rendered body overlap is ${(maximum.score * 100).toFixed(2)}%`);
if (new Set(rendered.map((item) => item.contentHash)).size !== 12) throw new Error('Rendered content hashes are not unique');
console.log(JSON.stringify({ count: rendered.length, wordCounts: rendered.map(({slug,wordCount}) => ({slug,wordCount})), maximumPairwiseEightWordShingleJaccard: maximum }, null, 2));
