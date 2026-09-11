import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

test('all commercial navigation uses the canonical free call route', () => {
  const components = read('app/components.tsx');
  assert.match(components, /href="\/contact-us"/);
  assert.match(components, />Book a free call</);
  assert.doesNotMatch(components, /href="\/contact"/);
  assert.doesNotMatch(components, /href="\/pricing"/);
});

test('legacy conversion and duplicate utility routes permanently redirect', () => {
  for (const [file, destination] of [
    ['app/contact/page.tsx', '/contact-us'],
    ['app/pricing/page.tsx', '/contact-us'],
    ['app/cancellation/page.tsx', '/cancellation-policy'],
    ['app/blog/top-25-outsourcing-companies-small-business/page.tsx', '/blog'],
  ]) {
    const source = read(file);
    assert.match(source, /permanentRedirect/);
    assert.ok(source.includes(`'${destination}'`) || source.includes(`"${destination}"`), `${file} must redirect to ${destination}`);
  }
});

test('canonical contact page has site chrome, H1, relevant illustration, and no testimonials', () => {
  const contact = read('app/contact-us/page.tsx');
  assert.match(contact, /<Header\s*\/>/);
  assert.match(contact, /<Footer\s*\/>/);
  assert.match(contact, /<h1>/);
  assert.match(contact, /small-business-role-planning\.svg/);
  assert.match(contact, /<StandardContactForm/);
  assert.doesNotMatch(contact, /TestimonialsRail|testimonial/i);
});

test('public thank-you experience contains no unsupported social proof or visible parent brand', () => {
  const thankYou = read('app/thank-you/page.tsx');
  assert.doesNotMatch(thankYou, /TestimonialsRail|testimonial/i);
  const withoutAllowedInfrastructureUrl = thankYou.replace(/https:\/\/go\.oncehub\.com\/StealthAgentsTeam[^"']*/g, 'ALLOWED_ONCEHUB_URL');
  assert.doesNotMatch(withoutAllowedInfrastructureUrl, /Stealth\s*Agents|StealthAgents/i);
});

test('service inventory includes major buyer categories and resolved legacy targets', () => {
  const services = read('app/service-data.ts');
  for (const slug of [
    'operations-support',
    'customer-support',
    'administrative-support',
    'reporting-quality-assurance',
    'finance-accounting',
  ]) assert.ok(services.includes(`slug: '${slug}'`), `missing ${slug}`);
  for (const field of ['buyerProblem', 'tasks', 'deliverables', 'tools', 'boundaries', 'launch', 'measures', 'faqs', 'illustration']) {
    assert.ok(services.includes(`${field}:`), `missing rich field ${field}`);
  }
});

test('every service illustration resolves to a public asset', () => {
  const services = read('app/service-data.ts');
  const illustrations = [...services.matchAll(/(?:illustration:|supportIllustration\s*=)\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
  assert.ok(illustrations.length >= 6, 'expected major-service and shared focused-service illustration mappings');
  for (const illustration of illustrations) {
    assert.ok(fs.existsSync(path.join(root, 'public', illustration.replace(/^\//, ''))), `missing service illustration: ${illustration}`);
  }
});

test('service template renders substantive, visual, conversion-ready sections', () => {
  const servicePage = read('app/services/[slug]/page.tsx');
  for (const token of ['buyerProblem', 'deliverables', 'tools', 'boundaries', 'measures', 'faqs', 'illustration']) {
    assert.ok(servicePage.includes(`service.${token}`), `service template does not render ${token}`);
  }
  assert.match(servicePage, /href="\/contact-us"/);
  assert.match(servicePage, /Book a free call/);
});

test('homepage service cards lead to individual major-service pages', () => {
  const home = read('app/page.tsx');
  for (const slug of ['operations-support', 'customer-support', 'administrative-support', 'reporting-quality-assurance']) {
    assert.ok(home.includes(`/services/${slug}`), `homepage missing service link ${slug}`);
  }
  assert.doesNotMatch(home, /className="service-card" href="\/services"/);
});

test('sitemap publishes only canonical conversion and policy routes', () => {
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.match(sitemap, /contact-us/);
  for (const forbidden of ["'/contact'", "'/pricing'", "'/cancellation'"]) {
    assert.ok(!sitemap.includes(forbidden), `sitemap contains ${forbidden}`);
  }
});

test('tracking and lead fallback use only the canonical form path', () => {
  const layout = read('app/layout.tsx');
  const leadRoute = read('app/api/contact/route.ts');
  assert.ok(layout.includes("path:'/contact-us'"));
  assert.ok(!layout.includes("path:'/contact'"));
  assert.ok(leadRoute.includes('href="/contact-us"'));
  assert.ok(leadRoute.includes("new URL('/contact-us'"));
});

test('reader-facing banners do not promote retired comparison or legacy contact routes', () => {
  const listing = read('app/blog/blog-listing.tsx');
  assert.doesNotMatch(listing, /FeaturedComparison|top-25-outsourcing-companies-small-business/);
  for (const file of ['app/rich-blog-data.ts', 'app/blog-banner-profile.json']) {
    assert.doesNotMatch(read(file), /["']\/contact["']/, `${file} contains a legacy contact destination`);
  }
});

test('lead route preserves the canonical form referral selection', () => {
  const leadRoute = read('app/api/contact/route.ts');
  assert.match(leadRoute, /text\(form,'referral'/);
  assert.match(leadRoute, /text\(form,'howTheyHeard'/);
  assert.match(leadRoute, /text\(form,'referralSpecify'/);
  assert.doesNotMatch(leadRoute, /referral=text\(form,'source'/);
});

test('reader-facing source has no unsupported testimonial component imports', () => {
  const appRoot = path.join(root, 'app');
  const offenders = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else if (/\.(?:ts|tsx)$/.test(entry.name) && /TestimonialsRail/.test(fs.readFileSync(absolute, 'utf8'))) offenders.push(path.relative(root, absolute));
    }
  };
  walk(appRoot);
  assert.deepEqual(offenders, []);
});

test('large static export uses deterministic build concurrency', () => {
  const config = read('next.config.mjs');
  assert.match(config, /experimental:\s*\{[\s\S]*cpus:\s*1/);
  assert.match(config, /turbopack:\s*\{[\s\S]*root:\s*process\.cwd\(\)/);
});