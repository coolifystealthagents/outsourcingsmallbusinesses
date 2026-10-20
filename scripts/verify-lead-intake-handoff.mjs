import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('app/fleet-content.ts', 'utf8');
const route = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const slug = 'august-11-small-business-outsourcing-lead-quality';
const record = source.slice(source.indexOf(`{slug:'${slug}'`), source.indexOf(`{slug:'august-11-small-business-outsourcing-invoice-follow-up'`));

assert.notEqual(record, '', 'the selected research record must exist');
assert.match(record, /modified:'2026-10-20'/, 'the handoff must refresh the selected record date');
assert.match(record, /serviceHandoff:\{href:'\/services\/lead-intake-administration',label:'Plan Philippines lead-intake administration'/, 'the handoff must use the matching Lead Intake Administration service');
assert.match(record, /qualification, consent interpretation, pricing, promises, and sensitive complaint decisions/, 'the record must retain business decision boundaries');
assert.match(route, /post\.serviceHandoff\.href/, 'the shared research renderer must render the data-owned destination');
assert.match(route, /post\.serviceHandoff\.description/, 'the shared research renderer must render the data-owned boundary copy');

console.log('lead-intake handoff contract passed');