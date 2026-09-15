import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const packageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'),
);

test('production build uses the portable Next.js build command', () => {
  assert.equal(packageJson.scripts.build, 'next build');
});
