import fs from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';

const campaignDate = '2026-08-23';
const visibleDate = 'August 23, 2026';
const baseline = '9214ce9c0103f3267a7b90cd4ebc243f086ce30f';
const sourcePath = 'app/aug23-research-batch.ts';
const manifestPath = '.paperclip/daily-content/2026-08-23/research.json';
const source = fs.readFileSync(sourcePath, 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const listing = fs.readFileSync('app/research/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const fleet = fs.readFileSync('app/fleet-content.ts', 'utf8');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const records = [...source.matchAll(/\{ slug:'([^']+)', title:'([^']+)', excerpt:'([^']+)', published:'([^']+)', campaignDate:'([^']+)', body:\[(.*?)\n  \]\}/gs)]
  .map((match) => ({ slug: match[1], title: match[2], published: match[4], campaignDate: match[5], body: match[6] }));

check(records.length === 5, `expected 5 records, found ${records.length}`);
check(manifest.count === 5 && manifest.entries.length === 5, 'manifest must contain exactly 5 entries');
check(new Set(records.map((record) => record.slug)).size === 5, 'slugs must be unique');
check(records.every((record) => record.published === campaignDate && record.campaignDate === campaignDate), 'all records must directly bind the campaign date');
check(records.every((record) => manifest.entries.some((entry) => entry.route === `/research/${record.slug}` && entry.sourcePaths?.includes(sourcePath))), 'manifest routes and source paths must match every record');
check(records.every((record) => record.body.split(/\s+/).filter(Boolean).length >= 900), 'every body must contain at least 900 words');
check(records.every((record) => new Set([...record.body.matchAll(/\$\{sources\.([a-zA-Z]+)\}/g)].map((match) => match[1])).size >= 3), 'every body must reference at least 3 external source URLs');
check(records.every((record) => /Research question\./.test(record.body) && /Methodology and evidence scope\./.test(record.body) && /Facts versus analysis\./.test(record.body) && /Limitations\./.test(record.body) && /Evidence-led conclusion\./.test(record.body)), 'research sections are incomplete');
check(!/[—–]/.test(source), 'Humanizer punctuation check failed');
check(!/rate card|Paperclip|deployment|prompt receipt|our (?:price|pricing|rate)|\$\d+/i.test(records.map((record) => record.body).join('\n')), 'prohibited public language detected');
check(renderer.includes("datePublished:post.published") && renderer.includes('formatPublicDate(post.published)') && renderer.includes('alternates:{canonical:url}'), 'route must expose structured, visible, and canonical metadata');
check(listing.includes('researchPosts') && listing.includes('b.published.localeCompare(a.published)||a.slug.localeCompare(b.slug)'), 'research index ordering is not deterministic');
check(sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`)'), 'sitemap does not include the research corpus');
check(fleet.includes("import { augustTwentyThreeResearchBatch } from './aug23-research-batch';") && fleet.includes('...augustTwentyThreeResearchBatch'), 'research batch is not loaded');

const baselinePaths = execFileSync('git', ['ls-tree', '-r', '--name-only', baseline], { encoding: 'utf8' }).split('\n');
check(!baselinePaths.includes(sourcePath), 'route-specific source path existed at the immutable baseline');
for (const record of records) {
  const occurrences = spawnSync('git', ['grep', '-n', record.slug, baseline, '--', '.'], { encoding: 'utf8' }).stdout.trim();
  check(!occurrences, `slug existed at immutable baseline: ${record.slug}`);
}

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join('\n'));
  process.exit(1);
}

const metrics = records.map((record) => ({
  route: `/research/${record.slug}`,
  words: record.body.split(/\s+/).filter(Boolean).length,
  sourceUrls: new Set([...record.body.matchAll(/\$\{sources\.([a-zA-Z]+)\}/g)].map((match) => match[1])).size,
  published: record.published,
  visibleDate
}));
console.log(JSON.stringify({ status: 'PASS', count: records.length, metrics }, null, 2));
