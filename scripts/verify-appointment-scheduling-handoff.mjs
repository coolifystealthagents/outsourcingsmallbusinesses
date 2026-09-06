import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/aug13-research-batch.ts', import.meta.url), 'utf8');
const start = source.indexOf("slug:'august-13-research-service-appointment-capacity'");
const end = source.indexOf("slug:'august-13-research-supplier-delay-risk'", start);
assert.ok(start >= 0 && end > start, 'target research record must have valid source boundaries');
const record = source.slice(start, end);

assert.match(record, /modified:'2026-09-06'/, 'the scheduling research must declare its refreshed modified date');
assert.match(record, /serviceHandoff:\{href:'\/services\/local-service-scheduling'/, 'the research must hand readers to the existing scheduling service');
assert.match(record, /label:'Plan Philippines scheduling support'/, 'the service handoff must have its intended reader-facing label');
assert.match(record, /prepare the scheduling queue and flag capacity conflicts/, 'the handoff must state the preparatory work');
assert.match(record, /manager keeps unusual requests, service promises, and compensation decisions/, 'the handoff must retain the owner decision boundary');
assert.doesNotMatch(record, /guarantee|average provider performance/i, 'the handoff must not introduce a performance promise');

console.log('appointment scheduling handoff contract passed');
