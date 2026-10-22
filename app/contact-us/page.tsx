import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { stealthAgentsReviews, reviewsProvenance } from '../reviews';
import StandardContactForm from './StandardContactForm';
import styles from './contact.module.css';

const pageUrl = 'https://outsourcingsmallbusinesses.com/contact-us';

export const metadata: Metadata = {
  title: 'Contact Outsourcing Small Businesses',
  description: 'Describe the recurring work, tools, schedule, and approval boundaries for a Philippines-based small-business support role.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { title: 'Contact Outsourcing Small Businesses', description: 'Build a practical Philippines-based support role for your small business.', url: pageUrl, type: 'website' },
};

function ReviewMarquee() {
  const loop = [...stealthAgentsReviews, ...stealthAgentsReviews];
  return <section className={styles.reviews} aria-labelledby="reviews-title">
    <div className={styles.reviewHeading}><div><p>Approved client feedback</p><h2 id="reviews-title">StealthAgents reviews</h2></div></div>
    <div className={styles.reviewViewport} tabIndex={0} aria-label="StealthAgents client reviews">
      <div className={styles.reviewTrack}>{loop.map((review, index) => <article className={styles.reviewCard} key={`${review.name}-${index}`} aria-hidden={index >= stealthAgentsReviews.length ? true : undefined}>
        <div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div>
        <h3>{review.name}</h3><blockquote>{review.quote}</blockquote><p>{review.role}</p>
      </article>)}</div>
    </div>
    <p className={styles.reviewSource}>{reviewsProvenance}</p>
  </section>;
}

export default function ContactUsPage() {
  return <><Header/><main className={styles.page}>
    <section className={styles.hero} aria-labelledby="contact-title"><div className={styles.foldGrid}>
      <div className={styles.story}><p className={styles.eyebrow}>Practical role planning for small teams</p><h1 id="contact-title">Hand off recurring work without handing away control.</h1><p className={styles.lead}>Share the tasks, tools, schedule, and decisions that keep returning to your desk. We will use them to prepare a focused Philippines-based support conversation.</p><ul><li>Start with repeatable work</li><li>Name the owner approval points</li><li>Review a narrow first lane</li></ul><ReviewMarquee/></div>
      <div id="contact-form" className={styles.formPanel}><StandardContactForm endpoint="/api/contact" encoding="form"/></div>
    </div></section>
    <section className={styles.parentBrand} aria-labelledby="parent-brand-title"><div className={styles.parentGrid}>
      <figure><img src="/brand/stealth-agents-team-bacolod.jpg" width="1906" height="1080" alt="Official Stealth Agents operations team in Bacolod"/><figcaption className={styles.officialPlate}><img src="/brand/stealth-agents-logo.png" width="104" height="35" alt="Stealth Agents"/><span>Official team, Bacolod</span></figcaption></figure>
      <div><p className={styles.eyebrow}>The managed-service partner</p><h2 id="parent-brand-title">Supported by the Stealth Agents operations team.</h2><p>Stealth Agents provides the recruiting, onboarding, account management, and operating support behind this service. The work lane is shaped around your examples and approval rules, while your business keeps authority over spending, policy, access, and unusual customer decisions.</p><a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Learn about Stealth Agents</a></div>
    </div></section>
    <section className={styles.guidance}><div><p className={styles.eyebrow}>Prepare for the call</p><h2>Bring the work, not a vague job title.</h2><p>A useful brief includes a real task example, the source system, the expected output, the review owner, and the point where the specialist must stop and ask.</p></div><dl><div><dt>Input</dt><dd>A real recurring request or record</dd></div><div><dt>Output</dt><dd>A visible, reviewable finish line</dd></div><div><dt>Boundary</dt><dd>Decisions that remain with your team</dd></div></dl></section>
  </main><Footer/></>;
}
