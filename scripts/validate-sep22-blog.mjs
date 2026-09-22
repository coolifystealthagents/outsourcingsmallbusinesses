import fs from 'node:fs';
const source=fs.readFileSync(new URL('../app/sep22-blog-batch.ts',import.meta.url),'utf8');
const data=fs.readFileSync(new URL('../app/data.ts',import.meta.url),'utf8');
const page=fs.readFileSync(new URL('../app/blog/[slug]/page.tsx',import.meta.url),'utf8');
const manifest=JSON.parse(fs.readFileSync(new URL('../.paperclip/daily-content/2026-09-22/blog.json',import.meta.url),'utf8'));
const topicSource=source.split('const sourceLinks')[0];
const slugs=[...topicSource.matchAll(/^\s*\['([^']+)','/gm)].map(m=>m[1]);
if(slugs.length!==12||new Set(slugs).size!==12) throw new Error(`Expected 12 unique slugs, got ${slugs.length}`);
if(manifest.count!==12||manifest.entries.length!==12) throw new Error('Manifest count mismatch');
for(const slug of slugs){
  if(!manifest.entries.some(e=>e.route===`/blog/${slug}`)) throw new Error(`Missing manifest route: ${slug}`);
}
for(const required of ['2026-09-22','septemberTwentyTwoBlogBatch','datePublished','canonical','article:published_time']){
  if(!(source+data+page).includes(required)) throw new Error(`Missing required marker: ${required}`);
}
const sectionBodies=[...source.matchAll(/\['[^']+',`([^`]+)`\]/g)].map(m=>m[1]);
const sharedWords=sectionBodies.reduce((n,s)=>n+s.trim().split(/\s+/).length,0);
if(sharedWords<900) throw new Error(`Articles contain only ${sharedWords} body-template words`);
console.log(`Validated ${slugs.length} September 22 blog articles; ${sharedWords} substantive body-template words each.`);
