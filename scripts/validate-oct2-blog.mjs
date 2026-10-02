import fs from 'node:fs';
import ts from 'typescript';
import vm from 'node:vm';
import crypto from 'node:crypto';
const load=(file)=>{const source=fs.readFileSync(file,'utf8'),javascript=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,module={exports:{}};vm.runInNewContext(`(function(exports,module){${javascript}\n})(module.exports,module)`,{module});return module.exports;};
const posts=load('app/oct2-blog-batch.ts').octoberTwoBlogBatch;
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog.json','utf8'));
const tokens=(value)=>value.toLowerCase().match(/[a-z0-9']+/g)||[];
const shingles=(value)=>{const w=tokens(value),s=new Set();for(let i=0;i+4<w.length;i++)s.add(w.slice(i,i+5).join(' '));return s;};
if(manifest.family!=='blog'||manifest.runDate!=='2026-10-02'||manifest.timezone!=='Etc/UTC'||manifest.requiredCount!==12||posts.length!==12||new Set(posts.map(p=>p.slug)).size!==12)throw new Error('batch contract mismatch');
const inventory=fs.readdirSync('app').filter(name=>name.endsWith('.ts')&&!['oct2-blog-batch.ts','data.ts'].includes(name)).map(name=>fs.readFileSync(`app/${name}`,'utf8')).join('\n');
const paragraphs=new Map(),result=[];
for(const post of posts){if(inventory.includes(`'${post.slug}'`)||inventory.includes(`"${post.slug}"`))throw new Error(`duplicate slug ${post.slug}`);const body=post.sections.flatMap(s=>s.paragraphs).join(' '),wordCount=tokens(body).length,contentHash=crypto.createHash('sha256').update(body).digest('hex'),entry=manifest.entries.find(e=>e.slug===post.slug);if(wordCount<900||post.publicationDate!=='2026-10-02'||post.sources.length<3)throw new Error(`editorial contract ${post.slug}`);if(!entry||entry.wordCount!==wordCount||entry.contentHash!==contentHash||entry.commitSha!==null||entry.verifiedAt!==null)throw new Error(`manifest ${post.slug}`);for(const section of post.sections)for(const paragraph of section.paragraphs){const normalized=paragraph.toLowerCase().replace(/\s+/g,' ').trim();if(paragraphs.has(normalized))throw new Error(`repeated paragraph ${post.slug} and ${paragraphs.get(normalized)}`);paragraphs.set(normalized,post.slug);}result.push({slug:post.slug,wordCount,contentHash,body,shingles:shingles(body)});}
let maximum={score:0,left:'',right:''};for(let i=0;i<result.length;i++)for(let j=i+1;j<result.length;j++){const a=result[i].shingles,b=result[j].shingles,intersection=[...a].filter(x=>b.has(x)).length,score=intersection/(a.size+b.size-intersection);if(score>maximum.score)maximum={score,left:result[i].slug,right:result[j].slug};}if(maximum.score>=.5)throw new Error(`overlap ${JSON.stringify(maximum)}`);
console.log(JSON.stringify({count:12,publicationDate:'2026-10-02',wordCounts:result.map(({slug,wordCount})=>({slug,wordCount})),maximumPairwiseFiveWordShingleJaccard:maximum,repeatedOriginalParagraphs:0,sharedArgumentReview:manifest.validation.sharedArgumentReview,qualitativeApproved:manifest.validation.qualitativeApproved,result:result.map(({body,shingles,...entry})=>entry)},null,2));
if(manifest.validation.qualitativeApproved!==true)throw new Error('qualitative originality gate remains open');
