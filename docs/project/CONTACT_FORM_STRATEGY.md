# Contact Form Strategy

Strategy for the Website Audit Request form (`/contact`, handled by `POST /api/contact`).

## Form Goal

Qualify inbound small-business leads and capture enough context to prepare a website audit and a scoped follow-up. Primary site conversion event.

Limited-capacity positioning: audit requests are reviewed for fit; not every submission is automatically accepted for a detailed audit.

## Required Fields

Primary (always visible):

- [x] Name (required)
- [x] Email (required)
- [x] Business name (required)
- [x] Website URL (optional)
- [x] City or service area (optional)
- [x] Project interest (required)
- [x] What would you most like to improve? (required)
- [x] Phone (optional)
- [x] Budget range (optional select)

Project-interest options: website redesign, new business website, booking or lead system, payments or enrollment, portal or dashboard, AI chatbot or automation, AI SEO or content system, security or analytics, ongoing management, founding client project, not sure yet.

Budget ranges: Under $1,500 · $1,500–$3,000 · $3,000–$5,000 · $5,000–$10,000 · $10,000+ · Not sure yet.

## Post-Submit Success State

After a successful submission:

1. Confirmation: “Your request is in.” + personal-review copy
2. Secondary CTA: Book a 20-minute fit call (`NEXT_PUBLIC_FIT_CALL_URL`, falls back to mailto)
3. Analytics: `form_completion`, then `booking_click` if they book

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
| Email notification | In `CONTACT_FORM_MODE=live`, Postmark sends to `CONTACT_TO_EMAIL` with Reply-To = submitter | `POSTMARK_SERVER_TOKEN`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` required |
| Confirmation auto-reply | After a successful notification, Postmark emails the submitter a receipt + copy of their answers | Same env; failure is logged and does not fail the form |
| Demo capture | In `CONTACT_FORM_MODE=demo`, API returns accepted + `delivered:false` and logs server-side | Safe for local/preview demos only |
| CRM | Not in v1 | Future: route to CRM/Airtable/Sheets |

## Analytics Events

- `audit_cta_click`
- `form_start`
- `form_completion`
- `booking_click`
- `pricing_section_view`
- `boost_case_study_view` / `boost_case_study_click`
