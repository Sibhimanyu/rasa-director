#!/usr/bin/env bash
# Rasa Director installer: puts the rasa-director skill where Claude Code (and other
# agents that read ~/.agents/skills) will find it.
#
#   curl -fsSL https://raw.githubusercontent.com/Sibhimanyu/rasa-director/master/install.sh | bash
#   bash install.sh --uninstall
#
# It keeps a checkout in ~/.rasa-director/src (git clone, or a tarball when git is
# missing) and links ~/.claude/skills/rasa-director to its skills/rasa-director folder,
# so `bash install.sh` again updates in place. Set RASA_DIRECTOR_COPY=1 to copy
# instead of linking, RASA_DIRECTOR_LOCAL=<checkout> to install from a local clone.
set -euo pipefail

REPO="${RASA_DIRECTOR_REPO:-Sibhimanyu/rasa-director}"
BRANCH="${RASA_DIRECTOR_BRANCH:-master}"
HOME_DIR="${RASA_DIRECTOR_HOME:-$HOME/.rasa-director}"
SRC="$HOME_DIR/src"
TARGETS=("$HOME/.claude/skills")
[ -d "$HOME/.agents/skills" ] && TARGETS+=("$HOME/.agents/skills")

say() { printf '\033[1m%s\033[0m %s\n' "rasa-director:" "$*"; }
warn() { printf '\033[33m%s\033[0m %s\n' "rasa-director:" "$*" >&2; }

if [ "${1:-}" = "--uninstall" ]; then
  for t in "${TARGETS[@]}"; do
    if [ -L "$t/rasa-director" ] || [ -d "$t/rasa-director" ]; then rm -rf "$t/rasa-director" && say "removed $t/rasa-director"; fi
  done
  [ -z "${RASA_DIRECTOR_LOCAL:-}" ] && rm -rf "$SRC" && say "removed $SRC (your picks history in $HOME_DIR/history.jsonl is kept)"
  exit 0
fi


mkdir -p "$HOME_DIR"
if [ -n "${RASA_DIRECTOR_LOCAL:-}" ]; then
  # development: install from a local checkout instead of GitHub
  SRC="$(cd "$RASA_DIRECTOR_LOCAL" && pwd -P)"
  say "using local checkout $SRC"
elif command -v git >/dev/null 2>&1; then
  if [ -d "$SRC/.git" ]; then
    say "updating $SRC"
    git -C "$SRC" fetch --depth 1 origin "$BRANCH" --quiet && git -C "$SRC" reset --hard "origin/$BRANCH" --quiet
  else
    rm -rf "$SRC"
    say "cloning $REPO into $SRC"
    git clone --depth 1 --branch "$BRANCH" --quiet "https://github.com/$REPO.git" "$SRC"
  fi
else
  say "git not found; downloading a tarball"
  rm -rf "$SRC" && mkdir -p "$SRC"
  curl -fsSL "https://codeload.github.com/$REPO/tar.gz/refs/heads/$BRANCH" | tar -xz -C "$SRC" --strip-components=1
fi

SKILL="$SRC/skills/rasa-director"
[ -f "$SKILL/SKILL.md" ] || { warn "skills/rasa-director/SKILL.md not found in the download"; exit 1; }

for t in "${TARGETS[@]}"; do
  mkdir -p "$t"
  rm -rf "$t/rasa-director"
  if [ "${RASA_DIRECTOR_COPY:-0}" = "1" ]; then cp -R "$SKILL" "$t/rasa-director"; else ln -s "$SKILL" "$t/rasa-director"; fi
  say "installed → $t/rasa-director"
done

# Node >= 20: found wherever it's installed, or a private copy fetched into ~/.rasa-director/node
bash "$SKILL/scripts/setup.sh" --node-only || warn "Node.js >= 20 is required (https://nodejs.org); Rasa Director will try again when it runs"

# HyperFrames builds what Rasa Director directs
if ! [ -f "$HOME/.claude/skills/hyperframes/SKILL.md" ] && ! [ -f "$HOME/.agents/skills/hyperframes/SKILL.md" ]; then
  warn "HyperFrames skills not found. Install them with: npx hyperframes skills update"
fi
say "Rasa Director $(cat "$SKILL/VERSION" 2>/dev/null || echo "") installed"
say "done. In Claude Code: /rasa-director make a launch sting for \"Ship it in an afternoon\""
say "check your setup any time: node $SKILL/scripts/selftest.mjs"
