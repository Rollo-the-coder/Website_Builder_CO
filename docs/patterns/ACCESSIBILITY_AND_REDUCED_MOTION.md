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

### Site motion primitives

Motion is implemented with Framer Motion plus a few CSS/SVG loops. All of the following respect `prefers-reduced-motion`:

| Primitive | File | Behavior when reduced |
|-----------|------|------------------------|
| `Reveal` / `RevealStagger` / `RevealItem` / `RevealImmediate` | `components/reveal.tsx` | Instant visible state via `useReducedMotion` |
| Shared variants | `lib/motion.ts` | `reducedFadeUp` / `reducedStagger` (no transform) |
| System map connectors | `components/system-map-connectors.tsx` | Path fully drawn; traveling dot omitted |
| System map columns / node pulse | `components/website-system-map.tsx` | No entrance delay; accent pulse off |
| Living `SystemPreview` | `components/mockups.tsx` | Content shown immediately; cursor spotlight off |
| Audit score bars | `components/audit-scorecard.tsx` | Bars render at final width |
| CTA band atmosphere | `components/cta-band.tsx` | Gradient/topo breathe loops off |
| Mobile nav | `components/header.tsx` | Open/close without height animation |
| Form success check | `components/audit-request-form.tsx` | Checkmark shown without path draw |
| Global CSS | `app/globals.css` | Animations/transitions collapsed to near-zero |

### Style explorer (permanent homepage control)

The sticky **Try a few looks** bar on `/` is a light client-facing demo of styles and palettes — not a template picker. Copy should make clear every website built is custom from the ground up for the client's preferences and needs.

- **Builder** (`role: brand`) — default site look; badge “This site”
- **PNW / Editorial** (`role: direction`) — same brochure layout, alternate palette/type
- **Showcase** (`role: demo`) — alternate cinematic homepage tree; labeled Demo

Selected state uses border + ring (not the badge alone). “Back to this site” appears when a non-brand look is active. Choice persists in `localStorage` (`gb-theme-preview`).

### Showcase cinematic demo (`data-theme="showcase"`)

When Showcase is selected, the homepage renders an **alternate layout tree** (`components/showcase/*`), not the brochure card grid. Gates:

| Effect | Behavior when reduced |
|--------|------------------------|
| Hero parallax beams / stage drift | Disabled — static full-bleed composition remains |
| Sticky scrub story (desktop) | Chapters shown stacked/static; no scrub transforms |
| Product theater parallax/scale | Disabled |
| Finale amber pulse | Disabled |
| Film grain overlay | Static CSS only (no motion) |

Still no Lenis, scroll-jacking, or route-transition overlays. Builder / PNW / Editorial keep the original homepage composition.

## Related Guidance

- `.cursor/rules/07-frontend-ui-engineering.mdc`
- `docs/skills/web-design-guidelines.md`
- `docs/skills/frontend-design.md`
- `docs/patterns/BROWSER_DEVICE_TEST_MATRIX.md`

## Document In

- `docs/project/FINAL_LAUNCH_REVIEW.md`
- `docs/project/BROWSER_DEVICE_TEST_MATRIX.md`
