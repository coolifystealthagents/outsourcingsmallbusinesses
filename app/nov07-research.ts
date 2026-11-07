export const nov07ResearchBatch = [
  {
    "slug": "how-long-do-supplier-bank-detail-changes-wait-for-independent-verification",
    "title": "How long do supplier bank-detail changes wait for independent verification?",
    "excerpt": "A protocol for measuring the delay between a supplier bank-detail change and the independent check that confirms it.",
    "published": "2026-11-07",
    "imagePath": "/images/nov07/how-long-do-supplier-bank-detail-changes-wait-for-independent-verification.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how long a supplier bank-detail change waits between the request and an independent verification. The unit is one change request for one supplier record, identified by the supplier's legal name and the account being replaced. The study measures the time to first contact, the time to a completed check, and whether the change was applied before the check finished. It does not judge whether the supplier's new account was legitimate.",
      "Set the scope to one small business, one vendor master, and one accounts-payable process. Record the systems that can receive a change request and the people who may approve one. If the process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new callback rule can look like a faster check when it is only a new step.",
      "Section: Population and unit of analysis",
      "Define the population as every bank-detail change request that reached the business during the window, including requests that were withdrawn, rejected, or never completed. The unit is the request, not the supplier, because one supplier can request several changes. A request that is forwarded to another team remains one unit with a handoff interval. A second request for the same account is a separate unit linked to the first.",
      "Record the supplier category, the spend band, and whether the supplier is new or established. These strata matter because a new supplier and a long-standing supplier carry different fraud risks. Include requests that arrived through a sales contact rather than the finance inbox, because the base rate is part of the finding. Test the unit definition on two ordinary requests before collection begins.",
      "A supplier can send a change from a personal address while the contract names a company domain. Record both the sending address and the domain on file so a later reviewer can see the mismatch. A request that cannot be matched to a supplier record is still a unit, but it should be labeled unmatched. Do not silently drop it, because unmatched requests are often the ones that matter.",
      "Section: Definitions that make the measure reproducible",
      "Define the start time as the moment the request was recorded in the change log, not the time it was first mentioned in a call. Define the first contact as the first outbound attempt to a phone number the business already had, not a number supplied in the request. Define a completed check as a conversation with a known contact who confirms the change. Define a late check as one completed after the business's stated verification window.",
      "Do not count an email reply as independent verification when it goes to the address that requested the change. Do not count an internal note as a verification attempt. A request that was applied and later reversed should keep both dates. Each definition should include a positive example and a boundary example so a second reviewer can apply it the same way.",
      "Section: Evidence standard and data dictionary",
      "For each request, capture the supplier name, the old account, the new account, the requester, and the channel used. Add the time the request was logged, the time of the first outbound call, the person who made it, and the number dialed. Record whether the call reached a person, a voicemail, or no answer. Keep the call log with the change record rather than in a separate system.",
      "Also capture whether the request was applied, who applied it, and whether the verification came before or after the change. Record any document the supplier provided and whether it was checked against an independent source. If the request was rejected, record the reason. A second reviewer should be able to rebuild the timeline from the change record and the call log.",
      "If the business uses a callback form, keep the completed form with the request. A form without the number dialed and the person reached is only a claim that someone called. Record the device or line used for the callback when the team has more than one. The evidence should show independence, not just activity.",
      "Section: Sampling and collection",
      "Draw the sample from the change log rather than from a list of suspected fraud. Record the export date, the filters, the row count, and the selection rule. Include requests from every channel and every day of the week so the result is not dominated by one busy period. If the population is ordered by time, a fixed interval spreads the sample across the window.",
      "Collect the request and the verification as they existed at the time, not as they look after a later cleanup. If a note was added days later, record the addition date and analyze the original delay separately. Do not infer a verification from a change that was later reversed. Note the collection date separately from the request date.",
      "Section: Analysis and reporting",
      "Report the number of requests, the share verified within the stated window, the share verified later, and the share applied without a completed check. Show the counts by channel, supplier type, and spend band. Present the median time to first contact and the median time to completed verification. Use the same denominator for every rate.",
      "Inspect the requests that were applied before verification and describe the pattern without naming the supplier or the employee. A cluster on one channel may point to a missing rule, while a cluster at month end may point to pressure to pay. Compare the result with the day of week, because a Friday request has fewer business hours before the window closes. Report after-hours requests separately.",
      "A useful additional view is the share of requests that were verified but never logged as complete. A callback without a recorded outcome can leave the record looking late when the work was done. Show the closure rate beside the verification rate and describe the difference. That view helps the owner decide whether the problem is speed or documentation.",
      "Report the result in a short table with one row per channel and one column per measure so the owner can compare like with like. Add a sentence that states the denominator and the sample window beneath the table. A reader should not have to reconstruct either from the prose. Keep the raw counts available so a later review can test a different cut.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the person who answered the callback was authorized to confirm the change. It can show only that a call was made and what was recorded. A fast verification is not proof of a good control, and a late one is not proof of fraud. The protocol also cannot capture a check performed through a channel the business does not log.",
      "Phone systems can mislabel the time zone, drop a call attempt, or record a duration without a connected party. A request that appears unverified may have been checked through a conversation that was never noted. Record those cases and their treatment instead of dropping them silently. If the same person requests and verifies a change, note the independence limitation and analyze that subgroup separately.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the person who manages the vendor master and ask them to choose one observable change. The change might be a required callback to a number already on file, a named verifier, or a hold on every change until the check is complete. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the verification window and the approval role at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If the verification time fell but the share applied before verification did not, the team may be calling faster without waiting for the result. If the share improved but the closure rate fell, the new step may be adding work without a record. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-07"
      },
      {
        "title": "NIST Cybersecurity Framework 2.0",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-07"
      }
    ]
  },
  {
    "slug": "what-share-of-damaged-order-claims-include-a-usable-photo-and-order-reference",
    "title": "What share of damaged-order claims include a usable photo and order reference?",
    "excerpt": "A protocol for measuring claim evidence quality, with clear tests for a usable photo, a linked order, and a recorded delivery condition.",
    "published": "2026-11-07",
    "imagePath": "/images/nov07/what-share-of-damaged-order-claims-include-a-usable-photo-and-order-reference.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of damaged-order claims include a usable photo and a reference that links the damage to an order. The unit is one claim, identified by the order number and the date the claim was opened. The study measures whether the claim has a readable order label, a clear image of the damage, and a recorded delivery condition. It does not evaluate whether the customer deserved a refund or replacement.",
      "Set the scope to one small business, one order system, and one claims queue. Record the channels that can receive a claim and the people who may approve one. If the photo requirements change during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new intake form can look like better evidence when it is only a new field.",
      "Section: Population and unit of analysis",
      "Define the population as every damaged-order claim opened during the window, including claims that were denied, withdrawn, or closed without a payment. The unit is the claim, not the customer, because one customer can claim several orders. A claim that is reopened remains one unit with a reopen date. A second claim for the same order is a separate unit linked to the first.",
      "Record the order value, the carrier, the product category, and whether the customer or the team supplied the photos. These strata matter because a low-value claim and a high-value claim carry different evidence needs. Include claims that arrived through a phone call rather than the web form, because the base rate is part of the finding. Test the unit definition on two ordinary claims before collection begins.",
      "A customer can send a photo of a damaged item without the packaging and a second photo of the packaging without the item. Record the set as one claim and note which views are missing. Do not treat each photo as a separate unit, because that would reward the customer who sends many similar images. The unit is the claim, and the evidence is a property of the claim.",
      "Section: Definitions that make the measure reproducible",
      "Define a usable photo as one in which the damage is visible and the image is in focus at normal viewing size. Define a linked order as a claim that shows an order number that exists in the order system and matches the customer. Define a recorded delivery condition as a note about how the package was received, including who received it. Define an incomplete claim as one missing any of those three elements.",
      "Do not count a photo of a product catalog image as evidence of damage. Do not count a claim that only quotes the customer's description as linked unless the order number is recorded. A claim that was approved without the required evidence is still incomplete for this measure. Each definition should include one positive example and one boundary example so a second reviewer can apply it consistently.",
      "Section: Evidence standard and data dictionary",
      "For each claim, capture the order number, the customer, the claim date, and the channel. Add the number and type of photos, whether the label is readable, whether the damage is visible, and whether a delivery note exists. Record the decision, the amount, and the reason. Keep the photos with the claim record rather than in a chat thread.",
      "Also capture who took each photo and whether the customer confirmed the packaging was kept. Record any missing view and whether it was requested later. If the claim was denied, record the specific reason and the evidence that was absent. A second reviewer should be able to reach the same evidence assessment from the record.",
      "If the business uses a template for customer photo requests, keep the version that was sent with the claim. A template that was updated after the claim can make the intake look better than it was. Record the date the template was used. The evidence should describe the claim as it arrived, not as it was later repaired.",
      "Section: Sampling and collection",
      "Draw the sample from the claims queue rather than from a list of complaints. Record the export date, the filters, the row count, and the selection rule. Include claims from every channel and every product category so the result is not dominated by one promotion. If the population is ordered by time, a fixed interval spreads the sample across the window.",
      "Collect the photos and the claim record as they existed when the claim was decided. If a customer sent a better photo after the decision, record the addition date and analyze the original evidence separately. Do not infer a delivery condition from the carrier's tracking alone. Note the collection date separately from the claim date.",
      "Record the order value from the order system rather than from the claim message. A customer may round an amount or describe a replacement cost that differs from the invoice. Use the same source for every claim so the value bands are comparable. If the order was discounted, record the amount actually paid and the list price separately.",
      "Section: Analysis and reporting",
      "Report the number of claims, the share with a usable photo, the share with a linked order, and the share with all three elements. Show the counts by channel, product category, and claim value. Present the share approved and the share denied, with the evidence status beside each. Use the same denominator for every rate.",
      "Inspect the incomplete claims and describe the pattern without naming the customer or the employee. A cluster in one channel may point to a missing intake question, while a cluster in one product category may point to packaging. Compare the result with the day of week, because a weekend claim may be handled by a different team. Report the claims that were reopened separately.",
      "A useful additional view is the share of claims where the missing evidence was requested but never received. That view separates an intake design problem from a customer follow-through problem. Show it beside the completeness rate and describe the difference. The owner can then decide whether to change the template or the follow-up rule.",
      "Report the evidence status separately for claims that were decided within one day and claims that took longer. A fast decision on an incomplete claim is a different risk from a slow decision on a complete one. Add the median time to decision beside each group so the reader can see the trade-off. Keep the decision reason in the raw data for any later review.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the damage happened before or after delivery. It can show only what the customer photographed and what the team recorded. A clear photo is not proof of a valid claim, and a missing photo is not proof of a false one. The protocol also cannot capture a claim that was resolved in a phone call and never entered in the queue.",
      "Photos can be cropped, filtered, or taken after the item was moved. A label can be readable while belonging to a different order. Record those risks and the treatment rather than assuming the evidence is honest. If the same person approves the claim and takes the photos, note the independence limitation and analyze that subgroup separately.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the person who runs the claims queue and ask them to choose one observable change. The change might be a required wide photo, an order-number field on the intake form, or a delivery-condition question. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the approval limit at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If completeness rose but the approval rate did not, the new evidence may not be the constraint. If approvals rose but denials became less consistent, the team may be relaxing the standard. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "referenceSources": [
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-07"
      },
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-07"
      }
    ]
  },
  {
    "slug": "how-often-do-support-macros-cite-a-policy-version-that-is-no-longer-current",
    "title": "How often do support macros cite a policy version that is no longer current?",
    "excerpt": "A protocol for auditing saved replies against the current policy register, with a test for stale wording, missing versions, and untested macros.",
    "published": "2026-11-07",
    "imagePath": "/images/nov07/how-often-do-support-macros-cite-a-policy-version-that-is-no-longer-current.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a saved reply cites a policy version that the business has retired. The unit is one saved reply in the support tool, identified by its name and the queue where it is available. The study measures whether the reply names a policy, whether that policy is current, and whether the reply was tested after the last policy change. It does not evaluate whether the reply is well written or whether customers like it.",
      "Set the scope to one small business, one support tool, and one policy register. Record the sources that define the current version and the people who may update a saved reply. If the policy register changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new policy page can look like a clean register when it is only a new document.",
      "Section: Population and unit of analysis",
      "Define the population as every saved reply available to the support queue during the window, including replies that are rarely used and replies that are disabled but still stored. The unit is the saved reply, not the policy, because one policy can appear in several replies. A reply that is copied into another tool remains one unit with a note about the copy. A reply that is split into two shorter replies creates two units after the split date.",
      "Record the queue, the product area, and whether the reply is customer-facing or internal. These strata matter because an internal note and a customer message carry different risks. Include replies created outside the normal review process, because the base rate is part of the finding. Test the unit definition on two ordinary replies before collection begins.",
      "A reply can quote a policy without naming its version, which makes staleness harder to detect. Record the exact wording that carries the rule and the policy it appears to reference. A reply that cannot be matched to any policy is still a unit, but it should be labeled unmatched. Do not drop unmatched replies, because they are often the oldest.",
      "Section: Definitions that make the measure reproducible",
      "Define a policy-citing reply as one whose customer-facing text states a rule, a limit, a deadline, or an eligibility condition. Define the current version as the version marked effective in the policy register on the sample date. Define a stale reply as one that states a rule from a retired version or contradicts the current version. Define an untested reply as one with no test record after the most recent policy change.",
      "Do not count a generic greeting or a shipping address as a policy-citing reply. Do not count an internal comment about a policy as customer-facing text. A reply that is disabled but still available to restore should be included in the population. Each definition should include a positive example and a boundary example so a second reviewer can apply it consistently.",
      "Section: Evidence standard and data dictionary",
      "For each saved reply, capture the name, the queue, the text, and the date it was last edited. Add the policy it cites, the version named or implied, and the current version on the sample date. Record whether a test message exists and the date of the last test. Keep a copy of the reply text with the audit record so a later change does not erase the finding.",
      "Also capture who owns the reply and whether the owner is still with the business. Record any policy page that is missing from the register. If the reply uses a placeholder that is filled at send time, record how the placeholder changes the meaning. A second reviewer should be able to compare the reply with the policy without opening a dozen tools.",
      "If the support tool keeps version history, record the version that was live during the sample. A reply that was corrected after the audit should still be counted as stale for the sample date. Keep the correction date separately. The evidence should describe the state at the time of the audit, not the state after the cleanup.",
      "Section: Sampling and collection",
      "Draw the sample from the support tool's reply list rather than from the policies the team remembers. Record the export date, the filters, the row count, and the selection rule. Include every queue so the result is not dominated by the busiest team. If the list is ordered by name, a fixed interval spreads the sample across the alphabet and the product areas.",
      "Collect the reply text and the policy register as they existed on the sample date. If a policy was updated during the collection, record the date and analyze the replies against the version that was current when they were last edited. Do not infer a test from a reply that was used successfully. Note the collection date separately from the last-edit date.",
      "Record the queue where each reply is available rather than only the folder where it is stored. A reply can be visible in several queues and disabled in one. Use the support tool's own permission view for this field. If the view is unreliable, note the limitation and test one reply by opening it under a support account.",
      "Section: Analysis and reporting",
      "Report the number of replies, the share that cite a policy, the share that are stale, and the share with no test record. Show the counts by queue, product area, and owner status. Present the age of the last edit beside the staleness rate. Use the same denominator for every rate.",
      "Inspect the stale replies and describe the pattern without naming the employee. A cluster in one queue may point to a policy change that was never communicated, while a cluster among replies with no owner may point to turnover. Compare the result with the date of the last policy change. Report disabled replies separately because they are easy to forget.",
      "A useful additional view is the share of stale replies that are still being sent to customers. That view separates a housekeeping problem from a live customer risk. Show it beside the staleness rate and describe the difference. The owner can then decide whether to pause the replies or update them first.",
      "Report the result by queue and by the date of the last policy change so a reader can see whether staleness follows a specific event. Add the number of replies that were disabled but still stored, because those are the easiest to miss. State the sample date at the top of the table. A reader should be able to tell whether the finding is current.",
      "Section: Limitations and sources of error",
      "The record cannot show whether a customer received the wrong answer. It can show only what the saved reply said and whether a test was recorded. A stale reply may never be used, and a current reply may still be applied to the wrong case. The protocol also cannot capture a reply that an assistant types from memory instead of the tool.",
      "The policy register may itself be incomplete, which makes a reply look stale when the register is behind. Record the register date and the person who confirmed it. If the same person owns the policy and the reply, note the independence limitation and analyze that subgroup separately. Do not treat a missing version number as proof of an old rule without reading the text.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the support lead and ask them to choose one observable change. The change might be a version field on every policy-citing reply, a quarterly test, or a named owner for each queue. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the reply template and the policy register at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If staleness fell but the customer complaint rate did not, the replies may not be the main source of wrong answers. If complaints fell but stale replies remained, the team may be avoiding the tool. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "referenceSources": [
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-07"
      },
      {
        "title": "NIST Cybersecurity Framework 2.0",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-07"
      },
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-07"
      }
    ]
  },
  {
    "slug": "what-share-of-new-assistant-assignments-have-a-named-trainer-and-a-first-week-check",
    "title": "What share of new assistant assignments have a named trainer and a first-week check?",
    "excerpt": "A protocol for measuring onboarding coverage, with tests for a named trainer, a first-week review, and a record the next supervisor can use.",
    "published": "2026-11-07",
    "imagePath": "/images/nov07/what-share-of-new-assistant-assignments-have-a-named-trainer-and-a-first-week-check.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks what share of new assistant assignments have a named trainer and a first-week check. The unit is one assignment of a virtual assistant to a queue, identified by the assistant, the queue, and the start date. The study measures whether the record names a trainer, whether the trainer met the assistant in the first week, and whether a written review exists by the end of that week. It does not evaluate the assistant's performance.",
      "Set the scope to one small business, one onboarding process, and one set of assigned queues. Record the roles that may act as trainer and the person who owns the review. If the onboarding process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new checklist can look like better coverage when it is only a new form.",
      "Section: Population and unit of analysis",
      "Define the population as every assistant assignment that started during the window, including assignments that ended before the first week closed. The unit is the assignment, not the assistant, because one assistant can start on several queues. An assignment that changes trainer remains one unit with a handoff date. A second assignment to the same queue later is a separate unit linked to the first.",
      "Record the queue, the service line, and whether the assistant is new to the business or new only to the queue. These strata matter because a new hire and an internal transfer carry different onboarding needs. Include assignments created without a formal start date, because the base rate is part of the finding. Test the unit definition on two ordinary assignments before collection begins.",
      "An assistant can be assigned to a queue while the trainer is on leave, which produces an assignment with a trainer named on paper but no first-week contact. Record both the named trainer and the person who actually met the assistant. A record that names only the manager is not proof of training. The unit should preserve the difference between assignment and contact.",
      "Section: Definitions that make the measure reproducible",
      "Define a named trainer as a specific person recorded before the start date, not a team or a role title. Define a first-week check as a meeting or a written review that happened within seven calendar days of the start. Define a completed review as a note that states what the assistant did well, what needs practice, and what changes in week two. Define an uncovered assignment as one missing the trainer or the check.",
      "Do not count a welcome message as a first-week check. Do not count a trainer who is named but never contacted as coverage. An assignment that was paused before the first week should be reported separately rather than counted as covered. Each definition should include a positive example and a boundary example so a second reviewer can apply it the same way.",
      "Section: Evidence standard and data dictionary",
      "For each assignment, capture the assistant, the queue, the start date, and the trainer. Add the date the trainer was named, the date of the first meeting, and the date of the written review. Record who wrote the review and whether the assistant received it. Keep the review with the assignment record rather than in a personal folder.",
      "Also capture whether the assistant had access to the queue on the first day and whether a backup trainer was named. Record any change of trainer and the date it happened. If the assignment ended early, record the reason and whether a review was still completed. A second reviewer should be able to rebuild the first week from the record.",
      "If the business uses a standard onboarding form, keep the version that was used for the assignment. A form updated after the start can make the record look more complete than it was. Record the date the form was used. The evidence should describe the week as it happened, not as it was reconstructed later.",
      "Section: Sampling and collection",
      "Draw the sample from the assignment log rather than from a list of completed onboardings. Record the export date, the filters, the row count, and the selection rule. Include assignments from every queue and every start week so the result is not dominated by one hiring push. If the list is ordered by start date, a fixed interval spreads the sample across the window.",
      "Collect the assignment record and the review as they existed at the end of the first week. If a review was added later, record the addition date and analyze the original coverage separately. Do not infer a meeting from a calendar invitation that was never accepted. Note the collection date separately from the start date.",
      "Record the trainer's own queue and whether that person had a backup during the week. A trainer with an unmanaged queue may be named on the record but unavailable in practice. Use the staffing note for the same week, not a later recollection. If the note is missing, mark the assignment as unverified rather than assuming coverage.",
      "Section: Analysis and reporting",
      "Report the number of assignments, the share with a named trainer, the share with a first-week meeting, and the share with a written review. Show the counts by queue, service line, and assistant type. Present the median days from start to first meeting. Use the same denominator for every rate.",
      "Inspect the uncovered assignments and describe the pattern without naming the assistant or the trainer. A cluster in one queue may point to a missing trainer, while a cluster in one start week may point to a hiring push that outpaced onboarding. Compare the result with the trainer's own workload. Report paused assignments separately.",
      "A useful additional view is the share of assignments where the trainer changed during the first week. That view separates a coverage problem from a continuity problem. Show it beside the coverage rate and describe the difference. The owner can then decide whether to name a backup trainer or reduce the trainer's queue.",
      "Report the result by start week and by service line so a reader can see whether gaps cluster around a hiring push or a single queue. Add the number of assignments that ended before the first week closed, because those can distort the coverage rate. Present the review completion rate beside the meeting rate. A meeting without a written review is only partial coverage.",
      "Section: Limitations and sources of error",
      "The record cannot show whether the training was useful or whether the assistant understood it. It can show only that a person was named and a review was written. A covered assignment is not proof of good performance, and an uncovered one is not proof of failure. The protocol also cannot capture a trainer who helped every day without a recorded meeting.",
      "Calendar records can be deleted, and a review can be written from memory after the week ends. Record those cases and their treatment instead of dropping them silently. If the same person is the trainer and the reviewer, note the independence limitation and analyze that subgroup separately. A missing name in the log may be a recording problem rather than a real gap.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the person who coordinates assignments and ask them to choose one observable change. The change might be a named backup trainer, a first-week review template, or a start-date rule that requires a trainer before access is granted. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the trainer role and the review form at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If coverage rose but the review quality did not, the team may be meeting without a useful note. If reviews improved but coverage fell, the new template may be too heavy for a busy week. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "referenceSources": [
      {
        "title": "U.S. Department of Labor, Wage and Hour Division",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-07"
      },
      {
        "title": "NIST Cybersecurity Framework 2.0",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-07"
      }
    ]
  },
  {
    "slug": "how-often-are-customer-records-kept-past-their-scheduled-disposal-date",
    "title": "How often are customer records kept past their scheduled disposal date?",
    "excerpt": "A protocol for checking retention practice against the schedule, with tests for an expired record, an unexplained hold, and a disposal that left no trace.",
    "published": "2026-11-07",
    "imagePath": "/images/nov07/how-often-are-customer-records-kept-past-their-scheduled-disposal-date.webp",
    "body": [
      "Section: Research question and scope",
      "This protocol asks how often a customer record is still held after the disposal date in the business's retention schedule. The unit is one record set, identified by the customer, the record type, and the disposal date. The study measures whether the record is still active, whether a documented hold explains the delay, and whether a disposal was recorded when the record was removed. It does not evaluate whether the retention schedule itself is legally correct.",
      "Set the scope to one small business, one customer record system, and one retention schedule. Record the record types covered and the people who may approve a hold. If the schedule changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new schedule can look like better compliance when it is only a new document.",
      "Section: Population and unit of analysis",
      "Define the population as every record set whose disposal date fell before the sample date, including sets that were disposed on time and sets that are still present. The unit is the record set, not the customer, because one customer can have several record types. A record set that is split across systems remains one unit with a note about each location. A record set that is merged during the window keeps its original identity and the merge date.",
      "Record the record type, the source system, and whether the record contains personal or financial information. These strata matter because a marketing list and a payment record carry different risks. Include records created outside the normal intake process, because the base rate is part of the finding. Test the unit definition on two ordinary records before collection begins.",
      "A customer can appear in a support system and in an accounting system with different disposal dates. Record both locations and the date for each, and link them as one customer with two record sets. Do not merge them into a single unit, because one may be disposed while the other is still held. The link should show the relationship without erasing either schedule.",
      "Section: Definitions that make the measure reproducible",
      "Define the disposal date as the date recorded in the retention schedule for that record type and creation date. Define an active record as one that is still readable by the team, even if it is archived. Define a documented hold as a written instruction with a reason, an owner, and an end date. Define an expired record as one whose disposal date passed without a disposal record or a valid hold.",
      "Do not count a record that is merely hidden from the main view as disposed. Do not count a verbal instruction as a hold. A record that was disposed and later restored should keep both dates. Each definition should include a positive example and a boundary example so a second reviewer can apply it consistently.",
      "Section: Evidence standard and data dictionary",
      "For each record set, capture the customer identifier, the record type, the system, the creation date, and the disposal date. Add whether the record is still present, the last access date, and the name of any hold. Record the disposal date and the person who approved it. Keep the evidence with the retention register rather than in a separate spreadsheet.",
      "Also capture whether the record was included in a backup that has its own retention period. A record removed from the live system can survive in a backup, which changes the real disposal date. Record the backup system and its schedule. If the record was exported to a report, note the export and its retention rule. The evidence should show every place the record can still be read.",
      "If the business uses a deletion tool, keep its log with the record set. A log that shows a job ran is not proof that the specific record was removed. Record the count before and after the job and the person who checked the result. The evidence should connect the action to the record, not just to the system.",
      "Section: Sampling and collection",
      "Draw the sample from the retention register rather than from a list of records the team remembers. Record the export date, the filters, the row count, and the selection rule. Include every record type and system so the result is not dominated by the largest source. If the register is ordered by disposal date, a fixed interval spreads the sample across the window.",
      "Collect the record and the schedule as they existed on the sample date. If a disposal happened during collection, record the date and analyze the state before it separately. Do not infer a disposal from a record that is no longer in the main view. Note the collection date separately from the disposal date.",
      "Record the date the schedule was last reviewed and the person who approved it. An expired record may be measured against a schedule that is itself out of date. Use the version in force on the sample date rather than a newer draft. If the schedule is missing, mark the record set as unscored instead of counting it as both expired and covered.",
      "Section: Analysis and reporting",
      "Report the number of record sets, the share disposed on time, the share held under a documented hold, and the share expired without either. Show the counts by record type, system, and whether personal information is present. Present the median days past the disposal date for the expired sets. Use the same denominator for every rate.",
      "Inspect the expired sets and describe the pattern without naming the customer or the employee. A cluster in one system may point to a missing deletion job, while a cluster in one record type may point to an unclear schedule. Compare the result with the last schedule review. Report records that survive only in backups separately.",
      "A useful additional view is the share of holds that have passed their own end date. That view separates a retention problem from a hold-management problem. Show it beside the expired rate and describe the difference. The owner can then decide whether to fix the schedule, the deletion job, or the hold review.",
      "Report the result by record type and system so a reader can see whether the problem follows one schedule or one tool. Add the number of record sets that exist only in a backup, because they change the real disposal picture. State the sample date and the schedule version at the top of the table. A reader should be able to tell whether the finding is current.",
      "Section: Limitations and sources of error",
      "The record cannot show whether a disposal was legally required or whether a hold was justified. It can show only what the schedule and the register recorded. A record held past its date may be protected by a litigation hold that is not in the system. The protocol also cannot capture a copy saved on a personal device or in an unmanaged inbox.",
      "Systems can mislabel a creation date, and a merged customer can inherit the wrong schedule. A record that appears expired may belong to a newer record set. Record those cases and their treatment instead of dropping them silently. If the same person sets the schedule and approves the holds, note the independence limitation and analyze that subgroup separately.",
      "Section: Review cadence and next action",
      "Give the result to the owner and the person who manages the retention register and ask them to choose one observable change. The change might be a monthly deletion job, a hold end-date review, or a required disposal note. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the schedule and the deletion tool at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If expired records fell but holds rose, the team may be holding more rather than disposing better. If holds fell but expired records did not, the deletion job may be failing. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "referenceSources": [
      {
        "title": "IRS, recordkeeping for small businesses",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "checked": "2026-11-07"
      },
      {
        "title": "Federal Trade Commission, business guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Small Business Administration, manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "2026-11-07"
      },
      {
        "title": "U.S. Government Accountability Office, internal control standards",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook",
        "checked": "2026-11-07"
      }
    ]
  }
];
