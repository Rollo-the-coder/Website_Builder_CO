# Performance And Caching Plan

Fill this checklist for each client/project.

## Critical Pages And Routes

| Page / route | Purpose | Current status | Notes |
|---|---|---|---|
| [Homepage] | | | |
| [Contact] | | | |
| [Other] | | | |

## Performance Review

- [ ] Slow routes identified
- [ ] Expensive queries identified
- [ ] N+1 patterns checked
- [ ] Image and video optimization reviewed
- [ ] CDN/static asset strategy defined
- [ ] Core Web Vitals or equivalent measured

## Caching Plan

### Cacheable Data

| Data | Cache layer | TTL / invalidation | Notes |
|---|---|---|---|
| [Example: public CMS pages] | | | |

### Non-Cacheable Data

| Data | Reason | Notes |
|---|---|---|
| [Example: user dashboard] | User-specific | |

## Database And Infrastructure

- [ ] Connection pooling approach documented
- [ ] Database client reuse pattern documented
- [ ] Shared cache/rate-limit store needed? Yes / No
- [ ] If yes, chosen tool and rationale:

## Load Testing

- [ ] Smoke test tool chosen (k6, Artillery, other)
- [ ] Staging target defined
- [ ] Critical routes in smoke test:
  - [ ] Homepage
  - [ ] Contact / signup flow
  - [ ] Auth flow (if applicable)
  - [ ] Major API routes (if applicable)
- [ ] Results reviewed and bottlenecks logged

## Performance Budget

| Metric | Target | Current | Notes |
|---|---|---|---|
| LCP | | | |
| Bundle size (initial) | | | |
| API p95 (critical routes) | | | |

## Known Bottlenecks

[List current bottlenecks, deferred optimizations, and follow-up tasks.]
