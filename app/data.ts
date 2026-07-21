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
  "heroImage": "/filipino-support-workspace.jpg",
  "serviceImage": "/filipino-support-workspace.jpg",
  "alt": "professional working at a laptop in a bright workspace",
  "badge": "Small biz ops"
} as const;

export const services = [
  {
    "slug": "operations-support",
    "title": "Operations support",
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
    "title": "Customer support",
    "desc": "Customer support outsourcing for small businesses that need faster replies, better ticket notes, and clear escalation rules.",
    "buyerProblem": "Customer messages sit too long, but the owner does not want a Filipino team member making refund or account decisions alone.",
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
    "title": "Admin support",
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
    "title": "A plain-English plan for your first outsourced role",
    "excerpt": "Turn a pile of recurring work into a role with clear limits and a useful finish line.",
    "minutes": 6
  },
  {
    "slug": "outsourcing-for-small-businesses-tasks-to-outsource",
    "title": "The first tasks to hand off in a small business",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourcing-for-small-businesses-provider-questions",
    "title": "Questions to ask an outsourcing provider before you hire",
    "excerpt": "A practical provider call guide for checking role fit, quality, data access, pricing, and exit terms.",
    "minutes": 10
  },
  {
    "slug": "outsourcing-for-small-businesses-onboarding-checklist",
    "title": "A first-week checklist for Filipino talent",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;

export const blogDetails = {
  "outsourcing-for-small-businesses-provider-questions": {
    takeaways: [
      "Ask who will do the work, who checks it, and who steps in when the usual worker is absent.",
      "Test the provider with one real task before you hand over a full role or broad tool access.",
      "Put approval limits, data access, total fees, and exit steps in writing before work starts."
    ],
    readinessRows: [
      { topic: "Role fit", weak: "We can handle anything you need.", useful: "We would start with inbox triage and CRM updates, then review five samples before adding customer replies." },
      { topic: "Quality", weak: "Our people are fully trained.", useful: "A team lead checks the first ten items against your examples and sends the misses back for correction." },
      { topic: "Coverage", weak: "We always have backup.", useful: "One named backup shadows the role and can access the approved SOPs if the main worker is out." },
      { topic: "Data access", weak: "Our systems are secure.", useful: "Each worker gets a separate account, MFA, and only the folders needed for the assigned tasks." },
      { topic: "Exit", weak: "You can cancel at any time.", useful: "Within five business days we return your files, remove user access, and confirm deletion in writing." }
    ],
    sections: [
      {
        heading: "Start with the work, not the sales deck",
        paragraphs: [
          "A provider call gets vague fast when the role is vague. Bring three recurring tasks, one example of finished work, the tools involved, and the decisions that must stay with you. Ask the provider to explain how those exact tasks would move from request to review.",
          "Listen for details. Who receives the task? Where is it tracked? What does the worker do when information is missing? Who checks the first batch? A useful answer names people, steps, and limits. A weak answer leans on words such as talent, experience, or flexibility without showing how the work gets done.",
          "Do not hand over a whole department on day one. A paid sample or narrow two week pilot gives you real work to judge. Pick a task that happens often enough to test but will not hurt a customer or move money if someone makes a mistake."
        ]
      },
      {
        heading: "Ask who manages quality when you are busy",
        paragraphs: [
          "Small business owners often outsource because they already have too much to check. If the provider's quality plan depends on you reviewing every item forever, you have bought another job for yourself.",
          "Ask what the team lead checks during the first week and what changes after the worker is steady. Request a sample scorecard. It can be simple: work completed, errors found, late items, open questions, and owner decisions needed. Ask who corrects a mistake and whether rework is included in the fee.",
          "Then ask about absence and turnover. You need to know whether a backup has seen the SOP, how quickly the provider tells you about a staffing change, and whether you pay again for replacement training. A promise of backup coverage means little until the handoff steps are clear."
        ]
      },
      {
        heading: "Set limits around accounts and customer data",
        paragraphs: [
          "Ask the provider to describe access for this role, not security in general. Will the worker have a separate login? Is multi-factor authentication required? Can you remove access yourself? Which files can the team download? How does the provider remove access when a worker leaves?",
          "Start with the least access the person needs. Customer support may need order lookup without refund approval. Bookkeeping help may prepare records without the power to send money. Admin help may draft email without sending it. These limits protect the business and make the worker's job easier because the decision line is visible.",
          "NIST's Cybersecurity Framework is built around managing risk, while CISA recommends strong passwords and MFA. You do not need to turn a provider call into a security audit. You do need plain answers about accounts, permissions, device rules, incident reporting, and offboarding."
        ]
      },
      {
        heading: "Check the full cost and the way out",
        paragraphs: [
          "Ask for the full monthly amount and what can change it. Check setup fees, management fees, minimum hours, overtime, holiday coverage, software seats, replacement costs, and notice periods. If exchange rates can change the bill, ask how and when the rate is set.",
          "Also confirm what kind of relationship you are buying. A managed provider, staffing firm, independent contractor, and direct employee can create different duties for your business. The IRS says the label in a contract does not decide worker status by itself. Control and the real working relationship matter. Ask your tax or legal adviser about your facts rather than accepting a provider's general answer.",
          "Read the exit terms before the start date. Ask how you receive files, notes, passwords, and unfinished work. Confirm when accounts are removed and whether the provider will give reasonable transition help. A clean exit plan is useful even when the relationship goes well."
        ]
      }
    ],
    callScript: [
      "We want help with [three tasks]. The work happens [daily or weekly] in [tools]. Walk me through who does each step and who checks the first batch.",
      "These decisions must stay with us: [refunds, payments, account changes, legal issues]. How will your team pause and ask for approval?",
      "Please show us a sample weekly report and explain what happens after an error, an absence, or a staffing change.",
      "Which accounts will the worker need? Tell us how you use separate logins, MFA, limited permissions, and access removal.",
      "What is the full cost, what can raise it, and what happens to our files and accounts if we end the service?"
    ],
    faqs: [
      { q: "Should I ask an outsourcing provider for client references?", a: "Yes, but ask for a reference with a similar role and team size. Ask what went wrong during the first month, how the provider handled it, and how much owner review the work still needs." },
      { q: "Is the lowest hourly rate the best way to compare providers?", a: "No. Compare the full monthly cost, management included, expected output, review time, backup coverage, and exit terms. A low rate can cost more if your team must redo the work." },
      { q: "What should I test before signing a longer contract?", a: "Use one real recurring task with a clear example and a short quality checklist. Check the result, response to feedback, reporting, and whether the provider follows approval limits." },
      { q: "What should stay under the owner's control?", a: "Keep money movement, pricing changes, legal responses, hiring decisions, broad account access, and unusual customer remedies with the owner or a named manager until written rules are proven." }
    ],
    sources: [
      { name: "U.S. Small Business Administration: Hire and manage employees", url: "https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees", note: "Small business guidance on hiring, pay, records, and management duties." },
      { name: "IRS: Independent contractor defined", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined", note: "Explains that worker status depends on the facts and the degree of control, not only a contract label." },
      { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", note: "A risk management framework for identifying and reducing cybersecurity risk." },
      { name: "CISA: Use strong passwords", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords", note: "Practical account protection guidance, including strong passwords and multi-factor authentication." }
    ]
  }
} as const;

export const stats = [
  { label: 'Hiring location', value: 'Philippines', note: 'Filipino talent only' },
  { label: 'Planning approach', value: 'Scope first', note: 'define the work before matching' },
  { label: 'Owner control', value: 'Approval lines', note: 'keep sensitive decisions visible' },
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed Filipino staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable Filipino talent but do not want to screen alone',
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
  { step: '2', title: 'Match the staff', body: 'The staffing team can match Filipino talent to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every plan is built for talent recruited and hired in the Philippines. Role scope, schedule, skills, tools, and management needs determine the fit.';
