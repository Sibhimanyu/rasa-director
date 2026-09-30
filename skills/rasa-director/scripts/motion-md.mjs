#!/usr/bin/env node
// Writes motion.md (the binding motion contract) from a library personality,
// optionally adjusted with adjectives. Can also emit the adjusted personality as
// JSON so tasting.mjs can re-preview it before it is locked.
//
// usage:
//   node motion-md.mjs write --personality editorial-mask [--adjust slower,calmer] \
//        --out <dir>/motion.md [--mode confirmed|auto] [--reason "..."] [--emit-personality <file.json>]
//   node motion-md.mjs adjectives          -> list supported adjustments
//   node motion-md.mjs show --file motion.md
import fs from "node:fs";
import { parseArgs, die, getPersonality, writeFrontmatterDoc, readFrontmatterDoc, writeFile, parseEase } from "./lib/common.mjs";

const SOFTER = { expo: "power2", power4: "power2", power3: "power2", back: "power2", elastic: "sine", circ: "sine", bounce: "sine" };
const SHARPER = { power1: "power4", power2: "power4", sine: "power3", circ: "expo" };
const STIFF = { back: "power3", elastic: "power3", bounce: "power3" };

function remapEase(e, table) {
  const { family, dir } = parseEase(e);
  if (!table[family]) return e;
  return `${table[family]}.${dir === "inout" ? "inOut" : dir}`;
}

const round10 = (v) => Math.max(10, Math.round(v / 10) * 10);

const ADJUST = {
  slower: { doc: "durations x1.4, stagger x1.2, holds x1.3", fn: (p) => scaleTime(p, 1.4, 1.2, 1.3) },
  faster: { doc: "durations x0.7, stagger x0.8, holds x0.8", fn: (p) => scaleTime(p, 0.7, 0.8, 0.8) },
  calmer: {
    doc: "softer ease families (expo/power3-4/back -> power2; elastic/circ/bounce -> sine), durations x1.15, stagger x1.3, holds x1.15",
    fn: (p) => {
      for (const k of ["enter", "exit", "move"]) p.easing[k] = remapEase(p.easing[k], SOFTER);
      scaleTime(p, 1.15, 1.3, 1.15);
    },
  },
  punchier: {
    doc: "sharper ease families (power1-2 -> power4, sine -> power3, circ -> expo), durations x0.75, stagger x0.8, holds x0.9",
    fn: (p) => {
      for (const k of ["enter", "exit", "move"]) p.easing[k] = remapEase(p.easing[k], SHARPER);
      scaleTime(p, 0.75, 0.8, 0.9);
    },
  },
  bouncier: {
    doc: "enter becomes back.out(1.7), move back.inOut(1.4); allows overshoot",
    fn: (p) => {
      p.easing.enter = "back.out(1.7)";
      p.easing.move = "back.inOut(1.4)";
      p.banned = p.banned.filter((b) => b !== "overshoot");
    },
  },
  stiffer: {
    doc: "back/elastic/bounce -> power3; bans overshoot and bounce",
    fn: (p) => {
      for (const k of ["enter", "exit", "move"]) p.easing[k] = remapEase(p.easing[k], STIFF);
      for (const b of ["overshoot", "bounce"]) if (!p.banned.includes(b)) p.banned.push(b);
    },
  },
};

function scaleTime(p, t, s, h) {
  p.tempo.scale_ms = p.tempo.scale_ms.map((v) => round10(v * t));
  for (const k of ["enter_ms", "move_ms", "exit_ms"]) p.demo[k] = round10(p.demo[k] * t);
  p.demo.hold_ms = round10(p.demo.hold_ms * h);
  p.stagger.each_ms = round10(p.stagger.each_ms * s);
  p.holds.min_ms = round10(p.holds.min_ms * h);
}

// Adjustments apply left to right; a later one can override an earlier one
// (e.g. "bouncier,calmer" ends with softened eases, and still lifts the overshoot ban).
export function applyAdjustments(base, adjectives) {
  const p = JSON.parse(JSON.stringify(base));
  for (const a of adjectives) {
    if (!ADJUST[a]) die(`unknown adjustment "${a}". Supported: ${Object.keys(ADJUST).join(", ")}`);
    ADJUST[a].fn(p);
  }
  if (adjectives.length) {
    p.parent = base.id;
    p.adjustments = adjectives;
    p.id = `${base.id}+${adjectives.join("+")}`;
    p.name = `${base.name} (${adjectives.join(", ")})`;
  }
  return p;
}

function motionMd(p, { mode, reason }) {
  const fields = {
    personality: p.parent ? "custom" : p.id,
    parent: p.parent || null,
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
${p.builder_notes}

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
if (cmd === "write") {
  if (!args.personality) die("--personality required");
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
