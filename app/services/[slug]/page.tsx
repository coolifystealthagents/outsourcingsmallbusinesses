const fieldPhotos: Record<string,[string,string]> = {"operations-support": ["/design-photography/5946222.webp", "Small business team coordinating work around a laptop"], "customer-support": ["/design-photography/8101573.webp", "Two colleagues reviewing information on a laptop"], "administrative-support": ["/design-photography/6953814.webp", "woman talking excitedly in an office"], "reporting-quality-assurance": ["/design-photography/7658322.webp", "Colleagues reviewing a written report together"], "finance-accounting": ["/design-photography/4476375.webp", "Preparing financial records with a calculator and notebook"], "local-service-scheduling": ["/design-photography/19915770.webp", "woman hand with marker over calendar and notepad"], "small-business-bookkeeping": ["/design-photography/6694965.webp", "a person counting money"], "ecommerce-order-support": ["/design-photography/7289733.webp", "woman smiling while holding the package"], "lead-intake-administration": ["/design-photography/7869385.webp", "Colleagues organizing incoming work with a laptop and printed records"], "invoice-follow-up": ["/design-photography/3790830.webp", "An accountant reviewing the contents of a file folder"], "customer-inbox-management": ["/design-photography/8867440.webp", "a woman wearing a headset"], "social-content-administration": ["/design-photography/7653771.webp", "women looking at the screen of a laptop"], "supplier-coordination": ["/design-photography/9301293.webp", "Two colleagues checking paperwork beside a business report"], "review-response-drafting": ["/design-photography/9903254.webp", "Business owner reviewing written notes at a desk"], "owner-dashboard-reporting": ["/design-photography/7688110.webp", "Reviewing printed business charts beside a laptop"]};
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
    <nav className="brief-nav" aria-label="On this page"><a href="#service-plan">Responsibilities</a><a href="#launch">Getting started</a><a href="#questions">Questions</a></nav>
    <section className="brief-section" id="service-plan"><div className="brief-shell"><div className="brief-context"><p className="eyebrow">Take this off your desk</p><p>{service.buyerProblem}</p></div><div className="brief-columns"><article><h2>Work we can handle</h2><ul>{service.tasks.map(item=><li key={item}>{item}</li>)}</ul><p className="brief-note"><strong>Tools in the workflow</strong><br/>{service.tools.join(', ')}</p></article><aside className="brief-output"><p className="eyebrow">What comes back to you</p><h2>A useful, visible result</h2><ul>{service.deliverables.map(item=><li key={item}>{item}</li>)}</ul></aside></div></div></section>
    <section className="brief-section brief-tint" id="launch"><div className="brief-shell"><div className="brief-heading"><p className="eyebrow">Start small. Check the work.</p><h2>Your first-week plan</h2></div><ol className="brief-steps">{service.launch.map((item,i)=><li key={item}><p>{item}</p></li>)}</ol></div></section>
    <section className="brief-section"><div className="brief-shell brief-columns"><article><p className="eyebrow">Keep control</p><h2>Decisions that stay yours</h2><ul>{service.boundaries.map(item=><li key={item}>{item}</li>)}</ul></article><article><p className="eyebrow">Know whether it is working</p><h2>What to review together</h2><ul>{service.measures.map(item=><li key={item}>{item}</li>)}</ul><p className="brief-note">Compare with your starting point before adding volume or access. These are review measures, not performance guarantees.</p></article></div></section>
    <section className="brief-section brief-tint" id="questions"><div className="brief-shell"><div className="brief-heading"><p className="eyebrow">Before you delegate</p><h2>Common questions</h2></div><div className="brief-faq">{service.faqs.map(faq=><details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div><nav className="brief-related" aria-label="More services"><a href="/services">Explore all small-business services ↗</a></nav></div></section>
    <CTA />
  </main><Footer /></>;
}
