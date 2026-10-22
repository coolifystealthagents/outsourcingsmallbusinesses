import * as data from './data';
import { SiteNavigation } from './site-navigation';
const site = (data as any).site || {};
const domain = site.domain || 'OutsourcingSmallBusinesses.com';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  const sanitized = JSON.stringify(data).replaceAll('\u2014', ', ').replaceAll('\u2013', '-');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sanitized }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" width="40" height="40" alt="" /><span className="logo-name">{site.brand || 'Outsourcing Small Businesses'}</span></span>;
}

function PoweredBy() {
  return <a className="powered-by" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer"><span>Powered by</span><img src="/brand/stealth-agents-logo.png" width="104" height="35" alt="StealthAgents" /></a>;
}

export function Header(_props: { articleMode?: boolean } = {}) {
  return <header className="nav fleet-nav"><a className="skip-link" href="#main-content">Skip to main content</a><div className="nav-inner">
    <a className="logo" href="/" aria-label="Outsourcing Small Businesses home"><LogoMark /></a>
    <SiteNavigation />
    <PoweredBy />
  </div></header>;
}

export function Footer(_props: { articleMode?: boolean } = {}) {
  return <footer className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/"><LogoMark /></a><p>{site.brand || 'Outsourcing Small Businesses'} helps owner-led companies define Philippines-based support roles with clear scopes, review points, and approval boundaries.</p><PoweredBy /></div><div><h3>Explore</h3><nav className="footer-links" aria-label="Footer navigation"><a href="/services">Services</a><a href="/blog">Guides</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a></nav></div><div><h3>Policies</h3><nav className="footer-links" aria-label="Footer policies"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms and Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></nav></div></div><div className="footer-bottom"><span>© {year} {site.brand || 'Outsourcing Small Businesses'}. All rights reserved.</span><span>{domain} is powered by StealthAgents</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta"><p className="eyebrow">Free role planning call</p><h2>Build a clearer work lane.</h2><p>Share the role, tools, schedule, and approval needs. We will use those details to prepare a practical Philippines staffing conversation.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>;
}
