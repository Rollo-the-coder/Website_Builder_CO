# Contact Form Conversion Questions

Reusable contact form strategy for client websites. Qualify leads without killing conversions.

## Recommended Qualifying Questions

Use a subset that fits the project. Not every field is required for every site.

1. **What is the biggest challenge you are trying to solve right now?**
2. **What have you already tried?**
3. **Why is now the right time to address this?**
4. **What result would make this project successful?**
5. **What is your business/site URL?**
6. **What is your timeline?**
7. **Optional:** What budget range are you planning for?

## Why These Questions Work

- They qualify leads better than a generic "message" field alone.
- They reveal urgency, fit, and expectations early.
- They help the client respond with context instead of starting from zero.

## Conversion Guidance

- Keep forms short enough to avoid killing conversions.
- Use progressive disclosure or optional fields for deeper qualification.
- Put the highest-signal required fields first; move optional budget/timeline questions lower or behind a second step if needed.
- Match tone to the brand — professional services can ask more; simple local businesses may need fewer fields.

## Protection Requirements

Protect form endpoints with:

- Server-side validation and max lengths
- Rate limiting (see `RATE_LIMITING_AND_ABUSE_PREVENTION.md`)
- Honeypot and timestamp checks
- Spam controls (Turnstile/reCAPTCHA only when abuse appears)
- Safe email/CRM routing without exposing internal keys

Document the chosen strategy in `docs/project/CONTACT_FORM_STRATEGY.md`.

## Related Docs

- `INPUT_VALIDATION_AND_PROMPT_INJECTION.md`
- `OBSERVABILITY_AND_ERROR_TRACKING.md`
- `docs/project/CONTACT_FORM_STRATEGY.md`
