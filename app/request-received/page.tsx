import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'Request Received',
  description: 'Confirmation that your policy or general inquiry was received.',
  robots: { index: false, follow: false },
};

export default function RequestReceivedPage() {
  return <><Header /><main className="fleet-main"><section className="fleet-hero"><div className="container"><p className="eyebrow">Request received</p><h1>Thank you. Your inquiry has been sent.</h1><p className="lead">We will review your message and route it to the appropriate contact. No staffing call has been booked.</p><div className="hero-actions"><a className="button" href="/">Return to the homepage</a><a className="button secondary" href="/contact-us?inquiry=general#contact-form">Send another inquiry</a></div></div></section></main><Footer /></>;
}
