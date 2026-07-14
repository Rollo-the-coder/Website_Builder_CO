// Central site configuration and content.

export const site = {
  name: "Gotta Build",
  shortName: "GB",
  tagline: "Your website should run the business, not just describe it.",
  description:
    "Gotta Build creates modern websites and digital systems that turn clear messaging into leads, bookings, payments, portals, automation, and smoother operations.",
  /** One-line hero support for mobile first viewport. */
  mobileHeroSupport:
    "Websites and systems that turn attention into leads, bookings, and smoother operations.",
  primaryCta: "Request an Audit",
  auditCta: "Request a Website Audit",
  auditSpotCta: "Request an Audit Spot",
  secondaryCta: "View Boost Case Study",
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
  foundingSlotsRemaining: 2,
} as const;

export {
  boostCaseStudy,
  boostDemoFlow,
  boostLiveUrl,
  boostStatus,
  boostWorkflow,
} from "@/lib/work/boost";

export const nav = [
  { label: "Work", href: "/work" },
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
  { label: "Founder-led", detail: "You work with Erik directly" },
  { label: "Seattle and Eastside", detail: "Local first, remote-ready" },
  { label: "Custom-built systems", detail: "Built for your workflow" },
  { label: "Ongoing management", detail: "Support after launch" },
] as const;

export const frameworkStages = [
  {
    step: "01",
    title: "Clarify",
    problem: "Visitors bounce when the offer, audience, or next step is unclear.",
    solution:
      "Shape messaging, page structure, and conversion paths so the right people know what to do.",
  },
  {
    step: "02",
    title: "Build",
    problem: "A nice site still fails if people cannot book, enroll, inquire, or pay.",
    solution:
      "Add the working pieces — bookings, payments, portals, chatbots, and automations — that turn attention into action.",
  },
  {
    step: "03",
    title: "Manage",
    problem:
      "After launch, follow-up, tracking, and upkeep fall back into inbox and spreadsheet chaos.",
    solution:
      "Keep the system reliable with analytics, security, content/SEO systems, and ongoing management.",
  },
] as const;

export type ServicePoint = {
  label: string;
  detail: string;
};

export type Service = {
  title: string;
  /** One-line summary shown in the collapsed row. */
  summary: string;
  /** Fuller plain-English explanation shown when the row is expanded. */
  description: string;
  /** What the service includes, each with a short plain-English detail. */
  points: ServicePoint[];
  /** Who this service is the right fit for. */
  bestFor: string;
  outcome: string;
};

export const services: Service[] = [
  {
    title: "Website strategy",
    summary: "Decide what the site needs to accomplish before anything gets designed or built.",
    description:
      "Before any design work starts, we map out what the site actually needs to do: who it serves, what action each visitor should take, and which pages earn a place. The result is a simple blueprint that keeps the build focused on results instead of decoration.",
    points: [
      {
        label: "Messaging plan",
        detail: "The core promise of the business, written in the words your customers actually use.",
      },
      {
        label: "Page structure",
        detail: "Which pages the site needs, what each one is for, and how visitors move between them.",
      },
      {
        label: "Call-to-action paths",
        detail: "A deliberate route from every page to an inquiry, booking, or purchase — no dead ends.",
      },
    ],
    bestFor: "Businesses whose current site looks fine but doesn't produce inquiries.",
    outcome: "More qualified leads",
  },
  {
    title: "Messaging and page structure",
    summary: "Say who it's for, what you offer, and why it matters — in seconds, not paragraphs.",
    description:
      "Most sites lose visitors in the first few seconds because the message is vague. This work rewrites and reorganizes your pages so a first-time visitor immediately understands the offer, sees themselves in it, and knows the next step. It's copywriting grounded in how people actually scan web pages.",
    points: [
      {
        label: "Offer clarity",
        detail: "A headline and supporting copy that pass the five-second test: what is this, and is it for me?",
      },
      {
        label: "Narrative flow",
        detail: "Pages ordered the way a buyer thinks — problem, solution, proof, next step.",
      },
      {
        label: "Conversion copy",
        detail: "Buttons, forms, and section text written to move people toward action, not just describe.",
      },
    ],
    bestFor: "Businesses that get traffic but hear \"I didn't realize you did that.\"",
    outcome: "More qualified leads",
  },
  {
    title: "Mobile-first design",
    summary: "Custom pages designed for the phone screen first, since that's where most visitors are.",
    description:
      "More than half of your visitors will only ever see the site on a phone, so we design for that screen first and scale up to tablets and desktops. Every page is custom-built — no templates — and tuned to load fast, because slow pages quietly lose customers before they read a word.",
    points: [
      {
        label: "Custom interface",
        detail: "Designed for your brand and offer rather than adapted from a generic theme.",
      },
      {
        label: "Responsive layouts",
        detail: "One site that reflows cleanly across phones, tablets, and desktops — tested, not assumed.",
      },
      {
        label: "Performance tuning",
        detail: "Optimized images, lean code, and fast load times, which also help search rankings.",
      },
    ],
    bestFor: "Businesses whose current site is hard to read or use on a phone.",
    outcome: "Easier customer actions",
  },
  {
    title: "Landing pages",
    summary: "Single-purpose pages that turn ad clicks and campaign traffic into inquiries.",
    description:
      "A landing page is a standalone page built for one campaign and one action — book, register, request a quote. Because it strips away navigation and competing messages, it converts paid clicks and promotions far better than sending people to your homepage.",
    points: [
      {
        label: "Campaign pages",
        detail: "Dedicated pages matched to a specific ad, offer, season, or audience.",
      },
      {
        label: "One clear action",
        detail: "A single call to action repeated at the right moments, with distractions removed.",
      },
      {
        label: "Offer packaging",
        detail: "Pricing, proof, and urgency arranged so the decision feels easy and low-risk.",
      },
    ],
    bestFor: "Businesses running ads or promotions that currently point at the homepage.",
    outcome: "More qualified leads",
  },
  {
    title: "Lead-generation flows",
    summary: "Forms and intake steps that capture the right details without scaring people off.",
    description:
      "A lead flow is everything between \"I'm interested\" and \"someone followed up.\" We design forms that ask for just enough information, break longer intakes into easy steps, and route each submission to the right inbox or system — so leads arrive complete and nothing falls through.",
    points: [
      {
        label: "Lead forms",
        detail: "Short, friendly forms that collect what you need to respond well — and nothing extra.",
      },
      {
        label: "Quote requests",
        detail: "Structured intake for project details so estimates start with real information.",
      },
      {
        label: "Intake routing",
        detail: "Each submission lands with the right person, tagged and organized automatically.",
      },
    ],
    bestFor: "Businesses whose contact form produces vague or incomplete inquiries.",
    outcome: "More qualified leads",
  },
  {
    title: "Local SEO foundations",
    summary: "Structure the site so people searching nearby can find and trust the business.",
    description:
      "When someone searches \"near me,\" Google decides who shows up based on signals it can read from your site: service areas, business details, page structure, and technical health. This work puts those signals in place properly — the unglamorous foundation that local visibility is built on.",
    points: [
      {
        label: "On-page basics",
        detail: "Page titles, headings, and descriptions written for both searchers and search engines.",
      },
      {
        label: "Local signals",
        detail: "Service areas, business information, and structured data that tell Google exactly who and where you serve.",
      },
      {
        label: "Technical hygiene",
        detail: "Fast pages, clean links, and a crawlable structure so nothing holds rankings back.",
      },
    ],
    bestFor: "Local businesses that don't show up when customers search for what they do.",
    outcome: "More qualified leads",
  },
  {
    title: "Booking systems",
    summary: "Let customers pick a time and book online, matched to how you actually schedule.",
    description:
      "Instead of phone tag and email back-and-forth, customers see your real availability, pick a time, and get an instant confirmation. We build the booking flow around how your business actually operates — services, durations, staff, locations — rather than forcing you into a generic scheduling tool.",
    points: [
      {
        label: "Appointment booking",
        detail: "Customers book directly from the site, on any device, at any hour.",
      },
      {
        label: "Availability rules",
        detail: "Your real schedule, buffers, and capacity limits — so double-bookings can't happen.",
      },
      {
        label: "Confirmations and reminders",
        detail: "Automatic emails or texts that confirm the booking and cut down on no-shows.",
      },
    ],
    bestFor: "Businesses booking appointments by phone, text, or email threads today.",
    outcome: "Easier customer actions",
  },
  {
    title: "Applications and registrations",
    summary: "Online enrollment that replaces paper forms, PDFs, and email attachments.",
    description:
      "If people sign up for your programs, classes, or services through printed forms or emailed PDFs, every registration means manual data entry and chasing missing information. We build online flows that collect everything in one pass, validate it as it's entered, and store it where your team can actually use it.",
    points: [
      {
        label: "Registration flows",
        detail: "Step-by-step signup that collects participant details, waivers, and selections in one visit.",
      },
      {
        label: "Applications",
        detail: "Structured application forms with required fields, file uploads, and automatic acknowledgment.",
      },
      {
        label: "Program enrollment",
        detail: "Sessions, capacity limits, and rosters handled by the system instead of a spreadsheet.",
      },
    ],
    bestFor: "Programs, camps, leagues, and services that enroll people in batches.",
    outcome: "Easier customer actions",
  },
  {
    title: "Deposits and payments",
    summary: "Take payment in the same flow as the booking or signup — no invoice chasing.",
    description:
      "The moment someone commits is the best moment to collect payment. We build secure checkout into the booking or registration itself, using established payment processors like Stripe, so cards are handled safely and money lands in your account without a separate invoicing step.",
    points: [
      {
        label: "Built-in checkout",
        detail: "Card payment happens inside the signup flow, handled by a certified payment processor.",
      },
      {
        label: "Deposits",
        detail: "Collect a partial amount up front to hold the spot, with the balance tracked automatically.",
      },
      {
        label: "Receipts and records",
        detail: "Automatic receipts for the customer and a clean payment record for you.",
      },
    ],
    bestFor: "Businesses sending invoices after the fact or taking payment on arrival.",
    outcome: "Easier customer actions",
  },
  {
    title: "Payment plans",
    summary: "Offer installments with automatic charges and clear tracking on both sides.",
    description:
      "Larger fees are easier to say yes to when they're split into installments. We set up plans where customers choose a schedule at checkout, charges run automatically on the agreed dates, and both you and the customer can always see what's been paid and what's still owed.",
    points: [
      {
        label: "Plan selection",
        detail: "Customers pick from the installment options you define, right at checkout.",
      },
      {
        label: "Automatic tracking",
        detail: "Every plan's status — paid, upcoming, overdue — visible without digging through statements.",
      },
      {
        label: "Failed-payment follow-up",
        detail: "Automatic retries and polite reminders when a card fails, before it becomes your problem.",
      },
    ],
    bestFor: "Programs and services with fees large enough that customers hesitate to pay all at once.",
    outcome: "Better operational visibility",
  },
  {
    title: "Client or parent portals",
    summary: "A private login where customers can see their own info instead of emailing you.",
    description:
      "A portal is a password-protected area where clients, members, or parents log in to see their registrations, payments, schedules, and updates. Every question a customer answers for themselves is an email your team doesn't have to write — and customers get answers instantly instead of waiting on office hours.",
    points: [
      {
        label: "Secure account access",
        detail: "Each customer sees only their own information, protected by proper login and permissions.",
      },
      {
        label: "Self-serve status",
        detail: "Registrations, balances, schedules, and documents available any time without asking.",
      },
      {
        label: "Built-in communication",
        detail: "Announcements and updates delivered in one place instead of scattered email threads.",
      },
    ],
    bestFor: "Businesses fielding the same \"what's my status?\" questions every week.",
    outcome: "Less manual work",
  },
  {
    title: "Administrative dashboards",
    summary: "One screen where your team sees registrations, payments, and what needs attention.",
    description:
      "When signups live in email, payments live in a processor account, and notes live in a spreadsheet, nobody has the full picture. A dashboard pulls it into one place: who registered, who paid, who's overdue, and what needs action today — with access controlled by role so staff see what they need and nothing more.",
    points: [
      {
        label: "Operational overview",
        detail: "Registrations, payments, and outstanding items in one live view, not five browser tabs.",
      },
      {
        label: "Filters and exports",
        detail: "Slice by program, date, or status, and export clean data for rosters or accounting.",
      },
      {
        label: "Role-based access",
        detail: "Owners, managers, and staff each get an appropriate level of access — auditable and revocable.",
      },
    ],
    bestFor: "Teams reconciling spreadsheets against inboxes to figure out where things stand.",
    outcome: "Better operational visibility",
  },
  {
    title: "Website chatbots",
    summary: "An AI chat assistant trained on your business that answers visitors around the clock.",
    description:
      "This is a chat window on your site powered by an AI model that has been given your actual content — services, pricing, policies, hours. It answers the questions visitors would otherwise email you about, and when someone's ready to buy or book, it collects their details and passes them to you. It's scoped to your business, so it stays on topic.",
    points: [
      {
        label: "Trained on your content",
        detail: "The assistant answers from your real pages and policies, not generic internet knowledge.",
      },
      {
        label: "Instant answers, 24/7",
        detail: "Visitors get help at 9 PM on a Sunday, when your competitors' sites are silent.",
      },
      {
        label: "Lead capture",
        detail: "When a conversation turns serious, the bot collects contact details and notifies you.",
      },
    ],
    bestFor: "Businesses answering the same handful of questions by email and phone all week.",
    outcome: "Less manual work",
  },
  {
    title: "Lead qualification",
    summary: "Ask the right questions up front so you only spend time on serious inquiries.",
    description:
      "Not every inquiry deserves a 30-minute call. A qualification flow — a smart form or a few chatbot questions — sorts inquiries by budget, timeline, and fit before they reach you. Serious prospects arrive with the context you need to respond well; everyone else gets a helpful answer without consuming your calendar.",
    points: [
      {
        label: "Qualification questions",
        detail: "A short sequence covering budget, timeline, and needs — framed so it feels helpful, not gatekeeping.",
      },
      {
        label: "Smart handoff",
        detail: "Qualified leads route straight to you or your calendar; others get pointed to the right resource.",
      },
      {
        label: "CRM-ready details",
        detail: "Answers arrive organized and tagged, so follow-up starts informed instead of from scratch.",
      },
    ],
    bestFor: "Businesses spending hours on calls that were never going to become customers.",
    outcome: "More qualified leads",
  },
  {
    title: "FAQ assistants",
    summary: "Automate answers to repetitive questions while keeping a clear path to a human.",
    description:
      "A focused assistant that handles the questions you answer on repeat — hours, pricing, policies, logistics — with answers you've approved. The key design rule: it never traps people. Anyone who wants a human gets to one quickly, so automation reduces your workload without frustrating customers.",
    points: [
      {
        label: "Approved answers",
        detail: "Responses come from content you've reviewed, so the assistant never improvises your policies.",
      },
      {
        label: "Escalation path",
        detail: "A visible, one-step route to a real person whenever the question needs one.",
      },
      {
        label: "Easy updates",
        detail: "When prices or policies change, the answers update in one place — no retraining project.",
      },
    ],
    bestFor: "Businesses where staff time disappears into the same ten questions.",
    outcome: "Less manual work",
  },
  {
    title: "Internal workflow agents",
    summary: "AI that drafts, summarizes, and preps work for your team — with a human approving every output.",
    description:
      "These are AI helpers pointed inward at your own busywork: drafting replies to common inquiries, summarizing long email threads, or prepping information before a call. Nothing goes out the door without a person reviewing it — the AI does the first 80% so your team spends their time on judgment, not typing.",
    points: [
      {
        label: "Draft responses",
        detail: "First drafts of routine replies, in your voice, ready for a quick review and send.",
      },
      {
        label: "Summaries",
        detail: "Long threads, forms, and documents condensed to the facts your team actually needs.",
      },
      {
        label: "Task assistance",
        detail: "Repetitive prep work — data lookup, formatting, checklists — handled before a human touches it.",
      },
    ],
    bestFor: "Small teams where routine writing and admin work crowds out real work.",
    outcome: "Less manual work",
  },
  {
    title: "Email automation",
    summary: "Emails that send themselves when customers actually do something — book, pay, register.",
    description:
      "Every meaningful customer action should trigger the right email without anyone remembering to send it: a confirmation after booking, a receipt after payment, a what-to-expect note before an appointment. We wire these to real events in your system, so they're always accurate and always on time.",
    points: [
      {
        label: "Action-triggered confirmations",
        detail: "Bookings, payments, and registrations each fire the correct email instantly.",
      },
      {
        label: "Sequences",
        detail: "Multi-step series — welcome, reminders, follow-up — spaced out automatically over days or weeks.",
      },
      {
        label: "Branded templates",
        detail: "Professional, mobile-friendly emails that render correctly and match your site.",
      },
    ],
    bestFor: "Businesses manually sending the same confirmations and reminders every day.",
    outcome: "Less manual work",
  },
  {
    title: "Follow-up systems",
    summary: "Automatic reminders and check-ins so no lead or customer quietly goes cold.",
    description:
      "Most lost sales aren't lost to a competitor — they're lost to silence. A follow-up system watches the status of every lead and customer and nudges at the right moments: a reminder before an appointment, a check-in after a quote, a re-engagement note after things go quiet. You stop depending on memory and inbox archaeology.",
    points: [
      {
        label: "Reminders",
        detail: "Appointment, payment, and deadline reminders sent automatically at the right time.",
      },
      {
        label: "Nurture paths",
        detail: "Leads who aren't ready yet get periodic, useful touches until they are.",
      },
      {
        label: "Status updates",
        detail: "Customers hear from you at each stage without your team writing each message.",
      },
    ],
    bestFor: "Businesses where leads slip away because follow-up depends on someone remembering.",
    outcome: "Less manual work",
  },
  {
    title: "CRM routing",
    summary: "Every inquiry lands in the right place, tagged with the context needed to respond.",
    description:
      "A CRM is just the system where customer relationships get tracked — and it only works if information flows into it automatically. We connect your forms, chat, and bookings so every inquiry arrives in the right pipeline, assigned to the right person, with source and details attached. No more copy-pasting from an inbox.",
    points: [
      {
        label: "Automatic routing",
        detail: "Inquiries flow from site to CRM to the right team member without manual sorting.",
      },
      {
        label: "Tags and context",
        detail: "Source, service interest, and key details attached to every record on arrival.",
      },
      {
        label: "Hand-off rules",
        detail: "Clear ownership rules so two people never chase the same lead — and no one chases none.",
      },
    ],
    bestFor: "Teams tracking leads across an inbox, a spreadsheet, and memory.",
    outcome: "Better operational visibility",
  },
  {
    title: "Search-focused content systems",
    summary: "A repeatable plan for publishing pages that answer what your customers search for.",
    description:
      "Ranking in search isn't about one lucky blog post — it's about consistently publishing pages that answer real questions your customers type into Google. We build the system: which topics to cover, what each page needs to include, and a publishing rhythm your team can actually sustain.",
    points: [
      {
        label: "Topic structure",
        detail: "A map of the searches that matter for your business and the pages that should win them.",
      },
      {
        label: "Page briefs",
        detail: "A clear outline for each page — the question it answers, points to hit, and how it links to the rest of the site.",
      },
      {
        label: "Publishing cadence",
        detail: "A realistic schedule that builds search authority steadily instead of in bursts that fizzle.",
      },
    ],
    bestFor: "Businesses that know content matters but have no system for producing it.",
    outcome: "More qualified leads",
  },
  {
    title: "AI-assisted content workflows",
    summary: "Use AI to draft content fast, with human editing before anything goes live.",
    description:
      "AI can produce a solid first draft in minutes — but publishing raw AI output hurts more than it helps. We set up a workflow where AI handles drafting and repetitive formatting, a person edits for accuracy and voice, and defined checks run before publish. You get the speed without the generic, error-prone output.",
    points: [
      {
        label: "Draft support",
        detail: "AI generates first drafts from your briefs and existing material, in your established voice.",
      },
      {
        label: "Editing flow",
        detail: "A defined human review step for accuracy, tone, and claims — every time, no exceptions.",
      },
      {
        label: "Publishing checks",
        detail: "A pre-publish checklist covering links, formatting, and search basics so quality stays consistent.",
      },
    ],
    bestFor: "Teams that want to publish more often without hiring a content staff.",
    outcome: "Less manual work",
  },
  {
    title: "Answer-engine optimization",
    summary: "Structure your content so AI tools like ChatGPT recommend your business, not just Google.",
    description:
      "A growing share of customers now ask ChatGPT, Google's AI results, or voice assistants instead of scrolling search listings. These \"answer engines\" favor content that's clearly structured: direct answers, well-marked business details, and pages organized around real questions. We format your content so it's easy for them to quote — and easy for humans to skim.",
    points: [
      {
        label: "Question-and-answer structure",
        detail: "Content organized around the actual questions customers ask, with direct answers up top.",
      },
      {
        label: "Clear business signals",
        detail: "Structured data that tells AI systems exactly who you are, what you do, and where you serve.",
      },
      {
        label: "Genuinely helpful pages",
        detail: "Substance over keyword-stuffing — the thing both AI engines and humans reward.",
      },
    ],
    bestFor: "Businesses that want to show up where customers are starting to search next.",
    outcome: "More qualified leads",
  },
  {
    title: "Social publishing workflows",
    summary: "A lightweight system for posting consistently without it eating your week.",
    description:
      "The hard part of social media isn't writing posts — it's still posting in month four. We set up a simple pipeline: content gets drafted in batches, approved in one sitting, and scheduled across your channels automatically. Consistency becomes a system property instead of a willpower test.",
    points: [
      {
        label: "Scheduling",
        detail: "Posts queued in advance and published automatically at the times that perform.",
      },
      {
        label: "Cross-channel posting",
        detail: "One piece of content adapted and sent to each platform in its native format.",
      },
      {
        label: "Approval steps",
        detail: "A quick review gate so nothing goes out without a sign-off — batched, not constant.",
      },
    ],
    bestFor: "Businesses whose social accounts go quiet whenever things get busy.",
    outcome: "Less manual work",
  },
  {
    title: "Content repurposing",
    summary: "Turn one strong piece of content into a week's worth of material across channels.",
    description:
      "A good guide, case study, or FAQ answer shouldn't live and die on one page. We build pipelines that turn each strong piece into the formats your channels need — social posts, email content, shorter page sections — with a review step before anything ships. More output from work you've already done.",
    points: [
      {
        label: "Reuse pipelines",
        detail: "A defined path from each new piece to the channels and formats it should feed.",
      },
      {
        label: "Format variants",
        detail: "The same idea shaped correctly for social, email, and the site — not copy-pasted verbatim.",
      },
      {
        label: "Review gates",
        detail: "A human check on every variant so quality holds across all of it.",
      },
    ],
    bestFor: "Businesses producing good content that only ever gets used once.",
    outcome: "Less manual work",
  },
  {
    title: "Automated content distribution",
    summary: "Approved content flows to the right channels automatically — no copy-paste rounds.",
    description:
      "Once content is approved, publishing it everywhere shouldn't be a manual chore. We connect your content source to your channels with rules about what goes where and when, plus status checks that confirm everything actually posted. Publish once; the system handles the rest.",
    points: [
      {
        label: "Distribution rules",
        detail: "Definitions of which content goes to which channel, on what schedule — set once, run always.",
      },
      {
        label: "Channel mapping",
        detail: "Each destination gets the right format, dimensions, and length automatically.",
      },
      {
        label: "Status checks",
        detail: "Confirmation that every post went live, with alerts if a channel fails silently.",
      },
    ],
    bestFor: "Teams spending hours a week manually re-posting the same content.",
    outcome: "Less manual work",
  },
  {
    title: "Analytics implementation",
    summary: "Measure the actions that matter — inquiries, bookings, payments — not just page views.",
    description:
      "Page-view counts don't tell you whether the site is working. We set up tracking for the events that actually mean something — form submissions, bookings started and completed, payments — and put them on a dashboard you can read in two minutes. Decisions get made on data instead of hunches.",
    points: [
      {
        label: "Event tracking",
        detail: "The specific actions that matter to your business, captured accurately and privacy-conscious.",
      },
      {
        label: "Funnels",
        detail: "Where people drop off between landing on the site and completing an action — so you know what to fix.",
      },
      {
        label: "Readable dashboards",
        detail: "The handful of numbers that matter, in one view, without an analytics degree.",
      },
    ],
    bestFor: "Businesses that have analytics installed but never look at it — because it answers nothing.",
    outcome: "Better operational visibility",
  },
  {
    title: "Conversion tracking",
    summary: "See which pages, campaigns, and channels actually produce customers.",
    description:
      "If you spend money or effort on marketing, you should know what each channel returns. Conversion tracking connects the dots between where a visitor came from and whether they took a real action — so you can put more into what works and stop paying for what doesn't.",
    points: [
      {
        label: "Goal setup",
        detail: "Each meaningful action — inquiry, booking, payment — defined and counted as a conversion.",
      },
      {
        label: "Source attribution",
        detail: "Which ad, search result, or referral each conversion came from, at a practical level of detail.",
      },
      {
        label: "Review cadence",
        detail: "A regular, lightweight review so the numbers actually change decisions.",
      },
    ],
    bestFor: "Businesses spending on ads or SEO without knowing what any of it returns.",
    outcome: "More qualified leads",
  },
  {
    title: "Security reviews",
    summary: "A practical check of how customer data and access are protected — before problems find you.",
    description:
      "If your site takes payments, stores customer information, or has logins, security isn't optional. A review walks through the realistic risks: who can access what, how data is stored and transmitted, and where the weak points are. You get findings in plain language, ranked by what to fix first — not a scary 40-page report.",
    points: [
      {
        label: "Risk review",
        detail: "The realistic ways your specific site could be attacked or leak data, checked methodically.",
      },
      {
        label: "Access checks",
        detail: "Who has admin access, whether old accounts linger, and whether permissions match roles.",
      },
      {
        label: "Privacy basics",
        detail: "Data collection, storage, and disclosure practices checked against what your policy promises.",
      },
    ],
    bestFor: "Any business handling payments, personal information, or customer logins.",
    outcome: "More reliable systems",
  },
  {
    title: "Launch hardening",
    summary: "A structured pre-launch pass so go-live day is boring — in the best way.",
    description:
      "The week a site launches is when weak spots surface: broken forms, missing redirects, exposed settings, untested payment flows. Hardening is a systematic pass through a launch checklist — security settings, error handling, backups, performance — plus support on go-live day so issues get caught in testing instead of by customers.",
    points: [
      {
        label: "Launch checklist",
        detail: "Every critical flow — forms, payments, emails, logins — tested end-to-end before the switch flips.",
      },
      {
        label: "Hardening passes",
        detail: "Security headers, error pages, backups, and access controls locked down for production.",
      },
      {
        label: "Go-live support",
        detail: "Active monitoring through launch, so anything unexpected gets fixed in minutes.",
      },
    ],
    bestFor: "Any launch where a broken form or failed payment would cost real money or trust.",
    outcome: "More reliable systems",
  },
  {
    title: "Monitoring",
    summary: "Automated watch on uptime, errors, and critical flows — so you hear about problems first.",
    description:
      "Without monitoring, the way you learn your site is down is an annoyed customer. Monitoring tools check your site continuously — is it up, are pages erroring, are the booking and payment flows still working — and send an alert the moment something breaks. Most issues get fixed before anyone outside notices.",
    points: [
      {
        label: "Uptime checks",
        detail: "Around-the-clock automated checks that the site is reachable and responding quickly.",
      },
      {
        label: "Error alerts",
        detail: "Immediate notification when something breaks, with enough detail to fix it fast.",
      },
      {
        label: "Dependency health",
        detail: "Watch on the third-party services your site relies on — payments, email, scheduling.",
      },
    ],
    bestFor: "Any business that would rather not learn about outages from customers.",
    outcome: "More reliable systems",
  },
  {
    title: "Updates",
    summary: "Regular software updates, content edits, and small fixes — handled, not postponed.",
    description:
      "Websites run on software components that need regular updates, mostly for security. Skipping them is how sites get hacked or quietly break. This covers the routine upkeep: dependency and security updates applied and tested, content edits made promptly, and small bugs fixed before they compound.",
    points: [
      {
        label: "Dependency updates",
        detail: "The software your site is built on kept current and tested after each update.",
      },
      {
        label: "Content edits",
        detail: "Prices, hours, staff, and offers updated when you need them — usually same week.",
      },
      {
        label: "Bug fixes",
        detail: "Small issues fixed as they appear instead of accumulating into a rebuild.",
      },
    ],
    bestFor: "Businesses without anyone on staff whose job is keeping the site current.",
    outcome: "More reliable systems",
  },
  {
    title: "Workflow maintenance",
    summary: "Keep forms, payments, and automations working as your business and its tools change.",
    description:
      "Automated workflows aren't fire-and-forget. Payment processors change their systems, email providers update policies, and your own business changes shape. Workflow maintenance means regularly verifying every connected flow still works end-to-end — and adjusting it as the business evolves, before a silent failure costs you leads or revenue.",
    points: [
      {
        label: "Flow checks",
        detail: "Regular end-to-end tests of forms, bookings, payments, and automated emails.",
      },
      {
        label: "Integration health",
        detail: "The connections between your site and outside services verified and repaired proactively.",
      },
      {
        label: "Adjustments",
        detail: "Flows updated when you add services, change pricing, or reorganize how work gets done.",
      },
    ],
    bestFor: "Businesses whose website runs real operations — where a silent failure costs money.",
    outcome: "More reliable systems",
  },
  {
    title: "Continuous improvements",
    summary: "Ongoing tuning of messaging, conversion, and workflows based on what the data shows.",
    description:
      "Launch is a starting point, not a finish line. Once real visitors are using the site, the data shows exactly where people hesitate, drop off, or get confused — and each of those is a fixable improvement. This is a steady cycle of small, measured changes that compound: better copy here, a smoother form there, quarter after quarter.",
    points: [
      {
        label: "Conversion tweaks",
        detail: "Headlines, buttons, and page order refined based on what visitors actually do.",
      },
      {
        label: "UX fixes",
        detail: "Friction points found in the data — confusing steps, slow pages — smoothed out.",
      },
      {
        label: "System upgrades",
        detail: "Workflows and features extended as the business grows, on the same foundation.",
      },
    ],
    bestFor: "Businesses that want the site getting measurably better each quarter, not aging in place.",
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
    summary:
      "Clear messaging, purposeful pages, and search foundations — so the right customers find the site and know exactly what to do next.",
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
    summary:
      "Let customers book, register, and pay directly on the site — and give your team one place to see it all instead of a pile of emails.",
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
    summary:
      "Put AI and automation on the repetitive work — answering common questions, qualifying leads, sending follow-ups — so your team's time goes to real customers.",
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
    summary:
      "Content systems built for how people search now — Google, AI assistants, and social — with AI speeding up production and a human approving everything.",
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
    summary:
      "Everything that keeps the system trustworthy after launch: measuring what works, protecting customer data, catching problems early, and improving month over month.",
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

export type Pkg = {
  name: string;
  /** Shorter label for tight layouts (e.g. mobile pricing columns). */
  mobileName?: string;
  /** Soft handoff slug for /contact?package=… */
  contactSlug: "launch" | "business" | "operations";
  setup: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  note?: string;
  /** Shorter note for compact mobile pricing columns. */
  mobileNote?: string;
};

export const packages: Pkg[] = [
  {
    name: "Launch Site",
    contactSlug: "launch",
    setup: "$1,250",
    blurb: "For businesses that need a professional, clear, conversion-ready website.",
    features: [
      "Offer narrative and page structure",
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
    mobileName: "Business Site",
    contactSlug: "business",
    setup: "$2,500",
    blurb: "For businesses that need the website to produce, organize, and route inquiries.",
    features: [
      "Everything in Launch Site",
      "More detailed offer narrative",
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
    contactSlug: "operations",
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
    mobileNote: "Scoped to the smallest useful workflow first — typically from $4,500.",
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
    price: "$150/month",
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
      "Everything in Care + analytics review",
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

