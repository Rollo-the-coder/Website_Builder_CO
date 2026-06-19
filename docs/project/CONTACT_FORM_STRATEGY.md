# Contact Form Strategy

Fill this doc for each client/project with a contact, quote, or lead form.

## Form Goal

[What should this form accomplish? Example: qualify service inquiries, book consults, capture support requests.]

## Required Fields

- [ ] Name
- [ ] Email
- [ ] Phone (optional/required)
- [ ] Business/site URL
- [ ] Message or qualifying questions
- [ ] Other:

## Qualifying Questions

Use ideas from `docs/patterns/CONTACT_FORM_CONVERSION_QUESTIONS.md`.

1.
2.
3.

## Spam And Rate-Limit Controls

- [ ] Server-side validation
- [ ] Max field lengths
- [ ] Honeypot field
- [ ] Timestamp / minimum fill time check
- [ ] Rate limit per IP
- [ ] CAPTCHA or Turnstile (only if needed)
- [ ] Blocklist or allowlist rules (if needed)

## Submission Routing

| Destination | Behavior | Notes |
|---|---|---|
| Email notification | | |
| CRM | | |
| Database/storage | | |
| Webhook/automation | | |

## User-Facing Behavior

- Success message:
- Error message (generic, non-enumerating):
- Redirect after submit (if any):
- Auto-reply to submitter: Yes / No

## Follow-Up Workflow

1. Who receives notifications:
2. Expected response time:
3. CRM or pipeline stage:
4. Escalation path:

## Launch Checks

- [ ] Test submission in staging
- [ ] Notification received
- [ ] Spam controls verified
- [ ] Failure logging visible in observability tool
