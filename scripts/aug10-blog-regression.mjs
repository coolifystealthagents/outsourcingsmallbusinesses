import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/daily-blog-batch.ts', 'utf8');
const page = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
if (manifest.entries.length < manifest.minimum) throw new Error('accepted count below minimum');
if (new Set(manifest.entries.map((entry) => entry.slug)).size !== manifest.entries.length) throw new Error('duplicate slug');
if (data.indexOf('...dailyBlogBatch.map') < data.indexOf('export const blogPosts')) throw new Error('index is not newest-first');
if (!page.includes('datePublished: dailyBlogPublicationDate') || !page.includes('<time dateTime={dailyBlogPublicationDate}>')) throw new Error('rendered date fields missing');
for (const entry of manifest.entries) {
  if (!entry.route.startsWith('/blog/')) throw new Error(`wrong family route: ${entry.route}`);
  if (entry.sourcePath !== 'app/daily-blog-batch.ts' || !source.includes(`'${entry.slug}'`)) throw new Error(`missing source record: ${entry.slug}`);
  if (entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`wrong date: ${entry.slug}`);
  if (!entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error(`incomplete rendered fields: ${entry.slug}`);
  if (entry.route !== `/blog/${entry.slug}`) throw new Error(`route mismatch: ${entry.slug}`);
  if (!page.includes(`href={\`/blog/${entry.slug}\`}`) && !page.includes('href={`/blog/${slug}`}')) throw new Error(`route not rendered: ${entry.slug}`);
  let parent = '';
  try { parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/daily-blog-batch.ts`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch {}
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:app/daily-blog-batch.ts`], { encoding: 'utf8' });
  if (parent.includes(`'${entry.slug}'`) || !introduced.includes(`'${entry.slug}'`)) throw new Error(`provenance mismatch: ${entry.slug}`);
}
console.log(`PASS: ${manifest.entries.length} Blog entries, source dates, rendered dates, routes, provenance, and newest-first index`);
