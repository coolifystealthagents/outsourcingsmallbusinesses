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
  return <header data-site-header="sticky" className="nav fleet-nav"><a className="skip-link" href="#main-content">Skip to main content</a><div className="nav-inner">
    <div className="brand-with-parent"><a className="logo" href="/" aria-label="Outsourcing Small Businesses home"><LogoMark /></a><PoweredBy /></div>
    <SiteNavigation />
  </div></header>;
}

export function Footer(_props: { articleMode?: boolean } = {}) {
  return <footer data-site-footer="true" className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/"><LogoMark /></a><p>{site.brand || 'Outsourcing Small Businesses'} helps owner-led companies define Philippines-based support roles with clear scopes, review points, and approval boundaries.</p><PoweredBy /></div><div><h3>Explore</h3><nav data-footer-menu="true" className="footer-links" aria-label="Footer navigation"><a href="/services">Services</a><a href="/blog">Guides</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a></nav></div><div><h3>Policies</h3><nav data-footer-menu="true" className="footer-links" aria-label="Footer policies"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms and Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></nav></div></div><section className="site-parent-company" aria-label="Powered by StealthAgents"><a className="site-parent-logo" href="https://stealthagents.com/" aria-label="Visit StealthAgents"><img src="/stealthagents-parent-logo.png" alt="StealthAgents" width="158" height="53" loading="lazy" /></a><div><h2>Powered by StealthAgents</h2><p>StealthAgents recruits and supports the remote professionals behind our services, from matching and onboarding to ongoing team support.</p><a className="site-parent-link" href="https://stealthagents.com/">Explore StealthAgents ↗</a></div></section><div className="footer-bottom"><span>© {year} {site.brand || 'Outsourcing Small Businesses'}. All rights reserved.</span><span>{domain} is powered by StealthAgents</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta"><p className="eyebrow">Free role planning call</p><h2>Build a clearer work lane.</h2><p>Share the role, tools, schedule, and approval needs. We will use those details to prepare a practical Philippines staffing conversation.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>;
}
