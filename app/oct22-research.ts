export const octoberTwentyTwoResearchBatch=[
  {
    "slug": "lead-response-time-censoring",
    "title": "Lead Response Time With Censored Conversations",
    "excerpt": "A protocol for measuring first response time when some leads are never answered and others arrive outside business hours.",
    "published": "2026-10-22",
    "modified": "2026-10-22",
    "imagePath": "/october-22-2026/lead-response-time-censoring.png",
    "referenceSources": [
      {
        "title": "SBA manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "October 22, 2026"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      },
      {
        "title": "FTC data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "October 22, 2026"
      },
      {
        "title": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "title": "CISA best practices",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/",
        "checked": "October 22, 2026"
      }
    ],
    "studyNote": "A protocol for a local review. It does not claim an industry benchmark or a client outcome.",
    "serviceHandoff": {
      "label": "Small business operations support",
      "href": "/services/operations-support",
      "text": "Turn one protocol into a bounded operating review before delegating live volume."
    },
    "related": [
      "/blog/duplicate-lead-control",
      "/research/review-response-consistency"
    ],
    "body": [
      "Section: Research question and scope.",
      "How long does a lead wait for a first human response, and how should unanswered or after-hours leads be counted? The brief separates what the record shows from what an owner concludes. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about lead response time in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "Section: Population and unit of analysis.",
      "Leads created in a defined month across the approved channels, including leads never contacted and leads closed as spam.",
      "The unit is one lead with its first outbound human response, if any. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "Section: Definitions that make the measure reproducible.",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as median time to first response, share of leads with no response, and after-hours response share. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "Section: Evidence standard and data dictionary.",
      "Each case needs the lead source and creation time, the first outbound message, the channel and template, the business hours calendar, and the closed or spam decision. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "Section: Sampling and collection.",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "Section: Reviewer independence and agreement.",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "Section: What the evidence can support.",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a channel-specific service level, a coverage plan, and a template review.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not judge whether the lead was a good fit or whether the owner should have pursued it. Keep those limits in the finding rather than in a closing footnote.",
      "Section: Limitations and sources of error.",
      "Unanswered leads are censored and will bias a simple average downward.",
      "An automated acknowledgment may be counted as a human response. A lead created on a holiday can make the process look slower than it is. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "Section: Sensitivity and alternative explanations.",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "Section: Privacy, access, and retention.",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "SBA and NIST guidance frames the operational and data handling context, not a response benchmark. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "Section: Operational interpretation and reporting.",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "Section: Effort and practical constraints.",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "Section: A calibration case.",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the lead source and creation time, the first outbound message, and the channel and template and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "Section: Reporting package and reopening conditions.",
      "Publish the case flow, the definitions, median time to first response, share of leads with no response, and after-hours response share, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "Section: Interpreting a small sample.",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "Section: Governance and stopping conditions.",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ]
  },
  {
    "slug": "review-response-consistency",
    "title": "Review Response Consistency Across Drafters",
    "excerpt": "A protocol for testing whether different drafters apply the same tone, factual standard, and remedy boundary.",
    "published": "2026-10-22",
    "modified": "2026-10-22",
    "imagePath": "/october-22-2026/review-response-consistency.png",
    "referenceSources": [
      {
        "title": "FTC data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "October 22, 2026"
      },
      {
        "title": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      },
      {
        "title": "SBA manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "October 22, 2026"
      },
      {
        "title": "National Archives records management",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt",
        "checked": "October 22, 2026"
      }
    ],
    "studyNote": "A protocol for a local review. It does not claim an industry benchmark or a client outcome.",
    "serviceHandoff": {
      "label": "Small business operations support",
      "href": "/services/operations-support",
      "text": "Turn one protocol into a bounded operating review before delegating live volume."
    },
    "related": [
      "/blog/review-response-approval",
      "/research/supplier-quote-field-completeness"
    ],
    "body": [
      "Section: Research question and scope.",
      "Do two drafters produce responses with the same factual standard and the same boundary on remedies? The measure is only useful if a second reviewer can reproduce it from the same files. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about review responses in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "Section: Population and unit of analysis.",
      "Reviews received in a defined quarter, including positive, negative, and mixed reviews.",
      "The unit is one review and one drafted response. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "Section: Definitions that make the measure reproducible.",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as agreement on the factual acknowledgement, drafts that promise an unapproved remedy, and time from review to approved response. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "Section: Evidence standard and data dictionary.",
      "Each case needs the review text, the order or service record, the draft, the owner approval, and the published response. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "Section: Sampling and collection.",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "Section: Reviewer independence and agreement.",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "Section: What the evidence can support.",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a response template, a review checklist, and a drafter calibration.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not decide the commercial remedy or the accuracy of the customer's experience. Keep those limits in the finding rather than in a closing footnote.",
      "Section: Limitations and sources of error.",
      "A drafter may mirror the customer's claim without checking the record.",
      "The same review may be handled by two people, producing two drafts. A positive review may need less evidence, which changes the comparison. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "Section: Sensitivity and alternative explanations.",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "Section: Privacy, access, and retention.",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "FTC guidance and internal control standards frame the record and approval question. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "Section: Operational interpretation and reporting.",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "Section: Effort and practical constraints.",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "Section: A calibration case.",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the review text, the order or service record, and the draft and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "Section: Reporting package and reopening conditions.",
      "Publish the case flow, the definitions, agreement on the factual acknowledgement, drafts that promise an unapproved remedy, and time from review to approved response, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "Section: Interpreting a small sample.",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "Section: Governance and stopping conditions.",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ]
  },
  {
    "slug": "supplier-quote-field-completeness",
    "title": "Supplier Quote Field Completeness",
    "excerpt": "A protocol for testing whether quotes contain the quantity, delivery, tax, validity, and exclusion fields needed for comparison.",
    "published": "2026-10-22",
    "modified": "2026-10-22",
    "imagePath": "/october-22-2026/supplier-quote-field-completeness.png",
    "referenceSources": [
      {
        "title": "SBA manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "October 22, 2026"
      },
      {
        "title": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      },
      {
        "title": "IRS small business and self-employed center",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed",
        "checked": "October 22, 2026"
      },
      {
        "title": "National Archives records management",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt",
        "checked": "October 22, 2026"
      }
    ],
    "studyNote": "A protocol for a local review. It does not claim an industry benchmark or a client outcome.",
    "serviceHandoff": {
      "label": "Small business operations support",
      "href": "/services/operations-support",
      "text": "Turn one protocol into a bounded operating review before delegating live volume."
    },
    "related": [
      "/blog/supplier-quote-comparison",
      "/research/bookkeeping-packet-completeness"
    ],
    "body": [
      "Section: Research question and scope.",
      "What share of supplier quotes contain the fields required to compare delivered cost? The brief separates what the record shows from what an owner concludes. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about supplier quotes in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "Section: Population and unit of analysis.",
      "Quotes received in a defined quarter for the top purchased categories.",
      "The unit is one quote line for one product or service. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "Section: Definitions that make the measure reproducible.",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as quotes with all required fields, quotes with unclear freight, and comparisons delayed by missing terms. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "Section: Evidence standard and data dictionary.",
      "Each case needs the quote and date, the quantity and unit, the delivery and freight terms, the tax treatment, the validity date, and the exclusions. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "Section: Sampling and collection.",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "Section: Reviewer independence and agreement.",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "Section: What the evidence can support.",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a quote request template, a supplier scorecard, and a purchase checklist.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not judge whether the supplier is reliable or the price is fair. Keep those limits in the finding rather than in a closing footnote.",
      "Section: Limitations and sources of error.",
      "A quote may be complete but apply to a different quantity.",
      "Verbal freight terms may not appear in the document. A single supplier may issue several versions in one week. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "Section: Sensitivity and alternative explanations.",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "Section: Privacy, access, and retention.",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "SBA and GAO guidance frames the purchasing and control context. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "Section: Operational interpretation and reporting.",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "Section: Effort and practical constraints.",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "Section: A calibration case.",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the quote and date, the quantity and unit, and the delivery and freight terms and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "Section: Reporting package and reopening conditions.",
      "Publish the case flow, the definitions, quotes with all required fields, quotes with unclear freight, and comparisons delayed by missing terms, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "Section: Interpreting a small sample.",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "Section: Governance and stopping conditions.",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ]
  },
  {
    "slug": "bookkeeping-packet-completeness",
    "title": "Month-End Bookkeeping Packet Completeness",
    "excerpt": "A protocol for testing whether the packet gives the bookkeeper enough evidence to classify transactions without guessing.",
    "published": "2026-10-22",
    "modified": "2026-10-22",
    "imagePath": "/october-22-2026/bookkeeping-packet-completeness.png",
    "referenceSources": [
      {
        "title": "IRS small business and self-employed center",
        "publisher": "Internal Revenue Service",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed",
        "checked": "October 22, 2026"
      },
      {
        "title": "SBA manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "October 22, 2026"
      },
      {
        "title": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "title": "National Archives records management",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt",
        "checked": "October 22, 2026"
      },
      {
        "title": "FTC data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "October 22, 2026"
      }
    ],
    "studyNote": "A protocol for a local review. It does not claim an industry benchmark or a client outcome.",
    "serviceHandoff": {
      "label": "Small business operations support",
      "href": "/services/operations-support",
      "text": "Turn one protocol into a bounded operating review before delegating live volume."
    },
    "related": [
      "/blog/month-end-bookkeeping-packet",
      "/research/ecommerce-refund-evidence-completeness"
    ],
    "body": [
      "Section: Research question and scope.",
      "What share of month-end packets contain the statements, receipts, and answers needed to close without an owner follow-up? The protocol is designed to make uncertainty visible before anyone acts on a number. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about month-end bookkeeping packets in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "Section: Population and unit of analysis.",
      "Monthly packets submitted in a defined quarter, including late and incomplete packets.",
      "The unit is one monthly packet for one business. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "Section: Definitions that make the measure reproducible.",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as packets complete at first submission, uncategorized items at close, and owner questions after the deadline. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "Section: Evidence standard and data dictionary.",
      "Each case needs the packet index, the statements and receipts, the uncategorized list, the owner answers, and the bookkeeper response. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "Section: Sampling and collection.",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "Section: Reviewer independence and agreement.",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "Section: What the evidence can support.",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a packet template, a deadline reminder, and a question log.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not provide accounting or tax advice and does not judge the classification. Keep those limits in the finding rather than in a closing footnote.",
      "Section: Limitations and sources of error.",
      "A packet can look complete but omit a statement page.",
      "A personal expense may be intentionally left ambiguous. A late answer can be recorded after the close and make the packet look complete. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "Section: Sensitivity and alternative explanations.",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "Section: Privacy, access, and retention.",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "IRS recordkeeping and SBA bookkeeping guidance frame the evidence expectation. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "Section: Operational interpretation and reporting.",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "Section: Effort and practical constraints.",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "Section: A calibration case.",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the packet index, the statements and receipts, and the uncategorized list and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "Section: Reporting package and reopening conditions.",
      "Publish the case flow, the definitions, packets complete at first submission, uncategorized items at close, and owner questions after the deadline, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "Section: Interpreting a small sample.",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "Section: Governance and stopping conditions.",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ]
  },
  {
    "slug": "ecommerce-refund-evidence-completeness",
    "title": "Refund Evidence Completeness in Ecommerce",
    "excerpt": "A protocol for testing whether refunds can be reconstructed from the order, evidence, policy, decision, and payment record.",
    "published": "2026-10-22",
    "modified": "2026-10-22",
    "imagePath": "/october-22-2026/ecommerce-refund-evidence-completeness.png",
    "referenceSources": [
      {
        "title": "FTC data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "checked": "October 22, 2026"
      },
      {
        "title": "SBA manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "checked": "October 22, 2026"
      },
      {
        "title": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "title": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      },
      {
        "title": "National Archives records management",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt",
        "checked": "October 22, 2026"
      }
    ],
    "studyNote": "A protocol for a local review. It does not claim an industry benchmark or a client outcome.",
    "serviceHandoff": {
      "label": "Small business operations support",
      "href": "/services/operations-support",
      "text": "Turn one protocol into a bounded operating review before delegating live volume."
    },
    "related": [
      "/blog/ecommerce-return-refund-evidence",
      "/research/lead-response-time-censoring"
    ],
    "body": [
      "Section: Research question and scope.",
      "What share of refunds can be reconstructed from the request through the payment confirmation? The protocol is designed to make uncertainty visible before anyone acts on a number. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about ecommerce refunds in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "Section: Population and unit of analysis.",
      "Refunds issued in a defined quarter, including partial, full, declined, and returned refunds.",
      "The unit is one refund request tied to one order line. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "Section: Definitions that make the measure reproducible.",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as files with all five evidence fields, refunds without a line match, and days from request to payment confirmation. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "Section: Evidence standard and data dictionary.",
      "Each case needs the order line, the customer evidence, the policy check, the approval, the payment confirmation, and the inventory update. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "Section: Sampling and collection.",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "Section: Reviewer independence and agreement.",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "Section: What the evidence can support.",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a refund checklist, a policy summary, and an inventory reconciliation.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not decide whether a refund is owed under consumer law. Keep those limits in the finding rather than in a closing footnote.",
      "Section: Limitations and sources of error.",
      "A refund may be split across methods.",
      "A replacement may be sent instead of a refund, changing the outcome. A payment confirmation may show acceptance but not settlement. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "Section: Sensitivity and alternative explanations.",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "Section: Privacy, access, and retention.",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "FTC and SBA guidance frames the customer and record context, not a refund result. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "Section: Operational interpretation and reporting.",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "Section: Effort and practical constraints.",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "Section: A calibration case.",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the order line, the customer evidence, and the policy check and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "Section: Reporting package and reopening conditions.",
      "Publish the case flow, the definitions, files with all five evidence fields, refunds without a line match, and days from request to payment confirmation, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "Section: Interpreting a small sample.",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "Section: Governance and stopping conditions.",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ]
  }
] as const;
