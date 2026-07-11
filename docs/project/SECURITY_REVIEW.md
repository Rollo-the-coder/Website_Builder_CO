# Security Review

Fill this checklist for each client/project before launch.

## Secrets And Environment

- [ ] No secrets in git
- [ ] Secrets only in env vars or secret store
- [ ] `.env` ignored; `.env.example` uses placeholders only
- [ ] No service-role or AI keys in client bundles
- [ ] Webhook secrets configured and verified

## Auth And Access

- [ ] Auth/session flow reviewed
- [ ] Role and permission checks on protected routes
- [ ] Password reset and login abuse limits in place
- [ ] Admin routes protected

## Database And RLS

- [ ] Database access patterns reviewed
- [ ] Supabase RLS policies verified (if applicable)
- [ ] Least-privilege keys in use
- [ ] No direct client access to privileged tables

## Inputs, Forms, And APIs

- [x] Server-side validation on all public routes
- [x] Contact form protected (validation, rate limit 5/15min, honeypot, min fill-time, origin allowlist, body size cap)
- [ ] File upload restrictions reviewed (if applicable)
- [x] Public API routes reviewed (`POST /api/contact`)

## Webhooks And Payments

- [ ] Webhook signatures verified
- [ ] Payment flows tested in test mode
- [ ] No live keys in non-production environments
- [ ] Idempotency and replay handling reviewed (if applicable)

## AI Endpoints (If Applicable)

- [ ] Provider keys server-side only
- [ ] Rate limits and usage caps configured
- [ ] Prompt injection boundaries reviewed
- [ ] Kill switch or feature flag available
- [ ] Model output validated before privileged actions

## Logging And Observability

- [ ] Error tracking configured
- [ ] No sensitive data in logs
- [ ] Failed auth/form/webhook events visible
- [ ] Admin audit logging reviewed for sensitive actions (if applicable)

## Final Launch Gaps

- [ ] Authorization negative tests planned or completed (`AUTHORIZATION_TEST_PLAN.md`)
- [ ] Environment separation verified (`ENVIRONMENT_SEPARATION.md`)
- [ ] Backup and rollback documented (`BACKUP_AND_ROLLBACK_PLAN.md`)
- [ ] Privacy and data retention documented (`PRIVACY_AND_DATA_RETENTION.md`)

## GitHub And Dependencies

- [ ] Code scanning / dependency review planned or enabled
- [ ] `npm audit` or equivalent run
- [ ] Known dependency risks documented

## Signoff

### Known Risks

[List accepted risks and mitigations.]

### Launch Blockers

[List items that must be resolved before launch.]

### Reviewer / Date

- Reviewer:
- Date:
- Approved for launch: Yes / No
