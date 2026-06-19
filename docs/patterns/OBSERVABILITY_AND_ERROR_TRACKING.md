# Observability And Error Tracking

Before launch, a serious app should be observable enough to detect and investigate failures without guessing.

## Minimum Expectations

- [ ] Error tracking for server and client errors.
- [ ] Basic structured logging with useful context (route, request ID, user ID if safe).
- [ ] No sensitive data in logs.
- [ ] Monitoring for failed payments or webhooks if relevant.
- [ ] Monitoring for AI endpoint usage and cost if relevant.
- [ ] Visibility into contact form failures.
- [ ] Visibility into auth/login failures.
- [ ] A way to investigate bugs without asking users to screenshot everything.

## Common Tools (Choose Per Project)

This starter does not hardcode a vendor. Document the chosen tool in `docs/project/OBSERVABILITY_PLAN.md`.

| Category | Examples |
|---|---|
| Error tracking | Sentry, Bugsnag, Rollbar |
| Logging | Logtail/Better Stack, Axiom, platform-native logs |
| Hosting logs | Vercel logs, Netlify logs, Cloudflare logs |
| Database logs | Supabase logs, managed Postgres logs |
| Uptime | Better Uptime, Pingdom, platform health checks |

## What To Log vs Not Log

**Safe to log:** request IDs, route names, error types, latency, anonymized usage counts.

**Avoid logging:** passwords, tokens, full credit card numbers, raw webhook secrets, unnecessary PII, full AI prompts containing secrets.

## Related Docs

- `SECURITY_AND_PRIVACY_BASELINE.md`
- `LOAD_AND_SECURITY_TESTING.md`
- `docs/project/OBSERVABILITY_PLAN.md`
