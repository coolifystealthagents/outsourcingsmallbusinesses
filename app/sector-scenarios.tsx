import './sector-scenarios.css';
const scenarios = [
  [
    "Local service businesses",
    "Turn incoming appointment requests into complete job notes: service requested, location, preferred time, and missing details. Use the owner\u2019s scheduling rules.",
    "A confirmed or approval-ready appointment queue; the owner controls quotes and exceptions.",
    "administrative-support"
  ],
  [
    "Independent retailers",
    "Use order details and the published store policy to prepare customer replies. Flag missing deliveries, damaged items, and refund requests for the authorized reviewer.",
    "Draft replies, current case notes, and a short list of owner decisions.",
    "customer-support"
  ],
  [
    "Small agencies and consultancies",
    "Track recurring client deliverables against agreed dates. Gather missing inputs and maintain a status report without making new promises on the owner\u2019s behalf.",
    "A weekly delivery list with an owner, due date, blocker, and next step.",
    "operations-support"
  ]
];
export function SectorScenarios() { return <section className="sector-scenarios" aria-labelledby="sector-examples-title"><p className="sector-scenarios__label">Practical service examples</p><h2 id="sector-examples-title">Start with the records your business already uses.</h2><div className="sector-scenarios__grid">{scenarios.map(([title,work,output,slug])=><article key={slug}><h3>{title}</h3><p>{work}</p><p><strong>Prepared output: </strong>{output}</p><a href={`/services/${slug}`}>Review the service scope →</a></article>)}</div><p>Agree the coverage window, source-system access, review owner, and escalation rules before assigning live work.</p></section>; }
