# Browser And Device Test Matrix

Test on real devices and browsers users actually use — especially mobile Safari.

## Minimum Matrix

| Device / browser | Priority |
|---|---|
| iPhone Safari | High |
| Android Chrome | High |
| Desktop Chrome | High |
| Desktop Safari | Medium (if available) |
| Small mobile viewport (~320–390px) | High |
| Tablet viewport | Medium when layout differs |

## Critical Flows To Test

- Homepage
- Contact or request form
- Login / signup (if present)
- Checkout / payment (if present)
- User dashboard (if present)
- Admin dashboard (if present)
- File upload (if present)
- Video or media-heavy pages (if present)

## What To Record

- Flow tested
- Pass / fail
- Console errors
- Layout breaks
- Form submission result
- Fixed? Yes / No

## Document In

- `docs/project/BROWSER_DEVICE_TEST_MATRIX.md`
- `docs/project/LAUNCH_CHECKLIST.md`

## Related Docs

- `ACCESSIBILITY_AND_REDUCED_MOTION.md`
- `.cursor/rules/09-browser-testing-with-devtools.mdc`
