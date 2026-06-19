#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

failures=0
note() { echo "[check] $*"; }
fail() { echo "[fail] $*"; failures=$((failures + 1)); }

should_skip_file() {
  local file="$1"
  case "$file" in
    scripts/check-template-safety.sh|scripts/security-readiness-check.sh) return 0 ;;
  esac
  return 1
}

should_skip_educational_line() {
  local file="$1"
  local line="$2"
  if [[ "$line" == *"excluded from template"* || "$line" == *"Excluded from template"* ]]; then
    return 0
  fi
  case "$file" in
    docs/patterns/*) return 0 ;;
  esac
  return 1
}

note "Checking for forbidden files and folders"
for path in .env .env.local .env.development .env.production node_modules .next test-results playwright-report graph-output .graphify; do
  if [[ -e "$path" ]]; then
    fail "Forbidden path exists: $path"
  fi
done

note "Checking for ignored reference source"
if [[ -d "_reference" ]]; then
  if ! git check-ignore -q _reference; then
    fail "_reference/ exists but is not ignored"
  fi
fi

note "Collecting template files"
mapfile -t files < <(git ls-files --cached --others --exclude-standard)
if [[ "${#files[@]}" -eq 0 ]]; then
  mapfile -t files < <(python - <<'PYFILES'
from pathlib import Path
skip = {'.git', '_reference'}
for p in sorted(Path('.').rglob('*')):
    if p.is_file() and not any(part in skip for part in p.parts):
        print(p.as_posix())
PYFILES
)
fi

note "Scanning for unsafe terms"
denylist=(
  "SUPABASE_SERVICE_ROLE_KEY"
  "SUPABASE_URL"
  "STRIPE_SECRET_KEY"
  "STRIPE_WEBHOOK_SECRET"
  "VERCEL_TOKEN"
  "OPENAI_API_KEY"
  "ANTHROPIC_API_KEY"
  "API_KEY="
  "Bearer "
  "BEGIN PRIVATE KEY"
  "BEGIN RSA PRIVATE KEY"
  "BEGIN OPENSSH PRIVATE KEY"
  "Boost"
  "boost"
  "baseball"
  "tryout"
  "parent portal"
  "player"
  "roster"
  "dunning"
)

for term in "${denylist[@]}"; do
  while IFS= read -r hit; do
    [[ -z "$hit" ]] && continue
    file="${hit%%:*}"
    line="${hit#*:}"
    should_skip_file "$file" && continue
    should_skip_educational_line "$file" "$line" && continue
    fail "Unsafe term '$term' found in $hit"
  done < <(python - "$term" "${files[@]}" <<'PYSCAN'
import sys
term = sys.argv[1]
for filename in sys.argv[2:]:
    try:
        lines = open(filename, 'r', encoding='utf-8').read().splitlines()
    except (UnicodeDecodeError, FileNotFoundError, IsADirectoryError):
        continue
    for i, line in enumerate(lines, 1):
        if term in line:
            print(f"{filename}:{i}:{line.strip()}")
PYSCAN
)
done

note "Scanning for real-looking service URLs, keys, and project refs"
while IFS= read -r hit; do
  [[ -z "$hit" ]] && continue
  file="${hit%%:*}"
  should_skip_file "$file" && continue
  fail "Possible account-specific service reference: $hit"
done < <(python - "${files[@]}" <<'PYREFS'
import re, sys
patterns = [
    re.compile(r'https://[a-z0-9]{15,}\.supabase\.co', re.I),
    re.compile(r'postgres(?:ql)?://[^\s]+', re.I),
    re.compile(r'sk_(?:live|test)_[A-Za-z0-9]{12,}'),
    re.compile(r'whsec_[A-Za-z0-9]{12,}'),
    re.compile(r'proj_[A-Za-z0-9]{10,}'),
    re.compile(r'[a-z0-9]{20}\.vercel\.app', re.I),
    re.compile(r'ghp_[A-Za-z0-9]{20,}'),
    re.compile(r'gho_[A-Za-z0-9]{20,}'),
    re.compile(r'xox[baprs]-[A-Za-z0-9\-]+'),
    re.compile(r'AIza[0-9A-Za-z\-_]{35}'),
    re.compile(r'-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----'),
]
for filename in sys.argv[1:]:
    if filename.startswith('docs/patterns/'):
        continue
    try:
        lines = open(filename, 'r', encoding='utf-8').read().splitlines()
    except (UnicodeDecodeError, FileNotFoundError, IsADirectoryError):
        continue
    for i, line in enumerate(lines, 1):
        if 'excluded from template' in line or 'Excluded from template' in line:
            continue
        if any(p.search(line) for p in patterns):
            print(f"{filename}:{i}:{line.strip()}")
PYREFS
)

if [[ "$failures" -gt 0 ]]; then
  echo "Safety check failed with $failures issue(s)."
  exit 1
fi

echo "Safety check passed."
