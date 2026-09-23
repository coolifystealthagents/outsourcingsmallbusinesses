# Service-led topical map

This is a working map for one reader-useful, Philippines-based staffing handoff. It is planning evidence only. Do not add the link until the route record, shared renderer, source gates, and generated artifact are reviewed again.

## Supplier coordination

- **Service pillar:** [`/services/supplier-coordination`](/services/supplier-coordination)
- **Reader question:** How can a small business keep supplier updates current without letting a support specialist approve changed terms or substitutions?
- **Verified-absent supporting route:** [`/research/august-11-small-business-outsourcing-vendor-coordination`](/research/august-11-small-business-outsourcing-vendor-coordination)
- **Generated-route finding:** The fresh production artifact has the research route's expected H1 and canonical URL, and its route-local `<main>` has zero links to `/services/supplier-coordination`. Both source and destination are present in the generated sitemap.
- **Approved implementation path:** Add one data-owned `serviceHandoff` to the existing research record in `app/fleet-content.ts`; use the existing shared research renderer. Do not introduce a slug-specific rendering branch.
- **Required scope boundary:** The Philippines-based specialist may request updates and maintain dated supplier records. The owner or named manager retains purchasing, substitutions, changed terms, disputes, approvals, and other exceptions.
- **Next implementation step:** Reconfirm ownership and the zero-link artifact count from a clean baseline, then make one bounded contextual handoff with an updated modified date and focused source/artifact coverage.
- **Status:** `verified_absent_candidate`; no rendered page, schema, sitemap, or public output changed in this map-only release.
