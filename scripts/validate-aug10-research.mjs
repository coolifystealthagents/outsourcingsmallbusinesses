import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/research.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const routeSource = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const indexSource = fs.readFileSync(path.join(root, 'app/research/page.tsx'), 'utf8');
const sitemapSource = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const fail = (message) => { throw new Error(message); };

manifest.entries.length === 15 || fail(`manifest must inventory exactly 15 articles, got ${manifest.entries.length}`);
manifest.entries.length >= manifest.minimum || fail('manifest is below minimum');
new Set(manifest.entries.map((entry) => entry.slug)).size === manifest.entries.length || fail('manifest has duplicate slugs');
const entrySlugs = new Set(manifest.entries.map((entry) => entry.slug));
const sourceRecords = [...source.matchAll(/\{slug:'([^']+)',[^\n]*published:'([^']+)'/g)];
const sourceCounts = new Map();
sourceRecords.forEach(([, slug]) => sourceCounts.set(slug, (sourceCounts.get(slug) || 0) + 1));
manifest.entries.forEach((entry) => {
  entry.route === `/research/${entry.slug}` || fail(`bad route: ${entry.slug}`);
  entry.route.startsWith('/research/') || fail(`wrong family: ${entry.route}`);
  entry.sourcePath === 'app/fleet-content.ts' || fail(`wrong source path: ${entry.slug}`);
  fs.existsSync(path.join(root, entry.sourcePath)) || fail(`missing source: ${entry.sourcePath}`);
  sourceCounts.get(entry.slug) === 1 || fail(`source record count is not exactly one: ${entry.slug}`);
  entry.sourceDate === '2026-08-10' && entry.renderedDate === '2026-08-10' || fail(`bad manifest date: ${entry.slug}`);
  const record = source.match(new RegExp(`\\{slug:'${entry.slug}',[\\s\\S]*?published:'([^']+)'`));
  record && record[1] === '2026-08-10' || fail(`bad source date: ${entry.slug}`);
  entry.renderedDateFields.includes('datePublished') && entry.renderedDateFields.includes('article:published_time') && entry.renderedDateFields.includes('time[datetime]') || fail(`incomplete rendered fields: ${entry.slug}`);
  entry.provenance === 'repair-replacement' && entry.introducedByCommit === 'a2572a94a22aa231ac473a68840127ec0fed6a60' || fail(`unexpected provenance: ${entry.slug}`);
  const parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/fleet-content.ts`], {encoding:'utf8'});
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:app/fleet-content.ts`], {encoding:'utf8'});
  !parent.includes(`slug:'${entry.slug}'`) && introduced.includes(`slug:'${entry.slug}'`) || fail(`provenance diff does not prove addition: ${entry.slug}`);
});
const acceptedInSource = sourceRecords.filter(([, slug]) => entrySlugs.has(slug));
acceptedInSource.length === manifest.entries.length || fail('manifest does not cover exactly its accepted source records');
const hasPublishedDateContract = /datePublished\s*:\s*post\.published/.test(routeSource)
  && /property="article:published_time"/.test(routeSource)
  && /<time\s+dateTime=\{post\.published\}>/.test(routeSource);
hasPublishedDateContract || fail('article route lacks published-date metadata');
routeSource.includes('rel="canonical"') && routeSource.includes('href={articleUrl}') || fail('article route lacks canonical URL');
sitemapSource.includes('researchPosts.map(p=>`/research/${p.slug}`)') || fail('research routes are not sitemap eligible');
indexSource.includes('b.published.localeCompare(a.published)') || fail('research index is not newest-first');

const renderedRoot = path.join(root, '.next/server/app/research');
if (fs.existsSync(renderedRoot)) {
  const files = fs.readdirSync(renderedRoot, {withFileTypes:true}).filter((item) => item.isDirectory()).map((item) => path.join(renderedRoot, item.name, 'page.html'));
  manifest.entries.forEach((entry) => {
    const htmlPath = path.join(renderedRoot, `${entry.slug}.html`);
    fs.existsSync(htmlPath) || fail(`missing built route: ${entry.slug}`);
    const html = fs.readFileSync(htmlPath, 'utf8');
    html.includes('2026-08-10') || fail(`built route lacks target date: ${entry.slug}`);
    html.includes(`https://outsourcingsmallbusinesses.com${entry.route}`) || fail(`built route lacks canonical route identity: ${entry.slug}`);
    html.includes(`property=\"article:published_time\"`) || fail(`built route lacks article published metadata: ${entry.slug}`);
    html.includes(`<time dateTime=\"2026-08-10\">`) || fail(`built route lacks visible date: ${entry.slug}`);
  });
}
console.log(`PASS: ${manifest.entries.length} research entries, provenance, source/rendered dates, sitemap eligibility, and newest-first index verified`);
