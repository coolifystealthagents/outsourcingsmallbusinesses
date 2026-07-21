import { Footer, Header, JsonLd } from './components';
import { blogPosts, services, site, staffingOffer } from './data';

const visibleServices = services.slice(0, 4);
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
    <main data-design="small-business-handoff-2026">
      <JsonLd data={schema} />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Filipino talent for small business teams</p>
            <h1>Hand off the busywork. Keep your hands on the business.</h1>
            <p className="lead">Build a Filipino support role around the work eating up your week, from inbox cleanup and customer follow-up to operations reporting.</p>
            <div className="actions">
              <a className="btn primary" href="/contact">Build my role plan</a>
              <a className="text-link" href="#work-board">See what to hand off <span aria-hidden="true">↓</span></a>
            </div>
            <p className="disclosure">Staffing teams accepting requests through this site recruit and hire only in the Philippines. Your request may be routed to one of those teams for follow-up.</p>
          </div>

          <div className="handoff-board" id="work-board" aria-label="Example small business handoff board">
            <div className="board-topline">
              <span>Owner's handoff board</span>
              <span className="board-status"><i /> Ready to scope</span>
            </div>
            <div className="board-photo">
              <img src="/filipino-support-workspace.jpg" alt="A professional at a laptop in a bright workspace" />
              <span className="photo-label">Illustrative workspace</span>
            </div>
            <div className="board-list">
              <div><span className="task-icon coral">01</span><p><strong>Inbox and calendar</strong><small>Draft, sort, schedule</small></p><b>Daily</b></div>
              <div><span className="task-icon mint">02</span><p><strong>Customer follow-up</strong><small>Reply, tag, escalate</small></p><b>Daily</b></div>
              <div><span className="task-icon navy">03</span><p><strong>Operations report</strong><small>Gather, check, flag</small></p><b>Weekly</b></div>
            </div>
            <div className="owner-line"><span>Owner approval stays with</span><strong>Money, people, exceptions</strong></div>
          </div>
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
          {visibleServices.map((service, index) => <a className="service-card" href={`/services/${service.slug}`} key={service.slug}>
            <span className="service-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <strong>Open the handoff guide <span aria-hidden="true">↗</span></strong>
          </a>)}
        </div>
      </section>

      <section className="scope-section">
        <div className="container scope-grid">
          <div className="scope-copy">
            <p className="eyebrow">A calmer first hire</p>
            <h2>Make the role small enough to explain.</h2>
            <p>A useful role plan names the work, the tools, the schedule, and the decisions that stay with you. That makes matching Filipino talent easier and gives everyone a fair start.</p>
            <a className="btn secondary" href="/contact">Map the first role</a>
          </div>
          <div className="scope-sheet">
            <div className="sheet-header"><span>Role brief / 01</span><b>Owner reviewed</b></div>
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
            {visibleGuides.map((post, index) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span>0{index + 1}</span>
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
        <a className="btn primary" href="/contact">Build my role plan</a>
      </section>
    </main>
    <Footer />
  </>;
}
