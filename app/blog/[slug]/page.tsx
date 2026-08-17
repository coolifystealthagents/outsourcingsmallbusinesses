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

const baseUrl = 'https://outsourcingsmallbusinesses.com';
type BlogDetail = (typeof blogDetails)[keyof typeof blogDetails];
const detailsBySlug = blogDetails as Partial<Record<string, BlogDetail>>;
const richDetailsBySlug = richBlogDetails as Partial<Record<string, RichBlogDetail>>;
const dailyBySlug = new Map<string, { title: string; excerpt: string; focus: string; index: number }>(dailyBlogBatch.map(([slug, title, excerpt, focus], index) => [slug, { title, excerpt, focus, index }]));
const augustElevenBySlug = new Map<string, { post: (typeof augustElevenBlogBatch)[number]; index: number }>(augustElevenBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustThirteenBySlug = new Map<string, { post: (typeof augustThirteenBlogBatch)[number]; index: number }>(augustThirteenBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustFourteenBySlug = new Map<string, { post: (typeof augustFourteenBlogBatch)[number]; index: number }>(augustFourteenBlogBatch.map((post, index) => [post.slug, { post, index }]));
const augustSeventeenBySlug = new Map<string, { post: (typeof augustSeventeenBlogBatch)[number]; index: number }>(augustSeventeenBlogBatch.map((post, index) => [post.slug, { post, index }]));

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
  return <><JsonLd data={schema} /><article className="container guide-article strict-article" data-article-family="blog" data-batch={sourcePost.publicationDate}><p className="eyebrow">Small business operations guide</p><h1>{sourcePost.title}</h1><p className="lead">{sourcePost.excerpt}</p><time dateTime={sourcePost.publicationDate}>August 17, 2026</time><section><h2>Quick answer</h2><p>{sourcePost.opening}</p><p>Use a named record, an approved handoff, and a clear owner decision point. The <a href={source} target="_blank" rel="noreferrer">U.S. Small Business Administration business guidance</a> provides broader context for organizing this kind of work.</p></section><section><h2>What to set up first</h2><ul>{sourcePost.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Keep the boundary clear</h2><p>{sourcePost.watchout}</p></section><section><h2>How to tell whether it is working</h2><p>{sourcePost.measure}</p></section><section><h2>Owner review question</h2><p>Which part of {sourcePost.focus} is a repeatable record update, and which decision should remain with the owner?</p></section></article><CTA /></>;
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
  return <><Header articleMode /><main className="section">{augustSeventeen ? <AugustSeventeenArticle post={post} index={augustSeventeen.index} /> : augustFourteen ? <AugustFourteenArticle post={post} index={augustFourteen.index} /> : augustThirteen ? <AugustThirteenArticle post={post} index={augustThirteen.index} /> : augustEleven ? <AugustElevenArticle post={post} index={augustEleven.index} /> : richDetail ? <StrictEvidenceArticle post={post} detail={richDetail} /> : detail ? <RichArticle post={post} detail={detail} /> : daily ? <DailyArticle post={post} focus={daily.focus} index={daily.index} /> : <><LegacyArticle post={post} /><CTA /></>}</main><Footer articleMode /></>;
}
