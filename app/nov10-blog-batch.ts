export const nov10BlogBatch = [
  {
    "slug": "set-a-weekly-payroll-hours-exception-review-for-a-small-business-assistant",
    "title": "Set a weekly payroll hours exception review for a small-business assistant",
    "excerpt": "A weekly payroll hours review that lets a small-business assistant catch missing approvals and disputed time before the pay run closes.",
    "lane": "small-business payroll",
    "service": "bookkeeping",
    "sources": [
      [
        "U.S. Small Business Administration, manage your business",
        "https://www.sba.gov/business-guide/manage-your-business"
      ],
      [
        "U.S. Department of Labor, Fair Labor Standards Act",
        "https://www.dol.gov/agencies/whd/flsa"
      ],
      [
        "U.S. Government Accountability Office, internal control standards",
        "https://www.gao.gov/greenbook"
      ],
      [
        "IRS, recordkeeping for small businesses",
        "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      ]
    ],
    "sections": [
      {
        "heading": "Define what counts as an hours exception",
        "paragraphs": [
          "An hours exception is any time record that cannot be paid from the evidence on hand without someone making a judgment. That includes a missing manager approval, a shift with no clock-out, an overtime line that was not scheduled, and a pay code that does not match the work performed. Write the list of exception types before the first review so the assistant applies the same rule every week. A definition that changes with each pay period turns the review into a debate about individual employees.",
          "The exception list should be short enough to remember and specific enough to test. Name the field that must be present, the person who must approve it, and the date by which it has to be resolved. Do not include every late edit, because a busy week will bury the review in noise. Focus on items that change pay, affect a legal record, or indicate a scheduling problem. Everything else belongs in a separate cleanup queue."
        ]
      },
      {
        "heading": "Pull the week from the timekeeping source",
        "paragraphs": [
          "Export the hours from the timekeeping system at a fixed time and keep the export timestamp beside the file. The review should start from the source record, not from a spreadsheet that someone has already cleaned. Compare the export with the previous week to catch a missing location, a new pay code, or a group that stopped reporting. A stable export routine makes the same question answerable from one week to the next.",
          "Check that every active employee appears in the export and that no terminated employee still has hours. A missing employee can hide a schedule error, while a departed employee can signal a delayed termination. Record the count of employees and the total hours before reviewing individual exceptions. Those two totals give the owner a quick sanity check that the assistant did not review only part of the file."
        ]
      },
      {
        "heading": "Separate missing evidence from disputed hours",
        "paragraphs": [
          "Missing evidence is a record problem: the shift exists but the approval or the clock-out does not. A dispute is a disagreement about what happened, and it needs a person rather than a form. Keep the two categories apart because they have different owners and different clocks. An assistant can chase a missing approval, but only a manager or the owner should settle a dispute.",
          "For a missing approval, send one request that names the shift, the date, and the approver who needs to respond. Set a deadline that leaves time for the pay run and record the request in the case. For a dispute, write down both accounts and the evidence each side can produce. Do not average the difference or quietly change the hours to make the file balance. A disputed line that is paid without a decision will return in the next cycle."
        ]
      },
      {
        "heading": "Route corrections to the right approver",
        "paragraphs": [
          "Map each correction type to a named approver before the week begins. A schedule change usually belongs to the shift manager, a pay-rate question to the owner or bookkeeper, and a legal or classification question to a qualified adviser. The assistant can prepare the correction but should not approve a change to someone's pay. Write the mapping beside the review so the assistant does not guess under pressure.",
          "When an approver is unavailable, name a backup and a cutoff time. A correction that waits for one person who is on leave can miss the pay run even though the evidence was ready. Record the handoff date and the person who accepted it. If no backup exists, the owner should decide whether to hold the line or pay it provisionally, and that decision belongs in the record."
        ]
      },
      {
        "heading": "Close the review with a short record",
        "paragraphs": [
          "End the review with the total exception count, the amount of pay affected, the items resolved, and the items still open. Name the owner of each open item and the date it must close. A summary that lists only resolved items hides the risk that remains. Keep the record with the export and the approval messages so a later reviewer can rebuild the week.",
          "Review the pattern once a month and look for the same exception repeating in the same team or on the same shift. A repeated missing approval may mean the approval step is unclear, while repeated overtime may mean the schedule is wrong. Choose one process change and test it for a month. The goal is fewer exceptions next week, not a longer report this week."
        ]
      }
    ],
    "takeaways": [
      "Define the exception types and the evidence each one needs before the review starts.",
      "Keep missing approvals and disputed hours in separate queues with different owners.",
      "Let the assistant prepare corrections, but keep pay changes with a named approver.",
      "Close each week with the open items, the pay at risk, and the next review date."
    ],
    "publicationDate": "2026-11-10",
    "date": "2026-11-10",
    "imagePath": "/images/nov10/set-a-weekly-payroll-hours-exception-review-for-a-small-business-assistant.webp",
    "related": [
      "build-a-customer-complaint-escalation-log-for-an-assistant-run-shop",
      "write-a-supplier-statement-reconciliation-routine-for-a-virtual-bookkeeper"
    ]
  },
  {
    "slug": "build-a-customer-complaint-escalation-log-for-an-assistant-run-shop",
    "title": "Build a customer complaint escalation log for an assistant-run shop",
    "excerpt": "A complaint log that gives an assistant-run shop one place to record the customer impact, the evidence, and the owner decision before a small issue grows.",
    "lane": "small-business customer care",
    "service": "operations-support",
    "sources": [
      [
        "U.S. Small Business Administration, manage your business",
        "https://www.sba.gov/business-guide/manage-your-business"
      ],
      [
        "Federal Trade Commission, data security guidance",
        "https://www.ftc.gov/business-guidance/privacy-security"
      ],
      [
        "NIST Cybersecurity Framework",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "U.S. Government Accountability Office, internal control standards",
        "https://www.gao.gov/greenbook"
      ]
    ],
    "sections": [
      {
        "heading": "Start the log at the first complaint",
        "paragraphs": [
          "The log should open when a customer first says they are unhappy, not when the case becomes a refund request. Record the channel, the date, the customer, the order or service, and the sentence that describes the problem. Use the customer's own words in a short quote so the record does not drift into the assistant's interpretation. A case that starts late loses the early evidence that often explains what went wrong.",
          "Give every complaint a case number and one owner at a time. The owner can change as the case moves, but the log should show both the current owner and the previous one. Record the next action and the date it is due, even when the next action is simply to wait for the customer. A complaint without a next action is a case that has been filed rather than managed."
        ]
      },
      {
        "heading": "Record the customer impact and the evidence",
        "paragraphs": [
          "Describe the impact in concrete terms: a missed delivery, a double charge, a wrong item, or a delay that changed the customer's plan. Record what the customer asked for and what the business has promised so far. Keep the order record, the messages, and any photos together with the case. The evidence should let a second person understand the complaint without calling the customer again.",
          "Separate facts from assumptions in the log. A fact is something a system or a document shows, while an assumption is what the team believes probably happened. Label the assumption and name the check that would confirm it. Do not let a plausible explanation close a case before the evidence arrives. A clear fact pattern is also the best protection for the assistant if the customer later disputes the response."
        ]
      },
      {
        "heading": "Set escalation levels before the day gets busy",
        "paragraphs": [
          "Define what makes a complaint urgent: a safety issue, a threatened chargeback, a public review, a vulnerable customer, or a repeated failure for the same customer. Write those triggers into the log so the assistant does not have to judge urgency from the tone of a message. An urgent case should reach the owner within a stated time, not at the end of the queue. Record the time the escalation was sent and the time it was acknowledged.",
          "Use a small number of levels so the team can remember them. A level one case is handled inside the normal queue, a level two case needs an owner decision, and a level three case needs the owner now. Do not create a level for every possible situation. The level should determine who acts and how fast, not how strongly the team feels about the complaint."
        ]
      },
      {
        "heading": "Keep refunds and remedies inside the approval line",
        "paragraphs": [
          "The assistant can gather the evidence and draft a remedy, but a refund, a replacement, or a credit should follow the business's approval rule. Write the dollar limit and the reason codes in the log so the assistant knows when to stop. For a remedy above the limit, prepare the case and ask the owner for a decision. Do not let a sympathetic story become a reason to skip the rule.",
          "Record the remedy offered, the amount, the approver, and the date the customer was told. If the remedy changes, keep the earlier version rather than overwriting it. A changed remedy is normal, but an erased one makes the business look inconsistent. The log should show what the customer was promised and who authorized it at each step."
        ]
      },
      {
        "heading": "Review the log for repeat causes",
        "paragraphs": [
          "At the end of each month, group the complaints by product, channel, and cause. Look for one cause that produces several cases rather than treating every complaint as a separate story. A repeated packing problem or a confusing return policy is cheaper to fix than to keep answering. Ask the assistant which case took the most messages and why.",
          "Choose one change, assign an owner, and set a date to check whether the same complaint returns. Keep the change small enough to test within a month. Share the finding with the team without naming customers. The log is working when the same case stops coming back, not when the file looks complete."
        ]
      }
    ],
    "takeaways": [
      "Open the log when the customer first complains, not when the case becomes a refund.",
      "Record the impact, the evidence, and the next action with one named owner.",
      "Set escalation triggers and response times before the queue gets busy.",
      "Keep refunds and remedies inside the written approval limit."
    ],
    "publicationDate": "2026-11-10",
    "date": "2026-11-10",
    "imagePath": "/images/nov10/build-a-customer-complaint-escalation-log-for-an-assistant-run-shop.webp",
    "related": [
      "set-a-weekly-payroll-hours-exception-review-for-a-small-business-assistant",
      "set-a-new-client-document-collection-tracker-for-a-small-business-assistant"
    ]
  },
  {
    "slug": "write-a-supplier-statement-reconciliation-routine-for-a-virtual-bookkeeper",
    "title": "Write a supplier statement reconciliation routine for a virtual bookkeeper",
    "excerpt": "A supplier statement routine that matches invoices line by line, keeps credits visible, and closes the month with a signed variance note.",
    "lane": "small-business accounts payable",
    "service": "bookkeeping",
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
      ],
      [
        "IRS, recordkeeping for small businesses",
        "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      ]
    ],
    "sections": [
      {
        "heading": "Collect the statement and the ledger extract together",
        "paragraphs": [
          "Start by collecting the supplier statement and the accounts payable ledger extract for the same period. Record the statement date, the ledger cut-off, and the currency before comparing anything. A statement that ends on a different day than the ledger will always show a timing difference that is not an error. Keep both files together so a later reviewer can repeat the comparison.",
          "Check that the statement belongs to the right supplier entity and the right bank account before matching. A statement from a parent company may include invoices that belong to a subsidiary, and a changed bank account may signal a fraud attempt. Confirm the supplier name, the remit-to address, and the account reference against the master record. Any mismatch is a reason to pause, not a detail to fix later."
        ]
      },
      {
        "heading": "Match at the invoice level, not the total",
        "paragraphs": [
          "A matching total can hide a missing invoice and a duplicate payment at the same time. Match each statement line to an invoice, a credit, or a payment in the ledger. Record the invoice number, the date, the amount, and the match status. When a line cannot be matched, leave it unmatched rather than assigning it to the nearest amount. The detail is what makes the reconciliation useful.",
          "Use the same key in both systems, and write down what the key is. If the supplier uses a different invoice number, record both numbers on the line. A key that changes between months makes the next reconciliation slower and the history harder to follow. The bookkeeper should be able to explain every matched pair without opening the supplier's portal."
        ]
      },
      {
        "heading": "Classify differences before chasing the supplier",
        "paragraphs": [
          "Group the differences into timing, missing invoice, duplicate, price or quantity variance, credit not applied, and payment not allocated. Each category has a different next step and a different owner. A timing difference may need only a note, while a missing invoice needs a request to the supplier. Do not send a general query that asks the supplier to explain the whole balance.",
          "For a price variance, compare the invoice with the purchase order and the receiving record before calling the supplier. The error may be in the order, the delivery, or the invoice, and each has a different fix. For a credit, check whether the credit note was received and whether it was applied to the right invoice. Record the evidence for the classification so the supplier conversation starts from a specific question."
        ]
      },
      {
        "heading": "Keep credits and disputed items visible",
        "paragraphs": [
          "A credit that is expected but not received should stay on the reconciliation as an open item with an expected date. Do not net it against the balance and mark the account clean. The same applies to a disputed invoice: keep the full amount visible and record the part the business accepts. Netting a dispute into a single number makes it easy to pay something the business did not agree to.",
          "Age the open items and assign a follow-up date to each one. An item that has been open for two cycles needs an owner decision, not another reminder. Record the supplier contact and the date of the last response. A reconciliation that shows only the current difference hides the items that have been waiting the longest."
        ]
      },
      {
        "heading": "Close with a signed-off variance note",
        "paragraphs": [
          "End the reconciliation with the opening balance, the matched amount, the open differences, and the closing balance. Add a short note for each remaining difference that names the cause, the owner, and the next date. The note should be specific enough that the owner can approve the position without reading every line. Keep the statement and the ledger extract with the note.",
          "Have a second person review the reconciliation before the payment run when the balance is material or the supplier is new. The reviewer should check the matching key, the open items, and the bank details rather than re-performing every line. Record the review date and the reviewer. A reconciliation is complete when the remaining differences are understood, not when the totals happen to agree."
        ]
      }
    ],
    "takeaways": [
      "Match supplier statements to the ledger at the invoice level, never only at the total.",
      "Classify each difference before asking the supplier a question.",
      "Keep credits and disputed invoices visible instead of netting them away.",
      "Close with a variance note that names the cause, owner, and next date."
    ],
    "publicationDate": "2026-11-10",
    "date": "2026-11-10",
    "imagePath": "/images/nov10/write-a-supplier-statement-reconciliation-routine-for-a-virtual-bookkeeper.webp",
    "related": [
      "set-a-weekly-payroll-hours-exception-review-for-a-small-business-assistant",
      "prepare-a-quarterly-certificate-of-insurance-tracker-for-a-small-business-assistant"
    ]
  },
  {
    "slug": "set-a-new-client-document-collection-tracker-for-a-small-business-assistant",
    "title": "Set a new-client document collection tracker for a small-business assistant",
    "excerpt": "A document collection tracker that tells a new client exactly what to send, keeps missing items visible, and protects sensitive files from the first request.",
    "lane": "small-business client onboarding",
    "service": "operations-support",
    "sources": [
      [
        "Federal Trade Commission, data security guidance",
        "https://www.ftc.gov/business-guidance/privacy-security"
      ],
      [
        "NIST Cybersecurity Framework",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "U.S. Small Business Administration, manage your business",
        "https://www.sba.gov/business-guide/manage-your-business"
      ],
      [
        "CISA, cybersecurity best practices",
        "https://www.cisa.gov/topics/cybersecurity-best-practices"
      ]
    ],
    "sections": [
      {
        "heading": "Name the documents before the client is asked",
        "paragraphs": [
          "Write the document list from the service agreement and the work the business will actually perform. Name each document, the format the business can accept, and the person who will review it. Separate documents that are required to start from documents that can arrive later. A list that mixes the two makes the client feel blocked when only one item is missing.",
          "For each document, record why it is needed and what happens if it is not received. A client is more likely to send a document when the request explains the purpose in one sentence. Avoid asking for a broad category such as financial records when a specific statement or period will do. A precise request reduces the back-and-forth and the amount of unnecessary data the business holds."
        ]
      },
      {
        "heading": "Give the client one request and one place to upload",
        "paragraphs": [
          "Send one request that lists the documents in the order they are needed, with a single upload link and a due date. Do not split the request across several emails or repeat it in a chat thread. The client should be able to see the whole list in one place and know which items are still missing. A single request also gives the assistant one thread to track.",
          "Confirm that the upload location is approved for the document sensitivity. A shared drive with broad access is not suitable for identity documents or bank statements. Use named folders, limited permissions, and a retention rule that says when the files will be deleted. Record the upload date and the person who received the file so the chain of custody is clear."
        ]
      },
      {
        "heading": "Track missing items by owner and age",
        "paragraphs": [
          "The tracker should show each document, its status, the client contact who owns it, and the date it was requested. Add the date it was received and the reviewer who accepted it. Sort the list by age so the oldest missing item is visible at the top. A tracker sorted by document type hides the item that has been blocking the file for three weeks.",
          "Send reminders on a fixed schedule rather than whenever someone remembers. The first reminder can be a short note that repeats the missing items, and the second should name the start-date risk. Record each reminder and the response. If the client is unresponsive, escalate to the owner with the specific consequence rather than a general complaint."
        ]
      },
      {
        "heading": "Protect sensitive documents and limited access",
        "paragraphs": [
          "Give the assistant access only to the folders needed for the onboarding, and remove access when the file is complete. Do not let a shared login stand in for named accounts. Record who viewed or downloaded each sensitive document when the system supports it. Access that is convenient during onboarding often survives long after the client work has moved elsewhere.",
          "Store the documents in the approved system rather than in personal email or a desktop folder. If a client sends a file through an unapproved channel, move it to the approved location and delete the copy when the policy allows. Do not forward sensitive files to a personal address to work on them later. The safest document is the one that was never copied outside the controlled system."
        ]
      },
      {
        "heading": "Close the file only when the source is verified",
        "paragraphs": [
          "A document is collected when it is legible, current, and matches the client record. Check the name, the date, the period, and any signature the document requires. Record the verification and the reviewer rather than marking the item complete on upload. A file that arrives but cannot be used is still a missing item.",
          "Close the onboarding file with a short index of what was received, what was waived, and what is still outstanding. Name the owner of each open item and the date it is due. Send the client a confirmation that lists the documents received without repeating sensitive details. The index becomes the starting point for the next review and the evidence that the business asked for the right records."
        ]
      }
    ],
    "takeaways": [
      "Name each document and its purpose before sending the first request.",
      "Use one request, one upload location, and a tracker sorted by age.",
      "Limit access to sensitive files and remove it when onboarding closes.",
      "Mark a document collected only after a reviewer verifies it."
    ],
    "publicationDate": "2026-11-10",
    "date": "2026-11-10",
    "imagePath": "/images/nov10/set-a-new-client-document-collection-tracker-for-a-small-business-assistant.webp",
    "related": [
      "build-a-customer-complaint-escalation-log-for-an-assistant-run-shop",
      "write-a-supplier-statement-reconciliation-routine-for-a-virtual-bookkeeper"
    ]
  },
  {
    "slug": "prepare-a-quarterly-certificate-of-insurance-tracker-for-a-small-business-assistant",
    "title": "Prepare a quarterly certificate-of-insurance tracker for a small-business assistant",
    "excerpt": "A certificate-of-insurance tracker that keeps policy dates, contract requirements, and renewal reminders in one reviewable place.",
    "lane": "small-business risk administration",
    "service": "operations-support",
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
        "IRS, recordkeeping for small businesses",
        "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      ],
      [
        "Federal Trade Commission, data security guidance",
        "https://www.ftc.gov/business-guidance/privacy-security"
      ]
    ],
    "sections": [
      {
        "heading": "List every certificate the business depends on",
        "paragraphs": [
          "Build the list from contracts, leases, and vendor agreements rather than from the insurance folder. Each agreement may require a certificate from the business, from a subcontractor, or from a landlord. Record the party who must provide the certificate and the agreement that creates the requirement. A list built only from certificates already on file will miss the ones that were never received.",
          "Include the certificates the business sends to clients as well as the ones it receives from suppliers. Both directions have expiration dates and both can stop work when they lapse. Record the business entity, the policy type, and the contact who can answer a question about the certificate. The list should be usable by someone who was not involved in the original contract."
        ]
      },
      {
        "heading": "Record the policy dates and the certificate holder",
        "paragraphs": [
          "For each certificate, record the policy number, the effective date, the expiration date, the coverage limits, and the certificate holder. Add the additional-insured language and any waiver of subrogation the contract requires. A certificate that names the wrong entity or omits a required endorsement does not satisfy the agreement even if the dates are current. An expired limit is a coverage gap even when the date is current.",
          "Keep the certificate PDF and the email that delivered it together with the tracker line. Record who confirmed the document and when. If the certificate arrives from a broker, note the broker contact and the date of the last conversation. A tracker that stores only the expiration date cannot show whether the coverage actually matches the requirement."
        ]
      },
      {
        "heading": "Check the certificate against the contract requirement",
        "paragraphs": [
          "Read the insurance clause and write the requirement in plain language beside the tracker line. Compare the coverage type, the limit, the additional insured, and the notice-of-cancellation term. Mark each requirement as met, missing, or unclear. An unclear requirement should go to the owner or the broker rather than being treated as met.",
          "Do not accept a certificate as proof that the policy will stay in force. A certificate summarizes coverage at a point in time and may not include every endorsement. When the contract depends on a specific endorsement, ask for the endorsement page or a broker letter. Record what was requested and what was received so the gap is visible."
        ]
      },
      {
        "heading": "Set reminders before the expiration date",
        "paragraphs": [
          "Set the first reminder well before the expiration date, with enough time to request a renewal and review it. A reminder that arrives on the last day creates a scramble and encourages the team to accept whatever arrives. Record the reminder date, the recipient, and the response. Use the same lead time for certificates the business issues and certificates it receives.",
          "Escalate a missing renewal to the owner before the coverage lapses, not after. Name the contract or job at risk and the date the certificate must be in place. If the supplier cannot provide a renewal, the owner may need to pause the work or accept a documented risk. The assistant can prepare the facts, but the decision to proceed without coverage belongs to the owner."
        ]
      },
      {
        "heading": "Review the tracker with the contracts",
        "paragraphs": [
          "Once a quarter, compare the tracker with the active contract list and remove certificates for agreements that have ended. Add new agreements and new suppliers before the first invoice is paid. Check that the entity names and addresses still match the business records. A tracker that is never reconciled with the contracts slowly fills with certificates that no longer matter.",
          "Summarize the quarter with the number of certificates current, expiring, missing, and disputed. Give the owner the short list that needs a decision and the date of the next review. Keep the summary with the tracker rather than in a separate report. The tracker is working when the owner can see the coverage position without asking for a new spreadsheet."
        ]
      }
    ],
    "takeaways": [
      "Build the certificate list from contracts, not from the insurance folder.",
      "Record policy dates, holders, limits, and endorsements on every line.",
      "Check each certificate against the contract clause and mark unclear items.",
      "Use reminders with enough lead time and escalate lapses to the owner."
    ],
    "publicationDate": "2026-11-10",
    "date": "2026-11-10",
    "imagePath": "/images/nov10/prepare-a-quarterly-certificate-of-insurance-tracker-for-a-small-business-assistant.webp",
    "related": [
      "write-a-supplier-statement-reconciliation-routine-for-a-virtual-bookkeeper",
      "set-a-new-client-document-collection-tracker-for-a-small-business-assistant"
    ]
  }
];
