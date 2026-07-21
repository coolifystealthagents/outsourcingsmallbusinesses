import { Footer, Header } from '../components';

export default function Thanks() {
  return <>
    <Header />
    <main className="section thank-you-page">
      <div className="container narrow">
        <p className="eyebrow">Role brief received</p>
        <h1>Your task list is in the right place.</h1>
        <p className="lead">A staffing team can review the work, tools, schedule, and approval limits you shared, then follow up about a Filipino talent plan.</p>
        <a className="btn primary" href="/">Back to the homepage</a>
      </div>
    </main>
    <Footer />
  </>;
}
