import fs from 'node:fs';
import crypto from 'node:crypto';
import ts from 'typescript';
import vm from 'node:vm';
const blogManifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog.json','utf8'));
const researchManifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/research.json','utf8'));
const loadTs=(path)=>{const source=fs.readFileSync(path,'utf8'),javascript=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,module={exports:{}};vm.runInNewContext(`(function(exports,module,require){${javascript}\n})(module.exports,module,()=>({}))`,{module});return module.exports;};
const blogPosts=loadTs('app/oct2-blog-batch.ts').octoberTwoBlogBatch;
const decode=(value)=>value.replace(/<[^>]+>/g,' ').replace(/&(?:#x27|apos);/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&#x201C;|&#8220;/g,'“').replace(/&#x201D;|&#8221;/g,'”').replace(/&#x2019;|&#8217;/g,'’').replace(/\s+/g,' ').trim();
const words=(value)=>value.toLowerCase().match(/[a-z0-9']+/g)||[];
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
const blogIndex=fs.readFileSync('.next/server/app/blog.html','utf8');
const researchIndex=fs.readFileSync('.next/server/app/research.html','utf8');
const results=[];
for(const entry of blogManifest.entries){
  const post=blogPosts.find(candidate=>candidate.slug===entry.slug);
  const path=`.next/server/app/blog/${entry.slug}.html`,html=fs.readFileSync(path,'utf8'),url=`https://outsourcingsmallbusinesses.com/blog/${entry.slug}`;
  const article=html.match(/<article class="container guide-article strict-article"[\s\S]*?<\/article>/)?.[0];
  if(!article||!html.includes(`rel="canonical" href="${url}"`)||!html.includes('property="article:published_time" content="2026-10-02"')||!article.includes('dateTime="2026-10-02"'))throw new Error(`render metadata ${entry.slug}`);
  if(!article.includes('src="/filipino-support-workspace.jpg"')||!fs.existsSync('public/filipino-support-workspace.jpg'))throw new Error(`render image ${entry.slug}`);
  if(!sitemap.includes(url)||!blogIndex.includes(`/blog/${entry.slug}`))throw new Error(`index/sitemap ${entry.slug}`);
  if(!post||!article.includes(`<h1>${post.title}</h1>`))throw new Error(`render title ${entry.slug}`);
  const sections=[...article.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)].slice(0,post.sections.length);
  const renderedParagraphs=sections.flatMap(section=>[...section[1].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(match=>decode(match[1])));
  const expectedParagraphs=post.sections.flatMap(section=>section.paragraphs);
  if(renderedParagraphs.length!==expectedParagraphs.length||renderedParagraphs.some((paragraph,index)=>paragraph!==expectedParagraphs[index]))throw new Error(`blog rendered body ${entry.slug}`);
  const body=renderedParagraphs.join(' ');
  const wordCount=words(body).length,contentHash=crypto.createHash('sha256').update(body).digest('hex');
  if(wordCount!==entry.wordCount||contentHash!==entry.contentHash)throw new Error(`render body ${entry.slug}: ${wordCount}/${entry.wordCount} ${contentHash}/${entry.contentHash}`);
  results.push({slug:entry.slug,wordCount,contentHash,canonical:url,image:'/filipino-support-workspace.jpg'});
}
const researchSource=fs.readFileSync('app/oct2-research.ts','utf8');
const researchJs=ts.transpileModule(researchSource,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const researchModule={exports:{}};
vm.runInNewContext(`(function(exports,module,require){${researchJs}\n})(module.exports,module,()=>({}))`,{module:researchModule});
for(const post of researchModule.exports.octoberTwoResearchBatch){
  const entry=researchManifest.entries.find(candidate=>candidate.slug===post.slug),path=`.next/server/app/research/${post.slug}.html`,html=fs.readFileSync(path,'utf8'),url=`https://outsourcingsmallbusinesses.com/research/${post.slug}`;
  const article=html.match(/<article class="section article-shell"[\s\S]*?<\/article>/)?.[0];
  if(!entry||!article||!html.includes(`<link rel="canonical" href="${url}"`)||!html.includes('property="article:published_time" content="2026-10-02"')||!article.includes('dateTime="2026-10-02"'))throw new Error(`research render metadata ${post.slug}`);
  if(!article.includes('<h1>'+post.title+'</h1>')||!article.includes('src="/filipino-support-workspace.jpg"')||!fs.existsSync('public/filipino-support-workspace.jpg'))throw new Error(`research title/image ${post.slug}`);
  if(!sitemap.includes(url)||!researchIndex.includes(`/research/${post.slug}`))throw new Error(`research index/sitemap ${post.slug}`);
  const renderedParagraphs=[...article.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(match=>decode(match[1])).slice(2,2+post.body.length);
  if(renderedParagraphs.length!==post.body.length||renderedParagraphs.some((paragraph,index)=>paragraph!==post.body[index]))throw new Error(`research rendered body ${post.slug}`);
  const wordCount=words(renderedParagraphs.join(' ')).length,contentHash=crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex');
  if(wordCount!==entry.wordCount||contentHash!==entry.contentHash)throw new Error(`research hash/count ${post.slug}`);
  results.push({slug:post.slug,wordCount,contentHash,canonical:url,image:'/filipino-support-workspace.jpg'});
}
console.log(JSON.stringify({count:results.length,blogCount:blogManifest.entries.length,researchCount:researchManifest.entries.length,renderedBodies:true,publicationDate:'2026-10-02',timezone:'Etc/UTC',sitemap:true,index:true,images:true,results},null,2));
