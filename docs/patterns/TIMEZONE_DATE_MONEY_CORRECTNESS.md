# Timezone, Date, And Money Correctness

Off-by-one timezone bugs and float money errors survive demos and break trust in production.

## Money

- Store money in integer cents (or smallest currency unit), not floats, when applicable
- Verify currency code and formatting for the business locale
- Do not trust client-calculated payment totals
- Reconcile displayed totals with server-side calculations

## Dates And Timezones

- Store timestamps in UTC where possible; convert for display
- Verify due dates, deadlines, events, reminders, and payment schedules
- Test edge cases around midnight, DST changes, and month boundaries
- Display dates clearly for the business's locale and timezone
- Avoid ambiguous date formats in user-facing copy

## Test Cases

- Event on last day of month
- Reminder scheduled near midnight in business timezone
- Payment due date crossing timezone boundary
- Refund or proration calculations if applicable

## Document In

- `docs/project/FINAL_LAUNCH_REVIEW.md`
- `docs/project/LAUNCH_CHECKLIST.md`

## Related Docs

- `BACKUP_RESTORE_ROLLBACK.md`
- `ENVIRONMENT_SEPARATION.md`
