# Authorization Negative Testing

Test what users must **not** be able to do. Positive tests alone miss IDOR and privilege-escalation bugs.

## Core Principle

Client-side hidden buttons, disabled UI, or obscured links are not security. Every protected action must fail safely on the server and at the database layer where applicable.

## Examples To Test

- User A cannot access User B's records by changing a URL or ID
- Account holder cannot access another account's orders, registrations, or documents
- Non-admin cannot access admin pages, APIs, dashboards, exports, or mutations
- Unauthenticated users cannot reach protected routes or APIs
- Wrong-role users receive consistent, non-enumerating errors

## Test Categories

| Category | What to verify |
|---|---|
| Unauthenticated | Protected routes redirect or return 401/403 |
| Wrong role | User without permission cannot read or mutate |
| Cross-account | Changing IDs in URL/body does not expose other users' data |
| Admin-only | Admin mutations blocked for normal users |
| API + UI | UI restrictions match server enforcement |

## Database / RLS

Where Supabase or similar is used:

- RLS policies enforce access at the database level
- Service-role keys are never exposed to the client
- Policies are tested with real JWT roles, not just application code

## Document Results

Record tests in `docs/project/AUTHORIZATION_TEST_PLAN.md`.

## Related Docs

- `SECURITY_AND_PRIVACY_BASELINE.md`
- `docs/project/SECURITY_REVIEW.md`
