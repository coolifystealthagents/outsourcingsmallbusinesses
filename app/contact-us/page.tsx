import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { services } from "../data";
import StandardContactForm from "./StandardContactForm";
import styles from "./contact.module.css";


const pageUrl = "https://outsourcingsmallbusinesses.com/contact-us";
const prep = [
  "The recurring tasks taking owner time",
  "Tools, hours, examples, and access limits",
  "Approval owners and the result you need",
];


export const metadata: Metadata = {
  title: "Contact Outsourcing Small Businesses | Free Role Planning Call",
  description: "Plan small-business outsourcing around clear recurring work, controlled access, owner approvals, and reviewable outcomes.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { title: "Contact Outsourcing Small Businesses", description: "Build a practical Philippines-based support role for your small business.", url: pageUrl, type: "website" },
};


export default function ContactUsPage() {
  return <><Header/><main className={styles.page}>
    <section className={styles.hero}><div className={styles.shellGrid}>
      <div><p className={styles.eyebrow}>Support built for small teams</p><h1>Hand off recurring work without losing control.</h1><p className={styles.lead}>Tell us what keeps pulling you away from customers and growth. We’ll prepare a focused conversation about a Philippines-based support role with clear boundaries and ownership.</p><div className={styles.checks}>{prep.map(item => <span key={item}>✓ {item}</span>)}</div><a className={styles.powered} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a></div>
      <div id="consultation-form"><StandardContactForm endpoint="/api/contact" encoding="form"/></div>
    </div></section>
    <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>Prepare a useful brief</p><h2>Bring three things to the consultation.</h2><div className={styles.cards}>{prep.map((item, index) => <article key={item}><b>0{index + 1}</b><h3>{item}</h3><p>Real examples help turn a general need into work that can be trained and reviewed.</p></article>)}</div></div></section>
    <section className={`${styles.section} ${styles.soft}`}><div className={styles.shellGrid}><div><p className={styles.kicker}>Start small, learn quickly</p><h2>Choose one role that creates breathing room.</h2><p className={styles.sub}>Begin with repeatable work and a named reviewer. Keep spending, policy exceptions, customer promises, and final business decisions with your team.</p><a className={styles.textLink} href="#consultation-form">Plan my support role →</a></div><div className={styles.tags}>{services.slice(0, 8).map(service => <span key={service.slug}>{service.title}</span>)}</div></div></section>
    <section className={`${styles.section} ${styles.about}`}><div className={styles.shellGrid}><img src="/illustrations/getillustrations/humano-scenes/small-business-role-planning.svg" alt="Illustration of a small business team preparing a practical support role plan"/><div><p className={styles.kicker}>The staffing partner</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p><a className={styles.textLink} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a></div></div></section>
    <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>Make the first handoff safer</p><h2>Clarity that protects a growing business.</h2><div className={styles.cards}><article><h3>One accountable lane</h3><p>Define what enters the queue, what “done” means, and when to escalate.</p></article><article><h3>Only needed access</h3><p>Share the minimum systems and records required for the approved tasks.</p></article><article><h3>Visible review</h3><p>Check early work, questions, and exceptions before the role expands.</p></article></div></div></section>
    <section className={styles.final}><div className={styles.shell}><h2>Ready to reclaim time for the work only you can do?</h2><p>Share the tasks, schedule, tools, and ownership boundaries you need covered.</p><a href="#consultation-form">Book a free call</a></div></section>
  </main><Footer/></>;
}

