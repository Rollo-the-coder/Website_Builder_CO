# Start Here

This repo is a reusable starter/template for future client website projects. It provides project context templates, Cursor rules, local skill docs, security/performance patterns, final launch-gap checklists, and safety scripts. It does not include an app scaffold.

## Recommended Flow

1. Fill `docs/project/PROJECT_BRIEF.md`.
2. Fill `docs/project/CLIENT_INTAKE.md` and `docs/project/WEBSITE_SCOPE.md`.
3. Fill launch-readiness docs as scope requires:
   - `SECURITY_REVIEW.md`
   - `PERFORMANCE_AND_CACHING_PLAN.md`
   - `OBSERVABILITY_PLAN.md`
   - `CONTACT_FORM_STRATEGY.md`
4. Before launch or handoff with real users, payments, or private data, fill final gap docs:
   - `FINAL_LAUNCH_REVIEW.md`
   - `AUTHORIZATION_TEST_PLAN.md`
   - `BACKUP_AND_ROLLBACK_PLAN.md`
   - `EMAIL_DELIVERABILITY_PLAN.md`
   - `PRIVACY_AND_DATA_RETENTION.md`
   - `BROWSER_DEVICE_TEST_MATRIX.md`
5. Use the Cursor rules to spec, plan, build, test, review, and ship.
6. Pick a framework only after scope and constraints are clear.
7. Keep project assumptions current in `docs/project/`.

## Common Tasks

- New project discovery: `docs/project/PROJECT_BRIEF.md`, `CLIENT_INTAKE.md`, `WEBSITE_SCOPE.md`.
- Content gathering: `docs/project/CONTENT_CHECKLIST.md`.
- Local service pages and search basics: `docs/project/LOCAL_SEO_CHECKLIST.md`.
- Pre-launch review: `docs/project/LAUNCH_CHECKLIST.md` and `docs/project/FINAL_LAUNCH_REVIEW.md`.
- Security review: `docs/project/SECURITY_REVIEW.md` and `docs/patterns/SECURITY_AND_PRIVACY_BASELINE.md`.
- Performance and caching: `docs/project/PERFORMANCE_AND_CACHING_PLAN.md` and `docs/patterns/CACHING_AND_SCALING.md`.
- Observability: `docs/project/OBSERVABILITY_PLAN.md` and `docs/patterns/OBSERVABILITY_AND_ERROR_TRACKING.md`.
- Contact forms: `docs/project/CONTACT_FORM_STRATEGY.md` and `docs/patterns/CONTACT_FORM_CONVERSION_QUESTIONS.md`.
- Final launch gaps: `docs/patterns/FINAL_LAUNCH_GAP_CHECKLIST.md` and related pattern docs.
- Authorization negative tests: `docs/project/AUTHORIZATION_TEST_PLAN.md`.
- Backup/rollback: `docs/project/BACKUP_AND_ROLLBACK_PLAN.md`.
- Email deliverability: `docs/project/EMAIL_DELIVERABILITY_PLAN.md`.
- Privacy/retention: `docs/project/PRIVACY_AND_DATA_RETENTION.md`.
- Browser/device testing: `docs/project/BROWSER_DEVICE_TEST_MATRIX.md`.
- Load/security testing examples: `docs/patterns/LOAD_AND_SECURITY_TESTING.md`, `templates/load-tests/`, `templates/github-actions/`.
- Client handoff: `docs/project/HANDOFF_CHECKLIST.md`.
- Cursor setup: `docs/ai-workflow/CURSOR_GLOBAL_USER_RULE.md` and `CURSOR_PROJECT_RULES.md`.
- MCP placeholders: `docs/ai-workflow/MCP_EXAMPLE.md`.

## Skill References

- Use `docs/skills/frontend-design.md` for UI, pages, components, landing pages, forms, and visual polish.
- Use `docs/skills/vercel-react-best-practices.md` for React/Next.js implementation, rendering, data fetching, caching, and performance review. Do not assume the project uses Next.js unless the project docs say so.
- Use `docs/skills/web-design-guidelines.md` before demos, launch, or completion of UI work.
- Use `docs/skills/skill-creator.md` only when creating or improving reusable project-specific skills.

## Launch Rules

For auth, payments, AI endpoints, contact forms, public APIs, database access, file uploads, or production launch work, reference `.cursor/rules/13-security-performance-launch-readiness.mdc` and the matching `docs/patterns/` files before implementing or claiming done.

Before claiming launch-ready, demo-ready, or handoff-ready, reference `.cursor/rules/14-final-launch-gap-check.mdc` and complete `docs/project/FINAL_LAUNCH_REVIEW.md`.
