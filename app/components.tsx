import * as data from './data';

const dataAny = data as any;
const site = dataAny.site || {};
const footerItems = (dataAny.services || dataAny.roles || dataAny.industries || dataAny.blogPosts || []).slice(0, 6);
const domain = site.domain || 'this site';
const year = new Date().getFullYear();
const getTitle = (item: any) => typeof item === 'string' ? item : (item.title || item.name || item.label || item.question || String(item));
const getSlug = (item: any) => typeof item === 'string'
  ? item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  : (item.slug || getTitle(item).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap">
    <img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" />
    <span className="logo-name">{site.brand || domain}</span>
  </span>;
}

export function Header() {
  return <header className="nav">
    <div className="nav-inner">
      <a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
      <nav className="links" aria-label="Main navigation">
        <a href="/#tasks">Work to hand off</a>
        <a href="/#work-board">How it starts</a>
        <a href="/blog">Guides</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="btn nav-cta" href="/contact">Build my role plan</a>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer legit-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
        <p>Practical role planning for small businesses that want recurring work handled by Filipino talent.</p>
        <p className="footer-note">This is an independent informational website. Staffing teams accepting requests through the site recruit and hire only in the Philippines. We may route your request to one of those teams for follow-up.</p>
      </div>
      <div>
        <h3>Work to hand off</h3>
        <div className="footer-links">{footerItems.map((item: any, index: number) => <a href={`/services/${getSlug(item)}`} key={index}>{getTitle(item)}</a>)}</div>
      </div>
      <div>
        <h3>Site</h3>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/blog">Guides</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms and conditions</a>
          <a href="/cancellation-policy">Cancellation policy</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom"><span>© {year} {site.brand || domain}. All rights reserved.</span><span>{domain}</span></div>
  </footer>;
}

export function CTA() {
  return <section className="final-cta">
    <p className="eyebrow">Start with the work</p>
    <h2>Turn the task list into a Filipino support role.</h2>
    <p>Share the work, tools, schedule, and approval limits. We will shape a practical role plan.</p>
    <a className="btn primary" href="/contact">Build my role plan</a>
  </section>;
}
