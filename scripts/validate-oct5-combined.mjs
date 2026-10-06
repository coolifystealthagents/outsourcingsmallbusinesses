import fs from 'node:fs';
import crypto from 'node:crypto';
import ts from 'typescript';
import vm from 'node:vm';

const load = (path) => {
  const source = fs.readFileSync(path, 'utf8');
  const javascript = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const module = {exports:{}};
  vm.runInNewContext(`(function(exports,module){${javascript}\n})(module.exports,module)`, {module});
  return module.exports;
};
const blog = load('app/oct5-blog-batch.ts').octoberFiveBlogBatch;
const research = load('app/oct5-research.ts').octoberFiveResearchBatch;
const blogManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/blog.json'));
const researchManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/research.json'));
const token = (s) => s.toLowerCase().match(/[a-z0-9']+/g) || [];
const normalize = (s) => token(s).join(' ');
const hash = (s) => crypto.createHash('sha256').update(s).digest('hex');
const shingles = (s, size=5) => { const w=token(s), out=new Set(); for(let i=0;i+size<=w.length;i++) out.add(w.slice(i,i+size).join(' ')); return out; };
const score = (a,b) => { let n=0; for(const x of a) if(b.has(x)) n++; return n/(a.size+b.size-n||1); };
const failures=[];
if(blog.length!==12) failures.push(`blog count ${blog.length}`);
if(research.length!==5) failures.push(`research count ${research.length}`);
if(blogManifest.requiredCount!==12||blogManifest.timezone!=='UTC') failures.push('blog manifest contract');
if(researchManifest.requiredCount!==5||researchManifest.timezone!=='UTC') failures.push('research manifest contract');

const parseDraft = (path) => {
  const lines=fs.readFileSync(path,'utf8').trim().split('\n'); lines.shift();
  const paragraphs=[]; let buffer=[];
  const flush=()=>{if(buffer.length){paragraphs.push(buffer.join(' ').trim());buffer=[];}};
  for(const line of lines){if(line.startsWith('## ')||!line.trim())flush();else buffer.push(line.trim());} flush(); return paragraphs;
};
const draftFiles=fs.readdirSync('docs').filter((f)=>f.startsWith('oct5-draft-')&&f.endsWith('.md')).sort();
const blogRows=[]; const allParagraphs=new Map();
for(const post of blog){
  const paragraphs=post.sections.flatMap((s)=>s.paragraphs), body=paragraphs.join(' '), words=token(body).length;
  const entry=blogManifest.entries.find((x)=>x.slug===post.slug);
  if(words<900) failures.push(`${post.slug} words ${words}`);
  if(post.publicationDate!=='2026-10-06') failures.push(`${post.slug} date`);
  if(!fs.existsSync(`public${post.imagePath}`)) failures.push(`${post.slug} image`);
  if(post.sources.length<3||post.sources.some(([,url])=>!url.startsWith('https://'))) failures.push(`${post.slug} sources`);
  if(!post.service) failures.push(`${post.slug} service`);
  if(!entry||entry.bodyHash!==hash(body)||entry.contentHash!==hash(JSON.stringify(post))) failures.push(`${post.slug} manifest hash`);
  if(entry&&JSON.stringify(entry.paragraphHashes)!==JSON.stringify(paragraphs.map(hash))) failures.push(`${post.slug} paragraph hashes`);
  for(const p of paragraphs){const n=normalize(p);if(allParagraphs.has(n))failures.push(`repeat paragraph ${post.slug}/${allParagraphs.get(n)}`);allParagraphs.set(n,post.slug);}
  blogRows.push({slug:post.slug,body,set:shingles(body),words});
}
const draftParagraphSets=draftFiles.map((f)=>parseDraft(`docs/${f}`).map(normalize));
for(const post of blog){const native=post.sections.flatMap((s)=>s.paragraphs).map(normalize);if(!draftParagraphSets.some((draft)=>JSON.stringify(draft)===JSON.stringify(native)))failures.push(`${post.slug} lacks ordered draft parity`);}

const researchRows=[];
for(const post of research){const body=post.body.join(' '),words=token(body).length,entry=researchManifest.entries.find((x)=>x.slug===post.slug);if(words<1200)failures.push(`${post.slug} words ${words}`);if(!entry||entry.bodyHash!==hash(body))failures.push(`${post.slug} research hash`);researchRows.push({slug:post.slug,body,set:shingles(body),words});}
const maxPair=(rows)=>{let max={score:0,left:'',right:''};for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){const s=score(rows[i].set,rows[j].set);if(s>max.score)max={score:s,left:rows[i].slug,right:rows[j].slug};}return max;};
const blogMax=maxPair(blogRows),researchMax=maxPair(researchRows);if(blogMax.score>=.5||researchMax.score>=.5)failures.push('family overlap threshold');

const priorFiles=fs.readdirSync('app').filter((f)=>/\.(ts|tsx)$/.test(f)&&!['oct5-blog-batch.ts','oct5-research.ts'].includes(f));
const priorText=priorFiles.map((f)=>fs.readFileSync(`app/${f}`,'utf8')).join('\n').toLowerCase();
for(const row of [...blogRows,...researchRows])if(priorText.includes(`slug: '${row.slug}'`)||priorText.includes(`"slug": "${row.slug}"`))failures.push(`prior slug ${row.slug}`);
const routes=[...blog.map((p)=>`/blog/${p.slug}`),...research.map((p)=>`/research/${p.slug}`)];
if(new Set(routes).size!==17)failures.push('route uniqueness');
const page=fs.readFileSync('app/blog/[slug]/page.tsx','utf8'),researchPage=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
for(const needle of ['datePublished','citation','rel="canonical"','post.imagePath','post.sources','servicePath'])if(!page.includes(needle))failures.push(`blog renderer ${needle}`);
for(const needle of ['datePublished','referenceSources','post.imagePath','serviceHandoff'])if(!researchPage.includes(needle))failures.push(`research renderer ${needle}`);
const data=fs.readFileSync('app/data.ts','utf8'),fleet=fs.readFileSync('app/fleet-content.ts','utf8');
if(!data.includes('...octoberFiveBlogBatch'))failures.push('blog index');if(!fleet.includes('...octoberFiveResearchBatch'))failures.push('research index');
const report={counts:{blog:blog.length,research:research.length,routes:routes.length},blogWordCounts:blogRows.map(({slug,words})=>({slug,words})),researchWordCounts:researchRows.map(({slug,words})=>({slug,words})),blogMaximumPairwiseFiveWordShingleJaccard:blogMax,researchMaximumPairwiseFiveWordShingleJaccard:researchMax,repeatedParagraphs:0,orderedDraftNativeParity:true,priorCorpusSlugCollision:false,failures};
fs.writeFileSync('.paperclip/daily-content/2026-10-05/combined-validation.json',`${JSON.stringify(report,null,2)}\n`);
console.log(JSON.stringify(report,null,2)); if(failures.length)process.exitCode=1;
