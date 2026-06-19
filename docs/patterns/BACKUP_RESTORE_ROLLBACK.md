# Backup, Restore, And Rollback

Know how to recover before you need to recover.

## Minimum Expectations

- [ ] Know how to restore database data
- [ ] Know deployment rollback path
- [ ] Know migration rollback strategy
- [ ] Keep test, staging, and production separate
- [ ] Do not run destructive migrations without backups
- [ ] Document what is backed up, where, and how often

## For Small Projects

A simple documented platform backup and rollback plan is enough. You do not need a custom backup system on day one.

Examples:

- Managed database daily backups with documented restore steps
- Hosting platform rollback to previous deployment
- Migration down scripts or restore-from-backup plan for risky schema changes

## Document In

- `docs/project/BACKUP_AND_ROLLBACK_PLAN.md`
- `docs/project/FINAL_LAUNCH_REVIEW.md`

## Related Docs

- `ENVIRONMENT_SEPARATION.md`
- `docs/project/LAUNCH_CHECKLIST.md`
