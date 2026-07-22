import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from '../components';
import { site } from '../data';
import { fleetServices } from '../fleet-content';

const baseUrl = `https://${site.domain.toLowerCase()}`;
const servicesUrl = `${baseUrl}/services`;
const description =
  'Compare focused small-business support services delivered by specialists based in the Philippines.';

export const metadata: Metadata = {
  title: 'Philippines small-business support services',
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Philippines small-business support services',
    description,
    url: servicesUrl,
    siteName: site.brand,
    type: 'website',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${servicesUrl}#webpage`,
      name: 'Philippines small-business support services',
      description,
      url: servicesUrl,
      mainEntity: { '@id': `${servicesUrl}#service-list` },
      breadcrumb: { '@id': `${servicesUrl}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${servicesUrl}#service-list`,
      name: 'Small-business support services delivered from the Philippines',
      numberOfItems: fleetServices.length,
      itemListElement: fleetServices.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.title,
        url: `${servicesUrl}/${service.slug}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${servicesUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: servicesUrl },
      ],
    },
  ],
};

export default function Services() {
  return (
    <>
      <Header />
      <main className="fleet-main fleet-outsourcingsmallbusinesses">
        <JsonLd data={schema} />
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Philippines-based services</p>
            <h1>Philippines small-business support, scoped around real work</h1>
            <p className="lead">
              Choose a focused service lane, then define the tools, examples, approvals, and reporting your Philippines-based specialist will use.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-card-grid">
            {fleetServices.map((service, index) => (
              <a className="fleet-card" href={`/services/${service.slug}`} key={service.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <b>View service →</b>
              </a>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
