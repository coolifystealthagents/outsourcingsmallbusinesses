export const richBlogDetails = {
  "philippines-outsourced-support-account-access-checklist": {
    revision: "access-plan-2026-07-25",
    eyebrow: "Account access guide",
    takeaways: [
      "Give each Philippines-based specialist a named account. Shared logins make it hard to tell who changed what.",
      "Start with the fewest permissions needed for the first task. Add access only after the work and review steps are proven.",
      "Write the removal steps before day one. The owner should be able to close access without waiting for a provider or worker."
    ],
    stats: [
      { value: 31, label: "Breaches starting with software vulnerabilities", shortLabel: "Software gaps" },
      { value: 48, label: "Breaches involving ransomware", shortLabel: "Ransomware" },
      { value: 15, label: "Attack techniques bolstered by generative AI", shortLabel: "AI-assisted attacks" }
    ],
    methodsNote: "Methods note: These figures come from Verizon's 2026 Data Breach Investigations Report page. Verizon reports on a global incident dataset, so the figures describe breach patterns, not the quality of Filipino workers or any staffing provider. We use them only to choose sensible account controls.",
    tableRows: [
      { task: "Customer email", access: "Named mailbox seat or delegated inbox view", owner: "Approves refunds, legal replies, and unusual promises", proof: "Sent-message log and weekly sample review" },
      { task: "CRM updates", access: "Role limited to assigned records and approved fields", owner: "Approves exports, bulk changes, and record deletion", proof: "Change history and a five-record spot check" },
      { task: "Bookkeeping prep", access: "Read-only statements and upload folder", owner: "Keeps bank login, payment release, and final approval", proof: "Source link beside every prepared entry" },
      { task: "Website updates", access: "Editor role for named pages", owner: "Keeps user management, domain, and publishing exceptions", proof: "Preview link and change log before release" },
      { task: "Operations follow-up", access: "Assigned boards, documents, and vendor threads", owner: "Approves contract changes and policy exceptions", proof: "Done list with links and blocked-item note" }
    ],
    sections: [
      {
        heading: "Start with the task, then choose the access",
        paragraphs: [
          "Small business owners often begin with a tool list: email, CRM, drive, calendar, and chat. That order is backwards. Write down the first task, the finished result, and the person who checks it before you decide which account the specialist needs.",
          "A customer support specialist may need to read an order and draft a reply, but that does not mean the person needs refund approval or a store-owner login. A bookkeeper may need statements and invoices, but not the power to move money. Clear task lines make access smaller and the job easier to teach.",
          "Use the same rule whether the specialist works from Manila, Cebu, Davao, or another part of the Philippines. Location does not prove that an account is safe or unsafe. The control comes from named users, limited permissions, review records, and a removal path the business owns."
        ]
      },
      {
        heading: "Create a named account for each person",
        paragraphs: [
          "Do not pass around one owner login. A named account gives the worker a clear identity and leaves a useful record when a file, ticket, or customer note changes. It also lets you remove one person without breaking access for everyone else.",
          "Ask the worker to use a password manager and turn on multifactor authentication wherever the tool allows it. CISA explains that MFA adds a second step, so a stolen password alone is not enough to enter the account. Keep recovery codes with the business owner or a named manager, not in the same inbox the code protects.",
          "If a tool has no separate-user option, pause before sharing the owner account. Check whether the task can move through a form, shared folder, delegated mailbox, or exported report instead. If there is no safer route, write down the risk and keep the work narrow until you can change tools."
        ]
      },
      {
        heading: "Match permissions to a short first-week plan",
        paragraphs: [
          "The first week should be small enough to inspect. Give the Philippines-based specialist one work lane, a clean example, and a short checklist. Review the first five completed items before adding another folder, inbox, customer group, or publishing permission.",
          "Set the account to the lowest useful role. A viewer can read, an editor can change, and an administrator can usually change users or settings. Most first-week support work needs the first two roles, while administrator access should stay with the owner or technical manager.",
          "Write approval lines beside the task. The specialist can prepare, tag, draft, and follow up. The owner keeps money movement, legal answers, policy exceptions, broad exports, user creation, and any change that could lock the business out of its own systems."
        ]
      },
      {
        heading: "Review access without watching every click",
        paragraphs: [
          "Good review is not constant screen watching. Ask for a daily done list during the first week, with links to the tickets, records, or files touched. The owner can sample the work, check the change history, and look for actions outside the agreed task lane.",
          "Move to a weekly check once the work is steady. Review active users, old invitations, unusual exports, failed sign-ins, and the permissions attached to each role. Compare the list with the people who are still assigned to the business, then close anything that no longer has a clear owner.",
          "Verizon's 2026 figures are a reminder to check both people and software. The report page says 31% of breaches start with software vulnerabilities and 48% involve ransomware. Those numbers do not predict a problem with a Filipino specialist, but they do support patching tools, limiting downloads, and keeping recovery steps ready."
        ]
      },
      {
        heading: "Plan for a lost device or suspicious sign-in",
        paragraphs: [
          "Agree on one plain response rule: stop work and tell the owner when a device is lost, an MFA prompt appears without a sign-in, or a file behaves strangely. The worker should not hide the event or try random fixes. Fast reporting gives the owner time to close sessions, change credentials, and check recent activity.",
          "Keep a short contact card outside the affected systems. It should name the owner, a backup contact, the account to close first, and the place where incident notes belong. Do not put passwords or recovery codes on that card.",
          "The 2026 report page also says 15% of attack techniques are bolstered by generative AI. That broad figure is not a reason to panic. It is a reason to treat an urgent message, surprise login page, or strange voice request as something to verify through a second channel."
        ]
      },
      {
        heading: "Remove access with the same care used to grant it",
        paragraphs: [
          "Offboarding should work even if a worker or provider is unavailable. Keep an owner-controlled list of accounts, shared folders, browser sessions, API keys, devices, and recovery methods. Add the person who can close each item and the time when removal should happen.",
          "On the last day, disable the named account, end open sessions, rotate any secret that was shared, transfer files, and remove personal recovery details. Check automations and forwarding rules too. An old email rule or connected app can keep moving data after the visible user account is gone.",
          "The Philippine Data Privacy Act requires reasonable and appropriate measures to protect personal information. A small business should get advice for its own legal duties, especially when customer records cross borders. This checklist is an operations plan, not a legal opinion."
        ]
      }
    ],
    quote: {
      text: "Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location (i.e., local area networks versus the internet) or based on asset ownership (enterprise or personally owned).",
      attribution: "Scott Rose, Oliver Borchert, Stu Mitchell, and Sean Connelly, NIST Special Publication 800-207, August 2020",
      url: "https://csrc.nist.gov/pubs/sp/800/207/final"
    },
    graphicSteps: [
      { step: "1", label: "Request", note: "Name the task and needed data" },
      { step: "2", label: "Grant", note: "Create a limited named account" },
      { step: "3", label: "Review", note: "Check samples and account logs" },
      { step: "4", label: "Remove", note: "Close sessions and transfer work" }
    ],
    accessScript: [
      "Your first task is [task]. A finished item should look like [example], and [owner or manager] checks the first five items.",
      "Use your named account only. Do not share it, add another user, export a full list, or connect a new app without written approval.",
      "Stop and message [contact] if you see an unexpected MFA prompt, lost device, strange file, or request to bypass the normal approval step.",
      "These decisions stay with the owner: [money movement, account changes, policy exceptions, legal replies, or other limits].",
      "When the work ends, place open items in [handoff folder] and confirm that the owner can access every file before your account is closed."
    ],
    banners: [
      { label: "Before access", title: "Map one task first", body: "Use the lead intake page to separate updates, follow-up, and owner approvals before opening accounts.", href: "/services/lead-intake-administration", cta: "Map intake work" },
      { label: "During the first week", title: "Test a customer support lane", body: "Start with a small ticket group, saved replies, and clear escalation rules for a Philippines-based specialist.", href: "/services/customer-inbox-management", cta: "Plan support work" },
      { label: "Ready to build the role?", title: "Bring the task list to us", body: "Share the tools, schedule, review owner, and decisions that must stay inside your business.", href: "/contact", cta: "Contact us" }
    ],
    internalLinks: [
      { href: "/services/supplier-coordination", label: "Supplier coordination with task tracking and owner review" },
      { href: "/blog", label: "First-week checklist for Filipino talent" },
      { href: "/services/owner-dashboard-reporting", label: "Owner dashboard reporting with clear source links" }
    ],
    faqs: [
      { q: "Should a Philippines-based assistant use my owner login?", a: "No. Create a named account with only the permissions needed for the assigned task. Keep account ownership, user management, recovery methods, and sensitive approvals with the business." },
      { q: "When should I add more permissions?", a: "Add access after the first work sample passes review and the next task clearly needs it. Write down what changed, who approved it, and how you will check the added work." },
      { q: "What should happen when an outsourced specialist leaves?", a: "Disable the named account, close sessions, transfer files, rotate shared secrets, remove forwarding rules, and confirm that the business can open the final handoff." },
      { q: "Do national cyber figures prove that a worker is risky?", a: "No. Global or national figures describe broad patterns. Judge each worker and provider through named accounts, work samples, permission limits, review records, and a tested offboarding plan." }
    ],
    sources: [
      { name: "Verizon: 2026 Data Breach Investigations Report", url: "https://www.verizon.com/business/resources/reports/dbir/", note: "Published in 2026. The report page supplies the 31%, 48%, and 15% figures used in the chart and body." },
      { name: "NIST Special Publication 800-207: Zero Trust Architecture", url: "https://csrc.nist.gov/pubs/sp/800/207/final", note: "Published in August 2020. The exact quotation is from the publication abstract." },
      { name: "CISA: Turn on multifactor authentication", url: "https://www.cisa.gov/secure-our-world/turn-mfa", note: "Account-protection guidance explaining why a second sign-in step helps when a password is stolen." },
      { name: "Republic Act No. 10173: Data Privacy Act of 2012", url: "https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html", note: "Philippine statutory text covering the protection of personal information and security measures." }
    ]
  },
  "philippines-outsourced-support-incident-response-checklist": {
    revision: "incident-plan-2026-07-27",
    publicationDate: "2026-07-27",
    eyebrow: "Incident response field guide",
    takeaways: [
      "Stop the spread first, but preserve a simple record of what the support specialist saw and changed.",
      "Use one owner-controlled channel for urgent reporting, especially when the normal inbox or chat may be affected.",
      "Decide who handles customer records, regulator questions, recovery, and the return to work before an alert arrives."
    ],
    stats: [
      { value: 31, label: "Breaches that now start with software vulnerabilities", shortLabel: "Software gaps" },
      { value: 48, label: "Breaches that now involve ransomware", shortLabel: "Ransomware" },
      { value: 15, label: "Attack techniques now bolstered by generative AI", shortLabel: "AI-assisted attacks" }
    ],
    methodsNote: "Methods note: Verizon published these three figures on its 2026 Data Breach Investigations Report page. The report draws on a global incident dataset, rather than a sample of Philippine support teams. The figures help set response priorities, but they do not measure any worker, provider, or country.",
    tableRows: [
      { task: "Unexpected sign-in", access: "End sessions and disable the named user", owner: "Preserve sign-in and account-change logs", proof: "Incident time, account, action, and reviewer" },
      { task: "Suspicious customer message", access: "Pause links, attachments, and outbound replies", owner: "Save the original message and headers", proof: "Ticket link, screenshot, and escalation time" },
      { task: "Possible data exposure", access: "Restrict the affected folder or queue", owner: "Record the data types and people involved", proof: "Access list and a dated event log" },
      { task: "Malware or ransomware warning", access: "Disconnect the device from business networks", owner: "Keep the device powered and call technical help", proof: "Alert text, device name, and last known task" },
      { task: "Recovery and return", access: "Use a clean device and reset credentials", owner: "Approve restored systems and support lanes", proof: "Recovery check, owner sign-off, and follow-up date" }
    ],
    sections: [
      {
        heading: "Define an incident in plain language",
        paragraphs: [
          "An outsourced support incident is any event that may put customer information, business systems, or service continuity at risk. It can begin with a strange sign-in, an unexpected verification prompt, a customer message carrying a suspicious file, a missing device, or a tool that suddenly encrypts records. The first report does not need to prove what happened; it needs to give the owner enough facts to start a controlled response.",
          "Write a short trigger list beside the daily support procedure and show it during onboarding. Tell the Philippines-based specialist to report the event even when it turns out to be harmless, because silence removes the chance to check logs while they are still useful. Do not punish prompt reporting or ask the worker to investigate beyond the access and technical skill already assigned."
        ]
      },
      {
        heading: "Make the first report useful",
        paragraphs: [
          "Ask for six facts: who noticed the event, when it was noticed, which device or account was involved, what appeared on screen, what work was underway, and what action has already been taken. These details form a first timeline without asking the worker to diagnose malware or decide whether a breach is legally reportable. The specialist should use exact times with a time zone so a Manila shift and an overseas owner can line up events.",
          "Preserve the original ticket, message, alert, or screen text when that can be done without opening a suspicious file again. A screenshot can help, but it should not expose more customer information than the incident record needs. Put the evidence in an owner-controlled case folder and limit that folder to the people handling the response."
        ]
      },
      {
        heading: "Contain the event without destroying clues",
        paragraphs: [
          "Containment means reducing the chance that the event spreads while keeping enough evidence to understand it. The owner may end active sessions, disable the named account, limit a shared folder, block a sender, or pause an integration after considering the business impact. The support specialist should not delete messages, wipe a device, reinstall software, or reset every account unless the response lead gives that instruction.",
          "For a suspicious device, disconnect it from Wi-Fi, wired networks, and removable drives if this can be done safely. Leave it powered on, note what is visible, and contact the technical responder because shutting it down can remove information held in memory. Move urgent support work to a known clean device only after the owner creates a separate account path and confirms which records may be used."
        ]
      },
      {
        heading: "Protect Philippine customer information",
        paragraphs: [
          "The Philippine Data Privacy Act of 2012 requires reasonable and appropriate organizational, physical, and technical measures for personal information. It also places duties around security incidents and breaches, so the response lead should quickly identify what customer or worker data may be involved. This operational checklist cannot decide whether a particular event triggers notice, and the business should obtain qualified Philippine advice for that decision.",
          "Create a small data map before an incident occurs. List the customer fields visible in the support queue, where attachments are stored, which people can export records, and which business owns each notice decision. During the event, record data categories and likely access rather than copying whole customer files into the timeline."
        ]
      },
      {
        heading: "Recover one support lane at a time",
        paragraphs: [
          "Recovery should restore a known clean service, not simply reopen every tool because the queue is growing. Confirm that the affected weakness is fixed, scan or replace the device as directed by technical help, reset exposed credentials, and review recovery methods before enabling the worker. Start with one low-risk support lane and watch account activity before restoring exports, connected applications, or broader permissions.",
          "Tell the specialist exactly which device, account, and procedure are approved for the return. Give customers a reviewed service message when delays affect them, but do not speculate about cause, scope, or blame while facts are still being checked. Keep legal and notification language with the owner and qualified advisers rather than asking a frontline worker to improvise it."
        ]
      },
      {
        heading: "Learn from the response without blaming the reporter",
        paragraphs: [
          "Hold a short review after service is stable and the urgent evidence is secured. Rebuild the timeline, compare actions with the checklist, and identify where contacts, permissions, backups, or instructions slowed the response. Focus on changes to the system of work rather than assumptions about the worker's location or character.",
          "Choose a small number of follow-up actions with an owner and due date. Useful actions may include removing an unused integration, shortening log retention gaps, revising an escalation message, testing a backup contact, or limiting downloads from the support tool. Track completion in the same owner dashboard used for normal operations so the lessons do not disappear in an archived case folder."
        ]
      }
    ],
    quote: {
      text: "This publication seeks to assist organizations with incorporating cybersecurity incident response recommendations and considerations throughout their cybersecurity risk management activities as described by the NIST Cybersecurity Framework (CSF) 2.0.",
      attribution: "Alexander Nelson, Sanjay Rekhi, Murugiah Souppaya, and Karen Scarfone, NIST Special Publication 800-61 Revision 3, April 2025",
      url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
    },
    graphicSteps: [
      { step: "1", label: "Report", note: "Send facts by the safe channel" },
      { step: "2", label: "Contain", note: "Limit spread and preserve clues" },
      { step: "3", label: "Recover", note: "Restore one clean work lane" },
      { step: "4", label: "Review", note: "Fix the plan and test it" }
    ],
    accessScript: [
      "I noticed [event] at [time and time zone] while working in [account, device, or queue].",
      "The screen or message showed [exact words], and the last normal task was [task].",
      "I have [paused work, disconnected the device, or taken no action] and have not deleted files or reset accounts.",
      "The evidence available is [ticket, alert, screenshot, or log], stored at [approved location].",
      "Please confirm the safe channel and tell me whether to keep the device on, end a session, or move work."
    ],
    banners: [
      { label: "Before an alert", title: "Map named account access", body: "Use the account access guide to reduce exposure and make urgent session removal possible.", href: "/blog/philippines-outsourced-support-account-access-checklist", cta: "Open the access guide" },
      { label: "During recovery", title: "Keep the customer queue controlled", body: "Reopen a narrow inbox lane with reviewed replies and clear owner escalation rules.", href: "/services/customer-inbox-management", cta: "Plan inbox work" },
      { label: "Build the support role", title: "Bring us the task and control list", body: "Share the tools, schedule, review owner, and decisions that must remain with your business.", href: "/contact", cta: "Contact us" }
    ],
    internalLinks: [
      { href: "/services/owner-dashboard-reporting", label: "Track response actions in an owner dashboard" },
      { href: "/services/operations-support", label: "Keep response procedures with the operations support plan" },
      { href: "/blog/philippines-outsourced-support-account-access-checklist", label: "Set safer account access before an incident" }
    ],
    faqs: [
      { q: "Should a support specialist shut down a suspicious computer?", a: "Not automatically, because powering down can remove useful evidence and may interrupt containment work. Disconnect it from networks when safe, leave it powered, and follow the technical response lead's instruction." },
      { q: "What should the first incident message contain?", a: "Include the reporter, time and time zone, account or device, exact alert, current task, action already taken, and available evidence. Send it through the agreed safe channel and wait for an acknowledgement." },
      { q: "Who decides whether Philippine data breach notice is required?", a: "The business's designated decision owner should work with qualified privacy and legal advisers using the facts of the event. A frontline support specialist should report facts promptly but should not make the legal determination." },
      { q: "When can outsourced support return to work?", a: "Return after the response lead confirms a clean device, fresh credentials, corrected weakness, working logs, and an approved support lane. Restore broader permissions only after the narrow lane works as expected." }
    ],
    sources: [
      { name: "Verizon: 2026 Data Breach Investigations Report", url: "https://www.verizon.com/business/resources/reports/dbir/", note: "Published in 2026. The official report page supplies the dated 31%, 48%, and 15% findings used in the chart and narrative." },
      { name: "NIST Special Publication 800-61 Revision 3: Incident Response Recommendations and Considerations for Cybersecurity Risk Management", url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final", note: "Published in April 2025. The block quotation reproduces the first sentence of the official abstract exactly." },
      { name: "Republic Act No. 10173: Data Privacy Act of 2012", url: "https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html", note: "Official Philippine statutory text addressing personal-information security and security incidents." },
      { name: "CISA: Incident Response", url: "https://www.cisa.gov/topics/cyber-threats-and-response/incident-response", note: "Official guidance explaining why organizations need clear, executable response plans and strategies." }
    ],
    display: {
      chartEyebrow: "Dated breach evidence",
      chartHeading: "Three patterns to prepare for in 2026",
      chartTitle: "Three incident response findings from Verizon's 2026 Data Breach Investigations Report",
      chartDescription: "Horizontal bars show 31 percent of breaches starting with software vulnerabilities, 48 percent involving ransomware, and 15 percent of attack techniques bolstered by generative AI.",
      tableEyebrow: "First-action matrix",
      tableHeading: "Choose a safe first action and preserve proof",
      tableIntroduction: "Use this matrix to plan the first few minutes, then adapt it with technical and legal advisers who know your systems. Every action needs a named decision owner and a dated record.",
      tableHeaders: ["Signal", "First containment step", "Evidence to preserve", "Minimum incident record"],
      quoteHeading: "Put response inside everyday risk management",
      graphicEyebrow: "Response cycle",
      graphicHeading: "Move from report to a tested improvement",
      graphicTitle: "Four-stage outsourced support incident response cycle",
      graphicDescription: "Report facts through a safe channel, contain the event while preserving evidence, recover one clean work lane, then review and test improvements.",
      graphicNote: "The response cycle stays under business control even when a provider supplies technical help. Keep contacts, evidence, and recovery approvals somewhere the owner can reach if the normal support systems are unavailable.",
      scriptEyebrow: "Copy-ready alert",
      scriptHeading: "First incident message for a support specialist",
      relatedHeading: "Strengthen the surrounding support process"
    }
  }
} as const;

export type RichBlogDetail = (typeof richBlogDetails)[keyof typeof richBlogDetails];
