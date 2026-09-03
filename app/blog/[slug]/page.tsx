import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';
import { richBlogDetails, type RichBlogDetail } from '../../rich-blog-data';
import { StrictEvidenceArticle } from './strict-evidence-article';
import { dailyBlogBatch, dailyBlogPublicationDate } from '../../daily-blog-batch';
import { augustElevenBlogBatch } from '../../aug11-blog-batch';
import { augustThirteenBlogBatch } from '../../aug13-blog-batch';
import { augustFourteenBlogBatch } from '../../aug14-blog-batch';
import { augustSeventeenBlogBatch } from '../../aug17-blog-batch';
import { augustEighteenBlogBatch } from '../../aug18-blog-batch';
import { augustTwentyBlogBatch } from '../../aug20-blog-batch';
import { augustTwentyOneBlogBatch } from '../../aug21-blog-batch';
import { augustTwentyThreeApplicationNotes, augustTwentyThreeArticleClosings, augustTwentyThreeBlogBatch } from '../../aug23-blog-batch';
import { augustThirtyOneBlogBatch } from '../../aug31-content';
import { augustTwentyThreeV8BlogBatch } from '../../aug23-v8-blog-batch';
import { septemberThreeBlogBatch } from '../../sep3-blog-batch';

const baseUrl = 'https://outsourcingsmallbusinesses.com';
type BlogDetail = (typeof blogDetails)[keyof typeof blogDetails];
const detailsBySlug = blogDetails as Partial<Record<string, BlogDetail>>;
const richDetailsBySlug = richBlogDetails as Partial<Record<string, RichBlogDetail>>;
const dailyBySlug = new Map<string, { title: string; excerpt: string; focus: string; index: number }>(dailyBlogBatch.map(([slug, title, excerpt, focus], index) => [slug, { title, excerpt, focus, index }]));
const augustElevenBySlug = new Map<string, { post: (typeof augustElevenBlogBatch)[number]; index: number }>(augustElevenBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustThirteenBySlug = new Map<string, { post: (typeof augustThirteenBlogBatch)[number]; index: number }>(augustThirteenBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustFourteenBySlug = new Map<string, { post: (typeof augustFourteenBlogBatch)[number]; index: number }>(augustFourteenBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustSeventeenBySlug = new Map<string, { post: (typeof augustSeventeenBlogBatch)[number]; index: number }>(augustSeventeenBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustEighteenBySlug = new Map<string, { post: (typeof augustEighteenBlogBatch)[number]; index: number }>(augustEighteenBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustTwentyBySlug = new Map<string, { post: (typeof augustTwentyBlogBatch)[number]; index: number }>(augustTwentyBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustTwentyOneBySlug = new Map<string, { post: (typeof augustTwentyOneBlogBatch)[number]; index: number }>(augustTwentyOneBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustTwentyThreeBySlug = new Map<string, { post: (typeof augustTwentyThreeBlogBatch)[number]; index: number }>(augustTwentyThreeBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustThirtyOneBySlug = new Map<string, { post: (typeof augustThirtyOneBlogBatch)[number]; index: number }>(augustThirtyOneBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustTwentyThreeV8BySlug = new Map<string, { post: (typeof augustTwentyThreeV8BlogBatch)[number]; index: number }>(augustTwentyThreeV8BlogBatch.map((post, index) => [post.slug, { post, index }]));
const septemberThreeBySlug = new Map<string, { post: (typeof septemberThreeBlogBatch)[number]; index: number }>(septemberThreeBlogBatch.map((post, index) => [post.slug, { post, index }]));

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Guide' };
  const url = `${baseUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: site.brand,
      type: 'article'
    }
  };
}

function RichArticle({ post, detail }: { post: (typeof blogPosts)[number]; detail: BlogDetail }) {
  const url = `${baseUrl}/blog/${post.slug}`;
  const articleId = `${url}#article`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': articleId,
        headline: post.title,
        description: post.excerpt,
        url,
        author: { '@type': 'Organization', name: site.brand },
        publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
        citation: detail.sources.map((source) => source.url),
        hasPart: detail.sections.map((section, index) => ({
          '@type': 'WebPageElement',
          position: index + 1,
          name: section.heading
        }))
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: post.title,
        description: post.excerpt,
        url,
        mainEntity: { '@id': articleId }
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: detail.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url }
        ]
      }
    ]
  };

  return (
    <>
      <JsonLd data={schema} />
      <article className="container guide-article">
        <p className="eyebrow">Provider vetting guide</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>

        <section className="guide-takeaways" aria-labelledby="takeaways-heading">
          <h2 id="takeaways-heading">What to remember</h2>
          <ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section aria-labelledby="answer-check-heading">
          <p className="eyebrow">Listen for specifics</p>
          <h2 id="answer-check-heading">Weak answers and useful answers</h2>
          <p>A polished pitch is easy. Use this table to bring the call back to the work you are buying.</p>
          <div className="guide-table-wrap">
            <table className="guide-table">
              <thead><tr><th>Topic</th><th>Weak answer</th><th>Useful answer</th></tr></thead>
              <tbody>{detail.readinessRows.map((row) => <tr key={row.topic}><th scope="row">{row.topic}</th><td>{row.weak}</td><td>{row.useful}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        {detail.sections.map((section) => (
          <section key={section.heading} className="guide-section">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}

        <section className="guide-script" aria-labelledby="call-script-heading">
          <p className="eyebrow">Copy for your next call</p>
          <h2 id="call-script-heading">Provider question script</h2>
          <ol>{detail.callScript.map((line) => <li key={line}>{line}</li>)}</ol>
        </section>

        <section className="guide-faq" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Questions small business owners ask</h2>
          {detail.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
        </section>

        <section className="guide-sources" aria-labelledby="sources-heading">
          <h2 id="sources-heading">Sources</h2>
          <ul>{detail.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a><span>{source.note}</span></li>)}</ul>
        </section>
      </article>
      <CTA />
    </>
  );
}

function LegacyArticle({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="container" style={{ maxWidth: 880 }}>
      <p className="eyebrow">{site.brand} guide</p>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      <div className="card">
        <h2>The short answer</h2>
        <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
        <h2>What to prepare</h2>
        <ul><li>Task examples and sample replies</li><li>Tool access and permission rules</li><li>Daily output target</li><li>Escalation rules for anything sensitive</li></ul>
        <h2>Questions to ask</h2>
        <ul><li>Who screens the worker?</li><li>Who checks quality?</li><li>What happens if fit is poor?</li><li>How are passwords and customer data handled?</li></ul>
      </div>
    </article>
  );
}

function DailyArticle({ post, focus, index }: { post: (typeof blogPosts)[number]; focus: string; index: number }) {
  const url = `${baseUrl}/blog/${post.slug}`;
  const related = dailyBlogBatch.filter(([slug]) => slug !== post.slug).slice(index % 3, index % 3 + 3);
  const source = 'https://www.sba.gov/business-guide/manage-your-business';
  const sections = [
    [`Define the ${focus} lane`, `Start with the recurring work that has a clear input and a visible finish line. Write down the source record, the expected output, the due time, and the decisions that remain with the owner. A narrow first lane makes feedback useful and prevents a new assistant from guessing at business policy.`],
    ['Set the review and escalation rules', `Use examples to show what passes, what needs correction, and what must stop for approval. For ${focus}, keep money movement, customer remedies, account changes, legal concerns, and unusual requests with a named owner. The worker should be able to mark an item blocked without hiding the reason.`],
    ['Run a measured first week', `Begin with a small sample and compare completed items with the checklist each day. Track volume, late work, rework, unanswered questions, and escalations. If the same question appears twice, improve the SOP before adding more volume. Review the weekly summary against the original task examples.`],
    ['Protect access and continuity', `Give separate accounts, least-privilege access, and a documented offboarding step. Keep source links in the work record, not only in chat. A backup person should know where the SOP, queue, examples, and escalation contacts live so a short absence does not stop the lane.`]
  ];
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.excerpt, url, datePublished: dailyBlogPublicationDate, dateModified: dailyBlogPublicationDate, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, citation: source };
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch={dailyBlogPublicationDate}><p className="eyebrow">Small business operations guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><time dateTime={dailyBlogPublicationDate}>{dailyBlogPublicationDate}</time><section><h2>Quick answer</h2><p>Outsource {focus} only after the process has an example, an owner, a review point, and a clear stop rule. Keep the first batch small enough to inspect.</p><p>Use the <a href="/services/operations-support">operations support service guide</a> for the handoff pattern, then compare it with the <a href="/blog/outsourcing-for-small-businesses-provider-questions">provider questions checklist</a> before granting wider access. For general small-business management context, consult the <a href={source} target="_blank" rel="noreferrer">U.S. Small Business Administration guidance</a>.</p></section>{sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<section aria-labelledby="related-heading"><h2 id="related-heading">Related articles</h2><ul className="related-plans">{related.map(([slug, title]) => <li key={slug}><a href={`/blog/${slug}`}>{title}</a></li>)}</ul></section><section className="guide-script"><h2>Owner review prompt</h2><p>Which task passed, which item needed correction, and which decision should remain owner-approved before the next batch?</p></section></article><CTA /></>;
}

function AugustElevenArticle({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const sourcePost = augustElevenBlogBatch[index];
  const url = `${baseUrl}/blog/${post.slug}`;
  const source = 'https://www.sba.gov/business-guide/manage-your-business';
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: sourcePost.title, description: sourcePost.excerpt, url, datePublished: '2026-08-12', dateModified: '2026-08-12', author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, citation: source };
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch="2026-08-12"><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime="2026-08-12">August 12, 2026</time><section><h2>Quick answer</h2><p>{sourcePost.opening}</p><p>Use a named record, an approved handoff, and a clear owner decision point. The <a href={source} target="_blank" rel="noreferrer">U.S. Small Business Administration business guidance</a> provides broader context for organizing this kind of work.</p></section><section><h2>What to set up first</h2><ul>{sourcePost.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Keep the boundary clear</h2><p>{sourcePost.watchout}</p></section><section><h2>How to tell whether it is working</h2><p>{sourcePost.measure}</p></section><section><h2>Owner review question</h2><p>Which part of {sourcePost.focus} is a repeatable record update, and which decision should remain with the owner?</p></section></article><CTA /></>;
}

function AugustThirteenArticle({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const sourcePost = augustThirteenBlogBatch[index];
  const url = `${baseUrl}/blog/${post.slug}`;
  const source = 'https://www.sba.gov/business-guide/manage-your-business';
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: sourcePost.title, description: sourcePost.excerpt, url, datePublished: sourcePost.publicationDate, dateModified: sourcePost.publicationDate, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, citation: source };
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch={sourcePost.publicationDate}><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime={sourcePost.publicationDate}>August 13, 2026</time><section><h2>Quick answer</h2><p>{sourcePost.opening}</p><p>Use a named record, an approved handoff, and a clear owner decision point. The <a href={source} target="_blank" rel="noreferrer">U.S. Small Business Administration business guidance</a> provides broader context for organizing this kind of work.</p></section><section><h2>What to set up first</h2><ul>{sourcePost.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Keep the boundary clear</h2><p>{sourcePost.watchout}</p></section><section><h2>How to tell whether it is working</h2><p>{sourcePost.measure}</p></section><section><h2>Owner review question</h2><p>Which part of {sourcePost.focus} is a repeatable record update, and which decision should remain with the owner?</p></section></article><CTA /></>;
}

function AugustFourteenArticle({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const sourcePost = augustFourteenBlogBatch[index];
  const url = `${baseUrl}/blog/${sourcePost.slug}`;
  const source = 'https://www.sba.gov/business-guide/manage-your-business';
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: sourcePost.title, description: sourcePost.excerpt, url, datePublished: sourcePost.publicationDate, dateModified: sourcePost.publicationDate, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, citation: source };
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch={sourcePost.publicationDate}><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime={sourcePost.publicationDate}>August 14, 2026</time><section><h2>Quick answer</h2><p>{sourcePost.opening}</p><p>Use a named record, an approved handoff, and a clear owner decision point. The <a href={source} target="_blank" rel="noreferrer">U.S. Small Business Administration business guidance</a> provides broader context for organizing this kind of work.</p></section><section><h2>What to set up first</h2><ul>{sourcePost.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Keep the boundary clear</h2><p>{sourcePost.watchout}</p></section><section><h2>How to tell whether it is working</h2><p>{sourcePost.measure}</p></section><section><h2>Owner review question</h2><p>Which part of {sourcePost.focus} is a repeatable record update, and which decision should remain with the owner?</p></section></article><CTA /></>;
}

function AugustSeventeenArticle({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const sourcePost = augustSeventeenBlogBatch[index];
  const url = `${baseUrl}/blog/${sourcePost.slug}`;
  const source = 'https://www.sba.gov/business-guide/manage-your-business';
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: sourcePost.title, description: sourcePost.excerpt, url, datePublished: sourcePost.publicationDate, dateModified: sourcePost.publicationDate, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, citation: source };
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch={sourcePost.publicationDate}><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime={sourcePost.publicationDate}>August 17, 2026</time><section><h2>Quick answer</h2><p>{sourcePost.opening}</p></section><section><h2>What to set up first</h2><ul>{sourcePost.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Keep the boundary clear</h2><p>{sourcePost.watchout}</p></section><section><h2>How to tell whether it is working</h2><p>{sourcePost.measure}</p></section></article><CTA /></>;
}

function AugustEighteenArticle({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const sourcePost = augustEighteenBlogBatch[index];
  const url = `${baseUrl}/blog/${sourcePost.slug}`;
  /* route-local article body lives in aug18-blog-batch.ts */
  const paragraphs = sourcePost.body;
  /*
    `Small businesses usually need ${sourcePost.focus} because a recurring question is consuming owner attention. The useful goal is not to make an outside helper the decision maker. It is to create a dependable record of what arrived, what the source actually supports, what remains uncertain, and who can decide the next step. That distinction keeps preparation fast without turning incomplete information into a customer promise, financial action, access change, or policy interpretation.`,
    `Start with the source of record. For ${sourcePost.focus}, identify the system, inbox, file, or approved note where the underlying event first appears. Capture the source link, observation date, record identifier, and exact wording that matters. If two sources disagree, preserve both references and describe the difference. A clean note says “these records differ” rather than quietly choosing the version that makes the queue easier.`,
    `Define the work unit before granting access. One unit might be a single invoice, one project item, one customer message, or one recurring task. Write the input, expected prepared output, reviewer, due point, and stop rule. The stop rule matters: it tells the operator when the work is complete and when it must become an escalation. Without it, a small support lane slowly absorbs approvals that belong to the business.`,
    `Use the checklist as a control, not as a substitute for judgment. The first check should preserve ${sourcePost.checklist[0].replace('record the ','')}. The second should ${sourcePost.checklist[1]}. The third should ${sourcePost.checklist[2]}. Each check should be observable in the record, so a reviewer can see what was compared and why the item was marked ready, blocked, or escalated.`,
    `Separate facts from interpretation. A fact is what the source displays or what a person explicitly requested. An interpretation is a conclusion about eligibility, cause, urgency, ownership, or likely outcome. For ${sourcePost.focus}, keep those layers in separate fields or sentences. This makes a later correction easier and prevents a confident summary from being mistaken for evidence.`,
    `Make uncertainty useful. A vague note such as “needs attention” does not help an owner act. Name the missing field, conflicting value, unanswered question, or source that could not be accessed. Explain what decision is waiting and what could happen if it waits. Do not exaggerate the consequence; a bounded description is more trustworthy than an invented risk rating.`,
    `Keep customer and business boundaries explicit. The person preparing ${sourcePost.focus} may organize records, compare approved information, draft a neutral question, and point to an exception. They should not invent a commitment, issue a refund, alter an account, approve a supplier, interpret a contract, or disclose information merely because the request appears routine. Those decisions need a named owner and an auditable handoff.`,
    `Design the handoff around one question. Put the relevant source links first, then the current state, the exact uncertainty, the requested decision, and the deadline if one is supported. Avoid sending a long transcript when three linked facts will do. If the owner needs context, include it; if context is sensitive or unrelated, leave it out. Narrow handoffs reduce both delay and accidental disclosure.`,
    `Review the first sample daily. Look for records returned because the source was missing, the category was unclear, the wrong customer or project was selected, or the requested action exceeded authority. Count those reasons separately. A rising count does not automatically mean poor performance; it may reveal that the process definition is incomplete or that the business has not named an approver.`,
    `Measure the lane with operationally meaningful evidence. Track items received, items prepared, items blocked, clarification requests, rework, and owner decisions pending. For ${sourcePost.focus}, also note how often the same uncertainty repeats. Do not report a clean completion rate by hiding blocked items. A queue that exposes exceptions can be healthier than one that closes everything without evidence.`,
    `Protect access and continuity. Use the narrowest account permissions that support the task, keep credentials out of notes, and record where the approved instructions live. A backup person should be able to find the queue, source links, examples, and escalation contacts without asking the original operator to reconstruct the process. When access changes, preserve the review trail and follow the business’s approved offboarding steps.`,
    `Keep source history intact. If an item changes, record the new observation and link the earlier state rather than overwriting it. For ${sourcePost.focus}, this matters when a customer edits a request, a project milestone moves, a supplier sends a new file, or an owner changes an instruction. Version history helps the reviewer tell whether the preparation was wrong or the underlying situation changed later.`,
    `Do not optimize the metric by weakening the boundary. Closing an old item, changing a category, deleting a duplicate, or marking an unanswered request complete can make a dashboard look better while making the business less informed. The better outcome is a queue where completion means the defined work was done, and escalation means the next decision is visible.`,
    `The owner’s review question should be simple: does this record show enough evidence to act, and is the proposed action within the approved role? If yes, accept the preparation and record the decision. If no, identify the missing source or decision. That habit makes ${sourcePost.focus} repeatable while keeping consequential choices with the people responsible for the business.`,
  ]; */
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: sourcePost.title, description: sourcePost.excerpt, url, datePublished: '2026-08-18', dateModified: '2026-08-18', author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, citation: 'https://www.sba.gov/business-guide/manage-your-business' };
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch={sourcePost.publicationDate}><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime={sourcePost.publicationDate}>August 18, 2026</time><section><h2>Quick answer</h2><p>{sourcePost.opening}</p><ul>{sourcePost.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section>{paragraphs.map((paragraph, i) => <section key={i}><h2>{['Why this record matters','Define the work unit','Preserve the source','Set the approval boundary','Review the first batch','Use a stop rule','Protect the handoff','Summarize for the owner','Measure the lane','Owner review'][i]}</h2><p>{paragraph}</p></section>)}<section><h2>Keep the boundary clear</h2><p>{sourcePost.watchout}</p><p>{sourcePost.measure}</p><p>{sourcePost.lens}</p></section></article><CTA /></>;
}

function AugustTwentyArticle({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const sourcePost = augustTwentyBlogBatch[index];
  const url = `${baseUrl}/blog/${sourcePost.slug}`;
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: sourcePost.title, description: sourcePost.excerpt, url, datePublished: '2026-08-20', dateModified: '2026-08-20', author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, image: `${baseUrl}${sourcePost.imagePath}`, citation: 'https://www.sba.gov/business-guide/manage-your-business' };
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch="2026-08-20"><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime="2026-08-20">August 20, 2026</time><figure><img src={sourcePost.imagePath} alt={`Illustration for ${sourcePost.focus}`} /></figure><section><h2>Quick answer</h2><p>{sourcePost.opening}</p></section>{sourcePost.sections.map(([heading, paragraph]) => <section key={heading}><h2>{heading}</h2><p>{paragraph}</p></section>)}<section><h2>Owner review prompt</h2><p>Which part of {sourcePost.focus} is preparation, which part needs evidence, and which decision remains with the owner?</p></section></article><CTA /></>;
}

function AugustTwentyOneArticle({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const sourcePost = augustTwentyOneBlogBatch[index];
  const url = `${baseUrl}/blog/${sourcePost.slug}`;
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: sourcePost.title, description: sourcePost.excerpt, url, datePublished: '2026-08-21', dateModified: '2026-08-21', author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, image: `${baseUrl}${sourcePost.imagePath}`, citation: 'https://www.sba.gov/business-guide/manage-your-business' };
  const operatingClose = `Before expanding ${sourcePost.focus}, review one ordinary item, one incomplete item, one conflicting item, and one item that needs an owner decision. Record the source, identifier, observed date, permitted action, reviewer, and finish line for each. A support operator may organize the record, compare approved information, prepare a neutral draft, and point to a gap. The operator should stop when the source is missing, the instruction conflicts, or the next action would create a promise, change money, expose private information, alter access, interpret a policy, or make a consequential public claim. Keep those decisions with a named owner or qualified reviewer. Track returned work by reason so a repeated question improves the brief or checklist instead of becoming silent rework. Use the narrowest access that supports the task, named accounts, and a handoff another person can follow. Preserve earlier versions when the source or instruction changes. A clean completion count is not enough if blocked items disappear. Review the evidence and the exceptions together, then decide whether the lane is ready for more volume. The useful outcome is a prepared record that is easier to inspect and easier to correct, while the business still knows who is accountable for the result.`;
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch="2026-08-21"><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime="2026-08-21">August 21, 2026</time><figure><img src={sourcePost.imagePath} alt={`Illustration for ${sourcePost.focus}`} /></figure>{sourcePost.sections.map(([heading, paragraph]) => <section key={heading}><h2>{heading}</h2><p>{paragraph}</p></section>)}<section><h2>Operating check for {sourcePost.focus}</h2><p>{operatingClose}</p></section><section><h2>Owner review prompt</h2><p>Which part of {sourcePost.focus} is preparation, which part needs evidence, and which decision remains with the owner?</p></section></article><CTA /></>;
}

function AugustTwentyThreeArticle({ index }: { index: number }) {
  const sourcePost = augustTwentyThreeBlogBatch[index];
  const closing = augustTwentyThreeArticleClosings[sourcePost.slug];
  const applicationNote = augustTwentyThreeApplicationNotes[sourcePost.slug];
  const url = `${baseUrl}/blog/${sourcePost.slug}`;
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: sourcePost.title, description: sourcePost.excerpt, url, datePublished: '2026-08-23', dateModified: '2026-08-23', author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand }, ...(sourcePost.imagePath ? { image: `${baseUrl}${sourcePost.imagePath}` } : {}), citation: 'https://www.sba.gov/business-guide/manage-your-business' };
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch="2026-08-23"><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime="2026-08-23">August 23, 2026</time>{sourcePost.imagePath ? <figure><img src={sourcePost.imagePath} alt={`Illustration for ${sourcePost.focus}`} /></figure> : null}{sourcePost.sections.map(([heading, paragraph]) => <section key={heading}><h2>{heading}</h2><p>{paragraph}</p></section>)}<section><h2>Apply the routine in practice</h2><p>{closing}</p></section><section><h2>Test the handoff</h2><p>{applicationNote}</p></section><section><h2>Owner review prompt</h2><p>Which part of {sourcePost.focus} can be prepared by an outsourced support role, which part needs evidence, and which decision remains with the owner?</p></section></article><CTA /></>;
}

function AugustThirtyOneArticle({ index }: { index: number }) {
  const post = augustThirtyOneBlogBatch[index];
  const url = `${baseUrl}/blog/${post.slug}`;
  const related = augustThirtyOneBlogBatch.filter((_, i) => i !== index).slice(index % 9, index % 9 + 3);
  const schema = {'@context':'https://schema.org','@type':'Article',headline:post.title,description:post.excerpt,datePublished:post.publicationDate,dateModified:post.publicationDate,mainEntityOfPage:url,image:`${baseUrl}${post.imagePath}`,author:{'@type':'Organization',name:site.brand},publisher:{'@type':'Organization',name:site.brand,url:baseUrl}};
  return <><JsonLd data={schema}/><article className="container guide-article strict-article" data-article-family="blog" data-batch="2026-08-31"><p className="eyebrow">Daily publishing operations guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><time dateTime={post.publicationDate}>August 31, 2026</time><figure><img src={post.imagePath} alt={`${post.focus} workflow prepared for owner review`}/></figure>{post.sections.map(([heading,body],i)=><section key={heading}><h2>{heading}</h2><p>{body}</p>{i===1&&<p>For a related control, see <a href={`/blog/${related[0].slug}`}>{related[0].title}</a>. The <a href="https://www.sba.gov/business-guide/manage-your-business" target="_blank" rel="noreferrer">U.S. Small Business Administration management guide</a> provides broader operating context.</p>}{i===4&&<p>Continue with <a href={`/blog/${related[1].slug}`}>{related[1].title}</a> when the workflow reaches review.</p>}</section>)}<section><h2>Related daily publishing guides</h2><div className="fleet-card-grid">{related.map(p=><a className="fleet-card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p></a>)}</div></section></article><CTA/></>;
}

function AugustTwentyThreeV8Article({ index }: { index: number }) {
  const post = augustTwentyThreeV8BlogBatch[index];
  const url = `${baseUrl}/blog/${post.slug}`;
  const schema = {'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,url,datePublished:post.publicationDate,dateModified:post.publicationDate,mainEntityOfPage:url,author:{'@type':'Organization',name:site.brand},publisher:{'@type':'Organization',name:site.brand,url:baseUrl}};
  return <><JsonLd data={schema}/><article className="container guide-article strict-article" data-article-family="blog" data-batch="2026-08-23"><p className="eyebrow">Small business outsourcing guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><time dateTime="2026-08-23">August 23, 2026</time>{post.sections.map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}</article><CTA/></>;
}

function SeptemberThreeArticle({ index }: { index: number }) {
  const post = septemberThreeBlogBatch[index];
  const url = `${baseUrl}/blog/${post.slug}`;
  const schema = {'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,url,datePublished:post.publicationDate,dateModified:post.publicationDate,mainEntityOfPage:url,author:{'@type':'Organization',name:site.brand},publisher:{'@type':'Organization',name:site.brand,url:baseUrl}};
  return <><JsonLd data={schema}/><article className="container guide-article strict-article" data-article-family="blog" data-batch="2026-09-03"><p className="eyebrow">Small business outsourcing guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><time dateTime="2026-09-03">September 3, 2026</time>{post.sections.map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}</article><CTA/></>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const detail = detailsBySlug[slug];
  const richDetail = richDetailsBySlug[slug];
  const daily = dailyBySlug.get(slug);
  const augustEleven = augustElevenBySlug.get(slug);
  const augustThirteen = augustThirteenBySlug.get(slug);
  const augustFourteen = augustFourteenBySlug.get(slug);
  const augustSeventeen = augustSeventeenBySlug.get(slug);
  const augustEighteen = augustEighteenBySlug.get(slug);
  const augustTwenty = augustTwentyBySlug.get(slug);
  const augustTwentyOne = augustTwentyOneBySlug.get(slug);
  const augustTwentyThree = augustTwentyThreeBySlug.get(slug);
  const augustThirtyOne = augustThirtyOneBySlug.get(slug);
  const augustTwentyThreeV8 = augustTwentyThreeV8BySlug.get(slug);
  const septemberThree = septemberThreeBySlug.get(slug);
  return <><Header articleMode /><main className="section">{septemberThree ? <SeptemberThreeArticle index={septemberThree.index} /> : augustTwentyThreeV8 ? <AugustTwentyThreeV8Article index={augustTwentyThreeV8.index} /> : augustThirtyOne ? <AugustThirtyOneArticle index={augustThirtyOne.index} /> : augustTwentyThree ? <AugustTwentyThreeArticle index={augustTwentyThree.index} /> : augustTwentyOne ? <AugustTwentyOneArticle post={post} index={augustTwentyOne.index} /> : augustTwenty ? <AugustTwentyArticle post={post} index={augustTwenty.index} /> : augustEighteen ? <AugustEighteenArticle post={post} index={augustEighteen.index} /> : augustSeventeen ? <AugustSeventeenArticle post={post} index={augustSeventeen.index} /> : augustFourteen ? <AugustFourteenArticle post={post} index={augustFourteen.index} /> : augustThirteen ? <AugustThirteenArticle post={post} index={augustThirteen.index} /> : augustEleven ? <AugustElevenArticle post={post} index={augustEleven.index} /> : richDetail ? <StrictEvidenceArticle post={post} detail={richDetail} /> : detail ? <RichArticle post={post} detail={detail} /> : daily ? <DailyArticle post={post} focus={daily.focus} index={daily.index} /> : <><LegacyArticle post={post} /><CTA /></>}</main><Footer articleMode /></>;
}
