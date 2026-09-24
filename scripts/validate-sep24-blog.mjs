import fs from 'node:fs';
import crypto from 'node:crypto';

const root = new URL('../', import.meta.url);
const batch = fs.readFileSync(new URL('app/sep24-blog-batch.ts', root), 'utf8');
const data = fs.readFileSync(new URL('app/data.ts', root), 'utf8');
const page = fs.readFileSync(new URL('app/blog/[slug]/page.tsx', root), 'utf8');
const sitemap = fs.readFileSync(new URL('app/sitemap.xml/route.ts', root), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('.paperclip/daily-content/2026-09-24/blog.json', root), 'utf8'));
const topicSource = batch.split('export const septemberTwentyFourSources')[0];
const slugs = [...topicSource.matchAll(/^\s*\['([^']+)','/gm)].map((match) => match[1]);
if (slugs.length !== 12 || new Set(slugs).size !== 12) throw new Error(`Expected 12 unique slugs, got ${slugs.length}`);
const trackedFiles = fs.readdirSync(new URL('app/', root)).filter((name) => /(?:blog-batch|content)\.ts$/.test(name) && name !== 'sep24-blog-batch.ts');
const older = trackedFiles.map((name) => fs.readFileSync(new URL(`app/${name}`, root), 'utf8')).join('\n') + fs.readFileSync(new URL('app/data.ts', root), 'utf8').split("import { septemberTwentyFourBlogBatch")[0];
for (const slug of slugs) if (older.includes(`'${slug}'`) || older.includes(`"${slug}"`)) throw new Error(`Slug already existed: ${slug}`);
if (manifest.requiredCount !== 12 || manifest.entries.length !== 12) throw new Error('Manifest count mismatch');
for (const slug of slugs) {
  const entry = manifest.entries.find((item) => item.slug === slug && item.liveUrl === `https://outsourcingsmallbusinesses.com/blog/${slug}`);
  if (!entry) throw new Error(`Missing manifest entry: ${slug}`);
}
for (const marker of ['septemberTwentyFourBlogBatch','2026-09-24','datePublished','canonical','article:published_time']) if (!(batch + data + page + sitemap).includes(marker)) throw new Error(`Missing integration marker: ${marker}`);
const sectionTemplates = [...batch.matchAll(/\['[^']+',`([^`]+)`\]/g)].map((match) => match[1]);
const words = sectionTemplates.reduce((total, value) => total + value.trim().split(/\s+/).length, 0);
if (words < 900) throw new Error(`Only ${words} substantive template words per article`);
const topicRows = [...topicSource.matchAll(/^\s*\[(.+)\],$/gm)].map((match) => match[1]);
const hashes = topicRows.map((row) => crypto.createHash('sha256').update(row + sectionTemplates.join('\n')).digest('hex'));
if (new Set(hashes).size !== 12) throw new Error('Content hashes are not unique');
console.log(`Validated 12 new September 24 blog routes with ${words} substantive template words each.`);
