import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import StandardContactForm from './StandardContactForm';

export const metadata: Metadata = {
  title: 'Contact Outsourcing Small Businesses',
  description: 'Ask about small-business outsourcing support, privacy, terms, cancellation, or another website inquiry.',
};

export default function ContactUsPage() {
  return <><Header /><main className="fleet-main contact-page">
    <section className="fleet-hero contact-hero"><div className="container contact-intro">
      <div><p className="eyebrow">Staffing and website support</p><h1>Tell us how we can help your small business</h1><p className="lead">Choose staffing help for a free role-planning call, or select a policy or general inquiry to send a focused message without booking a sales call.</p><ul className="benefit-list"><li>Plan a practical outsourcing work lane</li><li>Ask a privacy, terms, or cancellation question</li><li>Send a general website inquiry</li></ul><img className="contact-illustration" src="/illustrations/getillustrations/humano-scenes/small-business-role-planning.svg" alt="Illustration of a small business team planning a support role" /></div>
      <div id="contact-form"><StandardContactForm endpoint="/api/contact" encoding="form" /></div>
    </div></section>
    <section className="section inclusions"><div className="container"><p className="eyebrow">What to include</p><h2>Share only the details relevant to your request</h2><div className="fleet-card-grid three"><article><h3>Staffing requests</h3><p>Share the recurring work, tools, schedule, and approval limits for the role.</p></article><article><h3>Policy requests</h3><p>Name the relevant policy and explain the access, correction, cancellation, or terms question.</p></article><article><h3>General inquiries</h3><p>Provide enough context for us to route your message without requesting unrelated details.</p></article></div></div></section>
  </main><Footer /></>;
}
