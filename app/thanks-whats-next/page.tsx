import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'Your Consultation Is Booked',
  description: 'Your Outsourcing Small Businesses consultation booking is confirmed.',
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return <><Header/><main className="confirmation-page"><div className="container confirmation-card"><img src="/logo.svg" width="72" height="72" alt=""/><p className="eyebrow">Booking confirmed</p><h1>Your consultation is on the calendar.</h1><p className="lead">Thank you. Bring one recurring task, a real example, the tools involved, and the decisions that should stay with you. That gives the conversation a practical starting point.</p><div className="actions"><a className="btn primary" href="/services">Review the service lanes</a><a className="text-link" href="/">Return home</a></div></div></main><Footer/></>;
}
