const fieldPhotos: Record<string,[string,string]> = {"operations-support": ["/design-photography/7857559.webp", "female business partners preparing parcels"], "customer-support": ["/design-photography/7709189.webp", "people working in an office with their laptops"], "administrative-support": ["/design-photography/6953814.webp", "woman talking excitedly in an office"], "reporting-quality-assurance": ["/design-photography/5946222.webp", "a group of people having a meeting in the office"], "finance-accounting": ["/design-photography/34862432.webp", "calculating finances at night in office setting"], "local-service-scheduling": ["/design-photography/19915770.webp", "woman hand with marker over calendar and notepad"], "small-business-bookkeeping": ["/design-photography/6694965.webp", "a person counting money"], "ecommerce-order-support": ["/design-photography/7289733.webp", "woman smiling while holding the package"], "lead-intake-administration": ["/design-photography/12911205.webp", "woman noting in calendar"], "invoice-follow-up": ["/design-photography/7688110.webp", "woman with documents and laptop in an office"], "customer-inbox-management": ["/design-photography/8867440.webp", "a woman wearing a headset"], "social-content-administration": ["/design-photography/7653771.webp", "women looking at the screen of a laptop"], "supplier-coordination": ["/design-photography/5945809.webp", "a group of people having a meeting in the office"], "review-response-drafting": ["/design-photography/7709252.webp", "a woman wearing a headset"], "owner-dashboard-reporting": ["/design-photography/29509437.webp", "open planner with 2025 date and office supplies"]};
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from '../../components';
import { site } from '../../data';
import { fleetServices } from '../../service-data';

export function generateStaticParams() { return fleetServices.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return {};
  const url = `https://${site.domain.toLowerCase()}/services/${service.slug}`;
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.summary, url },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const url = `https://${site.domain.toLowerCase()}/services/${service.slug}`;
  return <><Header /><main className="fleet-main service-detail"><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.summary, url, areaServed: 'Philippines' }} />
    <section className="fleet-hero"><div className="container service-hero-grid"><div><p className="eyebrow">Philippines-based specialist support</p><h1>{service.title}</h1><p className="lead">{service.summary}</p><div className="actions"><a className="btn primary" href="/contact-us">Book a free call</a><a className="text-link" href="#service-plan">Review the work plan</a></div></div><img className="service-illustration" src={fieldPhotos[service.slug][0]} alt={fieldPhotos[service.slug][1]} /></div></section>
    <section className="section problem-section"><div className="container narrow"><p className="eyebrow">The owner problem</p><h2>Why this work needs a defined lane</h2><p className="lead">{service.buyerProblem}</p><p>A reliable handoff starts with a named source, a visible finish line, and a person who owns each exception. The specialist can prepare and maintain repeatable work while the business keeps decisions that affect money, policy, access, and unusual customer outcomes.</p></div></section>
    <section className="section alt" id="service-plan"><div className="container split-detail"><div><p className="eyebrow">Work the specialist can perform</p><h2>Practical responsibilities</h2><ul className="check-list">{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Owner-ready output</p><h2>Expected deliverables</h2><ul className="check-list">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="section"><div className="container"><p className="eyebrow">Tools and boundaries</p><h2>Fit the role to your real operating system</h2><div className="fleet-card-grid two"><article><h3>Common tools</h3><p>{service.tools.join(', ')}</p><p>Tool access should use named accounts, multifactor authentication where available, and only the permissions required for the approved work lane.</p></article><article><h3>Decisions that remain visible</h3><ul className="check-list">{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>
    <section className="section alt"><div className="container split-detail"><div><p className="eyebrow">Controlled start</p><h2>First-week launch plan</h2><ol className="number-list">{service.launch.map((item) => <li key={item}>{item}</li>)}</ol></div><div><p className="eyebrow">Review the lane</p><h2>Measures to watch</h2><ul className="check-list">{service.measures.map((item) => <li key={item}>{item}</li>)}</ul><p>These measures are review prompts, not performance guarantees. Compare them with the business baseline and the risk of each task before expanding access.</p></div></div></section>
    <section className="section"><div className="container narrow"><p className="eyebrow">Common questions</p><h2>Plan before you delegate</h2>{service.faqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    <CTA />
  </main><Footer /></>;
}
