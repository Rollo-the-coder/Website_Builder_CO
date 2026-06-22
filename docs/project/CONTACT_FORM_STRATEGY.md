# Contact Form Strategy

Strategy for the Website/System Audit Request form (`/contact`, handled by `POST /api/contact`).

## Form Goal

Qualify inbound small-business leads and capture enough context to prepare a website/system audit and a scoped follow-up. Primary site conversion event.

## Required Fields

- [x] Name (required)
- [x] Email (required)
- [x] Phone (optional)
- [x] Business/site URL (optional)
- [x] Message or qualifying questions (required: "biggest problem")
- [x] Other: Business name, business type/niche, what-you-need-help-with, timeline, budget (optional), preferred contact method

## Qualifying Questions

Use ideas from `docs/patterns/CONTACT_FORM_CONVERSION_QUESTIONS.md`.

1. What do you need help with? (build, rebuild, messaging, forms/booking/payments, portal/dashboard, AI automation, security audit, ongoing management, not sure)
2. What is your biggest website or business-system problem right now?
3. What is your timeline and (optional) budget range?

## Spam And Rate-Limit Controls

- [x] Server-side validation (zod, shared schema in `lib/contact-schema.ts`)
- [x] Max field lengths (enforced in schema)
- [x] Honeypot field (`company`, hidden; silently dropped server-side)
- [x] Timestamp / minimum fill-time check (`startedAt`, <3s submissions silently dropped)
- [x] Rate limit per IP (best-effort in-memory, 5/min in `app/api/contact/route.ts`)
- [ ] CAPTCHA or Turnstile (add only if needed; recommended for production)
- [ ] Blocklist or allowlist rules (not needed yet)

Note: in-memory rate limiting resets on redeploy and is per-instance. For production hardening, move to a durable store (e.g. Upstash) and/or add Cloudflare Turnstile.

## Submission Routing

| Destination | Behavior | Notes |
|---|---|---|
| Email notification | In `CONTACT_FORM_MODE=live`, Resend sends to `CONTACT_TO_EMAIL` with reply-to = submitter | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` required |
| Demo capture | In `CONTACT_FORM_MODE=demo`, API returns accepted + `delivered:false` and logs server-side | Safe for local/preview demos only |
| CRM | Not in v1 | Future: route to CRM/Airtable/Sheets |
| Database/storage | Not in v1 | Submissions not persisted; email is the system of record in live mode |
| Webhook/automation | Not in v1 | Future option |

## User-Facing Behavior

- Success message: "Request received — you'll get a reply with next steps shortly."
- Demo-mode message: "Request captured in demo mode..."
- Error message: "Something went wrong. Please try again."
- Redirect after submit (if any): None; inline success state replaces the form.
- Auto-reply to submitter: No (TBD — could add a confirmation auto-reply later).

## Follow-Up Workflow

1. Who receives notifications: business owner inbox (`CONTACT_TO_EMAIL` in live mode).
2. Expected response time: TBD (target: 1 business day).
3. CRM or pipeline stage: TBD.
4. Escalation path: TBD.

## Launch Checks

- [ ] Set `CONTACT_FORM_MODE=live` for production
- [ ] Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and a verified `CONTACT_FROM_EMAIL`
- [ ] Test submission in staging/preview
- [ ] At least one real submission lands in the destination inbox
- [ ] Spam controls verified (honeypot + rate limit)
- [ ] Failure logging visible (server logs; observability tool TBD)
