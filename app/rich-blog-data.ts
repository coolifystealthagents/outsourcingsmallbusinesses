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
  }
} as const;

export type RichBlogDetail = (typeof richBlogDetails)[keyof typeof richBlogDetails];
