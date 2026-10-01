#!/usr/bin/env bash
# Rasa Director is now RasanAI. This bridge keeps installs from before the rename working: Rasa Director 1.0's
# setup re-runs scripts/setup.sh from the newest rasa-director copy after it updates, and that copy is this one.
# It installs RasanAI the way Rasa Director was installed, then hands over to RasanAI's own setup (which moves
# ~/.rasa-director to ~/.rasanai and keeps RASA_DIRECTOR_* settings working).
set -uo pipefail
BRIDGE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
REPO="Sibhimanyu/rasanai"
note() { echo "NOTE: $*" >&2; }

rasanai_dir() { # the newest installed RasanAI
  { [ -d "$BRIDGE/../rasanai" ] && echo "$BRIDGE/../rasanai"
    for d in "$HOME/.claude/skills/rasanai" "$HOME/.agents/skills/rasanai" ".claude/skills/rasanai"; do echo "$d"; done
    find "$HOME/.claude/plugins/cache" -maxdepth 6 -type d -path '*/skills/rasanai' 2>/dev/null; } |
  while IFS= read -r d; do [ -f "$d/SKILL.md" ] && [ -f "$d/scripts/setup.sh" ] && echo "$(cat "$d/VERSION" 2>/dev/null || echo 0) $(cd "$d" && pwd -P)"; done |
  sort -V | tail -1 | cut -d' ' -f2-
}

case "$BRIDGE" in
  */.claude/plugins/*)
    # plugin: install rasanai from the same marketplace (it keeps the name it was added under), drop this one
    MKT=$(printf '%s' "$BRIDGE" | sed -n 's#.*/plugins/cache/\([^/]*\)/.*#\1#p'); MKT=${MKT:-rasa-director}
    if command -v claude >/dev/null 2>&1; then
      if claude plugin install "rasanai@$MKT" >/dev/null 2>&1; then
        claude plugin uninstall "rasa-director@$MKT" >/dev/null 2>&1 || true
        echo "PLUGIN=rasanai@$MKT (restart Claude Code to see /rasanai)"
      else note "could not switch the plugin; in Claude Code run: /plugin install rasanai@$MKT, then /plugin uninstall rasa-director@$MKT"; fi
    else note "the claude CLI is not on PATH; in Claude Code run: /plugin install rasanai@$MKT, then /plugin uninstall rasa-director@$MKT"; fi ;;
  *)
    SIB=""; [ -f "$BRIDGE/../rasanai/SKILL.md" ] && SIB="$(cd "$BRIDGE/../rasanai" && pwd -P)"
    if [ -n "$SIB" ]; then
      # a git checkout or the installer's: every skills folder that opens rasa-director also gets rasanai
      for t in "$HOME/.claude/skills" "$HOME/.agents/skills" ".claude/skills"; do
        if { [ -L "$t/rasa-director" ] || [ -d "$t/rasa-director" ]; } && [ ! -e "$t/rasanai" ]; then
          if [ -L "$t/rasa-director" ]; then ln -s "$SIB" "$t/rasanai"; else cp -R "$SIB" "$t/rasanai"; fi && note "installed $t/rasanai"
        fi
      done
      ROOT=$(git -C "$SIB" rev-parse --show-toplevel 2>/dev/null) && case "$(git -C "$ROOT" remote get-url origin 2>/dev/null)" in
        *rasa-director*) git -C "$ROOT" remote set-url origin "https://github.com/$REPO.git" 2>/dev/null ;;
      esac
    elif [ -z "$(rasanai_dir)" ]; then
      # the skills CLI copied this folder alone: add RasanAI the same way, in the same scope
      H=$(cd "$HOME" && pwd -P) # real paths on both sides (macOS: /tmp is /private/tmp)
      case "$BRIDGE" in "$H/.claude/skills/"*|"$H/.agents/skills/"*|"$HOME/.claude/skills/"*|"$HOME/.agents/skills/"*) G="--global" ;; *) G="" ;; esac
      npx --yes skills add "$REPO" --skill rasanai --yes $G >/dev/null 2>&1 || note "could not add RasanAI; run: npx skills add $REPO --skill rasanai $G"
    fi ;;
esac

D=$(rasanai_dir)
if [ -z "$D" ]; then
  echo "PROBLEM: RasanAI (the new name of Rasa Director) could not be installed automatically. Install it: curl -fsSL https://raw.githubusercontent.com/$REPO/master/install.sh | bash" >&2
  echo "FAILED"; exit 1
fi
echo "RENAMED=Rasa Director is now RasanAI: same skill, new name. Use /rasanai from now on."
exec bash "$D/scripts/setup.sh" "$@"
