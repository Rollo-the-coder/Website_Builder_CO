# Cursor Project Rules

Project-level Cursor rules live in `.cursor/rules/` and are committed with this template.

## Active Rules

- `00-senior-engineer-rails.mdc`: core always-on behavior for safe AI-assisted development.
- `01-spec-driven-development.mdc`: use before significant project, feature, or workflow work.
- `02-planning-and-task-breakdown.mdc`: use after a spec to create small, verifiable tasks.
- `03-incremental-implementation.mdc`: use for multi-step implementation.
- `04-test-driven-development.mdc`: use for behavior changes, bug fixes, and important flows.
- `05-code-review-and-quality.mdc`: use before finishing or merging non-trivial changes.
- `06-security-and-hardening.mdc`: use for auth, payments, data, secrets, APIs, webhooks, permissions, and integrations.
- `07-frontend-ui-engineering.mdc`: use for pages, components, forms, layouts, and UI polish.
- `08-performance-optimization.mdc`: use for speed, bundle, rendering, query, and Core Web Vitals work.
- `09-browser-testing-with-devtools.mdc`: use for browser runtime verification.
- `10-shipping-and-launch.mdc`: use before deployment, launch, demos, and handoff.
- `11-skill-usage-and-selection.mdc`: use to decide when local skill docs should be loaded.
- `13-security-performance-launch-readiness.mdc`: use for auth, payments, AI endpoints, contact forms, public APIs, database access, file uploads, production deploys, and launch readiness.
- `14-final-launch-gap-check.mdc`: use before launch, demo, client handoff, or production flows with users, payments, or private data.

Rule `00` is the core always-on rail. Most other rules should be referenced only when relevant so the agent does not load unnecessary context.

Rule `13` pairs with `docs/patterns/` standards and these project checklists:

- `docs/project/SECURITY_REVIEW.md`
- `docs/project/PERFORMANCE_AND_CACHING_PLAN.md`
- `docs/project/OBSERVABILITY_PLAN.md`
- `docs/project/CONTACT_FORM_STRATEGY.md`

Rule `14` pairs with final launch gap patterns and these project checklists:

- `docs/project/FINAL_LAUNCH_REVIEW.md`
- `docs/project/AUTHORIZATION_TEST_PLAN.md`
- `docs/project/BACKUP_AND_ROLLBACK_PLAN.md`
- `docs/project/EMAIL_DELIVERABILITY_PLAN.md`
- `docs/project/PRIVACY_AND_DATA_RETENTION.md`
- `docs/project/BROWSER_DEVICE_TEST_MATRIX.md`

## Example Prompts

```text
Follow 00, 01, and 02. Help me turn this website idea into a spec and task plan before coding.
```

```text
This touches a contact form and email integration. Follow security-and-hardening and call out risks before editing.
```

```text
Use frontend-ui-engineering and web-design-guidelines to review this page before demo.
```

```text
This adds a contact form and public API route. Follow 13-security-performance-launch-readiness and the relevant docs/patterns files before implementing.
```

```text
Before launch, follow 14-final-launch-gap-check and fill docs/project/FINAL_LAUNCH_REVIEW.md.
```
