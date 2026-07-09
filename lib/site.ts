// Central site configuration and content.
// Business/brand identifiers are intentionally TBD until confirmed.

export const site = {
  // Final brand name is still being confirmed. This placeholder is launch-safe.
  name: "Website Systems Studio",
  shortName: "WSS",
  tagline: "Your website should run the business, not just describe it.",
  description:
    "I build small-business websites with the systems behind them — bookings, payments, portals, and automations — then keep everything running.",
  // Replace with the production domain before public launch.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  // Keep null until a real public inbox is approved.
  publicContactEmail: null as string | null,
  location: "Seattle / Bellevue / Eastside",
  serviceAreas: ["Seattle", "Bellevue", "Kirkland", "Redmond", "Eastside", "Greater Seattle"],
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Case Study", href: "/work/boost-baseball" },
  { label: "How it works", href: "/#what-i-do" },
  { label: "Packages", href: "/#packages" },
  { label: "Contact", href: "/contact" },
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
      "Modern, mobile-first websites that load fast and clearly explain what you do.",
    points: ["Responsive design", "Fast performance", "Conversion-focused layout"],
  },
  {
    title: "Website Narrative & Offer Strategy",
    summary:
      "Turn an unclear website into a clear sales narrative so visitors know what to do next.",
    points: ["Messaging & positioning", "Offer packaging", "Stronger CTAs"],
  },
  {
    title: "Forms, Booking & Payments",
    summary:
      "Replace manual back-and-forth with smooth signups, scheduling, and payment flows.",
    points: ["Lead capture forms", "Booking integrations", "Deposits & checkout"],
  },
  {
    title: "Portals & Dashboards",
    summary:
      "Give clients and admins the tools to manage registrations, rosters, and operations.",
    points: ["Client/parent portals", "Admin dashboards", "Operational tooling"],
  },
  {
    title: "AI Automations & Chatbots",
    summary:
      "Automate communication and support with practical AI that fits real workflows.",
    points: ["AI chatbots/agents", "Email automations", "Intake automation"],
  },
  {
    title: "Security Audits & Launch Hardening",
    summary:
      "Ship with confidence using sensible security, privacy, and launch checks.",
    points: ["Security review", "Launch hardening", "Privacy basics"],
  },
  {
    title: "Ongoing Website Management",
    summary:
      "Keep the site healthy with updates, analytics, and continuous improvements.",
    points: ["Updates & monitoring", "Analytics review", "Iterative improvements"],
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
      "Make the offer, audience, and next step obvious.",
    serviceTitles: ["Website Narrative & Offer Strategy"],
  },
  {
    id: "build",
    title: "Build",
    description:
      "Create the pages, forms, payments, portals, and automations that support the business.",
    serviceTitles: [
      "Website Builds & Rebuilds",
      "Forms, Booking & Payments",
      "Portals & Dashboards",
      "AI Automations & Chatbots",
      "Security Audits & Launch Hardening",
    ],
  },
  {
    id: "manage",
    title: "Manage",
    description:
      "Keep the site updated, measured, secure, and improving after launch.",
    serviceTitles: ["Ongoing Website Management"],
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
    blurb: "Getting online with a credible, conversion-ready site.",
    features: ["Up to ~5 pages", "Mobile-first design", "Contact form", "Basic SEO setup"],
  },
  {
    name: "Business Website + Forms/Booking",
    setup: "$1,500–$3,000",
    monthly: "$200–$400/mo",
    blurb: "A growth-ready site with lead capture and scheduling.",
    features: ["Everything in Launch", "Booking integration", "Lead workflows", "Local SEO structure"],
    featured: true,
  },
  {
    name: "Website + Payments/Portal/Admin",
    setup: "$3,000–$8,000+",
    monthly: "$300–$750/mo",
    blurb: "A working system for payments, portals, and admin visibility.",
    features: ["Payments & deposits", "Client/parent portal", "Admin dashboard", "Automations"],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Audit", description: "Find the clearest first fixes." },
  { step: "02", title: "Scope", description: "Choose the smallest useful build." },
  { step: "03", title: "Build", description: "Create the pages and systems." },
  { step: "04", title: "Launch", description: "Test, harden, and publish." },
  { step: "05", title: "Manage", description: "Measure, update, and improve." },
];
