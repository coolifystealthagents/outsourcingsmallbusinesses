export const nov05ResearchBatch = [
  {
    "slug": "how-often-do-small-business-invoices-arrive-without-a-matching-purchase-record",
    "title": "How often do small-business invoices arrive without a matching purchase record?",
    "excerpt": "A protocol for measuring invoice-to-purchase-record matching in a small business, with a clear unit, evidence standard, and dated review.",
    "published": "2026-11-05",
    "imagePath": "/images/nov05/how-often-do-small-business-invoices-arrive-without-a-matching-purchase-record.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a supplier invoice arrives without a matching purchase record and how the business handles the mismatch. The unit is one supplier invoice that reached a payment decision during the observation window. The study measures whether a purchase order, quote, or delivery record was available, whether the amount and quantity matched, and whether the invoice was paid before the mismatch was resolved. It does not evaluate whether the supplier was at fault.",
      "Set the scope to one small business, one accounting system, and one invoice approval process. Record the purchase-order rules, the payment run schedule, and the supplier list at the start. If the process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new approval step can look like better control when it is only a new gate.",
      "Section: Population and unit of analysis",
      "Define the population as every supplier invoice that reached a payment decision during the window, including invoices that were held or disputed. The unit is the invoice, identified by the supplier and the invoice number. A corrected invoice is a revision of the same unit; a separate invoice for a different delivery is a new unit. A recurring subscription invoice is a new unit for each billing period.",
      "Record the supplier, the amount band, the invoice type, and whether the invoice was expected. These strata matter because a utility bill and a custom order carry different matching expectations. Include invoices that were paid without a purchase order, because the base rate is part of the finding. Test the unit definition on two ordinary invoices before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define a matching purchase record as a purchase order, signed quote, or delivery note that names the same supplier, item, quantity, and agreed price. Define a match as agreement on the amount and quantity within a stated tolerance. Define a mismatch as a difference outside that tolerance. Define a missing record as no purchase record available at the payment decision.",
      "Do not count an email approval as a purchase order unless it states the item, quantity, and price. Do not count a verbal confirmation as a matching record. A subscription invoice can match a contract that states the recurring amount and period. Each definition should include one positive example and one boundary example so a second reviewer can apply it consistently.",
      "A purchase record can exist and still be unusable if it does not name the item or the agreed price. Record whether the record is specific enough for a reviewer to compare, not only whether a file exists. A vague record creates a match that looks complete but cannot be defended. That distinction belongs in the evidence standard.",
      "Section: Evidence standard and data dictionary",
      "For each invoice, capture the supplier, the invoice number, the date, the amount, the purchase record reference, and the match result. Add whether the invoice was paid, held, or disputed and the date of the decision. Record the person who approved the payment and the system where the approval is stored. Keep the packet with the invoice record.",
      "Also capture whether the purchase record was created before the invoice arrived. A record created after the invoice is a weak control even when the amount matches. If the record is a quote rather than an order, note the difference. A second reviewer should be able to reproduce the classification from the invoice packet.",
      "A second view is the share of invoices that were paid before the purchase record was created. That pattern is a stronger control failure than a missing record that was later supplied. Record the creation time and the payment time together. The owner can then see whether the process is preventive or only corrective.",
      "Section: Sampling and collection",
      "Draw the sample from the accounting system rather than from a list of disputed invoices. Record the export date, the filters, the row count, and the selection rule. Include invoices from every supplier band and every month so the result is not dominated by one large supplier. If the population is ordered by invoice date, a fixed interval spreads the sample across the window.",
      "Collect the invoice and the purchase record as they existed at the payment decision, not as they look after later corrections. If a purchase order was created after the payment, record the creation date and analyze the original gap separately. Do not infer a match from the absence of a dispute. Note the collection date separately from the invoice date.",
      "The review should also separate a missing purchase order from a purchase order that does not match the invoice. The first is a documentation gap, while the second is a price or quantity dispute. Show the two counts separately and describe the different fixes. A single mismatch rate hides which process needs attention.",
      "Section: Analysis and reporting",
      "Report the number of invoices, the share with a matching record, the share with a mismatch, and the share with no record. Show the counts by supplier band and invoice type. Present the median time from invoice to payment and the share of mismatches paid before resolution. Use the same denominator for every rate.",
      "Inspect the missing-record cases and describe the pattern without naming the supplier. A cluster in one invoice type may point to a missing purchase-order rule, while a cluster in one supplier may point to a recurring delivery that was never documented. Compare the result with the amount band, because a large invoice may receive more scrutiny. Report the held and disputed invoices separately.",
      "A useful additional view is the age of the purchase record when the invoice arrived. A record created months earlier may not reflect the current price. Show the age distribution and describe the consequence. That view helps the owner decide whether the purchase-order process or the price-review process needs attention.",
      "A useful check is whether the supplier was told about the missing record. A supplier who keeps sending invoices without a reference may need a purchase-order field on the invoice. Record the communication and the supplier response. That evidence helps the owner decide whether to change the supplier process.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the invoice was legitimate or whether the business received the goods. It can show only whether a matching record existed and how the payment was handled. A missing record is not proof of fraud, and a matching record is not proof of a good purchase. The protocol also cannot capture a purchase approved in a meeting and never written down.",
      "Accounting systems can omit manual payments, petty cash, and invoices paid from a personal card. A supplier invoice that was paid outside the system may never appear in the sample. Record those cases and their treatment instead of dropping them silently. If the same person approved the purchase and the payment, note the independence limitation and analyze that subgroup separately.",
      "The final view is the age of the invoice at payment. A late payment may be caused by a missing record rather than by cash flow. Show the age distribution and describe the relationship. That view helps the owner separate a control problem from a working-capital problem.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the bookkeeper and ask them to choose one observable change. The change might be a purchase-order threshold, a required delivery note, or a rule that no invoice is paid without a record. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the threshold and the payment run at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If matching improved but payment time rose, the new control may be creating a bottleneck. If missing records fell but mismatches did not, the purchase record may be too vague. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "Keep the sample packet with the accounting record so the next review can repeat the same check. A finding without the underlying invoices is hard to defend or compare. Record the reviewer and the date. The packet is part of the control, not an archive afterthought. Record the review date with the sample."
    ],
    "referenceSources": [
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "IRS",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-05"
      },
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-05"
      }
    ]
  },
  {
    "slug": "what-share-of-vendor-renewals-are-approved-after-the-notice-deadline",
    "title": "What share of vendor renewals are approved after the notice deadline?",
    "excerpt": "A protocol for measuring late vendor renewals and the notice process that lets a small business decide before the deadline.",
    "published": "2026-11-05",
    "imagePath": "/images/nov05/what-share-of-vendor-renewals-are-approved-after-the-notice-deadline.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of vendor renewals are approved after the contractual notice deadline has passed. The unit is one vendor renewal event, identified by the vendor, the contract, and the renewal date. The study measures the notice date, the owner decision date, and whether the business had a real opportunity to cancel or renegotiate. It does not evaluate whether the vendor was a good value.",
      "Set the scope to one small business, one vendor list, and one contract-review process. Record the renewal terms, the notice methods, and the calendar tool at the start. If the process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new reminder can look like better behavior when it is only a new alert.",
      "Section: Population and unit of analysis",
      "Define the population as every vendor renewal that occurred during the window, including renewals that were cancelled and renewals that were allowed to continue. The unit is the renewal event, not the vendor, because a vendor can renew several times. A renewal that is renegotiated before the date is one event with an outcome. A separate contract with the same vendor is a new unit.",
      "Record the vendor category, the contract value, the notice period, and whether the vendor sent a reminder. These strata matter because a large annual contract and a small monthly subscription carry different risks. Include auto-renewals that the business did not notice, because the base rate matters. Test the unit definition on two ordinary renewals before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define the notice deadline as the last date the business could send a valid cancellation or renegotiation notice under the contract. Define the decision date as the date the owner approved the renewal, cancellation, or renegotiation, not the date the invoice was paid. Define a late approval as a decision after the notice deadline. Define a missed notice as a renewal that occurred without any decision recorded before the deadline.",
      "Do not count a vendor reminder as the decision date. Do not count a general budget approval as a renewal decision unless it names the vendor. A decision made by email counts when the email is stored with the contract. Each definition should include one positive example and one boundary example.",
      "A notice period can be stated in the contract but contradicted by the vendor portal or the invoice terms. Record which source governs when the two disagree and who confirmed the answer. A calendar built on the wrong source will produce a late notice even when the reminder works. That conflict is part of the measurement.",
      "Section: Evidence standard and data dictionary",
      "For each renewal, capture the vendor, the contract, the value, the renewal date, the notice deadline, the notice method, and the decision date. Add the person who decided and whether the vendor confirmed the change. Record whether a reminder was sent and when. Store the packet with the contract file.",
      "Also capture whether the business had usage data at the decision. A renewal without usage information is a decision made on price alone. If the notice was sent by phone, record the call time and the follow-up email. A second reviewer should be able to reconstruct the timeline from the contract packet.",
      "A second view is the share of renewals where the owner received a reminder but did not act. A reminder that is ignored is different from one that never arrived. Record the reminder date, the channel, and the response. The owner can then decide whether the process or the decision capacity is the problem.",
      "Section: Sampling and collection",
      "Draw the sample from the contract calendar and the accounting system rather than from a list of vendors the owner remembers. Record the export date, the filters, the row count, and the selection rule. Include renewals from every vendor category and every contract value band. If the population is ordered by renewal date, a fixed interval spreads the sample across the window.",
      "Collect the contract and the notice as they existed at the deadline, not as they look after a later cleanup. If the contract was amended, record the amendment date and analyze the original term separately. Do not infer a decision from the payment. Note the collection date separately from the renewal date.",
      "The review should also separate auto-renewals from contracts that require an active renewal. An auto-renewal can continue without a decision, while an active renewal has a natural decision point. Show the counts separately and describe the risk. A single late rate hides the difference between a missed notice and a missed signature.",
      "Section: Analysis and reporting",
      "Report the number of renewals, the share decided before the deadline, the share decided after, and the share with no recorded decision. Show the counts by vendor category and contract value. Present the median days between the decision and the deadline. Use the same denominator for every rate.",
      "Inspect the late decisions and describe the pattern without naming the owner. A cluster in one vendor category may point to a missing reminder, while a cluster at one contract value may point to an approval threshold. Compare the result with the notice period, because a short notice period leaves less room for a late decision. Report the cancelled and renegotiated renewals separately.",
      "A useful additional view is the time between the reminder and the decision. A reminder that arrives after the deadline is not a control. Show the reminder date and the decision date together. That view helps the owner decide whether to change the calendar or the contract terms.",
      "A useful check is whether the vendor sent a renewal notice and whether it matched the contract. A vendor notice can arrive late or state a different term. Record the notice date and the source. That evidence helps the owner decide whether to rely on the vendor or the internal calendar.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the business would have received a better price or whether the vendor was worth keeping. It can show only whether a decision happened before the deadline. A late renewal is not proof of waste, and an early renewal is not proof of good management. The protocol also cannot capture a decision made verbally and never written down.",
      "Contracts can be amended, auto-renewed, or billed without a formal notice. A renewal that appears in the accounting system may not match the contract calendar. Record those cases and their treatment instead of dropping them silently. If the same person owns the vendor and approves the renewal, note the independence limitation and analyze that subgroup separately.",
      "The final view is the amount at stake in the late renewals. A late decision on a small subscription is a process annoyance, while a late decision on a large contract is a material risk. Show the value band and describe the pattern. That view helps the owner prioritize the calendar work.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the assistant who maintains the calendar and ask them to choose one observable change. The change might be an earlier reminder, a required usage summary, or a rule that no auto-renewal is paid without a recorded decision. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the reminder and the approval threshold at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If late decisions fell but cancellations rose, the earlier reminder may be forcing a rushed choice. If decisions improved but usage data did not, the owner may still be deciding without evidence. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "Keep the contract and the decision record together so the next review can verify the timeline. A renewal decision without the notice proof is hard to audit. Record the reviewer and the date. The file should let a new assistant understand what happened. Record the review date with the sample."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-05"
      },
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-05"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "IRS",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-05"
      }
    ]
  },
  {
    "slug": "how-complete-is-the-refund-record-for-a-small-business-support-desk",
    "title": "How complete is the refund record for a small-business support desk?",
    "excerpt": "A protocol for measuring whether a small business can reconstruct why a refund was given, who approved it, and what the customer was told.",
    "published": "2026-11-05",
    "imagePath": "/images/nov05/how-complete-is-the-refund-record-for-a-small-business-support-desk.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how complete the refund record is for a small-business support desk. The unit is one refund event, identified by the customer, the order, and the refund date. The study measures whether the record contains the amount, the reason, the evidence, the approver, and the customer communication. It does not evaluate whether the refund was the right commercial decision.",
      "Set the scope to one small business, one payment system, and one support channel. Record the refund policy, the approval limits, and the record template at the start. If the policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new required field can look like an improvement in behavior when it is only a new form.",
      "Section: Population and unit of analysis",
      "Define the population as every refund issued during the window, including refunds issued by the owner and refunds issued through the payment provider. The unit is the refund event, not the customer, because a customer can receive several refunds. A partial refund and a full refund for the same order are separate events. A correction of an earlier refund is a new event with a link to the original.",
      "Record the refund channel, the amount band, the reason category, and whether the customer requested it. These strata matter because a small goodwill credit and a disputed charge carry different evidence needs. Include refunds that were later reversed, because the reversal is part of the record. Test the unit definition on two ordinary refunds before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define a complete refund record as one that contains the order, the amount, the reason, the supporting evidence, the approver, and the customer communication. Define the approver as the person who authorized the refund, not the person who entered it. Define the communication as the message that told the customer the outcome and the amount. Define a missing element as any required field that cannot be reconstructed from the record.",
      "Do not count a payment processor note as the customer communication. Do not count a generic reason code without a short explanation. A refund approved verbally counts only when the approval is written into the record before the payment. Each definition should include one positive example and one boundary example.",
      "A refund can be approved by one person and issued by another, which makes the approver field easy to confuse with the operator. Record both roles and the time each acted. A record that names only the operator cannot show who authorized the money. That separation is central to the control.",
      "Section: Evidence standard and data dictionary",
      "For each refund, capture the order, the customer, the amount, the date, the reason, the evidence type, and the approver. Add the customer communication date and the channel. Record whether the refund was full or partial and whether it was reversed. Keep the packet with the refund record.",
      "Also capture the time between the request and the refund and the number of customer contacts. These fields help explain a refund that was correct but poorly communicated. If the evidence is a photo or a document, record where it is stored and who can access it. A second reviewer should be able to reconstruct the event from the packet.",
      "A second view is the share of refunds where the customer was told the amount before the payment. A customer who learns the amount after the fact may contact support again. Record the message time and the payment time. That gap is a service quality issue as much as a record issue.",
      "Section: Sampling and collection",
      "Draw the sample from the payment system rather than from a list of complaints. Record the export date, the filters, the row count, and the selection rule. Include refunds from every channel and amount band so the result is not dominated by one source. If the population is ordered by refund date, a fixed interval spreads the sample across the window.",
      "Collect the refund as it existed at the decision, not as it looks after later edits. If the customer communication was sent after the refund, record the gap and analyze it separately. Do not infer a missing reason from the amount. Note the collection date separately from the refund date.",
      "The review should also separate a refund that was requested by the customer from one the business offered. The evidence and the communication differ. Show the counts separately and describe the pattern. That distinction helps the owner train the assistant on the right conversation.",
      "Section: Analysis and reporting",
      "Report the number of refunds, the share with a complete record, and the share missing each required element. Show the counts by channel and amount band. Present the median time from request to refund and the share of customers contacted before the payment. Use the same denominator for every rate.",
      "Inspect the incomplete records and describe the pattern without naming the customer or the assistant. A cluster in one channel may point to a missing field in the tool, while a cluster in one reason may point to an unclear policy. Compare the result with the amount band, because a large refund may receive more review. Report the reversed refunds separately.",
      "A useful additional view is whether the customer was told before or after the refund. A customer who discovers a refund without a message may contact support again. Show the communication time and describe the consequence. That view helps the owner decide whether the message step needs to be part of the refund action.",
      "A useful check is whether the reason code is specific enough to explain the decision. A code such as other tells a reviewer nothing. Record the free-text note and the code together. The owner can then decide whether the code list needs a new category.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the customer was satisfied or whether the refund prevented a chargeback. It can show only what was documented and when. A complete record is not proof of a good decision, and an incomplete one is not proof of a bad one. The protocol also cannot capture a refund issued in cash or through a channel outside the payment system.",
      "Payment systems can omit manual adjustments, credits, and refunds issued by a provider. A refund that was handled by the owner may leave only a bank transfer. Record those cases and their treatment instead of dropping them silently. If the same person approved and issued the refund, note the independence limitation and analyze that subgroup separately.",
      "The final view is the share of refunds that were reversed or disputed later. A reversal may indicate a weak evidence check. Show the reversal rate beside the completeness rate and describe the relationship. That view helps the owner decide whether the approval limit or the evidence requirement needs the change.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the support lead and ask them to choose one observable change. The change might be a required reason field, a customer-message step, or a weekly sample of refund records. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the form and the approval limit at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If completeness improved but refund time rose, the new field may be adding friction. If communication improved but disputes did not, the message may not address the customer's real concern. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "Keep the refund packet with the payment record so the next reviewer can repeat the check. A finding without the underlying order and message is hard to defend. Record the reviewer and the date. The packet is part of the control. Record the review date with the sample."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-05"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "IRS",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-05"
      }
    ]
  },
  {
    "slug": "where-does-a-weekly-cash-flow-check-lose-its-source-evidence",
    "title": "Where does a weekly cash-flow check lose its source evidence?",
    "excerpt": "A protocol for finding where a small business's weekly cash-flow check drops the source link behind a balance or payment.",
    "published": "2026-11-05",
    "imagePath": "/images/nov05/where-does-a-weekly-cash-flow-check-lose-its-source-evidence.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks where a weekly cash-flow check loses the source evidence behind a reported balance or payment. The unit is one line item in a weekly check, identified by the week, the account, and the item. The study measures whether the line has a source record, whether the source was available at the cut-off, and whether the amount matches the source. It does not evaluate whether the owner made a good spending decision.",
      "Set the scope to one small business, one set of accounts, and one weekly template. Record the bank feeds, the payment systems, and the cut-off time at the start. If the template changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new column can look like better evidence when it is only a new field.",
      "Section: Population and unit of analysis",
      "Define the population as every line item in the weekly checks produced during the window. The unit is the line item, not the report, because one report can contain several items with different evidence. A line that is revised the following week remains one unit with a revision history. A new line for a different payment is a new unit.",
      "Record the account, the item type, the amount band, and whether the item was committed or planned. These strata matter because a fixed rent payment and a one-off purchase carry different evidence needs. Include items with no amount, such as a missing invoice, because the gap is part of the finding. Test the unit definition on two ordinary weeks before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define a source record as the bank transaction, invoice, contract, or payment confirmation that supports the line. Define a linked line as one that names the source or provides a direct reference. Define a matching amount as agreement within a stated tolerance. Define a lost source as a line that cannot be traced to a record at the cut-off.",
      "Do not count a remembered balance as a source. Do not count a total that matches only because two errors cancel out. A line that is estimated should be labeled as estimated and should not be counted as sourced. Each definition should include one positive example and one boundary example.",
      "A bank feed can show a pending transaction that later changes amount or disappears. Record whether the line was based on a pending or posted item. A pending item is evidence of an expectation, not of settled cash. That distinction prevents a forecast from being treated as a balance.",
      "Section: Evidence standard and data dictionary",
      "For each line item, capture the week, the account, the item type, the amount, the source reference, and whether the amount matches. Add whether the item was committed or planned and whether it was revised later. Record the person who prepared the check and the time it was sent. Store the packet with the weekly check.",
      "Also capture whether the source was available before the cut-off. A source created after the check is not evidence for that week. If the line combines several transactions, record the list and the total. A second reviewer should be able to rebuild the line from the packet.",
      "A second view is the share of lines where the amount matches but the source is missing. A matching total can hide an unsourced line when other lines are correct. Record the source status separately from the amount match. That distinction prevents a clean total from masking a weak check.",
      "Section: Sampling and collection",
      "Draw the sample from the weekly checks rather than from a list of difficult weeks. Record the export date, the filters, the row count, and the selection rule. Include weeks with different volumes and different preparers. If the population is ordered by week, a fixed interval spreads the sample across the window.",
      "Collect the check and the source as they existed at the cut-off, not as they look after later corrections. If the check was revised, record the revision time and analyze the original separately. Do not infer a source from the eventual payment. Note the collection date separately from the week.",
      "The review should also separate a source that was unavailable at the cut-off from one that was never created. The first is a timing problem, while the second is a process gap. Show the counts separately and describe the fix. The owner can then decide whether to move the cut-off or change the source process.",
      "Section: Analysis and reporting",
      "Report the number of line items, the share with a source, the share with a matching amount, and the share with an estimated value. Show the counts by item type and preparer. Present the share of lines that were revised the following week. Use the same denominator for every rate.",
      "Inspect the lost-source items and describe the pattern without naming the preparer. A cluster in one item type may point to a missing feed, while a cluster in one account may point to a manual process. Compare the result with the amount band, because a large item may receive more attention. Report the estimated items separately.",
      "A useful additional view is the time between the source and the cut-off. A source that arrives after the cut-off may be correct but unavailable for the check. Show the gap and describe the consequence. That view helps the owner decide whether to change the cut-off or the data feed.",
      "A useful check is whether the preparer was the same person who reviewed the check. A self-review may miss a missing source. Record the preparer and the reviewer. That evidence helps the owner decide whether a second review is needed for the largest items.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the owner understood the cash position or whether the decision was wise. It can show only whether the line had a source. A sourced line is not proof of a good forecast, and an unsourced line is not proof of an error. The protocol also cannot capture a verbal balance the owner checked on a banking app.",
      "Bank feeds can lag, duplicate transactions, and omit pending items. A line that looks unsourced may be a timing difference. Record those cases and their treatment instead of dropping them silently. If the preparer and the reviewer are the same person, note the independence limitation and analyze that subgroup separately.",
      "The final view is the share of lines that changed after the check was sent. A report that is revised every week is hard to compare. Show the revision count and describe the cause. That view helps the owner decide whether the template or the cut-off needs to change.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the preparer and ask them to choose one observable change. The change might be a required source link, a later cut-off, or a rule that estimated items are listed separately. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the cut-off at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If sourcing improved but the check arrived later, the cut-off may be the real constraint. If estimated items fell but the owner still did not use the check, the report may be too detailed. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "Keep the weekly check and the source links together so the next review can repeat the sample. A finding without the underlying records is hard to verify. Record the reviewer and the date. The packet should be easy to find. Record the review date with the sample."
    ],
    "referenceSources": [
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "IRS",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-05"
      },
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-05"
      }
    ]
  },
  {
    "slug": "how-often-do-price-increase-questions-reach-an-untrained-assistant",
    "title": "How often do price-increase questions reach an untrained assistant?",
    "excerpt": "A protocol for measuring whether price-increase questions arrive before the support team has an approved explanation and a clear escalation path.",
    "published": "2026-11-05",
    "imagePath": "/images/nov05/how-often-do-price-increase-questions-reach-an-untrained-assistant.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often price-increase questions reach an assistant who has not been trained on the approved explanation. The unit is one customer conversation about a price increase, identified by the customer, the date, and the channel. The study measures whether the assistant had the approved explanation, whether the answer matched it, and whether the conversation was escalated. It does not evaluate whether the price increase was fair.",
      "Set the scope to one small business, one support channel, and one price-change announcement. Record the announcement date, the training date, and the escalation rules at the start. If the training changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new script can look like better readiness when it is only a new document.",
      "Section: Population and unit of analysis",
      "Define the population as every customer conversation that mentioned the price increase during the window. The unit is the conversation, not the message, because one conversation can span several messages. A conversation that is reopened after a customer reply remains one unit with an additional interval. A separate conversation about a different product is a new unit.",
      "Record the channel, the customer tenure, the plan, and whether the customer asked for an exception. These strata matter because a long-term customer and a new customer may receive different treatment. Include conversations that were resolved without escalation, because the base rate is part of the finding. Test the unit definition on two ordinary conversations before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define the approved explanation as the written message the owner authorized before the price change. Define a trained assistant as one who completed the training and has access to the current explanation. Define a matching answer as one that states the same effective date, amount, and reason without adding an unauthorized offer. Define an untrained conversation as one handled before the training date or without access to the explanation.",
      "Do not count a link to a generic pricing page as the approved explanation. Do not count an answer that gives the right amount but invents a reason. A conversation that was escalated before an answer still counts as a price-increase conversation. Each definition should include one positive example and one boundary example.",
      "A price increase can be announced to customers before the support team is ready, especially when sales sends the message. Record the announcement channel and the first support question. A gap between the two is a readiness problem that the owner can fix with sequencing. The protocol should show it clearly.",
      "Section: Evidence standard and data dictionary",
      "For each conversation, capture the customer, the channel, the date, the plan, and whether the price increase was mentioned. Add whether the assistant had completed training, whether the answer matched the explanation, and whether the conversation was escalated. Record the customer's response and the outcome. Keep the packet with the conversation record.",
      "Also capture the time between the price announcement and the first customer question. That gap shows whether the team had time to prepare. If the answer was given verbally, record the note and the assistant. A second reviewer should be able to reconstruct the conversation from the record.",
      "A second view is the share of questions that arrived before the training date. That number shows whether the announcement and the training are sequenced correctly. Record the announcement date, the training date, and the first question. The owner can then decide whether the training needs to start earlier.",
      "Section: Sampling and collection",
      "Draw the sample from the support system rather than from a list of complaints. Record the export date, the filters, the row count, and the selection rule. Include conversations from every channel and every plan so the result is not dominated by one group. If the population is ordered by date, a fixed interval spreads the sample across the window.",
      "Collect the conversation as it existed at the time of the answer, not as it looks after later edits. If the customer followed up after the training, record the dates and analyze the first answer separately. Do not infer a missing explanation from the eventual resolution. Note the collection date separately from the conversation date.",
      "The review should also separate a factual question from a request for an exception. The first can be answered from the approved explanation, while the second needs the owner. Show the counts separately and describe the pattern. A single escalation rate hides the difference between a knowledge gap and an authority gap.",
      "Section: Analysis and reporting",
      "Report the number of conversations, the share handled by a trained assistant, the share with a matching answer, and the share escalated. Show the counts by channel and plan. Present the median time from the price announcement to the first question. Use the same denominator for every rate.",
      "Inspect the untrained conversations and describe the pattern without naming the assistant. A cluster before the training date may point to a scheduling problem, while a cluster in one channel may point to a missing reference. Compare the result with the customer tenure, because a long-term customer may ask a more complex question. Report the exception requests separately.",
      "A useful additional view is the share of answers that added an unauthorized offer. That is a boundary failure even when the customer was happy. Show the offer type and describe the consequence. That view helps the owner decide whether the training or the authority limit needs the change.",
      "A useful check is whether the assistant had access to the current explanation at the time of the answer. A trained assistant without the current document is still unprepared. Record the document version and the answer date. That evidence helps the owner decide whether the problem is training or publishing.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the assistant understood the explanation or whether the customer accepted it. It can show only what was written and when. A matching answer is not proof of a good conversation, and an untrained answer is not proof of a bad one. The protocol also cannot capture a question asked in a meeting or a phone call that left no note.",
      "Support systems can omit calls, direct messages, and conversations handled by the owner. A price-increase question that was answered outside the system may never appear in the sample. Record those cases and their treatment instead of dropping them silently. If the assistant also wrote the approved explanation, note the independence limitation and analyze that subgroup separately.",
      "The final view is the share of answers that added an unauthorized offer or promise. That is a boundary failure even when the customer accepted it. Show the offer type and describe the consequence. That view helps the owner decide whether the authority limit or the training needs the change.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the support lead and ask them to choose one observable change. The change might be a training date before the announcement, a required reference link, or a rule that exception requests go to the owner. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the training and the offer at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If matching improved but escalations rose, the assistant may be routing too many routine questions. If escalations fell but unauthorized offers rose, the boundary may be too loose. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "Keep the conversation and the approved explanation together so the next review can compare them. A finding without the actual answer is hard to verify. Record the reviewer and the date. The packet should let a new assistant learn from the case. Record the review date with the sample."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Department of Labor, Wage and Hour Division",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd",
        "checked": "2026-11-05"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-05"
      }
    ]
  }
];
