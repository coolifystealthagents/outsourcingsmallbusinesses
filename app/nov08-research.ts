export const nov08ResearchBatch = [
  {
    "slug": "how-long-do-customer-refunds-wait-for-owner-approval",
    "title": "How long do customer refunds wait for owner approval?",
    "excerpt": "A protocol for measuring the delay between a refund request and the owner decision, with stage times and the customer's waiting experience.",
    "published": "2026-11-08",
    "imagePath": "/images/nov08/how-long-do-customer-refunds-wait-for-owner-approval.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how long a customer refund waits between the request and the owner's decision. The unit is one refund request for one order, identified by the order number and the requested amount. The study measures the time to evidence complete, the time to owner decision, and the time to the customer seeing the result. It does not judge whether the refund was the right business decision.",
      "Set the scope to one small business, one sales channel, and one refund policy. Record the approval thresholds, the payment methods, and the channels through which a request can arrive. If the policy changes during the window, keep the earlier definition for requests already in progress and analyze the later cohort separately. A new threshold can look like a faster process when it is only a different rule.",
      "Define the population as every refund request recorded during the window, including requests that were withdrawn, rejected, or partially approved. The unit is the request, not the customer, because one customer can request several refunds. A request that is reopened after a denial is a new unit linked to the original. Test the definition on two recent requests before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define the request time as the moment the customer's message or form was recorded, not the moment an agent first read it. Define evidence complete as the point when the order reference, the reason, and the required proof are present. Define the owner decision as the recorded approval, rejection, or partial amount. Define customer result as the refund appearing on the customer's statement or the customer being told the outcome.",
      "Do not count an internal note that says refund as a decision. Do not count an approved amount that has not been sent to the payment processor as a customer result. A request that is approved and later reversed keeps both dates. Each definition should include a positive example and a boundary example so a second reviewer classifies the same record the same way.",
      "Record the request channel, the amount band, the payment method, and whether the customer is new or repeat. These strata matter because a card refund and a cash refund have different settlement times. Include requests that arrived through a phone call, because those are often logged later and appear slower. Use one category list for every request.",
      "Section: Evidence standard and data dictionary",
      "For each request, capture the order number, the amount, the reason, the requester, the approver, and the channel. Add the request time, the evidence complete time, the decision time, and the customer result time. Record the number of follow-ups from the customer and the number of times the request was returned for missing information. Keep the message thread with the record.",
      "Also capture whether the refund was full or partial, whether a return was required, and whether the customer received a store credit instead of money. These fields change the customer's experience even when the decision time is the same. A second reviewer should be able to rebuild the timeline from the record without reading every message. That test is the evidence standard for the sample.",
      "If the business uses a payment processor with a settlement delay, record the processor's stated timeline separately from the business's decision time. A customer may wait days after approval for the money to appear. The protocol should not attribute the processor's delay to the owner's decision. Report the two intervals separately in every table.",
      "Section: Sampling and collection",
      "Draw the sample from the refund log rather than from a list of complaints. Record the export date, the filters, the row count, and the selection rule. Include requests from every channel and every day of the week so the result is not dominated by one busy period. If the population is ordered by time, a fixed interval spreads the sample across the window.",
      "Collect the request and the decision as they existed at the time, not after a later cleanup. If a note was added days later, record the addition date and analyze the original delay separately. Do not infer a decision from a payment that was later reversed. Note the collection date separately from the request date.",
      "A useful additional measure is the share of requests that were complete on the first contact. A complete request names the order, the reason, and the evidence. Record the missing fields and the time spent collecting them. That view separates a customer-preparation problem from an approval bottleneck.",
      "Section: Analysis and reporting",
      "Report the number of requests, the median time to evidence complete, the median time to decision, and the median time to customer result. Show the counts by channel, amount band, and payment method. Present the share of requests that waited more than one business day at any stage. Use the same denominator for every rate and show the number of records with incomplete times.",
      "Inspect the slowest requests and describe which stage dominated without naming the customer or the employee. A wait before evidence complete may point to a missing template, while a wait after that may point to an owner who is unavailable. Compare the result with the amount band, because a large refund may need more review. Report rejected requests separately so their timelines do not distort the approved cases.",
      "A useful additional view is the time from the owner decision to the customer message. A fast decision that is not communicated does not reduce the customer's wait. Show the communication delay beside the decision delay. That view helps the owner fix the notification step rather than adding more approvers.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the owner made a fair decision or whether the customer was satisfied with the outcome. It can show only the request, the evidence, the decision, and the result times. A fast decision is not proof of good service, and a slow one is not proof of neglect. The protocol also cannot capture a refund handled in a phone call that was never logged.",
      "Payment systems can post a refund with a delay that the business does not control. A customer may see the money before the record is updated, or after. Record those gaps and their treatment instead of dropping them silently. If the owner and the approver are the same person, note the independence limitation and analyze that group separately.",
      "A useful check is whether a new assistant can follow the refund guide and predict which requests need owner approval. Ask the last two hires which case they had to escalate and why. That answer tests the guide, not the person. Update the guide with the missing case and the owner.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the support lead and ask them to choose one observable change. The change might be a complete-request template, a named backup approver, a smaller evidence requirement for low amounts, or a daily approval slot. Record the owner, the effective date, and the measure that will show whether the change worked. A change without a measure becomes an opinion at the next review. Avoid changing the threshold and the tool at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If decision time fell but customer result time did not, the bottleneck may have moved to communication or settlement. If evidence time fell but decision time rose, the queue may have moved to the owner. Close the review when the owner accepts the finding and the next cohort is scheduled.",
      "A useful additional view is the share of refunds that were approved within the first response. A customer who receives a decision in the same conversation has a shorter experience even when the payment settles later. Record the first response time and the decision time together. That comparison helps the owner see whether the team is slow to decide or slow to reply.",
      "Ask the last five customers who requested a refund whether they knew what would happen next. A clear expectation reduces follow-up messages even when the wait is unavoidable. Record the answer and the point in the process where the expectation was set. Use the finding to improve the first reply, not to add another approval step."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, consumer protection guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-08"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-08"
      },
      {
        "title": "Better Business Bureau, customer service guidance",
        "publisher": "Better Business Bureau",
        "url": "https://www.bbb.org/",
        "checked": "2026-11-08"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-08"
      }
    ]
  },
  {
    "slug": "what-share-of-supplier-invoices-arrive-without-a-purchase-order",
    "title": "What share of supplier invoices arrive without a purchase order?",
    "excerpt": "A measurement protocol for invoice matching gaps, with channel, supplier type, and the time spent resolving a missing order.",
    "published": "2026-11-08",
    "imagePath": "/images/nov08/what-share-of-supplier-invoices-arrive-without-a-purchase-order.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of supplier invoices arrive without a purchase order and how much work the gap creates. The unit is one invoice received during the window, identified by the supplier and the invoice number. The study measures the share without a matching order, the reason, and the time to resolve. It does not judge whether the purchase was necessary or whether the supplier is at fault.",
      "Set the scope to one small business, one accounts-payable process, and one supplier base. Record the systems that can receive an invoice and the rule for matching an order. If the approval process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new order requirement can look like a worsening trend when it is only a different gate.",
      "Define the population as every invoice recorded during the window, including invoices that were rejected, returned, or paid without an order under an exception. The unit is the invoice, not the supplier, because one supplier can send several invoices. A credit note is a separate unit with a link to the original invoice. Test the definition on two recent invoices before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define an invoice as received when it enters the business's invoice inbox or accounting system, not when someone opens it. Define a matching purchase order as an approved order that names the same supplier and covers the invoiced items and amount within tolerance. Define resolution as the point when the invoice is matched, approved as an exception, or rejected. Each definition needs a positive and a boundary example.",
      "Do not count a verbal approval as a purchase order unless it was recorded in the system before the invoice arrived. Do not count an order raised after the invoice as a match for the initial state; record it as a late order with the date. A partial match should be recorded with the matched and unmatched amounts. The definitions should survive a second reviewer.",
      "Record the supplier category, the spend band, the invoice channel, and whether the supplier is new or established. These strata matter because a new supplier may not know the order process while an established one may be testing a shortcut. Include invoices that arrived by email, portal, and post. Use one category list for every invoice.",
      "Section: Evidence standard and data dictionary",
      "For each invoice, capture the supplier, the invoice number, the amount, the date received, the order number if any, and the matching status. Add the time to first review, the time to resolution, the resolver, and the reason for the gap. Record whether the invoice was paid under an exception and who approved the exception. Keep the invoice image with the record.",
      "Also capture whether the invoice was a duplicate and whether the supplier sent a statement that included other invoices. These details change the workload even when the gap rate is the same. A second reviewer should be able to rebuild the matching decision from the record and the order system. If the record cannot support that, the sample is incomplete.",
      "If the business uses a purchase-card feed, record whether the card transaction was treated as an order. A card receipt is evidence of a purchase but not necessarily an approved order. The protocol should state which evidence standard applies so the result is comparable across suppliers. Write the standard in the collection guide before the first invoice is sampled.",
      "Section: Sampling and collection",
      "Draw the sample from the invoice log rather than from a list of problem suppliers. Record the export date, the filters, the row count, and the selection rule. Include invoices from every channel and every week so the result is not dominated by a month-end batch. If the population is ordered by supplier, take a fixed interval across the list.",
      "Collect the invoice and the matching record as they existed at the time, not after a later cleanup. If an order was raised after the invoice, record both dates and treat the initial state as unmatched. Do not infer an order from a payment. Note the collection date separately from the invoice date.",
      "A useful additional measure is the share of invoices that were complete on the first submission. A complete invoice names the order, the items, the amount, and the tax. Record the missing fields and the time spent asking the supplier. That view separates a supplier-education problem from an internal approval problem.",
      "Section: Analysis and reporting",
      "Report the number of invoices, the share without a matching order, the share matched late, and the share paid under an exception. Show the counts by supplier category, spend band, and channel. Present the median time to resolution and the share that waited more than five business days. Use the same denominator for every rate.",
      "Inspect the invoices without an order and group the reasons without naming the supplier or employee. A cluster from one channel may point to a portal that does not require an order number. A cluster at month end may point to a rush that bypasses the process. Report duplicates separately because they carry a different control risk.",
      "A useful additional view is the time from the invoice date to the order date when an order was raised later. A long gap suggests the purchase was made without a plan, while a short gap suggests a paperwork delay. That view helps the owner decide whether to fix the buying habit or the order template. Report it beside the overall gap rate rather than in a separate memo.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the purchase was legitimate or whether the price was fair. It can show only whether an order existed and how long the mismatch took to resolve. A high match rate is not proof of good purchasing, because the order may have been raised after the fact. The protocol also cannot capture a purchase made on a personal card and never entered.",
      "Invoice systems can merge suppliers or change an invoice number during import. A duplicate may appear as a new invoice, or a credit may be missed. Record those cases and their treatment instead of dropping them. If the same person raises the order and approves the invoice, note the independence limitation and analyze that group separately.",
      "A useful check is whether a new assistant can find the order for a typical invoice in under two minutes. Ask them to try five invoices and record where they looked. That test measures the system and the naming rule, not the assistant. Fix the search path before asking for more matching discipline.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the accounts-payable lead and ask them to choose one observable change. The change might be a supplier reminder, a required order field on the invoice portal, a pre-approved order for recurring supplies, or a weekly exception review. Record the owner, the effective date, and the measure that will show whether the change worked. A change without a measure becomes an opinion at the next review.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If the gap rate fell but resolution time did not, the process may still be slow after the order arrives. If resolution time fell but the gap rate rose, the team may be approving exceptions faster without fixing the cause. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "A useful additional view is the share of invoices that were matched by the person who raised the order. A match performed by the buyer can be faster but less independent than a match performed by accounts payable. Record the matcher and the amount. That view helps the owner decide where a second check is worth the time.",
      "Ask the assistant to keep a short list of the order numbers that were hardest to find. The list is a map of the naming and search problems that slow the queue. Review it with the buyer and fix one naming rule at a time. A better index can reduce the gap rate without changing the purchasing policy."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-08"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-08"
      },
      {
        "title": "Association of Certified Fraud Examiners, fraud resources",
        "publisher": "Association of Certified Fraud Examiners",
        "url": "https://www.acfe.com/fraud-resources",
        "checked": "2026-11-08"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-08"
      }
    ]
  },
  {
    "slug": "how-often-does-a-small-business-assistant-escalate-a-support-ticket",
    "title": "How often does a small-business assistant escalate a support ticket?",
    "excerpt": "A protocol for measuring escalation frequency, the reason, the time to resolution, and whether escalation helped the customer.",
    "published": "2026-11-08",
    "imagePath": "/images/nov08/how-often-does-a-small-business-assistant-escalate-a-support-ticket.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a small-business assistant escalates a support ticket and why. The unit is one support ticket handled during the window, identified by the ticket number and the customer. The study measures the escalation rate, the reason, the time to resolution, and whether the customer needed a second contact. It does not judge whether the assistant should have known the answer.",
      "Set the scope to one small business, one support channel set, and one assistant assignment. Record the escalation rules, the available knowledge articles, and the hours of the backup team. If the rules change during the window, keep the earlier definition for tickets already open and analyze the later cohort separately. A new rule can look like a change in skill when it is only a different boundary.",
      "Define the population as every ticket assigned to the assistant during the window, including tickets that were closed without a reply and tickets that were reopened. The unit is the ticket, not the customer, because one customer can open several tickets. A ticket that is split into two issues creates two units linked to the original. Test the definition on two recent tickets before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define an escalation as a transfer to a named person or queue outside the assistant's authority, recorded in the ticket. Define a self-resolution as a response sent by the assistant without a transfer. Define a reopened ticket as one that returns within thirty days for the same issue. Each definition needs a positive and a boundary example so two reviewers classify the same ticket the same way.",
      "Do not count a question asked in a chat channel as an escalation unless the ticket was transferred. Do not count a consultation that did not move ownership as an escalation. A ticket that is escalated and returned to the assistant is one escalation with a return. Record the return date and the reason.",
      "Record the ticket category, the channel, the customer type, and the priority. These strata matter because a billing question and a safety concern have different escalation needs. Include tickets from every channel, including social media and phone notes. Use one category list for the whole sample.",
      "Section: Evidence standard and data dictionary",
      "For each ticket, capture the assistant, the category, the channel, the first response time, the escalation time, the reason, the receiving person, and the resolution time. Add whether the ticket was reopened and whether the customer replied after closure. Keep the message thread with the ticket. A second reviewer should be able to rebuild the sequence from the record.",
      "Also capture whether the assistant had a relevant knowledge article available and whether the article was used. A missing article is a different cause from an article that was hard to find. Record the article identifier when one exists. That field turns the escalation rate into a knowledge-management finding.",
      "If the business uses a shared inbox, record the message identifier rather than the customer's personal address. Redact payment details before sharing the sample with anyone who does not need them. The protocol should not create a second privacy risk while measuring service quality. Store the sample with the same access rules as the ticket system.",
      "Section: Sampling and collection",
      "Draw the sample from the ticket system rather than from a list of complaints. Record the export date, the filters, the row count, and the selection rule. Include tickets from every category and every day of the week so the result is not dominated by a busy Monday. If the population is ordered by date, take a fixed interval across the window.",
      "Collect the ticket as it existed at closure, not after a later edit. If a note was added after the customer replied, record the addition date and analyze the original response separately. Do not infer an escalation from a tag that was added later. Note the collection date separately from the ticket date.",
      "A useful additional measure is the share of escalations that were resolved by the receiving team within the promised time. An escalation that moves the ticket but does not solve it is not a good outcome. Record the resolution time by receiving team. That view separates an assistant routing problem from a backup-capacity problem.",
      "Section: Analysis and reporting",
      "Report the number of tickets, the escalation rate, the median time to escalation, and the median resolution time. Show the counts by category, channel, and priority. Present the share of escalated tickets that were reopened and the share where the customer made a second contact. Use the same denominator for every rate.",
      "Inspect the escalated tickets and group the reasons without naming the assistant. A cluster in one category may point to a missing article, while a cluster at a particular hour may point to a backup team that is unavailable. Compare the result with the knowledge base and the staffing schedule. Report tickets closed without a reply separately.",
      "A useful additional view is the share of tickets where the assistant asked a question that the customer had already answered. That pattern suggests a reading or template problem rather than a knowledge gap. Record the question and the earlier message. Use the finding to improve the intake form or the response checklist.",
      "Section: Limitations and sources of error",
      "The record cannot show whether an escalation was necessary or whether the assistant could have learned the answer with more time. It can show only that ownership moved and what happened next. A low escalation rate is not proof of good service if the assistant is guessing. The protocol also cannot capture help received in a call that left no ticket note.",
      "Ticket systems can merge conversations or reassign a ticket without a clear event. A transfer may appear as a status change rather than an escalation. Record those cases and their treatment instead of dropping them. If the same person handles the ticket before and after the transfer, note the independence limitation.",
      "A useful check is whether a new assistant can find the right article for the top ten ticket categories in under a minute. Ask them to try and record where they looked. That test measures the knowledge base, not the person. Fix the search terms before adding another escalation rule.",
      "Section: Review cadence and next action",
      "Give the result to the support lead and the owner and ask them to choose one observable change. The change might be a new article, a clearer escalation rule, a backup schedule, or a template that asks for the missing detail. Record the owner, the effective date, and the measure that will show whether the change worked. A change without a measure becomes an opinion at the next review. Avoid changing the rule and the staffing at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If the escalation rate fell but resolution time rose, the assistant may be holding tickets too long. If resolution time fell but reopened tickets rose, the fix may be too shallow. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "A useful additional view is the share of tickets that were escalated twice for the same issue. A second escalation may point to a receiving team that lacks the context or a rule that sends the ticket back without an owner. Record the second transfer and the reason. That view turns the escalation rate into a routing-quality measure.",
      "A useful additional view is the share of escalations that happened after the assistant had already sent a first reply. An escalation after a reply can mean the assistant recognized the limit, while an escalation before any reply can mean the ticket was misrouted. Record the sequence and the reason. That view separates a routing problem from a knowledge problem.",
      "Ask the backup team which escalations they could have avoided with a better article or template. Their answer is often more specific than a general review of the knowledge base. Record the top three and assign one owner. The next sample can show whether the change reduced the same category."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-08"
      },
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-08"
      },
      {
        "title": "Better Business Bureau, customer service guidance",
        "publisher": "Better Business Bureau",
        "url": "https://www.bbb.org/",
        "checked": "2026-11-08"
      },
      {
        "title": "NIST Cybersecurity Framework 2.0",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-08"
      }
    ]
  },
  {
    "slug": "how-long-does-month-end-close-take-with-a-virtual-assistant",
    "title": "How long does month-end close take with a virtual assistant?",
    "excerpt": "A protocol for measuring close duration by task, dependency, and rework instead of a single number at the end of the month.",
    "published": "2026-11-08",
    "imagePath": "/images/nov08/how-long-does-month-end-close-take-with-a-virtual-assistant.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how long the month-end close takes when a virtual assistant supports the accounting work. The unit is one close cycle for one business, measured from the first close task to the last approved adjustment. The study separates task time, waiting time, and rework. It does not judge the assistant's accounting skill or the accuracy of the financial statements.",
      "Set the scope to one business, one accounting system, and one close checklist. Record the tasks in scope, the approvers, and the cut-off for source documents. If the checklist or the system changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new approval step can look like a slower assistant when it is only a different control.",
      "Define the population as every close cycle completed during the observation period, including cycles that were closed late or reopened. The unit is the cycle, not the task, because tasks overlap and a delay in one can block several others. A cycle that is reopened after a material correction is a new unit linked to the original. Test the definition on two recent close records before collection.",
      "Section: Definitions that make the measure reproducible",
      "Define the close start as the first recorded task after the period cut-off, not the date someone first mentioned close. Define task complete as the point when the work and its evidence are attached to the checklist. Define waiting as time when a task is blocked by a missing document, a decision, or an approval. Define closed as the date the owner approves the final reconciliation. Each definition needs a positive and a boundary example.",
      "Do not count a task that was started but not finished as complete. Do not count a review comment as an approval unless the record shows the owner accepted the result. A task that is reopened keeps both the first completion and the final completion date. Record both so the rework is visible.",
      "Record the task category, the owner, the system, and the dependency for each task. These strata matter because a bank reconciliation and a payroll accrual have different inputs and approvers. Include tasks that were added mid-close, because an unplanned task is part of the cycle. Use one category list for every close.",
      "Section: Evidence standard and data dictionary",
      "For each task, capture the start time, the completion time, the waiting intervals, the owner, the dependency, and the evidence link. Add the number of review rounds and whether the task was reopened. Keep the checklist export and the supporting documents together. A second reviewer should be able to rebuild the critical path from the record.",
      "Also capture the date the source documents were available. A close that waits for a supplier statement is not the same as a close that waits for an internal approval. Record the source and the date. That field separates an external dependency from an internal one.",
      "If the business uses a shared inbox for documents, record when the document arrived rather than when it was filed. A document that sat unread for three days is an internal delay. The protocol should not attribute that wait to the supplier. Separate the arrival date and the filing date in the data dictionary.",
      "Section: Sampling and collection",
      "Draw the sample from the close checklist and the accounting system rather than from a list of difficult months. Record the export date, the filters, the row count, and the selection rule. Include every close cycle in the window so a single bad month does not dominate. If the sample is small, describe the cycles instead of computing a rate.",
      "Collect the checklist as it existed at close, not after a later cleanup. If a note was added later, record the addition date and analyze the original wait separately. Do not infer a completion from a journal entry that was posted without evidence. Note the collection date separately from the close date.",
      "A useful additional measure is the number of tasks that were not on the original checklist. An unplanned task extends the close and often reveals a missing template. Record the task, the reason, and the date it was added. That view helps the owner improve the checklist rather than asking the assistant to work faster.",
      "Section: Analysis and reporting",
      "Report the number of close cycles, the median duration, the median task time, the median waiting time, and the median rework time. Show the counts by task category and dependency. Present the share of cycles that missed the target date and the tasks on the critical path. Use the same denominator for every rate.",
      "Inspect the longest cycles and describe which dependency dominated without naming the employee. A wait for a supplier statement may point to a reminder process, while a wait for owner approval may point to a review calendar. Compare the result with the task list and the staffing. Report reopened cycles separately because they carry a different cost.",
      "A useful additional view is the time from the last task completion to owner approval. A close that is technically finished but waits days for sign-off still delays reporting. Show that interval beside the task time. The owner can then decide whether to schedule a review slot or delegate a subset of approvals.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the financial statements were accurate or whether the assistant made a good judgment on an accrual. It can show only the task sequence and the recorded waits. A fast close is not proof of quality, and a slow one is not proof of poor work. The protocol also cannot capture work done outside the checklist.",
      "Accounting systems can timestamp a posting at the end of the day or merge a correction into the original entry. A task may appear complete before the evidence was reviewed. Record those cases and their treatment instead of dropping them. If the same person prepares and approves a task, note the independence limitation and analyze that task separately.",
      "A useful check is whether a new assistant can follow the close checklist and name the owner for each task. Ask them to walk through the first five tasks and record where they hesitate. That test measures the checklist, not the person. Fix the unclear owner before adding another control.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the accounting lead and ask them to choose one observable change. The change might be a document reminder, a pre-close checklist, a named backup approver, or a smaller review batch. Record the owner, the effective date, and the measure that will show whether the change worked. A change without a measure becomes an opinion at the next review. Avoid changing the checklist and the software at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If task time fell but waiting time did not, the bottleneck may be a dependency rather than the assistant. If waiting time fell but rework rose, the faster path may be skipping evidence. Close the review when the owner accepts the finding and the next cycle is scheduled.",
      "A useful additional view is the share of close tasks that were ready before the period cut-off. A task prepared early is less likely to delay the cycle, while a task that starts after the cut-off adds pressure to the review. Record the preparation date and the owner. That view helps the team move work earlier without adding a new approval.",
      "A useful additional view is the number of tasks that were completed before the source document arrived. A task marked complete without evidence may be a placeholder, not a finished item. Record the evidence date beside the completion date. That view prevents a fast close from looking better than it is.",
      "Ask the owner which approval took the longest and why. The answer may point to a decision that could be delegated with a written rule. Record the decision and the amount band. A small delegation can shorten the close without removing oversight from the items that need it."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-08"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-08"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-08"
      },
      {
        "title": "Association of Certified Fraud Examiners, fraud resources",
        "publisher": "Association of Certified Fraud Examiners",
        "url": "https://www.acfe.com/fraud-resources",
        "checked": "2026-11-08"
      }
    ]
  },
  {
    "slug": "what-share-of-customer-records-contain-a-stale-contact-detail",
    "title": "What share of customer records contain a stale contact detail?",
    "excerpt": "A protocol for measuring stale emails, phone numbers, and addresses, with the source of the change and the customer impact.",
    "published": "2026-11-08",
    "imagePath": "/images/nov08/what-share-of-customer-records-contain-a-stale-contact-detail.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of customer records contain at least one stale contact detail. The unit is one customer record in the business's system of record, sampled at a defined date. The study measures stale email addresses, phone numbers, and postal addresses, the source of the last update, and whether a recent message failed. It does not judge the customer or the data-entry clerk.",
      "Set the scope to one business, one customer system, and one definition of active customer. Record the fields in scope, the systems that can update them, and the date of the sample. If the business merges two systems during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new sync can look like an improvement when it is only a different source.",
      "Define the population as every active customer record that has at least one contact field and has interacted with the business in the last twelve months. Exclude prospects and records with no contact detail, and state that exclusion. A record that is a duplicate of another record is a separate unit linked to the canonical record. Test the definition on two ordinary records before collection.",
      "Section: Definitions that make the measure reproducible",
      "Define a stale email as one that has hard-bounced or has not been confirmed in the last twelve months. Define a stale phone as one that the carrier reports as disconnected or that has failed two contact attempts. Define a stale address as one returned by the postal service or contradicted by a recent delivery. Each definition needs a positive and a boundary example.",
      "Do not count an unsubscribed email as stale. An unsubscribe is a preference, not a bad record. Do not count a phone that was not answered as disconnected. A failed contact attempt is not the same as a failed number. The definitions should separate a data-quality problem from a customer-choice problem.",
      "Record the customer type, the acquisition channel, the last interaction date, and the system that owns the record. These strata matter because a record created at a pop-up event and one created through a long-term contract have different update paths. Include records from every channel. Use one category list for the whole sample.",
      "Section: Evidence standard and data dictionary",
      "For each record, capture the customer identifier, the field, the current value, the last update date, the source of the update, and the evidence of staleness. Add whether a recent message failed and whether the customer corrected the detail. Keep the bounce or return record with the sample. A second reviewer should be able to repeat the classification.",
      "Also capture whether the record has a second contact field that still works. A stale email is less severe if a valid phone exists. Record the fallback channel and whether the customer has consented to it. That field turns the rate into a contactability measure.",
      "If the business uses a marketing system and a billing system, record which one is the system of record. A value can be current in one system and stale in the other. The protocol should not count the same customer twice without a link. A canonical identifier is required for every sample row.",
      "Section: Sampling and collection",
      "Draw the sample from the system of record rather than from a list of bounced messages. Record the export date, the filters, the row count, and the selection rule. Include records from every acquisition channel and every region so the result is not dominated by one campaign. If the population is ordered by customer id, take a fixed interval across the list.",
      "Collect the record as it existed at the sample date, not after a later cleanup. If a customer updated a detail after the sample, record the update and analyze the original state separately. Do not infer staleness from a missing field alone. Note the collection date separately from the sample date.",
      "A useful additional measure is the share of records updated in the last ninety days. A high update rate may indicate a healthy process or a recent migration. Record the source of the update and whether it was customer-initiated. That view separates a maintained record from a recently rewritten one.",
      "Section: Analysis and reporting",
      "Report the number of records, the share with at least one stale field, and the share by field type. Show the counts by customer type, channel, and system. Present the share of records with no working contact channel and the share with a recent failed message. Use the same denominator for every rate.",
      "Inspect the stale records and group the causes without naming the customer. A cluster from one acquisition channel may point to an intake form that does not validate the field. A cluster in one system may point to a sync that overwrites a newer value. Report duplicates separately because they distort both the rate and the contactability picture.",
      "A useful additional view is the time since the last successful contact. A record with a stale email but a recent phone conversation is still contactable. Show the last successful contact date beside the stale flag. That view helps the owner prioritize the records that actually affect service.",
      "Section: Limitations and sources of error",
      "The record cannot show whether a customer moved, changed a number, or simply stopped using an email. It can show only that a message failed or a detail was not confirmed. A high stale rate is not proof of poor data entry, because customers change details without telling the business. The protocol also cannot capture a customer who uses a different name or a shared family account.",
      "Bounce data can be delayed, and a soft bounce may be recorded as a hard bounce by mistake. A phone may be temporarily disconnected rather than permanently stale. Record those cases and their treatment instead of dropping them. If the business has no permission to contact a customer by a fallback channel, note the consent limitation.",
      "A useful check is whether a new assistant can update a contact detail and see the change in every system that uses it. Ask them to test one record and record where the change did not propagate. That test measures the integration, not the assistant. Fix the sync before asking for more careful entry.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the customer-operations lead and ask them to choose one observable change. The change might be a validation rule at intake, a quarterly confirmation message, a sync fix, or a fallback contact policy. Record the owner, the effective date, and the measure that will show whether the change worked. A change without a measure becomes an opinion at the next review. Avoid changing the form and the sync at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If the stale rate fell but failed messages did not, the records may be updated too late to help. If failed messages fell but the stale rate rose, the business may be suppressing bad records instead of fixing them. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "A useful additional view is the share of records with a working fallback channel. A stale email is a smaller problem when a valid phone number is available and the customer has agreed to be contacted there. Record the fallback and the consent status. That view helps the team prioritize the records that are truly unreachable.",
      "A useful additional view is the share of stale records that were updated by the customer rather than by staff. A customer-initiated update is stronger evidence than an internal guess. Record the source and the date. That view helps the owner decide whether to invest in a self-service update path.",
      "Ask the support team which stale record caused a real service failure in the last quarter. A concrete case is more persuasive than a percentage and often reveals a missing fallback channel. Record the case and the fix. Use it to set the priority for the next data-quality project."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "2026-11-08"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-08"
      },
      {
        "title": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checked": "2026-11-08"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-08"
      }
    ]
  }
];
