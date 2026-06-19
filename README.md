# cursor-web-starter

A reusable GitHub template for client website projects that start with clear AI workflow, project context, Cursor rules, and helper scripts before any app scaffold exists.

This repo is for builders who use Cursor to plan, design, implement, test, review, and ship small business or client websites with consistent engineering rails. It provides the template layer only: rules, docs, project intake forms, local skill references, optional workflows, and safety scripts.

## Use This Template

1. In GitHub, click **Use this template** on this repository.
2. Create a new repo for the client project.
3. Clone the new repo locally.
4. Open it in Cursor.
5. Ask Cursor to read `AGENTS.md` and `docs/START_HERE.md` before doing project work.

Do not add a framework until the project brief and scope justify it. This starter intentionally does not include Next.js, Vite, React, Tailwind, Supabase, Stripe, Vercel, or any generated app files.

## First Steps For A New Client Project

Fill out the project context before building:

1. `docs/project/PROJECT_BRIEF.md`
2. `docs/project/CLIENT_INTAKE.md`
3. `docs/project/WEBSITE_SCOPE.md`
4. `docs/project/CONTENT_CHECKLIST.md`
5. `docs/project/LOCAL_SEO_CHECKLIST.md`
6. `docs/project/LAUNCH_CHECKLIST.md`
7. `docs/project/HANDOFF_CHECKLIST.md`
8. `docs/project/SECURITY_REVIEW.md`
9. `docs/project/PERFORMANCE_AND_CACHING_PLAN.md`
10. `docs/project/OBSERVABILITY_PLAN.md`
11. `docs/project/CONTACT_FORM_STRATEGY.md` (if the site has a contact or lead form)
12. `docs/project/FINAL_LAUNCH_REVIEW.md` (before launch, demo, or handoff with real users/data)

These files become the source of truth for project assumptions, client requirements, launch quality, and handoff expectations.

## Security, Performance, And Launch Readiness

Reusable standards live in `docs/patterns/`:

- Security and privacy baseline
- Rate limiting and abuse prevention
- Input validation and prompt injection
- Caching and scaling
- Observability and error tracking
- Load and security testing
- GitHub security automation
- Contact form conversion questions

Use Cursor rule `13-security-performance-launch-readiness.mdc` when work touches auth, payments, AI endpoints, contact forms, public APIs, database access, file uploads, or launch readiness.

Use Cursor rule `14-final-launch-gap-check.mdc` before claiming a project is launch-ready — it covers authorization negative tests, backup/rollback, email deliverability, privacy, accessibility, browser/device testing, and environment separation.

Final launch gap patterns live in `docs/patterns/FINAL_LAUNCH_GAP_CHECKLIST.md` and related pattern docs.

Example templates (not active by default) live in:

- `templates/github-actions/`
- `templates/load-tests/`

## Cursor Rules

Project rules live in `.cursor/rules/`. Cursor can use them directly when this repo is opened as a project. Rule `00-senior-engineer-rails.mdc` is always on; the other rules are task-specific and should be referenced when relevant.

Common prompts:

```text
Read AGENTS.md and docs/START_HERE.md, then help me fill the project brief.
```

```text
Use spec-driven-development and planning-and-task-breakdown for this website scope before coding.
```

```text
Use frontend-ui-engineering and web-design-guidelines before marking this page ready for demo.
```

## Global Cursor User Rule

`docs/ai-workflow/CURSOR_GLOBAL_USER_RULE.md` contains a short global rule you can paste manually into Cursor user/global rules settings. This repo does not auto-install global Cursor settings.

## Local Skills

Local skill references live in `docs/skills/`. They are committed Markdown docs, so no package install is required. Use them only when relevant:

- `frontend-design.md` for UI direction and visual polish.
- `vercel-react-best-practices.md` for React/Next.js implementation and performance patterns.
- `web-design-guidelines.md` before UI review, demo, or launch.
- `skill-creator.md` when a repeated workflow should become reusable guidance.

## Copy Rules Into An Existing Project

Use the bootstrap script from this repo:

```bash
bash scripts/bootstrap-cursor-rules-to-new-project.sh /path/to/existing/project
```

By default, the script asks before overwriting existing files. Pass `--force` to overwrite intentionally:

```bash
bash scripts/bootstrap-cursor-rules-to-new-project.sh /path/to/existing/project --force
```

## Safety Check

Before committing or pushing, run:

```bash
bash scripts/check-template-safety.sh
bash scripts/security-readiness-check.sh
```

`check-template-safety.sh` scans for ignored environment files, obvious secret names, source-project terms, generated output folders, and service-specific project references that do not belong in this starter.

`security-readiness-check.sh` warns about common secret patterns and missing launch-readiness project docs.

## Intentionally Not Included

This template excludes app source code, generated build output, dependency folders, `.env` files, account-specific MCP config, real service IDs, real API keys, production configuration, and business-specific implementation docs from any source repo. Optional workflows under `optional/` are inactive until copied into `.cursor/rules/` by a project owner.
