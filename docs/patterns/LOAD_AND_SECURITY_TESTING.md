# Load And Security Testing

Add lightweight smoke tests and staging scans before major launch or demos. Use results to find bottlenecks and baseline issues — not to perform enterprise theater.

## Load Testing

- Add k6 or Artillery smoke tests for critical routes before major launch or demos.
- Test homepage, signup/contact flow, login/auth flow, admin dashboard if applicable, and major API routes.
- Do not hammer production.
- Prefer staging with safe test data.
- Start with small smoke tests before heavy load tests.
- Use results to find bottlenecks, connection limits, and slow queries.

Example templates (not active by default):

- `templates/load-tests/k6-smoke.js.example`
- `templates/load-tests/artillery-smoke.yml.example`

## Security Testing

- Add OWASP ZAP baseline scan against staging when a staging URL exists.
- Treat ZAP as a useful baseline, not proof of security.
- Burp Suite is useful for manual API and security testing on serious auth/payment/API apps, but not required for every simple brochure site.
- Security-test webhooks, auth boundaries, role access, file uploads, forms, and public APIs.
- Run dependency and code scanning in CI where available (see `GITHUB_SECURITY_AUTOMATION.md`).

Example template (not active by default):

- `templates/github-actions/zap-baseline.yml.example`

## When To Escalate

Escalate beyond smoke tests when the app handles:

- Payments or subscriptions
- Sensitive personal data
- Complex role-based access
- Public AI endpoints with tool access
- High-traffic launches with SLAs

## Related Docs

- `CACHING_AND_SCALING.md`
- `GITHUB_SECURITY_AUTOMATION.md`
- `docs/project/PERFORMANCE_AND_CACHING_PLAN.md`
- `docs/project/SECURITY_REVIEW.md`
