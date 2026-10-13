import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';

const fail=message=>{throw new Error(message)};
const read=file=>fs.readFileSync(file,'utf8');
const wordCount=value=>(value.match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g)??[]).length;
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
const immutableBase='f27d446a44c9def4c705d681f55dffcdf15dd2d8';
const baseManifest=JSON.parse(execFileSync('git',['show',`${immutableBase}:publishing/2026-10-12/manifest.json`],{encoding:'utf8'}));
const baseSlugs=new Set(baseManifest.entries.map(x=>x.slug));
const baseTitles=new Set(baseManifest.entries.map(x=>x.title));
const checkedPriorCorpus=`${read('app/oct12-blog-batch.ts')}\n${read('app/oct12-research.ts')}`;
const blogSource=read('app/oct13-blog-batch.ts');
const researchSource=read('app/oct13-research.ts');
const blogs=JSON.parse(blogSource.match(/octoberThirteenBlogBatch=([\s\S]*?) as const;/)?.[1]??fail('cannot parse Blog batch'));
const research=JSON.parse(researchSource.match(/octoberThirteenResearchBatch=([\s\S]*?) as const;/)?.[1]??fail('cannot parse Research batch'));
if(manifest.site!=='OutsourcingSmallBusinesses.com'||manifest.publicationDate!=='2026-10-13')fail('site/date mismatch');
if(blogs.length!==12||research.length!==5||manifest.entries.length!==17||manifest.blogCount!==12||manifest.researchCount!==5)fail('expected exactly 12 Blog and 5 Research');
const all=[...blogs.map(x=>({...x,type:'Blog'})),...research.map(x=>({...x,type:'Research'}))];
if(new Set(all.map(x=>x.slug)).size!==17||new Set(all.map(x=>x.title)).size!==17)fail('title or slug duplicate');
if(all.some(x=>/\b(?:2026|oct(?:ober)?\s+13|10[-/]13)\b/i.test(x.title)))fail('date found in title');
for(const item of all){
  const published=item.type==='Blog'?item.publicationDate:item.published;
  if(published!=='2026-10-13'||(item.type==='Research'&&item.modified!=='2026-10-13'))fail(`date mismatch: ${item.slug}`);
  const record=manifest.entries.find(x=>x.slug===item.slug&&x.title===item.title&&x.type===item.type);
  const floor=item.type==='Blog'?1200:1150;
  if(!record||record.words<floor)fail(`manifest or word floor failed: ${item.slug} (${record?.words})`);
  if(record.route!==`/${item.type.toLowerCase()}/${item.slug}`||record.thumbnail!==item.imagePath)fail(`route/image mismatch: ${item.slug}`);
  const image=fs.readFileSync(`public${record.thumbnail}`);
  if(image.toString('ascii',1,4)!=='PNG'||image.readUInt32BE(16)!==1536||image.readUInt32BE(20)!==1024)fail(`PNG dimension contract failed: ${item.slug}`);
  if(baseSlugs.has(item.slug)||baseTitles.has(item.title))fail(`title or slug collision with immutable base: ${item.slug}`);
}
const allowed=new Set(['www.sba.gov','www.nist.gov','csrc.nist.gov','www.gao.gov','www.ftc.gov','www.cisa.gov','www.irs.gov','privacy.gov.ph','www.iso.org','legalinstruments.oecd.org']);
for(const item of research){
  if(wordCount(`${item.body.join(' ')} ${item.studyNote??''}`)<1150)fail(`Research prose below 1,150 words: ${item.slug}`);
  if(item.referenceSources.length!==10)fail(`Research must have exactly 10 sources: ${item.slug}`);
  for(const source of item.referenceSources){const url=new URL(source.url);if(url.protocol!=='https:'||!allowed.has(url.hostname))fail(`source is not authoritative HTTPS: ${source.url}`);}
  if(item.related.length<3||!item.serviceHandoff)fail(`Research related/sidebar data missing: ${item.slug}`);
}
const data=read('app/data.ts'),fleet=read('app/fleet-content.ts'),blogDetail=read('app/blog/[slug]/page.tsx'),blogListing=read('app/blog/blog-listing.tsx'),researchDetail=read('app/research/[slug]/page.tsx'),researchIndex=read('app/research/page.tsx'),sitemap=read('app/sitemap.xml/route.ts');
if(!data.includes('...octoberThirteenBlogBatch')||!fleet.includes('...octoberThirteenResearchBatch'))fail('registry wiring missing');
if(!blogDetail.includes('Published: October 13, 2026')||!blogListing.includes('Published{" "}')||!blogListing.includes('<time dateTime={published}>'))fail('visible Blog dates missing');
if(!researchDetail.includes('Published: {formatPublicDate(post.published)}')||!researchIndex.includes('Published <time dateTime={p.published}>'))fail('visible Research dates missing');
if(!blogDetail.includes('Related October 13 guides')||!blogDetail.includes(`/services/${'${post.service}'}`))fail('Blog sidebar/related behavior missing');
if(!researchDetail.includes('Related research')||!researchDetail.includes('post.serviceHandoff'))fail('Research sidebar/related behavior missing');
if(!sitemap.includes('...safeBlogPosts.map')||!sitemap.includes('...researchPosts.map'))fail('sitemap registry routes missing');
const paragraphs=[];
for(const item of blogs)for(const section of item.sections)for(const raw of section.paragraphs){const normalized=raw.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(normalized.split(' ').length>=20)paragraphs.push({slug:item.slug,raw,normalized});}
for(const item of research)for(const raw of item.body.filter(x=>!x.startsWith('Section:'))){const normalized=raw.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(normalized.split(' ').length>=20)paragraphs.push({slug:item.slug,raw,normalized});}
const seen=new Map();for(const p of paragraphs){if(seen.has(p.normalized))fail(`duplicate substantive paragraph: ${seen.get(p.normalized)} and ${p.slug}`);seen.set(p.normalized,p.slug);}
for(const p of paragraphs)if(checkedPriorCorpus.includes(p.raw))fail(`paragraph duplicates checked prior corpus: ${p.slug}`);
const hashes=manifest.entries.map(e=>crypto.createHash('sha256').update(fs.readFileSync(`public${e.thumbnail}`)).digest('hex'));
if(new Set(hashes).size!==17)fail('thumbnails are not 17 unique images');
const renderer=read('publishing/2026-10-13/render_thumbnails.py');if(!renderer.includes("entry['title']")||!renderer.includes("WIDTH, HEIGHT = 1536, 1024"))fail('exact-title thumbnail renderer contract missing');
console.log(JSON.stringify({status:'PASS',date:'2026-10-13',blog:12,research:5,minBlogWords:Math.min(...manifest.entries.filter(x=>x.type==='Blog').map(x=>x.words)),minResearchWords:Math.min(...manifest.entries.filter(x=>x.type==='Research').map(x=>x.words)),sourcesPerResearch:10,uniqueExactTitlePngs:17,dimensions:'1536x1024',visibleDates:true,separateSystems:true,duplicateSubstantiveParagraphs:0,headCollisions:0},null,2));
