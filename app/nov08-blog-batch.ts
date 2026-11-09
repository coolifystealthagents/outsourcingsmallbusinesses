export const nov08BlogBatch = [
  {
    "slug": "write-a-daily-supplier-invoice-exception-queue-for-a-small-business-assistant",
    "title": "Write a daily supplier invoice exception queue for a small-business assistant",
    "excerpt": "An exception queue that separates a missing purchase order, a price mismatch, and a duplicate invoice before anything reaches the payment run.",
    "lane": "small-business accounts payable",
    "service": "bookkeeping",
    "publicationDate": "2026-11-08",
    "date": "2026-11-08",
    "imagePath": "/images/nov08/write-a-daily-supplier-invoice-exception-queue-for-a-small-business-assistant.webp",
    "sources": [
      [
        "U.S. Small Business Administration, manage your business",
        "https://www.sba.gov/business-guide/manage-your-business"
      ],
      [
        "U.S. Government Accountability Office, internal control standards",
        "https://www.gao.gov/greenbook"
      ],
      [
        "Association of Certified Fraud Examiners, fraud resources",
        "https://www.acfe.com/fraud-resources"
      ]
    ],
    "sections": [
      {
        "heading": "Start with the invoices that cannot move",
        "paragraphs": [
          "A daily exception queue should contain only the invoices that cannot move through the normal process, not every invoice the assistant touched. Define the normal path first: a matching purchase order, a received note, and a price within tolerance. An invoice that meets all three moves on without a queue entry. The exception queue is for the remainder, and its purpose is to make the reason for the stop visible.",
          "Write the queue entry with the supplier, the invoice number, the amount, the age, and the specific exception. A row that says needs review tells the owner nothing and invites a second review later. Use a short list of reasons such as no purchase order, price mismatch, quantity mismatch, duplicate, missing bank details, or unclear approval. The reason should point to the evidence that resolves it.",
          "Keep the queue in the same tool as the payment run so an invoice cannot be paid from one view while it waits in another. If the accounting system cannot hold the queue, use a shared sheet with a link back to the invoice. Do not let the queue live only in an inbox. An inbox hides the age of the item and makes it easy to miss."
        ]
      },
      {
        "heading": "Separate the exception types by owner",
        "paragraphs": [
          "A missing purchase order belongs to the person who bought the item, while a price mismatch may belong to the buyer or the supplier. Give each exception type a named resolver and a target response time. A queue that routes every item to the owner trains the assistant to stop thinking and the owner to become a bottleneck. The routing rule should be visible beside the queue.",
          "For a duplicate, the resolver checks whether the earlier invoice was paid and whether the new one is a credit or a reissue. For a bank-detail change, the resolver follows a callback rule and never accepts the new number from the invoice alone. The assistant can gather evidence but should not approve a change that moves money. Make that boundary explicit in the queue instructions."
        ]
      },
      {
        "heading": "Give the assistant a safe action for each row",
        "paragraphs": [
          "The assistant should always have a next action, even when the answer is wait. For a missing purchase order, the action is to request the order number from the buyer with a template that names the invoice. For a price mismatch, the action is to attach the quote and the order line. For a duplicate, the action is to link the prior payment. A row with no action becomes a silent parking lot.",
          "Set a rule for how many times the assistant may chase the same item before escalating. Two follow-ups on separate days is a common limit. Record the date of each attempt and the channel used. When the limit is reached, move the item to the owner with the evidence collected. The escalation should not restart the investigation."
        ]
      },
      {
        "heading": "Protect the payment run with a cut-off",
        "paragraphs": [
          "Publish a daily cut-off after which an unresolved exception waits for the next run. The cut-off should be early enough that the assistant can complete the queue and the owner can review it before payments are released. Do not let a late invoice create pressure to skip the check. The schedule is part of the control, not an inconvenience.",
          "Before each run, reconcile the number of exceptions opened, resolved, and carried forward. A queue that grows without explanation may point to a supplier sending bad data or a buyer who stopped providing orders. Show the count by reason so the pattern is visible. A single total hides the difference between a duplicate problem and a missing-order problem."
        ]
      },
      {
        "heading": "Keep evidence and access under control",
        "paragraphs": [
          "The assistant needs read access to invoices and purchase orders, but not the ability to change bank details or release a payment. Use a named account and record who granted each permission. Keep the evidence in the queue row rather than in a personal folder. A reviewer should be able to open the invoice, the order, and the receiving note from one place.",
          "Redact personal data when an invoice includes a home address or a personal phone number. Share only the fields the resolver needs. If a supplier sends a statement with other customers' data, do not forward it. Record the incident and ask the supplier for a clean copy. The queue should not become a channel for unnecessary personal data."
        ]
      },
      {
        "heading": "Review the queue weekly for root causes",
        "paragraphs": [
          "At the end of the week, group the exceptions by supplier and by reason. A supplier that repeatedly sends invoices without the order number may need a template or a reminder. A buyer who never raises orders may need a simpler request path. The weekly review should choose one fix and name the owner. Counting the same problem every week without a fix is not a control.",
          "Track the time each exception waits and the share resolved before the cut-off. Compare the result with the previous week and with the volume of invoices processed. If the queue is small but the wait is long, the problem is routing. If the queue is large but the wait is short, the normal process may be too strict. Adjust one variable and measure again.",
          "Share the weekly summary with the buyer and the owner in one place. A short table by reason is easier to act on than a list of individual invoices. Ask each resolver which item they could have prevented and record the answer. The next week should test one prevention step, not a broader policy rewrite."
        ]
      }
    ],
    "related": [
      "write-a-reimbursement-request-path-a-small-business-assistant-can-follow",
      "set-a-daily-opening-check-for-an-assistant-run-support-desk"
    ]
  },
  {
    "slug": "set-a-customer-refund-approval-ladder-for-an-assistant-run-shop",
    "title": "Set a customer refund approval ladder for an assistant-run shop",
    "excerpt": "A refund ladder that gives a small-business assistant clear limits, a fast path for small amounts, and a documented handoff for exceptions.",
    "lane": "small-business customer support",
    "service": "customer-support",
    "publicationDate": "2026-11-08",
    "date": "2026-11-08",
    "imagePath": "/images/nov08/set-a-customer-refund-approval-ladder-for-an-assistant-run-shop.webp",
    "sources": [
      [
        "Federal Trade Commission, consumer protection guidance",
        "https://www.ftc.gov/business-guidance"
      ],
      [
        "U.S. Small Business Administration, manage your business",
        "https://www.sba.gov/business-guide/manage-your-business"
      ],
      [
        "Better Business Bureau, customer service guidance",
        "https://www.bbb.org/"
      ]
    ],
    "sections": [
      {
        "heading": "Write the ladder in amounts and reasons",
        "paragraphs": [
          "A refund approval ladder should state the amount the assistant may approve alone, the amount that needs a supervisor, and the amount that needs the owner. Use currency values rather than vague words such as small or large. Add the reasons that always escalate regardless of amount, such as a chargeback threat, a safety issue, or a request to refund to a different payment method. The ladder is a decision table, not a paragraph of guidance.",
          "Keep the first tier genuinely useful. If the assistant can only approve a trivial amount, every real refund becomes a queue item and the owner learns nothing about the volume. Choose a threshold that covers the common case and still limits the loss from a single mistake. Review the threshold after a month of real decisions.",
          "Write the ladder where the assistant works, not in a policy folder that nobody opens. Link it from the refund screen and the response template. Test it with three example cases during onboarding. An assistant who has to ask which tier applies has not been given a usable ladder."
        ]
      },
      {
        "heading": "Require the evidence before the decision",
        "paragraphs": [
          "Every refund needs an order reference, the customer's reason, and the evidence that supports it. For a damaged item, ask for a photo that shows the product and the packaging. For a missing delivery, check the carrier record before promising a refund. For a duplicate charge, compare the payment records. The evidence standard should be the same at every tier.",
          "Record the evidence in the ticket, not in a private message. If the customer sends a photo by chat, attach it to the order record. A later reviewer should be able to see why the refund was approved without asking the assistant. When the evidence is incomplete, the correct action is to request it, not to guess.",
          "Do not accept a screenshot of a bank statement as proof of a duplicate charge without checking the payment processor. A customer can be mistaken about which merchant charged them. The assistant should compare the last four digits, the date, and the amount before acting. That check protects both the customer and the business."
        ]
      },
      {
        "heading": "Give the assistant a script for the hard moments",
        "paragraphs": [
          "The assistant needs wording for a refusal, a partial refund, and a request that must wait for the owner. Write the scripts in plain language and keep them short. A refusal should explain the policy, offer the next step, and avoid blaming the customer. A partial refund should state the amount and the reason. A wait should give a realistic time and a way to follow up.",
          "Practice the scripts with a role-play during the first week. Use a case where the customer is upset and a case where the request is clearly outside the policy. The assistant should be able to stay calm and consistent. Record the practice in the onboarding notes so the next person can repeat it.",
          "Do not let the assistant promise a refund that has not been approved. A promise creates a expectation the business may have to honour even when the decision changes. Use language such as I can submit this for approval today. The customer should know what happens next and when."
        ]
      },
      {
        "heading": "Make the handoff to the owner specific",
        "paragraphs": [
          "When a refund moves to the owner, the handoff should include the amount, the reason, the evidence, the customer's history, and the recommendation. A handoff that says customer wants a refund forces the owner to repeat the work. State the decision that is needed and the deadline. If the customer is waiting, say how long they have been waiting.",
          "Give the owner a way to approve or reject without opening five systems. A short summary with links is usually enough. Record the decision and the reason in the ticket. If the owner overrides the ladder, note the exception so the pattern can be reviewed. Repeated overrides may mean the ladder is too strict or the assistant needs more training."
        ]
      },
      {
        "heading": "Watch for abuse without treating customers as suspects",
        "paragraphs": [
          "Track refunds by customer, by order, and by reason. A customer with repeated refunds may need a conversation, while a product with repeated damage claims may need a packaging fix. The pattern is more useful than a single case. Do not set an automatic block that punishes a legitimate customer. Use the data to ask a question, not to accuse.",
          "Keep the refund record separate from the marketing profile. A refund history should not follow a customer into unrelated communication. Limit access to the people who need it. If the business uses a shared inbox, redact payment details before forwarding the case. Privacy discipline is part of customer service."
        ]
      },
      {
        "heading": "Review the ladder monthly",
        "paragraphs": [
          "Each month, review the number of refunds by tier, the average decision time, and the share that the owner reversed. Ask the assistant which cases were hardest and which script helped. Look for a tier that is used far more than expected, because that may signal a product or fulfilment problem rather than a policy problem. Change one threshold or one script at a time.",
          "Update the ladder with the effective date and tell the customer-support team. Keep the previous version for refunds that started under it. If the business adds a new payment method, check whether the ladder still applies. A refund policy that is never reviewed tends to drift into exceptions that nobody can explain."
        ]
      }
    ],
    "related": [
      "write-a-reimbursement-request-path-a-small-business-assistant-can-follow",
      "build-a-damaged-order-photo-checklist-for-a-support-assistant"
    ]
  },
  {
    "slug": "write-a-weekly-inventory-reorder-check-for-a-virtual-assistant",
    "title": "Write a weekly inventory reorder check for a virtual assistant",
    "excerpt": "A weekly reorder check that uses sales velocity, supplier lead time, and a named approval step instead of a gut feeling about empty shelves.",
    "lane": "small-business inventory operations",
    "service": "operations-support",
    "publicationDate": "2026-11-08",
    "date": "2026-11-08",
    "imagePath": "/images/nov08/write-a-weekly-inventory-reorder-check-for-a-virtual-assistant.webp",
    "sources": [
      [
        "U.S. Small Business Administration, manage your business",
        "https://www.sba.gov/business-guide/manage-your-business"
      ],
      [
        "U.S. Government Accountability Office, internal control standards",
        "https://www.gao.gov/greenbook"
      ],
      [
        "Council of Supply Chain Management Professionals, resources",
        "https://cscmp.org/"
      ]
    ],
    "sections": [
      {
        "heading": "Define the reorder point with evidence",
        "paragraphs": [
          "A reorder point is the stock level that triggers a new order, and it should come from sales velocity and supplier lead time rather than a round number. Calculate the average weekly sales for each item and the number of weeks the supplier needs to deliver. Add a safety margin for a late shipment. Write the formula in the checklist so the assistant can apply it the same way every week.",
          "Separate fast-moving items from slow-moving ones. A product that sells ten units a week needs a different review rhythm from one that sells ten a month. Do not use one reorder point for the whole catalog. Group the items by velocity and set a review cadence for each group. The assistant should know which list to work on each day.",
          "Record the source of the sales figure and the date it was pulled. A reorder based on last quarter's sales may be wrong after a promotion or a seasonal shift. If the business has a forecast, use it as a second input rather than a replacement for actual sales. The check should show both numbers when they disagree."
        ]
      },
      {
        "heading": "Check the stock count before the order",
        "paragraphs": [
          "The system count and the physical count can differ because of damage, theft, or a receiving error. Ask the assistant to confirm the count for any item that is about to trigger an order. A cycle count on the affected items is enough; a full warehouse count every week is not realistic. Record the difference and the reason when one is found.",
          "If the business sells on more than one channel, confirm that the stock is allocated correctly. An item may show as available in the store but be reserved for an online order. Check the reserved quantity before reordering. A duplicate order because of a channel error ties up cash and shelf space.",
          "Put the count date beside the reorder decision. A count from three weeks ago is not evidence for a decision this week. If the assistant cannot verify the count, mark the item as unverified and ask the owner before ordering. Do not let the system number become the only source of truth."
        ]
      },
      {
        "heading": "Use a supplier record with lead times",
        "paragraphs": [
          "Keep one supplier record per item with the contact, the minimum order quantity, the lead time, and the price. Update the record when a supplier changes a term. A reorder check that relies on someone's memory of the lead time will fail when that person is on leave. The assistant should be able to order from the record without a call.",
          "Record the last three delivery dates and whether they arrived on time. A supplier that is consistently late needs a larger safety margin or a second source. Do not hide a late delivery in a general note. The pattern is the evidence for changing the reorder point.",
          "Check whether the supplier requires a minimum order that is larger than the weekly need. If so, the reorder decision must consider storage and cash, not only stock. Show the minimum quantity beside the suggested order. The assistant can then flag a mismatch instead of placing an order the business cannot absorb."
        ]
      },
      {
        "heading": "Set an approval rule for the spend",
        "paragraphs": [
          "The assistant may prepare a draft order, but the owner should approve spend above a stated amount. Write the amount and the approval channel in the checklist. For repeat orders under the limit, the assistant can place the order and record it. For a new supplier or a price change, require approval regardless of amount. The rule should be simple enough to apply without a meeting.",
          "Record the approval in the order record with the name and the time. A verbal approval that is not written down is hard to audit. If the owner is unavailable, name a backup approver. Do not let the reorder wait past the safety margin because one person is on leave.",
          "Separate the approval of the order from the approval of the payment. The assistant may be allowed to place an order but not to release a payment. Keep those permissions distinct in the tool. A single permission for both creates a risk that the checklist was meant to reduce."
        ]
      },
      {
        "heading": "Handle a stockout without panic buying",
        "paragraphs": [
          "When an item is already out of stock, the checklist should name the customer-facing action and the purchasing action. Tell the sales channel what to say, and give the owner a short list of options: expedite, substitute, or wait. Do not let the assistant promise a delivery date that the supplier has not confirmed. Record the customer communication in the order record.",
          "Review the stockout after it is resolved. Was the reorder point too low, was the count wrong, or did a promotion create demand that the forecast missed? Choose one cause and fix it. A stockout that is followed by the same stockout next month is a process problem, not bad luck.",
          "Avoid a large emergency order that solves this week and creates excess stock next month. Compare the cost of expediting with the cost of carrying the extra units. If the item is seasonal, a smaller order plus a substitute may be better. Write the decision and the reason so the next review can learn from it."
        ]
      },
      {
        "heading": "Review the check every month",
        "paragraphs": [
          "At the end of the month, compare the reorder decisions with the actual stock and sales. Count the stockouts, the overstock items, and the emergency orders. Ask the assistant which item was hardest to judge and why. Use the answers to change one formula or one supplier record. A checklist that is never revised becomes a ritual.",
          "Share the result with the owner in a short summary. Include the cash tied up in stock, the items below the reorder point, and the items above the maximum. A simple table is enough. The goal is a reorder rhythm the business can trust, not a perfect forecast."
        ]
      }
    ],
    "related": [
      "write-a-first-week-task-list-for-a-newly-assigned-virtual-assistant",
      "set-a-daily-opening-check-for-an-assistant-run-support-desk"
    ]
  },
  {
    "slug": "set-a-document-retention-sweep-for-a-small-business-assistant",
    "title": "Set a document retention sweep for a small-business assistant",
    "excerpt": "A retention sweep that names what to keep, what to delete, who approves the deletion, and how to prove the record was handled.",
    "lane": "small-business records management",
    "service": "operations-support",
    "publicationDate": "2026-11-08",
    "date": "2026-11-08",
    "imagePath": "/images/nov08/set-a-document-retention-sweep-for-a-small-business-assistant.webp",
    "sources": [
      [
        "U.S. National Archives, records management",
        "https://www.archives.gov/records-mgmt"
      ],
      [
        "Federal Trade Commission, data security guidance",
        "https://www.ftc.gov/business-guidance/privacy-security"
      ],
      [
        "U.S. Small Business Administration, manage your business",
        "https://www.sba.gov/business-guide/manage-your-business"
      ]
    ],
    "sections": [
      {
        "heading": "Start from the retention schedule",
        "paragraphs": [
          "A document retention sweep needs a written schedule that names each record type and how long it must be kept. Do not ask the assistant to decide from memory. Include invoices, payroll records, customer contracts, tax filings, and correspondence that supports a legal obligation. For each type, state the trigger that starts the retention period, such as the end of the tax year or the end of a contract.",
          "Separate a legal minimum from a business preference. A record may be kept longer for customer service or dispute history, but the schedule should say why. A schedule that keeps everything forever is not a retention policy, and it increases the cost and risk of a breach. Review the schedule with the business's accountant or legal adviser before the first sweep.",
          "Write the schedule in the same language the team uses. If the staff call a document a packing slip, the schedule should use that term and explain the record type. Link each row to the folder where the records live. A schedule that cannot be mapped to a real location will not be used."
        ]
      },
      {
        "heading": "Inventory before deleting anything",
        "paragraphs": [
          "The first sweep should be an inventory, not a deletion. List the folders, the record types, the date range, and the estimated volume. Identify duplicates, personal data, and records that are past the retention date. Do not open every file; sample each folder and record the pattern. The inventory gives the owner the evidence to approve a deletion plan.",
          "Flag records that are under a legal hold, an open dispute, or a pending audit. Those records must not be deleted even if the schedule says they are old. Keep the hold list beside the inventory and check it before every sweep. A deletion that destroys evidence is far more costly than keeping a file too long.",
          "Record the system of origin for each folder. A copy in a shared drive may not be the official record, and deleting the copy may not satisfy the retention rule. Identify the authoritative system before deciding what can go. The assistant should not guess which copy matters."
        ]
      },
      {
        "heading": "Give the assistant a reviewable deletion list",
        "paragraphs": [
          "Prepare a deletion list with the record type, the date range, the location, the count, and the schedule rule that allows deletion. The owner should be able to approve or reject the list without opening every file. Keep the list with the sweep record. A deletion that cannot be traced to a rule is a risk the business cannot defend.",
          "Delete in small batches so a mistake can be stopped. Start with the least sensitive records and verify the result before moving on. Do not empty the recycle bin or the backup in the same step. The first sweep should prove the process, not maximize the volume removed.",
          "Record who deleted the files, when, and with what approval. If the tool keeps an audit log, export it with the sweep record. If it does not, write a short manual log. The evidence matters if a customer or a regulator later asks why a record is missing."
        ]
      },
      {
        "heading": "Protect personal and financial data",
        "paragraphs": [
          "The assistant should handle only the records the task requires and should not copy personal data into a personal drive or a chat message. Use the approved storage location and the approved sharing method. If a document contains a customer's identity document, redact it before sharing with anyone who does not need it. The retention sweep is a good time to remove unnecessary copies.",
          "Check the access list for the folders being reviewed. Remove access for people who have left or changed roles. Do not leave a shared link open after the sweep. A retention policy that deletes the official record but leaves an open copy elsewhere has not reduced the risk.",
          "If a deletion includes financial records, confirm the accounting system has the official copy before removing the working file. Do not delete a record that the accountant still needs for a tax filing. Ask the accountant to confirm the retention period in writing. Keep that confirmation with the schedule."
        ]
      },
      {
        "heading": "Handle the exceptions with a named owner",
        "paragraphs": [
          "Some records will not fit the schedule, such as a contract with an unusual clause or a file with unclear ownership. Put those in an exception list with the reason and the owner. Do not let the assistant make a legal judgment. The owner should decide whether to keep, delete, or seek advice.",
          "Review the exception list at the next sweep. If the same type appears repeatedly, update the schedule or the folder structure. An exception that is never resolved becomes a permanent collection of mystery files. A short note on the decision is enough to close it."
        ]
      },
      {
        "heading": "Close the sweep with a short report",
        "paragraphs": [
          "The report should state the folders reviewed, the records deleted, the records kept, the exceptions, and the approver. Keep it with the retention schedule. The report is the evidence that the business followed its own process. It should be short enough that the owner will actually read it.",
          "Schedule the next sweep before closing this one. A quarterly or annual cadence is easier to maintain than an ad hoc cleanup. Put the date on the calendar and assign the owner. A retention program that depends on someone remembering is not a program.",
          "Use the report to improve the folder structure. If the assistant had to open five places to find one record type, the structure is costing time. Fix one folder or one naming rule and check the effect at the next sweep. Small structural changes are more durable than a large annual cleanup."
        ]
      }
    ],
    "related": [
      "write-a-knowledge-base-update-note-when-a-policy-changes",
      "write-a-reimbursement-request-path-a-small-business-assistant-can-follow"
    ]
  },
  {
    "slug": "create-a-bank-reconciliation-handoff-for-a-virtual-bookkeeper",
    "title": "Create a bank reconciliation handoff for a virtual bookkeeper",
    "excerpt": "A reconciliation handoff that names the accounts, the cut-off, the unmatched items, and the evidence the owner must review before closing the month.",
    "lane": "small-business bookkeeping",
    "service": "bookkeeping",
    "publicationDate": "2026-11-08",
    "date": "2026-11-08",
    "imagePath": "/images/nov08/create-a-bank-reconciliation-handoff-for-a-virtual-bookkeeper.webp",
    "sources": [
      [
        "U.S. Small Business Administration, manage your business",
        "https://www.sba.gov/business-guide/manage-your-business"
      ],
      [
        "IRS, recordkeeping for small businesses",
        "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      ],
      [
        "U.S. Government Accountability Office, internal control standards",
        "https://www.gao.gov/greenbook"
      ]
    ],
    "sections": [
      {
        "heading": "Agree on the accounts and the period",
        "paragraphs": [
          "A reconciliation handoff starts with a list of the bank and credit-card accounts in scope and the exact period being closed. Include the statement date and the closing balance for each account. Do not assume the assistant can see every account; confirm the access before the period starts. An account that is missing from the list creates a false sense of completeness.",
          "Record the cut-off rule for transactions that clear after the statement date. A payment sent on the last day may appear on the next statement. The handoff should show those items as outstanding rather than forcing them into the current period. Write the rule so the next bookkeeper applies it the same way.",
          "Separate the operating account from any savings, loan, or merchant account. Each has a different reconciliation path and a different owner. A combined summary hides an unreconciled loan payment. Keep one line per account in the handoff."
        ]
      },
      {
        "heading": "Show the matching evidence",
        "paragraphs": [
          "For each reconciled transaction, the handoff should show the bank line, the ledger entry, and the supporting document. A match that exists only as a tick mark is not evidence. Link the invoice, the receipt, or the payroll record. If a document is missing, mark it as missing rather than matching on the amount alone.",
          "Use a consistent rule for partial payments and splits. A single bank deposit may cover several invoices, and a single payment may cover several bills. Show the allocation and the remaining balance. A reconciliation that hides a partial match will produce a wrong customer or supplier balance.",
          "Record the date the match was made and the person who made it. When a later reviewer disagrees, the history shows what changed. Do not overwrite the original match without a note. The audit trail is part of the reconciliation, not an optional extra."
        ]
      },
      {
        "heading": "List the unmatched items with an owner",
        "paragraphs": [
          "Every unmatched item should have an amount, a date, a reason, and an owner. A bank fee may need a ledger entry, while an unknown deposit may need a customer inquiry. Do not let the assistant post a plug entry to force the balance. A plug hides the problem and makes the next month harder.",
          "Set a target date for each unmatched item and a rule for escalating an old one. An item that remains unmatched for two periods should go to the owner with the evidence collected. The handoff should show the age of the item, not only its amount. That age is the first thing the owner should see.",
          "Separate a timing difference from an error. A cheque that has not cleared is a timing difference, while a duplicate ledger entry is an error. The treatment is different, and the handoff should say which one applies. A reviewer should not have to infer the category."
        ]
      },
      {
        "heading": "Reconcile the balance, not just the transactions",
        "paragraphs": [
          "The handoff should show the bank balance, the ledger balance, and the difference after all matched and outstanding items are considered. A zero difference is the goal, but a zero difference produced by a plug is not a reconciliation. Show the calculation so the owner can see how the number was reached. A reader should be able to repeat the arithmetic from the page.",
          "Check the beginning balance against the prior month's closing balance. A difference at the start means the prior reconciliation was wrong or the account changed. Resolve that before working on the current month. A clean start is cheaper than a correction at the end.",
          "Include the uncleared items from the prior month and whether they cleared in this period. An old outstanding cheque may need to be reissued or written back. The handoff should name the action and the owner, not just carry the item forward again. A carried item without a next step is a hidden loss."
        ]
      },
      {
        "heading": "Give the owner a short review pack",
        "paragraphs": [
          "The owner needs a summary, not the entire ledger. Provide the account list, the closing balances, the unmatched items, the proposed adjustments, and the questions that need a decision. Keep the detail behind links. A review pack that takes an hour will be skipped, and the reconciliation will close without real oversight.",
          "Separate the adjustments that are routine from the ones that need approval. A bank fee can be posted under a written rule, while a write-off of an old receivable needs the owner. State the amount and the reason for each proposed adjustment. The owner should be able to approve or reject each one.",
          "Record the owner's decision and the date. If the owner asks for a change, update the ledger and the handoff together. Do not leave the review pack showing a number that no longer matches the books. A stale pack invites a second approval of the wrong figure."
        ]
      },
      {
        "heading": "Close the period and hand over the next one",
        "paragraphs": [
          "When the reconciliation is approved, lock the period if the accounting system allows it. Export the reconciliation report and the supporting evidence into the month-end folder. Give the next bookkeeper the open items and the access they need. A handoff that ends with a verbal all done is not a handoff.",
          "Review the time spent and the number of adjustments. A recurring adjustment may point to a missing rule or a bank feed problem. Choose one fix for the next month and record it. The goal is a reconciliation that gets easier because the process improves, not because the team learns to tolerate a plug.",
          "Keep the close folder for the next bookkeeper. Include the reconciliation report, the open items, the access notes, and the questions the owner answered. A new person should be able to open the folder and continue without a call. Test that handoff once before the next close begins."
        ]
      }
    ],
    "related": [
      "write-a-reimbursement-request-path-a-small-business-assistant-can-follow",
      "write-a-first-week-task-list-for-a-newly-assigned-virtual-assistant"
    ]
  }
];
