import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const baseUrl = `https://${site.domain.toLowerCase()}`;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service?.title || 'Service',
    description: service?.desc,
    alternates: service ? { canonical: `/services/${service.slug}` } : undefined,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        name: `${service.title} for small businesses`,
        url: serviceUrl,
        description: service.desc,
        isPartOf: { '@type': 'WebSite', name: site.brand, url: baseUrl },
        mainEntity: { '@id': `${serviceUrl}#service` },
        hasPart: [
          { '@id': `${serviceUrl}#first-week-plan` },
          { '@id': `${serviceUrl}#faq` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: `${service.title} staffing support`,
        serviceType: service.title,
        provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
        areaServed: 'United States',
        audience: { '@type': 'BusinessAudience', audienceType: 'Small business owners' },
        description: service.desc,
      },
      {
        '@type': 'HowTo',
        '@id': `${serviceUrl}#first-week-plan`,
        name: `How to launch ${service.title.toLowerCase()} in the first week`,
        step: service.firstWeek.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step,
          text: step,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${serviceUrl}#faq`,
        mainEntity: service.faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title} for small businesses</h1>
              <p className="lead">{service.desc}</p>
              <p className="callout"><b>Common problem:</b> {service.buyerProblem}</p>
              <a className="btn primary" href="/contact">Build my role plan</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt="A professional working at a laptop in a bright workspace" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Role fit</p>
            <h2>Use this support for work that repeats.</h2>
            <div className="cards">
              <div className="card">
                <h3>Best tasks</h3>
                <ul className="list">
                  {service.bestTasks.map((task) => <li key={task}>{task}</li>)}
                </ul>
              </div>
              <div className="card">
                <h3>Quality controls</h3>
                <ul className="list">
                  {service.qualityControls.map((control) => <li key={control}>{control}</li>)}
                </ul>
              </div>
              <div className="card">
                <h3>Owner keeps control of</h3>
                <ul className="list">
                  <li>money decisions</li>
                  <li>customer risk or legal issues</li>
                  <li>tool access changes</li>
                  <li>new process rules</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section band" id="first-week-plan">
          <div className="container two">
            <div>
              <p className="eyebrow">First week launch</p>
              <h2>Start narrow, then add more work.</h2>
              <p>A small business does not need a giant handoff doc on day one. It needs a few clear tasks, safe access, and a fast review loop.</p>
            </div>
            <div className="card">
              <ol className="list">
                {service.firstWeek.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <p className="eyebrow">Buyer questions</p>
            <h2>Good questions before you hire.</h2>
            <div className="cards">
              {service.faqs.map((item) => (
                <div className="card" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
