// The motion-design taxonomy (taxonomy/dimensions/*.json): load, validate, look up.
// Schema: taxonomy/SCHEMA.md.
import fs from "node:fs";
import path from "node:path";
import { SKILL_DIR } from "./common.mjs";

export const TAXONOMY_DIR = path.join(SKILL_DIR, "taxonomy");
export const GROUPS = ["format", "subject", "look", "motion", "story"];
const BANS = ["fade-up-slide", "fade-slide", "bounce", "overshoot", "scale-pop", "blur-in", "linear-entrance", "opacity-only-entrance"];
const FEELS = ["professional", "playful", "cinematic", "experimental", "technical", "luxurious", "social"];
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

let cache = null;
export function loadTaxonomy({ fresh = false } = {}) {
  if (cache && !fresh) return cache;
  const dir = path.join(TAXONOMY_DIR, "dimensions");
  const dims = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort().map((f) => ({ file: f, ...JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) }))
    : [];
  const order = fs.existsSync(path.join(TAXONOMY_DIR, "order.json")) ? JSON.parse(fs.readFileSync(path.join(TAXONOMY_DIR, "order.json"), "utf8")) : [];
  dims.sort((a, b) => (order.indexOf(a.id) + 1 || 999) - (order.indexOf(b.id) + 1 || 999));
  const combos = fs.existsSync(path.join(TAXONOMY_DIR, "combinations.json")) ? JSON.parse(fs.readFileSync(path.join(TAXONOMY_DIR, "combinations.json"), "utf8")) : { combinations: [] };
  cache = { dimensions: dims, byId: Object.fromEntries(dims.map((d) => [d.id, d])), combinations: combos.combinations || [] };
  return cache;
}

// option lookup: "ui-treatment/simplified-ui" or ("ui-treatment", "simplified-ui"); facets as "ui-treatment/border:hairline"
export function findOption(dimId, optId) {
  const T = loadTaxonomy();
  if (optId === undefined && String(dimId).includes("/")) [dimId, optId] = String(dimId).split("/");
  const d = T.byId[dimId];
  if (!d) return null;
  if (String(optId).includes(":")) {
    const [fid, oid] = String(optId).split(":");
    const f = (d.facets || []).find((x) => x.id === fid);
    const o = f && f.options.find((x) => x.id === oid);
    return o ? { dimension: d, facet: f, option: o } : null;
  }
  const o = (d.options || []).find((x) => x.id === optId);
  return o ? { dimension: d, option: o } : null;
}

export function validateTaxonomy() {
  const problems = [];
  const warnings = [];
  const T = loadTaxonomy({ fresh: true });
  const seenDims = new Set();
  let options = 0;
  for (const d of T.dimensions) {
    const at = d.file;
    for (const k of ["id", "name", "group", "controls", "question"]) if (!d[k]) problems.push(`${at}: missing ${k}`);
    if (d.id && d.file !== `${d.id}.json`) problems.push(`${at}: file name must be ${d.id}.json`);
    if (seenDims.has(d.id)) problems.push(`${at}: duplicate dimension id ${d.id}`);
    seenDims.add(d.id);
    if (d.group && !GROUPS.includes(d.group)) problems.push(`${at}: group must be one of ${GROUPS.join(", ")}`);
    if (!d.pick || !(d.pick.max >= 1)) problems.push(`${at}: pick.max >= 1 required`);
    if (!Array.isArray(d.options) || d.options.length < 4) problems.push(`${at}: needs at least 4 options`);
    const fam = new Set((d.families || []).map((f) => f.id));
    const ids = new Set();
    for (const o of d.options || []) {
      options++;
      const w = `${at} › ${o.id || "?"}`;
      for (const k of ["id", "term", "what", "prompt"]) if (!o[k] || typeof o[k] !== "string") problems.push(`${w}: missing ${k}`);
      if (o.id && !KEBAB.test(o.id)) problems.push(`${w}: id must be kebab-case`);
      if (ids.has(o.id)) problems.push(`${w}: duplicate option id`);
      ids.add(o.id);
      if (fam.size && !fam.has(o.family)) problems.push(`${w}: family "${o.family}" is not one of the dimension's families`);
      if (o.prompt && o.prompt.length < 60) warnings.push(`${w}: prompt is thin (${o.prompt.length} chars)`);
      for (const k of ["looks", "motion", "use", "conveys", "vs"]) if (!o[k]) warnings.push(`${w}: no ${k}`);
      if (o.search && !Array.isArray(o.search)) problems.push(`${w}: search must be an array`);
      if (o.refs && !Array.isArray(o.refs)) problems.push(`${w}: refs must be an array`);
      if (o.contract) {
        const c = o.contract;
        if (!c.enter || !c.exit || !c.move) problems.push(`${w}: contract needs enter/exit/move eases`);
        if (!Array.isArray(c.scale_ms) || c.scale_ms.length !== 5 || c.scale_ms.some((v, i) => i && v <= c.scale_ms[i - 1])) problems.push(`${w}: contract.scale_ms must be 5 ascending numbers`);
        if (!(c.stagger_ms >= 0) || !(c.hold_ms > 0)) problems.push(`${w}: contract needs stagger_ms and hold_ms`);
        for (const b of c.banned || []) if (!BANS.includes(b)) problems.push(`${w}: unknown ban ${b}`);
      }
      for (const f of o.feel || []) if (!FEELS.includes(f)) problems.push(`${w}: unknown feel ${f}`);
      if (o.palette && (!Array.isArray(o.palette) || o.palette.some((h) => !/^#[0-9a-fA-F]{6}$/.test(h)))) problems.push(`${w}: palette must be #rrggbb values`);
    }
    for (const f of d.facets || []) {
      if (!f.id || !f.name || !Array.isArray(f.options) || f.options.length < 2) problems.push(`${at} › facet ${f.id || "?"}: needs id, name and 2+ options`);
      for (const o of f.options || []) for (const k of ["id", "term", "what", "prompt"]) if (!o[k]) problems.push(`${at} › facet ${f.id} › ${o.id || "?"}: missing ${k}`);
    }
  }
  for (const c of T.combinations) {
    if (!c.id || !c.name || !c.stack) problems.push(`combinations: ${c.id || "?"} needs id, name, stack`);
    for (const [dim, vals] of Object.entries(c.stack || {})) {
      for (const v of [].concat(vals)) if (!findOption(dim, v)) problems.push(`combinations › ${c.id}: ${dim}/${v} does not exist`);
    }
  }
  return { ok: !problems.length, dimensions: T.dimensions.length, options, combinations: T.combinations.length, problems, warnings };
}
