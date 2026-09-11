import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'Thank You: Book Your Call',
  description: 'Choose a convenient time for your Outsourcing Small Businesses role planning call.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <><Header /><main className="sa-booking-page"><div className="container sa-booking-grid">
    <div className="sa-booking-left"><p className="sa-booking-kicker">Your request was received.</p><h1>Step 2: Book your free call</h1><p className="sa-booking-lead">Choose a time to discuss the role, recurring work, tools, schedule, and owner approval limits.</p><img className="sa-booking-image" src="/illustrations/getillustrations/humano-scenes/small-business-role-planning.svg" alt="Illustration of a small business team preparing for a role planning call" width="619" height="402" /></div>
    <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title"><h2 id="booking-calendar-title">Pick a time that works for you</h2><iframe src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1" id="role-planning-calendar" name="RolePlanningCalendar" title="Schedule an Outsourcing Small Businesses role planning call" scrolling="yes" frameBorder="0" height="850" width="100%" className="sa-oncehub-frame" referrerPolicy="strict-origin-when-cross-origin" /></section>
  </div></main><Footer /></>;
}
