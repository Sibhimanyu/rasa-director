#!/usr/bin/env bash
# RasanAI installer: puts the rasanai skill where Claude Code (and other
# agents that read ~/.agents/skills) will find it.
#
#   curl -fsSL https://raw.githubusercontent.com/Sibhimanyu/rasanai/master/install.sh | bash
#   bash install.sh --uninstall
#
# It keeps a checkout in ~/.rasanai/src (git clone, or a tarball when git is
# missing) and links ~/.claude/skills/rasanai to its skills/rasanai folder,
# so `bash install.sh` again updates in place. Set RASANAI_COPY=1 to copy
# instead of linking, RASANAI_LOCAL=<checkout> to install from a local clone.
set -euo pipefail

# RasanAI was called Rasa Director up to 1.0: its RASA_DIRECTOR_* settings still apply, and ~/.rasa-director
# (memory, the private Node, the installer's checkout) moves to ~/.rasanai, leaving a link behind for old paths
for v in $(compgen -e | grep '^RASA_DIRECTOR_' || true); do n="RASANAI_${v#RASA_DIRECTOR_}"; [ -n "${!n:-}" ] || export "$n=${!v}"; done
if [ -z "${RASANAI_HOME:-}" ] && [ ! -e "$HOME/.rasanai" ] && [ -d "$HOME/.rasa-director" ] && [ ! -L "$HOME/.rasa-director" ]; then
  mv "$HOME/.rasa-director" "$HOME/.rasanai" && ln -s "$HOME/.rasanai" "$HOME/.rasa-director"
fi

REPO="${RASANAI_REPO:-Sibhimanyu/rasanai}"
BRANCH="${RASANAI_BRANCH:-master}"
HOME_DIR="${RASANAI_HOME:-$HOME/.rasanai}"
SRC="$HOME_DIR/src"
case "$REPO" in *://*|/*) URL="$REPO" ;; *) URL="https://github.com/$REPO.git" ;; esac # a full URL or a path works too (tests, forks)
TARGETS=("$HOME/.claude/skills")
[ -d "$HOME/.agents/skills" ] && TARGETS+=("$HOME/.agents/skills")

say() { printf '\033[1m%s\033[0m %s\n' "rasanai:" "$*"; }
warn() { printf '\033[33m%s\033[0m %s\n' "rasanai:" "$*" >&2; }

if [ "${1:-}" = "--uninstall" ]; then
  for t in "${TARGETS[@]}"; do
    for n in rasanai rasa-director; do
      if [ -L "$t/$n" ] || [ -d "$t/$n" ]; then rm -rf "${t:?}/$n" && say "removed $t/$n"; fi
    done
  done
  [ -z "${RASANAI_LOCAL:-}" ] && rm -rf "$SRC" && say "removed $SRC (your picks history in $HOME_DIR/history.jsonl is kept)"
  exit 0
fi


mkdir -p "$HOME_DIR"
if [ -n "${RASANAI_LOCAL:-}" ]; then
  # development: install from a local checkout instead of GitHub
  SRC="$(cd "$RASANAI_LOCAL" && pwd -P)"
  say "using local checkout $SRC"
elif command -v git >/dev/null 2>&1; then
  if [ -d "$SRC/.git" ]; then
    say "updating $SRC"
    git -C "$SRC" remote set-url origin "$URL" 2>/dev/null || true # a checkout from before the rename
    git -C "$SRC" fetch --depth 1 origin "$BRANCH" --quiet && git -C "$SRC" reset --hard "origin/$BRANCH" --quiet
  else
    rm -rf "$SRC"
    say "cloning $REPO into $SRC"
    git clone --depth 1 --branch "$BRANCH" --quiet "$URL" "$SRC"
  fi
else
  say "git not found; downloading a tarball"
  rm -rf "$SRC" && mkdir -p "$SRC"
  curl -fsSL "https://codeload.github.com/$REPO/tar.gz/refs/heads/$BRANCH" | tar -xz -C "$SRC" --strip-components=1
fi

SKILL="$SRC/skills/rasanai"
[ -f "$SKILL/SKILL.md" ] || { warn "skills/rasanai/SKILL.md not found in the download"; exit 1; }

for t in "${TARGETS[@]}"; do
  mkdir -p "$t"
  rm -rf "$t/rasanai"
  if [ "${RASANAI_COPY:-0}" = "1" ]; then cp -R "$SKILL" "$t/rasanai"; else ln -s "$SKILL" "$t/rasanai"; fi
  say "installed → $t/rasanai"
  # an install from before the rename: its rasa-director link now opens the bridge, which hands over to RasanAI
  if [ -L "$t/rasa-director" ] || [ -d "$t/rasa-director" ]; then
    rm -rf "${t:?}/rasa-director"
    if [ "${RASANAI_COPY:-0}" = "1" ]; then cp -R "$SRC/skills/rasa-director" "$t/rasa-director"; else ln -s "$SRC/skills/rasa-director" "$t/rasa-director"; fi
  fi
done

# Node >= 20: found wherever it's installed, or a private copy fetched into ~/.rasanai/node
bash "$SKILL/scripts/setup.sh" --node-only || warn "Node.js >= 20 is required (https://nodejs.org); RasanAI will try again when it runs"

# HyperFrames builds what RasanAI directs
if ! [ -f "$HOME/.claude/skills/hyperframes/SKILL.md" ] && ! [ -f "$HOME/.agents/skills/hyperframes/SKILL.md" ]; then
  warn "HyperFrames skills not found. Install them with: npx hyperframes skills update"
fi
say "RasanAI $(cat "$SKILL/VERSION" 2>/dev/null || echo "") installed"
say "done. In Claude Code: /rasanai make a launch sting for \"Ship it in an afternoon\""
say "check your setup any time: node $SKILL/scripts/selftest.mjs"
