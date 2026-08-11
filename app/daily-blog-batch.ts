export const dailyBlogPublicationDate = '2026-08-10';

export const dailyBlogSourceDates = {
  'outsource-inbox-triage-small-business': '2026-08-10'
} as const;

export const dailyBlogBatch = [
  ['outsource-inbox-triage-small-business', 'How to outsource inbox triage without losing the customer voice', 'A practical workflow for sorting messages, drafting replies, and keeping sensitive decisions with the owner.', 'inbox triage'],
  ['outsource-calendar-management-small-business', 'A small-business checklist for outsourcing calendar management', 'Set clear booking rules, protect focus time, and make calendar support easy to review.', 'calendar management'],
  ['outsource-crm-cleanup-small-business', 'How to outsource CRM cleanup and keep records trustworthy', 'Use field rules, duplicate checks, and a review queue before handing over CRM maintenance.', 'CRM cleanup'],
  ['outsource-lead-follow-up-small-business', 'Outsource lead follow-up with a simple approval workflow', 'Build a follow-up lane that keeps prospects moving without promising what the business cannot deliver.', 'lead follow-up'],
  ['outsource-customer-returns-admin', 'When to outsource customer returns administration', 'Separate routine return paperwork from refund decisions, exceptions, and customer-risk escalations.', 'returns administration'],
  ['outsource-ecommerce-product-data', 'A safe way to outsource ecommerce product data updates', 'Document source fields, image rules, and approval checks before changing a live catalog.', 'product data updates'],
  ['outsource-appointment-reminders', 'How to outsource appointment reminders for a small business', 'Create a repeatable reminder process with consent, timing, no-show notes, and escalation rules.', 'appointment reminders'],
  ['outsource-vendor-follow-up', 'Outsource vendor follow-up without creating payment risk', 'Track requests and evidence while keeping bank changes and payment release under separate approval.', 'vendor follow-up'],
  ['outsource-invoice-data-entry', 'What to document before outsourcing invoice data entry', 'Prepare a clean invoice queue with source links, exception codes, and a second-person check.', 'invoice data entry'],
  ['outsource-expense-receipt-capture', 'A practical workflow for outsourced expense receipt capture', 'Make receipt collection consistent while keeping categorization and final approval visible.', 'expense receipt capture'],
  ['outsource-weekly-owner-reporting', 'How to outsource weekly owner reporting', 'Turn existing tools into a concise report with source links, blockers, and decisions needed.', 'weekly owner reporting'],
  ['outsource-sop-documentation', 'Outsource SOP documentation one workflow at a time', 'Capture the real process, identify approval points, and keep procedures usable after handoff.', 'SOP documentation'],
  ['outsource-social-content-scheduling', 'Should a small business outsource social content scheduling?', 'Use an approved content queue and review gates so scheduling support does not become brand risk.', 'social content scheduling'],
  ['outsource-review-monitoring', 'How to outsource review monitoring and response drafts', 'Collect review signals, draft on-brand replies, and escalate threats or unusual complaints.', 'review monitoring'],
  ['outsource-competitor-research', 'A small-business process for outsourcing competitor research', 'Define sources, comparison fields, and freshness checks before delegating research updates.', 'competitor research'],
  ['outsource-marketplace-order-support', 'Outsource marketplace order support with clear limits', 'Handle routine order questions while routing refunds, disputes, and account changes for approval.', 'marketplace order support'],
  ['outsource-file-organization', 'How to outsource small-business file organization', 'Create naming rules, folder ownership, and a safe archive process before granting access.', 'file organization'],
  ['outsource-data-quality-checks', 'Build an outsourced data-quality check that owners can trust', 'Use a short checklist for missing fields, duplicates, stale records, and exception handling.', 'data-quality checks'],
  ['outsource-operations-task-tracking', 'Outsource operations task tracking without losing accountability', 'Make ownership, due dates, blockers, and weekly review visible in one simple queue.', 'operations task tracking'],
  ['outsource-service-quote-preparation', 'What parts of service quote preparation can be outsourced?', 'Prepare draft inputs and follow-up while keeping pricing, scope exceptions, and commitments approved.', 'service quote preparation'],
  ['outsource-client-onboarding-admin', 'A safer client onboarding administration workflow', 'Coordinate forms, folders, welcome notes, and status updates without handing off sensitive decisions.', 'client onboarding administration'],
  ['outsource-back-office-quality-review', 'How to outsource back-office quality review', 'Sample completed work, record defects, and send a useful weekly quality summary to the owner.', 'back-office quality review']
] as const;

export const dailyBlogSlugs = dailyBlogBatch.map(([slug]) => slug);
