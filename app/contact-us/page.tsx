import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import StandardContactForm from './StandardContactForm';

export const metadata: Metadata = {
  title: 'Book a Free Small Business Outsourcing Call',
  description: 'Tell us which recurring tasks, tools, schedule, and approval limits you want a Philippines-based specialist to support.',
};

export default function ContactUsPage() {
  return <><Header /><main className="fleet-main contact-page">
    <section className="fleet-hero contact-hero"><div className="container contact-intro">
      <div><p className="eyebrow">Free role planning call</p><h1>Plan the Philippines-based support role your small business needs</h1><p className="lead">Share the recurring work, tools, schedule, and decisions that must stay with you. We will use that context to make the first conversation specific.</p><ul className="benefit-list"><li>Define one practical work lane</li><li>Set access and approval boundaries</li><li>Prepare clear matching requirements</li></ul><img className="contact-illustration" src="/illustrations/getillustrations/humano-scenes/small-business-role-planning.svg" alt="Illustration of a small business team planning a support role" /></div>
      <div id="contact-form"><StandardContactForm endpoint="/api/contact" encoding="form" /></div>
    </div></section>
    <section className="section inclusions"><div className="container"><p className="eyebrow">Prepare for the call</p><h2>Bring the details that shape a useful role</h2><div className="fleet-card-grid three"><article><h3>Recurring work</h3><p>List tasks that repeat and show one accurate finished example.</p></article><article><h3>Operating context</h3><p>Name the tools, working hours, communication channels, and handoff points.</p></article><article><h3>Decision limits</h3><p>Identify money, access, policy, and customer decisions that stay with your manager.</p></article></div></div></section>
  </main><Footer /></>;
}
