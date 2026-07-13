// Central site configuration and content.

export const site = {
  name: "Gotta Build",
  shortName: "GB",
  tagline: "Your website should run the business, not just describe it.",
  description:
    "Gotta Build creates modern websites and digital systems that turn clear messaging into leads, bookings, payments, portals, automation, and smoother operations.",
  primaryCta: "Request an Audit",
  auditCta: "Request a Website Audit",
  auditSpotCta: "Request an Audit Spot",
  secondaryCta: "View the Boost Baseball Build",
  fitCallCta: "Book a 20-Minute Fit Call",
  foundingCta: "Apply for a Founding Client Project",
  // Production domain: gotta.build
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gotta.build",
  publicContactEmail: "erik@gotta.build",
  location: "Seattle / Bellevue / Eastside",
  locationTrust:
    "Founder-led in Seattle and Bellevue. Built for local businesses and delivered wherever the work happens.",
  serviceAreas: ["Seattle", "Bellevue", "Kirkland", "Redmond", "Eastside", "Greater Seattle"],
  founderName: "Erik Gotta",
  founderTitle: "Founder and Builder",
  /** Empty until a scheduling link is configured in env. */
  fitCallUrl: process.env.NEXT_PUBLIC_FIT_CALL_URL?.trim() || "",
  foundingSlotsRemaining: 3,
} as const;

/** Flagship case study — live Boost Baseball site */
export const boostLiveUrl = "https://boost-orcin.vercel.app/" as const;

export const boostStatus =
  "A flagship product and operations platform currently being prepared for launch." as const;

export const nav = [
  { label: "Work", href: "/work/boost-baseball" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
] as const;

export const footerNav = [
  ...nav,
  { label: "Request an Audit", href: "/contact" },
  { label: "Design lab", href: "/design-lab" },
] as const;

export const heroTrustStrip = [
  "Founder-led",
  "Seattle and Eastside",
  "Custom-built systems",
  "Ongoing management available",
] as const;

export const frameworkStages = [
  {
    step: "01",
    title: "Message",
    description: "Make the business clear, credible, and easy to understand.",
    nodes: ["Clear offer", "Why it matters", "Obvious next step"],
  },
  {
    step: "02",
    title: "Conversion",
    description: "Give visitors a direct path to inquire, book, register, apply, or pay.",
    nodes: ["Form or booking", "Payment", "Confirmation"],
  },
  {
    step: "03",
    title: "Operations",
    description:
      "Connect those actions to portals, dashboards, communication, automation, and management.",
    nodes: ["Lead lands cleanly", "Follow-up runs", "You see what's next"],
  },
] as const;

export type Service = {
  title: string;
  summary: string;
  points: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    title: "Website strategy",
    summary: "Position the offer and structure the site so visitors know what to do next.",
    points: ["Messaging", "Page structure", "CTA paths"],
    outcome: "More qualified leads",
  },
  {
    title: "Messaging and page structure",
    summary: "Clarify who it is for, what you offer, and why it matters.",
    points: ["Offer clarity", "Narrative", "Conversion copy"],
    outcome: "More qualified leads",
  },
  {
    title: "Mobile-first design",
    summary: "Custom pages built for clarity, speed, and action on every device.",
    points: ["Custom UI", "Responsive layouts", "Performance basics"],
    outcome: "Easier customer actions",
  },
  {
    title: "Landing pages",
    summary: "Focused pages that turn attention into inquiries and bookings.",
    points: ["Campaign pages", "Clear CTAs", "Offer packaging"],
    outcome: "More qualified leads",
  },
  {
    title: "Lead-generation flows",
    summary: "Forms and intake paths that capture the right details without friction.",
    points: ["Lead forms", "Quote requests", "Intake routing"],
    outcome: "More qualified leads",
  },
  {
    title: "Local SEO foundations",
    summary: "Practical structure so local searches can find and trust the business.",
    points: ["On-page basics", "Local signals", "Technical hygiene"],
    outcome: "More qualified leads",
  },
  {
    title: "Booking systems",
    summary: "Scheduling that matches how the business actually sells.",
    points: ["Appointment booking", "Availability", "Confirmations"],
    outcome: "Easier customer actions",
  },
  {
    title: "Applications and registrations",
    summary: "Enrollment and application flows that replace manual back-and-forth.",
    points: ["Registration", "Applications", "Program enrollment"],
    outcome: "Easier customer actions",
  },
  {
    title: "Deposits and payments",
    summary: "Collect deposits and payments as part of the same customer path.",
    points: ["Checkout", "Deposits", "Receipts"],
    outcome: "Easier customer actions",
  },
  {
    title: "Payment plans",
    summary: "Installment options with visibility for both customers and admins.",
    points: ["Plan selection", "Tracking", "Follow-up"],
    outcome: "Better operational visibility",
  },
  {
    title: "Client or parent portals",
    summary: "Self-serve access for clients, members, or parents after signup.",
    points: ["Account access", "Status visibility", "Communication"],
    outcome: "Less manual work",
  },
  {
    title: "Administrative dashboards",
    summary: "One place to see registrations, payments, and next actions.",
    points: ["Ops visibility", "Filters & exports", "Role-based access"],
    outcome: "Better operational visibility",
  },
  {
    title: "Website chatbots",
    summary: "Practical chat agents that answer common questions and capture leads.",
    points: ["Site chat", "FAQ answers", "Lead capture"],
    outcome: "Less manual work",
  },
  {
    title: "Lead qualification",
    summary: "Route serious inquiries and collect the details needed for follow-up.",
    points: ["Qualification questions", "Handoff", "CRM-ready details"],
    outcome: "More qualified leads",
  },
  {
    title: "FAQ assistants",
    summary: "Reduce repetitive questions without blocking human contact.",
    points: ["Common answers", "Escalation path", "Content updates"],
    outcome: "Less manual work",
  },
  {
    title: "Internal workflow agents",
    summary: "AI helpers for internal steps that still need human review.",
    points: ["Draft responses", "Summaries", "Task assistance"],
    outcome: "Less manual work",
  },
  {
    title: "Email automation",
    summary: "Confirmations and follow-up that fire from real customer actions.",
    points: ["Confirmations", "Sequences", "Templates"],
    outcome: "Less manual work",
  },
  {
    title: "Follow-up systems",
    summary: "Keep leads and customers moving without living in the inbox.",
    points: ["Reminders", "Nurture paths", "Status updates"],
    outcome: "Less manual work",
  },
  {
    title: "CRM routing",
    summary: "Send inquiries to the right place with the context needed to respond.",
    points: ["Inbox routing", "Tags", "Hand-off rules"],
    outcome: "Better operational visibility",
  },
  {
    title: "Search-focused content systems",
    summary: "Content workflows aimed at search visibility and clearer answers.",
    points: ["Topic structure", "Page briefs", "Publishing cadence"],
    outcome: "More qualified leads",
  },
  {
    title: "AI-assisted content workflows",
    summary: "Faster drafting and repurposing with human review before publish.",
    points: ["Draft support", "Editing flow", "Publishing checks"],
    outcome: "Less manual work",
  },
  {
    title: "Answer-engine optimization",
    summary: "Structure content so people and answer engines can find clear answers.",
    points: ["FAQ structure", "Clear entities", "Helpful pages"],
    outcome: "More qualified leads",
  },
  {
    title: "Social publishing workflows",
    summary: "Scheduled posting and light content systems that stay consistent.",
    points: ["Scheduling", "Cross-channel posts", "Approval steps"],
    outcome: "Less manual work",
  },
  {
    title: "Content repurposing",
    summary: "Turn one strong piece into usable formats across channels.",
    points: ["Reuse pipelines", "Format variants", "Review gates"],
    outcome: "Less manual work",
  },
  {
    title: "Automated content distribution",
    summary: "Distribute approved content without manual copy-paste every time.",
    points: ["Distribution rules", "Channel mapping", "Status checks"],
    outcome: "Less manual work",
  },
  {
    title: "Analytics implementation",
    summary: "Track the actions that matter: visits, inquiries, bookings, and payments.",
    points: ["Event tracking", "Funnels", "Dashboards"],
    outcome: "Better operational visibility",
  },
  {
    title: "Conversion tracking",
    summary: "Know which pages and campaigns produce real next steps.",
    points: ["Goals", "Attribution basics", "Review cadence"],
    outcome: "More qualified leads",
  },
  {
    title: "Security reviews",
    summary: "Practical security and privacy checks before and after launch.",
    points: ["Risk review", "Access checks", "Privacy basics"],
    outcome: "More reliable systems",
  },
  {
    title: "Launch hardening",
    summary: "Ship with sensible checks, monitoring, and go-live readiness.",
    points: ["Launch checklist", "Hardening passes", "Go-live support"],
    outcome: "More reliable systems",
  },
  {
    title: "Monitoring",
    summary: "Watch uptime, errors, and critical workflows after launch.",
    points: ["Uptime", "Alerts", "Dependency health"],
    outcome: "More reliable systems",
  },
  {
    title: "Updates",
    summary: "Keep dependencies, content, and small fixes current.",
    points: ["Dependency updates", "Content edits", "Bug fixes"],
    outcome: "More reliable systems",
  },
  {
    title: "Workflow maintenance",
    summary: "Keep forms, payments, and automations working as the business changes.",
    points: ["Flow checks", "Integration health", "Adjustments"],
    outcome: "More reliable systems",
  },
  {
    title: "Continuous improvements",
    summary: "Iterate on messaging, conversion, and operations after launch.",
    points: ["Conversion tweaks", "UX fixes", "System upgrades"],
    outcome: "More qualified leads",
  },
];

export type ServiceGroup = {
  id: string;
  title: string;
  summary: string;
  outcome: string;
  serviceTitles: Service["title"][];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "websites-conversion",
    title: "Websites and Conversion",
    summary: "Clear messaging and conversion-ready sites that attract the right customers.",
    outcome: "More qualified leads",
    serviceTitles: [
      "Website strategy",
      "Messaging and page structure",
      "Mobile-first design",
      "Landing pages",
      "Lead-generation flows",
      "Local SEO foundations",
    ],
  },
  {
    id: "bookings-payments-portals",
    title: "Bookings, Payments, and Portals",
    summary: "Turn interest into bookings, registrations, payments, and admin visibility.",
    outcome: "Easier customer actions",
    serviceTitles: [
      "Booking systems",
      "Applications and registrations",
      "Deposits and payments",
      "Payment plans",
      "Client or parent portals",
      "Administrative dashboards",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Chatbots and Workflow Automation",
    summary: "Reduce repetitive questions and keep follow-up moving without extra busywork.",
    outcome: "Less manual work",
    serviceTitles: [
      "Website chatbots",
      "Lead qualification",
      "FAQ assistants",
      "Internal workflow agents",
      "Email automation",
      "Follow-up systems",
      "CRM routing",
    ],
  },
  {
    id: "ai-seo-content",
    title: "AI SEO and Content Systems",
    summary: "Search, content, and social workflows that stay consistent after launch.",
    outcome: "More qualified leads",
    serviceTitles: [
      "Search-focused content systems",
      "AI-assisted content workflows",
      "Answer-engine optimization",
      "Social publishing workflows",
      "Content repurposing",
      "Automated content distribution",
    ],
  },
  {
    id: "security-analytics-management",
    title: "Security, Analytics, and Ongoing Management",
    summary: "Measure what matters, harden the launch, and keep the system reliable.",
    outcome: "More reliable systems",
    serviceTitles: [
      "Analytics implementation",
      "Conversion tracking",
      "Security reviews",
      "Launch hardening",
      "Monitoring",
      "Updates",
      "Workflow maintenance",
      "Continuous improvements",
    ],
  },
];

/** @deprecated Prefer serviceGroups — kept for any remaining clarify/build/manage references during migration. */
export type ServiceBucket = {
  id: "clarify" | "build" | "manage";
  title: string;
  description: string;
  serviceTitles: Service["title"][];
};

export const serviceBuckets: ServiceBucket[] = [
  {
    id: "clarify",
    title: "Clarify",
    description: "Shape the message and page structure so visitors instantly get it.",
    serviceTitles: ["Website strategy", "Messaging and page structure"],
  },
  {
    id: "build",
    title: "Build",
    description: "Create the site plus bookings, payments, portals, and automation.",
    serviceTitles: [
      "Mobile-first design",
      "Booking systems",
      "Deposits and payments",
      "Administrative dashboards",
      "Website chatbots",
      "Email automation",
    ],
  },
  {
    id: "manage",
    title: "Manage",
    description: "Launch securely, then measure, update, and improve after go-live.",
    serviceTitles: ["Security reviews", "Launch hardening", "Continuous improvements"],
  },
];

export type StallFixCard = {
  title: string;
  problem: string;
  solution: string;
};

export const stallFixCards: StallFixCard[] = [
  {
    title: "Clarify",
    problem:
      "Visitors cannot quickly understand the offer, who it is for, or why they should care.",
    solution: "Clarify the message, structure the page, and create a direct path toward action.",
  },
  {
    title: "Build",
    problem:
      "The website explains the business but does not help visitors book, register, apply, inquire, or pay.",
    solution:
      "Build the forms, booking flows, payments, portals, and integrations that turn attention into action.",
  },
  {
    title: "Manage",
    problem:
      "New inquiries and transactions create disconnected emails, spreadsheets, manual follow-up, and lost visibility.",
    solution:
      "Connect the website to dashboards, communication, automation, analytics, security, and ongoing management.",
  },
];

export type Pkg = {
  name: string;
  setup: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  note?: string;
};

export const packages: Pkg[] = [
  {
    name: "Launch Site",
    setup: "$1,250",
    blurb: "For businesses that need a professional, clear, conversion-ready website.",
    features: [
      "Messaging and page structure",
      "Mobile-first custom website",
      "Up to five core pages",
      "Contact or quote-request flow",
      "Basic local SEO structure",
      "Analytics setup",
      "Launch support",
    ],
    note: "Scope stays focused at this price — no extensive custom integrations or unlimited revisions.",
  },
  {
    name: "Business Site + Lead System",
    setup: "$2,500",
    blurb: "For businesses that need the website to produce, organize, and route inquiries.",
    features: [
      "Everything in Launch Site",
      "More detailed messaging work",
      "Booking, application, intake, or registration flow",
      "Automated confirmations",
      "CRM or email routing",
      "Conversion tracking",
      "Advanced forms",
      "Stronger local SEO structure",
      "Launch and workflow testing",
    ],
    featured: true,
  },
  {
    name: "Operations System",
    setup: "$4,500",
    blurb:
      "For businesses managing payments, enrollment, clients, members, programs, or recurring workflows.",
    features: [
      "Payment or deposit workflows",
      "Payment plans",
      "Customer, client, member, or parent portals",
      "Administrative dashboards",
      "Workflow automation",
      "Email communication systems",
      "Third-party integrations",
      "Role-based access",
      "Reporting",
      "Testing and launch documentation",
    ],
    note: "Operations systems are scoped around the smallest useful workflow first. Larger platforms are phased and priced based on complexity. Typical projects begin at $4,500 and increase with system complexity.",
  },
];

export type ManagementPkg = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
};

export const managementPackages: ManagementPkg[] = [
  {
    name: "Care",
    price: "$125/month",
    blurb: "Keep the site healthy after launch.",
    features: [
      "Hosting oversight",
      "Uptime monitoring",
      "Security and dependency updates",
      "Backups or recovery support",
      "Small content updates",
      "General maintenance",
    ],
  },
  {
    name: "Growth",
    price: "$300/month",
    blurb: "Improve conversion and content over time.",
    features: [
      "Everything in Care",
      "Analytics review",
      "Conversion improvements",
      "Form and workflow monitoring",
      "Defined monthly update capacity",
      "Basic reporting",
      "SEO and content improvements",
    ],
  },
  {
    name: "Systems",
    price: "$600/month",
    blurb: "Monitor and improve portals, payments, and automations.",
    features: [
      "Portal, payment, and automation monitoring",
      "Priority support",
      "Workflow adjustments",
      "Operational reporting",
      "Continuous system improvements",
      "Defined monthly development capacity",
    ],
  },
];

export const foundingOffer = {
  title: "Founding Client Offer",
  body: "I’m accepting three qualified Seattle and Eastside businesses at a reduced project rate in exchange for structured feedback and permission to document the completed work as a case study.",
  support:
    "You will receive the same scoped build process at a reduced introductory rate. Availability is limited to three projects and depends on project fit.",
  expectations: [
    "Timely feedback",
    "Reasonable access to required information",
    "Permission to document the work",
    "An honest testimonial if you are satisfied",
    "Permission to use approved screenshots and project details",
  ],
} as const;

export const auditDeliverables = [
  "Website and messaging review",
  "Conversion-path review",
  "Mobile and usability review",
  "Search and credibility review",
  "Booking, payment, portal, or automation opportunities",
  "Top three recommended improvements",
  "Suggested next step",
] as const;

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Audit", description: "Review site, offer, and workflows — clearest first fixes." },
  { step: "02", title: "Scope", description: "Define the smallest useful system build, not busywork." },
  { step: "03", title: "Build", description: "Ship narrative, pages, and the systems behind them." },
  { step: "04", title: "Launch", description: "Test, harden, and publish with confidence." },
  { step: "05", title: "Manage", description: "Measure, update, and keep improving after go-live." },
];

export const boostWorkflow = [
  "Program page",
  "Enrollment",
  "Payment",
  "Confirmation",
  "Admin visibility",
] as const;

export const boostDemoFlow = [
  { step: "01", title: "View program", text: "Parent views a program and understands the offer." },
  { step: "02", title: "Start enrollment", text: "Parent starts enrollment for their player." },
  { step: "03", title: "Choose payment", text: "Parent selects a payment option or plan." },
  { step: "04", title: "Confirm", text: "Confirmation and communication are triggered." },
  { step: "05", title: "Admin visibility", text: "Administrators see registration and payment information." },
  {
    step: "06",
    title: "Operate",
    text: "Operational data supports rosters, budgets, and follow-up.",
  },
] as const;

export type BoostStageItem = {
  label: string;
  stage: "complete" | "testing" | "planned";
};

export const boostFeatureStages: BoostStageItem[] = [
  { label: "Program discovery pages", stage: "complete" },
  { label: "Enrollment / registration flow", stage: "complete" },
  { label: "Payment options and plans", stage: "testing" },
  { label: "Confirmation messaging", stage: "testing" },
  { label: "Parent-facing Clubhouse access", stage: "testing" },
  { label: "Admin registration visibility", stage: "testing" },
  { label: "Roster tooling", stage: "planned" },
  { label: "Budget tracking and exports", stage: "planned" },
];
