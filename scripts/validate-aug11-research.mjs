import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const index = fs.readFileSync(path.join(root, 'app/research/page.tsx'), 'utf8');
const route = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const slugs = [
  'august-11-customer-service-outsourcing-evidence', 'august-11-outsourcing-small-business-data-security',
  'august-11-small-business-outsourcing-bookkeeping-review', 'august-11-small-business-outsourcing-lead-quality',
  'august-11-small-business-outsourcing-invoice-follow-up', 'august-11-small-business-outsourcing-order-support',
  'august-11-small-business-outsourcing-scheduling-capacity', 'august-11-small-business-outsourcing-vendor-coordination',
  'august-11-small-business-outsourcing-review-responses', 'august-11-small-business-outsourcing-quality-sampling'
];
const fail = (m) => { throw new Error(m); };
slugs.length === 10 && new Set(slugs).size === 10 || fail('expected exactly 10 unique August 11 slugs');
const publishedDates = new Set();
for (const slug of slugs) {
  const record = source.match(new RegExp(`\\{slug:'${slug}',[\\s\\S]*?published:'([^']+)'`));
  record || fail(`missing direct date binding: ${slug}`);
  publishedDates.add(record[1]);
  (source.match(new RegExp(`slug:'${slug}'`, 'g')) || []).length === 1 || fail(`duplicate source record: ${slug}`);
}
publishedDates.size === 1 || fail('August 11 batch must retain one shared published date');
const [publishedDate] = publishedDates;
const bookkeepingSlug = 'august-11-small-business-outsourcing-bookkeeping-review';
const bookkeepingRecord = source.match(new RegExp(`\\{slug:'${bookkeepingSlug}',[\\s\\S]*?(?=\\n  \\{slug:|\\n\\{slug:)`));
bookkeepingRecord || fail('missing bookkeeping research record');
bookkeepingRecord[0].includes("modified:'2026-09-02'") || fail('bookkeeping handoff must refresh its modified date');
bookkeepingRecord[0].includes("serviceHandoff:{href:'/services/small-business-bookkeeping',label:'Plan Philippines bookkeeping support'") || fail('bookkeeping handoff must use the confirmed service destination and label');
bookkeepingRecord[0].includes('You keep approval, payment, filing, and accounting judgment with the right owner.') || fail('bookkeeping handoff must retain the owner decision boundary');
index.includes('b.published.localeCompare(a.published)||a.slug.localeCompare(b.slug)') || fail('index lacks deterministic newest-first ordering');
const hasPublishedAndModifiedDateContract = /const modified\s*=\s*post\.modified\s*\?\?\s*post\.published/.test(route)
  && /datePublished\s*:\s*post\.published/.test(route)
  && /dateModified\s*:\s*modified/.test(route)
  && /modifiedTime\s*:\s*modified/.test(route)
  && /article:modified_time/.test(route)
  && /<time\s+dateTime=\{post\.published\}>/.test(route);
hasPublishedAndModifiedDateContract || fail('route lacks published and modified date fields');
sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`)') || fail('research sitemap eligibility missing');
const built = path.join(root, '.next/server/app/research');
if (fs.existsSync(built)) {
  for (const slug of slugs) {
    const candidates = [path.join(built, slug, 'page.html'), path.join(built, `${slug}.html`)];
    const htmlPath = candidates.find(fs.existsSync);
    htmlPath || fail(`missing built route: ${slug}`);
    const html = fs.readFileSync(htmlPath, 'utf8');
    html.includes(publishedDate) && html.includes('article:published_time') && html.includes(`https://outsourcingsmallbusinesses.com/research/${slug}`) || fail(`built metadata/canonical failure: ${slug}`);
  }
}
console.log(`PASS: 10 August 11 research records with shared ${publishedDate} date bindings, route metadata, sitemap eligibility, and deterministic index ordering verified`);
