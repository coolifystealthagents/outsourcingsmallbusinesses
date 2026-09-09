import { septemberEightBlogBatch, septemberEightResearchBatch } from './sep8-content';

const publicationDate = '2026-09-09' as const;
const blogTopics = [
['shipment-address-verification','Verify Shipping Addresses Before a Small-Business Order Leaves','shipping address verification'],
['supplier-document-expiry','Track Supplier Document Expiry Without Certifying Compliance','supplier document expiry tracking'],
['support-ticket-attachment-audit','Audit Support Ticket Attachments Without Exposing Customer Data','support ticket attachment review'],
['timesheet-exception-prep','Prepare Timesheet Exceptions Without Approving Payroll','timesheet exception preparation'],
['crm-stage-staleness','Find Stale CRM Stages Without Rewriting the Sales Record','CRM stage staleness review'],
['field-service-photo-intake','Organize Field Service Photos Without Declaring the Job Complete','field service photo intake'],
['subscription-seat-reconciliation','Reconcile Software Seats Without Canceling Needed Access','software seat reconciliation'],
['quote-expiration-follow-up','Follow Up on Expiring Quotes Without Changing the Offer','quote expiration follow-up'],
['vendor-bank-change-intake','Handle Vendor Bank Change Intake Without Moving Money','vendor bank change intake'],
['customer-tax-document-routing','Route Customer Tax Documents Without Giving Tax Advice','customer tax document routing'],
['inventory-count-variance-packets','Build Inventory Variance Packets Without Adjusting Stock','inventory count variance preparation'],
['meeting-action-evidence','Capture Meeting Actions Without Inventing Agreement','meeting action evidence capture'],
] as const;
const headings=['Define the queue entry','Preserve the source evidence','Draw the decision boundary','Route exceptions visibly','Review a launch sample','Measure a trustworthy result'] as const;
export const septemberNineBlogBatch=septemberEightBlogBatch.map((base,index)=>{const[slug,title,lane]=blogTopics[index];const copy=[
`Create one record for each ${lane} item. Capture the business identifier, original request, received time, responsible operator, due point, and the exact condition that means preparation is finished. Test the form with a normal case and an incomplete case before opening the queue.`,
`Link the original system record, message, image, or document instead of copying only a convenient summary. Keep later observations timestamped and separate. When two sources conflict, show both values and request a decision; do not choose the version that closes the item fastest.`,
`An outsourced specialist may collect, label, compare, and draft around ${lane}. The role must stop before changing money, contractual terms, access, inventory, payroll, compliance status, or a customer promise. Name the owner who can make each consequential decision and keep that approval in the record.`,
`Use explicit states for ready, waiting on evidence, conflicting source, outside scope, and owner decision required. An exception note should identify the trigger, supporting link, safe current state, question, and decision owner. Never hide held work inside a completed count.`,
`During launch, inspect every consequential case and sample routine cases across different operators and source types. Compare the prepared output with the linked source and current instruction. Record defect type and correction so repeated confusion improves the intake or example rather than becoming private coaching.`,
`Report received, prepared, held, corrected, escalated, and aging counts for ${lane}, always with denominators. Add owner review minutes and repeated exception causes. Expand the lane only when a second reviewer can reconstruct one completed case and one held case without relying on memory or private chat.`] as const;return{...base,slug:`outsourcing-small-business-${slug}`,title,excerpt:`A practical, evidence-led handoff for ${lane} that keeps consequential decisions with the small-business owner.`,lane,publicationDate,sections:headings.map((h,i)=>[h,copy[i]] as const)};});

const researchTopics=[
['exception-evidence-completeness','Research: How Complete Is the Evidence in Outsourced Exception Packets?','evidence completeness in outsourced exception packets'],
['queue-age-owner-intervention','Research: When Does Queue Age Trigger Owner Intervention?','the relationship between queue age and owner intervention'],
['instruction-version-defects','Research: Do Instruction Version Gaps Predict Outsourced Work Defects?','whether instruction version gaps predict recorded work defects'],
['reviewer-agreement-handoff-status','Research: Do Reviewers Agree on Outsourced Handoff Status?','reviewer agreement when classifying outsourced handoffs'],
['access-scope-exception-rate','Research: Does Access Scope Relate to Outsourced Exception Rates?','the association between access scope and exception rates'],
] as const;
export const septemberNineResearchBatch=septemberEightResearchBatch.map((base,index)=>{const[slug,title,topic]=researchTopics[index];return{...base,slug:`september-9-research-${slug}`,title,excerpt:`A bounded observational study of ${topic}, with declared measures, sources, inference limits, and operational limitations.`,published:publicationDate,body:[
`Research question and scope. This brief asks how a small business can examine ${topic} inside one named outsourced work lane. The unit of analysis is one eligible task with its source, instruction version, output, exception state, approval, timestamps, and review result. It excludes unrelated queues and records outside the declared observation window.`,
`Methodology. Pre-register the observation window, eligibility and exclusion rules, field definitions, missing-data treatment, sampling rule, and stopping rule. Select consecutive eligible tasks to reduce convenience sampling. Two reviewers independently code a subset, reconcile disagreements, and retain the original labels so agreement is not overstated.`,
`Measures. Report the eligible count and denominator, missing fields, queue-age distribution, exception categories, correction count, reviewer agreement, owner interventions, and review minutes. Segment routine and consequential work. Do not convert absent evidence into a pass or combine unlike work lanes merely to enlarge the sample.`,
`Evidence context. NIST Cybersecurity Framework 2.0 informs governance, access, and continuous-improvement controls. U.S. Small Business Administration management guidance supplies general operating context. Federal Trade Commission business guidance supports accurate representation, while Google Search Central guidance supports people-first publication. These sources frame the protocol; they do not prove a local outcome.`,
`Interpretation. Describe observed counts and associations for ${topic} within the declared records and period. A difference between groups may justify a controlled process test, but it does not identify a cause. Record operationally plausible alternatives such as queue mix, staff experience, tool changes, seasonal volume, or revised instructions.`,
`Inference limits. This observational sample cannot establish that outsourcing, access scope, queue age, or an instruction change caused any result. It cannot support claims about provider-wide quality, legal compliance, profitability, customer satisfaction, security, or guaranteed savings. Conclusions apply only to the sampled lane and definitions.`,
`Limitations and decision rule. Logs may be incomplete, timestamps may reflect system behavior, reviewers may share assumptions, and rare high-impact events may be missed. Proceed only when the stated threshold is met, missingness is disclosed, consequential exceptions reach the named owner, and a second reviewer can reconstruct both a completed and a held case. Otherwise revise the process and repeat a bounded test.`]};});
