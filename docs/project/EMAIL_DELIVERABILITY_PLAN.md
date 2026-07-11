# Email Deliverability Plan

## Provider And Domain

- **Email provider:** Postmark (Gotta Build server)
- **Sending domain / signature:** `erik@gotta.build` (must be a confirmed Sender Signature or verified domain in Postmark)
- **From address(es):** `erik@gotta.build` (`CONTACT_FROM_EMAIL`)
- **Notification inbox:** `erik@gotta.build` (`CONTACT_TO_EMAIL`)

## DNS Authentication

Add these Postmark records at the DNS host for `gotta.build` (nameservers: `dns1/dns2.registrar-servers.com` — typically Namecheap Advanced DNS):

| Type | Host | Value | Status |
|---|---|---|---|
| TXT | `20260711213252pm._domainkey` | `k=rsa;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2sJIa0jlcxDux1KZMP0y/7582kDHMwcxtMnXy8brqhd/EQ8CpSCizllwbuVj7ydK3d6l8OaaMzWA0YIBY0zIJS5vIrKd8Nda1b8/apRc67DpEj4UIFRcAaldzZ8t8v02skSv01xH2ZxDPn6mDkeyiosCkvqcgM/B1dUFQa8SEbQIDAQAB` | Verified in Postmark |
| CNAME | `pm-bounces` | `pm.mtasv.net.` | Verified in Postmark |
| TXT (DMARC) | `_dmarc` | `v=DMARC1; p=none;` | Added at Namecheap |

Postmark → Sender Signatures → gotta.build → DNS Settings: **DKIM verified**, **Return-Path verified**. Domain can send from any `@gotta.build` address.

## Transactional Emails

| Email type | Trigger | Tested | Result |
|---|---|---|---|
| Contact form notification | `POST /api/contact` in live mode | [x] | Live inbox delivery confirmed |
| Contact form confirmation | Same route, to submitter after notification | [ ] | Needs live test; may require Postmark approval if still in Test mode |
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

1. Sender Signature confirmed for `erik@gotta.build`; domain DKIM + Return-Path verified in Postmark (Jul 11, 2026).
2. Contact form live sends were tested successfully before DKIM setup.
3. If the server token was shared in chat, rotate it in Postmark and update Vercel.
4. Postmark account is still in Test mode — request approval when you need to send to arbitrary recipients via Postmark (not required for form-to-self or Gmail outreach).
