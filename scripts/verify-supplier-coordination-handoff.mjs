import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const route = readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const slug = 'august-11-small-business-outsourcing-vendor-coordination';
const start = source.indexOf(`slug:'${slug}'`);
const end = source.indexOf('\n  {slug:', start);
assert.ok(start >= 0 && end > start, 'vendor-update record must have valid source boundaries');
const record = source.slice(start, end);

assert.match(record, /published:'2026-08-12'/, 'the original publication date must remain intact');
assert.match(record, /modified:'2026-09-25'/, 'the handoff must refresh the record modified date');
assert.match(record, /serviceHandoff:\{href:'\/services\/supplier-coordination',label:'Plan Philippines supplier coordination'/, 'the handoff must use the confirmed Supplier Coordination service');
assert.match(record, /chase confirmed delivery updates and keep the supplier record current/, 'the handoff must state the specific preparation work');
assert.match(record, /owner or named manager keeps purchasing, changed terms, substitutes, disputes, and approvals/, 'the handoff must keep controlled supplier decisions with the owner');
assert.doesNotMatch(record, /guarantee|approve a substitute|negotiate/i, 'the handoff must not promise performance or authority');
assert.match(route, /post\.serviceHandoff\.href/, 'the shared research renderer must render the data-owned destination');
assert.match(route, /post\.serviceHandoff\.description/, 'the shared research renderer must render the data-owned boundary copy');

const artifact = path.join(root, '.next/server/app/research', `${slug}.html`);
if (existsSync(artifact)) {
  const html = readFileSync(artifact, 'utf8');
  const main = html.match(/<main\b[^>]*>[\s\S]*<\/main>/i)?.[0] ?? '';
  assert.match(main, /href="\/services\/supplier-coordination"/, 'built route-local main must contain the service handoff');
  assert.match(main, /chase confirmed delivery updates and keep the supplier record current/, 'built route-local main must contain the preparation marker');
  assert.match(html, /article:modified_time/, 'built article must emit modified metadata');
  assert.match(html, /2026-09-25/, 'built article must emit the refreshed modified date');
}

console.log('supplier coordination handoff contract passed');