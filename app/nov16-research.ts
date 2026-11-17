export const nov16ResearchBatch = [
  {
    "slug": "how-often-do-vendor-tax-records-arrive-with-a-missing-classification",
    "title": "How often do vendor tax records arrive with a missing classification?",
    "excerpt": "A protocol for measuring how many vendor tax records reach payment with a missing or mismatched tax classification.",
    "published": "2026-11-16",
    "imagePath": "/thumbnails/november-16/how-often-do-vendor-tax-records-arrive-with-a-missing-classification.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a vendor tax record reaches the first payment with a missing or mismatched tax classification. The unit is one vendor-payment relationship, not one invoice and not one form. The study measures the share with no classification, the share with a classification that conflicts with the vendor record, and the time the correction takes. It does not judge whether a particular vendor should have been treated as an employee.",
      "Set the scope to one business, one payment system, and one collection rule. Record the form version, the request channel, and the point at which a vendor is allowed to be paid. If the rule changes during the window, keep the original rule for the vendors already collected and analyze later vendors separately. A new portal can improve completion without any change in vendor behavior.",
      "Define the population as every vendor that received a payment during the window, including one-time vendors and vendors paid through a payment platform. State any exclusion, such as a utility with no tax form requirement, and apply it to every vendor. Test the definition on two completed payment runs before collection begins. The reader should be able to rebuild the population from the payment record.",
      "Section: Definitions that make the measure reproducible",
      "Define a complete record as a current form with a legal name, a classification, an address, and a taxpayer identification number. Define missing as no form on file when the payment is released. If a form arrives after payment but before the reporting deadline, record it as late rather than missing. The distinction matters because a late form still leaves the payment uncovered at the time it was made.",
      "Define a mismatch as a legal name or classification that differs between the form and the vendor master record. Record which field differed and whether the difference was resolved by changing the form or the record. Do not count a formatting difference, such as an abbreviation, as a mismatch unless it changes the legal identity. A clear definition keeps two reviewers from disagreeing about the same file.",
      "Use the same payment export for every month and keep the export timestamp beside the file. Record any manual payment that bypassed the normal vendor setup. If a payment platform collects the form, record the platform and the date the business received the data. A vendor who was paid outside the system may never appear in the normal queue.",
      "Section: Evidence standard and data dictionary",
      "For each vendor, capture the vendor identifier, the legal name, the classification, the form date, the receipt date, and the verification date. Add the first payment date, the total paid in the window, and the payment method. Record the reviewer and the source system for each field. Keep the form image or e-signature record linked to the same vendor identifier.",
      "Capture the reason for a missing record when the reason is documented: a new vendor, a platform that does not collect the form, a vendor that refused, or a file that was lost. Do not infer a reason from the absence of a form. If the reason is unknown, mark it unknown and report the count. A guessed reason makes the process look better than the evidence allows.",
      "Record whether a payment hold was applied and when it was released. A hold that exists in policy but is never used is a different finding from a hold that is applied consistently. Note the person who approved any exception. The approval record is part of the control, not an administrative detail.",
      "Section: Sampling and collection",
      "Collect every vendor in the payment export rather than a sample, because the tax rule applies to the whole population. If the business has several entities, collect each one separately and record the entity. A combined rate can hide one entity with a persistent problem. Report the number of vendors and the total paid behind every percentage.",
      "Draw the classification and receipt dates from the vendor master and the form record, not from a spreadsheet maintained after the fact. If the master is incomplete, say so and reduce the claim. Record the export date, the filters, and any vendor that could not be matched. A missing audit trail is itself a finding about the control.",
      "Ask the accountant to identify vendors that were reclassified during the window. A reclassification can make an old form look wrong even when it was correct when received. Record the change date and analyze those vendors separately. The reader should be able to tell whether the rate reflects vendor behavior or a record update.",
      "Section: Analysis and reporting",
      "Report the share of vendors with no form at first payment, the share with a late form, and the share with a name or classification mismatch. Show the median and range of days from payment to correction. Present the results by entity, payment method, and vendor type. Use the same denominator for every rate.",
      "Separate vendors that were paid before the form arrived from vendors that were held. A missing form that stops payment is a delay, while a missing form that releases payment is an exposure. Report both because they lead to different fixes. A business may accept a delay but should not accept an unverified payment without a documented decision.",
      "Inspect the largest payments with incomplete records and describe the stage that failed without naming the vendor. A missing request, a lost form, and a platform gap each point to a different repair. Compare the delay with the request date and the payment date. Report records with incomplete dates rather than dropping them from the denominator.",
      "Section: Limits of the evidence",
      "The record can show whether a form was on file, but it cannot show whether the classification was correct in every legal sense. A form can be complete and still describe the relationship incorrectly. The protocol also cannot capture a verbal confirmation that was never documented. State that limitation before presenting the rate.",
      "A small business may have too few vendors to support a stable trend. Describe the vendor count and the payment total instead of ranking the accountant or the assistant. If one owner reviews every form, the result may reflect that person's availability more than the process design. Do not use the rate as a performance score without the context of turnover and system changes.",
      "Do not compare a business that holds payment until the form is verified with one that pays and corrects later. The two operate different controls even when the missing rate looks similar. Report the payment-release rule beside the rate. A target that can be met by delaying every vendor is not a good target.",
      "Section: What to change",
      "Give the result to the owner and the accountant and ask them to choose one observable change. The change might be a form request at vendor approval, a payment hold, a quarterly reconciliation, or a cleaner vendor master. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If the missing rate falls but the late rate rises, forms may be arriving closer to the deadline without improving the control. If both fall but exceptions rise, the team may be routing around the rule. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the accountant which vendor record was hardest to resolve and why. A concrete answer often reveals a platform gap, a name change, or a classification that nobody explained. Use that answer to improve the request rather than to blame the vendor. The next measurement should test whether the same delay shrank."
    ],
    "takeaways": [
      "Measure vendor relationships at the first payment, not at the reporting deadline.",
      "Separate missing forms from late forms and name or classification mismatches.",
      "Report payments released before verification as an exposure, not just a delay.",
      "Choose one change and repeat the protocol with the same definitions."
    ],
    "referenceSources": [
      {
        "title": "IRS, About Form W-9",
        "publisher": "IRS",
        "url": "https://www.irs.gov/forms-pubs/about-form-w-9",
        "checked": "2026-11-16"
      },
      {
        "title": "IRS, Instructions for Forms 1099-NEC and 1099-MISC",
        "publisher": "IRS",
        "url": "https://www.irs.gov/instructions/i1099nec",
        "checked": "2026-11-16"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "IRS",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-16"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-16"
      }
    ],
    "related": [
      "what-share-of-customer-deletion-requests-close-within-the-stated-window",
      "how-often-do-new-hire-account-requests-wait-more-than-one-business-day"
    ]
  },
  {
    "slug": "what-share-of-customer-deletion-requests-close-within-the-stated-window",
    "title": "What share of customer deletion requests close within the stated window?",
    "excerpt": "A protocol for measuring how many customer deletion requests close within the business's stated response window and where the delay occurs.",
    "published": "2026-11-16",
    "imagePath": "/thumbnails/november-16/what-share-of-customer-deletion-requests-close-within-the-stated-window.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of customer deletion requests close within the window the business states in its policy or reply. The unit is one request case, not one customer and not one system. The study measures the closure time, the systems searched, and the share of cases with a written response. It does not judge whether every deletion was legally required.",
      "Set the scope to one business, one intake channel set, and one published window. Record the policy version and the date the window was stated. If the window changes during the study, keep the original window for cases already opened and analyze later cases separately. A new intake form can change the mix of requests without changing the process.",
      "Define the population as every deletion request received during the window, including requests that were withdrawn or denied. Record how each case entered the business, because a request made in a support chat may be logged later than one made through a form. State any exclusion and apply it to every case. Test the definition on ten closed cases before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define closure as the date the business sent a written response that states what was deleted and what was retained. Define the stated window as the number of calendar days in the policy in force when the request arrived. Record the start time as the date the request was received, not the date it was assigned. The difference between those dates is part of the finding.",
      "Record whether the request needed identity verification, a legal-hold check, or a system search that the business could not complete. Mark a case as open if any of those steps is unfinished. A case that has a reply but no deletion is not closed. Use the same rule for every channel so one team does not look faster because it closes cases earlier.",
      "Use the case log as the source of dates and keep an export timestamp beside it. Record any case that was reopened after closure and the reason. If a case was merged with another request from the same customer, keep the earlier start date. A merged case that adopts the later date can make the closure rate look better than it was.",
      "Section: Evidence standard and data dictionary",
      "For each case, capture the case identifier, the received date, the channel, the verification date, the systems searched, the deletion date, and the response date. Add the retention reason for any record that was kept and the owner of the case. Record whether a legal hold was checked and who confirmed it. Keep the response text linked to the case.",
      "Capture the reason for any delay when it is documented: identity verification, a vendor that needed a manual request, a backup cycle, or a legal review. Do not infer a reason from an empty field. If the reason is unknown, mark it unknown and report the count. A guessed reason hides the process step that actually needs repair.",
      "Record the number of reminders sent and the channel used. A reminder that reaches the system owner on the last day is different from one sent at the start. Note whether the business has a written escalation rule and whether it was followed. A policy that exists but is never used is a different finding from no policy at all.",
      "Section: Sampling and collection",
      "Collect every request in the window rather than a sample, because the closure promise applies to each one. If the business has several brands or locations, collect each separately and record the entity. A combined rate can hide a channel with a persistent problem. Report the number of cases behind every percentage.",
      "Draw dates from the case system and the response log, not from a spreadsheet maintained after the fact. If the case system is incomplete, say so and reduce the claim. Record the export date, the filters, and any case that could not be matched to a response. A missing response record is itself a finding about the process.",
      "Ask the support lead to identify weeks when intake volume was unusually high or a system owner was absent. Those weeks can produce delays that have nothing to do with the process design. Record the event and analyze those cases separately. The reader should be able to tell whether the rate reflects the rule or the calendar.",
      "Section: Analysis and reporting",
      "Report the share of cases closed inside the window, the share closed late, and the share still open at the end of collection. Show the median and range of closure days. Present the results by channel, system, and week so the reader can see whether the problem is concentrated. Use the same denominator for every rate.",
      "Separate time spent waiting for the customer from time spent inside the business. A request that waits for identity evidence is a different finding from one that waits for a system owner. Report both because they lead to different fixes. A business may accept a customer delay but should not accept an internal delay without a documented decision.",
      "Inspect the slowest cases and describe which stage dominated without naming the customer. An intake gap, a vendor request, and a backup cycle each point to a different repair. Compare the delay with the stated window and the reminder schedule. Report cases with incomplete dates rather than dropping them from the denominator.",
      "Section: Limits of the evidence",
      "The case record can show that a response was sent, but it cannot show that every copy was actually deleted. A system that is not in the inventory will not appear in the search list. The protocol also cannot capture a verbal assurance that was never written down. State that limitation before presenting the rate.",
      "A small business may have too few requests to support a stable trend. Describe the case count and the channels instead of ranking staff. If one owner handles every request, the result may reflect that person's availability more than the process design. Do not use the rate as a performance score without the context of volume and turnover.",
      "Do not compare a business that closes cases after a written response with one that closes them when the deletion job is queued. The two operate different definitions even when the rate looks similar. Report the closure rule beside the rate. A target that can be met by sending a reply before the work is done is not a good target.",
      "Section: What to change",
      "Give the result to the owner and the support lead and ask them to choose one observable change. The change might be a single intake form, a named system owner, a reminder at the midpoint, or a legal-hold check at intake. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If the closure rate rises but the open-case count also rises, the business may be receiving more requests rather than handling them better. If both fall but responses become shorter, the team may be closing cases before the work is complete. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the system owner which request was hardest to complete and why. A concrete answer often reveals an unlisted tool, a vendor with no self-service path, or a backup that cannot be searched. Use that answer to improve the inventory rather than to blame the team. The next measurement should test whether the same delay shrank."
    ],
    "takeaways": [
      "Measure each request from the date it was received to the date a written response closed it.",
      "Separate customer waiting time from internal waiting time before reporting a rate.",
      "Report open cases and retained records, not only the cases that closed.",
      "Choose one change and repeat the protocol with the same definitions."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "2026-11-16"
      },
      {
        "title": "Federal Trade Commission, disposing of consumer records",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/disposing-consumer-report-information-rule",
        "checked": "2026-11-16"
      },
      {
        "title": "NIST Privacy Framework",
        "publisher": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "checked": "2026-11-16"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-16"
      }
    ],
    "related": [
      "how-often-do-vendor-tax-records-arrive-with-a-missing-classification",
      "what-share-of-customer-estimates-go-out-without-a-follow-up-date"
    ]
  },
  {
    "slug": "how-often-do-new-hire-account-requests-wait-more-than-one-business-day",
    "title": "How often do new-hire account requests wait more than one business day?",
    "excerpt": "A protocol for measuring how long new-hire account and equipment requests wait for approval before the start date.",
    "published": "2026-11-16",
    "imagePath": "/thumbnails/november-16/how-often-do-new-hire-account-requests-wait-more-than-one-business-day.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a new-hire account request waits more than one business day for the approval it needs. The unit is one request line, not one new hire and not one system. The study measures the approval delay, the share of lines still open at the start date, and the equipment lines that arrived late. It does not judge whether the requested access was appropriate.",
      "Set the scope to one business, one hiring process, and one approval rule. Record the request system, the approval matrix, and the definition of a business day. If the rule changes during the window, keep the original rule for requests already opened and analyze later requests separately. A new approval tool can reduce delay without any change in manager behavior.",
      "Define the population as every request line created for a hire with a start date in the window, including lines that were cancelled before approval. State any exclusion, such as a contractor request handled by another team, and apply it to every line. Test the definition on two completed hires before collection begins. The reader should be able to rebuild the population from the request log.",
      "Section: Definitions that make the measure reproducible",
      "Define the clock start as the time the request line was submitted, not the time the hire accepted the offer. Define the clock stop as the time the approver recorded a decision in the request system. A verbal approval is not a stop until it is entered. Record both timestamps to the minute when the system supports it.",
      "Define a business day using the business calendar, excluding weekends and stated holidays. Record the time zone used for the calculation. A request sent late on Friday and approved Monday morning is one business day, not three calendar days. Report both calendar and business-day delays so the reader can see the difference.",
      "Use the same request export for every hire and keep the export timestamp beside the file. Record any line that was approved outside the system and later entered by hand. If a manager delegates approval, record the delegate and the date of the delegation. A delegated approval that is not recorded can look like a delay when it was actually a handoff.",
      "Section: Evidence standard and data dictionary",
      "For each request line, capture the hire identifier, the role, the start date, the system, the access level, the submitted time, the approved time, and the approver. Add the provisioning time and the first successful login when available. Record whether the line was part of a standard bundle or an exception. Keep the request and approval records linked to the same line.",
      "Capture the reason for delay when it is documented: approver leave, a missing manager, a new system, a security review, or an incomplete request. Do not infer a reason from an empty field. If the reason is unknown, mark it unknown and report the count. A guessed reason makes the process look cleaner than the evidence allows.",
      "Record the number of reminders sent and the channel used. A reminder that reaches the approver on the start date is different from one sent at submission. Note whether the business has a written escalation rule and whether it was followed. A policy that exists but is never used is a different finding from no policy at all.",
      "Section: Sampling and collection",
      "Collect every request line in the window rather than a sample, because the approval rule applies to each line. If the business has several locations or entities, collect each separately and record the entity. A combined rate can hide one manager or one system with a persistent problem. Report the number of hires and lines behind every percentage.",
      "Draw times from the request system audit log, not from a spreadsheet the coordinator maintains after the fact. If the audit log is incomplete, say so and reduce the claim. Record the export date, the filters, and any line that could not be matched to an approver. A missing audit trail is itself a finding about the control.",
      "Ask the coordinator to identify hires whose start date moved earlier or later than planned. A moved start date can create delays that have nothing to do with the approver. Record the change and analyze those hires separately. The reader should be able to tell whether the rate reflects the rule or the calendar.",
      "Section: Analysis and reporting",
      "Report the share of lines approved within one business day, the share approved later, and the share still open at the start date. Show the median and range of approval delay in business hours. Present the results by manager, system, and role. Use the same denominator for every rate.",
      "Separate approval delay from provisioning delay. A line approved on time but provisioned late is an information-technology problem, while a line approved late is a management problem. Report both because they lead to different fixes. A business may accept a provisioning delay but should not accept an unapproved account without a documented decision.",
      "Inspect the slowest lines and describe which stage dominated without naming the manager. A missing request detail, an absent approver, and a security review each point to a different repair. Compare the delay with the reminder schedule and the start date. Report lines with incomplete timestamps rather than dropping them from the denominator.",
      "Section: Limits of the evidence",
      "The record can show when an approval was entered, but it cannot show whether the approver actually understood the request. A quick click and a careful review look the same in the audit log. The protocol also cannot capture a verbal approval that was never entered. State that limitation before presenting the rate.",
      "A small business may have too few hires to support a stable trend. Describe the hires and the request lines instead of ranking managers. If one owner approves every request, the result may reflect that person's availability more than the process design. Do not use the rate as a performance score without the context of leave and turnover.",
      "Do not compare a business that holds the start date until approval with one that lets the hire begin and fixes access later. The two operate different controls even when the delay looks similar. Report the start-date rule beside the rate. A target that can be met by delaying every start is not a good target.",
      "Section: What to change",
      "Give the result to the hiring manager and the coordinator and ask them to choose one observable change. The change might be a request deadline, a named backup approver, a standard access bundle, or a daily approval check. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If the approval delay falls but the provisioning delay rises, requests may be approved earlier without reaching the systems any faster. If both fall but exceptions rise, the team may be routing around the approval rule. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the coordinator which request was hardest to complete and why. A concrete answer often reveals a missing role definition, a system owner who never responds, or a bundle that does not fit the job. Use that answer to improve the request rather than to blame the manager. The next measurement should test whether the same delay shrank."
    ],
    "takeaways": [
      "Measure each request line from submission to a recorded approval in the request system.",
      "Use business days and state the time zone so the delay is reproducible.",
      "Separate approval delay from provisioning delay before reporting a rate.",
      "Choose one change and repeat the protocol with the same definitions."
    ],
    "referenceSources": [
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-16"
      },
      {
        "title": "Cybersecurity and Infrastructure Security Agency, best practices",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/cybersecurity-best-practices",
        "checked": "2026-11-16"
      },
      {
        "title": "U.S. Department of Labor, recordkeeping",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "checked": "2026-11-16"
      },
      {
        "title": "U.S. Small Business Administration, hire and manage employees",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees",
        "checked": "2026-11-16"
      }
    ],
    "related": [
      "what-share-of-customer-deletion-requests-close-within-the-stated-window",
      "what-share-of-warranty-claims-arrive-without-proof-of-purchase"
    ]
  },
  {
    "slug": "what-share-of-customer-estimates-go-out-without-a-follow-up-date",
    "title": "What share of customer estimates go out without a follow-up date?",
    "excerpt": "A protocol for measuring how many customer estimates leave a service business without an owner and a dated follow-up.",
    "published": "2026-11-16",
    "imagePath": "/thumbnails/november-16/what-share-of-customer-estimates-go-out-without-a-follow-up-date.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of customer estimates leave the business without a named follow-up owner and a dated next contact. The unit is one estimate version, not one customer and not one job. The study measures the share missing a follow-up date, the time to first contact, and the share that never receives a recorded answer. It does not judge whether the customer was likely to buy.",
      "Set the scope to one business, one estimate template, and one sales process. Record the system that holds the estimate and the rule for who follows up. If the process changes during the window, keep the original rule for estimates already sent and analyze later estimates separately. A new customer-relationship tool can change the record without changing the selling behavior.",
      "Define the population as every estimate version sent to a customer during the window, including revisions and estimates that were later withdrawn. State any exclusion, such as an internal cost sheet that was never sent, and apply it to every version. Test the definition on two weeks of estimates before collection begins. The reader should be able to rebuild the population from the estimate system.",
      "Section: Definitions that make the measure reproducible",
      "Define a follow-up date as a calendar date recorded on the estimate or in the customer record before the estimate was sent. Define an owner as a named person or role, not a shared inbox. A note that says \"call next week\" is not a dated follow-up. Record the exact text when the record is ambiguous.",
      "Define first contact as the first outbound message or call after the estimate was sent, excluding an automated delivery receipt. Record the date, the channel, and the person who made contact. If the customer replied first, record that separately rather than counting it as business follow-up. The distinction matters because a customer reply is not a follow-up process.",
      "Use the same estimate export for every week and keep the export timestamp beside the file. Record any estimate sent outside the system, such as a PDF from a personal mailbox. If a revision replaced an earlier version, keep both with the same customer identifier. An estimate that is missing from the export cannot be counted as sent.",
      "Section: Evidence standard and data dictionary",
      "For each estimate version, capture the estimate number, the customer identifier, the amount, the send date, the owner, the follow-up date, and the expiry date. Add the first contact date, the customer answer, and the final status. Record whether the version was a revision and which earlier version it replaced. Keep the sent document linked to the record.",
      "Capture the reason for a missing follow-up date when it is documented: a rush job, a template gap, a new salesperson, or a customer who asked not to be contacted. Do not infer a reason from an empty field. If the reason is unknown, mark it unknown and report the count. A guessed reason hides the process step that actually needs repair.",
      "Record the number of follow-up attempts and the channel used. One attempt by email is different from a call and a written summary. Note whether the business has a written follow-up rule and whether it was followed. A rule that exists but is never used is a different finding from no rule at all.",
      "Section: Sampling and collection",
      "Collect every estimate in the window rather than a sample, because the follow-up rule applies to each one. If the business has several salespeople or locations, collect each separately and record the group. A combined rate can hide one group with a persistent problem. Report the number of estimates and the total value behind every percentage.",
      "Draw dates from the estimate system and the customer record, not from a spreadsheet maintained after the fact. If the record is incomplete, say so and reduce the claim. Record the export date, the filters, and any estimate that could not be matched to a customer. A missing record is itself a finding about the process.",
      "Ask the sales lead to identify weeks when a large job or a holiday shortened the follow-up window. Those weeks can produce missing dates that have nothing to do with the rule. Record the event and analyze those estimates separately. The reader should be able to tell whether the rate reflects the process or the calendar.",
      "Section: Analysis and reporting",
      "Report the share of estimates sent without a follow-up date, the share without a named owner, and the share with no recorded contact. Show the median and range of days to first contact. Present the results by salesperson, customer type, and week. Use the same denominator for every rate.",
      "Separate estimates that received no contact from estimates where the customer replied first. A missing business follow-up is a process gap, while a customer reply is an answer that still needs a next step. Report both because they lead to different fixes. A business may accept a customer-driven pause but should not accept silence without a decision.",
      "Inspect the largest estimates with no follow-up and describe which stage failed without naming the customer. A template gap, a handoff error, and a busy week each point to a different repair. Compare the delay with the estimate value and the expiry date. Report versions with incomplete dates rather than dropping them from the denominator.",
      "Section: Limits of the evidence",
      "The record can show whether a date was entered, but it cannot show whether the salesperson intended to follow up. A date entered by a template may not reflect a real plan. The protocol also cannot capture a conversation that was never logged. State that limitation before presenting the rate.",
      "A small business may have too few estimates to support a stable trend. Describe the estimate count and the value instead of ranking salespeople. If one owner sends every estimate, the result may reflect that person's availability more than the process design. Do not use the rate as a performance score without the context of seasonality and staffing.",
      "Do not compare a business that follows up on every estimate with one that waits for the customer to return. The two operate different processes even when the missing-date rate looks similar. Report the follow-up rule beside the rate. A target that can be met by sending automated messages nobody reads is not a good target.",
      "Section: What to change",
      "Give the result to the owner and the sales lead and ask them to choose one observable change. The change might be a required follow-up date in the template, a named owner at send time, a weekly review, or a shorter estimate expiry. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If the missing-date rate falls but the no-contact rate stays high, the field may be filled without a real follow-up. If both fall but revisions rise, the team may be reworking estimates instead of answering the customer. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the salesperson which estimate was hardest to follow up and why. A concrete answer often reveals an unclear scope, a missing decision maker, or a price question that nobody could answer. Use that answer to improve the template rather than to blame the salesperson. The next measurement should test whether the same gap shrank."
    ],
    "takeaways": [
      "Measure each estimate version, including revisions, from the moment it is sent.",
      "Require a named owner and a dated follow-up before the estimate leaves the business.",
      "Separate missing business follow-up from a customer who replied first.",
      "Choose one change and repeat the protocol with the same definitions."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, marketing and sales",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/grow-your-business/marketing-sales",
        "checked": "2026-11-16"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-16"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-16"
      },
      {
        "title": "Federal Trade Commission, advertising and marketing guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing",
        "checked": "2026-11-16"
      }
    ],
    "related": [
      "what-share-of-customer-deletion-requests-close-within-the-stated-window",
      "how-often-do-vendor-tax-records-arrive-with-a-missing-classification"
    ]
  },
  {
    "slug": "what-share-of-warranty-claims-arrive-without-proof-of-purchase",
    "title": "What share of warranty claims arrive without proof of purchase?",
    "excerpt": "A protocol for measuring how many warranty claims lack proof of purchase and how long alternative evidence takes to resolve.",
    "published": "2026-11-16",
    "imagePath": "/thumbnails/november-16/what-share-of-warranty-claims-arrive-without-proof-of-purchase.png",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of warranty claims arrive without proof of purchase at the moment the claim is opened. The unit is one claim, not one product and not one customer. The study measures the share with no receipt or order record, the time to find alternative evidence, and the claims that close without a documented purchase link. It does not judge whether the product failure was covered by a warranty.",
      "Set the scope to one business, one claim intake route, and one warranty policy. Record the policy version and the evidence the policy accepts. If the policy changes during the window, keep the original rule for claims already opened and analyze later claims separately. A new intake form can change the evidence collected without changing the underlying failure rate.",
      "Define the population as every warranty claim opened during the window, including claims that were denied and claims that were withdrawn. State any exclusion, such as a goodwill repair with no warranty claim, and apply it to every claim. Test the definition on ten closed claims before collection begins. The reader should be able to rebuild the population from the claim log.",
      "Section: Definitions that make the measure reproducible",
      "Define proof of purchase as a receipt, an order record, a payment record, or another document that connects the customer to the specific product. Define missing as no accepted evidence at the time the claim is opened. If evidence arrives later but before the claim closes, record it as late rather than missing. The distinction matters because a late document still leaves the claim exposed at intake.",
      "Record the serial number, the model, the purchase date, and the evidence type for each claim. If the customer provides a photo of a receipt, record the date it was received and whether the text was readable. Do not count a verbal statement that the item was purchased as proof. A clear definition keeps two reviewers from disagreeing about the same file.",
      "Use the same claim export for every month and keep the export timestamp beside the file. Record any claim taken by phone or chat that was entered later. If the business uses a vendor portal, record the portal and the date the vendor received the claim. A claim that exists only in a call summary cannot be counted reliably.",
      "Section: Evidence standard and data dictionary",
      "For each claim, capture the claim identifier, the customer identifier, the product, the model, the serial number, the purchase date, the evidence type, and the date the evidence arrived. Add the vendor claim number, the vendor response, and the remedy. Record whether the claim was approved, denied, or closed as goodwill. Keep the evidence file linked to the claim.",
      "Capture the reason for missing evidence when it is documented: a gift purchase, a lost receipt, a second-hand sale, or an online order with no accessible record. Do not infer a reason from an empty field. If the reason is unknown, mark it unknown and report the count. A guessed reason makes the intake look better than the evidence allows.",
      "Record the number of customer contacts and the channel used. A request sent on the day the claim opens is different from one sent after the repair is scheduled. Note whether the business has a written evidence rule and whether it was followed. A rule that exists but is never used is a different finding from no rule at all.",
      "Section: Sampling and collection",
      "Collect every claim in the window rather than a sample, because the evidence rule applies to each one. If the business has several stores or product lines, collect each separately and record the group. A combined rate can hide one group with a persistent problem. Report the number of claims and the claim value behind every percentage.",
      "Draw evidence dates from the claim system and the document store, not from a spreadsheet maintained after the fact. If the document store is incomplete, say so and reduce the claim. Record the export date, the filters, and any claim that could not be matched to evidence. A missing document is itself a finding about the intake process.",
      "Ask the service lead to identify weeks when a product recall or a large promotion increased claim volume. Those weeks can produce missing evidence that has nothing to do with the intake rule. Record the event and analyze those claims separately. The reader should be able to tell whether the rate reflects the process or the calendar.",
      "Section: Analysis and reporting",
      "Report the share of claims with no proof of purchase at intake, the share with evidence that arrived late, and the share that closed without a documented purchase link. Show the median and range of days to evidence. Present the results by store, product line, and intake channel. Use the same denominator for every rate.",
      "Separate claims that waited for the customer from claims that waited for the business to search its own records. A customer delay is a different finding from a records gap. Report both because they lead to different fixes. A business may accept a customer delay but should not accept a searchable order that nobody looked up.",
      "Inspect the largest claims with missing evidence and describe which stage failed without naming the customer. An intake gap, a lost document, and a second-hand sale each point to a different repair. Compare the delay with the claim value and the warranty period. Report claims with incomplete dates rather than dropping them from the denominator.",
      "Section: Limits of the evidence",
      "The record can show whether a document was attached, but it cannot show whether the document is genuine. A readable receipt can still belong to another purchase. The protocol also cannot capture a purchase that the customer proves in a conversation that was never documented. State that limitation before presenting the rate.",
      "A small business may have too few claims to support a stable trend. Describe the claim count and the product mix instead of ranking staff. If one owner reviews every claim, the result may reflect that person's availability more than the process design. Do not use the rate as a performance score without the context of seasonality and product changes.",
      "Do not compare a business that denies a claim without proof with one that accepts alternative evidence. The two operate different rules even when the missing rate looks similar. Report the evidence rule beside the rate. A target that can be met by denying every claim without a receipt is not a good target.",
      "Section: What to change",
      "Give the result to the owner and the service lead and ask them to choose one observable change. The change might be a required order lookup at intake, a customer evidence checklist, a vendor portal step, or a weekly review of open claims. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If the missing-evidence rate falls but the late-evidence rate rises, customers may be finding documents after the claim opens without a faster intake. If both fall but denials rise, the team may be enforcing the rule more strictly without improving the customer experience. Report the movements together before declaring success. Close the review when the owner accepts the finding and the next collection date is set.",
      "Ask the service lead which claim was hardest to verify and why. A concrete answer often reveals a gift purchase, a marketplace order, or a serial number that does not match the model. Use that answer to improve the intake rather than to blame the customer. The next measurement should test whether the same gap shrank."
    ],
    "takeaways": [
      "Measure evidence at claim intake, before the vendor or the repair team reviews it.",
      "Separate missing evidence from evidence that arrived late in the claim.",
      "Report claims that closed without a documented purchase link as an exposure.",
      "Choose one change and repeat the protocol with the same definitions."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, businessperson guide to federal warranty law",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law",
        "checked": "2026-11-16"
      },
      {
        "title": "Federal Trade Commission, advertising and marketing guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing",
        "checked": "2026-11-16"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-16"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-16"
      }
    ],
    "related": [
      "what-share-of-customer-estimates-go-out-without-a-follow-up-date",
      "how-often-do-new-hire-account-requests-wait-more-than-one-business-day"
    ]
  }
];
