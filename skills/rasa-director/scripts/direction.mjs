#!/usr/bin/env node
// The direction: the user's creative decisions as taxonomy terms, compiled into the
// art-direction brief (DIRECTION.md) Claude designs and animates from.
//   node direction.mjs compile --decisions <decisions.json> --out <dir>
//        -> <dir>/DIRECTION.md + <dir>/direction.json (resolved terms, style name, formula)
//   node direction.mjs suggest --dimension visual-style [--decisions <decisions.json>] [--count 3] [--recent a,b] [--exclude a,b]
//        -> candidates for a "you decide" dimension, coherent with the picks so far, away from the generic default
//   node direction.mjs menu (--dims visual-style,color | --group look) [--decisions <decisions.json>]
//        -> the console payload for choosing those dimensions (terms, definitions, looks, uses)
//   node direction.mjs analyze   -> the reference-analysis template (every category, valid term ids)
//   node direction.mjs compare   -> the two-reference comparison template
// decisions.json: { "subject": "...", "picks": { "<dimension>": "<id>"|["<id>"], "<dimension>:<facet>": "<id>" },
//                   "decided_by": { "<dimension>": "user"|"agent"|"brand" }, "notes": { "<dimension>": "..." },
//                   "brand": "<DESIGN.md path>", "avoid": ["..."] }
import fs from "node:fs";
import path from "node:path";
import { parseArgs, die, readJSON, writeFile, readFrontmatterDoc } from "./lib/common.mjs";
import { loadTaxonomy } from "./lib/taxonomy.mjs";
import { resolvePicks, styleName, formula, promptParagraph, directionMd, suggest, STACK_ORDER } from "./lib/direction.mjs";
import { readDesignMd } from "./lib/design-md.mjs";

const args = parseArgs();
const cmd = args._[0];
const readDecisions = () => (args.decisions ? readJSON(path.resolve(String(args.decisions))) : { picks: {} });

if (cmd === "compile") {
  const D = readDecisions();
  if (!args.out) die("--out <dir> required");
  const { entries, problems } = resolvePicks(D.picks || {});
  if (problems.length) die(`decisions have ${problems.length} problem(s):\n- ${problems.join("\n- ")}`);
  if (!entries.length) die("no decisions to compile");
  const avoid = [...(D.avoid || [])];
  let brandName = null;
  if (D.brand && fs.existsSync(path.resolve(String(D.brand)))) {
    const B = readDesignMd(path.resolve(String(D.brand)), { mode: D.brand_mode });
    brandName = path.basename(D.brand);
    avoid.push(...B.donts.map((x) => `${x} (brand reference)`));
  }
  const motionPath = D.motion && fs.existsSync(path.resolve(String(D.motion))) ? path.resolve(String(D.motion)) : null;
  if (motionPath) {
    const M = readFrontmatterDoc(fs.readFileSync(motionPath, "utf8")).fields;
    if ((M.banned || []).length) avoid.push(`Banned motion patterns (machine-checked): ${M.banned.join(", ")}`);
  }
  const md = directionMd({ entries, subject: D.subject, decidedBy: D.decided_by || {}, notes: D.notes || {}, brand: brandName, motionMd: motionPath ? path.basename(motionPath) : null, avoid });
  const out = path.resolve(String(args.out));
  writeFile(path.join(out, "DIRECTION.md"), md);
  const resolved = {
    style_name: styleName(entries),
    formula: formula(entries),
    brief: promptParagraph(entries, { subject: D.subject }),
    picks: Object.fromEntries(entries.map((e) => [e.facet ? `${e.dimension.id}:${e.facet.id}` : e.dimension.id, e.options.map((o) => ({ id: o.id, term: o.term }))])),
    decided_by: D.decided_by || {},
    subject: D.subject || null,
  };
  writeFile(path.join(out, "direction.json"), JSON.stringify(resolved, null, 2) + "\n");
  console.log(JSON.stringify({ ok: true, direction: path.relative(process.cwd(), path.join(out, "DIRECTION.md")), ...resolved, open_dimensions: STACK_ORDER.filter((d) => !resolved.picks[d]) }, null, 2));
} else if (cmd === "suggest") {
  if (!args.dimension) die("--dimension required");
  const D = readDecisions();
  const r = suggest(String(args.dimension), D.picks || {}, { count: Number(args.count || 3), recent: String(args.recent || "").split(",").filter(Boolean), exclude: String(args.exclude || "").split(",").filter(Boolean), seed: String(args.seed || D.subject || "") });
  if (!r) die(`no dimension ${args.dimension}`);
  console.log(JSON.stringify(r, null, 2));
} else if (cmd === "menu") {
  const T = loadTaxonomy();
  const D = readDecisions();
  const want = args.dims ? String(args.dims).split(",") : T.dimensions.filter((d) => !args.group || d.group === args.group).map((d) => d.id);
  const dims = want.map((id) => T.byId[id]).filter(Boolean).map((d) => ({
    id: d.id, name: d.name, group: d.group, question: d.question, controls: d.controls, pick: d.pick,
    families: d.families || [],
    options: d.options.map((o) => ({ id: o.id, term: o.term, family: o.family, what: o.what, looks: o.looks, use: o.use, conveys: o.conveys })),
    facets: (d.facets || []).map((f) => ({ id: f.id, name: f.name, options: f.options.map((o) => ({ id: o.id, term: o.term, what: o.what })) })),
    picked: [].concat((D.picks || {})[d.id] || []),
  }));
  console.log(JSON.stringify({ dimensions: dims }, null, 2));
} else if (cmd === "analyze" || cmd === "compare") {
  const T = loadTaxonomy();
  const cats = STACK_ORDER.map((id) => T.byId[id]).filter(Boolean);
  if (cmd === "analyze") {
    console.log(`# Reference analysis (fill every category from what you can see; use the term ids)\n\n${cats.map((d) => `## ${d.name} (${d.id})\nSTYLE: <term id${d.pick.max > 1 ? "(s)" : ""}>\nEVIDENCE: <what visually indicates it>\nCONFIDENCE: High | Medium | Low\nCLOSE ALTERNATIVES: <term ids it could be confused with>\nValid: ${d.options.map((o) => o.id).join(", ")}\n`).join("\n")}\n## STYLE FORMULA\n<one line per decision, most defining first, joined with " + ">\n\nThen write the picks into decisions.json (dimension -> term id) and compile.`);
  } else {
    console.log(`# Comparison: reference A vs reference B\n\n| Dimension | A | B |\n|---|---|---|\n${cats.map((d) => `| ${d.name} | | |`).join("\n")}\n\n## The decisions that make them feel different\n1. <dimension: A's term vs B's term, and what it changes perceptually>\n2.\n3.\n4.\n`);
  }
} else die("usage: direction.mjs compile|suggest|menu|analyze|compare (see the header)");
