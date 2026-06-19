#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 /path/to/target/project [--force] [--no-ai-workflow]"
}

TARGET_DIR="${1:-}"
FORCE="false"
COPY_AI_WORKFLOW="true"

shift || true
for arg in "$@"; do
  case "$arg" in
    --force) FORCE="true" ;;
    --no-ai-workflow) COPY_AI_WORKFLOW="false" ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $arg"; usage; exit 1 ;;
  esac
done

if [[ -z "$TARGET_DIR" ]]; then
  usage
  exit 1
fi

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Target directory does not exist: $TARGET_DIR"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
TARGET_RULES="$TARGET_DIR/.cursor/rules"
TARGET_AI="$TARGET_DIR/docs/ai-workflow"

confirm_overwrite() {
  local path="$1"
  if [[ "$FORCE" == "true" || ! -e "$path" ]]; then
    return 0
  fi

  read -r -p "Overwrite existing $path? [y/N] " answer
  [[ "$answer" == "y" || "$answer" == "Y" ]]
}

copy_file() {
  local src="$1"
  local dest="$2"
  mkdir -p "$(dirname "$dest")"

  if confirm_overwrite "$dest"; then
    cp "$src" "$dest"
    echo "Copied: $dest"
  else
    echo "Skipped: $dest"
  fi
}

echo "Target: $TARGET_DIR"
mkdir -p "$TARGET_RULES"

for src in "$REPO_ROOT"/.cursor/rules/*.mdc; do
  copy_file "$src" "$TARGET_RULES/$(basename "$src")"
done

if [[ "$COPY_AI_WORKFLOW" == "true" ]]; then
  mkdir -p "$TARGET_AI"
  for src in "$REPO_ROOT"/docs/ai-workflow/*.md; do
    copy_file "$src" "$TARGET_AI/$(basename "$src")"
  done
else
  echo "Skipped docs/ai-workflow copy because --no-ai-workflow was passed."
fi

echo "Done. Review copied files in the target project before committing."
