import fs from 'node:fs';
import crypto from 'node:crypto';

const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-28/blog.json','utf8'));
const batch = fs.readFileSync('app/sep28-blog-batch.ts','utf8');
const inventory = fs.readdirSync('app').filter((name)=>name.endsWith('.ts') && !['sep28-blog-batch.ts','data.ts'].includes(name)).map((name)=>fs.readFileSync(`app/${name}`,'utf8')).join('\n');
const slugs = [...batch.matchAll(/slug:'([^']+)'/g)].map((match)=>match[1]);
const decode = (value) => value.replace(/<[^>]+>/g,' ').replace(/&(?:#x27|apos);/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const words = (value) => value.toLowerCase().match(/[a-z0-9']+/g) || [];
const shingles = (value) => { const tokens=words(value), result=new Set(); for(let i=0;i<=tokens.length-5;i++) result.add(tokens.slice(i,i+5).join(' ')); return result; };
if (manifest.family!=='blog' || manifest.runDate!=='2026-09-28' || manifest.timezone!=='Etc/UTC' || manifest.requiredCount!==12 || slugs.length!==12 || new Set(slugs).size!==12) throw new Error('batch contract mismatch');
const rendered = slugs.map((slug)=>{
  if (inventory.includes(`'${slug}'`) || inventory.includes(`"${slug}"`)) throw new Error(`duplicate slug ${slug}`);
  const html=fs.readFileSync(`.next/server/app/blog/${slug}.html`,'utf8');
  const article=html.match(/<article class="container guide-article strict-article"[\s\S]*?<\/article>/)?.[0];
  if (!article || !article.includes('dateTime="2026-09-28"') || !html.includes(`rel="canonical" href="https://outsourcingsmallbusinesses.com/blog/${slug}"`) || !html.includes('property="article:published_time" content="2026-09-28"')) throw new Error(`render contract ${slug}`);
  const body=[...article.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)].slice(0,19).map((match)=>decode(match[1])).join(' ');
  const wordCount=words(body).length, contentHash=crypto.createHash('sha256').update(body).digest('hex');
  const entry=manifest.entries.find((item)=>item.slug===slug);
  if (!entry || entry.wordCount!==wordCount || entry.contentHash!==contentHash || entry.publicationDate!=='2026-09-28' || entry.commitSha!==null || entry.verifiedAt!==null) throw new Error(`manifest mismatch ${slug}`);
  if (wordCount<900) throw new Error(`depth failure ${slug}`);
  return {slug,body,wordCount,contentHash};
});
let maximum={score:0,left:'',right:''};
for(let i=0;i<rendered.length;i++) for(let j=i+1;j<rendered.length;j++) { const a=shingles(rendered[i].body),b=shingles(rendered[j].body),intersection=[...a].filter((value)=>b.has(value)).length,score=intersection/(a.size+b.size-intersection); if(score>maximum.score) maximum={score,left:rendered[i].slug,right:rendered[j].slug}; }
if(maximum.score>=0.5) throw new Error(`originality failure ${maximum.score}`);
console.log(JSON.stringify({count:rendered.length,publicationDate:'2026-09-28',wordCounts:rendered.map(({slug,wordCount})=>({slug,wordCount})),maximumPairwiseFiveWordShingleJaccard:maximum},null,2));
