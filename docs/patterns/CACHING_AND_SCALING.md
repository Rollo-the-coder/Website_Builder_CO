# Caching And Scaling

Review caching and scaling needs from evidence, not assumptions. Do not add Redis just because it sounds professional.

## Caching Review Questions

- What data is expensive to compute or fetch?
- What data is public and safe to cache?
- What data is user-specific and should not be globally cached?
- What changes often vs rarely?
- What must be fresh for correctness?
- Are there N+1 queries or repeated requests?
- Are browser, CDN, server, database, and app-level caches used correctly?

## Good Cache Candidates

- Public marketing content
- Public program or service listings
- Public CMS content
- Static configuration
- Expensive aggregate stats that do not need real-time accuracy

## Bad Cache Candidates

- User-specific dashboards unless scoped and keyed safely per user/session
- Auth or session data in shared caches
- Payment state that must be fresh
- Private admin or customer data
- Anything permission-sensitive without careful cache keying and invalidation

## Supabase / Database Notes

- Review pooled vs direct connection strings for the deployment model.
- Serverless, edge, and autoscaling contexts usually need connection pooling.
- Avoid creating new database clients per request when the framework recommends reuse.
- Monitor connection counts, slow queries, and pool exhaustion.

## When To Add Shared Infrastructure

Add Redis, Upstash, or similar when the app has a real need for:

- Distributed rate limiting across instances
- Shared cache across serverless functions or multiple nodes
- Session or queue coordination at scale

Document decisions in `docs/project/PERFORMANCE_AND_CACHING_PLAN.md`.

## Related Docs

- `SECURITY_AND_PRIVACY_BASELINE.md`
- `OBSERVABILITY_AND_ERROR_TRACKING.md`
- `LOAD_AND_SECURITY_TESTING.md`
