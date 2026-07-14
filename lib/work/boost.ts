/** Centralized Boost Baseball case-study content — keep homepage, hub, and case study in sync. */

export const boostLiveUrl = "https://boost-orcin.vercel.app/" as const;

export const boostCaseStudy = {
  slug: "boost-baseball",
  href: "/work/boost-baseball",
  name: "Boost Baseball",
  eyebrow: "Flagship Build",
  /** Short status — demo-ready, not unfinished. */
  status: "Live demo build — youth sports programs, enrollment, and operations in one system.",
  /** System-outcome headline for the case study hero (brand name stays adjacent). */
  headline: "Program discovery to paid enrollment — one connected experience.",
  summary:
    "Boost Baseball connects parent-facing program pages to enrollment, payment plans, confirmations, and administrative visibility so families can act and operators can run the business.",
  /** Homepage / hub teaser — pipeline, not a hero duplicate. */
  teaser:
    "A working youth-sports system: parents find a program, enroll, and pay — while admins see registrations, payments, and next steps.",
  metaDescription:
    "Flagship Gotta Build case study: Boost Baseball connects program discovery, enrollment, payments, parent communication, and admin visibility into one working system.",
  workflow: [
    "Program page",
    "Enrollment",
    "Payment",
    "Confirmation",
    "Admin visibility",
  ] as const,
  beforeAfter: [
    {
      before: "Program details scattered across pages, PDFs, and DMs",
      after: "Clear program pages with a direct path into enrollment",
    },
    {
      before: "Registration chase by spreadsheet and email",
      after: "Clubhouse enrollment with payment options in the same flow",
    },
    {
      before: "Admins without a live view of who signed up or paid",
      after: "Operational visibility for registrations, payments, rosters, and follow-up",
    },
  ] as const,
  walkthrough: [
    {
      id: "discover",
      step: "01",
      title: "Discover",
      text: "Parents land on a clear program offer and understand what to do next.",
      visual: "screenshot" as const,
      src: "/work/boost/teams.jpg",
      alt: "Boost Baseball Select Teams page — age lanes, season plan, and clear next steps",
      label: "Program offer",
      caption: "Parents see programs and a clear path into enrollment.",
      href: "https://boost-orcin.vercel.app/teams",
    },
    {
      id: "enroll",
      step: "02",
      title: "Enroll & pay",
      text: "Registration starts in Clubhouse — families enroll and choose a payment option without spreadsheet chase.",
      visual: "screenshot" as const,
      src: "/work/boost/tryouts.jpg",
      alt: "Boost Baseball Clubhouse tryout registration",
      label: "Enrollment flow",
      caption: "Enrollment and payment path in one connected flow.",
      href: "https://boost-orcin.vercel.app/tryouts",
    },
    {
      id: "confirm",
      step: "03",
      title: "Confirm",
      text: "Confirmation and communication fire from the real action — not a separate manual follow-up list.",
      visual: "screenshot" as const,
      src: "/work/boost/home.jpg",
      alt: "Boost Baseball homepage — Bellevue baseball development site",
      label: "Public site",
      caption: "Marketing stays connected to the enrollment system behind it.",
      href: "https://boost-orcin.vercel.app/",
    },
    {
      id: "operate",
      step: "04",
      title: "Operate",
      text: "Administrators see registrations, payments, and operational data that supports rosters, budgets, and follow-up.",
      visual: "system-preview" as const,
      caption: "Ops view — illustrative system overview until admin captures are published.",
    },
  ] as const,
  evidence: [
    {
      src: "/work/boost/home.jpg",
      alt: "Boost Baseball homepage — Bellevue baseball development site",
      label: "boost-orcin.vercel.app",
      caption: "Program discovery on the public site.",
      href: "https://boost-orcin.vercel.app/",
    },
    {
      src: "/work/boost/teams.jpg",
      alt: "Boost Baseball Select Teams page — age lanes, season plan, and clear next steps",
      label: "Program offer",
      caption: "Offer clarity that leads into enrollment.",
      href: "https://boost-orcin.vercel.app/teams",
    },
    {
      src: "/work/boost/tryouts.jpg",
      alt: "Boost Baseball Clubhouse tryout registration",
      label: "Enrollment flow",
      caption: "Registration without spreadsheet chase.",
      href: "https://boost-orcin.vercel.app/tryouts",
    },
  ] as const,
  shipped: [
    "Parent-facing program discovery and offer pages",
    "Enrollment / registration flow (Clubhouse)",
    "Payment options and plan path",
    "Confirmation and communication triggers",
    "Administrative visibility for registrations and payments",
    "Operational data for rosters, budgets, and follow-up",
  ] as const,
  fit: {
    who: "Best fit for businesses that enroll people, collect deposits or plans, and need one place to see what happened next.",
    packages: [
      { name: "Operations System", href: "/#pricing", note: "Closest match — payments, portals, admin workflows" },
      { name: "Business Site + Lead System", href: "/#pricing", note: "When intake and routing come first" },
    ],
    servicesHref: "/services#bookings-payments-portals",
    servicesLabel: "Bookings, payments, and portals",
  },
  jumpLinks: [
    { href: "#challenge", label: "Challenge" },
    { href: "#walkthrough", label: "Walkthrough" },
    { href: "#evidence", label: "Evidence" },
    { href: "#fit", label: "Fit" },
  ] as const,
} as const;

/** @deprecated Prefer boostCaseStudy.workflow */
export const boostWorkflow = boostCaseStudy.workflow;

/** Legacy 6-step cards — walkthrough supersedes for the case study page. */
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

export const boostStatus = boostCaseStudy.status;
