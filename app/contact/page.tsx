import { Footer, Header, JsonLd } from '../components';
import { leadQuestions, site, staffingFitNote, staffingOffer } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Request a Filipino staffing role plan. Share the work, tools, schedule, and quality needs.',
};

export default function Contact() {
  const siteUrl = `https://${String(site.domain).toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
      ] },
    ],
  };

  return <>
    <Header />
    <main className="section contact-page">
      <JsonLd data={schema} />
      <div className="container two">
        <div>
          <p className="eyebrow">Staffing intake</p>
          <h1>Build a clear role for Filipino talent.</h1>
          <p className="lead">Tell us what keeps landing back on your desk. We will use the tasks, tools, schedule, and approval limits to shape the next conversation.</p>
          <div className="card">
            <h2>What the staffing team can map</h2>
            <ul className="list">{staffingOffer.included.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="card">
            <h2>Details that help</h2>
            <ul className="list">{leadQuestions.map(question => <li key={question}>{question}</li>)}</ul>
          </div>
          <p className="callout"><b>Philippines-only hiring:</b> {staffingFitNote}</p>
        </div>
        <form className="card intake-form" action="/thank-you">
          <h2>Tell us about the work</h2>
          <label>Name<input required name="name" /></label>
          <label>Email<input required name="email" type="email" /></label>
          <label>Company or website<input name="company" /></label>
          <label>What do you want a Filipino team member to handle?<textarea name="tasks" rows={6} /></label>
          <label>What needs the most care?
            <select name="concern">
              <option>Finding the right Filipino talent</option>
              <option>Quality checks and reporting</option>
              <option>Coverage and schedule</option>
              <option>Tool access and data safety</option>
              <option>Growing beyond one role</option>
            </select>
          </label>
          <button className="btn primary" type="submit">Send my role brief</button>
          <p className="form-note">We may route your request to a staffing team that recruits and hires only in the Philippines.</p>
        </form>
      </div>
    </main>
    <Footer />
  </>;
}
