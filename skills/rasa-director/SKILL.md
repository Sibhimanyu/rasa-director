---
name: rasa-director
description: >
  Rasa Director is now RasanAI. Use only when the user types "/rasa-director" or asks for "Rasa Director" by
  name: this skill installs RasanAI the same way Rasa Director was installed and hands the request over to it.
  For any new video request use the rasanai skill (/rasanai) directly.
---

# Rasa Director is now RasanAI

Rasa Director was renamed **RasanAI** in version 1.1.0 (from the Tamil ரசனை, *rasanai*: taste). Everything carries over: your picks history, your settings and any video in progress.

Run the bridge's setup (it finds this folder the same way the old Rasa Director did):

```bash
SKILL_DIR=$(for d in ~/.claude/skills/rasa-director ~/.agents/skills/rasa-director .claude/skills/rasa-director $(find ~/.claude/plugins/cache -maxdepth 6 -type d -path '*/skills/rasa-director' 2>/dev/null); do [ -f "$d/SKILL.md" ] && echo "$(cat "$d/VERSION" 2>/dev/null || echo 0) $(cd "$d" && pwd -P)"; done | sort -V | tail -1 | cut -d' ' -f2-)
bash "$SKILL_DIR/scripts/setup.sh" --open
```

It installs RasanAI the way Rasa Director was installed (the plugin switches to `rasanai`, a skills folder gets a `rasanai` link or copy), moves `~/.rasa-director` to `~/.rasanai`, and then runs RasanAI's own setup. That setup prints `SKILL_DIR=` with **RasanAI's** folder: **read `SKILL.md` in that folder now and follow it for the user's request**. Tell the user once, in one line: "Rasa Director is now RasanAI: same skill, new name. Use /rasanai from now on" (with the plugin: "restart Claude Code to see /rasanai").

If it prints `FAILED`, show its `PROBLEM:` lines and the install command it gives.
