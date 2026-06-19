# Security And Privacy Baseline

Generic security baseline for future web projects. Adapt to scope — a simple brochure site needs less than a payment or AI app, but launch-critical gates still apply.

## Critical Launch Gates

### Secrets And Environment

- [ ] No secrets in git history or committed files.
- [ ] All secrets live in environment variables or a managed secret store.
- [ ] `.env` files are ignored.
- [ ] `.env.example` contains placeholders only.
- [ ] Service-role keys, AI keys, and webhook secrets are never exposed to the browser.

### Input And Routes

- [ ] All public and server routes validate inputs at the boundary.
- [ ] Reject oversized, malformed, unexpected, or empty inputs where relevant.
- [ ] Rate limit auth/login, contact forms, AI endpoints, expensive API routes, and abuse-prone routes.
- [ ] Verify webhook signatures for Stripe or similar services.
- [ ] Do not log sensitive data (passwords, tokens, full payment details, PII unless required and protected).

### Access And Data

- [ ] Use least-privilege service keys and API scopes.
- [ ] Review auth, session, and role checks on protected routes.
- [ ] Review database access patterns and RLS where Supabase is used.
- [ ] Review file upload types, size limits, and storage permissions.

### Launch Readiness

- [ ] Add error tracking before launch.
- [ ] Add security scanning before launch (see `GITHUB_SECURITY_AUTOMATION.md`).
- [ ] Produce a filled `docs/project/SECURITY_REVIEW.md`.

## Do Not Overbuild

- Do not add Redis/Upstash unless there is a clear need: distributed rate limiting, shared cache, session store, or serverless/multi-instance deployment.
- Do not block MVP launch on advanced Burp testing unless the app handles sensitive data, payments, or complex auth/API surfaces.
- Do not add observability stacks beyond what the project can operate and review.

## Related Docs

- `RATE_LIMITING_AND_ABUSE_PREVENTION.md`
- `INPUT_VALIDATION_AND_PROMPT_INJECTION.md`
- `OBSERVABILITY_AND_ERROR_TRACKING.md`
- `LOAD_AND_SECURITY_TESTING.md`
- `docs/project/SECURITY_REVIEW.md`
