# Contact Form Strategy

Strategy for the Website Audit / Fit Call request form (`/contact`, handled by `POST /api/contact`).

## Form Goal

Qualify inbound small-business leads and capture enough context for either:

1. A focused website audit follow-up, or
2. A 20-minute fit call follow-up (scheduled manually by Erik — no public calendar yet)

Primary site conversion event. Limited-capacity positioning: audit requests are reviewed for fit; not every submission is automatically accepted for a detailed audit.

## Dual Submit Intents

One form, two submit buttons:

| Intent | Button label | Meaning |
|---|---|---|
| `audit` | Request my audit | Written review path (primary) |
| `fit_call` | Request a fit call | Ready to talk; Erik follows up to schedule |

Helper copy under the buttons:

> Same form either way. I’ll follow up with next steps—usually within one business day.

## Soft Pricing Handoff

Pricing CTAs deep-link to `/contact?package=launch|business|operations`.

This is a **soft starting point**, not a hard package selection:

| Query | Chip label | Budget prefill | Project interest prefill |
|---|---|---|---|
| `package=launch` | Launch Site (from $1,250) | $1,000–$2,000 | New business website |
| `package=business` | Business Site + Lead System (from $2,500) | $2,000–$4,000 | Booking or lead system |
| `package=operations` | Operations System (from $4,500) | $4,000–$7,000 | Payments or enrollment |

Behavior:

- Form shows a confirmation chip when a valid `package` is present
- Budget and project interest are prefilled but remain editable
- Hidden `packageInterest` is submitted so Erik can see which pricing card was clicked
- Unknown `package` values are ignored
- Existing `?interest=founding` still prefills Founding client project (takes precedence over package helpWith)

Chip copy:

> Starting point: **Launch Site** (from $1,250). The audit will confirm whether this is the right fit — you can change the fields below.

## Required Fields

Primary (always visible):

- [x] Name (required)
- [x] Email (required)
- [x] Business name (required)
- [x] Website URL (optional)
- [x] City or service area (optional)
- [x] Project interest (required)
- [x] What would you most like to improve? (required)
- [x] Phone (optional for audits; required for fit calls)
- [x] Budget range (optional select)
- [x] Package interest (optional soft signal from pricing CTA)
- [x] Intent (`audit` | `fit_call`, set by submit button)

Project-interest options: website redesign, new business website, booking or lead system, payments or enrollment, portal or dashboard, AI chatbot or automation, AI SEO or content system, security or analytics, ongoing management, founding client project, not sure yet.

Budget ranges: $1,000–$2,000 · $2,000–$4,000 · $4,000–$7,000 · $7,000–$12,000 · $12,000+ · Not sure yet.

## Post-Submit Success State

Intent-specific confirmation only — no calendar or mailto second CTA.

**Audit**
- Heading: Your request is in.
- Body: I’ll review it and follow up with the next step.

**Fit call**
- Heading: Fit call request received.
- Body: I’ll follow up to schedule a 20-minute call—usually within one business day.

## Spam And Rate-Limit Controls

- [x] Server-side validation (zod, shared schema in `lib/contact-schema.ts`)
- [x] Max field lengths (enforced in schema)
- [x] Honeypot field (`company`, hidden; silently dropped server-side)
- [x] Timestamp / minimum fill-time check (`startedAt`, <3s submissions silently dropped)
- [x] Rate limit per IP (best-effort in-memory, 5/window in `app/api/contact/route.ts`)
- [ ] CAPTCHA or Turnstile (add only if needed; recommended for production)
- [ ] Blocklist or allowlist rules (not needed yet)

Note: in-memory rate limiting resets on redeploy and is per-instance. For production hardening, move to a durable store (e.g. Upstash) and/or add Cloudflare Turnstile.

## Submission Routing

| Destination | Behavior | Notes |
|---|---|---|
| Email notification | In `CONTACT_FORM_MODE=live`, Postmark sends to `CONTACT_TO_EMAIL` with Reply-To = submitter | Subject/tag reflects intent (`New audit request` vs `New fit call request`); includes package interest when present |
| Confirmation auto-reply | After a successful notification, Postmark emails the submitter a receipt + copy of their answers | Wording matches intent |
| Demo capture | In `CONTACT_FORM_MODE=demo`, API returns accepted + `delivered:false` and logs server-side | Safe for local/preview demos only |
| CRM | Not in v1 | Future: route to CRM/Airtable/Sheets |

## Analytics Events

- `audit_cta_click` (pricing package clicks include package name)
- `form_start`
- `form_completion` (includes `intent: audit | fit_call`, optional `package_interest`)
- `pricing_section_view`
- `boost_case_study_view` / `boost_case_study_click`

`booking_click` is deferred until a public scheduling link is live.

## Later

When a calendar is ready (`NEXT_PUBLIC_FIT_CALL_URL`), add the booking link only on the **fit-call success state** — not as a side mailto on the contact page.
