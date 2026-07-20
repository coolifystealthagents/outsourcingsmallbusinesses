export const site = {
  "domain": "OutsourcingSmallBusinesses.com",
  "slug": "outsourcingsmallbusinesses",
  "brand": "Outsourcing Small Businesses",
  "primary": "outsourcing for small businesses",
  "audience": "small business owners deciding what to outsource first",
  "angle": "simple outsourcing roadmaps for admin, support, finance, marketing, and ops",
  "style": "Small business playbook",
  "dark": "#1a2e05",
  "color": "#65a30d",
  "accent": "#2563eb",
  "heroImage": "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  "alt": "small business owner working with virtual support team",
  "badge": "Small biz ops"
} as const;

export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations support for small businesses that need SOPs, follow-up, task tracking, and owner review without adding another full-time manager.",
    "buyerProblem": "The owner is still chasing tasks, checking handoffs, and answering the same internal questions every week.",
    "bestTasks": [
      "update SOPs from Loom videos, checklists, and owner notes",
      "track open tasks across email, Slack, Asana, Trello, or Monday",
      "prepare weekly operations summaries before the owner reviews them",
      "follow up with vendors, staff, and customers using approved scripts"
    ],
    "qualityControls": [
      "daily done list with links to the work",
      "owner approval rules for refunds, vendor changes, and unusual requests",
      "weekly scorecard for late tasks, blocked work, and repeated errors"
    ],
    "firstWeek": [
      "pick 10 recurring tasks and mark which ones need owner approval",
      "record one clean example for each task",
      "grant limited tool access and test one sample handoff",
      "review the first five completed tasks before adding more"
    ],
    "faqs": [
      {
        "q": "What operations work should a small business outsource first?",
        "a": "Start with repeatable follow-up, SOP updates, task tracking, and weekly summaries. Keep pricing, hiring, refunds, and vendor decisions with the owner until the approval rules are clear."
      },
      {
        "q": "How do we stop outsourced operations support from creating more work?",
        "a": "Give the staff member examples, a short done list, and a daily review point. If a task needs a new decision every time, clean up the process before handing it off."
      }
    ]
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer support outsourcing for small businesses that need faster replies, better ticket notes, and clear escalation rules.",
    "buyerProblem": "Customer messages sit too long, but the owner does not want an offshore staff member making refund or account decisions alone.",
    "bestTasks": [
      "answer common email, chat, and helpdesk questions from approved macros",
      "tag tickets by issue type, urgency, product, or customer status",
      "prepare refund or account-change notes for owner approval",
      "send follow-up messages after orders, appointments, or service calls"
    ],
    "qualityControls": [
      "saved replies for common questions",
      "escalation list for refunds, angry customers, billing issues, and legal threats",
      "weekly review of response time, reopened tickets, and customer complaints"
    ],
    "firstWeek": [
      "sort the last 50 tickets into common issue groups",
      "write or clean up five approved replies",
      "run the first support shift in draft mode",
      "review every escalated ticket before changing access"
    ],
    "faqs": [
      {
        "q": "Can outsourced customer support handle refunds?",
        "a": "They can prepare the details and send approved replies. Refund approval should stay with the owner or manager unless the rule is simple, written down, and tested."
      },
      {
        "q": "What tools should we prepare before hiring support help?",
        "a": "Prepare helpdesk access, saved replies, order lookup rules, customer tags, and a short list of issues that must be escalated."
      }
    ]
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin support for small businesses that need calendar help, inbox cleanup, data entry, document prep, and simple reporting.",
    "buyerProblem": "Small admin jobs steal hours from sales, service delivery, and owner follow-up.",
    "bestTasks": [
      "calendar updates, appointment reminders, and meeting prep",
      "inbox sorting, draft replies, and follow-up reminders",
      "CRM cleanup, spreadsheet updates, and simple data entry",
      "document formatting, file naming, and vendor form prep"
    ],
    "qualityControls": [
      "one inbox label system with examples",
      "approval rules for sending messages, moving meetings, and changing records",
      "weekly admin cleanup report with open items and blockers"
    ],
    "firstWeek": [
      "choose one inbox, one calendar, and one spreadsheet or CRM view",
      "write five examples of what good admin support looks like",
      "start in draft-only mode for customer-facing messages",
      "check the first week's work against a small scorecard"
    ],
    "faqs": [
      {
        "q": "What admin tasks are safe to outsource first?",
        "a": "Calendar cleanup, inbox sorting, document prep, CRM updates, and data entry are usually safe starting points when access is limited and examples are clear."
      },
      {
        "q": "Should an admin assistant send emails for the owner?",
        "a": "Start with drafts. Let the owner approve the first replies, then move simple messages to approved templates after quality is consistent."
      }
    ]
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA support for small businesses that need clean numbers, checked work, and simple weekly scorecards.",
    "buyerProblem": "The owner sees problems too late because nobody is checking work, numbers, and open issues in one place.",
    "bestTasks": [
      "prepare weekly KPI snapshots from existing tools",
      "check completed work against a short QA list",
      "flag missing fields, late tasks, duplicate records, and broken links",
      "summarize customer issues, team blockers, and owner decisions needed"
    ],
    "qualityControls": [
      "source links for every number in the weekly report",
      "sample checks before trusting a new report",
      "clear owner-only decisions for money, staffing, compliance, and customer risk"
    ],
    "firstWeek": [
      "pick five numbers the owner already checks",
      "write where each number comes from",
      "build the first report by hand before automating anything",
      "review mistakes and update the QA list"
    ],
    "faqs": [
      {
        "q": "Can outsourced staff own business reporting?",
        "a": "They can gather numbers, check work, and prepare a weekly view. The owner or manager should still decide what the numbers mean and what changes to make."
      },
      {
        "q": "What makes a good QA checklist for outsourced work?",
        "a": "A good checklist is short, visible, and tied to real mistakes. It should include examples, pass/fail rules, and the person who approves exceptions."
      }
    ]
  }
] as const;

export const blogPosts = [
  {
    "slug": "outsourcing-for-small-businesses-planning",
    "title": "Outsourcing Small Businesses: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "outsourcing-for-small-businesses-tasks-to-outsource",
    "title": "Outsourcing Small Businesses: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourcing-for-small-businesses-provider-questions",
    "title": "Outsourcing Small Businesses: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "outsourcing-for-small-businesses-onboarding-checklist",
    "title": "Outsourcing Small Businesses: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;

export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
