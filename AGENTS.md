# AI Agent Entry Point

For any agent working in this repository or a project created from it:

1. Read `docs/START_HERE.md` first.
2. Follow the active guidance in `.cursor/rules/`.
3. Use `docs/project/` as the source of truth for client and project context.
4. Do not overbuild. Choose the smallest solution that satisfies the documented scope.
5. Protect secrets. Never create, expose, log, or commit real credentials.
6. Do not invent service IDs, project refs, API keys, tokens, webhook secrets, or account-specific config.
7. Make the smallest safe change and preserve existing project conventions.
8. Use `docs/skills/` only when a task benefits from that specialized guidance.
9. For auth, payments, AI endpoints, contact forms, public APIs, database access, file uploads, or launch readiness, read the relevant `docs/patterns/` files and update the matching `docs/project/` checklists.
10. Before claiming launch-ready, demo-ready, or handoff-ready for projects with users, payments, or private data, review `docs/patterns/FINAL_LAUNCH_GAP_CHECKLIST.md` and fill `docs/project/FINAL_LAUNCH_REVIEW.md`.
11. Run relevant verification before claiming completion, including `scripts/check-template-safety.sh` and `scripts/security-readiness-check.sh` when appropriate.
12. Update `docs/project/` if assumptions, scope, integrations, or constraints change.
