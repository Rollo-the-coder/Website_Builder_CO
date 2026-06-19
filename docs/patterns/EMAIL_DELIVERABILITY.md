# Email Deliverability

Transactional email failures are silent launch killers. Verify sending before go-live.

## Checklist

- [ ] Verify sending domain ownership
- [ ] Configure SPF, DKIM, and DMARC where applicable
- [ ] Confirm from-address ownership and reputation
- [ ] Test password reset emails (if applicable)
- [ ] Test contact form notifications
- [ ] Test confirmation, reminder, and receipt emails where relevant
- [ ] Test failed-payment or dunning emails where relevant
- [ ] Log failed sends safely (no secrets or unnecessary PII)
- [ ] Provide resend or retry path for business-critical email
- [ ] Keep email provider keys server-side only

## What To Avoid

- Sensitive data in email bodies when not required
- Hardcoded provider keys in client code
- Assuming "it sent" without checking provider logs
- Using unverified domains in production

## Document In

- `docs/project/EMAIL_DELIVERABILITY_PLAN.md`
- `docs/project/CONTACT_FORM_STRATEGY.md` (for contact notifications)

## Related Docs

- `OBSERVABILITY_AND_ERROR_TRACKING.md`
- `ENVIRONMENT_SEPARATION.md`
