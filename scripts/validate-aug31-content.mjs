import fs from 'node:fs';
const source = fs.readFileSync('app/aug31-content.ts', 'utf8');
const blog = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-08-31/blog.json', 'utf8'));
const research = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-08-31/research.json', 'utf8'));
const fail = (message) => { throw new Error(message); };
blog.count === 12 && blog.entries.length === 12 || fail('Blog count must be exactly 12');
research.count === 5 && research.entries.length === 5 || fail('Research count must be exactly 5');
new Set([...blog.entries, ...research.entries]).size === 17 || fail('Routes must be unique');
source.includes("const d = '2026-08-31'") || fail('Source date missing');
for (const route of [...blog.entries, ...research.entries]) {
  const slug = route.split('/').pop();
  source.includes(`'${slug}'`) || fail(`Missing source record ${slug}`);
  fs.existsSync(`public/aug31-heroes/${slug.replace('outsourcing-small-business-', '')}.png`) ||
    fs.existsSync(`public/aug31-heroes/${slug}.png`) || fail(`Missing hero ${slug}`);
}
for (const value of Object.values({...blog.validation, ...research.validation})) value === 'complete' || value.endsWith('-complete') || fail('Incomplete manifest validation');
console.log('PASS: exactly 12 Blog and 5 Research routes, August 31 source date, unique identities, manifests, and 17 original hero assets');
