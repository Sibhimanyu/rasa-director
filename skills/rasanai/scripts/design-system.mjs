#!/usr/bin/env node
// Design systems: every style preset (taxonomy/presets) as a complete DESIGN.md a project can adopt: color roles,
// typography, radii, shadows, components, the motion contract of its motion language, and its rules. The file
// reads back through brand.mjs, so a user can drop it in their repo and RasanAI uses it as their brand.
//   node design-system.mjs export --id <preset id> [--out DESIGN.md]
//   node design-system.mjs export-all --out <dir>        -> <dir>/<id>.md for every preset + index.json
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, die, writeFile } from "./lib/common.mjs";
import { loadTaxonomy } from "./lib/taxonomy.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(HERE, "..", "taxonomy", "presets");
const args = parseArgs();
const cmd = args._[0];

function loadPresets() {
  const out = [];
  for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith(".json") && !x.startsWith("_")).sort()) {
    const j = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
    for (const p of j.presets || []) out.push({ ...p, family: j.family.id, familyName: j.family.name });
  }
  return out;
}

const term = (T, dim, id) => ((T.byId[dim] || {}).options || []).find((o) => o.id === id);
const SHADOW = { none: null, soft: "0 18px 44px rgba(0,0,0,0.16)", hard: "10px 10px 0 {ink}", long: "18px 18px 0 {ink}", inset: "inset 0 5px 12px rgba(0,0,0,0.22)", neu: "12px 12px 26px rgba(0,0,0,0.16), -12px -12px 26px rgba(255,255,255,0.7)", glow: "0 0 24px {accent}", layered: "7px 7px 0 {accent}, 14px 14px 0 {ink}", float: "0 40px 70px -16px rgba(0,0,0,0.3)" };
const SURFACE = { flat: "flat fills, no gradients", gradient: "soft gradient washes from the surface toward the accent", glass: "translucent frosted panels (backdrop blur) over colour", metal: "brushed/chrome metallic gradients", clay: "inflated, soft-lit clay surfaces with inner highlights", paper: "off-white paper with visible fibre", neon: "dark panels with lit accent edges" };

export function designMd(p) {
  const T = loadTaxonomy();
  const r = p.recipe, P = r.palette, F = r.fonts;
  const ml = [].concat(p.stack["motion-language"] || [])[0];
  const mlo = term(T, "motion-language", ml) || {};
  const c = mlo.contract || null;
  const q = (s) => JSON.stringify(String(s));
  const sh = SHADOW[r.shadow] ? SHADOW[r.shadow].replace(/\{ink\}/g, P.ink).replace(/\{accent\}/g, P.accent) : null;
  const radius = r.radius === 999 ? "999px" : `${r.radius}px`;
  const stackLines = Object.entries(p.stack).map(([dim, ids]) => {
    const d = T.byId[dim];
    return `- **${d ? d.name : dim}:** ${[].concat(ids).map((id) => (term(T, dim, id) || {}).term || id).join(", ")}`;
  });
  const fm = [
    "---",
    `name: ${q(p.name)}`,
    `description: ${q(p.what)}`,
    "colors:",
    `  canvas: "${P.canvas}"        # page ground`,
    `  ink: "${P.ink}"           # headlines and body text`,
    `  accent: "${P.accent}"        # primary accent: the one thing that matters in each frame`,
    `  support: "${P.accent2}"       # supporting colour, used sparingly`,
    `  surface: "${P.surface}"       # raised cards and panels`,
    `  muted: "${P.muted}"         # muted captions`,
    "typography:",
    "  display:",
    `    fontFamily: ${F.display}`,
    `    fontWeight: ${F.displayWeight || 800}`,
    "  body:",
    `    fontFamily: ${F.body}`,
    "    fontWeight: 400",
    "  mono:",
    "    fontFamily: JetBrains Mono",
    "rounded:",
    `  md: ${radius}`,
    ...(sh ? ["shadows:", `  card: ${q(sh)}`] : []),
    "components:",
    `  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}"${r.stroke.width ? `, border: "${r.stroke.width}px ${r.stroke.style === "dashed" ? "dashed" : "solid"} {colors.${r.stroke.color === "accent" ? "accent" : "ink"}}"` : ""} }`,
    `  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }`,
    "---",
  ];
  const body = [
    "",
    `# ${p.name}`,
    "",
    `A motion-graphics design system from RasanAI's style library (${p.familyName}).${p.aka && p.aka.length ? ` Also known as ${p.aka.join(", ")}.` : ""}`,
    "",
    "## Overview",
    "",
    p.what,
    "",
    `It feels ${p.feels.join(", ")}. Use it for ${p.use.join(", ")}.`,
    "",
    "## Visual language",
    "",
    `- **Type:** ${F.display} (display, weight ${F.displayWeight || 800}${F.case && F.case !== "none" ? `, ${F.case}case` : ""}${F.tracking != null ? `, tracking ${F.tracking}em` : ""}) with ${F.body} for body text.`,
    `- **Surfaces:** ${SURFACE[r.surface] || r.surface}; corners ${r.radius === 999 ? "fully rounded (pills)" : `${r.radius}px`}; outlines ${r.stroke.width ? `${r.stroke.width}px ${r.stroke.style || "solid"} in ${r.stroke.color}` : "none"}.`,
    `- **Depth:** ${r.shadow === "none" ? "no shadows" : `${r.shadow} shadows${sh ? ` (\`${sh}\`)` : ""}`}.`,
    `- **Texture:** ${r.texture === "none" ? "none; clean fills" : r.texture}. **Icons:** ${r.icons}. **Decoration:** ${r.motif === "none" ? "none" : r.motif}.`,
    "",
    "## Motion",
    "",
    mlo.term ? `Motion language: **${mlo.term}**. ${mlo.what || ""}` : "",
    c ? `- Enter \`${c.enter}\`, exit \`${c.exit}\`, move \`${c.move}\`; durations ${c.scale_ms.join(" / ")} ms; stagger ${c.stagger_ms} ms; hold at least ${c.hold_ms} ms.` : "",
    c && c.banned && c.banned.length ? `- Never: ${c.banned.join(", ")}.` : "",
    `- Preview entrance: ${r.motion}.`,
    "",
    "## The terms that define it",
    "",
    ...stackLines,
    "",
    "## Do's and Don'ts",
    "",
    `- Do keep the accent (${P.accent}) for the single most important element in each frame.`,
    `- Do use ${F.display} large and confident; one idea per frame.`,
    r.shadow === "none" ? "- Don't add drop shadows." : `- Do keep every shadow the same ${r.shadow} style.`,
    r.surface === "flat" ? "- Don't use gradients or glassy surfaces." : `- Don't mix surface treatments; everything is ${r.surface}.`,
    p.not ? `- Don't confuse it: ${p.not}` : "",
    "",
    "## References",
    "",
    ...p.search.map((s) => `- Search: "${s}"`),
    "",
  ].filter((l, i, a) => !(l === "" && a[i - 1] === ""));
  return fm.join("\n") + "\n" + body.join("\n");
}

if (cmd === "export") {
  const p = loadPresets().find((x) => x.id === String(args.id || ""));
  if (!p) die(`no style ${args.id}; see presets.mjs list`);
  const md = designMd(p);
  if (args.out) { writeFile(path.resolve(String(args.out)), md); console.log(JSON.stringify({ ok: true, out: String(args.out), style: p.name })); }
  else process.stdout.write(md);
} else if (cmd === "export-all") {
  if (!args.out) die("--out <dir> required");
  const out = path.resolve(String(args.out));
  const all = loadPresets();
  for (const p of all) writeFile(path.join(out, `${p.id}.md`), designMd(p));
  writeFile(path.join(out, "index.json"), JSON.stringify(all.map((p) => ({ id: p.id, name: p.name, family: p.family, file: `${p.id}.md` }))) + "\n");
  console.log(JSON.stringify({ ok: true, systems: all.length, out: path.relative(process.cwd(), out) }));
} else {
  die("usage: design-system.mjs export --id <id> [--out DESIGN.md] | export-all --out <dir>");
}
