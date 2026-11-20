export const nov20ResearchBatch = [
  {
    "slug": "what-share-of-supplier-invoices-match-the-purchase-order-and-receipt-on-first-check",
    "title": "What share of supplier invoices match the purchase order and receipt on first check?",
    "excerpt": "A protocol for measuring how many supplier invoices agree with the purchase order and the receiving record on the first check.",
    "published": "2026-11-20",
    "imagePath": "/thumbnails/november-20/what-share-of-supplier-invoices-match-the-purchase-order-and-receipt-on-first-check.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of supplier invoices agree with the purchase order and the receiving record on the first check. The unit is one invoice line, not one invoice and not one supplier. The study measures the share that match on quantity, price, and condition, the share that need a correction, and the share that are paid before a match is complete. It does not judge whether the supplier was at fault or whether the price was fair.",
      "Set the scope to one shop, one purchasing process, and one payment rule. Record the order system, the receiving method, and the date the match rule took effect. If the shop changes its purchasing tool during the study, keep the original rule for invoices already in process and analyze later invoices separately. A new tool can change the match speed without changing the supplier behavior.",
      "Define the population as every invoice line received during the window, including lines that were credited, corrected, or paid short. State any exclusion, such as a utility bill that has no purchase order, and apply it to every line. Test the definition on ten closed invoices before collection begins. The reader should be able to rebuild the population from the invoice register and the order list.",
      "Section: Definitions that make the measure reproducible",
      "Define a match as an agreement between the invoiced quantity, the received quantity, and the ordered quantity on the same line. Define the price check as the invoiced unit price against the price on the purchase order, with any approved tolerance stated in advance. A match on quantity with an unapproved price difference is not a full match. Record the rule so a reviewer can repeat the judgment.",
      "Define the first check as the first complete comparison made after the invoice arrived, not a later review triggered by a payment query. Record the time of the first check and the person who made it. Treat a corrected invoice as a new line with its own first check. A definition that counts a second review as the first check will overstate the result.",
      "Section: Evidence standard and data dictionary",
      "For each invoice line, capture the invoice number, supplier, purchase order, item, quantity ordered, quantity received, quantity invoiced, unit price ordered, unit price invoiced, and line total. Add the receiving date, the check date, the checker, and the resolution. Keep the purchase order, the receiving note, and the invoice linked to the entry. Record any credit memo or corrected invoice by number.",
      "Capture the reason for a mismatch when it is documented: a short shipment, a substituted item, a price change, a freight charge, or a duplicate line. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every invoice line in the window rather than a sample, because the match rule applies to each line. If the shop runs several departments or suppliers, collect each separately and record the group. A combined rate can hide one department that pays before receiving. Report the number of lines and the value behind every percentage.",
      "Draw the data from the order system and the invoice register, not from a spreadsheet kept after the fact. If either record is incomplete, say so and reduce the claim. Record the export date, the filters, and any line that could not be matched to a receiving note. A missing receiving note is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share of lines that match on the first check, the share that need a correction, and the share paid without a completed match. Show the median and range of days from invoice receipt to first check. Present the results by supplier, department, and invoice value. Use the same denominator for every rate.",
      "Separate a mismatch caused by a supplier from one caused by the shop. A short shipment is a supplier issue, while a missing receiving record is a shop issue. Report both because they lead to different fixes. A shop may accept a supplier error but should not accept a match that never happened.",
      "Section: Limits of the evidence",
      "The invoice and receiving records can show what was compared, but they cannot show whether the goods performed as expected. A match is not a quality test. The protocol also cannot capture a delivery that was received and invoiced with no paper record at all. State that limitation before presenting the rate.",
      "A small shop may have too few invoice lines to support a stable trend. Describe the line count and the supplier mix instead of ranking staff. Do not compare a shop that orders weekly with one that orders daily. Report the match rule and the tolerance beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the purchasing lead and ask them to choose one observable change. The change might be a receiving note required before payment, a price tolerance agreed with the supplier, a named match owner, or a weekly exception review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the first-check rate rises but credit memos also rise, the shop may be matching faster while accepting more bad lines. If both fall but payment delays grow, the team may be holding invoices without a fix. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Measure each invoice line from receipt to the first complete three-way comparison.",
      "Count a full match only when quantity, price, and condition all agree.",
      "Separate a supplier short shipment from a missing shop receiving record.",
      "Report lines paid without a match beside the first-check match rate."
    ],
    "referenceSources": [
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-20"
      },
      {
        "title": "Internal Revenue Service, Publication 583, starting a business and keeping records",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/publications/p583",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
        "checked": "2026-11-20"
      }
    ],
    "related": [
      "what-share-of-open-purchase-orders-age-past-the-promised-delivery-week",
      "how-long-do-customer-returns-take-to-reach-a-refund-or-exchange-decision"
    ]
  },
  {
    "slug": "how-long-do-customer-returns-take-to-reach-a-refund-or-exchange-decision",
    "title": "How long do customer returns take to reach a refund or exchange decision?",
    "excerpt": "A protocol for measuring the wait between a customer return and a recorded refund, exchange, or store credit decision.",
    "published": "2026-11-20",
    "imagePath": "/thumbnails/november-20/how-long-do-customer-returns-take-to-reach-a-refund-or-exchange-decision.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how long a customer return waits before the shop records a refund, an exchange, or a store credit decision. The unit is one return, not one customer and not one item. The study measures the share decided inside the shop's stated target, the median wait, and the returns that remain open. It does not judge whether the decision was the right one for the business.",
      "Set the scope to one shop, one return counter, and one written return rule. Record the target time, the approval levels, and the date the rule took effect. If the shop changes its payment tool during the study, keep the original process for returns already open and analyze later returns separately. A new tool can change the decision speed without changing staff behavior.",
      "Define the population as every return recorded during the window, including returns that were refused and returns that were later reversed. State any exclusion, such as an internal warranty repair that is not a customer return, and apply it to every return. Test the definition on ten closed returns before collection begins. The reader should be able to rebuild the population from the return log.",
      "Section: Definitions that make the measure reproducible",
      "Define the clock start as the time the return was recorded at the counter, not the time the customer first mentioned the problem. Define the clock stop as the time a refund, exchange, or credit was recorded with a date. A note that the return was received is not a decision. Record both the return time and the decision time so the wait can be rebuilt.",
      "Define a decision as one of three outcomes: money returned, a replacement item issued, or a credit recorded with a balance. Treat an approval given but not yet processed as still open. Treat a return moved to a repair or warranty path as a new case with its own start time. A definition that stops at the conversation rather than the record will understate the wait.",
      "Section: Evidence standard and data dictionary",
      "For each return, capture the return identifier, sale identifier, customer, item, amount, reason, received time, decision time, outcome, approver, and staff member. Add the payment method and whether the customer received a written confirmation. Keep the original sale and the return entry linked. Record any return that was refused and the reason given to the customer.",
      "Capture the reason for a delay when it is documented: a missing approval, an item sent for inspection, a missing receipt, or a payment tool outage. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every return in the window rather than a sample, because the rule applies to each return. If the shop runs several counters or locations, collect each separately and record the group. A combined rate can hide one counter that never decides on the same day. Report the number of returns and the value behind every percentage.",
      "Draw times from the return log and the payment record, not from a spreadsheet maintained after the fact. If either record is incomplete, say so and reduce the claim. Record the export date, the filters, and any return that could not be matched to a sale. A missing sale link is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share decided inside the target, the share decided later, and the share still open at the end of the window. Show the median and range of hours from return to decision. Present the results by counter, outcome, and return reason. Use the same denominator for every rate.",
      "Separate a return that waited for an approval from one that waited because nobody processed the payment. An approval gap is a different finding from an unread queue. Report both because they lead to different fixes. A shop may accept a day of waiting for a high-value return but should not accept a return that nobody owns.",
      "Section: Limits of the evidence",
      "The return log can show when the decision was recorded, but it cannot show whether the customer was told. A recorded refund is not a received refund. The protocol also cannot capture a return handled at the counter and never entered in the log. State that limitation before presenting the rate.",
      "A small shop may have too few returns to support a stable trend. Describe the return count and the item mix instead of ranking staff. Do not compare a shop that inspects every item with one that accepts the customer's word. Report the return rule and the approval levels beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the counter lead and ask them to choose one observable change. The change might be an approval threshold written at the counter, a daily open-return check, a named return owner per shift, or a decision message sent to the customer. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the on-time rate rises but refused returns also rise, the team may be deciding faster by refusing more requests. If both fall but credits grow, the shop may be issuing credit to close the clock. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Measure each return from counter entry to a recorded refund, exchange, or credit.",
      "Count a decision only when the outcome is recorded, not when it is discussed.",
      "Separate an approval wait from a payment that nobody processed.",
      "Report still-open returns and refused returns beside the on-time rate."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, advertising and marketing guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-20"
      },
      {
        "title": "Internal Revenue Service, Publication 583, starting a business and keeping records",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/publications/p583",
        "checked": "2026-11-20"
      }
    ],
    "related": [
      "what-share-of-supplier-invoices-match-the-purchase-order-and-receipt-on-first-check",
      "how-often-are-same-day-pickup-orders-ready-before-the-promised-time"
    ]
  },
  {
    "slug": "how-often-are-same-day-pickup-orders-ready-before-the-promised-time",
    "title": "How often are same-day pickup orders ready before the promised time?",
    "excerpt": "A protocol for measuring how often an order is staged and checked before the pickup time the customer was given.",
    "published": "2026-11-20",
    "imagePath": "/thumbnails/november-20/how-often-are-same-day-pickup-orders-ready-before-the-promised-time.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a same-day pickup order is fully staged and checked before the pickup time the customer was given. The unit is one pickup order, not one customer and not one item. The study measures the share ready before the promised time, the share ready late, and the orders that were never completed that day. It does not judge whether the customer arrived on time.",
      "Set the scope to one shop, one pickup point, and one promise rule. Record the promise window, the staging area, and the date the rule took effect. If the shop changes its order system during the study, keep the original rule for orders already promised and analyze later orders separately. A new system can change the record without changing the work at the counter.",
      "Define the population as every order promised for same-day pickup during the window, including orders that were cancelled or never collected. State any exclusion, such as an in-stock item handed over immediately at the counter, and apply it to every order. Test the definition on ten completed orders before collection begins. The reader should be able to rebuild the population from the order list.",
      "Section: Definitions that make the measure reproducible",
      "Define ready as every item on the order checked, staged at the pickup point, and marked with the order number. Define the promised time as the time the shop told the customer, in writing or by a recorded message. A target printed only in an internal system is not a promise. Record both the promise time and the ready time.",
      "Define early and late as separate outcomes, because an order staged long before pickup can hold limited counter space. Treat a customer-requested reschedule as a new promise with its own time. Record the time zone and whether the promise crosses noon or midnight. A definition that counts a customer delay as a shop delay will distort the result.",
      "Section: Evidence standard and data dictionary",
      "For each order, capture the order identifier, customer, item count, promise time, staging time, ready check time, checker, and pickup time. Add whether the ready notice was sent and whether the order was complete at pickup. Keep the order record and the ready notice linked. Record any item that was missing or substituted at the check.",
      "Capture the reason for a late order when it is documented: a missing item, a supplier delay, an equipment fault, or a staffing gap at the counter. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every same-day order in the window rather than a sample, because the promise applies to each order. If the shop runs several pickup points or item types, collect each separately and record the group. A combined rate can hide one item type that is never ready on time. Report the number of orders and the value behind every percentage.",
      "Draw times from the order system and the ready check, not from a spreadsheet maintained after the fact. If either record is incomplete, say so and reduce the claim. Record the export date, the filters, and any order that could not be matched to a ready check. A missing check is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share ready before the promise, the share ready late, and the share never completed that day. Show the median and range of minutes early or late. Present the results by item type, day of week, and staff shift. Use the same denominator for every rate.",
      "Separate an order that was late because an item was missing from one that was ready but never marked. A supply gap is a different finding from a counter that forgot to stage. Report both because they lead to different fixes. A shop may accept a supplier delay but should not accept an order that sits ready and unlabelled.",
      "Section: Limits of the evidence",
      "The order record can show when the order was marked ready, but it cannot prove the mark was accurate. A staged order is not a verified order. The protocol also cannot capture an order promised verbally and never entered in the system. State that limitation before presenting the rate.",
      "A small shop may have too few same-day orders to support a stable trend. Describe the order count and the item mix instead of ranking staff. Do not compare a shop with a two-hour promise with one that promises by closing time. Report the promise rule and the staging space beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the counter lead and ask them to choose one observable change. The change might be a ready check before the notice, a fixed staging shelf, a named order owner, or a late-order message sent before the promise passes. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the ready rate rises but pickup no-shows also rise, the shop may be staging orders earlier than customers expect. If both fall but cancellations shrink, the team may be promising fewer orders than it could serve. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Measure each order from the promised time to the verified ready check.",
      "Define ready as checked, staged, and labelled with the order number.",
      "Separate a missing item from an order that was ready but never marked.",
      "Report late and never-completed orders beside the on-time rate."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, mail, internet, or telephone order merchandise rule",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-20"
      }
    ],
    "related": [
      "how-long-do-customer-returns-take-to-reach-a-refund-or-exchange-decision",
      "how-often-do-counter-shift-handoffs-miss-an-open-customer-commitment"
    ]
  },
  {
    "slug": "what-share-of-open-purchase-orders-age-past-the-promised-delivery-week",
    "title": "What share of open purchase orders age past the promised delivery week?",
    "excerpt": "A protocol for measuring how many open purchase orders remain unreceived past the delivery week the supplier promised.",
    "published": "2026-11-20",
    "imagePath": "/thumbnails/november-20/what-share-of-open-purchase-orders-age-past-the-promised-delivery-week.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of open purchase orders remain unreceived past the delivery week the supplier promised. The unit is one purchase order line, not one order and not one supplier. The study measures the share received inside the promised week, the share still open after it, and the lines that were cancelled without a delivery. It does not judge whether the supplier gave a realistic promise.",
      "Set the scope to one shop, one purchasing process, and one promise rule. Record how the promised week is captured, the receiving method, and the date the rule took effect. If the shop changes its order system during the study, keep the original promise for lines already placed and analyze later lines separately. A new system can change the record without changing the supplier schedule.",
      "Define the population as every purchase order line placed during the window, including lines that were cancelled, split, or backordered. State any exclusion, such as a service contract with no delivery date, and apply it to every line. Test the definition on ten closed lines before collection begins. The reader should be able to rebuild the population from the order list and the receiving notes.",
      "Section: Definitions that make the measure reproducible",
      "Define the promised week as the week the supplier confirmed for the specific line, not the week the shop hoped for. Record whether the promise came in writing and on what date. Define the clock start as the order date and the clock stop as the receiving date on the first complete delivery. A line received in parts is not closed until the final part arrives.",
      "Define age as the number of days between the end of the promised week and the receiving date or the review date. Keep the age in whole days and record the date of the calculation. Treat a line cancelled before delivery as a separate outcome with its own date. A definition that measures from the order date alone will mix fast and slow promises.",
      "Section: Evidence standard and data dictionary",
      "For each line, capture the order number, supplier, item, quantity, order date, promised week, confirmation date, receiving date, quantity received, and current status. Add the buyer, the receiver, and any backorder note. Keep the purchase order and the receiving note linked to the entry. Record any change to the promised week and the message that stated it.",
      "Capture the reason for an aged line when it is documented: a supplier backorder, a missed shipment, a quality hold, or a shop request to delay. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every purchase order line in the window rather than a sample, because the promise applies to each line. If the shop runs several departments or supplier groups, collect each separately and record the group. A combined rate can hide one department that never confirms a week. Report the number of lines and the value behind every percentage.",
      "Draw data from the order system and the receiving record, not from a spreadsheet kept after the fact. If either record is incomplete, say so and reduce the claim. Record the export date, the filters, and any line that could not be matched to a receiving note. A missing receiving note is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share received inside the promised week, the share still open after it, and the share cancelled. Show the median and range of days past the promised week for the open lines. Present the results by supplier, department, and order value. Use the same denominator for every rate.",
      "Separate a line that aged because the supplier missed a shipment from one that aged because the shop never confirmed a week. A supplier miss is a different finding from an unconfirmed promise. Report both because they lead to different fixes. A shop may accept a supplier backorder but should not accept an order with no promise at all.",
      "Section: Limits of the evidence",
      "The order and receiving records can show when goods arrived, but they cannot show whether they arrived when the shop needed them. A delivery inside the promised week can still be too late for a customer. The protocol also cannot capture a purchase made by phone and never entered in the system. State that limitation before presenting the rate.",
      "A small shop may have too few lines to support a stable trend. Describe the line count and the supplier mix instead of ranking buyers. Do not compare a shop that orders daily with one that orders monthly. Report the promise rule and the review cadence beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the purchasing lead and ask them to choose one observable change. The change might be a required written promise at order time, a weekly aging list, a named owner per supplier, or a follow-up date inside the promised week. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the on-time rate rises but cancelled lines also rise, the shop may be closing orders instead of receiving them. If both fall but backorders grow, the team may be promising weeks it cannot meet. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Measure each line from the supplier-confirmed week to the first complete receipt.",
      "Count a line as closed only when the final part has arrived.",
      "Separate a supplier miss from an order that never had a confirmed week.",
      "Report cancelled and backordered lines beside the on-time receipt rate."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-20"
      },
      {
        "title": "Internal Revenue Service, Publication 583, starting a business and keeping records",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/publications/p583",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
        "checked": "2026-11-20"
      }
    ],
    "related": [
      "what-share-of-supplier-invoices-match-the-purchase-order-and-receipt-on-first-check",
      "how-often-do-supplier-deliveries-arrive-outside-the-booked-appointment-window"
    ]
  },
  {
    "slug": "how-often-do-counter-shift-handoffs-miss-an-open-customer-commitment",
    "title": "How often do counter shift handoffs miss an open customer commitment?",
    "excerpt": "A protocol for measuring how many open customer commitments survive a counter shift handoff and how many are dropped or duplicated.",
    "published": "2026-11-20",
    "imagePath": "/thumbnails/november-20/how-often-do-counter-shift-handoffs-miss-an-open-customer-commitment.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a counter shift handoff misses an open customer commitment that the next shift needed to keep. The unit is one open commitment at the moment of handover, not one shift and not one customer. The study measures the share carried forward with an owner, the share dropped, and the share duplicated by two shifts. It does not judge whether the commitment itself was reasonable.",
      "Set the scope to one shop, one counter, and one handoff routine. Record the handoff format, the read-back step, and the date the routine took effect. If the shop changes its schedule or its handoff tool during the study, keep the original routine for shifts already handed over and analyze later shifts separately. A new tool can change the record without changing what staff remember.",
      "Define the population as every open customer commitment that existed at the start of a shift during the window. Include callbacks, quotations, part orders, pickups, and approvals waiting on the customer. State any exclusion, such as an internal task with no customer waiting, and apply it to every commitment. Test the definition on ten handovers before collection begins. The reader should be able to rebuild the population from the handoff notes and the job list.",
      "Section: Definitions that make the measure reproducible",
      "Define a commitment as a promise of a specific action by a specific time that the customer is expecting. Define carried forward as a line in the incoming shift handoff that names the commitment, the owner, and the due time. A verbal mention without a written line is not carried forward. Record the handoff time and the start time of the incoming shift.",
      "Define dropped as a commitment that was open at handover and had no line in the incoming note. Define duplicated as a commitment that two shifts both recorded as their own without a shared owner. Record a corrected handoff, such as a line added after the read-back, as a separate event with its time. A definition that accepts a general reminder as a handoff will overstate coverage.",
      "Section: Evidence standard and data dictionary",
      "For each commitment, capture the commitment identifier, customer, job, promised action, due time, original owner, handoff time, incoming owner, and status after the next shift. Add the source of the promise and whether the customer was told. Keep the outgoing note, the incoming note, and the job record linked. Record any commitment that changed owner more than once.",
      "Capture the reason for a miss when it is documented: a late job, a rushed handover, a note written after the shift, or an item that was never written down. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every handover in the window rather than a sample, because the routine applies to each shift. If the shop runs several counters or shifts, collect each separately and record the group. A combined rate can hide one shift that never reads the note. Report the number of commitments and the shifts behind every percentage.",
      "Draw the data from the handoff notes and the job list, not from a summary written after the fact. If either record is incomplete, say so and reduce the claim. Record the collection dates, the shift pattern, and any commitment that could not be matched to a job. A missing note is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share of commitments carried forward with an owner, the share dropped, and the share duplicated. Show the median and range of minutes between the handoff and the incoming read-back. Present the results by shift, commitment type, and due time. Use the same denominator for every rate.",
      "Separate a commitment missed because the note was never written from one missed because the note was written but not read. A writing gap is a different finding from a read-back gap. Report both because they lead to different fixes. A shop may accept a busy shift but should not accept a customer promise that vanishes at the changeover.",
      "Section: Limits of the evidence",
      "The handoff note can show what was recorded, but it cannot show what staff understood. A read line is not a shared understanding. The protocol also cannot capture a commitment passed verbally in the back room and never written down. State that limitation before presenting the rate.",
      "A small shop may have too few handovers to support a stable trend. Describe the shift count and the commitment mix instead of ranking staff. Do not compare a shop with a written read-back with one that relies on memory. Report the handoff routine and the read-back rule beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the shop lead and ask them to choose one observable change. The change might be a fixed note format, a read-back at shift start, a named owner for each commitment, or a weekly review of missed handoffs. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the carried-forward rate rises but duplicate work also rises, two shifts may be claiming the same commitment. If both fall but customers still complain, the note may be complete while the work is late. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Measure each open commitment at handover, not each shift or each customer.",
      "Count a commitment as carried only when the note names the owner and due time.",
      "Separate a note that was never written from one that was written but not read.",
      "Report dropped and duplicated commitments beside the carried-forward rate."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
        "checked": "2026-11-20"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-20"
      },
      {
        "title": "Federal Trade Commission, advertising and marketing guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing",
        "checked": "2026-11-20"
      }
    ],
    "related": [
      "how-often-are-same-day-pickup-orders-ready-before-the-promised-time",
      "how-long-do-service-callback-requests-wait-before-a-technician-is-assigned"
    ]
  }
];
