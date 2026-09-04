import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header, Footer } from "../../components";
import { researchPosts } from "../../fleet-content";
const formatPublicDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
export function generateStaticParams() {
  return researchPosts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = researchPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Research" };
  const url = `https://outsourcingsmallbusinesses.com/research/${post.slug}`;
  const modified = post.modified ?? post.published;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.published,
      modifiedTime: modified,
      images: post.imagePath ? [post.imagePath] : undefined,
    },
  };
}
export default async function ResearchArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = researchPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const articleUrl = `https://outsourcingsmallbusinesses.com/research/${post.slug}`;
  const modified = post.modified ?? post.published;
  const isAug31 = post.published === "2026-08-31";
  const isSep4 = post.published === "2026-09-04";
  const related = researchPosts
    .filter((p) => p.published === post.published && p.slug !== post.slug)
    .slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    dateModified: modified,
    mainEntityOfPage: articleUrl,
    image: post.imagePath
      ? `https://outsourcingsmallbusinesses.com${post.imagePath}`
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Outsourcing Small Businesses",
      url: "https://outsourcingsmallbusinesses.com",
    },
  };
  return (
    <>
      <Header />
      <main className="fleet-main">
        <article className="section article-shell">
          <link rel="canonical" href={articleUrl} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <meta property="article:published_time" content={post.published} />
          <meta property="article:modified_time" content={modified} />
          <p className="eyebrow">Small-business outsourcing research</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <time dateTime={post.published}>
            Published {formatPublicDate(post.published)}
          </time>
          {post.imagePath && (
            <img
              src={post.imagePath}
              alt={`${post.title} evidence workspace`}
              width="1536"
              height="1024"
              style={{ width: "100%", height: "auto", margin: "2rem 0" }}
            />
          )}
          {post.body.map((x, i) => (
            <p key={i}>{x}</p>
          ))}
        {(isAug31 || isSep4) && (
            <>
              <section>
                <h2>Sources</h2>
                <ul>
                  <li>
                    <a href="https://www.sba.gov/business-guide/manage-your-business">
                      U.S. Small Business Administration: Manage your business
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nist.gov/cyberframework">
                      NIST Cybersecurity Framework 2.0
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ftc.gov/business-guidance">
                      Federal Trade Commission business guidance
                    </a>
                  </li>
                  <li>
                    <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">
                      Google Search Central helpful content guidance
                    </a>
                  </li>
                </ul>
              </section>
              <section>
                <h2>Frequently asked questions</h2>
                <h3>
                  Does a favorable sample prove the routine caused the result?
                </h3>
                <p>
                  No. The design is observational and supports a bounded
                  operating decision, not a universal causal claim.
                </p>
                <h3>What should an owner review first?</h3>
                <p>
                  Start with high-consequence defects, missing denominators,
                  exceptions, and cases that required the owner to reconstruct
                  the evidence.
                </p>
              </section>
              <section>
                <h2>Related research</h2>
                <div className="fleet-card-grid">
                  {related.map((p) => (
                    <a
                      className="fleet-card"
                      href={`/research/${p.slug}`}
                      key={p.slug}
                    >
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                    </a>
                  ))}
                </div>
              </section>
            </>
          )}
          {post.serviceHandoff && (
            <aside
              className="article-handoff"
              aria-label="Related Philippines staffing service"
            >
              <h2>Need help with this work?</h2>
              <p>{post.serviceHandoff.description}</p>
              <a href={post.serviceHandoff.href}>{post.serviceHandoff.label}</a>
            </aside>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
