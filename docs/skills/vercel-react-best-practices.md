# Skill: React / Next.js Best Practices

Use this skill for React or Next.js implementation and performance work. Do not assume a project uses Next.js unless `docs/project/` or the existing codebase says so.

## Use When

- Building components or pages.
- Choosing data fetching and rendering behavior.
- Reviewing hydration, caching, streaming, or server/client boundaries.
- Reducing bundle size or unnecessary re-renders.
- Investigating Core Web Vitals or runtime performance.

## Guidelines

- Prefer server-rendered or static content for simple marketing pages when the chosen stack supports it.
- Keep client-side JavaScript limited to actual interactivity.
- Put state as close as possible to where it is used.
- Avoid global state unless multiple distant parts of the UI truly need it.
- Avoid unnecessary effects; derive values during render when possible.
- Use stable props and memoization only when measurements or complexity justify it.
- Keep heavy dependencies out of the initial bundle.
- Use framework image, font, route, and cache primitives when present.

## Data Fetching

- Avoid request waterfalls.
- Fetch only the data needed for the view.
- Cache intentionally, with invalidation rules documented.
- Keep secrets and privileged service calls on the server.

## Verification Checklist

- [ ] The chosen rendering mode matches the page need.
- [ ] Client components are limited to interactive areas.
- [ ] No obvious hydration or console errors.
- [ ] No unnecessary heavy dependencies in the initial path.
- [ ] Loading, error, and empty states exist.
- [ ] Performance-sensitive changes include before/after evidence.
