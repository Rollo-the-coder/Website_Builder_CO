# Accessibility And Reduced Motion

Accessibility is a launch requirement, not a polish pass.

## Baseline Checks

- [ ] Keyboard navigation works for all interactive elements
- [ ] Visible focus states on links, buttons, and form fields
- [ ] Semantic headings in logical order
- [ ] Form labels and error messages associated with fields
- [ ] Color contrast meets project target (WCAG 2.1 AA for most client sites)
- [ ] Screen-reader-safe loading and status updates
- [ ] `prefers-reduced-motion` respected for animations and transitions
- [ ] Pause or stop controls for auto-cycling content
- [ ] No surprise scroll hijacking or trapping
- [ ] Video and motion enhance UX without blocking comprehension

## Reduced Motion

When users prefer reduced motion:

- Disable or shorten non-essential animations
- Avoid autoplaying motion that cannot be paused
- Keep essential feedback (focus, success, error) visible without relying on motion alone

## Related Guidance

- `.cursor/rules/07-frontend-ui-engineering.mdc`
- `docs/skills/web-design-guidelines.md`
- `docs/skills/frontend-design.md`
- `docs/patterns/BROWSER_DEVICE_TEST_MATRIX.md`

## Document In

- `docs/project/FINAL_LAUNCH_REVIEW.md`
- `docs/project/BROWSER_DEVICE_TEST_MATRIX.md`
