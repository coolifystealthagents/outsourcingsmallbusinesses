export const nov10ResearchBatch = [
  {
    "slug": "how-often-do-payroll-timesheets-reach-approval-with-a-missing-manager-sign-off",
    "title": "How often do payroll timesheets reach approval with a missing manager sign-off?",
    "excerpt": "A protocol for measuring how many weekly timesheets reach the pay run without the manager approval the written policy requires.",
    "published": "2026-11-10",
    "imagePath": "/images/nov10/how-often-do-payroll-timesheets-reach-approval-with-a-missing-manager-sign-off.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a weekly timesheet reaches the pay run without the manager sign-off required by the written policy. The unit is one employee-week submitted for payment, not one employee and not one pay period. The study measures the share with a missing approval, the time the approval arrives, and the pay that was released before it arrived. It does not judge whether the manager was right to approve the hours.",
      "Set the scope to one business, one payroll schedule, and one approval rule. Record the timekeeping system, the approval method, and the cutoff time for each weekly run. If the approval rule changes during the window, keep the original rule for the weeks already collected and analyze the later weeks separately. A new reminder system can reduce missing approvals without any change in manager behavior.",
      "Define the population as every employee-week included in the pay run during the window, including weeks with no hours and weeks paid at a fixed salary. Include corrections and off-cycle payments, because those often bypass the normal approval path. State any exclusion, such as an owner who is also the approver, and apply it to every week. Test the unit definition on two completed pay runs before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define approval as the recorded action of the named manager in the timekeeping or payroll system, not a verbal okay or an email that says the hours look fine. Define missing as no recorded approval at the moment the pay run is locked. If the approval arrives after the lock but before payment, record it as late rather than missing. The distinction matters because a late approval still leaves the pay run exposed.",
      "Record the time the timesheet was submitted, the time the manager approved it, and the time the pay run was locked. These three timestamps show whether the delay belongs to the employee, the manager, or the payroll schedule. A timesheet submitted after the cutoff cannot be approved before the run, so report it separately. Do not count a system-generated reminder as an approval.",
      "Use the same payroll export for every week and keep the export time beside each record. A queue that changes while the analyst works can make the missing count unreliable. Record any manual override, because an override may release pay without the normal approval. If the business uses a delegated approver, record that person and the delegation date.",
      "Section: Evidence standard and data dictionary",
      "For each employee-week, capture the employee identifier, the week ending date, the scheduled hours, the submitted hours, the approved hours, and the approval timestamp. Add the approver name, the pay code, and the amount paid. Record whether the week included overtime, a correction, or an off-cycle payment. Keep the export and the approval log linked to the same record.",
      "Capture the reason for any missing approval when the reason is documented: manager leave, a new supervisor, a system error, or a late submission. Do not infer a reason from the absence of a record. If the reason is unknown, mark it unknown and report the count. A guessed reason makes the pattern look cleaner than the evidence allows.",
      "Record the number of reminders sent and the channel used. A reminder that reaches the manager on the morning of the cutoff is different from one sent two days earlier. Note whether the business has a written escalation rule and whether it was followed. A policy that exists but is never used is a different finding from no policy at all.",
      "Section: Sampling and collection",
      "Collect every pay run in the window rather than a sample of employees, because the approval rule applies to the whole run. If the business has several locations or entities, collect each one separately and record the entity. A combined rate can hide one location with a persistent problem. Report the number of runs and the number of employee-weeks behind every percentage.",
      "Draw the approval data from the system audit log, not from a spreadsheet the manager maintains after the fact. If the audit log is incomplete, say so and reduce the claim. Record the export date, the filters, and any records that could not be matched. A missing audit trail is itself a finding about the control.",
      "Ask the payroll owner to identify the weeks when the run was moved earlier or later than usual. A shortened week can produce missing approvals that have nothing to do with manager behavior. Record the schedule change and analyze those weeks separately. The reader should be able to tell whether the rate reflects the rule or the calendar.",
      "Section: Analysis and reporting",
      "Report the share of employee-weeks with no approval at lock, the share with a late approval, and the share with a documented override. Show the median and range of the approval delay in hours. Present the results by location, manager, and week so the reader can see whether the problem is concentrated. Use the same denominator for every rate.",
      "Separate the weeks that were paid before approval from the weeks that were held. A missing approval that stops the pay run is a delay, while a missing approval that releases pay is an exposure. Report both because they lead to different fixes. A business may accept a delay but should not accept an unapproved payment without a documented decision.",
      "Inspect the slowest cases and describe which stage dominated without naming the employee. A late submission, an absent manager, and a system error each point to a different repair. Compare the delay with the reminder schedule and the cutoff time. Report the cases with incomplete timestamps rather than dropping them from the denominator.",
      "Section: Limits of the evidence",
      "The record can show whether an approval was recorded, but it cannot show whether the manager actually reviewed the hours. A quick click and a careful review look the same in the audit log. The protocol also cannot capture a verbal approval that was never entered, so a missing record may not mean a missing conversation. State that limitation before presenting the rate.",
      "A small business may have too few pay runs to support a stable trend. Describe the runs and the employee counts instead of ranking managers. If the same owner approves every timesheet, the result may reflect one person's availability more than the control design. Do not use the rate as a performance score without the context of leave, turnover, and schedule changes.",
      "Do not compare a business that holds pay until approval with one that pays and corrects later. The two operate different controls even when the missing-approval rate looks similar. Report the pay-release rule beside the rate. A target that can be met by delaying everyone's pay is not a good target.",
      "Section: What to change",
      "Give the result to the payroll owner and the manager and ask them to choose one observable change. The change might be an earlier submission deadline, a named backup approver, a daily approval check, or a hard stop at the pay run. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If the missing rate falls but the late rate rises, the approvals may be arriving closer to the deadline without improving the control. If both fall but overrides rise, the team may be routing around the rule. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the manager which timesheet was hardest to approve and why. A concrete answer often reveals a missing schedule, a new pay code, or an employee who submits at the last minute. Use that answer to improve the process rather than to blame the manager. The next measurement should test whether the same delay shrank."
    ],
    "takeaways": [
      "Measure employee-weeks at the moment the pay run locks, not at the end of the month.",
      "Separate missing approvals from late approvals and documented overrides.",
      "Report the pay released before approval as an exposure, not just a delay.",
      "Choose one change and repeat the protocol with the same definitions."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-10"
      },
      {
        "title": "U.S. Department of Labor, Fair Labor Standards Act",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/flsa",
        "checked": "2026-11-10"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-10"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "IRS",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-10"
      }
    ],
    "related": [
      "how-often-do-supplier-statements-disagree-with-the-accounts-payable-ledger",
      "how-long-does-new-client-document-collection-take-after-the-sales-handoff"
    ]
  },
  {
    "slug": "what-share-of-customer-complaints-wait-more-than-two-business-days-for-an-owner-decision",
    "title": "What share of customer complaints wait more than two business days for an owner decision?",
    "excerpt": "A protocol for measuring how long customer complaints wait for an owner decision and which case types account for the delay.",
    "published": "2026-11-10",
    "imagePath": "/images/nov10/what-share-of-customer-complaints-wait-more-than-two-business-days-for-an-owner-decision.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of customer complaints wait more than two business days for an owner decision. The unit is one complaint that reached an owner-approval gate, identified by the case record and the first request for a decision. The study measures the wait, the case type, and the outcome of the decision. It does not judge whether the owner decided correctly or whether the customer was satisfied.",
      "Set the scope to one business, one complaint channel, and one definition of an owner decision. Record the intake form, the escalation rule, and the owner's normal review times. If the business changes the approval limit during the window, analyze the cases before and after the change separately. A lower limit can shorten the wait without improving the queue.",
      "Define the population as every complaint that required an owner decision during the window, including cases later withdrawn or resolved by the customer. Exclude complaints that never reached an approval gate and state that exclusion. Test the definition on two recent cases before collection begins. Record the test so a later reader can see how the boundary was applied.",
      "Section: Definitions that make the measure reproducible",
      "Define the start as the time the case record first shows a request for an owner decision, not the time the customer first complained. Define the decision as a recorded outcome in the case: approved, declined, changed, or sent back for more evidence. A message that says the owner will look at it is not a decision. Record the time of the decision and the person who made it.",
      "Measure business days using the business's published calendar and exclude weekends and stated holidays. Record the exact timestamps so a reader can recompute the interval. If a case crosses a holiday that was not published in advance, report the interval both ways. A definition that changes with the calendar is hard to compare across months.",
      "Record the number of follow-ups sent while the case waited. A case that waited because nobody asked is different from one that waited after three reminders. Note the channel used for each follow-up and whether the owner acknowledged it. This detail separates a queue problem from a notification problem.",
      "Section: Evidence standard and data dictionary",
      "For each complaint, capture the case number, the customer segment, the order or service, the complaint type, and the requested remedy. Add the amount at issue, the approval limit, and the owner role. Record the request time, the decision time, and the outcome. Keep the case notes and the decision message linked to the record.",
      "Capture whether the case needed more evidence before a decision and who was asked to provide it. A case that waited on the customer is not the same as a case that waited on the owner. Record the date the evidence arrived and the date the owner reviewed it. Report the two waits separately so the fix lands in the right place.",
      "Record the reason for the delay when it is documented: owner travel, missing evidence, a policy question, or a system outage. Do not guess a reason from the tone of the messages. If the reason is unknown, mark it unknown and keep it in the count. A guessed reason can make a staffing problem look like a customer problem.",
      "Section: Sampling and collection",
      "Collect every complaint that reached an approval gate in the window, or a random sample drawn from the case system with the sampling method recorded. Do not select only the cases the team remembers, because the slow cases are the ones most likely to be forgotten. Record the export date, the filters, and the number of records excluded. Keep the sampling frame with the export so the denominator can be rebuilt.",
      "If the business has several owners or queues, collect each separately and record the owner role. A combined rate can hide one queue that holds every case. Report the number of cases and the number of business days behind every percentage. A rate without its denominator is not a finding.",
      "Ask the owner to identify the cases that were urgent under the written rule. Compare the urgent cases with the rest so the reader can see whether urgency changed the wait. Record the rule that was applied. A queue that is fast for routine cases and slow for urgent ones has a different problem from a uniformly slow queue.",
      "Section: Analysis and reporting",
      "Report the median and range of the wait, the share above two business days, and the share above five. Show the results by complaint type, owner, and week. Present the number of cases still open at the end of the window separately. A case with no decision yet is not a fast case.",
      "Compare the wait with the amount at issue and the approval limit. A small case above the limit may wait longer than a large case inside it, which suggests the limit is the problem rather than the owner's attention. Report the pattern without claiming causation. The reader should be able to see which lever would shorten the most waits.",
      "Inspect the cases that waited more than five days and describe the dominant stage without naming the customer. A missing photo, an unclear policy, and an absent owner each point to a different repair. Report the follow-up count beside the wait. A long wait with no follow-up is a queue ownership problem.",
      "Section: Limits of the evidence",
      "The record can show when a decision was entered, but it cannot show when the owner actually thought about the case. A decision entered late may reflect a conversation that happened earlier. The protocol also cannot capture a decision made in a hallway and never recorded, so a missing timestamp may not mean a missing decision. State that limitation before presenting the rate.",
      "A small business may have too few complaints to support a stable rate. Describe the cases and the amounts instead of ranking owners. If the same owner handles every escalation, the result may reflect that person's availability more than the approval design. Do not use the rate as a performance score without the context of leave and case mix.",
      "Do not compare a business that resolves complaints at first contact with one that routes every complaint to the owner. The two have different gates even when the wait looks similar. Report the share of cases that reached the owner and the share resolved before the gate. A target that can be met by never escalating is not a service target.",
      "Section: What to change",
      "Give the result to the owner and the support lead and ask them to choose one observable change. The change might be a daily decision slot, a higher approval limit with a reason code, a named backup, or a required evidence checklist at intake. Record the owner, the effective date, and the measure that will show whether the change worked. Bring the case records to that review so the choice is based on evidence.",
      "If the wait falls but reopenings rise, the cases may be decided too quickly. If the wait falls only for routine cases, the urgent path may still be broken. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the owner which case was hardest to decide and what evidence was missing. A concrete answer is more useful than a satisfaction score. Update the intake checklist with the missing item and the owner. The next measurement should test whether that case type waits less."
    ],
    "takeaways": [
      "Measure from the first recorded request for an owner decision.",
      "Separate waits on the owner from waits on missing customer evidence.",
      "Report the share above two days with the case count and case mix.",
      "Test one queue change and repeat the protocol with the same rule."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-10"
      },
      {
        "title": "Federal Trade Commission, data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "2026-11-10"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-10"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-10"
      }
    ],
    "related": [
      "set-a-weekly-payroll-hours-exception-review-for-a-small-business-assistant",
      "how-often-do-payroll-timesheets-reach-approval-with-a-missing-manager-sign-off"
    ]
  },
  {
    "slug": "how-often-do-supplier-statements-disagree-with-the-accounts-payable-ledger",
    "title": "How often do supplier statements disagree with the accounts payable ledger?",
    "excerpt": "A protocol for counting supplier statement differences by type, amount, and age so the bookkeeping review can target the right fix.",
    "published": "2026-11-10",
    "imagePath": "/images/nov10/how-often-do-supplier-statements-disagree-with-the-accounts-payable-ledger.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a supplier statement disagrees with the accounts payable ledger at the end of a reconciliation period. The unit is one supplier statement compared with one ledger extract for the same period. The study measures the share with at least one difference, the types of difference, and the amount left open. It does not judge whether the supplier or the business is correct.",
      "Set the scope to one business, one ledger, and one statement period. Record the currency, the cut-off date, and the supplier population. If the business changes its accounts payable system during the window, analyze the periods separately. A new matching tool can reduce the difference count without any change in supplier behavior.",
      "Define the population as every active supplier with a statement for the period, including suppliers with a zero balance. A zero-balance statement can still contain a credit or a duplicate that the ledger missed. Exclude suppliers with no statement only if the exclusion is stated and counted. Test the comparison on two suppliers before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define a difference as a statement line that cannot be matched to the ledger at the invoice level, or a ledger line that does not appear on the statement. Do not count a timing difference as a match merely because the total agrees. Define open as a difference that remains at the end of the reconciliation window. A difference resolved during the window is recorded with its resolution date.",
      "Use the supplier invoice number as the primary key when both sides use it. If the numbers differ, record both and use the combination of date, amount, and reference as the secondary key. Write the matching rule down before matching so the analyst does not choose a convenient key per supplier. A rule that changes between suppliers makes the count incomparable.",
      "Measure the difference in the supplier's currency and record the exchange rate and date used for any conversion. A currency movement can create a difference that is not a billing error. Report currency differences separately from quantity, price, and missing-item differences. The reader should be able to see which differences are economic and which are record errors.",
      "Section: Evidence standard and data dictionary",
      "For each supplier, capture the statement date, the ledger cut-off, the opening balance, the closing balance, and the number of lines. Add the matched count, the unmatched count, and the total amount unmatched. Record the difference type for each unmatched line: timing, missing invoice, duplicate, price, quantity, credit, or payment allocation. A line without a supplier reference should be marked unverified rather than matched.",
      "Keep the statement PDF and the ledger extract with the record. Record the person who performed the match and the person who reviewed it. If a difference was resolved by a credit note, record the credit number and the date it was applied. Evidence should let a second bookkeeper rebuild the comparison without asking the supplier.",
      "Capture whether the supplier is new, whether the bank details changed during the period, and whether the statement came from a portal or an email. These facts help explain unusual differences without treating them as errors. Record the source and the date received. A statement that arrives late may produce a timing difference that looks like a missing invoice.",
      "Section: Sampling and collection",
      "Collect every supplier statement for the period, or a random sample drawn from the supplier master with the method recorded. Do not select only the suppliers with large balances, because small balances can hide duplicate payments and missed credits. Record the export date, the filters, and the number of suppliers excluded. Keep the excluded suppliers in a separate list with the reason for each.",
      "If the supplier population is large, stratify by spend and by whether the supplier is new. Report the results by stratum so one high-volume supplier does not dominate the rate. Keep the number of statements behind every percentage. A rate without the supplier count is not a finding.",
      "Ask the bookkeeper to identify the statements that were difficult to match and why. A missing invoice number, a different currency, or a portal export can explain a cluster of differences. Record the reason before looking at the result so the explanation is not fitted to the number. Use the same reason codes across suppliers.",
      "Section: Analysis and reporting",
      "Report the share of suppliers with at least one difference, the median number of differences per affected supplier, and the total amount open. Show the results by difference type and by supplier stratum. Present the number of statements that could not be compared and the reason. A statement that could not be read is not a clean statement.",
      "Separate differences that affect cash from differences that affect only the record. A missing invoice may lead to a duplicate payment, while a price difference may lead to a credit. Report the cash exposure beside the count. The owner needs to know which differences can change the next payment run.",
      "Age the open differences and report how many have been open for more than one period. A difference that survives two reconciliations is a process problem, not a timing issue. Compare the age with the follow-up date and the assigned owner. The reader should be able to see which items are actually moving.",
      "Section: Limits of the evidence",
      "The comparison can show that the records disagree, but it cannot show which record is correct. The supplier statement may omit a credit, and the ledger may omit an invoice. The protocol also cannot capture a verbal agreement that changed a price without a document. State that limitation before presenting the result.",
      "A small business may have too few suppliers to support a stable rate. Describe the statements and the amounts instead of ranking suppliers. If one bookkeeper handles every reconciliation, the result may reflect that person's method more than the supplier behavior. Do not use the rate as a performance score without the context of volume and system changes.",
      "Do not compare a business that reconciles monthly with one that reconciles quarterly. The two have different windows even when the difference rate looks similar. Report the reconciliation frequency beside the result. A target that can be met by reconciling less often is not a control target.",
      "Section: What to change",
      "Give the result to the bookkeeper and the owner and ask them to choose one observable change. The change might be a required purchase order, a statement request schedule, a duplicate-payment check, or a credit follow-up. Record the owner, the effective date, and the measure that will show whether the change worked. Bring the reconciliation file to that review so the choice is based on evidence.",
      "If the difference count falls but the open amount rises, the team may be closing small items while leaving large ones. If duplicate differences fall but missing invoices rise, the fix may have moved the problem. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the bookkeeper which supplier was hardest to reconcile and what document was missing. A concrete answer is more useful than a general complaint. Add the missing document to the supplier onboarding checklist. The next measurement should test whether that supplier type reconciles faster."
    ],
    "takeaways": [
      "Compare statements at the invoice level and keep the matching rule fixed.",
      "Classify differences by type before judging the supplier or the ledger.",
      "Separate cash exposure from record-only differences.",
      "Age open items and test one process change on the next period."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-10"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-10"
      },
      {
        "title": "Association of Certified Fraud Examiners, fraud resources",
        "publisher": "Association of Certified Fraud Examiners",
        "url": "https://www.acfe.com/fraud-resources",
        "checked": "2026-11-10"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "IRS",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-10"
      }
    ],
    "related": [
      "how-long-does-new-client-document-collection-take-after-the-sales-handoff",
      "set-a-weekly-payroll-hours-exception-review-for-a-small-business-assistant"
    ]
  },
  {
    "slug": "how-long-does-new-client-document-collection-take-after-the-sales-handoff",
    "title": "How long does new-client document collection take after the sales handoff?",
    "excerpt": "A protocol for measuring the time from sales handoff to a complete client document file, with stage times and the causes of delay.",
    "published": "2026-11-10",
    "imagePath": "/images/nov10/how-long-does-new-client-document-collection-take-after-the-sales-handoff.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how long a new client's document file takes to become complete after the sales handoff. The unit is one new client engagement followed from the handoff date to the date the last required document is verified. The study measures the time spent waiting on the client, the time spent waiting on internal review, and the number of reminders. It does not judge the quality of the sales conversation or the client relationship.",
      "Set the scope to one business, one service line, and one document list. Record the intake form, the upload location, and the reviewer who verifies each document. If the business changes the document list during the window, keep the original list for clients already in progress and analyze later clients separately. A shorter list can improve the time without any change in client responsiveness.",
      "Define the population as every new client who signed during the window and was expected to provide documents. Include clients who withdrew before completion, because their time is part of the result. Exclude clients whose service required no documents and state that exclusion. Test the definition on two recent engagements before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define the start as the date the sales handoff record was created, not the date the contract was signed or the first call was held. Define complete as every required document received, legible, and verified against the client record. A document that arrived but was rejected is not complete. Record the rejection and the date the replacement arrived.",
      "Measure calendar days and also record the business days between the handoff and the first request. A delay before the first request is an internal delay, while a delay after the request is more likely a client delay. Report the two stages separately so the fix lands in the right place. Do not count a reminder as progress unless it produced a document or a response.",
      "Record the time to the first request, the time to the first document, the time to the last document, and the time to verification. These stages show whether the process is slow to start, slow to collect, or slow to review. A fast first request followed by a long silence is a different problem from a late first request. A stage with no timestamp should be reported as unknown rather than estimated.",
      "Section: Evidence standard and data dictionary",
      "For each client, capture the handoff date, the service, the document list version, and the assigned coordinator. Add the request date, the reminder dates, the receipt dates, the verification dates, and the reviewer. Record whether the client used the approved upload location or sent files through another channel. Keep the handoff record and the document index linked to the case.",
      "Capture the reason for each delay when it is documented: client travel, a missing signer, an unclear request, a rejected document, or an internal review backlog. Do not infer a reason from silence. If the reason is unknown, mark it unknown and keep it in the denominator. A guessed reason makes the process look better understood than it is.",
      "Record the number of documents required, received, rejected, and waived. A client with ten required documents will usually take longer than one with three, so report the list size beside the time. A waiver should have an approver and a reason. An undocumented waiver is a missing document with a friendlier name.",
      "Section: Sampling and collection",
      "Collect every new client in the window, or a random sample drawn from the signed-client list with the method recorded. Do not select only the clients who completed quickly, because the slow cases are the ones that reveal the process. Record the export date, the filters, and the number of clients excluded. Keep the sampling frame with the export so the denominator can be rebuilt.",
      "If the business has several coordinators or service lines, collect each separately and record the group. A combined median can hide one coordinator with a persistent backlog. Report the number of clients and the document counts behind every time. A time without its list size is hard to compare.",
      "Ask the coordinator to identify the clients who needed the most reminders and why. A missing signer, an unclear request, and a rejected scan each point to a different repair. Record the reason before looking at the overall time so the explanation is not fitted to the result. Use the same reason codes across clients.",
      "Section: Analysis and reporting",
      "Report the median and range for the total time and for each stage. Show the share of clients complete within one week, two weeks, and one month. Present the results by coordinator, service, and document count. Report clients still incomplete at the end of the window separately so they do not disappear from the denominator.",
      "Separate internal delay from client delay and report both. A business may be fast once documents arrive but slow to ask for them, or the reverse. Compare the stage times with the reminder schedule and the review capacity. The reader should be able to see which stage would shorten the most cases.",
      "Inspect the slowest cases and describe the dominant stage without naming the client. A missing signature, a rejected document, and a review backlog each lead to a different change. Report the number of reminders beside the time. A long collection with no reminders is a queue ownership problem, not a client problem.",
      "Section: Limits of the evidence",
      "The record can show when a document was received, but it cannot show when the client actually sent it. A file uploaded late at night may be recorded the next morning. The protocol also cannot capture a document handed over in person and entered later. State that limitation before presenting the time.",
      "A small business may have too few new clients to support a stable median. Describe the cases and the document counts instead of ranking coordinators. If one person handles every onboarding, the result may reflect that person's availability more than the process design. Do not use the time as a performance score without the context of leave and service mix.",
      "Do not compare a business that collects documents before the kickoff with one that collects them during delivery. The two have different clocks even when the total looks similar. Report the collection policy beside the result. A target that can be met by refusing to start work is not a service target.",
      "Section: What to change",
      "Give the result to the coordinator and the owner and ask them to choose one observable change. The change might be a single upload link, a pre-filled document list, a verification slot on the first day, or a named backup reviewer. Record the owner, the effective date, and the measure that will show whether the change worked. Bring the case records to that review so the choice is based on evidence.",
      "If the first-request time falls but the total time does not, the bottleneck may have moved to client response or review. If the total falls but rejections rise, the request may be too vague. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the last two clients which document was hardest to provide and why. A concrete answer is more useful than a satisfaction score. Update the request with the missing explanation and the owner. The next measurement should test whether that document arrives sooner."
    ],
    "takeaways": [
      "Measure from the sales handoff, not from the contract date.",
      "Separate the wait before the first request from the wait after it.",
      "Report the document count and rejected items beside the time.",
      "Test one intake change and repeat the protocol with the same list."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-10"
      },
      {
        "title": "Federal Trade Commission, data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "2026-11-10"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-10"
      },
      {
        "title": "CISA, cybersecurity best practices",
        "publisher": "CISA",
        "url": "https://www.cisa.gov/topics/cybersecurity-best-practices",
        "checked": "2026-11-10"
      }
    ],
    "related": [
      "how-often-do-supplier-statements-disagree-with-the-accounts-payable-ledger",
      "set-a-new-client-document-collection-tracker-for-a-small-business-assistant"
    ]
  },
  {
    "slug": "what-share-of-certificates-of-insurance-expire-without-a-renewal-reminder",
    "title": "What share of certificates of insurance expire without a renewal reminder?",
    "excerpt": "A protocol for measuring how many certificates of insurance lapse without a recorded renewal reminder and which contract types carry the most risk.",
    "published": "2026-11-10",
    "imagePath": "/images/nov10/what-share-of-certificates-of-insurance-expire-without-a-renewal-reminder.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of certificates of insurance reach their expiration date without a recorded renewal reminder. The unit is one certificate tracked by the business, whether received from a supplier or issued to a client. The study measures the share with no reminder, the share that lapsed, and the time between the lapse and the first action. It does not judge the insurance coverage itself.",
      "Set the scope to one business, one certificate tracker, and one reminder rule. Record the policy types, the contract types, and the person responsible for each certificate. If the business changes the tracker or the reminder rule during the window, analyze the certificates before and after the change separately. A new reminder tool can reduce lapses without any change in vendor behavior.",
      "Define the population as every certificate with an expiration date in the window, including certificates that were replaced before the date. Exclude certificates for contracts that ended before the expiration date only if the exclusion is stated and counted. Test the definition on two recent certificates before collection begins. Keep the excluded certificates in a separate list with the reason for each.",
      "Section: Definitions that make the measure reproducible",
      "Define a reminder as a recorded message or task assigned to a named person before the expiration date. A calendar entry that nobody owns is not a reminder. Define lapsed as an expiration date that passed with no renewed certificate on file. A certificate that was renewed on the expiration date is not lapsed if the renewal was recorded before the end of that day.",
      "Measure the lead time between the reminder and the expiration date in calendar days. A reminder sent on the last day is different from one sent thirty days earlier even if both are recorded. Record the channel and the recipient. A reminder sent to a general inbox may never reach the person who can act.",
      "Record the certificate holder, the insured entity, the coverage type, and the required limit. A certificate can be current but still fail the contract because the entity or the limit is wrong. Report document defects separately from lapses. The reader should be able to see whether the problem is timing, accuracy, or both.",
      "Section: Evidence standard and data dictionary",
      "For each certificate, capture the policy number, the effective date, the expiration date, the coverage type, the limit, and the certificate holder. Add the contract reference, the responsible owner, the reminder dates, and the renewal date. Keep the certificate PDF and the delivery email linked to the record. An endorsement that was requested but not received belongs in the open items.",
      "Capture whether the certificate was received from a broker, a supplier, or a portal, and the date it was received. Record any endorsement request and the response. If the certificate was accepted without the required endorsement, mark that as a defect rather than a clean file. An accepted defect is still a defect.",
      "Record the action taken after a lapse: a renewal request, a work pause, a risk acceptance, or no action. A lapse with no recorded action is an open exposure. Record the owner and the date of the next check. Do not mark the case closed merely because someone sent an email.",
      "Section: Sampling and collection",
      "Collect every certificate in the tracker with an expiration date in the window, or a random sample drawn from the tracker with the method recorded. Do not select only the certificates that lapsed, because the denominator is what makes the share meaningful. Record the export date, the filters, and the number of certificates excluded. Keep the excluded certificates in a separate list with the reason for each.",
      "If the business has several contract types or entities, collect each separately and record the group. A combined rate can hide one contract type with a persistent gap. Report the number of certificates and the number of contracts behind every percentage. A rate without its denominator is not a finding.",
      "Ask the owner to identify the certificates that were difficult to renew and why. A broker delay, a missing endorsement, and a changed entity each point to a different repair. Record the reason before looking at the overall share so the explanation is not fitted to the result. Use the same reason codes across certificates.",
      "Section: Analysis and reporting",
      "Report the share of certificates with no recorded reminder, the share that lapsed, and the median lead time for the reminders that were sent. Show the results by contract type, owner, and month. Present the number of certificates still unresolved at the end of the window separately. An unresolved certificate is not a current one.",
      "Separate certificates that lapsed because no reminder was sent from those that lapsed despite a reminder. The first is a tracking problem, while the second is a response problem. Report the two shares together with the action taken. The owner needs to know which fix would prevent the next lapse.",
      "Compare the lapse rate with the contract value and the work dependency. A lapsed certificate for a low-value supplier may be a paperwork issue, while one for a critical contractor may stop work. Report the dependency beside the rate. The reader should be able to see which gaps carry operational risk.",
      "Section: Limits of the evidence",
      "The tracker can show whether a reminder was recorded, but it cannot show whether the person acted on it. A reminder that was read and ignored looks the same as one that was never opened. The protocol also cannot capture a phone call that produced a renewal without a record. State that limitation before presenting the share.",
      "A small business may have too few certificates to support a stable rate. Describe the certificates and the contract types instead of ranking owners. If one person manages every certificate, the result may reflect that person's availability more than the reminder design. Do not use the share as a performance score without the context of leave and turnover.",
      "Do not compare a business that requires certificates before payment with one that collects them annually. The two have different enforcement points even when the lapse rate looks similar. Report the enforcement rule beside the result. A target that can be met by dropping suppliers is not a risk target.",
      "Section: What to change",
      "Give the result to the owner and the contract manager and ask them to choose one observable change. The change might be a reminder thirty days before expiration, a named backup owner, a certificate requirement at invoice approval, or a quarterly contract review. Record the owner, the effective date, and the measure that will show whether the change worked. Bring the tracker to that review so the choice is based on evidence.",
      "If the reminder share rises but the lapse rate does not, the problem may be the response rather than the reminder. If the lapse rate falls but endorsement defects rise, the team may be accepting the first document it receives. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the contract manager which certificate was hardest to renew and what was missing. A concrete answer is more useful than a general complaint. Add the missing requirement to the request template. The next measurement should test whether that contract type renews earlier."
    ],
    "takeaways": [
      "Count every certificate with an expiration date, not only the ones that lapsed.",
      "Separate no-reminder lapses from reminders that produced no response.",
      "Report document defects such as wrong entity or missing endorsement.",
      "Test one reminder or enforcement change on the next quarter."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-10"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-10"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "IRS",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-10"
      },
      {
        "title": "Federal Trade Commission, data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "2026-11-10"
      }
    ],
    "related": [
      "prepare-a-quarterly-certificate-of-insurance-tracker-for-a-small-business-assistant",
      "how-often-do-supplier-statements-disagree-with-the-accounts-payable-ledger"
    ]
  }
];
