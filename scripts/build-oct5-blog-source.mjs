import fs from 'node:fs';
import crypto from 'node:crypto';

const date = '2026-10-05';
const sba = ['U.S. Small Business Administration: Manage your business', 'https://www.sba.gov/business-guide/manage-your-business'];
const nist = ['NIST Cybersecurity Framework 2.0', 'https://www.nist.gov/cyberframework'];
const ftc = ['Federal Trade Commission: Start with Security', 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business'];
const cisa = ['CISA: More than a Password', 'https://www.cisa.gov/mfa'];
const irs = ['Internal Revenue Service Publication 583', 'https://www.irs.gov/publications/p583'];
const fda = ['U.S. Food and Drug Administration: Food Allergies', 'https://www.fda.gov/food/food-labeling-nutrition/food-allergies'];
const operationsSecurity = ['CISA: More than a Password', 'https://www.cisa.gov/mfa'];

const items = [
  ['oct5-draft-veterinary-refill-administration.md','outsource-veterinary-prescription-refill-administration','veterinary prescription refill request administration','administrative-support','Build a source-linked refill request queue while veterinarians retain prescribing, clinical, and urgency decisions.',[sba,nist,ftc]],
  ['oct5-draft-commercial-lease-coi-coordination.md','outsource-commercial-lease-insurance-certificate-requests','commercial lease certificate-of-insurance coordination','administrative-support','Coordinate certificate requests and versioned evidence without interpreting insurance coverage or lease requirements.',[sba,nist,ftc]],
  ['oct5-draft-freight-damage-claim-evidence.md','outsource-freight-damage-claim-evidence','freight damage claim evidence assembly','operations-support','Assemble shipment, condition, quantity, and deadline evidence while liability and settlement stay with authorized owners.',[sba,nist,operationsSecurity]],
  ['oct5-draft-permit-inspection-scheduling.md','outsource-permit-inspection-scheduling','permit inspection scheduling','local-service-scheduling','Coordinate permit inspection requests and access without certifying work or interpreting code requirements.',[sba,nist,operationsSecurity]],
  ['oct5-draft-bank-statement-followup.md','outsource-client-bank-statement-followup','client bank statement follow-up','small-business-bookkeeping','Request and match the correct statement period securely without taking banking credentials or making bookkeeping judgments.',[irs,nist,ftc]],
  ['oct5-draft-msp-user-onboarding-intake.md','outsource-msp-user-onboarding-intake','managed service provider user onboarding intake','operations-support','Prepare identity, device, application, and approval evidence while clients and technicians retain access control.',[nist,cisa,ftc]],
  ['oct5-draft-specialty-food-samples.md','outsource-specialty-food-sample-followup','specialty food sample follow-up','lead-intake-administration','Coordinate sample delivery, product questions, and buyer feedback without promising suitability, safety, price, or availability.',[fda,sba,ftc]],
  ['oct5-draft-auto-repair-supplements.md','outsource-auto-repair-supplement-documentation','auto-repair supplement documentation','administrative-support','Keep repair supplement evidence, versions, and approvals aligned without diagnosing damage or authorizing repairs.',[sba,nist,ftc]],
  ['oct5-draft-legal-document-production.md','outsource-legal-document-production-administration','legal document production administration','administrative-support','Maintain matter, review, redaction, manifest, and transfer evidence while legal decisions remain with counsel.',[nist,ftc,cisa]],
  ['oct5-draft-architecture-submittal-register.md','outsource-architecture-submittal-register','architecture submittal register administration','operations-support','Control submittal versions, routing, dates, and distribution without approving design or interpreting contracts.',[sba,nist,operationsSecurity]],
  ['oct5-draft-restaurant-equipment-service.md','outsource-restaurant-equipment-service-coordination','multi-location restaurant equipment service coordination','operations-support','Coordinate asset-specific service calls while restaurant owners and technicians retain safety, repair, and operating decisions.',[fda,operationsSecurity,sba]],
  ['oct5-draft-continuing-education-record-intake.md','outsource-continuing-education-record-intake','continuing-education record intake','administrative-support','Prepare traceable course evidence and calculations without certifying eligibility, exceptions, or renewal.',[sba,nist,ftc]],
];

function parse(file) {
  const lines = fs.readFileSync(`docs/${file}`, 'utf8').trim().split('\n');
  const title = lines.shift().replace(/^# /, '');
  const sections = [];
  let heading = 'Overview';
  let paragraphs = [];
  let buffer = [];
  const flushParagraph = () => { if (buffer.length) { paragraphs.push(buffer.join(' ').trim()); buffer = []; } };
  const flushSection = () => { flushParagraph(); if (paragraphs.length) sections.push({ heading, paragraphs }); paragraphs = []; };
  for (const line of lines) {
    if (line.startsWith('## ')) { flushSection(); heading = line.slice(3); }
    else if (!line.trim()) flushParagraph();
    else buffer.push(line.trim());
  }
  flushSection();
  return { title, sections };
}

const posts = items.map(([file,slug,lane,service,excerpt,sources]) => ({
  slug, ...parse(file), excerpt, lane, service, publicationDate: date,
  imagePath: '/filipino-support-workspace.jpg', sources,
}));

fs.writeFileSync('app/oct5-blog-batch.ts', `export const octoberFivePublicationDate = ${JSON.stringify(date)} as const;\n\nexport const octoberFiveBlogBatch = ${JSON.stringify(posts, null, 2)} as const;\n`);

const words = (value) => value.toLowerCase().match(/[a-z0-9']+/g) || [];
const entries = posts.map((post) => {
  const paragraphs = post.sections.flatMap((section) => section.paragraphs);
  const body = paragraphs.join(' ');
  return {
    family: 'blog', topic: post.title, slug: post.slug,
    sources: post.sources.map(([title,url]) => ({ title, url, checked: date })),
    contentHash: crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex'),
    bodyHash: crypto.createHash('sha256').update(body).digest('hex'),
    paragraphHashes: paragraphs.map((paragraph) => crypto.createHash('sha256').update(paragraph).digest('hex')),
    wordCount: words(body).length, publicationDateCandidate: date, commitSha: null,
    deploymentEvidence: null, liveUrl: `https://outsourcingsmallbusinesses.com/blog/${post.slug}`, verifiedAt: null,
  };
});
const manifest = {
  family:'blog', cycleLabel:date, timezone:'UTC', actualPublicationDate:null, publicationDateCandidate:date,
  requiredCount:12, baselineSha:'3d32419abe9023449b9b7b4b6fc0cb7ba9d281fa', repository:'coolifystealthagents/outsourcingsmallbusinesses',
  productionBranch:'main', blogBranch:'routine/blog-2026-10-05', deploymentResource:'y85c6kbd6zekps7rxqzwrrn6', entries,
  validation:{minimumWords:900,bodyOnly:true,sourceBodyParagraphParity:'ordered paragraph hashes',qualitativeOriginality:'pending combined validator'},
  release:{status:'local-combined-draft',combinedRemoteSha:null,deploymentEvidence:null,verifiedCount:0},
};
fs.mkdirSync('.paperclip/daily-content/2026-10-05',{recursive:true});
fs.writeFileSync('.paperclip/daily-content/2026-10-05/blog.json',`${JSON.stringify(manifest,null,2)}\n`);
