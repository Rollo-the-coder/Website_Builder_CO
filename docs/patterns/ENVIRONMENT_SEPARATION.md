# Environment Separation

Keep dev, staging, and production clearly separated — especially for payments, webhooks, and secrets.

## Checklist

- [ ] Separate dev, staging, and production environments where possible
- [ ] Test payment keys separate from live payment keys
- [ ] Database or Supabase projects separated by environment where appropriate
- [ ] Webhook secrets unique per environment
- [ ] No production secrets in local docs, chat, or committed files
- [ ] No test data in production
- [ ] Clear deployment rollback path documented
- [ ] Environment variables documented in `.env.example` only — never commit real values

## Common Mistakes

- Live Stripe keys in local `.env` shared across team
- Staging webhook endpoint pointed at production database
- Production deploy using test email provider domain
- Copy-pasting production URLs into staging config

## Document In

- `docs/project/BACKUP_AND_ROLLBACK_PLAN.md`
- `docs/project/FINAL_LAUNCH_REVIEW.md`
- `docs/project/SECURITY_REVIEW.md`

## Related Docs

- `SECURITY_AND_PRIVACY_BASELINE.md`
- `EMAIL_DELIVERABILITY.md`
