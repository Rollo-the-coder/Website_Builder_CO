# Email Deliverability Plan

## Provider And Domain

- **Email provider:** Postmark (Gotta Build server)
- **Sending domain / signature:** `erik@gotta.build` (must be a confirmed Sender Signature or verified domain in Postmark)
- **From address(es):** `erik@gotta.build` (`CONTACT_FROM_EMAIL`)
- **Notification inbox:** `erik@gotta.build` (`CONTACT_TO_EMAIL`)

## DNS Authentication

Use the DNS records Postmark shows for your confirmed domain/signature:

| Record | Status | Notes |
|---|---|---|
| SPF | Confirm in Postmark | Domain or sender signature setup |
| DKIM | Confirm in Postmark | Domain or sender signature setup |
| DMARC | Optional / recommended | Start with `v=DMARC1; p=none;` on `_dmarc` |

## Transactional Emails

| Email type | Trigger | Tested | Result |
|---|---|---|---|
| Contact form notification | `POST /api/contact` in live mode | [ ] | Pending first live test after deploy |
| Password reset | N/A | [ ] | |
| Signup confirmation | N/A | [ ] | |
| Payment receipt | N/A | [ ] | |
| Failed payment / reminder | N/A | [ ] | |

## Failed-Send Handling

- **Where failures are logged:** Vercel function logs (`[contact] Postmark error`)
- **Who is notified:** Submitter sees inline error + `erik@gotta.build` fallback copy
- **Retry path:** User can email `erik@gotta.build` directly; no auto-retry queue yet
- **Sensitive data excluded from email bodies:** No secrets; form fields only. Server logs avoid full PII in error paths.

## Vercel Env (production)

| Name | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://gotta.build` |
| `CONTACT_FORM_MODE` | `live` (production) / `demo` (preview) |
| `CONTACT_TO_EMAIL` | `erik@gotta.build` |
| `CONTACT_FROM_EMAIL` | `erik@gotta.build` (confirmed in Postmark) |
| `POSTMARK_SERVER_TOKEN` | Gotta Build Postmark server token |

## Notes

1. Confirm Sender Signature / domain for `erik@gotta.build` in Postmark.
2. Redeploy after env/code changes so production picks up Postmark.
3. Submit a real audit request on https://gotta.build/contact and confirm inbox delivery.
4. If the server token was shared in chat, rotate it in Postmark after launch and update Vercel.
