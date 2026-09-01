import fs from 'node:fs';
import crypto from 'node:crypto';

const fail = (message) => { throw new Error(message); };
const source = fs.readFileSync('app/sep1-content.ts', 'utf8');
const blogPage = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const researchPage = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const blogData = fs.readFileSync('app/data.ts', 'utf8');
const researchData = fs.readFileSync('app/fleet-content.ts', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const blog = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-01/blog.json', 'utf8'));
const research = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-01/research.json', 'utf8'));
const routes = [...blog.entries, ...research.entries];

blog.count === 12 && blog.entries.length === 12 || fail('Blog count must be exactly 12');
research.count === 5 && research.entries.length === 5 || fail('Research count must be exactly 5');
routes.length === 17 && new Set(routes).size === 17 || fail('All 17 routes must be unique');
source.includes("const d = '2026-09-01'") || fail('Structured source date missing');
blogData.includes('...septemberOneBlogBatch.map') || fail('Blog index registration missing');
researchData.includes('...septemberOneResearchBatch') || fail('Research index registration missing');
sitemap.includes('blogPosts.map') && sitemap.includes('researchPosts.map') || fail('Sitemap collection mapping missing');
blogPage.includes('September 1, 2026') && blogPage.includes('datePublished:post.publicationDate') || fail('Blog visible/structured date binding missing');
researchPage.includes('formatPublicDate(post.published)') && researchPage.includes('datePublished:post.published') || fail('Research visible/structured date binding missing');

const slugs = routes.map((route) => route.split('/').pop());
for (const slug of slugs) source.includes(`'${slug}'`) || fail(`Missing source identity: ${slug}`);
const titles = [
  ...[...source.matchAll(/title:'([^']+)'/g)].map((match) => match[1]),
  ...[...source.matchAll(/^  research\('[^']+','([^']+)'/gm)].map((match) => match[1])
];
titles.length === 17 && new Set(titles).size === 17 || fail('Titles must be unique');

const imagePaths = [...source.matchAll(/imagePath:asset\('([^']+)'\)/g)].map((match) => `public/aug31-heroes/${match[1]}.png`);
imagePaths.length === 12 || fail('Expected 12 direct Blog image bindings');
for (const image of imagePaths) fs.existsSync(image) || fail(`Existing approved asset missing: ${image}`);
for (const image of ['content-request-scorecard','editorial-decision-register','article-brief-version-control','article-release-checklist','daily-content-retrospective']) {
  fs.existsSync(`public/aug31-heroes/${image}.png`) || fail(`Existing Research asset missing: ${image}`);
}

const blogBodies = source.split("  {slug:'").slice(1, 13).map((record) => record.split("\n  ]},")[0]);
blogBodies.length === 12 || fail(`Expected 12 Blog bodies, found ${blogBodies.length}`);
const researchRows = [...source.matchAll(/research\('([^']+)'[\s\S]*?\),?\n/g)].map((match) => match[0]);
researchRows.length === 5 || fail(`Expected 5 Research bodies, found ${researchRows.length}`);
const hashes = [...blogBodies, ...researchRows].map((body) => crypto.createHash('sha256').update(body).digest('hex'));
new Set(hashes).size === 17 || fail('All 17 content hashes must be unique');

console.log('PASS: exactly 12 Blog + 5 Research; unique titles, slugs, routes, and content hashes; September 1 visible/schema bindings; index/sitemap registration; approved existing assets only');
