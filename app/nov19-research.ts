export const nov19ResearchBatch = [
  {
    "slug": "what-share-of-customer-deposits-are-matched-to-an-order-within-one-business-day",
    "title": "What share of customer deposits are matched to an order within one business day?",
    "excerpt": "A protocol for measuring how many customer deposits are linked to a specific order inside one business day of receipt.",
    "published": "2026-11-19",
    "imagePath": "/thumbnails/november-19/what-share-of-customer-deposits-are-matched-to-an-order-within-one-business-day.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of customer deposits are matched to a specific order within one business day of receipt. The unit is one deposit payment, not one customer and not one order. The study measures the share matched inside the window, the share matched later, and the deposits that remain unlinked. It does not judge whether the deposit amount was correct or whether the customer later cancelled.",
      "Set the scope to one shop, one payment process, and one deposit rule. Record the payment methods accepted, the order system, and the date the rule took effect. If the shop changes its payment tool during the study, keep the original process for deposits already taken and analyze later deposits separately. A new tool can change the match speed without changing staff behavior.",
      "Define the population as every deposit received during the window, including deposits that were refunded or moved to another order. State any exclusion, such as an internal test payment, and apply it to every deposit. Test the definition on ten closed deposits before collection begins. The reader should be able to rebuild the population from the payment records and the order list.",
      "Section: Definitions that make the measure reproducible",
      "Define a matched deposit as one that is linked to a named order or job number in the shop's record. A deposit that sits in a general holding account is not matched even when the customer name is written beside it. Define the clock start as the time the payment was received, not the time the customer first discussed the order. Record both times when the system supports it.",
      "Define one business day in the shop's local time and state whether weekends and holidays count. Record the rule that decides when an order number is created, because a shop that creates orders only at day end will look slower than one that creates them at intake. Treat a deposit moved to a later order as a new match with the new date. A definition that counts an open holding account as matched will flatter the result.",
      "Section: Evidence standard and data dictionary",
      "For each deposit, capture the deposit identifier, receipt time, amount, payment method, customer, staff member, order identifier, and match time. Add the deposit type and whether the customer received a written confirmation. Keep the receipt and the order record linked to the entry. Record any deposit that was applied to more than one order and how the split was made.",
      "Capture the reason for a delay when it is documented: no order was created, the payment reference was missing, the deposit was taken at a different location, or the match was left for the bookkeeper. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every deposit in the window rather than a sample, because the matching rule applies to each payment. If the shop runs several locations or payment methods, collect each separately and record the group. A combined rate can hide one location that never links its deposits. Report the number of deposits and the value behind every percentage.",
      "Draw times from the payment tool and the order system, not from a spreadsheet maintained after the fact. If either record is incomplete, say so and reduce the claim. Record the export date, the filters, and any deposit that could not be matched to an order. A missing match is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share matched inside one business day, the share matched later, and the share never matched. Show the median and range of hours from receipt to match. Present the results by location, payment method, and staff role. Use the same denominator for every rate.",
      "Separate a deposit that waited because no order existed from one that waited because nobody linked it. A missing order is a different finding from an unread payment queue. Report both because they lead to different fixes. A shop may accept a slow order creation but should not accept a payment that nobody owns.",
      "Section: Limits of the evidence",
      "The payment record can show that money arrived, but it cannot show that the customer understood what the deposit covered. A receipt is not a contract. The protocol also cannot capture a cash deposit that was placed in the drawer without a record. State that limitation before presenting the rate.",
      "A small shop may have too few deposits to support a stable trend. Describe the deposit count and the payment mix instead of ranking staff. Do not compare a shop that takes deposits on every repair with one that takes them only on special orders. Report the deposit rule beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the counter lead and ask them to choose one observable change. The change might be an order number required before payment, a daily match check, a named deposit owner, or a confirmation message that includes the order reference. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the on-time rate rises but refunds also rise, the shop may be creating orders faster than it can confirm them. If both fall but unmatched deposits shrink, the team may be linking payments without telling the customer. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Measure each deposit from payment receipt to a named order match.",
      "Define a match as a link to an order number, not a name in a holding account.",
      "Keep refunded and moved deposits in the denominator and report them separately.",
      "Separate a missing order from an unread payment queue before choosing a fix."
    ],
    "referenceSources": [
      {
        "title": "Internal Revenue Service, Publication 583, starting a business and keeping records",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/publications/p583",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-19"
      },
      {
        "title": "Federal Trade Commission, mail, internet, or telephone order merchandise rule",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule",
        "checked": "2026-11-19"
      }
    ],
    "related": [
      "how-often-does-a-daily-cash-drawer-count-differ-from-the-recorded-opening-balance",
      "what-share-of-special-orders-reach-the-customer-with-a-confirmed-lead-time-before-payment"
    ]
  },
  {
    "slug": "how-often-do-supplier-deliveries-arrive-outside-the-booked-appointment-window",
    "title": "How often do supplier deliveries arrive outside the booked appointment window?",
    "excerpt": "A protocol for measuring how many supplier deliveries arrive outside the booked window and for separating a supplier delay from a receiving problem.",
    "published": "2026-11-19",
    "imagePath": "/thumbnails/november-19/how-often-do-supplier-deliveries-arrive-outside-the-booked-appointment-window.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a supplier delivery arrives outside the appointment window the shop booked. The unit is one delivery appointment, not one purchase order and not one supplier. The study measures the share arriving inside the window, the share arriving early or late, and the appointments that never happened. It does not judge whether the goods were correct or whether the supplier was at fault.",
      "Set the scope to one shop, one receiving door, and one booking rule. Record the window length, the booking channel, and the date the rule took effect. If the shop changes its receiving hours during the study, keep the original rule for appointments already booked and analyze later bookings separately. A new booking tool can change the record without changing arrival behavior.",
      "Define the population as every booked delivery appointment during the window, including appointments that were cancelled or moved. State any exclusion, such as a will-call pickup that did not use the receiving door, and apply it to every appointment. Test the definition on ten closed appointments before collection begins. The reader should be able to rebuild the population from the booking log.",
      "Section: Definitions that make the measure reproducible",
      "Define the booked window as the start and end time confirmed with the supplier in writing. Define the arrival time as the time the driver reached the receiving door, not the time the paperwork was finished. Record both the booking confirmation time and the arrival time. A delivery that arrives before the shop opens is still outside the window.",
      "Define early and late as separate outcomes, because a driver who arrives before staff are ready creates a different problem from one who arrives after the window closes. Record the time zone and whether the appointment crosses noon or midnight. Treat an appointment moved by the shop as a new booking with its own window. A definition that counts a moved appointment as on time will flatter the result.",
      "Section: Evidence standard and data dictionary",
      "For each appointment, capture the appointment identifier, supplier, purchase order, booked start and end, arrival time, driver, vehicle, carton count, and receiver. Add the reason code and any redelivery fee. Keep the booking message and the signed delivery note linked to the entry. Record whether the goods were short or damaged so arrival and condition are not confused.",
      "Capture the reason for an off-window arrival when it is documented: traffic, a supplier route change, a shop request, a missing receiver, or a dock conflict. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every appointment in the window rather than a sample, because the booking rule applies to each one. If the shop runs several doors or supplier groups, collect each separately and record the group. A combined rate can hide one supplier that always arrives late. Report the number of appointments behind every percentage.",
      "Draw times from the booking log and the receiving record, not from a spreadsheet maintained after the fact. If either log is incomplete, say so and reduce the claim. Record the export date, the filters, and any appointment that could not be matched to an arrival. A missing log is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share arriving inside the window, the share arriving early, the share arriving late, and the share that never arrived. Show the median and range of minutes outside the window. Present the results by supplier, door, and day of week. Use the same denominator for every rate.",
      "Separate a supplier delay from a receiving delay. A driver who waits because no receiver is present is a shop problem, not a supplier problem. Report both because they lead to different fixes. A shop may accept a supplier delay but should not accept a dock that cannot receive on time.",
      "Section: Limits of the evidence",
      "The booking log can show the window the shop requested, but it cannot prove the supplier agreed to it. A confirmation message is useful evidence but is not always present. The protocol also cannot capture a delivery that arrived with no appointment at all. State that limitation before presenting the rate.",
      "A small shop may have too few appointments to support a stable trend. Describe the appointment count and the supplier mix instead of ranking drivers. Do not compare a shop with a two-hour window with one that accepts a full day. Report the booking rule beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the receiving lead and ask them to choose one observable change. The change might be a written booking confirmation, a named receiver for each day, a dock schedule board, or a weekly supplier review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the on-time rate rises but redelivery fees also rise, the shop may be refusing deliveries it could have accepted. If both fall but appointments shrink, the team may be booking fewer windows to improve the number. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Measure each delivery from the booked window to the actual arrival at the door.",
      "Treat early arrivals and late arrivals as separate outcomes with separate fixes.",
      "Separate a supplier delay from a receiving delay before choosing a remedy.",
      "Report never-arrived appointments and redelivery fees beside the on-time rate."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-19"
      },
      {
        "title": "Federal Trade Commission, advertising and marketing guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-19"
      },
      {
        "title": "Internal Revenue Service, Publication 583, starting a business and keeping records",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/publications/p583",
        "checked": "2026-11-19"
      }
    ],
    "related": [
      "what-share-of-customer-deposits-are-matched-to-an-order-within-one-business-day",
      "how-long-do-service-callback-requests-wait-before-a-technician-is-assigned"
    ]
  },
  {
    "slug": "how-long-do-service-callback-requests-wait-before-a-technician-is-assigned",
    "title": "How long do service callback requests wait before a technician is assigned?",
    "excerpt": "A protocol for measuring the wait between a customer callback request and the assignment of a technician who will make the call.",
    "published": "2026-11-19",
    "imagePath": "/thumbnails/november-19/how-long-do-service-callback-requests-wait-before-a-technician-is-assigned.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how long a service callback request waits before a technician is assigned. The unit is one callback request, not one customer and not one repair job. The study measures the share assigned inside the shop's stated target, the median wait, and the requests that never received an owner. It does not judge whether the callback resolved the customer's problem.",
      "Set the scope to one repair shop, one callback queue, and one assignment rule. Record the target time, the priority categories, and the date the rule took effect. If the shop changes its target during the study, keep the original target for requests already open and analyze later requests separately. A new scheduling tool can change the assignment speed without changing staffing.",
      "Define the population as every callback request recorded during the window, including requests that were withdrawn or resolved by a message. State any exclusion, such as a supplier warranty call that did not involve the shop's technician, and apply it to every request. Test the definition on ten closed requests before collection begins. The reader should be able to rebuild the population from the queue.",
      "Section: Definitions that make the measure reproducible",
      "Define a callback request as a customer message that asks the shop to call about a specific job, quote, or repair. Define assignment as a named technician accepting the request with a target call time. A note that says the request was seen is not an assignment. Record the exact moment the technician accepted the case.",
      "Define the clock start as the time the request was recorded in the queue, not the time the customer first mentioned it in passing. Define the clock stop as the assignment time, not the time the customer was eventually reached. Treat a request reassigned to a second technician as one request with the first assignment date kept. A definition that stops at the call rather than the assignment will measure a different question.",
      "Section: Evidence standard and data dictionary",
      "For each request, capture the request identifier, job identifier, customer, channel, received time, priority, assignment time, technician, and target call time. Add the outcome and whether the customer was reached. Keep the original customer message and the job history linked to the entry. Record any request that was merged with another request from the same customer.",
      "Capture the reason for a delay when it is documented: no technician on shift, an unclear job history, a missing part number, or a queue that was not reviewed. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every request in the window rather than a sample, because the assignment rule applies to each one. If the shop runs several service lines or locations, collect each separately and record the group. A combined rate can hide one line that never assigns until the next day. Report the number of requests behind every percentage.",
      "Draw times from the queue and the scheduling system, not from a spreadsheet maintained after the fact. If either log is incomplete, say so and reduce the claim. Record the export date, the filters, and any request that could not be matched to an assignment. A missing log is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share assigned inside the target, the share assigned later, and the share never assigned. Show the median and range of hours from receipt to assignment. Present the results by service line, priority, and day of week. Use the same denominator for every rate.",
      "Separate a request that waited because no technician was available from one that waited because nobody opened the queue. A staffing gap is a different finding from an unread queue. Report both because they lead to different fixes. A shop may accept a capacity limit but should not accept a silent backlog.",
      "Section: Limits of the evidence",
      "The queue can show when a technician accepted the case, but it cannot show whether the call was helpful. An assignment is not a resolution. The protocol also cannot capture a callback arranged at the counter and never entered in the queue. State that limitation before presenting the rate.",
      "A small shop may have too few requests to support a stable trend. Describe the request count and the service mix instead of ranking technicians. Do not compare a shop with a two-hour target with one that promises a next-day call. Report the target beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the shop lead and ask them to choose one observable change. The change might be a daily queue review, a named callback owner per shift, a required job history at intake, or a priority list agreed with the technicians. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the on-time assignment rate rises but repeat callbacks also rise, the team may be assigning fast without enough history. If both fall but the never-assigned share shrinks, the queue may be clearing without a call. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Measure each request from queue entry to a named technician assignment.",
      "Define assignment as an accepted case with a target call time, not a seen note.",
      "Keep the first assignment date when a request is reassigned.",
      "Separate a capacity gap from an unread queue before choosing a fix."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
        "checked": "2026-11-19"
      },
      {
        "title": "Federal Trade Commission, advertising and marketing guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-19"
      }
    ],
    "related": [
      "how-often-do-supplier-deliveries-arrive-outside-the-booked-appointment-window",
      "how-often-does-a-daily-cash-drawer-count-differ-from-the-recorded-opening-balance"
    ]
  },
  {
    "slug": "how-often-does-a-daily-cash-drawer-count-differ-from-the-recorded-opening-balance",
    "title": "How often does a daily cash drawer count differ from the recorded opening balance?",
    "excerpt": "A protocol for measuring how often a drawer count differs from the expected amount and for separating counting error from a missing payment.",
    "published": "2026-11-19",
    "imagePath": "/thumbnails/november-19/how-often-does-a-daily-cash-drawer-count-differ-from-the-recorded-opening-balance.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a daily cash drawer count differs from the expected amount built from the opening balance and the day's cash activity. The unit is one drawer count, not one shift and not one employee. The study measures the share of counts that match, the size and direction of the differences, and the counts that were corrected later. It does not judge whether any person took money.",
      "Set the scope to one shop, one set of drawers, and one count routine. Record the opening balance method, the closing form, and the date the routine took effect. If the shop changes its count form during the study, keep the original form for counts already made and analyze later counts separately. A new register can change the record without changing the cash handling.",
      "Define the population as every closing count made during the window, including counts that were recounted and counts taken by a backup. State any exclusion, such as a drawer that was not used that day, and apply it to every count. Test the definition on ten closed counts before collection begins. The reader should be able to rebuild the population from the count sheets.",
      "Section: Definitions that make the measure reproducible",
      "Define the expected amount as the opening balance plus cash sales minus cash refunds and cash drops. Record the formula with the entry so a reviewer can repeat it. Define the variance as counted cash minus expected cash, and keep the sign. A count that is off by a coin roll is still a variance.",
      "Define a match as a variance of zero after the recount. Record a small variance and a large variance as separate bands using the shop's written threshold. Treat a correction as a new dated line that references the original count. A definition that rounds away small differences will hide the pattern that matters.",
      "Section: Evidence standard and data dictionary",
      "For each count, capture the date, shift, drawer identifier, opening balance, cash sales, refunds, drops, expected amount, counted amount, and variance. Add the counter, the witness, the recount total, and the correction approver. Keep the register close report and the drop slips linked to the entry. Record any sale that was voided or refunded during the shift.",
      "Capture the reason for a variance when it is documented: a counting error, a missing drop, a double-recorded refund, or a payment taken outside the register. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every closing count in the window rather than a sample, because the routine applies to each shift. If the shop runs several registers or locations, collect each separately and record the group. A combined rate can hide one drawer that is always short. Report the number of counts and the cash volume behind every percentage.",
      "Draw amounts from the count sheets, the register report, and the deposit record, not from a spreadsheet maintained after the fact. If any record is incomplete, say so and reduce the claim. Record the export date, the filters, and any count that could not be matched to a register report. A missing report is itself a finding about the control.",
      "Section: Analysis and reporting",
      "Report the share of counts that match, the share with a small variance, and the share with a large variance. Show the median and range of the variance and whether it was over or short. Present the results by drawer, shift, and day of week. Use the same denominator for every rate.",
      "Separate a variance that closed after a recount from one that stayed open. A recount that fixes the number is a counting problem, while an open difference may be a missing payment. Report both because they lead to different follow-ups. A shop may accept a corrected count but should not accept a silent write-off.",
      "Section: Limits of the evidence",
      "The count sheet can show the difference, but it cannot show what caused it. The protocol also cannot capture a cash payment that was never rung into the register. Note the gap in the review rather than filling it with a guess. A rate that treats every variance as theft will damage trust without improving controls.",
      "A small shop may have too few counts to support a stable trend. Describe the count and the cash volume instead of ranking employees. Do not compare a shop with a single drawer with one that runs six registers. Report the count routine and the threshold beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the counter lead and ask them to choose one observable change. The change might be a required witness at closing, a fixed opening balance, a daily drop schedule, or a weekly variance review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the match rate rises but corrections also rise, the team may be rounding the count to avoid a review. If both fall but the open variance grows, the routine may be catching differences without resolving them. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Build the expected amount from the opening balance plus cash activity.",
      "Keep the variance sign and band small and large differences by a written threshold.",
      "Separate a recount that fixes the number from an unresolved difference.",
      "Report open variances and corrections beside the match rate."
    ],
    "referenceSources": [
      {
        "title": "Internal Revenue Service, Publication 583, starting a business and keeping records",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/publications/p583",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
        "checked": "2026-11-19"
      }
    ],
    "related": [
      "what-share-of-customer-deposits-are-matched-to-an-order-within-one-business-day",
      "how-long-do-service-callback-requests-wait-before-a-technician-is-assigned"
    ]
  },
  {
    "slug": "what-share-of-special-orders-reach-the-customer-with-a-confirmed-lead-time-before-payment",
    "title": "What share of special orders reach the customer with a confirmed lead time before payment?",
    "excerpt": "A protocol for measuring how often a special order is quoted with a supplier-confirmed lead time before the customer pays.",
    "published": "2026-11-19",
    "imagePath": "/thumbnails/november-19/what-share-of-special-orders-reach-the-customer-with-a-confirmed-lead-time-before-payment.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of special orders reach the customer with a confirmed lead time before payment. The unit is one special order, not one customer and not one supplier. The study measures the share with a supplier-confirmed date before payment, the share confirmed later, and the orders paid without a date. It does not judge whether the customer accepted the date.",
      "Set the scope to one shop, one special-order process, and one quote rule. Record the supplier list, the payment process, and the date the rule took effect. If the shop changes its quote form during the study, keep the original form for orders already quoted and analyze later orders separately. A new ordering tool can change the record without changing the supplier answer.",
      "Define the population as every special order created during the window, including orders that were cancelled or refunded. State any exclusion, such as an in-stock item sold from the shelf, and apply it to every order. Test the definition on ten closed orders before collection begins. The reader should be able to rebuild the population from the order list.",
      "Section: Definitions that make the measure reproducible",
      "Define a confirmed lead time as a date or range that the supplier stated in writing for the specific item and quantity. A catalogue estimate is not a confirmation. Define payment as the deposit or full payment received from the customer. Record the time of the supplier answer and the time of payment so the order of events is clear.",
      "Define the quotation as reaching the customer when the date appears in the message or document the customer received. A note kept only in the staff system is not reaching the customer. Treat a range as confirmed only when both ends come from the supplier. A definition that accepts a staff guess as a confirmation will overstate the result.",
      "Section: Evidence standard and data dictionary",
      "For each order, capture the order identifier, customer, item, quantity, supplier, supplier answer time, quoted date, quote channel, payment time, and payment amount. Add the staff member who requested the lead time and the staff member who quoted the customer. Keep the supplier message and the customer quote linked to the entry. Record any date revision and the time it was sent.",
      "Capture the reason for a missing confirmation when it is documented: the supplier did not answer, the item was urgent, the customer paid before the quote, or the shop used a standing lead time. Do not infer a reason from an empty field. Mark unknown reasons as unknown and report the count. A guessed reason hides the step that actually needs repair.",
      "Section: Sampling and collection",
      "Collect every special order in the window rather than a sample, because the quote rule applies to each order. If the shop runs several departments or suppliers, collect each separately and record the group. A combined rate can hide one department that quotes from memory. Report the number of orders and the value behind every percentage.",
      "Draw times from the order system and the customer message log, not from a spreadsheet maintained after the fact. If either record is incomplete, say so and reduce the claim. Record the export date, the filters, and any order that could not be matched to a supplier answer. A missing answer is itself a finding about the routine.",
      "Section: Analysis and reporting",
      "Report the share confirmed before payment, the share confirmed later, and the share paid without a confirmed date. Show the median and range of hours from the supplier answer to the customer quote. Present the results by department, supplier, and order value. Use the same denominator for every rate.",
      "Separate an order that waited because the supplier was slow from one that waited because the shop did not ask. A slow supplier is a different finding from an unasked question. Report both because they lead to different fixes. A shop may accept a supplier delay but should not accept a payment taken on a guess.",
      "Section: Limits of the evidence",
      "The quote record can show the date the customer received, but it cannot show whether the customer understood that the date could move. A sent message is not comprehension. The protocol also cannot capture a date given at the counter and never written down. State that limitation before presenting the rate.",
      "A small shop may have too few special orders to support a stable trend. Describe the order count and the supplier mix instead of ranking staff. Do not compare a shop that orders weekly with one that orders daily. Report the quote rule beside the rate.",
      "Section: What to change",
      "Give the result to the owner and the purchasing lead and ask them to choose one observable change. The change might be a required supplier answer before payment, a quote template that shows the source date, a daily order check, or a monthly supplier lead-time review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "If the confirmed rate rises but late arrivals also rise, the shop may be quoting the supplier's best case without transit. If both fall but cancellations shrink, the team may be refusing orders it could serve. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set."
    ],
    "takeaways": [
      "Count an order as confirmed only with a supplier-stated date for the item.",
      "Measure the event order: supplier answer, customer quote, then payment.",
      "Separate a slow supplier from a shop that never asked for a date.",
      "Report late arrivals and cancellations beside the confirmed-before-payment rate."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, mail, internet, or telephone order merchandise rule",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-19"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-19"
      }
    ],
    "related": [
      "how-often-do-supplier-deliveries-arrive-outside-the-booked-appointment-window",
      "what-share-of-customer-deposits-are-matched-to-an-order-within-one-business-day"
    ]
  }
];
