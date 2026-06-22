// Central site configuration and content.
// Business/brand identifiers are intentionally TBD until confirmed.

export const site = {
  // Final brand name is still being confirmed. This placeholder is launch-safe.
  name: "Website Systems Studio",
  shortName: "WSS",
  tagline: "Websites that explain, sell, and run better.",
  description:
    "I build modern websites and digital systems for small businesses — with clearer messaging, smoother signups, payments, automations, and ongoing support.",
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
  { label: "Process", href: "/#process" },
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
      "Define the narrative, offer structure, and CTA flow so visitors understand what you do and what to do next.",
    serviceTitles: ["Website Narrative & Offer Strategy"],
  },
  {
    id: "build",
    title: "Build",
    description:
      "Implement the pages, forms, payments, and operations tooling that turn marketing into a working system.",
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
      "Keep the system healthy after launch with updates, analytics, hardening, and ongoing optimization.",
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
    blurb: "A clean, credible site to get online and start converting.",
    features: ["Up to ~5 pages", "Mobile-first design", "Contact form", "Basic SEO setup"],
  },
  {
    name: "Business Website + Forms/Booking",
    setup: "$1,500–$3,000",
    monthly: "$200–$400/mo",
    blurb: "A growth-ready site with lead capture and scheduling built in.",
    features: ["Everything in Launch", "Booking integration", "Lead workflows", "Local SEO structure"],
    featured: true,
  },
  {
    name: "Website + Payments/Portal/Admin",
    setup: "$3,000–$8,000+",
    monthly: "$300–$750/mo",
    blurb: "A digital system with payments, portals, and admin tooling.",
    features: ["Payments & deposits", "Client/parent portal", "Admin dashboard", "Automations"],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Audit", description: "Review your site, offer, and workflows to find what's costing you leads." },
  { step: "02", title: "Scope", description: "Define a focused plan with clear deliverables and realistic pricing." },
  { step: "03", title: "Build", description: "Design and develop a mobile-first site and the systems behind it." },
  { step: "04", title: "Launch", description: "Test, harden, and ship with SEO and analytics in place." },
  { step: "05", title: "Manage", description: "Maintain, measure, and improve with ongoing support." },
];

export type Framework = {
  title: string;
  description: string;
  items: string[];
};

export const framework: Framework[] = [
  {
    title: "Clarify",
    description: "Messaging, offer structure, website narrative, and conversion flow.",
    items: ["Positioning & narrative", "Offer packaging", "CTA & service pages"],
  },
  {
    title: "Build",
    description: "Mobile-first websites and the systems that run behind them.",
    items: ["Websites & landing pages", "Forms, booking, payments", "Portals & dashboards"],
  },
  {
    title: "Manage",
    description: "Ongoing updates, analytics, security checks, and automation.",
    items: ["Updates & monitoring", "Analytics & conversion", "AI support & automations"],
  },
];
