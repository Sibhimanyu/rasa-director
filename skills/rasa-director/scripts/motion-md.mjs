#!/usr/bin/env node
// Writes motion.md (the binding motion contract) from a library personality,
// optionally adjusted with adjectives. Can also emit the adjusted personality as
// JSON so tasting.mjs can re-preview it before it is locked.
//
// usage:
//   node motion-md.mjs write --personality editorial-mask [--adjust slower,calmer] \
//        --out <dir>/motion.md [--mode confirmed|auto] [--reason "..."] [--emit-personality <file.json>]
//   node motion-md.mjs write --language snappy --out <dir>/motion.md   (a motion-language term from the taxonomy)
//   node motion-md.mjs adjectives          -> list supported adjustments
//   node motion-md.mjs show --file motion.md
import fs from "node:fs";
import { parseArgs, die, getPersonality, writeFrontmatterDoc, readFrontmatterDoc, writeFile, parseEase } from "./lib/common.mjs";
import "./lib/motion-lang.mjs"; // registers motion-language terms ("lang-snappy") with getPersonality
import { ADJUST, applyAdjustments } from "./lib/adjust.mjs";
import { track } from "./lib/report.mjs";
export { applyAdjustments };

function motionMd(p, { mode, reason }) {
  const fields = {
    personality: p.parent ? "custom" : p.id,
    parent: p.parent || null,
    language: p.language || (p.parent && /^lang-/.test(p.parent) ? p.parent.slice(5) : null),
    adjustments: p.adjustments || [],
    tempo: { scale_ms: p.tempo.scale_ms },
    easing: p.easing,
    stagger: p.stagger,
    holds: p.holds,
    entrances: p.entrances,
    exits: p.exits,
    transitions: p.transitions,
    banned: p.banned,
    runtime: "gsap",
    decided_by: mode,
    waivers: [],
  };
  const body = `# Motion doctrine: ${p.name}

${p.oneLiner}

**This file is binding.** Every tween in the composition must follow it. \`obey.mjs\` checks the built composition against the frontmatter before the render gate.

## How it moves
${p.parent ? `
**Adjusted from ${p.parent} (${p.adjustments.join(", ")}).** The notes below describe the original personality; wherever they disagree with the frontmatter or the rules below (eases, timing, bans), the frontmatter wins.
` : ""}
${p.builder_notes || [p.language ? `**Motion language: ${p.name}.** ${p.oneLiner}` : "", p.prompt || ""].filter(Boolean).join("\n\n")}

## Rules (machine-checked)

- Tween durations snap to the scale ${p.tempo.scale_ms.join(" / ")} ms (±15%).
- Eases: enter \`${p.easing.enter}\`, exit \`${p.easing.exit}\`, move/emphasis \`${p.easing.move}\`. Always write the ease explicitly; the GSAP default (power1.out) counts as a violation.
- Stagger ≈ ${p.stagger.each_ms} ms (±15%). Hold every element at least ${p.holds.min_ms} ms between its entrance and its exit.
- Banned: ${p.banned.map((b) => `\`${b}\``).join(", ")} (signatures in rasa-director \`references/motion-md-contract.md\`).
- GSAP only. Registry blocks you reuse must be re-eased and re-timed to these rules.

## Guidance (advisory)

- Entrances: ${p.entrances.join(", ")}. Exits: ${p.exits.join(", ")}. Transitions: ${p.transitions.join(", ")}.
${reason ? `\n## Why this personality\n\n${reason}\n` : ""}`;
  return writeFrontmatterDoc(fields, body);
}

const args = parseArgs();
const cmd = args._[0];
track(cmd === "write" ? "Writing the motion rules (motion.md)" : null, cmd === "write" ? "Motion rules written" : null);
if (cmd === "write") {
  if (args.language && !args.personality) args.personality = `lang-${String(args.language).replace(/^lang-/, "")}`;
  if (!args.personality) die("--personality <swatch id> or --language <motion-language term> required");
  if (!args.out) die("--out required");
  const adj = String(args.adjust || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  const p = applyAdjustments(getPersonality(args.personality), adj);
  writeFile(args.out, motionMd(p, { mode: args.mode || "confirmed", reason: args.reason }));
  if (args["emit-personality"]) writeFile(args["emit-personality"], JSON.stringify(p, null, 2) + "\n");
  console.log(JSON.stringify({ wrote: args.out, personality: p.id, easing: p.easing, scale_ms: p.tempo.scale_ms, emitted: args["emit-personality"] || null }, null, 2));
} else if (cmd === "adjectives") {
  console.log(JSON.stringify(Object.fromEntries(Object.entries(ADJUST).map(([k, v]) => [k, v.doc])), null, 2));
} else if (cmd === "show") {
  console.log(JSON.stringify(readFrontmatterDoc(fs.readFileSync(args.file, "utf8")).fields, null, 2));
} else {
  die("usage: motion-md.mjs write|adjectives|show ...");
}
