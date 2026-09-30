#!/usr/bin/env node
// Style presets: hundreds of complete, named motion-graphics styles (taxonomy/presets/*.json, schema in
// taxonomy/presets/SCHEMA.md) that users choose from by eye, each drawn by console/presets.js.
//   node presets.mjs validate                       -> checks every preset (terms, recipe vocabulary, contrast, duplicates)
//   node presets.mjs list [--family bold] [--q "shadow"]   -> id, name, family (search matches name, aka, what, feels, use)
//   node presets.mjs show <id>                      -> one preset in full
//   node presets.mjs suggest --decisions d.json [--brand DESIGN.md] [--count 3] [--recent ids] [--seed s]
//        -> the best fits for this brief, one of them unusual, never a recent pick; each with why it fits
//   node presets.mjs gallery --out <dir> [--headline "…"] [--sub "…"] [--brand DESIGN.md] [--ids a,b] [--recommended a,b,c]
//        -> <dir>/presets.json: the console payload (every preset, or --ids) plus the recommended ones
//   node presets.mjs pick --id <id> --decisions d.json [--brand DESIGN.md] [--out <dir>]
//        -> merges the preset's terms into decisions.json and writes its frame.md (the look) for the build
//   node presets.mjs stills --out <dir> [--ids a,b] [--headline "…"] -> PNG contact sheets for review
//   node presets.mjs site --out <docs/assets>        -> presets.json + presets.js for the website's live library
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, die, readJSON, writeFile, chromeScreenshot } from "./lib/common.mjs";
import { loadTaxonomy } from "./lib/taxonomy.mjs";
import { track } from "./lib/report.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(HERE, "..", "taxonomy", "presets");
const args = parseArgs();
const cmd = args._[0];

export const VOCAB = {
  layout: ["pills", "cards", "bento", "poster", "hud", "terminal", "window", "editorial", "device", "diagram", "collage", "data", "map", "split", "bignumber", "typegrid", "timeline", "photo", "stack", "list", "isometric", "chat", "ticker", "floorplan", "record"],
  shadow: ["none", "soft", "hard", "long", "inset", "neu", "glow", "layered", "float"],
  surface: ["flat", "gradient", "glass", "metal", "clay", "paper", "neon"],
  texture: ["none", "grain", "halftone", "paper", "scanlines", "noise", "dots", "grid", "riso", "crt", "hatching", "checker", "woodgrain", "veining", "weave", "terrazzo", "perforation"],
  icons: ["doodle", "line", "filled", "duotone", "pixel", "glyph", "emoji3d", "none"],
  motif: ["none", "stars", "squiggles", "grid", "crosshair", "stickers", "blobs", "rays", "confetti", "rules", "circuit", "orbits", "particles", "refraction", "contours", "tiles", "stripes", "repeat", "pictograms"],
  motion: ["pop", "snap", "slide", "mask", "type", "glitch", "spring", "drift", "step", "fade", "bounce"],
  strokeStyle: ["solid", "dashed", "double", "sketch"],
  // optional recipe fields (absent = the renderer's defaults)
  effects: ["rgb-split", "extrude", "halation", "grain-heavy", "vignette", "blur-depth", "glint", "scanline-heavy", "misregister", "noise-bars", "light-leak"],
  iconSet: ["default", "geometric", "nature", "tech", "hand", "ornament", "pictogram"],
  density: ["airy", "balanced", "dense"],
  chrome: ["auto", "mac", "classic", "tabs", "none"],
  labels: ["kicker", "section", "date", "window", "title", "badge", "stat", "caption", "quote", "cta", "hint", "hud", "readouts", "steps", "dates", "items", "tags", "places", "before", "after", "messages", "ticker", "bug", "lines", "people", "corner", "emblem", "metrics", "times", "scale"],
  chart: ["auto", "none", "bars", "line", "wave", "jagged", "spectrum", "steps", "scatter", "donut"],
  scene: ["landscape", "city", "botanical", "interior", "poolside", "portrait", "still-life", "abstract", "night-sky"],
  photoTone: ["smooth", "flat"],
  photo: ["block", "plate", "none"],
  marker: ["auto", "circle", "diamond", "square", "rect", "ring"],
  diagram: ["flow", "tree", "network"],
  edges: ["arrow", "line"],
  families: ["bold", "soft", "editorial", "retro", "future", "handmade", "dimensional", "product", "data", "cinematic", "playful", "luxury", "heritage", "broadcast", "science", "print", "interface", "nature", "sound", "space"],
};

export function loadPresets() {
  const out = [];
  if (!fs.existsSync(DIR)) return out;
  for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith(".json")).sort()) {
    const j = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
    for (const p of j.presets || []) out.push({ ...p, family: j.family.id, familyName: j.family.name, file: f });
  }
  return out;
}

const hex = (c) => { let s = String(c).replace("#", ""); if (s.length === 3) s = [...s].map((x) => x + x).join(""); const n = parseInt(s, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const lum = (c) => { const r = hex(c).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]; };
export const contrast = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
const isHex = (c) => /^#[0-9a-f]{6}$/i.test(String(c));

export function validate(presets) {
  const T = loadTaxonomy();
  const problems = [];
  const ids = new Map();
  const sigs = new Map();
  for (const p of presets) {
    const where = `${p.file}:${p.id || "(no id)"}`;
    const bad = (m) => problems.push(`${where}: ${m}`);
    if (p.family && !VOCAB.families.includes(p.family)) bad(`family "${p.family}" is not one of ${VOCAB.families.join("|")}`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.id || "")) bad("id must be kebab-case");
    if (ids.has(p.id)) bad(`duplicate id (also in ${ids.get(p.id)})`);
    ids.set(p.id, p.file);
    for (const k of ["name", "what"]) if (!p[k] || typeof p[k] !== "string") bad(`missing ${k}`);
    if ((p.what || "").split(/\s+/).length > 30) bad("what is longer than 30 words");
    for (const k of ["feels", "use", "search"]) if (!Array.isArray(p[k]) || !p[k].length) bad(`missing ${k} (a non-empty list)`);
    if (!p.stack || typeof p.stack !== "object") bad("missing stack");
    for (const [dim, v] of Object.entries(p.stack || {})) {
      const d = T.byId[dim];
      if (!d) { bad(`stack: unknown dimension ${dim}`); continue; }
      const list = [].concat(v);
      const max = (d.pick && d.pick.max) || 1;
      if (list.length > max) bad(`stack.${dim}: ${list.length} terms, the dimension allows ${max}`);
      for (const id of list) if (!(d.options || []).some((o) => o.id === id)) bad(`stack.${dim}: unknown term ${id}`);
    }
    for (const need of ["visual-style", "motion-language"]) if (!(p.stack || {})[need]) bad(`stack needs ${need}`);
    const r = p.recipe || {};
    const P = r.palette || {};
    for (const k of ["canvas", "ink", "accent", "accent2", "surface", "muted"]) if (!isHex(P[k])) bad(`recipe.palette.${k} must be a #rrggbb color`);
    if (isHex(P.ink) && isHex(P.canvas) && contrast(P.ink, P.canvas) < 4.5) bad(`ink on canvas is ${contrast(P.ink, P.canvas).toFixed(2)}:1 (needs 4.5)`);
    if (isHex(P.ink) && isHex(P.surface) && contrast(P.ink, P.surface) < 4.5 && contrast(P.surface, "#ffffff") < 4.5 && contrast(P.surface, "#16181d") < 4.5) bad("nothing reads on the surface color");
    const F = r.fonts || {};
    if (!F.display || !F.body) bad("recipe.fonts needs display and body (Google Fonts families)");
    const weight = (w) => Number.isInteger(w) && w >= 100 && w <= 900 && w % 100 === 0;
    if (F.displayWeight != null && !weight(F.displayWeight)) bad("recipe.fonts.displayWeight must be 100–900 in steps of 100 (200/300 for light styles)");
    if (F.bodyWeight != null && !weight(F.bodyWeight)) bad("recipe.fonts.bodyWeight must be 100–900 in steps of 100");
    if (F.mono != null && (typeof F.mono !== "string" || !F.mono)) bad("recipe.fonts.mono must be a Google Fonts family name");
    if (F.italic != null && typeof F.italic !== "boolean") bad("recipe.fonts.italic must be true or false");
    for (const [k, list] of [["layout", VOCAB.layout], ["shadow", VOCAB.shadow], ["surface", VOCAB.surface], ["texture", VOCAB.texture], ["icons", VOCAB.icons], ["motif", VOCAB.motif], ["motion", VOCAB.motion]]) if (!list.includes(r[k])) bad(`recipe.${k} "${r[k]}" is not one of ${list.join("|")}`);
    if (typeof r.radius !== "number" || r.radius < 0 || (r.radius > 48 && r.radius !== 999)) bad("recipe.radius must be 0–48 or 999");
    const st = r.stroke || {};
    if (typeof st.width !== "number" || st.width < 0 || st.width > 8) bad("recipe.stroke.width must be 0–8");
    if (st.style && !VOCAB.strokeStyle.includes(st.style)) bad(`recipe.stroke.style "${st.style}"`);
    if (r.effects != null) {
      if (!Array.isArray(r.effects)) bad("recipe.effects must be a list");
      else {
        for (const e of r.effects) if (!VOCAB.effects.includes(e)) bad(`recipe.effects: "${e}" is not one of ${VOCAB.effects.join("|")}`);
        if (new Set(r.effects).size !== r.effects.length) bad("recipe.effects repeats an effect");
        if (r.effects.length > 3) bad("recipe.effects: at most 3 (effects are a finish, not the style)");
      }
    }
    for (const k of ["iconSet", "density", "chrome", "chart", "scene", "photoTone", "photo", "marker", "diagram", "edges"]) if (r[k] != null && !VOCAB[k].includes(r[k])) bad(`recipe.${k} "${r[k]}" is not one of ${VOCAB[k].join("|")}`);
    if (r.edgeColor != null && !["ink", "accent", "accent2"].includes(r.edgeColor) && !isHex(r.edgeColor)) bad(`recipe.edgeColor must be ink|accent|accent2 or a #rrggbb color`);
    for (const [k, lo, hi] of [["photoColors", 2, 6], ["sky", 2, 3]]) if (r[k] != null && (!Array.isArray(r[k]) || r[k].length < lo || r[k].length > hi || !r[k].every(isHex))) bad(`recipe.${k} must be a list of ${lo}–${hi} #rrggbb colors`);
    if (r.labels != null) {
      if (typeof r.labels !== "object" || Array.isArray(r.labels)) bad("recipe.labels must be an object of short strings");
      else for (const [k, v] of Object.entries(r.labels)) {
        if (!VOCAB.labels.includes(k)) { bad(`recipe.labels.${k}: unknown label (one of ${VOCAB.labels.join("|")})`); continue; }
        const list = Array.isArray(v) ? v : [v];
        if (Array.isArray(v) && v.length > 8) bad(`recipe.labels.${k}: at most 8 entries`);
        for (const x of list) if (typeof x !== "string" || x.length > 48) bad(`recipe.labels.${k}: entries must be strings of at most 48 characters`);
      }
    }
    // two presets that would draw the same are one preset
    const sig = [r.layout, r.surface, r.shadow, r.texture, r.icons, r.motif, Math.round((st.width || 0) / 2), r.radius > 30 ? "round" : r.radius > 8 ? "soft" : "sharp", String(P.canvas).toLowerCase(), String(P.accent).toLowerCase()].join("|") +
      // the optional fields change the drawing too (absent on older presets, so their signatures are unchanged)
      [[...(r.effects || [])].sort().join("+"), r.icons !== "none" && r.iconSet && r.iconSet !== "default" ? r.iconSet : "", r.density && r.density !== "balanced" ? r.density : "", r.chrome && r.chrome !== "auto" ? r.chrome : "",
        r.chart && r.chart !== "auto" ? "chart:" + r.chart : "", r.scene && r.scene !== "landscape" ? "scene:" + r.scene : "", r.photoColors ? "ramp:" + r.photoColors.join("") : "", r.photoTone === "flat" ? "flat" : "", r.photo && r.photo !== "block" ? "photo:" + r.photo : "", r.diagram && r.diagram !== "flow" ? r.diagram : "", r.marker && r.marker !== "auto" ? "marker:" + r.marker : ""].filter(Boolean).map((x) => "|" + x).join("");
    if (sigs.has(sig)) bad(`draws the same as ${sigs.get(sig)} (layout, surface, shadow, texture, icons, motif, stroke, radius, colors); make it distinct`);
    sigs.set(sig, p.id);
  }
  return problems;
}

function brandTokens(file) {
  if (!file) return null;
  // lazy: only when asked, so validate/list stay fast
  return import("./lib/design-md.mjs").then(({ readDesignMd }) => {
    const B = readDesignMd(path.resolve(String(file)), { mode: args.mode });
    const f = B.fonts || {};
    return { canvas: B.roles.canvas, ink: B.roles.ink, accent: B.roles.accent, surface: B.roles.surface, display: f.display && f.display.family, body: f.body && f.body.family, source: path.relative(process.cwd(), B.source) };
  });
}

// the best presets for this brief: fit with what's decided (format, tone, visual style, motion), brand
// compatibility, spread across families, one unusual pick from far down the list, never a recent pick
export function suggest(presets, D, { count = 3, recent = [], seed = "", brand = null } = {}) {
  const picks = D.picks || {};
  const chosen = new Set(Object.entries(picks).flatMap(([k, v]) => [].concat(v).map((x) => `${k.split(":")[0]}/${x}`)));
  const T = loadTaxonomy();
  const combos = T.combinations || [];
  let h = 0;
  for (const ch of seed + "presets") h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const rnd = (i) => (((h ^ (i * 2654435761)) >>> 0) % 1000) / 1000;
  const GENERIC = ["saas-minimal", "corporate-flat", "clean-minimal", "gradient-heavy"];
  const scored = presets.map((p, i) => {
    const flat = Object.entries(p.stack).flatMap(([k, v]) => [].concat(v).map((x) => `${k}/${x}`));
    let fit = flat.filter((x) => chosen.has(x)).length * 2;
    // co-occurrence with known-good combinations for what's decided
    for (const c of combos) {
      const cf = Object.entries(c.stack).flatMap(([k, v]) => [].concat(v).map((x) => `${k}/${x}`));
      if (cf.some((x) => chosen.has(x))) fit += flat.filter((x) => cf.includes(x)).length * 0.25;
    }
    const clash = Object.entries(picks).filter(([k, v]) => !k.includes(":") && p.stack[k] && ![].concat(p.stack[k]).includes([].concat(v)[0]) && ["visual-style", "motion-language", "ui-treatment"].includes(k)).length;
    const generic = [].concat(p.stack["visual-style"] || []).some((x) => GENERIC.includes(x));
    // a brand with a dark canvas suits dark styles and the other way round (the brand's colors replace the preset's)
    let brandFit = 0;
    if (brand && brand.canvas) brandFit = (lum(brand.canvas) < 0.25) === (lum(p.recipe.palette.canvas) < 0.25) ? 0.8 : -0.8;
    const score = fit - clash * 2.5 + brandFit + rnd(i) * 1.6 - (generic ? 4 : 0) - (recent.includes(p.id) ? 6 : 0);
    return { p, score, fit, clash, generic };
  }).sort((a, b) => b.score - a.score);
  const out = [];
  const fams = new Set();
  const styles = new Set();
  const take = (x, rare) => {
    const vs = [].concat(x.p.stack["visual-style"])[0];
    // clearly different: another family, another visual style, another composition
    if (out.some((o) => o.p.id === x.p.id || o.p.recipe.layout === x.p.recipe.layout) || styles.has(vs) || fams.has(x.p.family)) return false;
    fams.add(x.p.family); styles.add(vs); out.push({ ...x, rare }); return true;
  };
  for (const x of scored) { if (out.length >= Math.max(1, count - 1)) break; if (!x.generic && !recent.includes(x.p.id)) take(x, false); }
  const tail = scored.slice(Math.floor(scored.length / 3)).filter((x) => !x.generic && !x.clash && !recent.includes(x.p.id));
  for (const x of tail.sort((a, b) => rnd(a.p.id.length * 7) - rnd(b.p.id.length * 7))) { if (out.length >= count) break; take(x, true); }
  for (const x of scored) { if (out.length >= count) break; take(x, false); }
  const passed = scored.find((x) => x.generic);
  return { suggestions: out.map((x) => ({ id: x.p.id, name: x.p.name, family: x.p.family, rare: x.rare, why: why(x.p, chosen) })), passed_over: passed ? passed.p.name : null, total: presets.length };
}
function why(p, chosen) {
  const T = loadTaxonomy();
  const hits = Object.entries(p.stack).flatMap(([k, v]) => [].concat(v).filter((x) => chosen.has(`${k}/${x}`)).map((x) => ((T.byId[k].options || []).find((o) => o.id === x) || {}).term || x));
  // only a real reason; Claude writes the rest (a filler copy of `what` would repeat the card)
  return hits.length ? `Fits what you've decided: ${hits.slice(0, 3).join(", ")}.` : null;
}

// the preset as a look (frame.md) the build uses, through the same writer as design directions
async function presetFrame(p, brand) {
  const { toFrameMd } = await import("./lib/design-md.mjs");
  const { lookAsBrand } = await import("./lib/looks.mjs");
  const T = loadTaxonomy();
  const r = p.recipe, P = { ...r.palette };
  if (brand) for (const k of ["canvas", "ink", "accent", "surface"]) if (brand[k]) P[k] = brand[k];
  const vs = (T.byId["visual-style"].options || []).find((o) => o.id === [].concat(p.stack["visual-style"])[0]) || { term: p.name, what: p.what };
  const shadow = { none: "none", soft: "0 18px 44px rgba(0,0,0,.16)", hard: "10px 10px 0 var(--ink)", long: "18px 18px 0 var(--ink)", inset: "inset 0 5px 12px rgba(0,0,0,.22)", neu: "12px 12px 26px rgba(0,0,0,.16), -12px -12px 26px rgba(255,255,255,.7)", glow: "0 0 24px var(--accent)", layered: "7px 7px 0 var(--accent), 14px 14px 0 var(--ink)", float: "0 40px 70px -16px rgba(0,0,0,.3)" }[r.shadow];
  const L = {
    name: p.name,
    visual_style: { id: vs.id, term: vs.term, what: vs.what },
    palette: { canvas: P.canvas, ink: P.ink, accent: P.accent, surface: P.surface, muted: P.muted, support: [P.accent2] },
    type: { display: { family: (brand && brand.display) || r.fonts.display, weight: r.fonts.displayWeight || 800 }, body: { family: (brand && brand.body) || r.fonts.body, weight: 400 }, mono: { family: "JetBrains Mono", weight: 400 } },
    radius: r.radius === 999 ? 999 : r.radius,
    shadow,
    prompt: `${p.name}: ${p.what} Surfaces ${r.surface}; shadow ${r.shadow}; outline ${r.stroke.width}px ${r.stroke.style || "solid"}; corners ${r.radius === 999 ? "full pills" : r.radius + "px"}; texture ${r.texture}; icons ${r.icons}; decoration ${r.motif}; motion: ${r.motion} entrances.${p.not ? " " + p.not : ""}`,
  };
  return toFrameMd(lookAsBrand(L, `style preset ${p.id}`));
}

if (cmd === "validate") {
  const all = loadPresets();
  const problems = validate(all);
  const fams = [...new Set(all.map((p) => p.family))];
  console.log(JSON.stringify({ ok: !problems.length, presets: all.length, families: fams.length, by_family: Object.fromEntries(fams.map((f) => [f, all.filter((p) => p.family === f).length])), problems: problems.slice(0, 200) }, null, 2));
  process.exit(problems.length ? 1 : 0);
} else if (cmd === "list") {
  let all = loadPresets();
  if (args.family) all = all.filter((p) => p.family === args.family);
  if (args.q) { const q = String(args.q).toLowerCase(); all = all.filter((p) => [p.name, p.what, ...(p.aka || []), ...(p.feels || []), ...(p.use || [])].join(" ").toLowerCase().includes(q)); }
  console.log(JSON.stringify(all.map((p) => ({ id: p.id, name: p.name, family: p.family, what: p.what })), null, 2));
} else if (cmd === "show") {
  const p = loadPresets().find((x) => x.id === args._[1]);
  if (!p) die(`no preset ${args._[1]}`);
  console.log(JSON.stringify(p, null, 2));
} else if (cmd === "suggest") {
  const D = args.decisions ? readJSON(path.resolve(String(args.decisions))) : { picks: {} };
  const brand = args.brand ? await brandTokens(args.brand) : null;
  console.log(JSON.stringify(suggest(loadPresets(), D, { count: Number(args.count || 3), recent: String(args.recent || "").split(",").filter(Boolean), seed: String(args.seed || D.subject || ""), brand }), null, 2));
} else if (cmd === "gallery") {
  if (!args.out) die("--out <dir> required");
  track(`Laying out the style gallery`, `Style gallery ready`);
  let all = loadPresets();
  if (args.ids) { const want = String(args.ids).split(","); all = all.filter((p) => want.includes(p.id)); }
  const brand = args.brand ? await brandTokens(args.brand) : null;
  const fams = JSON.parse(JSON.stringify([...new Map(all.map((p) => [p.family, { id: p.family, name: p.familyName }])).values()]));
  const payload = {
    presets: all.map(({ file, familyName, ...p }) => p),
    families: fams,
    recommended: String(args.recommended || "").split(",").filter(Boolean),
    headline: String(args.headline || "Your film starts here"), sub: args.sub != null ? String(args.sub) : "",
    brand,
    renderer: path.relative(process.cwd(), path.join(HERE, "..", "console", "presets.js")),
  };
  writeFile(path.join(path.resolve(String(args.out)), "presets.json"), JSON.stringify(payload) + "\n");
  console.log(JSON.stringify({ ok: true, file: path.relative(process.cwd(), path.join(String(args.out), "presets.json")), presets: all.length, families: fams.length }, null, 2));
} else if (cmd === "pick") {
  if (!args.id || !args.decisions) die("--id <preset id> --decisions <decisions.json> required");
  const p = loadPresets().find((x) => x.id === String(args.id));
  if (!p) die(`no preset ${args.id}`);
  const brand = args.brand ? await brandTokens(args.brand) : null;
  const dp = path.resolve(String(args.decisions));
  const D = fs.existsSync(dp) ? readJSON(dp) : { picks: {} };
  const userPicked = new Set(Object.keys(D.picks || {}).filter((k) => (D.decided_by || {})[k] === "user"));
  D.picks = { ...(D.picks || {}) };
  D.decided_by = D.decided_by || {};
  for (const [k, v] of Object.entries(p.stack)) if (!userPicked.has(k)) { D.picks[k] = [].concat(v); D.decided_by[k] = "user"; }
  const out = path.resolve(String(args.out || path.join(path.dirname(dp), "preset")));
  const frame = path.join(out, "frame.md");
  writeFile(frame, await presetFrame(p, brand));
  D.look = { frame: path.relative(process.cwd(), frame), name: p.name, preset: p.id, recipe: p.recipe };
  if (brand) D.brand = D.brand || brand.source;
  D.style_preset = { id: p.id, name: p.name };
  writeFile(dp, JSON.stringify(D, null, 2) + "\n");
  console.log(JSON.stringify({ ok: true, preset: p.name, frame: D.look.frame, picks: D.picks }, null, 2));
} else if (cmd === "site") {
  // the website's library: the same data and the same renderer as the console (selftest keeps them in sync)
  if (!args.out) die("--out <dir> required");
  const out = path.resolve(String(args.out));
  const all = loadPresets();
  const fams = [...new Map(all.map((p) => [p.family, { id: p.family, name: p.familyName }])).values()];
  writeFile(path.join(out, "presets.json"), JSON.stringify({ presets: all.map(({ file, familyName, ...p }) => p), families: fams }) + "\n");
  fs.copyFileSync(path.join(HERE, "..", "console", "presets.js"), path.join(out, "presets.js"));
  console.log(JSON.stringify({ ok: true, presets: all.length, families: fams.length, out: path.relative(process.cwd(), out) }, null, 2));
} else if (cmd === "stills") {
  if (!args.out) die("--out <dir> required");
  let all = loadPresets();
  if (args.ids) { const want = String(args.ids).split(","); all = all.filter((p) => want.includes(p.id)); }
  if (args.family) all = all.filter((p) => p.family === args.family);
  const out = path.resolve(String(args.out));
  fs.mkdirSync(out, { recursive: true });
  const js = fs.readFileSync(path.join(HERE, "..", "console", "presets.js"), "utf8");
  const per = 12, files = [];
  for (let i = 0; i < all.length; i += per) {
    const chunk = all.slice(i, i + per), n = files.length + 1;
    const html = `<!doctype html><html><head><meta charset="utf-8"><script>${js}</script></head><body style="margin:0;background:#1b1b1f"><div id="o" style="display:grid;grid-template-columns:repeat(4,400px);gap:14px;padding:14px"></div><script>
var d=${JSON.stringify(chunk)};RasaPresets.loadFonts(d);document.head.insertAdjacentHTML("beforeend",'<style>'+RasaPresets.css+'</style>');
d.forEach(function(p){var e=document.createElement("div");e.style.cssText="width:400px";e.innerHTML='<div style="width:400px;height:225px;overflow:hidden"><div style="width:1600px;height:900px;transform:scale(.25);transform-origin:0 0">'+RasaPresets.render(p,{headline:${JSON.stringify(String(args.headline || "Tax season. Again."))}})+'</div></div><div style="font:600 13px system-ui;color:#ddd;padding:6px 2px">'+p.name+' <span style="color:#888">· '+p.family+'</span></div>';document.getElementById("o").appendChild(e)});
</script></body></html>`;
    const f = path.join(out, `sheet-${String(n).padStart(2, "0")}.html`);
    fs.writeFileSync(f, html);
    chromeScreenshot(`file://${f}`, f.replace(/\.html$/, ".png"), 1670, 14 + Math.ceil(chunk.length / 4) * 270, 9000);
    files.push(path.relative(process.cwd(), f.replace(/\.html$/, ".png")));
  }
  console.log(JSON.stringify({ ok: true, sheets: files }, null, 2));
} else {
  die("usage: presets.mjs validate | list | show <id> | suggest | gallery | pick | stills (see the header)");
}
