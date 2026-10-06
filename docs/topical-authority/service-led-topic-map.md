# Service-led topical map

This record tracks one reader-useful, Philippines-based staffing handoff. It is planning and delivery evidence, not public-rollout proof.

## Supplier coordination

- **Service pillar:** [`/services/supplier-coordination`](/services/supplier-coordination)
- **Reader question:** How can a small business keep supplier updates current without letting a support specialist approve changed terms or substitutions?
- **Supporting route:** [`/research/august-11-small-business-outsourcing-vendor-coordination`](/research/august-11-small-business-outsourcing-vendor-coordination)
- **Generated-route finding:** The fresh production artifact has the expected H1, one self-canonical link, one route-local `/services/supplier-coordination` link, and the visible preparation marker. Both source and destination are present in the generated sitemap; the sitemap intentionally has no `<lastmod>`.
- **Implementation:** The record uses a data-owned `serviceHandoff` in `app/fleet-content.ts` and the shared research renderer. There is no slug-specific rendering branch.
- **Required scope boundary:** The Philippines-based specialist may request updates and maintain dated supplier records. The owner or named manager retains purchasing, substitutions, changed terms, disputes, approvals, and other exceptions.
- **Rendered source:** `495659283f842cba9dea6fe5ac04c2db8af25d15` added the handoff. The research route keeps its publication date and emits modified date `2026-09-25`.
- **Status:** `delivered_locally`; this pair is not a candidate for another CTA.

## Delivery status — 2026-09-28

- **Rendered source:** `c7904a8199d2b2c9ab12a9107a28eb4d84727f2c` removes the duplicate canonical link from the shared research renderer and protects the one-canonical contract.
- **Local evidence:** `npm run lint`, `npm run test`, the relevant historical validators, a fresh 581-page production build, and the generated research-route probe passed. The route has the expected H1, one canonical link, the existing route-local Supplier Coordination href, the visible handoff marker, modified metadata `2026-09-25`, and sitemap source/destination locations.
- **Public evidence:** Cache-busted apex and www responses were HTML 200 with the expected H1, marker, and handoff href, but each still served two canonical links. The repository has neither a daily deployment manifest nor configured Coolify credentials for this scoped change, so no deployment was triggered.
- **Classification:** `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`. Preserve rendered-source commit `c7904a8199d2b2c9ab12a9107a28eb4d84727f2c`; the next approved deployment must release current `main` and recheck exact canonical-link count on both hosts.

## Delivery status — 2026-10-04

- **Rendered source:** `1fe682941f0d2f5ab009b88eaf3654de25230a68` adds route-specific canonical and Open Graph URLs to the shared generated service template. It changes metadata only; no service copy, sitemap input, or CTA changed.
- **Local evidence:** `npm test`, `npm run lint`, and a fresh 616-page production build passed. The five generated service artifacts each have one route-specific H1, canonical, Open Graph URL, and sitemap `<loc>`; `/services/operations-support` resolves to `https://outsourcingsmallbusinesses.com/services/operations-support` for both metadata fields.
- **Public evidence:** Cache-busted apex and www Operations Support pages each returned HTML 200 with the expected H1 and a sitemap entry, but both omit a canonical link and still emit `og:url` as `https://outsourcingsmallbusinesses.com`. No approved Coolify application ID or credentials are configured, so no deployment was triggered.
- **Classification:** `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`. Preserve rendered-source commit `1fe682941f0d2f5ab009b88eaf3654de25230a68`; do not add another service CTA. After an approved deployment releases current `main`, recheck the route-specific canonical and Open Graph URL on both hosts.

## October 5 research handoff reconciliation — 2026-10-06

This source-only audit records existing data-owned handoffs. It does not change a reader route, schema, sitemap input, or public-release state.

| Service pillar | Supporting research route | Reader question | Generated-route finding | Status |
| --- | --- | --- | --- | --- |
| [`/services/administrative-support`](/services/administrative-support) | [`/research/october-5-research-crm-duplicate-merge-reversibility`](/research/october-5-research-crm-duplicate-merge-reversibility) | Can a specialist prepare CRM merge evidence without deciding identity, consent, deletion, or merge approval? | The source `<main>` has one exact service href; source and destination have one self-canonical link, an expected H1, and sitemap locations. | Delivered locally; do not add another CTA. |
| [`/services/reporting-quality-assurance`](/services/reporting-quality-assurance) | [`/research/october-5-research-payroll-time-entry-exception-preparation`](/research/october-5-research-payroll-time-entry-exception-preparation) | Can a specialist prepare a payroll exception queue without deciding hours, rates, tax treatment, or payroll release? | The source `<main>` has one exact service href; source and destination have one self-canonical link, an expected H1, and sitemap locations. | Delivered locally; do not add another CTA. |
| [`/services/administrative-support`](/services/administrative-support) | [`/research/october-5-research-appointment-waitlist-offer-control`](/research/october-5-research-appointment-waitlist-offer-control) | Can a specialist prepare waitlist offers while the business keeps capacity, priority, and sensitive service decisions? | The source `<main>` has one exact service href; source and destination have one self-canonical link, an expected H1, and sitemap locations. | Delivered locally; do not add another CTA. |
| [`/services/social-content-administration`](/services/social-content-administration) | [`/research/october-5-research-marketing-suppression-sync-integrity`](/research/october-5-research-marketing-suppression-sync-integrity) | Can a specialist reconcile opt-out evidence without interpreting consent, choosing audiences, or authorizing a send? | The source `<main>` has one exact service href; source and destination have one self-canonical link, an expected H1, and sitemap locations. | Delivered locally; do not add another CTA. |
| [`/services/supplier-coordination`](/services/supplier-coordination) | [`/research/october-5-research-vendor-credential-expiry-monitoring`](/research/october-5-research-vendor-credential-expiry-monitoring) | Can a specialist monitor vendor-document expiry without approving a supplier, interpreting documents, or purchasing? | The source `<main>` has one exact service href; source and destination have one self-canonical link, an expected H1, and sitemap locations. | Delivered locally; do not add another CTA. |

- **Verification baseline:** `ccfc0d08902fc1a8d87c0d5e8452e9459f07b244`. `npm run lint`, `npm test`, `npm run validate:oct5-combined`, a fresh 633-page production build, and `RENDER_ORIGIN=http://127.0.0.1:3000 npm run validate:oct5-rendered` passed. The rendered validator checks all 17 October 5 blog and research routes, their source paragraphs, metadata, discovery routes, sitemap, destination responses, and shared JPEG.
- **Boundary:** These are Philippines-based staffing preparation paths. Each handoff preserves the owner-only decisions named in its own research record; they are evidence for a reader's next question, not authority to make a commercial, privacy, legal, payroll, clinical, marketing, or vendor-approval decision.
