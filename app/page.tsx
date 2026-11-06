export const metadata = { alternates: { canonical: 'https://outsourcingsmallbusinesses.com/' } };
import { Footer, Header, JsonLd } from './components';
import { blogPosts, services, site, staffingOffer } from './data';

const visibleServices = services.slice(0, 4);
const serviceLinks = {
  'operations-support': '/services/operations-support',
  'customer-support': '/services/customer-support',
  'admin-support': '/services/administrative-support',
  'reporting-and-qa': '/services/reporting-quality-assurance',
} as const;
const visibleGuides = blogPosts.slice(0, 3);
const siteUrl = `https://${site.domain.toLowerCase()}`;

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: siteUrl,
    description: 'Plan a Filipino support role around the recurring work inside a small business.',
  };

  return <>
    <Header />
    <main data-design="small-business-handoff-2026" data-gi-rollout="two-illustration-packs-one-icon-pack">
      <JsonLd data={schema} />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Filipino talent for small business teams</p>
            <h1>More time to run your business.</h1>
            <p className="lead">Give a Philippines-based assistant a defined queue: appointment requests, customer follow-ups, order questions, or recurring client updates. Set the reply rules, review owner, and decisions that must come back to you.</p>
            <div className="actions">
              <a className="btn primary" href="/contact-us">Book a free call</a>
              <a className="text-link" href="#work-board">See what to hand off <span aria-hidden="true">↓</span></a>
            </div>
            <p className="disclosure">Staffing teams accepting requests through this site recruit and hire only in the Philippines. Your request may be routed to one of those teams for follow-up.</p>
          </div>

          <figure className="field-frame shop-front" id="work-board"><img className="field-photo" src="/design-photography/7289725.webp" alt="man preparing packages" width={1440} height={960} loading="eager" fetchPriority="high" /><figcaption>From order intake to dispatch</figcaption></figure>
        </div>
        <div className="container truth-strip">
          <span>Start with the work, not a vague job title.</span>
          <ul><li>Philippines-only hiring</li><li>Clear approval lines</li><li>Managed follow-up</li></ul>
        </div>
      </section>



      <section className="container section" id="tasks">
        <div className="section-heading">
          <p className="eyebrow">Where owners get stuck</p>
          <h2>Four work piles worth cleaning up.</h2>
          <p>You do not need to outsource everything. Pick the recurring work with a clear example, a clear finish line, and a clear point where the owner steps back in.</p>
        </div>
        <div className="service-grid">
          {visibleServices.map((service) => <a className="service-card" href={serviceLinks[service.slug]} key={service.slug}>
            <span className="service-number" aria-hidden="true">Handoff guide</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <strong>Open the handoff guide <span aria-hidden="true">↗</span></strong>
          </a>)}
        </div>
      </section>

<section className="field-story" aria-labelledby="field-story-title"><img src="/design-photography/7289743.webp" alt="man on the phone while woman busy packing" width={1200} height={800} loading="lazy"/><div><h2 id="field-story-title">What happens after the order ships?</h2><p className="field-intro">A customer writes because their parcel hasn’t arrived. The owner shouldn’t have to reconstruct the order from four inboxes.</p><p>An assistant checks the order, carrier scan and delivery promise, then drafts a reply using your approved policy.</p><p>If the package is missing or a refund is requested, you get the facts and tracking link together. The refund decision stays with you.</p><a href="/services/ecommerce-order-support">Explore order support <span aria-hidden="true">→</span></a></div></section>
      <section className="scope-section">
        <div className="container scope-grid">
          <div className="scope-copy">
            <p className="eyebrow">A calmer first hire</p>
            <h2>Make the role small enough to explain.</h2>
            <p>A useful role plan names the work, the tools, the schedule, and the decisions that stay with you. That makes matching Filipino talent easier and gives everyone a fair start.</p>
            <img className="scope-support-illustration field-photo" src="/design-photography/7857532.webp" alt="woman sitting at the table and packing orders" width={1440} height={960} loading="lazy" />
            <a className="btn secondary" href="/contact-us">Book a free call</a>
          </div>
          <div className="scope-sheet">
            <div className="sheet-header"><span>Role brief</span><b>Owner reviewed</b></div>
            <dl>
              <div><dt>Work to remove</dt><dd>Recurring admin and follow-up</dd></div>
              <div><dt>Tools involved</dt><dd>Inbox, calendar, CRM</dd></div>
              <div><dt>Quality check</dt><dd>Daily done list and sample review</dd></div>
              <div><dt>Owner keeps</dt><dd>Refunds, hiring, account changes</dd></div>
            </dl>
            <p className="sheet-note">One role. A short task list. No mystery handoff.</p>
          </div>
        </div>
      </section>

      <section className="container section fit-section">
        <div className="fit-intro">
          <p className="eyebrow">The working relationship</p>
          <h2>Support should remove checking, not create more of it.</h2>
        </div>
        <div className="fit-grid">
          <article className="fit-card fit-yes">
            <span>Included in the plan</span>
            <ul>{staffingOffer.included.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="fit-card fit-no">
            <span>Keep with the owner</span>
            <ul>
              <li>Unusual customer remedies and refunds</li>
              <li>Hiring, pricing, and legal decisions</li>
              <li>Broad account access before the process is proven</li>
              <li>Work that changes every time it appears</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="guide-section">
        <div className="container">
          <div className="guide-heading">
            <div><p className="eyebrow">Before the call</p><h2>Read these with a coffee and a pen.</h2></div>
            <a href="/blog">View all guides <span aria-hidden="true">→</span></a>
          </div>
          <div className="guide-list">
            {visibleGuides.map((post) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span aria-hidden="true">Read</span>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
              <b>{post.minutes} min</b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="container final-cta">
        <p className="eyebrow">Your next hire can start on paper</p>
        <h2>Tell us what keeps landing back on your desk.</h2>
        <p>We will use the work, tools, schedule, and approval limits to shape a practical role for Filipino talent.</p>
        <a className="btn primary" href="/contact-us">Book a free call</a>
      </section>
    </main>
    <Footer />
  </>;
}
