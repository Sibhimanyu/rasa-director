#!/usr/bin/env node
// Claude Code hook (PreToolUse, installed by the plugin's hooks/hooks.json): while a Rasa run is active in the
// workspace, every action Claude takes shows up live in the Director's Console feed ("Writing scene-03.html",
// "Rendering the preview"), using the description Claude gives each command. Silent and instant otherwise;
// never blocks a tool (always exits 0, prints nothing).
import fs from "node:fs";
import path from "node:path";
import { report } from "./lib/report.mjs";

let input = "";
process.stdin.on("data", (c) => (input += c));
process.stdin.on("end", () => {
  try {
    const e = JSON.parse(input || "{}");
    const cwd = e.cwd || process.cwd();
    if (!fs.existsSync(path.join(cwd, ".rasa-director", "current"))) return;
    const t = e.tool_input || {};
    const base = (p) => (p ? path.basename(String(p)) : "");
    let msg = null;
    switch (e.tool_name) {
      case "Bash": {
        const c = String(t.command || "");
        // the console's own plumbing and polling are not news
        if (/console\.mjs|update-check|^\s*(sleep|ls|cat|pwd|echo)\b/.test(c)) return;
        msg = t.description ? String(t.description) : c.split("\n")[0].slice(0, 90);
        break;
      }
      case "Write": msg = `Writing ${base(t.file_path)}`; break;
      case "Edit": case "MultiEdit": msg = `Editing ${base(t.file_path)}`; break;
      case "Read": if (/\.(png|jpe?g|webp)$/i.test(String(t.file_path))) msg = `Looking at ${base(t.file_path)}`; break;
      case "WebFetch": msg = `Reading ${String(t.url || "").replace(/^https?:\/\//, "").slice(0, 60)}`; break;
      case "Task": case "Agent": msg = t.description ? `Delegating: ${t.description}` : null; break;
    }
    if (msg) report(msg, { cwd, level: "tool" });
  } catch {}
});
