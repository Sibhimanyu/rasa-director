// Locating installed HyperFrames skills and their shipped assets.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { die } from "./common.mjs";

const ROOTS = [
  process.env.HYPERFRAMES_SKILLS_DIR,
  path.join(os.homedir(), ".claude", "skills"),
  path.join(os.homedir(), ".agents", "skills"),
  path.join(process.cwd(), ".claude", "skills"),
  path.join(process.cwd(), ".agents", "skills"),
].filter(Boolean);

export function findSkill(name) {
  for (const r of ROOTS) {
    const p = path.join(r, name);
    if (fs.existsSync(path.join(p, "SKILL.md"))) return p;
  }
  return null;
}

export function presetsDir() {
  const creative = findSkill("hyperframes-creative");
  if (!creative) die("hyperframes-creative skill not found; install HyperFrames skills (`npx hyperframes skills update`)");
  return path.join(creative, "frame-presets");
}

// Preset text used for feel matching: the FRAME.md description minus its shared
// boilerplate, plus the "Look" and "Pick when" columns of hyperframes-creative's
// design-spec.md table (the richest mood language HyperFrames ships).
export function listPresets() {
  const dir = presetsDir();
  const table = {};
  const spec = path.join(path.dirname(dir), "references", "design-spec.md");
  if (fs.existsSync(spec)) {
    for (const line of fs.readFileSync(spec, "utf8").split("\n")) {
      const m = line.match(/^\|\s*`?\[([\w-]+)\]\([^)]*\)`?\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$/);
      if (m) table[m[1]] = { look: m[2], pickWhen: m[3] };
    }
  }
  return fs
    .readdirSync(dir)
    .filter((d) => fs.existsSync(path.join(dir, d, "FRAME.md")))
    .map((id) => {
      const text = fs.readFileSync(path.join(dir, id, "FRAME.md"), "utf8");
      const desc = (text.match(/description:\s*>?\s*\n?([\s\S]*?)\n\w/) || [, ""])[1]
        .replace(/\s+/g, " ")
        .replace(/Video-first companion to [^.]*\.\s*/i, "")
        .replace(/The unit is the frame[^.]*\.\s*/i, "")
        .trim();
      const t = table[id] || {};
      return {
        id,
        frame: path.join(dir, id, "FRAME.md"),
        showcase: path.join(dir, id, "frame-showcase.html"),
        description: [t.look, t.pickWhen ? `Pick when: ${t.pickWhen}` : "", desc].filter(Boolean).join(" · "),
      };
    });
}

export function resolvePreset(id) {
  const p = path.join(presetsDir(), id, "FRAME.md");
  if (!fs.existsSync(p)) die(`unknown frame preset "${id}". Known: ${listPresets().map((x) => x.id).join(", ")}`);
  return p;
}
