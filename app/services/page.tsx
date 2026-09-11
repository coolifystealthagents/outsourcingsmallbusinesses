import { CTA, Footer, Header } from '../components';
import { fleetServices } from '../service-data';

export const metadata = { title: 'Small Business Outsourcing Services', description: 'Explore realistic Philippines-based support services with clear deliverables, tools, owner controls, and launch plans.' };
const majorSlugs = new Set(['operations-support', 'customer-support', 'administrative-support', 'reporting-quality-assurance', 'finance-accounting']);

export default function ServicesPage() {
  const major = fleetServices.filter((service) => majorSlugs.has(service.slug));
  const focused = fleetServices.filter((service) => !majorSlugs.has(service.slug));
  return <><Header /><main className="fleet-main"><section className="fleet-hero"><div className="container service-hero-grid"><div><p className="eyebrow">Small business outsourcing services</p><h1>Choose a support lane built around work your business actually repeats</h1><p className="lead">Start with a clear problem, practical tasks, specific outputs, and owner approval boundaries. Every service below can be performed by a Philippines-based specialist without handing away business judgment.</p><a className="btn primary" href="/contact-us">Book a free call</a></div><img className="service-illustration" src="/illustrations/getillustrations/goodle-business/owner-approved-remote-handoff.svg" alt="Illustration of a small business owner reviewing a support handoff" /></div></section>
    <section className="section"><div className="container"><p className="eyebrow">Core support categories</p><h2>Start with the lane that removes a repeated owner bottleneck</h2><div className="fleet-card-grid two">{major.map((service) => <article key={service.slug}><h3><a href={`/services/${service.slug}`}>{service.title}</a></h3><p>{service.summary}</p><a className="text-link" href={`/services/${service.slug}`}>Review tasks and controls</a></article>)}</div></div></section>
    <section className="section alt"><div className="container"><p className="eyebrow">Focused work lanes</p><h2>Delegate a narrower recurring queue</h2><div className="fleet-card-grid three">{focused.map((service) => <article key={service.slug}><h3><a href={`/services/${service.slug}`}>{service.title}</a></h3><p>{service.summary}</p><a className="text-link" href={`/services/${service.slug}`}>See the service plan</a></article>)}</div></div></section>
    <CTA />
  </main><Footer /></>;
}
