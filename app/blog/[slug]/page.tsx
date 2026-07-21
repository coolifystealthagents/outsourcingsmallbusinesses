import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const baseUrl = 'https://outsourcingsmallbusinesses.com';
type BlogDetail = (typeof blogDetails)[keyof typeof blogDetails];
const detailsBySlug = blogDetails as Partial<Record<string, BlogDetail>>;

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

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = detailsBySlug[slug];
  return <><Header /><main className="section">{detail ? <RichArticle post={post} detail={detail} /> : <><LegacyArticle post={post} /><CTA /></>}</main><Footer /></>;
}
