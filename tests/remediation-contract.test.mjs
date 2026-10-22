import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

function reviewRecords() {
  const source = read('app/reviews.ts');
  return [...source.matchAll(/name:\s*'([^']+)'/g)].map((match) => match[1]);
}

test('primary navigation contains exactly the required three destinations', () => {
  const source = read('app/site-navigation.tsx');
  const linksBlock = source.match(/const links = \[([\s\S]*?)\];/)?.[1] || '';
  const links = [...linksBlock.matchAll(/href:\s*'([^']+)',\s*label:\s*'([^']+)'/g)].map((match) => [match[1], match[2]]);
  assert.deepEqual(links, [['/', 'Home'], ['/services', 'Services'], ['/contact-us', 'Contact Us']]);
  assert.match(source, /aria-expanded=\{open\}/);
  assert.match(source, /aria-controls="mobile-navigation"/);
  assert.match(source, /event\.key === 'Escape'/);
});

test('shared header is sticky and header and footer use official parent attribution', () => {
  const components = read('app/components.tsx');
  const styles = read('app/globals.css');
  assert.equal((components.match(/<PoweredBy \/>/g) || []).length, 2);
  assert.match(components, /Powered by/);
  assert.match(components, /stealth-agents-logo\.png/);
  assert.match(styles, /\.fleet-nav\{position:sticky;top:0/);
});

test('approved StealthAgents review register has at least ten unique records', () => {
  const names = reviewRecords();
  assert.ok(names.length >= 10);
  assert.equal(new Set(names).size, names.length);
  assert.match(read('app/reviews.ts'), /Approved first-party Stealth Agents client review register/);
});

test('contact page has the required first fold, review marquee, and team credibility section', () => {
  const page = read('app/contact-us/page.tsx');
  const css = read('app/contact-us/contact.module.css');
  assert.match(page, /StealthAgents reviews/);
  assert.match(page, /★★★★★/);
  assert.match(page, /StandardContactForm endpoint="\/api\/contact"/);
  assert.match(page, /stealth-agents-team-bacolod\.jpg/);
  assert.match(page, /stealth-agents-logo\.png/);
  assert.match(page, /Official team, Bacolod/);
  assert.doesNotMatch(page, /go\.oncehub\.com/);
  assert.match(css, /review-marquee/);
  assert.match(css, /prefers-reduced-motion:reduce/);
});

test('lead, scheduler, and booking-confirmation routes preserve the three-step journey', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const thanks = read('app/thank-you/page.tsx');
  const confirmed = read('app/thanks-whats-next/page.tsx');
  assert.match(form, /submissionDestination\(inquiryType\)/);
  assert.match(thanks, /go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(confirmed, /Booking confirmed/);
  assert.match(confirmed, /robots: \{ index: false, follow: false \}/);
});

test('article enhancement builds a real TOC, useful sidebar, active state, and route-safe cleanup', () => {
  const source = read('app/article-enhancements.tsx');
  const styles = read('app/globals.css');
  assert.match(source, /querySelectorAll<HTMLHeadingElement>\('h2'\)/);
  assert.match(source, /Table of contents/);
  assert.match(source, /Plan the work lane/);
  assert.match(source, /IntersectionObserver/);
  assert.match(source, /aria-current/);
  assert.match(source, /usePathname/);
  assert.match(styles, /\.article-sidebar\{position:sticky/);
  assert.match(styles, /@media\(max-width:920px\)[\s\S]*?\.article-sidebar\{position:static/);
});

test('every generated service detail uses the substantive shared service system', () => {
  const source = read('app/services/[slug]/page.tsx');
  for (const contract of ['buyerProblem', 'service.tasks', 'service.deliverables', 'service.tools', 'service.boundaries', 'service.launch', 'service.measures', 'service.faqs']) assert.ok(source.includes(contract), contract);
  assert.match(source, /service\.illustration/);
  assert.match(source, /href="\/contact-us"/);
});

test('canonical proxy preserves paths and queries while normalizing public hosts and schemes', () => {
  const source = read('proxy.ts');
  assert.match(source, /www\.\$\{CANONICAL_HOST\}/);
  assert.match(source, /cf-visitor/);
  assert.match(source, /x-forwarded-proto/);
  assert.match(source, /x-forwarded-host/);
  assert.match(source, /target\.port = ''/);
  assert.match(source, /NextResponse\.redirect\(target, 308\)/);
  assert.match(source, /if \(!PUBLIC_HOSTS\.has\(publicHost\)\) return NextResponse\.next\(\)/);
});

test('required security headers are configured globally', () => {
  const source = read('next.config.mjs');
  for (const header of ['Strict-Transport-Security', 'Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.ok(source.includes(header), header);
});

test('homepage commercial layout has no decorative zero-padded labels', () => {
  const source = read('app/page.tsx');
  assert.doesNotMatch(source, />0[1-9]</);
  assert.doesNotMatch(source, /0\{index \+ 1\}/);
});

test('the same subsidiary mark is used by header, footer, favicon, and confirmation pages', () => {
  const components = read('app/components.tsx');
  assert.equal((components.match(/<LogoMark \/>/g) || []).length, 2);
  assert.match(components, /src="\/logo\.svg"/);
  assert.ok(fs.existsSync(path.join(root, 'app/icon.svg')));
  assert.match(read('app/thanks-whats-next/page.tsx'), /src="\/logo\.svg"/);
});

test('branded not-found route offers useful recovery links', () => {
  const source = read('app/not-found.tsx');
  assert.match(source, /<h1>/);
  assert.match(source, /href="\/"/);
  assert.match(source, /href="\/services"/);
});

test('analytics funnel still names all three canonical conversion routes', () => {
  const source = read('app/layout.tsx');
  for (const route of ['/contact-us', '/thank-you', '/thanks-whats-next']) assert.ok(source.includes(route), route);
  assert.match(source, /acrtracking\.stealthagents\.us\/v1\/tracker\.js/);
});
