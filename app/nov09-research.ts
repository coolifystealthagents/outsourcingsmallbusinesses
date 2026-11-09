export const nov09ResearchBatch = [
  {
    "slug": "how-long-does-a-new-virtual-assistant-take-to-clear-a-first-support-queue",
    "title": "How long does a new virtual assistant take to clear a first support queue?",
    "excerpt": "A protocol for measuring the time from a new assistant's first login to a cleared support queue, with stage times and the owner's review load.",
    "published": "2026-11-09",
    "imagePath": "/images/nov09/how-long-does-a-new-virtual-assistant-take-to-clear-a-first-support-queue.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how long a new virtual assistant takes to clear a first support queue after receiving access. The unit is one assistant on one small-business account, followed from the first working login to the first queue that meets the written completion rule. The study measures the time spent waiting for access, the time spent learning the queue, and the time spent clearing it. It does not judge the assistant's ability or the quality of the hiring process.",
      "Set the scope to one business, one support channel, and one queue definition. Record the tools, the message templates, the escalation rules, and the owner's review hours at the start. If the queue or the tools change during the window, keep the original definition for the assistant already in progress and analyze the later cohort separately. A new tool can make a later assistant look faster without any change in skill.",
      "Define the population as every assistant who starts on the account during the window and is expected to work the queue. Include assistants who leave before the first clear queue, because their absence is part of the result. Exclude assistants hired only for a project with no recurring queue, and state that exclusion. Test the unit definition on two recent onboarding records before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define the start as the first successful login to the support tool, not the contract date or the first training call. Define the queue as the set of conversations that were open at the start of the first shift and remain within the assistant's assigned channel. Define cleared as every conversation either answered, escalated with the required evidence, or closed under the written rule. A queue with unanswered messages is not cleared even if the count looks small.",
      "Record the time to first reply, the time to first correct escalation, and the time to the owner's first review. These stages show whether the delay comes from access, confidence, or the review step. A fast first reply that is later corrected is not a clean result, so record corrections separately. Do not count an automated acknowledgement as a first reply.",
      "Use the same queue export for the start and the end, and keep the export time beside each count. A queue that changes while the assistant works can make the start count unreliable. Record any conversations added during the shift and whether they belonged to the assigned channel. If the queue is shared with another person, record that person's work so the assistant is not credited or blamed for it.",
      "Section: Evidence standard and data dictionary",
      "For each assistant, capture the start date, the access date, the first shift, the queue count, and the cleared count. Add the number of messages, the number of escalations, and the number of corrections. Record the owner's review time and the number of questions the assistant asked. Keep the queue export and the review notes linked to the record.",
      "Record whether the assistant had a written playbook and a named buddy. The presence of a playbook is easy to check and often explains a faster start. If the buddy was unavailable, note the dates rather than treating the plan as delivered. A named buddy who never met the assistant is a plan, not a support.",
      "Capture the channel mix and the share of messages that required a policy exception. A queue heavy with refunds or escalations is harder than a queue of order-status questions. Report the mix beside the time so the reader does not compare unlike queues. A second reviewer should be able to rebuild the first shift from the record without reading every message.",
      "Section: Sampling and collection",
      "Draw the sample from the onboarding log, not from a list of successful hires. Include every assistant who started in the window, including those who needed extra review. Record the export date, the filters, and the number of records excluded. If the business has only a few hires, describe each case instead of computing a rate.",
      "Collect the queue count at the start and end of the first shift, and again at the end of the first week. A first shift can look clear while the backlog returns the next day. Record the number of conversations that were reopened after the first close. A reopened case is evidence that the clear rule was too loose or the answer was incomplete.",
      "Ask the owner to record the minutes spent reviewing the first shift. The review time is part of the onboarding cost and rarely appears in the assistant's timeline. A high review time may point to a missing template or an unclear escalation rule. Report the review time separately from the assistant's queue time.",
      "Section: Analysis and reporting",
      "Report the median and the range for access, first shift, first cleared queue, and first owner review. Show the counts by channel and by whether a playbook was present. Present the share of assistants who cleared the queue on the first shift and the share who needed a second. Use the same denominator for every rate and show records with incomplete times.",
      "Inspect the slowest cases and describe which stage dominated without naming the assistant. A long access stage may point to a missing client owner, while a long first shift may point to an unclear queue. Compare the result with the channel mix and the review load. Report assistants who left before a cleared queue separately so their timelines do not distort the medians.",
      "A useful additional view is the number of questions the assistant asked during the first shift. A high count can mean the playbook is incomplete, while a very low count can mean the assistant is guessing. Record the questions by topic and the answers that were reused. Use the pattern to improve the playbook before the next hire.",
      "Section: Limits of the evidence",
      "The record cannot show whether the assistant understood the business or merely followed a script. It can show only the sequence and duration of the gates. A fast cleared queue is not proof of good service, and a slow one is not proof of poor onboarding. The protocol also cannot capture informal help that moved the work forward without appearing in the ticket history.",
      "A small business may have too few hires to support a stable rate. Describe the cases and the queue sizes instead of ranking the assistants. If the queue is shared, the result may reflect the other person's work more than the new assistant's. State that limitation before presenting a comparison.",
      "Do not compare a queue cleared with an automated reply to one cleared with a human reply. The customer experience is different even when the timestamp looks the same. Report the automated share and the human share separately. A target that can be met by a bot is not a service target.",
      "Give the result to the owner and the support lead and ask them to choose one observable change. The change might be a pre-provisioned account, a shorter playbook, a named buddy, or a review slot on the first shift. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If access time fell but first-shift time did not, the bottleneck may have moved to the playbook or the review. If first-shift time fell but reopenings rose, the queue was cleared too loosely. Report the two movements together before declaring a success. Close the review when the owner accepts the finding and the next cohort is scheduled.",
      "Record whether the assistant was added to the queue before the first shift or only on the morning of the shift. A late addition can make the start time look earlier than the work actually began. Note the time the assignment appeared in the tool. That detail prevents a preparation delay from being counted as queue time.",
      "Ask the owner to name the one message the assistant should have escalated but did not. A missed escalation is more serious than a slow reply, because it may leave a customer without an answer. Record the case and the missing rule. Use it to improve the first-shift playbook rather than to blame the new hire.",
      "Ask the last two assistants which instruction was hardest to follow on the first shift. A concrete answer is more useful than a satisfaction score. Update the playbook with the missing case and the owner. The next measurement should test whether the change reduced the same delay."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-09"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-09"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-09"
      },
      {
        "title": "Federal Trade Commission, data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "2026-11-09"
      }
    ],
    "related": [
      "how-long-does-a-customer-onboarding-handoff-wait-for-the-owner",
      "what-share-of-weekly-cash-flow-reports-need-a-manual-correction"
    ]
  },
  {
    "slug": "what-share-of-small-business-calendar-requests-arrive-with-missing-details",
    "title": "What share of small-business calendar requests arrive with missing details?",
    "excerpt": "A protocol for measuring how often scheduling requests lack the date, the duration, the attendee, or the purpose needed to book them safely.",
    "published": "2026-11-09",
    "imagePath": "/images/nov09/what-share-of-small-business-calendar-requests-arrive-with-missing-details.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of calendar requests arrive without the details a small-business assistant needs to book them. The unit is one request for a new meeting, a change, or a cancellation, identified by the message or form that started it. The study measures the missing fields, the time to complete them, and the number of messages spent on clarification. It does not judge whether the meeting was necessary or whether the requested time was convenient.",
      "Set the scope to one business, one scheduling channel, and one calendar. Record the form, the inbox, and the chat channel through which requests arrive. If the business adds or removes a channel during the window, analyze the cohorts separately. A new form can reduce missing details without any change in the assistant's skill.",
      "Define the population as every request recorded during the window, including requests that were withdrawn or rescheduled. The unit is the request, not the meeting, because one meeting can generate several changes. Test the definition on two recent requests before collection begins. Record the test result so a later reader can see how the boundary was applied.",
      "Section: Definitions that make the measure reproducible",
      "Define a complete request as one that names the date, the start time, the duration, the time zone, the attendees, and the purpose. A request with a date but no duration is not complete, because the assistant cannot safely book it. A request that names a person but not an email address is also incomplete if the invitation needs an address. Write one positive and one boundary example for each field.",
      "Define the request time as the moment the message or form was recorded, not the moment the assistant read it. Define clarified as the point when all required fields are present and the assistant has enough to book. Define booked as the point when the invitation is sent and the calendar shows the event. Define confirmed as the point when the key attendee accepts or the owner approves.",
      "Record the channel, the requester, the meeting type, and whether the request was internal or external. A recurring internal stand-up and a customer kickoff have different evidence needs. A cancellation can be complete with only the event reference, so use a separate field list for it. Do not score a cancellation as incomplete because it lacks a purpose.",
      "Section: Evidence standard and data dictionary",
      "For each request, capture the raw message, the fields present, the fields missing, and the time each missing field arrived. Record the number of messages sent to clarify and the person who supplied the answer. Add whether the assistant booked from the first message or had to wait. Keep the message thread with the record so the classification can be checked.",
      "Record the meeting type, the number of attendees, and whether the request involved a customer. A large external meeting may need a room, a link, and an agenda, while a one-to-one call may need only a link. The required fields should follow the meeting type, not a single universal list. State the required list in the scope so the reader can reproduce the count.",
      "A second reviewer should be able to rebuild the request and the booking from the record. If they need to read every message to find the date, the data dictionary is incomplete. Test the record on three requests before scaling the collection. Record the result of that test.",
      "Section: Sampling and collection",
      "Draw the sample from the scheduling log and the inbox, not from a list of meetings that were booked successfully. Include requests that were abandoned, because they may be the most incomplete. Record the export date, the filters, and the number of records excluded. If the population is large, use a fixed interval across the window.",
      "Collect the request as it existed at the time, not after a later cleanup. If a missing field was added days later, record the addition date and analyze the original delay separately. Do not infer a request from a calendar event that has no matching message. Note the collection date separately from the request date.",
      "Record the assistant's shift and the owner's availability during the request. A request that arrives when nobody can approve a room may wait for reasons unrelated to the requester. Add the office holiday calendar and the time zone difference. These fields help separate a missing-detail problem from a coverage problem.",
      "Section: Analysis and reporting",
      "Report the number of requests, the share missing each field, and the median time to a complete request. Show the counts by channel, meeting type, and internal or external requester. Present the share booked from the first message and the share that needed clarification. Use the same denominator for every rate and show requests with incomplete times.",
      "Inspect the most common missing field and describe the context without naming the requester. A missing duration may point to a form that does not ask for it, while a missing attendee may point to a habit. Compare the result with the channel and the meeting type. Report abandoned requests separately so their timelines do not distort the booked cases.",
      "A useful additional view is the time from the complete request to the sent invitation. A complete request that sits for a day is a different problem from an incomplete one. Show the clarification time and the booking time side by side. That view tells the owner whether to fix the request form or the assistant's queue.",
      "Section: Limits of the evidence",
      "The record cannot show whether the meeting was useful or whether the time suited everyone. It can show only the fields, the messages, and the booking times. A fast booking is not proof of good coordination, and a slow one is not proof of neglect. The protocol also cannot capture a meeting arranged in a hallway conversation that was never logged.",
      "A small business may have too few requests in a month to support a stable share. Describe the counts and the cases instead of ranking a channel. If one requester dominates the sample, report that concentration. Do not present a general rate when one person supplied half the requests.",
      "A request that is complete but ambiguous can still produce a bad booking. The field count does not measure clarity, so add a short note when the assistant had to interpret the purpose. Record the interpretation and whether the requester corrected it. That note is qualitative evidence that the field list alone cannot provide.",
      "Give the result to the owner and the assistant and ask them to choose one observable change. The change might be a required duration field, a default meeting length, a booking link, or a short request template. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If missing details fell but booking time did not, the queue may have become the bottleneck. If booking time fell but reschedules rose, the first booking may have been too quick. Report the two movements together before declaring a success. Close the review when the owner accepts the finding and the next cohort is scheduled.",
      "Record whether the request arrived through a template, a free-text message, or a booking link. A template can require fields that a free-text message never asks for. Report the share by input method so the owner can see whether the form is doing its job. A low missing rate on a form may simply mean the form is longer.",
      "Ask the assistant how often they guessed a duration or a time zone to keep the booking moving. A guess that is not recorded is invisible in the missing-field count. Record the guess and whether the requester corrected it. That evidence shows whether speed is being bought with silent assumptions.",
      "Ask the last five requesters whether the booking process asked for the right information. A requester who had to repeat a detail is a direct signal. Record the answer and the point in the process where the repetition occurred. Use the finding to simplify the form rather than add another field."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-09"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-09"
      },
      {
        "title": "Federal Trade Commission, data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "2026-11-09"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-09"
      }
    ],
    "related": [
      "how-long-does-a-new-virtual-assistant-take-to-clear-a-first-support-queue",
      "how-often-do-assistant-run-shops-miss-a-supplier-delivery-date-update"
    ]
  },
  {
    "slug": "how-often-do-assistant-run-shops-miss-a-supplier-delivery-date-update",
    "title": "How often do assistant-run shops miss a supplier delivery-date update?",
    "excerpt": "A protocol for measuring delivery-date changes that never reach the order record, the customer message, or the inventory plan.",
    "published": "2026-11-09",
    "imagePath": "/images/nov09/how-often-do-assistant-run-shops-miss-a-supplier-delivery-date-update.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a supplier delivery-date change fails to reach the people and records that depend on it. The unit is one purchase order with a supplier-confirmed delivery date that changed during the window. The study measures whether the change reached the order record, the customer message, and the inventory plan. It does not judge whether the supplier was right to change the date.",
      "Set the scope to one shop, one supplier group, and one ordering system. Record the channels through which a supplier can send a change, such as email, portal, phone, or a delivery note. If the shop changes its ordering system during the window, analyze the cohorts separately. A new portal can reduce missed updates without any change in the assistant's routine.",
      "Define the population as every purchase order with at least one confirmed date change during the window. Include orders that were cancelled after the change, because the cancellation may depend on the new date. Exclude orders that never had a confirmed date, and state that exclusion. Test the definition on three recent orders before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define the change time as the moment the supplier sent the new date, not the moment the assistant read it. Define recorded as the point when the order record shows the new date and the source of the change. Define communicated as the point when the customer who depends on the order received the new date. Define planned as the point when the inventory or fulfilment plan reflects the new date.",
      "A change that reaches the order record but not the customer is not a full update. A change that reaches the customer but not the inventory plan can still cause a stock-out. Record each destination separately so the result shows where the break occurred. Do not collapse the three into one pass or fail.",
      "Record the supplier, the order value, the original date, the new date, and the number of days moved. A one-day slip and a three-week slip have different consequences. Add whether the order was for stock, a customer, or internal use. The required evidence differs by order type, so state the list beside each type.",
      "Section: Evidence standard and data dictionary",
      "For each order, capture the supplier message, the order number, the old date, the new date, and the date the message arrived. Record the time the order record was updated and the person who updated it. Add the time the customer was told and the time the inventory plan changed. Keep the supplier message with the record so the source can be checked.",
      "Record whether the supplier sent the change proactively or only after the assistant asked. A proactive change is a different signal from one discovered during a chase. Note the channel and whether the message was addressed to the right person. A change sent to a shared inbox with no owner is easy to miss.",
      "A second reviewer should be able to rebuild the timeline from the record without reading every email. If they cannot find the old date, the dictionary is incomplete. Test the record on three orders before scaling the collection. Record the result of that test and any field that had to be added.",
      "Section: Sampling and collection",
      "Draw the sample from the purchase-order log, not from a list of late deliveries. A late-delivery list overrepresents the misses and hides the changes that were handled well. Record the export date, the filters, and the number of orders excluded. If the population is large, use a fixed interval across the window.",
      "Collect the supplier message as it existed at the time, not after a later cleanup. If the record was updated days later, note the update date and analyze the original delay separately. Do not infer a supplier change from a delivery note that arrived after the fact. Record the collection date separately from the change date.",
      "Record the assistant's shift and the supplier's contact hours. A change that arrives after the assistant leaves may wait for reasons unrelated to the routine. Add the shop's holiday calendar and the supplier's time zone. These fields help separate a missed update from a coverage gap.",
      "Section: Analysis and reporting",
      "Report the number of orders, the share recorded, the share communicated, and the share planned. Show the counts by supplier, order type, and channel. Present the median time from the supplier message to each destination. Use the same denominator for every rate and show orders with incomplete times.",
      "Inspect the orders where the change reached one destination but not the others. A break between the record and the customer message may point to a missing template. A break between the customer message and the inventory plan may point to a handoff gap. Describe the case without naming the assistant or the customer.",
      "A useful additional view is the number of times the assistant had to ask the supplier for the date. A high count may mean the supplier messages are unclear or the order record lacks a field. Show the count beside the missed-update rate. That view separates a supplier communication problem from an assistant follow-up problem.",
      "Section: Limits of the evidence",
      "The record cannot show whether the customer changed plans because of the new date or for another reason. It can show only the messages, the updates, and the timing. A fast update is not proof of good service, and a slow one is not proof of neglect. The protocol also cannot capture a date change agreed in a phone call that was never logged.",
      "A shop with a small number of orders cannot support a stable rate. Describe the orders and the size of the slips instead of ranking the supplier. If one supplier dominates the sample, report that concentration. A general rate would hide a single relationship problem.",
      "A change that is recorded but entered in the wrong field is still a miss for the reader. Add a short check for the date format and the field used. Record the correction and the time it took. That evidence points to a form or training problem rather than a reminder problem.",
      "Give the result to the owner, the assistant, and the supplier contact and ask for one observable change. The change might be a required date field in the order record, a supplier template, a daily date check, or a customer message template. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If recording improved but communication did not, the bottleneck may have moved to the customer message. If communication improved but planning did not, the inventory handoff may need a named owner. Report the stages together before declaring a success. Close the review when the owner accepts the finding and the next cohort is scheduled.",
      "Record whether the order record has a dedicated delivery-date field or only a note in the description. A note is easy to overwrite and hard to report on. If the system lacks a field, state that limitation in the scope. The missing field may explain more misses than the assistant\\'s routine.",
      "Ask the supplier whether they sent the change to the named contact or to a general inbox. A general inbox can be read by several people and still leave nobody responsible. Record the recipient and the channel. That detail separates a supplier habit from a shop process.",
      "Ask the assistant which supplier message was hardest to interpret. A concrete example is more useful than a general complaint. Add the example to the supplier template or the order guide. The next measurement should test whether the same confusion recurred. Record the date the supplier confirmed the new date so a later reviewer can check the update path. Add the name of the person who received the confirmation, because an unowned inbox is a common hiding place for a date change."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-09"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-09"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-09"
      },
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-09"
      }
    ],
    "related": [
      "what-share-of-small-business-calendar-requests-arrive-with-missing-details",
      "how-long-does-a-customer-onboarding-handoff-wait-for-the-owner"
    ]
  },
  {
    "slug": "how-long-does-a-customer-onboarding-handoff-wait-for-the-owner",
    "title": "How long does a customer onboarding handoff wait for the owner?",
    "excerpt": "A protocol for measuring the delay between a completed sale and the owner-approved onboarding start, with the customer waiting experience.",
    "published": "2026-11-09",
    "imagePath": "/images/nov09/how-long-does-a-customer-onboarding-handoff-wait-for-the-owner.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how long a customer onboarding handoff waits between the completed sale and the owner-approved start. The unit is one new customer engagement, identified by the agreement and the first onboarding task. The study measures the time to a complete handoff, the time to owner approval, and the time to the customer's first deliverable. It does not judge whether the sale was a good fit or whether the onboarding was well designed.",
      "Set the scope to one small business, one sales channel, and one service line. Record the handoff form, the approval rule, and the delivery calendar at the start. If the approval rule changes during the window, keep the original definition for customers already in progress and analyze the later cohort separately. A new approval threshold can look like a faster process when it is only a different rule.",
      "Define the population as every customer who signed during the window and was expected to start onboarding. Include customers who cancelled before the start, because their wait is part of the result. Exclude renewals and expansions that did not require a new onboarding, and state the exclusion. Test the definition on two recent customers before collection begins.",
      "Section: Definitions that make the measure reproducible",
      "Define the sale time as the moment the signed agreement or paid order was recorded. Define handoff complete as the point when the delivery owner has the scope, the contact, the promised date, and the access needed to start. Define owner approved as the recorded decision to begin, including any condition attached to it. Define first deliverable as the first item the customer accepts under the onboarding plan.",
      "Do not count an internal note that says sold as a completed handoff. Do not count a welcome email as the first deliverable unless the onboarding plan says so. A customer who paid but has no confirmed start date is still waiting, even if the sales team is celebrating. Record each definition with a positive and a boundary example.",
      "Record the service line, the contract value band, the promised start date, and the actual start date. A large engagement may need more approval, while a small one may follow a standard path. Add whether the customer needed custom access or a custom scope. These strata explain a wait that a single average would hide.",
      "Section: Evidence standard and data dictionary",
      "For each customer, capture the sale time, the handoff form time, the missing fields, the owner decision time, and the first deliverable time. Record the number of messages between the sale and the start and the person who supplied each missing item. Add whether the customer was told about the wait and when. Keep the handoff form and the approval note with the record.",
      "Record whether the handoff was complete on the first submission. A complete handoff names the scope, the contact, the promised date, and the access owner. A form that is missing one field can restart the whole approval clock. That restart should be visible in the timeline rather than hidden in the total.",
      "A second reviewer should be able to rebuild the path from the sale to the first deliverable. If they cannot find the promised date, the dictionary is incomplete. Test the record on three customers before scaling the collection. Record the test result and any field that had to be added.",
      "Section: Sampling and collection",
      "Draw the sample from the sales log, not from a list of customers who started smoothly. Include customers who waited, cancelled, or needed a second handoff. Record the export date, the filters, and the number of records excluded. If the population is large, use a fixed interval across the window.",
      "Collect the handoff as it existed at the time, not after a later cleanup. If a missing field was added days later, record the addition date and analyze the original delay separately. Do not infer a start date from the first invoice. Note the collection date separately from the sale date.",
      "Record the salesperson, the delivery owner, and the days each was unavailable. A handoff that waits for a person on leave is a coverage problem, not a form problem. Add the holiday calendar and the customer's time zone. These fields help separate the approval delay from the coverage gap.",
      "Section: Analysis and reporting",
      "Report the number of customers, the median time to handoff complete, the median time to approval, and the median time to first deliverable. Show the counts by service line, value band, and whether the handoff was complete on the first submission. Present the share that waited more than two business days at any stage. Use the same denominator for every rate and show records with incomplete times.",
      "Inspect the slowest cases and describe which stage dominated without naming the customer. A wait before handoff complete may point to a missing sales field, while a wait after that may point to an owner who is unavailable. Compare the result with the contract value band and the custom scope flag. Report cancelled customers separately so their timelines do not distort the approved cases.",
      "A useful additional view is the time from approval to the customer's first message. A fast approval that is not communicated does not reduce the customer's wait. Show the communication delay beside the approval delay. That view helps the owner fix the notification step rather than adding another approver.",
      "Section: Limits of the evidence",
      "The record cannot show whether the customer was satisfied with the wait or whether the scope was right. It can show only the sale, the handoff, the approval, and the first deliverable. A fast start is not proof of good onboarding, and a slow one is not proof of neglect. The protocol also cannot capture a handoff that happened in a conversation and was never logged.",
      "A small business may have too few new customers to support a stable rate. Describe the cases and the wait lengths instead of ranking the sales channel. If one salesperson dominates the sample, report that concentration. A general rate would hide a single handoff problem.",
      "A handoff that is complete but approved with conditions is not the same as a clean approval. Record the conditions and the date they were met. A conditional approval that is treated as final can start work before access is ready. That evidence points to an approval problem, not a form problem.",
      "Give the result to the owner, the sales lead, and the delivery lead and ask for one observable change. The change might be a required handoff field, a named backup approver, a weekly approval slot, or a welcome message that states the start date. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If handoff time fell but approval time did not, the bottleneck may have moved to the owner. If approval time fell but first-deliverable time did not, the delivery capacity may be the constraint. Report the stages together before declaring a success. Close the review when the owner accepts the finding and the next cohort is scheduled.",
      "Record whether the salesperson stayed available during the handoff or moved to the next deal. A handoff that depends on a person who has already left the conversation often waits for a small question. Note the salesperson\\'s availability window. That field helps separate an approval delay from a coverage gap.",
      "Ask the delivery owner what they check first when a handoff arrives. If the first check is the promised date, a missing date blocks everything else. If the first check is access, a missing account blocks the start even when the scope is clear. Record the order of checks and use it to set the required fields.",
      "Ask the last five customers whether they knew when onboarding would start. A clear expectation reduces follow-up messages even when the wait is unavoidable. Record the answer and the point where the expectation was set. Use the finding to improve the first message, not to add another approval step."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-09"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-09"
      },
      {
        "title": "Federal Trade Commission, consumer protection guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-09"
      },
      {
        "title": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checked": "2026-11-09"
      }
    ],
    "related": [
      "how-long-does-a-new-virtual-assistant-take-to-clear-a-first-support-queue",
      "what-share-of-weekly-cash-flow-reports-need-a-manual-correction"
    ]
  },
  {
    "slug": "what-share-of-weekly-cash-flow-reports-need-a-manual-correction",
    "title": "What share of weekly cash-flow reports need a manual correction?",
    "excerpt": "A protocol for measuring corrections in a small-business cash-flow report, with the source, the stage, and the owner decision affected.",
    "published": "2026-11-09",
    "imagePath": "/images/nov09/what-share-of-weekly-cash-flow-reports-need-a-manual-correction.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of weekly cash-flow reports need a manual correction before the owner can use them. The unit is one weekly report for one business, identified by the reporting date and the version. The study measures the number of corrections, the stage where each was found, and whether the correction changed an owner decision. It does not judge whether the owner made the right decision with the report.",
      "Set the scope to one business, one reporting template, and one source system. Record the accounts included, the reserve rules, and the approval thresholds at the start. If the template or the source changes during the window, analyze the cohorts separately. A new template can reduce corrections without any change in the underlying data.",
      "Define the population as every weekly report issued during the window, including reports that were corrected before or after the owner read them. The unit is the report, not the correction, because one report can contain several errors. Test the definition on two recent reports before collection begins. Record the test result and the boundary cases.",
      "Section: Definitions that make the measure reproducible",
      "Define a correction as a change to a number, a label, a date, or a classification after the first draft was shared. A formatting change that does not alter meaning is not a correction. A change made before the report was shared is a draft edit, not a correction. Record the sharing time so the two can be separated.",
      "Define the report as shared when it reaches the owner through the agreed channel, not when it is saved. Define the owner decision as the recorded choice to pay, delay, hold, or investigate. Define a decision change as a reversal or material change after a correction. Record the original and the revised decision so the effect is visible.",
      "Record the report date, the preparer, the reviewer, and the time the report was shared. Add whether the report was prepared from the live system or a downloaded file. A downloaded file can be stale before the report is finished. Note the source and the export time beside the report.",
      "Section: Evidence standard and data dictionary",
      "For each correction, capture the field, the original value, the corrected value, the person who found it, and the time it was found. Record whether the correction came from a bank feed, an invoice, a supplier message, or the owner's memory. Add the stage: draft, owner review, or after a decision. Keep the draft and the final version so the change can be checked.",
      "Record whether the correction changed the cash available, the committed amount, or the open risk line. A correction to a label may matter less than a correction to the reserve calculation. Classify the correction by its effect so the count is not dominated by cosmetic edits. A second reviewer should be able to rebuild the report from the record.",
      "Record the time spent finding and fixing each correction. The time is part of the cost even when the final number is right. Add the number of people involved and whether the owner had to answer a question. A correction that pulls the owner into the detail defeats the purpose of the report.",
      "Section: Sampling and collection",
      "Draw the sample from the report archive, not from a list of reports the owner liked. Include reports that were corrected, delayed, or replaced. Record the export date, the filters, and the number of reports excluded. If the archive is incomplete, state the gap rather than filling it from memory.",
      "Collect the report as it existed at the time, not after a later cleanup. If a value was fixed days later, record the fix date and analyze the original delay separately. Do not infer a correction from a bank transaction that was later reclassified. Note the collection date separately from the report date.",
      "Record the preparer's shift, the owner's review time, and any system outage. A report prepared during an outage may have more corrections for reasons outside the preparer's control. Add the holiday calendar and the payroll week. These fields help separate a data problem from a staffing problem.",
      "Section: Analysis and reporting",
      "Report the number of reports, the share with at least one correction, and the median number of corrections per report. Show the counts by field, stage, and effect on a decision. Present the median time spent on corrections and the share found after the owner read the report. Use the same denominator for every rate and show reports with incomplete records.",
      "Inspect the reports with the most corrections and describe the source without naming the preparer. A cluster in the reserve line may point to a rule change, while a cluster in supplier payments may point to a missing approval. Compare the result with the payroll week and the system outage flag. Report reports that were replaced entirely separately.",
      "A useful additional view is the number of corrections the owner found personally. An owner who finds errors at review is spending time on quality control instead of decisions. Show the owner-found share beside the preparer-found share. That view helps the business decide whether to fix the source or add a review step.",
      "Section: Limits of the evidence",
      "The record cannot show whether the report was useful or whether the decision was correct. It can show only the corrections, the timing, and the recorded decisions. A report with no corrections is not proof of accuracy if nobody checked it. The protocol also cannot capture a correction made verbally and never written down.",
      "A small business may have too few weekly reports to support a stable share. Describe the reports and the correction types instead of ranking the preparer. If one week dominates the sample, report that concentration. A general rate would hide a single payroll event.",
      "A correction that is made before the owner reads the report may still be a quality problem. Record the draft edit separately so it is visible without inflating the owner-facing rate. A high draft-edit count may point to a source that is hard to use. That evidence should lead to a source fix, not a longer review.",
      "Give the result to the owner and the preparer and ask them to choose one observable change. The change might be a required source field, a cash rule written in the template, a second review before sharing, or a different export time. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "If corrections fell but review time did not, the report may still be hard to read. If review time fell but decision changes rose, the report may be hiding uncertainty. Report the two movements together before declaring a success. Close the review when the owner accepts the finding and the next cohort is scheduled.",
      "Record whether the preparer had access to the live bank feed or only to a downloaded statement. A statement that is a day old will produce corrections that the live feed would have prevented. Note the source and the time of the last refresh. That detail separates a skill problem from a data-access problem.",
      "Ask the owner which correction changed their decision and which one only changed the presentation. A presentation fix can wait, while a decision-changing error needs a source control. Record both and report them separately. A single correction count treats a typo and a wrong reserve as the same event.",
      "Ask the preparer which number was hardest to source and why. A concrete answer is more useful than a general complaint about the bank feed. Fix that source or add the missing guidance to the template. The next measurement should test whether the same correction recurred. Note the date each correction was made so a later reader can see the sequence. Add the source refresh time so the owner knows whether the report used live data."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-09"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-09"
      },
      {
        "title": "Association of Certified Fraud Examiners, fraud resources",
        "publisher": "Association of Certified Fraud Examiners",
        "url": "https://www.acfe.com/fraud-resources",
        "checked": "2026-11-09"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-09"
      }
    ],
    "related": [
      "how-often-do-assistant-run-shops-miss-a-supplier-delivery-date-update",
      "how-long-does-a-customer-onboarding-handoff-wait-for-the-owner"
    ]
  }
];
