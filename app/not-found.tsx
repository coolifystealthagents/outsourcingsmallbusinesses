import { Footer, Header } from './components';

export default function NotFound() {
  return <><Header/><main className="confirmation-page"><div className="container confirmation-card"><img src="/logo.svg" width="72" height="72" alt=""/><p className="eyebrow">Page not found</p><h1>This work lane has moved.</h1><p className="lead">The address may be outdated. Return to the homepage, review the service system, or contact us to plan a role.</p><div className="actions"><a className="btn primary" href="/">Return home</a><a className="text-link" href="/services">Explore services</a></div></div></main><Footer/></>;
}
