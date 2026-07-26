import { JsonLd } from '../../components';
import { site } from '../../data';
import type { RichBlogDetail } from '../../rich-blog-data';

const baseUrl = 'https://outsourcingsmallbusinesses.com';

type Post = { slug: string; title: string; excerpt: string; minutes: number };

export function StrictEvidenceArticle({ post, detail }: { post: Post; detail: RichBlogDetail }) {
  const url = `${baseUrl}/blog/${post.slug}`;
  const articleId = `${url}#article`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': articleId,
        headline: post.title,
        description: post.excerpt,
        url,
        datePublished: '2026-07-25',
        dateModified: '2026-07-25',
        author: { '@type': 'Organization', name: site.brand },
        publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
        citation: detail.sources.map((source) => source.url),
        hasPart: detail.sections.map((section, index) => ({ '@type': 'WebPageElement', position: index + 1, name: section.heading }))
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
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url }
        ]
      }
    ]
  };

  const Banner = ({ index }: { index: number }) => {
    const banner = detail.banners[index];
    return <aside className="article-banner" data-banner-position={index + 1} aria-label={banner.label}>
      <div><p className="eyebrow">{banner.label}</p><h2>{banner.title}</h2><p>{banner.body}</p></div>
      <a className="btn primary" href={banner.href}>{banner.cta}</a>
    </aside>;
  };

  return <>
    <JsonLd data={schema} />
    <article className="container guide-article strict-article" data-article-revision={detail.revision}>
      <p className="eyebrow">{detail.eyebrow}</p>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>

      <section className="guide-takeaways" aria-labelledby="strict-takeaways">
        <h2 id="strict-takeaways">The short answer</h2>
        <ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="evidence-chart" aria-labelledby="breach-chart-heading">
        <p className="eyebrow">2026 evidence check</p>
        <h2 id="breach-chart-heading">Why small access steps matter</h2>
        <div className="visual-scroll" data-scroll-cue="Swipe to read the chart">
        <svg className="article-chart-svg" viewBox="0 0 760 330" role="img" aria-labelledby="breach-chart-title breach-chart-desc">
          <title id="breach-chart-title">Three findings from Verizon's 2026 Data Breach Investigations Report</title>
          <desc id="breach-chart-desc">Horizontal bars show 31 percent for breaches starting with software vulnerabilities, 48 percent for breaches involving ransomware, and 15 percent for attack techniques bolstered by generative AI.</desc>
          {detail.stats.map((stat, index) => {
            const y = 38 + index * 92;
            return <g key={stat.shortLabel}>
              <text x="0" y={y} className="chart-label">{stat.shortLabel}</text>
              <rect x="0" y={y + 18} width="680" height="30" rx="8" className="chart-track" />
              <rect x="0" y={y + 18} width={stat.value * 6.8} height="30" rx="8" className="chart-bar" />
              <text x={Math.min(stat.value * 6.8 + 12, 700)} y={y + 40} className="chart-value">{stat.value}%</text>
              <text x="0" y={y + 70} className="chart-detail">{stat.label}</text>
            </g>;
          })}
        </svg>
        </div>
        <p className="methods-note">{detail.methodsNote}</p>
      </section>

      <Banner index={0} />

      <section aria-labelledby="access-table-heading">
        <p className="eyebrow">Permission map</p>
        <h2 id="access-table-heading">Match each task to a smaller account role</h2>
        <p>Use this table as a starting point, then adjust it to the tools and records in your business. Each row keeps a sensitive decision with the owner and gives the specialist a visible way to prove the work.</p>
        <div className="guide-table-wrap" data-scroll-cue="Swipe to see all columns">
          <table className="guide-table access-table">
            <thead><tr><th>Task</th><th>Specialist access</th><th>Owner keeps</th><th>Work proof</th></tr></thead>
            <tbody>{detail.tableRows.map((row) => <tr key={row.task}><th scope="row">{row.task}</th><td>{row.access}</td><td>{row.owner}</td><td>{row.proof}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      {detail.sections.slice(0, 3).map((section) => <section key={section.heading} className="guide-section strict-copy-section">
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>)}

      <Banner index={1} />

      <section className="expert-quote" aria-labelledby="expert-quote-heading">
        <p className="eyebrow">Exact source quote</p>
        <h2 id="expert-quote-heading">Do not trust an account because of its location</h2>
        <blockquote>"{detail.quote.text}"</blockquote>
        <p><a href={detail.quote.url} target="_blank" rel="noreferrer">{detail.quote.attribution}</a></p>
      </section>

      <section className="access-graphic" aria-labelledby="access-graphic-heading">
        <p className="eyebrow">Account life cycle</p>
        <h2 id="access-graphic-heading">The owner-controlled access loop</h2>
        <div className="visual-scroll" data-scroll-cue="Swipe to follow all four steps">
        <svg className="article-process-svg" viewBox="0 0 820 260" role="img" aria-labelledby="access-loop-title access-loop-desc">
          <title id="access-loop-title">Four-step account access loop</title>
          <desc id="access-loop-desc">Request the minimum access, grant a named account, review work and logs, then remove access and transfer files.</desc>
          <path d="M115 112 H705" className="process-line" />
          {detail.graphicSteps.map((item, index) => {
            const x = 115 + index * 197;
            return <g key={item.step}>
              <circle cx={x} cy="112" r="44" className="process-node" />
              <text x={x} y="120" textAnchor="middle" className="process-number">{item.step}</text>
              <text x={x} y="180" textAnchor="middle" className="process-label">{item.label}</text>
              <text x={x} y="210" textAnchor="middle" className="process-note">{item.note}</text>
            </g>;
          })}
        </svg>
        </div>
        <p>The loop belongs to the business, even when a provider helps with onboarding. Keep the account list and closing steps in a place the owner can reach without asking the worker to sign in.</p>
      </section>

      {detail.sections.slice(3).map((section) => <section key={section.heading} className="guide-section strict-copy-section">
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>)}

      <section className="guide-script" aria-labelledby="access-script-heading">
        <p className="eyebrow">Copy-ready handoff</p>
        <h2 id="access-script-heading">Account access message for a new specialist</h2>
        <ol>{detail.accessScript.map((line) => <li key={line}>{line}</li>)}</ol>
      </section>

      <Banner index={2} />

      <section aria-labelledby="related-plans-heading">
        <h2 id="related-plans-heading">Keep planning the work</h2>
        <ul className="related-plans">{detail.internalLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
      </section>

      <section className="guide-faq" aria-labelledby="strict-faq-heading">
        <h2 id="strict-faq-heading">Questions small business owners ask</h2>
        {detail.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
      </section>

      <section className="guide-sources numbered-sources" aria-labelledby="strict-sources-heading">
        <h2 id="strict-sources-heading">Numbered sources</h2>
        <ol>{detail.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a><span>{source.note}</span></li>)}</ol>
      </section>
    </article>
  </>;
}
