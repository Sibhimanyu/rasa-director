#!/usr/bin/env node
// The motion-design taxonomy: validate it, list it, look terms up.
//   node taxonomy.mjs validate [--warnings]
//   node taxonomy.mjs list [--group look]                -> dimensions with option counts
//   node taxonomy.mjs show <dimension>                    -> the dimension's options (term + what)
//   node taxonomy.mjs term <dimension>/<option>           -> the full option entry
import { parseArgs, die } from "./lib/common.mjs";
import { loadTaxonomy, validateTaxonomy, findOption } from "./lib/taxonomy.mjs";

const args = parseArgs();
const cmd = args._[0];
if (cmd === "validate") {
  const r = validateTaxonomy();
  const out = { ok: r.ok, dimensions: r.dimensions, options: r.options, combinations: r.combinations, problems: r.problems, warnings: args.warnings ? r.warnings : r.warnings.length };
  console.log(JSON.stringify(out, null, 2));
  process.exit(r.ok ? 0 : 1);
} else if (cmd === "list") {
  const T = loadTaxonomy();
  console.log(JSON.stringify(T.dimensions.filter((d) => !args.group || d.group === args.group).map((d) => ({ id: d.id, name: d.name, group: d.group, options: d.options.length, facets: (d.facets || []).map((f) => f.id), question: d.question })), null, 2));
} else if (cmd === "show") {
  const d = loadTaxonomy().byId[args._[1]];
  if (!d) die(`no dimension ${args._[1]}`);
  console.log(JSON.stringify({ id: d.id, name: d.name, controls: d.controls, notes: d.notes, options: d.options.map((o) => ({ id: o.id, term: o.term, family: o.family, what: o.what })), facets: (d.facets || []).map((f) => ({ id: f.id, name: f.name, options: f.options.map((o) => `${o.id}: ${o.term}`) })) }, null, 2));
} else if (cmd === "term") {
  const r = findOption(args._[1]);
  if (!r) die(`no such term ${args._[1]}`);
  console.log(JSON.stringify({ dimension: r.dimension.name, facet: r.facet ? r.facet.name : undefined, ...r.option }, null, 2));
} else die("usage: taxonomy.mjs validate | list [--group g] | show <dimension> | term <dimension>/<option>");
