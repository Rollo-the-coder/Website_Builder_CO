# Authorization Test Plan

Negative authorization test plan — what users must **not** be able to do.

## Roles

| Role | Description |
|---|---|
| [Guest / unauthenticated] | |
| [Standard user] | |
| [Admin] | |
| [Other] | |

## Protected Pages

| Page / route | Allowed roles | Tested | Result |
|---|---|---|---|
| | | [ ] | |

## Protected APIs

| Endpoint | Method | Allowed roles | Tested | Result |
|---|---|---|---|---|
| | | | [ ] | |

## Cross-User Data Tests

| Test | Steps | Expected result | Tested | Pass? |
|---|---|---|---|---|
| User A cannot access User B record by ID | Change ID in URL/body | 403 or empty safe result | [ ] | |
| Unauthenticated access blocked | Hit protected route without session | Redirect or 401/403 | [ ] | |

## Admin-Only Tests

| Test | Steps | Expected result | Tested | Pass? |
|---|---|---|---|---|
| Non-admin cannot access admin dashboard | | 403 / redirect | [ ] | |
| Non-admin cannot call admin mutation API | | 403 | [ ] | |

## Database / RLS (If Applicable)

| Policy / table | Test | Expected | Tested | Pass? |
|---|---|---|---|---|
| | | | [ ] | |

## Notes

[Findings, fixes, deferred items.]
