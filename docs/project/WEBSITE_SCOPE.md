# Website Scope

## In Scope

Launch-focused v1 scope:

- Conversion-focused marketing website for website + digital systems services
- Core pages for narrative positioning, service clarity, proof, and lead capture
- Flagship Boost Baseball case study page/section
- Practical service and package/pricing presentation with "starting at" ranges
- Audit request funnel (contact form -> email)
- Mobile-first responsive layout and accessibility-conscious defaults
- SEO metadata and local SEO structure for Seattle/Bellevue/Eastside
- Analytics-ready instrumentation structure (final tool TBD)
- Legal pages required for launch readiness
- Optional placeholders for booking and Stripe deposit flow (no overbuild)

## Out Of Scope

Explicitly out of scope for v1:

- Full custom CRM/dashboard for this business site
- Complex client portal implementation on this marketing site
- Full payment system beyond basic Stripe placeholder/plan
- Heavy or complex blog/content system
- Multiple deep case studies before Boost is finalized
- Overbuilt animations/microinteractions that delay launch or harm performance
- Any feature that delays publishing a credible sales-ready v1

## Pages

- [x] Home
- [ ] About (TBD: standalone page vs section content)
- [x] Services / Offer pages
- [x] Contact (Audit Request)
- [x] Privacy / legal
- [x] Other: Boost Baseball Case Study
- [x] Other: Process (Audit -> Scope -> Build -> Launch -> Manage)
- [x] Other: Pricing / Packages (standalone or services section; TBD)
- [x] Other: Terms of Service
- [x] Other: Cookie Policy (if analytics/tracking cookies are used)

## Components

- [x] Header/navigation
- [x] Footer
- [x] Hero section
- [x] Service cards
- [x] Testimonials (content TBD)
- [x] FAQ (optional initial set; can be brief)
- [x] Contact CTA
- [x] Forms
- [x] Other: Pricing/package cards
- [x] Other: Boost case-study preview cards/sections
- [x] Other: Process framework cards (Clarify / Build / Manage)
- [x] Other: Mockup/screenshot placeholder blocks for proof visuals

## Forms

Primary form: Website/System Audit Request.

Required/desired fields:

- Name
- Business name
- Email
- Phone (optional)
- Current website URL
- Business type/niche
- What help is needed
- Biggest website/business system problem
- Timeline
- Budget range (optional)
- Preferred contact method

Routing/destination:

- Submit to email inbox (address TBD)
- Optional future routing to CRM/Sheets/Airtable

Form UX + protection requirements:

- Clear validation and required field states
- Accessible labels and error messaging
- Success state confirmation message/page
- Failure state with retry guidance
- Spam protection (method TBD)
- Notification flow to owner email (TBD)

## Booking / Payment / CRM / Email Needs

Phased rollout (do not overbuild):

V1:

- Contact/audit form first
- Email-first lead handling
- Optional booking link placeholder only (provider TBD)
- Stripe payment/deposit shown as "coming soon" or optional placeholder

Post-v1:

- Add Stripe payment links or lightweight checkout for paid audit/project deposit
- Add payment success page and confirmation flow
- Add CRM or Airtable/Sheets lead tracking
- Add email automation/provider integration

All account IDs, API keys, tokens, and webhook secrets remain TBD and out of docs/code until securely provided.

## SEO Basics

Service keyword direction (working list, refine later):

- Seattle website designer
- Bellevue website designer
- Seattle small business websites
- Bellevue small business websites
- Website systems for small business
- Youth sports website
- Baseball training website
- Website with payments and booking
- Website automation for small business
- AI chatbot for small business website
- Website security audit for small business

Location focus:

- Seattle
- Bellevue
- Kirkland
- Redmond
- Eastside
- Greater Seattle area

Implementation basics:

- Unique page titles/meta descriptions per page
- Clear internal linking from Home -> Services -> Case Study -> Contact
- Local business/service schema ideas (final schema set TBD)
- Case-study SEO for Boost Baseball proof narrative

## Analytics

Analytics platform: TBD (Google Analytics, Plausible, or PostHog under consideration).

Primary conversion event:

- Audit request form submission

Secondary events (future):

- Case study CTA clicks
- Package/pricing section engagement
- Booking CTA clicks

Consent/cookie requirements:

- Cookie policy required if cookie-based analytics is used
- Consent mechanism requirements TBD based on final analytics stack

## Accessibility

Target: WCAG 2.1 AA basics (practical baseline for v1).

Requirements:

- Semantic HTML and heading hierarchy
- Accessible form labels, error messages, and focus states
- Keyboard navigable interactive elements
- Sufficient color contrast for text/controls
- Mobile-first layout behavior across viewport sizes
- Alt text support for case study and proof imagery

## Maintenance / Retainer Notes

Support/retainer direction:

- Offer ongoing management as a productized service
- Include regular updates, analytics review, security checks, and incremental improvements
- Exact cadence/terms/pricing tiers TBD

Hosting/ownership:

- Hosting likely Vercel, but final decision TBD after framework selection
- Ownership model and access controls TBD

Future enhancements (post-v1):

- Stripe payment/deposit flow implementation
- Booking integration
- CRM + intake automation
- AI chatbot/agent support
- Additional case studies beyond Boost Baseball
- Deeper analytics dashboards and conversion experiments
