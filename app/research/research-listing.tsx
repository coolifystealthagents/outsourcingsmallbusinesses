import { notFound } from "next/navigation";
import { Header, Footer } from "../components";
import { researchPosts } from "../fleet-content";
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
export const PAGE_SIZE = 24;
export const uniqueResearchPosts = researchPosts.filter((post, index, posts) => posts.findIndex(candidate => candidate.slug === post.slug) === index);
export function ResearchListing({ page = 1 }: { page?: number }) {
  const totalPages = Math.max(1, Math.ceil(uniqueResearchPosts.length / PAGE_SIZE));
  if (!Number.isInteger(page) || page < 1 || page > totalPages) notFound();
  const ordered = [...uniqueResearchPosts].sort(
    (a, b) =>
      b.published.localeCompare(a.published) || a.slug.localeCompare(b.slug),
  );
  return (
    <>
      <Header />
      <main className="fleet-main research-directory">
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Research library</p>
            <h1>Research for planning Philippines-based teams</h1>
            <p className="lead">
              Sourced notes about role design, operating controls, and staffing
              decisions for small businesses.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-card-grid">
            {ordered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((p) => (
              <a
                className="fleet-card"
                href={`/research/${p.slug}`}
                key={p.slug}
              >
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                <p className="eyebrow">
                  Published <time dateTime={p.published}>{formatDate(p.published)}</time>
                </p>
              </a>
            ))}
          </div>
          <nav className="pagination container" aria-label="Research pages">
            {Array.from({length: totalPages}, (_, i) => i + 1).map(n => <a key={n} href={n === 1 ? "/research" : `/research/page/${n}`} aria-current={n === page ? "page" : undefined}>{n}</a>)}
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
