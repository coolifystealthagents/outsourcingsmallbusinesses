import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const fail=(message)=>{throw new Error(message)};const read=(path)=>fs.readFileSync(path,'utf8');
const blog=JSON.parse(read('.paperclip/daily-content/2026-10-08/blog.json'));const research=JSON.parse(read('.paperclip/daily-content/2026-10-08/research.json'));
if(blog.date!=='2026-10-08'||research.date!=='2026-10-08')fail('manifest date mismatch');
if(blog.requiredCount!==12||blog.entries.length!==12)fail('Blog count must be 12');if(research.requiredCount!==5||research.entries.length!==5)fail('Research count must be 5');
const entries=[...blog.entries,...research.entries],slugs=entries.map(x=>x.slug);if(new Set(slugs).size!==17)fail('new slugs are not unique');
if(blog.entries.some(x=>x.words<1100))fail('Blog body below 1,100 words');if(research.entries.some(x=>x.words<1000))fail('Research body below 1,000 words');
const blogContent=read('app/oct8-blog-batch.ts'),researchContent=read('app/oct8-research.ts');
for(const slug of slugs){if(!blogContent.includes(slug)&&!researchContent.includes(slug))fail(`missing ${slug}`);let prior='';try{prior=execFileSync('git',['grep','-F',slug,'HEAD','--','app'],{encoding:'utf8'})}catch{}if(prior.trim())fail(`slug existed in HEAD: ${slug}`)}
if((blogContent.match(/"publicationDate": "2026-10-08"/g)??[]).length!==12)fail('Blog dates not exact');if((researchContent.match(/"published": "2026-10-08"/g)??[]).length!==5)fail('Research dates not exact');
if((researchContent.match(/"referenceSources": \[/g)??[]).length!==5||!researchContent.includes('https://www.nist.gov/cyberframework'))fail('authoritative Research citations missing');
try{execFileSync('git',['cat-file','-e','HEAD:public/filipino-support-workspace.jpg'])}catch{fail('hero asset not tracked')}
if(!read('app/blog/[slug]/page.tsx').includes('Published: October 8, 2026')||!read('app/blog/blog-listing.tsx').includes('Published <time'))fail('visible Blog date missing');
if(!read('app/research/[slug]/page.tsx').includes('Published: {formatPublicDate(post.published)}')||!read('app/research/page.tsx').includes('Published {p.published}'))fail('visible Research date missing');
if(!read('app/data.ts').includes('...octoberEightBlogBatch')||!read('app/fleet-content.ts').includes('...octoberEightResearchBatch'))fail('registry wiring missing');
console.log(JSON.stringify({status:'PASS',blog:12,research:5,total:17,date:'2026-10-08',blogMinWords:Math.min(...blog.entries.map(x=>x.words)),researchMinWords:Math.min(...research.entries.map(x=>x.words)),visibleDetailAndListings:true,authoritativeCitations:true,assetTracked:true},null,2));
