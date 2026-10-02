import fs from 'node:fs';
import crypto from 'node:crypto';
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog.json','utf8'));
const decode=(value)=>value.replace(/<[^>]+>/g,' ').replace(/&(?:#x27|apos);/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&#x201C;|&#8220;/g,'“').replace(/&#x201D;|&#8221;/g,'”').replace(/&#x2019;|&#8217;/g,'’').replace(/\s+/g,' ').trim();
const words=(value)=>value.toLowerCase().match(/[a-z0-9']+/g)||[];
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
const index=fs.readFileSync('.next/server/app/blog.html','utf8');
const results=[];
for(const entry of manifest.entries){
  const path=`.next/server/app/blog/${entry.slug}.html`,html=fs.readFileSync(path,'utf8'),url=`https://outsourcingsmallbusinesses.com/blog/${entry.slug}`;
  const article=html.match(/<article class="container guide-article strict-article"[\s\S]*?<\/article>/)?.[0];
  if(!article||!html.includes(`rel="canonical" href="${url}"`)||!html.includes('property="article:published_time" content="2026-10-02"')||!article.includes('dateTime="2026-10-02"'))throw new Error(`render metadata ${entry.slug}`);
  if(!article.includes('src="/filipino-support-workspace.jpg"')||!fs.existsSync('public/filipino-support-workspace.jpg'))throw new Error(`render image ${entry.slug}`);
  if(!sitemap.includes(url)||!index.includes(`/blog/${entry.slug}`))throw new Error(`index/sitemap ${entry.slug}`);
  const sections=[...article.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)].slice(0,10);
  const body=sections.flatMap(section=>[...section[1].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(match=>decode(match[1]))).join(' ');
  const wordCount=words(body).length,contentHash=crypto.createHash('sha256').update(body).digest('hex');
  if(wordCount!==entry.wordCount||contentHash!==entry.contentHash)throw new Error(`render body ${entry.slug}: ${wordCount}/${entry.wordCount} ${contentHash}/${entry.contentHash}`);
  results.push({slug:entry.slug,wordCount,contentHash,canonical:url,image:'/filipino-support-workspace.jpg'});
}
console.log(JSON.stringify({count:results.length,renderedBodies:true,publicationDate:'2026-10-02',timezone:'Etc/UTC',sitemap:true,index:true,images:true,results},null,2));
