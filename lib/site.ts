// Central site configuration and content.

export const site = {
  name: "Gotta Build",
  shortName: "GB",
  tagline: "Your website should run the business, not just describe it.",
  description:
    "I shape your marketing narrative, then build the systems behind it — bookings, payments, portals, and automations — and keep everything running.",
  primaryCta: "Get a free systems audit",
  // Production domain: gotta.build
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gotta.build",
  publicContactEmail: "erik@gotta.build",
  location: "Seattle / Bellevue / Eastside",
  serviceAreas: ["Seattle", "Bellevue", "Kirkland", "Redmond", "Eastside", "Greater Seattle"],
} as const;

/** Flagship case study — live Boost Baseball site */
export const boostLiveUrl = "https://boost-orcin.vercel.app/" as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work/boost-baseball" },
  { label: "Packages", href: "/#packages" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  ...nav,
  { label: "About", href: "/#about" },
] as const;

export type Service = {
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Website Builds & Rebuilds",
    summary:
      "Conversion-focused sites with custom UX — built to explain the offer clearly and move visitors into real next steps.",
    points: ["Custom UI/UX", "Fast performance", "Conversion-focused layout"],
  },
  {
    title: "Website Narrative & Offer Strategy",
    summary:
      "Turn an unclear offer into a clear sales narrative so visitors know what you do, why it matters, and what to do next.",
    points: ["Messaging & positioning", "Offer packaging", "Page structure & CTAs"],
  },
  {
    title: "Forms, Booking & Payments",
    summary:
      "Replace manual back-and-forth with smooth signups, scheduling, deposits, and checkout flows that fit how you sell.",
    points: ["Lead capture forms", "Booking integrations", "Deposits, plans & checkout"],
  },
  {
    title: "Portals & Dashboards",
    summary:
      "Give clients and admins the tools to manage registrations, rosters, payments, and day-to-day operations in one place.",
    points: ["Client/parent portals", "Admin dashboards", "Operational tooling"],
  },
  {
    title: "AI Automations & Chatbots",
    summary:
      "Automate communication and support with practical tools that fit real workflows — intake, follow-up, and answers on demand.",
    points: ["Chatbots & agents", "Email automations", "Intake automation"],
  },
  {
    title: "Security Audits & Launch Hardening",
    summary:
      "Ship with confidence using sensible security, privacy, and launch checks before go-live.",
    points: ["Security review", "Launch hardening", "Privacy basics"],
  },
  {
    title: "Ongoing Website Management",
    summary:
      "Keep the site and systems healthy after launch — updates, analytics, conversion tweaks, and continuous improvement.",
    points: ["Updates & monitoring", "Analytics & conversion review", "Iterative improvements"],
  },
];

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
    description:
      "Shape the marketing narrative, offer packaging, and page structure so visitors instantly get it.",
    serviceTitles: ["Website Narrative & Offer Strategy"],
  },
  {
    id: "build",
    title: "Build",
    description:
      "Create the site plus the working parts behind it — forms, payments, portals, and automations.",
    serviceTitles: [
      "Website Builds & Rebuilds",
      "Forms, Booking & Payments",
      "Portals & Dashboards",
      "AI Automations & Chatbots",
    ],
  },
  {
    id: "manage",
    title: "Manage",
    description:
      "Launch securely, then measure, update, and improve the site and systems after go-live.",
    serviceTitles: ["Security Audits & Launch Hardening", "Ongoing Website Management"],
  },
];

export type BuildInclude = {
  title: string;
  description: string;
};

/** Full stack of work shown on the homepage — not product cards, a capability rail. */
export const buildIncludes: BuildInclude[] = [
  {
    title: "Marketing narrative & offer",
    description: "Positioning, message, and structure so the site sells clearly.",
  },
  {
    title: "Site & UX",
    description: "Custom pages built for speed, clarity, and conversion.",
  },
  {
    title: "Forms, booking & payments",
    description: "Signups, scheduling, deposits, and checkout that actually close.",
  },
  {
    title: "Portals & dashboards",
    description: "Tools for clients and admins to run day-to-day operations.",
  },
  {
    title: "Automations & follow-up",
    description: "Confirmations, reminders, and workflows that cut manual work.",
  },
  {
    title: "Launch & ongoing management",
    description: "Hardened go-live, then updates, measurement, and improvement.",
  },
];

export type Pkg = {
  name: string;
  setup: string;
  monthly: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

export const packages: Pkg[] = [
  {
    name: "Launch Site",
    setup: "$750–$1,500",
    monthly: "$100–$250/mo optional",
    blurb: "A credible, conversion-ready site with clear messaging and a real next step.",
    features: ["Up to ~5 pages", "Clear offer narrative", "Contact form", "Basic SEO setup"],
  },
  {
    name: "Business Site",
    setup: "$1,500–$3,000",
    monthly: "$200–$400/mo",
    blurb: "A growth-ready site with narrative, lead capture, forms, and scheduling.",
    features: ["Everything in Launch", "Booking integration", "Lead workflows", "Local SEO structure"],
    featured: true,
  },
  {
    name: "Operations System",
    setup: "$3,000–$8,000+",
    monthly: "$300–$750/mo",
    blurb: "A working system for payments, portals, admin visibility, and follow-up.",
    features: ["Payments & deposits", "Client/parent portal", "Admin dashboard", "Automations"],
  },
];

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
