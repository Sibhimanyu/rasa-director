#!/usr/bin/env node
// Music candidates for the Music step, through HyperFrames' media-use (HeyGen
// catalog, 10k+ tracks; needs the `heygen` CLI signed in). One resolve per mood
// intent, all into <run>/music. Prints options in the Director's Console shape, so
// the result can be pushed as-is:
//   node music.mjs --run <run dir> --intents "warm unhurried acoustic|minimal editorial piano|soft ambient pulse"
//   -> {"options":[{"id","title","mood","duration","file","source"}], "recommended": "<id>"}
// When media-use is unavailable it prints {"options":[], "unavailable":"<why>"} and
// exits 0: the step then offers "no music" or "use my own track".
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { parseArgs, die } from "./lib/common.mjs";
import { track } from "./lib/report.mjs";

const args = parseArgs();
track("Finding music that fits", "Music candidates ready");
if (!args.run) die("--run required");
if (!args.intents) die('--intents "mood one|mood two|mood three" required (2-4 moods drawn from the concept and motion feel)');
const intents = String(args.intents).split("|").map((s) => s.trim()).filter(Boolean).slice(0, 4);
const dir = path.resolve(String(args.run), "music");
fs.mkdirSync(dir, { recursive: true });
const ws = process.cwd();

const options = [];
const failures = [];
for (const intent of intents) {
  try {
    const out = execFileSync("npx", ["--yes", "hyperframes", "media-use", "resolve", "--type", "bgm", "--intent", intent, "--project", dir, "--json"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 180000,
    });
    // {"ok":true,"id":"bgm_001","path":".media/audio/bgm/bgm_001.wav","description":"...","duration":33,...}
    let r = null;
    for (const line of out.split("\n").reverse()) {
      try {
        r = JSON.parse(line);
        break;
      } catch {}
    }
    if (!r || !r.ok || !r.path) {
      failures.push(`${intent}: ${(r && r.error) || "no track"}`);
      continue;
    }
    const file = path.relative(ws, path.resolve(dir, r.path));
    if (options.some((o) => o.file === file)) continue; // the same track matched two moods
    const desc = r.description || intent;
    options.push({ id: r.id, title: desc.charAt(0).toUpperCase() + desc.slice(1), mood: `asked for: ${intent}`, duration: r.duration ?? null, file, source: "HeyGen catalog via media-use" });
  } catch (e) {
    failures.push(`${intent}: ${String(e.stderr || e.message).split("\n").filter(Boolean).slice(-1)[0] || "failed"}`);
  }
}

const result = { options, recommended: options[0] ? options[0].id : null };
if (!options.length) result.unavailable = `No music could be fetched (${failures.join("; ") || "unknown error"}). Run \`npx hyperframes media-use resolve --doctor\`; the heygen CLI must be installed and signed in. You can still pick "No music" or give your own track.`;
else if (failures.length) result.partial = failures;
console.log(JSON.stringify(result, null, 2));
