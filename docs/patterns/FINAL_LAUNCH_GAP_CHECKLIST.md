# Final Launch Gap Checklist

Commonly missed issues in vibe-coded apps and rushed client launches. Use before real users, payments, accounts, private data, or client go-live.

This checklist is not meant to delay every small brochure site. It is meant to catch risk before launch when the project handles users, data, money, or admin workflows.

## Checklist

1. [ ] **Authorization negative tests** — users cannot access data or actions they should not
2. [ ] **Backup / restore / rollback** — database backup, deploy rollback, migration rollback documented
3. [ ] **Email deliverability** — domain, SPF/DKIM/DMARC, transactional emails tested, failures visible
4. [ ] **Admin audit logs** — sensitive admin actions logged where the app warrants it
5. [ ] **Privacy / minor data / retention** — data collection, access, retention, and deletion documented
6. [ ] **Timezone / date / money correctness** — dates, deadlines, and money handled safely
7. [ ] **Accessibility / reduced motion** — keyboard, focus, labels, contrast, motion preferences
8. [ ] **Browser / device / mobile Safari testing** — real-device matrix for critical flows
9. [ ] **Legal / policy placeholders** — privacy, cookie, terms, refund aligned with behavior
10. [ ] **Environment separation** — dev/staging/prod, test vs live keys, webhook secrets per env

## Project Docs To Fill

- `docs/project/FINAL_LAUNCH_REVIEW.md`
- `docs/project/AUTHORIZATION_TEST_PLAN.md`
- `docs/project/BACKUP_AND_ROLLBACK_PLAN.md`
- `docs/project/EMAIL_DELIVERABILITY_PLAN.md`
- `docs/project/PRIVACY_AND_DATA_RETENTION.md`
- `docs/project/BROWSER_DEVICE_TEST_MATRIX.md`

## Related Rule

Use `.cursor/rules/14-final-launch-gap-check.mdc` before claiming launch-ready.
