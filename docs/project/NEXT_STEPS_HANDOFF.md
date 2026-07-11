# Next Steps & Context Handoff

Purpose: give a fresh chat/AI everything needed to continue this project without re-discovery. Read this first, then `AGENTS.md` and `docs/START_HERE.md`.

Last updated: 2026-07-11

---

## 1. What this project is

A client-acquisition website for **Gotta Build** — websites + digital systems (forms, bookings, payments, portals, dashboards, automations, AI, security audits, ongoing management) for small businesses, Seattle/Bellevue/Eastside first.

Public contact: `erik@gotta.build`

Source-of-truth context (already filled — read these, do not re-interview the owner):

- `docs/project/PROJECT_BRIEF.md` — goals, audience, pages, features, constraints, definition of done, open TBDs
- `docs/project/CLIENT_INTAKE.md` — business basics, services, brand prefs, competitors (ploy.ai = inspiration only)
- `docs/project/WEBSITE_SCOPE.md` — v1 in/out of scope, components, integrations, SEO, accessibility
- `docs/project/CONTACT_FORM_STRATEGY.md` — audit form fields, spam controls, routing, launch checks

---

## 2. What is already built (v1)

Stack: Next.js 14 (App Router) + TypeScript + Tailwind. Deploy target: Vercel (not final). Package name: `gotta-build`.

Design system: Builder theme by default (warm canvas, copper accent, Syne + DM Sans), plus home-only theme preview (PNW / Editorial / Showcase). Tokens in `tailwind.config.ts` / `lib/theme.ts`; base styles in `app/globals.css`.

### Routes (all working)

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero → Problem → Boost → Clarify/Build/Manage → Audit → Packages → About + FAQ → CTA. Theme switcher is home-only. |
| `/services` | `app/services/page.tsx` | Clarify / Build / Manage buckets + process |
| `/work/boost-baseball` | `app/work/boost-baseball/page.tsx` | Flagship case study (tightened); live site linked |
| `/contact` | `app/contact/page.tsx` | Audit-request funnel + public email |
| `POST /api/contact` | `app/api/contact/route.ts` | zod validation, honeypot, per-IP rate limit, Postmark (env-gated) |
| `/privacy`, `/terms`, `/cookies` | `app/{privacy,terms,cookies}/page.tsx` | Draft legal copy — needs review |
| `/sitemap.xml`, `/robots.txt` | `app/sitemap.ts`, `app/robots.ts` | Driven by `NEXT_PUBLIC_SITE_URL` |
| 404 | `app/not-found.tsx` | Custom |

### Key modules

- `lib/site.ts` — central content: brand, nav, services, packages, processSteps. Edit copy here.
- `lib/contact-schema.ts` — shared zod schema for the audit form (client + server).
- `lib/cn.ts` — class merge helper.
- `components/` — `header`, `footer`, `analytics` (env-gated), `hero`, `problem`, `pillars`, `process-steps`, `service-card`, `package-card`, `case-study-preview`, `faq`, `cta-band`, `about-founder`, `audit-scorecard`, `mockups`, `audit-request-form`, `legal-page`, `json-ld`, `button`, `section`, `icons`, `theme-switcher` (home only), `showcase/*`.

### Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also lints + typechecks)
npm run typecheck
npm run lint
```

### Environment (`.env.example`)

All optional for local UI work; required before launch for real delivery:

- `NEXT_PUBLIC_SITE_URL` — canonical URL (SEO/sitemap/robots); example `https://gotta.build`
- `NEXT_PUBLIC_ANALYTICS_ID` — set to enable analytics; blank = off
- `POSTMARK_SERVER_TOKEN`, `CONTACT_TO_EMAIL=erik@gotta.build`, `CONTACT_FROM_EMAIL` — contact email delivery via Postmark. Without them the form returns `{ok:true, delivered:false}` and logs server-side (good for demos, loses real leads in prod).

---

## 3. Decisions still needed from the owner (blockers)

These gate multiple downstream tasks. Confirm early.

- Legal entity name (brand is Gotta Build)
- Analytics tool choice (GA4 / Plausible / PostHog)
- Where leads should go beyond email (CRM/Sheet/Airtable)
- Stripe/booking timing (deferred to a later phase)
- Real client testimonials when available (intentionally omitted until then)
- Postmark live delivery: confirmed Sender Signature for `erik@gotta.build` + first successful inbox test

---

## 4. Prioritized next steps

Follow `AGENTS.md` (smallest safe change, don't overbuild) and the Cursor rules in `.cursor/rules/`. Reference rule `13` for the contact form/integrations and rule `14` + `docs/patterns/FINAL_LAUNCH_GAP_CHECKLIST.md` before claiming launch-ready.

### Phase 1 — Make the funnel real (highest value)
- Brand + public email are set in `lib/site.ts` (`Gotta Build`, `erik@gotta.build`).
- Set `NEXT_PUBLIC_SITE_URL` in production, configure Postmark (`POSTMARK_SERVER_TOKEN`, `CONTACT_TO_EMAIL=erik@gotta.build`, confirmed `CONTACT_FROM_EMAIL`).
- Enable analytics via `NEXT_PUBLIC_ANALYTICS_ID`; fill `docs/project/OBSERVABILITY_PLAN.md`.
- Acceptance: a real test submission lands in `erik@gotta.build`; analytics records a pageview + form conversion; update the Launch Checks in `docs/project/CONTACT_FORM_STRATEGY.md`.

### Phase 2 — Content & proof
- Confirm Boost screenshots in `public/work/boost/` look good on the case study page; add client-approved metrics when available.
- Add real testimonials only when quotes exist (intentionally omitted for now).
- Track remaining assets in `docs/project/CONTENT_CHECKLIST.md`.
- Skill: `docs/skills/frontend-design.md`.

### Phase 3 — Local SEO depth
- Fill `docs/project/LOCAL_SEO_CHECKLIST.md`; confirm titles/meta per page; expand JSON-LD in `components/json-ld.tsx` (address once public, per-city service framing).
- Consider lightweight per-city service content for Seattle/Bellevue/Kirkland/Redmond.

### Phase 4 — Launch readiness (before going live)
Fill and satisfy:
- `docs/project/SECURITY_REVIEW.md` (pair with `docs/patterns/SECURITY_AND_PRIVACY_BASELINE.md`)
- `docs/project/PERFORMANCE_AND_CACHING_PLAN.md`
- `docs/project/PRIVACY_AND_DATA_RETENTION.md` + get legal pages reviewed (`/privacy`, `/terms`, `/cookies` are drafts)
- `docs/project/EMAIL_DELIVERABILITY_PLAN.md` (SPF/DKIM for the sending domain)
- `docs/project/BROWSER_DEVICE_TEST_MATRIX.md` (manual mobile/desktop + keyboard/a11y pass)
- `docs/project/LAUNCH_CHECKLIST.md`, then `docs/project/FINAL_LAUNCH_REVIEW.md`
- Harden the contact rate limit (current in-memory limiter resets per deploy/instance — consider Upstash and/or Cloudflare Turnstile). See note in `app/api/contact/route.ts`.

### Phase 5 — Deploy
- Import to Vercel, set env vars in the project, deploy a preview, owner review, then production.
- Fill `docs/project/BACKUP_AND_ROLLBACK_PLAN.md` and `docs/project/HANDOFF_CHECKLIST.md`.

### Phase 6 — Later (only when scope justifies)
- Stripe paid-audit/deposit checkout + success page (Stripe plugin/skill available). Add `AUTHORIZATION_TEST_PLAN.md` if any gated/admin surface appears.
- Booking integration, CRM/Sheet routing, AI chatbot/intake automation, additional case studies.

---

## 5. Guardrails / gotchas

- `scripts/check-template-safety.sh` is a TEMPLATE-hygiene tool. Its denylist intentionally bans the source project's terms (`Boost`, `baseball`, `roster`, `parent portal`, `player`) and forbids `node_modules`/`.next`. It will "fail" on this instantiated site because Boost Baseball is the legitimate flagship case study. That is expected — do NOT strip Boost content to satisfy it. The meaningful secret/key scan in that script passes. `scripts/security-readiness-check.sh` is still useful.
- Never commit secrets. `.env*` is gitignored except `.env.example`. `*.tsbuildinfo` and `next-env.d.ts` are gitignored.
- Keep unconfirmed business details as `TBD`; do not invent metrics or testimonials.
- Edit shared content in `lib/site.ts` rather than hardcoding in pages.
- Respect the existing design tokens and accessibility patterns (semantic HTML, labels, focus states, reduced-motion handling in `globals.css`).

---

## 6. Current verification status (as of last session)

- `npm run build`: passing (13 routes)
- `npm run typecheck`: passing
- Routes smoke-tested: all 200
- `POST /api/contact`: valid → 200 `delivered:false` (no keys yet); invalid → 422; honeypot → 200 silent drop
- No real email/analytics configured yet (intentional — Phase 1)
