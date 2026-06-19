#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

warnings=0
note() { echo "[security-readiness] $*"; }
warn() { echo "[warn] $*"; warnings=$((warnings + 1)); }

note "Checking for committed environment files"
for path in .env .env.local .env.development .env.production .env.test; do
  if [[ -e "$path" ]]; then
    warn "Environment file exists: $path"
  fi
done

note "Scanning tracked files for common secret patterns"
mapfile -t files < <(git ls-files --cached --others --exclude-standard 2>/dev/null || true)
if [[ "${#files[@]}" -eq 0 ]]; then
  mapfile -t files < <(python - <<'PYFILES'
from pathlib import Path
skip = {'.git', '_reference', 'node_modules'}
for p in sorted(Path('.').rglob('*')):
    if p.is_file() and not any(part in skip for part in p.parts):
        print(p.as_posix())
PYFILES
)
fi

while IFS= read -r hit; do
  [[ -z "$hit" ]] && continue
  file="${hit%%:*}"
  case "$file" in
    scripts/check-template-safety.sh|scripts/security-readiness-check.sh) continue ;;
  esac
  if [[ "$hit" == *"excluded from template"* || "$hit" == *"Excluded from template"* || "$hit" == *"placeholder"* ]]; then
    continue
  fi
  warn "Possible secret pattern: $hit"
done < <(python - "${files[@]}" <<'PYSECRETS'
import re, sys
patterns = [
    (r'BEGIN (RSA |OPENSSH )?PRIVATE KEY', 'private key block'),
    (r'sk_(live|test)_[A-Za-z0-9]{12,}', 'Stripe secret key pattern'),
    (r'whsec_[A-Za-z0-9]{12,}', 'Stripe webhook secret pattern'),
    (r'sbp_[A-Za-z0-9]{12,}', 'Supabase secret pattern'),
    (r'SUPABASE_SERVICE_ROLE_KEY\s*=\s*[^\s#]+', 'Supabase service role assignment'),
    (r'OPENAI_API_KEY\s*=\s*[^\s#]+', 'OpenAI API key assignment'),
    (r'ANTHROPIC_API_KEY\s*=\s*[^\s#]+', 'Anthropic API key assignment'),
    (r'Bearer\s+[A-Za-z0-9_\-\.]{20,}', 'Bearer token'),
    (r'ghp_[A-Za-z0-9]{20,}', 'GitHub personal access token'),
    (r'gho_[A-Za-z0-9]{20,}', 'GitHub OAuth token'),
    (r'xox[baprs]-[A-Za-z0-9\-]+', 'Slack token pattern'),
]
skip_values = {'', 'your_', 'placeholder', 'changeme', 'example', 'xxx', 'TODO'}
for filename in sys.argv[1:]:
    try:
        lines = open(filename, 'r', encoding='utf-8', errors='ignore').read().splitlines()
    except (FileNotFoundError, IsADirectoryError):
        continue
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        if not stripped or stripped.startswith('#'):
            continue
        for regex, label in patterns:
            if re.search(regex, line, re.I):
                lower = line.lower()
                if any(token in lower for token in skip_values):
                    continue
                print(f"{filename}:{i}:{label}: {stripped[:120]}")
PYSECRETS
)

note "Checking launch readiness project docs"
for doc in \
  docs/project/SECURITY_REVIEW.md \
  docs/project/PERFORMANCE_AND_CACHING_PLAN.md \
  docs/project/OBSERVABILITY_PLAN.md; do
  if [[ ! -f "$doc" ]]; then
    warn "Missing project doc: $doc"
  else
    note "Found: $doc"
  fi
done

if [[ -f docs/project/CONTACT_FORM_STRATEGY.md ]]; then
  note "Found: docs/project/CONTACT_FORM_STRATEGY.md"
else
  warn "Missing project doc: docs/project/CONTACT_FORM_STRATEGY.md"
fi

note "Checking final launch gap project docs"
for doc in \
  docs/project/FINAL_LAUNCH_REVIEW.md \
  docs/project/AUTHORIZATION_TEST_PLAN.md \
  docs/project/BACKUP_AND_ROLLBACK_PLAN.md \
  docs/project/EMAIL_DELIVERABILITY_PLAN.md \
  docs/project/PRIVACY_AND_DATA_RETENTION.md \
  docs/project/BROWSER_DEVICE_TEST_MATRIX.md; do
  if [[ ! -f "$doc" ]]; then
    warn "Missing project doc: $doc"
  else
    note "Found: $doc"
  fi
done

if [[ "$warnings" -gt 0 ]]; then
  echo "Security readiness check completed with $warnings warning(s)."
  exit 0
fi

echo "Security readiness check passed with no warnings."
