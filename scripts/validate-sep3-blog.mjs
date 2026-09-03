import fs from 'node:fs';
import ts from 'typescript';
import vm from 'node:vm';
const file='app/sep3-blog-batch.ts';
const source=fs.readFileSync(file,'utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-03/blog.json','utf8'));
const fail=(m)=>{throw new Error(m)};
if(manifest.campaignDate!=='2026-09-03'||manifest.family!=='blog'||manifest.count!==12||manifest.entries.length!==12)fail('manifest mismatch');
if(new Set(manifest.entries.map(e=>e.route)).size!==12)fail('duplicate route');
if(!source.includes("const publicationDate = '2026-09-03' as const"))fail('direct date binding missing');
if(/[—–]| -- /.test(source))fail('humanizer dash rule failed');
for(const e of manifest.entries){if(e.sourcePaths.length!==1||e.sourcePaths[0]!==file)fail('source path mismatch');const slug=e.route.slice(6);if(!source.includes(`slug:'${slug}'`))fail(`missing ${slug}`)}
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const module={exports:{}};vm.runInNewContext('(function(exports,module){'+js+'\n})(module.exports,module)',{module});
const counts=module.exports.septemberThreeBlogBatch.map(p=>({slug:p.slug,words:p.sections.map(s=>s[1]).join(' ').match(/[A-Za-z0-9']+/g).length}));
if(counts.some(x=>x.words<900))fail(`short body ${JSON.stringify(counts)}`);
console.log(JSON.stringify({count:counts.length,minWords:Math.min(...counts.map(x=>x.words)),maxWords:Math.max(...counts.map(x=>x.words)),date:'PASS',humanizer:'PASS'}));
