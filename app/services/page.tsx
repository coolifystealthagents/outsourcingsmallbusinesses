import { SectorScenarios } from "../sector-scenarios";
import { CTA, Footer, Header } from '../components';
import { fleetServices } from '../service-data';

export const metadata = { alternates: { canonical: 'https://outsourcingsmallbusinesses.com/services' }, title: 'Small Business Outsourcing Services', description: 'Explore realistic Philippines-based support services with clear deliverables, tools, owner controls, and launch plans.' };
const majorSlugs = new Set(['operations-support', 'customer-support', 'administrative-support', 'reporting-quality-assurance', 'finance-accounting']);

export default function ServicesPage() {
  const major = fleetServices.filter((service) => majorSlugs.has(service.slug));
  const focused = fleetServices.filter((service) => !majorSlugs.has(service.slug));
  return <><Header /><main className="fleet-main small-directory"><section className="fleet-hero"><div className="container service-hero-grid"><div><p className="eyebrow">Small business outsourcing services</p><h1>Help with the work that keeps coming back.</h1><p className="lead">Start with a clear problem, practical tasks, specific outputs, and owner approval boundaries. Every service below can be performed by a Philippines-based specialist without handing away business judgment.</p><a className="btn primary" href="/contact-us">Book a free call</a></div><img className="service-illustration field-photo" src="/design-photography/7436476.webp" alt="a woman packing orders" width={1440} height={960} loading="eager" fetchPriority="high" /></div></section>
    <section className="section"><div className="container"><p className="eyebrow">Core support categories</p><h2>Five ways to lighten your daily workload.</h2><div className="fleet-card-grid two">{major.map((service) => <article key={service.slug}><h3><a href={`/services/${service.slug}`}>{service.title}</a></h3><p>{service.summary}</p><a className="text-link" href={`/services/${service.slug}`}>Explore service ↗</a></article>)}</div></div></section>
    <section className="section alt"><div className="container"><p className="eyebrow">Specific tasks</p><h2>Need help with one specific task?</h2><div className="fleet-card-grid three">{focused.map((service) => <article key={service.slug}><h3><a href={`/services/${service.slug}`}>{service.title}</a></h3><p>{service.summary}</p><a className="text-link" href={`/services/${service.slug}`}>Explore service ↗</a></article>)}</div></div></section>
    <CTA />
  </main><Footer /></>;
}
