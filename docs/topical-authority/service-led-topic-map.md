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
