# Rate Limiting And Abuse Prevention

Rate limiting protects auth flows, forms, AI endpoints, and expensive routes from abuse. Match limits to project scope and traffic.

## Routes That Usually Need Rate Limiting

- Login and auth attempts
- Password reset and email-send routes
- Contact forms
- AI endpoints
- Search endpoints
- Expensive report or export generation
- Public form submissions
- Payment intent or checkout session creation (if applicable), without breaking legitimate checkout flows

## Suggested Defaults

| Route type | Suggested limit |
|---|---|
| Login / custom auth | 5 attempts per 15 minutes per IP, email, or account combination |
| Contact forms | 3–5 submissions per 15 minutes per IP, plus honeypot/timestamp checks |
| AI endpoints | Per-user and per-IP limits, plus daily budget caps |
| Expensive public endpoints | Conservative per-IP limits |
| Webhooks | Verify signatures first; avoid generic rate limits that block trusted providers |

Adjust for legitimate traffic patterns. Document chosen limits in `docs/project/SECURITY_REVIEW.md`.

## Implementation Guidance

### Single Instance / Local Dev

- In-memory limiter is acceptable for development and small single-server deployments.
- Still validate inputs and use honeypots on forms.

### Serverless / Multiple Instances / Production

- Use a shared store: Upstash Redis, Redis, database-backed limiter, or platform middleware.
- In-memory limits alone will not work across instances.

### General Rules

- Fail safely and return clear, non-enumerating errors.
- Avoid revealing whether an email or account exists.
- Log abuse patterns without logging sensitive payloads.
- Combine rate limits with validation, CAPTCHA or turnstile only when abuse evidence justifies it.

## Related Docs

- `SECURITY_AND_PRIVACY_BASELINE.md`
- `INPUT_VALIDATION_AND_PROMPT_INJECTION.md`
- `CONTACT_FORM_CONVERSION_QUESTIONS.md`
