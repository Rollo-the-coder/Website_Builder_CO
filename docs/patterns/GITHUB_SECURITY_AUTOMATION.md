# GitHub Security Automation

Use GitHub security features and CI examples to catch common issues early. Do not rely on automation alone — still run local audits and manual review.

## Recommended Automation

| Control | Purpose |
|---|---|
| CodeQL / code scanning | Find common vulnerability patterns in code |
| Dependency review | Block or flag risky dependency changes in PRs |
| Dependabot | Keep dependencies updated with PRs |
| Secret scanning / push protection | Prevent committed secrets where available |
| `npm audit` or equivalent | Catch known vulnerable packages locally and in CI |

## Example Workflow Templates

These are **examples only**. Copy and adapt into `.github/workflows/` when a project is ready. Do not activate blindly.

- `templates/github-actions/codeql.yml.example`
- `templates/github-actions/dependency-review.yml.example`
- `templates/github-actions/zap-baseline.yml.example`

## Plan Notes

- Private repos may require specific GitHub plans or settings for advanced security features.
- ZAP baseline scans need a `STAGING_URL` secret and should not run without a safe staging target.
- Tune CodeQL and dependency review for the project's language and package manager.
- Automation complements — does not replace — secure design, RLS review, auth review, and launch checklists.

## Local Checks

Run before commit or push:

```bash
bash scripts/check-template-safety.sh
bash scripts/security-readiness-check.sh
npm audit
```

## Related Docs

- `SECURITY_AND_PRIVACY_BASELINE.md`
- `LOAD_AND_SECURITY_TESTING.md`
- `docs/project/SECURITY_REVIEW.md`
