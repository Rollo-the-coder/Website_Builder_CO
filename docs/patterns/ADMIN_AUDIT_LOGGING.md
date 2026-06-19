# Admin Audit Logging

Sensitive apps should record who changed what, and when.

## Actions Worth Logging

- Role or permission changes
- Payment status changes
- Refunds and manual overrides
- Registration or enrollment cancellations
- Team, roster, or membership changes
- Data deletion
- Failed webhook or payment events (where actionable)
- Critical settings changes

## Keep It Proportional

For small brochure sites, full audit systems are usually unnecessary.

For apps handling money, private user data, minors, or admin workflows, some audit trail is important. Options:

- Structured application logs with actor, action, target, timestamp
- Simple database audit rows for sensitive mutations
- Provider logs (Stripe, Supabase) supplemented by app-level context

Do not overbuild a custom audit platform unless scope clearly requires it.

## Document In

- `docs/project/FINAL_LAUNCH_REVIEW.md`
- `docs/project/SECURITY_REVIEW.md`

## Related Docs

- `OBSERVABILITY_AND_ERROR_TRACKING.md`
- `PRIVACY_AND_MINOR_DATA.md`
