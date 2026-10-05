import fs from 'node:fs';
import crypto from 'node:crypto';
import ts from 'typescript';
import vm from 'node:vm';
import sharp from 'sharp';

const origin=process.env.RENDER_ORIGIN||'http://127.0.0.1:3015';
const load=(path)=>{const source=fs.readFileSync(path,'utf8'),javascript=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,module={exports:{}};vm.runInNewContext(`(function(exports,module){${javascript}\n})(module.exports,module)`,{module});return module.exports;};
const blog=load('app/oct5-blog-batch.ts').octoberFiveBlogBatch,research=load('app/oct5-research.ts').octoberFiveResearchBatch;
const decode=(s)=>s.replace(/<[^>]+>/g,'').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
const hash=(s)=>crypto.createHash('sha256').update(s).digest('hex');
const failures=[],routeEvidence=[],destinations=new Set();
for(const [family,posts] of [['blog',blog],['research',research]])for(const post of posts){
  const path=`/${family}/${post.slug}`,response=await fetch(`${origin}${path}`),html=await response.text();
  if(response.status!==200)failures.push(`${path} status ${response.status}`);
  const expected=family==='blog'?post.sections.flatMap((s)=>s.paragraphs):post.body;
  const rendered=[...html.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)].map((m)=>decode(m[1]));
  let cursor=-1;const matched=[];for(const paragraph of expected){const index=rendered.findIndex((x,i)=>i>cursor&&x===paragraph);if(index<0){failures.push(`${path} missing exact paragraph ${hash(paragraph).slice(0,12)}`);break;}cursor=index;matched.push(rendered[index]);}
  const body=expected.join(' '),renderedBody=matched.join(' ');
  if(matched.length!==expected.length||hash(renderedBody)!==hash(body))failures.push(`${path} ordered body hash mismatch`);
  const canonical=`https://outsourcingsmallbusinesses.com${path}`;
  for(const needle of [post.title,'2026-10-05',canonical,post.imagePath,'application/ld+json'])if(!html.includes(needle))failures.push(`${path} missing ${needle}`);
  for(const match of html.matchAll(/<a[^>]+href="([^"]+)"/g)){const href=match[1];if(href.startsWith('/services/')||href.startsWith('https://'))destinations.add(href);}
  routeEvidence.push({family,slug:post.slug,status:response.status,paragraphs:matched.length,bodyHash:hash(renderedBody),canonical,image:post.imagePath,date:'2026-10-05'});
}
for(const path of ['/blog','/research','/sitemap.xml']){const r=await fetch(`${origin}${path}`),text=await r.text();if(r.status!==200)failures.push(`${path} status ${r.status}`);for(const post of path==='/blog'?blog:path==='/research'?research:[...blog,...research])if(!text.includes(post.slug))failures.push(`${path} missing ${post.slug}`);}
for(const href of destinations){const target=href.startsWith('/')?`${origin}${href}`:href;try{const r=await fetch(target,{redirect:'follow',headers:{'user-agent':'Mozilla/5.0'}});if(r.status>=400)failures.push(`destination ${href} status ${r.status}`);}catch(error){failures.push(`destination ${href} ${error.message}`);}}
const imageResponse=await fetch(`${origin}/filipino-support-workspace.jpg`),imageBytes=Buffer.from(await imageResponse.arrayBuffer()),metadata=await sharp(imageBytes).metadata();
if(imageResponse.status!==200||!imageResponse.headers.get('content-type')?.startsWith('image/jpeg')||imageBytes[0]!==0xff||imageBytes[1]!==0xd8||metadata.format!=='jpeg'||!metadata.width||!metadata.height)failures.push('image response/signature/decode');
const report={origin,count:routeEvidence.length,routeEvidence,image:{status:imageResponse.status,mime:imageResponse.headers.get('content-type'),signature:imageBytes.subarray(0,3).toString('hex'),format:metadata.format,width:metadata.width,height:metadata.height},checkedDestinations:[...destinations],failures};
fs.writeFileSync('.paperclip/daily-content/2026-10-05/rendered-validation.json',`${JSON.stringify(report,null,2)}\n`);console.log(JSON.stringify({count:report.count,image:report.image,destinationCount:destinations.size,failures},null,2));if(failures.length)process.exitCode=1;
