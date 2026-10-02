#!/usr/bin/env node
// Treatment: the concept engine for songs with fixed lyrics (music videos, lyric videos).
// A song doesn't need three scripts; it needs one concept, one visual world (the style bible) and a PLATE
// per lyric section, each lyric line turned into a concrete visual idea, each plate in its own idiom.
//   node treatment.mjs skeleton --lyrics <lyrics.json> --audio <audio.json> --out <treatment.json> [--label Sure|Bold|Wild]
//        -> a treatment.json to fill in: one plate per lyric section (repeated lines such as the hook get their own
//           plates), starts snapped to downbeats, every field the check wants marked TODO
//   node treatment.mjs check --treatment <treatment.json> --lyrics <lyrics.json> [--audio <audio.json>]
//        [--tol 0.12] [--min-idioms n] [--min-motif 3]
//        -> the gate. Exit 0 = ship, 2 = fix what `problems` names, 1 = bad input. `warnings` never block.
//   node treatment.mjs scenes --treatment <treatment.json> --lyrics <lyrics.json> --out <scenes.json> [--aspect 16:9] [--music "<mood>"]
//        -> plates as RasanAI scenes.json (references/video.md), durations from the plate windows
// Inputs: lyrics.json {lines:[{text,start,end,words:[{w,start,end}]}]}, audio.json {duration,beats,downbeats,sections:[{name,start,end}]}
// Format and craft: references/lyric-video.md, agents/treatment-writer.md.
import fs from "node:fs";
import path from "node:path";
import { parseArgs, die, readJSON, writeFile } from "./lib/common.mjs";
import { track } from "./lib/report.mjs";

const args = parseArgs();
const cmd = args._[0];
track(
  { skeleton: "Laying out the plates for the song", check: "Checking the treatment against the lyrics and the beat grid", scenes: "Turning the plates into scenes" }[cmd],
  { skeleton: "Plate skeleton ready", check: "Treatment checked", scenes: "Scenes ready" }[cmd]
);

const out = (o, code = 0) => {
  console.log(JSON.stringify(o, null, 2));
  process.exit(code);
};
const num = (v, d) => (Number.isFinite(Number(v)) && v !== true && v !== "" && v != null ? Number(v) : d);
const str = (v) => (v == null || v === true ? "" : String(v));
const r2 = (x) => Math.round(x * 100) / 100;
const load = (p, what) => {
  if (!p || p === true) die(`--${what} <file> is required`);
  try {
    return readJSON(path.resolve(String(p)));
  } catch (e) {
    die(`cannot read ${what} ${p}: ${e.message}`);
  }
};
// "I'm upping my P(doom)," and "I'm upping my P(doom)" are the same line
const normLine = (t) => String(t).toLowerCase().replace(/[“”"‘’'`.,!?;:…—–-]/g, "").replace(/\s+/g, " ").trim();
const nearest = (arr, t) => {
  let best = null, d = Infinity;
  for (const x of arr) {
    const k = Math.abs(x - t);
    if (k < d) { d = k; best = x; }
  }
  return { t: best, d };
};
const kindOf = (name) => {
  const n = String(name || "").toLowerCase();
  if (/chorus|hook|drop|refrain/.test(n)) return "chorus";
  if (/verse|bridge|pre|break/.test(n)) return "verse";
  return "other";
};

// --- hex helpers ---------------------------------------------------------------
const HEX = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
const rgb = (h) => {
  let s = h.slice(1);
  if (s.length === 3) s = [...s].map((c) => c + c).join("");
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16) / 255);
};
// chromatic = a real hue, not an ink/bone/graphite neutral (warm bone and graphite sit well under 0.28)
function chromatic(h) {
  const [r, g, b] = rgb(h);
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
  if (mx === mn) return false;
  const s = (mx - mn) / (1 - Math.abs(2 * l - 1));
  return s > 0.35 && l > 0.1 && l < 0.95;
}

const hue = (h) => {
  const [r, g, b] = rgb(h);
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  if (!d) return 0;
  const k = mx === r ? ((g - b) / d + 6) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return k * 60;
};
const sameHue = (a, b) => {
  const d = Math.abs(hue(a) - hue(b));
  return Math.min(d, 360 - d) <= 25;
};

// --- skeleton --------------------------------------------------------------------
function skeleton() {
  const L = load(args.lyrics, "lyrics"), A = load(args.audio, "audio");
  const lines = L.lines || [];
  const secs = A.sections || [];
  const downs = A.downbeats || [];
  const counts = {};
  lines.forEach((l) => (counts[normLine(l.text)] = (counts[normLine(l.text)] || 0) + 1));
  const secOf = (l) => {
    const m = (l.start + l.end) / 2;
    return secs.find((s) => m >= s.start && m < s.end) || secs[secs.length - 1] || { name: "song" };
  };
  const groups = [];
  lines.forEach((l, i) => {
    const hook = counts[normLine(l.text)] > 1;
    const sec = secOf(l).name;
    const g = groups[groups.length - 1];
    if (g && !hook && !g.hook && g.section === sec) g.lines.push(i);
    else groups.push({ section: sec, hook, lines: [i] });
  });
  let prev = 0;
  const plates = groups.map((g, k) => {
    const first = lines[g.lines[0]];
    let start = 0;
    if (k > 0) {
      const cand = downs.filter((d) => d <= first.start + 0.35 && d > prev + 0.5);
      start = cand.length ? cand[cand.length - 1] : nearest(A.beats || downs, first.start).t;
    }
    prev = start;
    return { id: `plate-${k + 1}`, title: "TODO", section: g.section, start: r2(start), end: 0, idiom: "TODO", space: "2d", energy: 3, ground: "dark", motifs: [], visual: "TODO", lyric_integration: "TODO", lines: g.lines.map((i) => ({ i, text: lines[i].text, idea: "TODO" })) };
  });
  plates.forEach((p, k) => (p.end = r2(k + 1 < plates.length ? plates[k + 1].start : A.duration || lines[lines.length - 1].end)));
  const t = {
    label: str(args.label) || "Sure",
    song: { title: "TODO", artist: "TODO" },
    concept: { title: "TODO", text: "TODO: one paragraph, the whole film", pun_engine: "TODO: how a lyric line becomes an image (pun, transformation)" },
    style_bible: {
      palette: { ground: "#0A0A0B", paper: "#EEE9DF", neutrals: ["#5E5B57"], accent: { name: "TODO", hex: "#FF4D12", used_for: "TODO" }, rare: null },
      type: [{ role: "voice", family: "TODO", use: "the lyrics" }, { role: "machine", family: "TODO", use: "labels, readouts" }],
      signal: "motif-1",
      tone: "TODO",
      banned: ["TODO", "TODO", "TODO"],
    },
    motifs: [{ id: "motif-1", name: "TODO", description: "TODO" }],
    recurring_idioms: [],
    plates,
    show_off: "TODO: the dare, one moment a motion designer would rewind",
  };
  if (!args.out) out(t);
  writeFile(path.resolve(String(args.out)), JSON.stringify(t, null, 2) + "\n");
  out({ out: path.resolve(String(args.out)), plates: plates.length, hooks: groups.filter((g) => g.hook).length });
}

// --- check -----------------------------------------------------------------------
const GENERIC_IDIOM = /^(kinetic typography|kinetic type|lyrics?( on)?( a)? (gradient|background)|particles?|abstract|waveform|visualizer|gradient|text animation|motion graphics?|neon)$/i;
const SLOP = /(neon|cyberpunk|matrix|code rain|lens.?flare|nebula|glowing brain|hologram|particle (storm|field|burst)|bokeh|vaporwave)/i;

function check() {
  const T = load(args.treatment, "treatment");
  const L = load(args.lyrics, "lyrics");
  const A = args.audio ? load(args.audio, "audio") : null;
  const P = [], W = [];
  const tol = num(args.tol, 0.12);
  const lines = L.lines || [];
  if (!lines.length) die("lyrics.json has no lines");
  const plates = Array.isArray(T.plates) ? T.plates.slice() : [];
  if (!plates.length) return out({ ok: false, problems: ["treatment.json has no plates"], warnings: [] }, 2);
  const songEnd = A?.duration || lines[lines.length - 1].end;
  const todo = (v) => /^\s*TODO/i.test(str(v));
  const empty = (v, n = 1) => str(v).trim().length < n || todo(v);

  // 1. concept
  const c = T.concept || {};
  if (empty(c.text, 60)) P.push("concept.text: one paragraph (>= 60 chars) that says the whole film: the world, what is always moving through it, how a lyric line becomes an image");
  if (empty(c.title, 3)) P.push("concept.title is missing");
  if (empty(c.pun_engine, 20)) P.push("concept.pun_engine: say how a lyric line becomes an image (a pun, a transformation), not an illustration of the words");
  if (empty(T.show_off, 40)) P.push("show_off: end with the dare, one named moment a motion designer would rewind (>= 40 chars)");

  // 2. style bible
  const sb = T.style_bible || {};
  const pal = sb.palette || {};
  const acc = pal.accent;
  const hexes = [pal.ground, pal.paper, ...(pal.neutrals || [])].filter(Boolean);
  const tints = acc && Array.isArray(acc.tints) ? acc.tints.filter((h) => HEX.test(str(h))) : [];
  if (acc && HEX.test(str(acc.hex))) for (const h of tints) if (!sameHue(h, acc.hex)) P.push(`accent tint ${h} is a different hue from the accent ${acc.hex}; tints (hot core, deep shadow) stay within ~25 degrees of it`);
  const isAcc = (h) => !!acc && (str(h).toLowerCase() === str(acc.hex).toLowerCase() || tints.some((t) => t.toLowerCase() === str(h).toLowerCase()));
  if (!acc || !HEX.test(str(acc.hex))) P.push("style_bible.palette.accent: ONE owned accent colour with a hex");
  else if (empty(acc.used_for, 8)) P.push("style_bible.palette.accent.used_for: say what the accent is reserved for (the signal, the sung word); it is owned, not decoration");
  if (!HEX.test(str(pal.ground))) P.push("style_bible.palette.ground: the dark ground as a hex");
  if (Array.isArray(pal.accent)) P.push("style_bible.palette.accent must be a single colour, not a list");
  for (const h of hexes) {
    if (!HEX.test(str(h))) P.push(`palette colour ${JSON.stringify(h)} is not a hex`);
    else if (chromatic(h)) P.push(`palette colour ${h} is a second hue; the world has ONE accent (neutrals stay desaturated). Move it to palette.rare with the one plate that owns it, or cut it`);
  }
  const rare = pal.rare && pal.rare.hex ? pal.rare : null;
  if (pal.rare && !rare) P.push("style_bible.palette.rare must be null or {hex, plate, why}");
  if (rare) {
    if (!HEX.test(str(rare.hex))) P.push("palette.rare.hex is not a hex");
    if (!plates.some((p) => p.id === rare.plate)) P.push(`palette.rare.plate "${rare.plate}" is not a plate id (a rare accent is owned by exactly one plate)`);
  }
  for (const p of plates)
    for (const h of p.colors || []) {
      if (!HEX.test(str(h))) { P.push(`plate ${p.id}: colour ${h} is not a hex`); continue; }
      if (chromatic(h) && !isAcc(h) && !(rare && rare.plate === p.id && h.toLowerCase() === str(rare.hex).toLowerCase()))
        P.push(`plate ${p.id}: uses ${h}, a hue outside the palette (one accent${rare ? " and one rare plate" : ""}, nothing else)`);
    }
  const typ = Array.isArray(sb.type) ? sb.type.filter((t) => t && t.role && t.family && !todo(t.family)) : [];
  if (typ.length < 2) P.push("style_bible.type: at least two roles with families (the voice for the lyrics, the machine for labels), each {role, family, use}");
  if (typ.length > 5) W.push(`style_bible.type has ${typ.length} roles; more than 4 starts to look like a font specimen`);
  if (empty(sb.tone, 20)) P.push("style_bible.tone: the humour and the register, in a sentence (what is funny, how straight the face stays)");
  const banned = (sb.banned || []).filter((b) => !empty(b, 4));
  if (banned.length < 3) P.push("style_bible.banned: at least 3 named bans (the slop this world refuses)");

  // 3. motifs
  const motifs = Array.isArray(T.motifs) ? T.motifs.filter((m) => m && m.id) : [];
  const mids = new Set(motifs.map((m) => m.id));
  if (!motifs.length) P.push("motifs: define the recurring signal motif (and its few siblings) with ids");
  if (motifs.some((m) => empty(m.description, 15))) P.push("every motif needs a description of what it looks like and how it changes");
  if (sb.signal && !mids.has(sb.signal)) P.push(`style_bible.signal "${sb.signal}" is not a motif id`);
  if (!sb.signal) P.push("style_bible.signal: name the motif that runs through the whole film");
  const minMotif = num(args["min-motif"], 3);
  const uses = {};
  for (const p of plates) for (const m of p.motifs || []) {
    if (!mids.has(m)) P.push(`plate ${p.id}: motif "${m}" is not defined in motifs`);
    uses[m] = (uses[m] || 0) + 1;
  }
  const best = Object.entries(uses).sort((a, b) => b[1] - a[1])[0];
  if (!best || best[1] < minMotif) P.push(`no motif recurs in ${minMotif} or more plates (best: ${best ? best[0] + " in " + best[1] : "none"}); a world needs a thread`);
  if (sb.signal && (uses[sb.signal] || 0) < Math.min(minMotif, plates.length)) P.push(`the signal motif "${sb.signal}" appears in ${uses[sb.signal] || 0} plates; it runs through the film (>= ${minMotif}, ideally most)`);
  else if (sb.signal && plates.length >= 8 && (uses[sb.signal] || 0) < plates.length * 0.4) W.push(`the signal motif is in ${uses[sb.signal]} of ${plates.length} plates; the thread is thin (aim for 40%+)`);

  // 4. plates: fields, time, snapping
  const ids = new Set();
  plates.sort((a, b) => num(a.start, 0) - num(b.start, 0));
  const SPACES = ["2d", "3d", "hybrid"];
  for (const p of plates) {
    const id = p.id || "?";
    if (!p.id) P.push("a plate has no id");
    else if (ids.has(p.id)) P.push(`duplicate plate id ${p.id}`);
    ids.add(p.id);
    if (!Number.isFinite(Number(p.start)) || !Number.isFinite(Number(p.end)) || !(Number(p.end) > Number(p.start))) P.push(`plate ${id}: start/end must be numbers with end > start`);
    if (empty(p.title, 2)) P.push(`plate ${id}: no title`);
    if (empty(p.idiom, 4)) P.push(`plate ${id}: no idiom (the plate's own instrument/format, e.g. "oscilloscope", "bureaucratic form")`);
    else if (GENERIC_IDIOM.test(str(p.idiom).trim())) P.push(`plate ${id}: idiom "${p.idiom}" is generic; name a specific instrument, document or craft (engraving, oscilloscope, banknote guilloche, Gantt chart...)`);
    if (!SPACES.includes(p.space)) P.push(`plate ${id}: space must be 2d, 3d or hybrid`);
    if (!(Number(p.energy) >= 1 && Number(p.energy) <= 5)) P.push(`plate ${id}: energy must be 1..5`);
    if (empty(p.visual, 50)) P.push(`plate ${id}: visual (>= 50 chars): what fills the frame, what moves, what changes, the camera, in concrete nouns`);
    if (empty(p.lyric_integration, 15)) P.push(`plate ${id}: lyric_integration: how the words are part of the image in this plate (written by the spark, typed as tokens, stamped on a form), not subtitles`);
    else if (/subtitle|caption at (the )?bottom|lower.?third/i.test(str(p.lyric_integration))) P.push(`plate ${id}: lyric_integration reads as subtitles; the words must live inside the idiom`);
    if (SLOP.test(`${p.idiom} ${p.visual}`)) W.push(`plate ${id}: "${(`${p.idiom} ${p.visual}`.match(SLOP) || [])[0]}" is a slop tell; make it a specific object, not an effect`);
    if (Number.isFinite(Number(p.start)) && Number.isFinite(Number(p.end))) {
      const d = Number(p.end) - Number(p.start);
      if (d < 1.5) W.push(`plate ${id} is ${r2(d)}s; under 1.5 s reads as a flash, merge it`);
      if (d > 18 && !(Array.isArray(p.subcuts) && p.subcuts.length >= 3)) W.push(`plate ${id} is ${r2(d)}s with no subcuts; a long plate needs 3+ \`subcuts\` {t, what} on beats so it keeps moving`);
    }
  }
  if (plates.length > 24) P.push(`${plates.length} plates; a scenes.json holds at most 24: merge plates`);
  for (let k = 1; k < plates.length; k++) {
    if (plates[k].idiom && plates[k - 1].idiom && str(plates[k].idiom).toLowerCase() === str(plates[k - 1].idiom).toLowerCase()) W.push(`plates ${plates[k - 1].id} and ${plates[k].id} are back to back in the same idiom`);
  }
  // contiguous
  const f0 = plates[0];
  if (f0 && num(f0.start, 0) > 0.05) P.push(`the first plate starts at ${f0.start}s; the film starts at 0 (the intro is a plate too)`);
  for (let k = 1; k < plates.length; k++) {
    const gap = num(plates[k].start, 0) - num(plates[k - 1].end, 0);
    if (Math.abs(gap) > 0.05) P.push(`plates ${plates[k - 1].id} -> ${plates[k].id}: ${gap > 0 ? "gap" : "overlap"} of ${r2(Math.abs(gap))}s (plates are contiguous: each starts where the last ends)`);
  }
  const last = plates[plates.length - 1];
  if (last && Math.abs(num(last.end, 0) - songEnd) > 0.3) P.push(`the last plate ends at ${last.end}s; the song ends at ${r2(songEnd)}s`);
  // snapping
  if (A?.beats?.length) {
    const downs = A.downbeats || [], beats = A.beats;
    let onDown = 0, n = 0;
    for (const p of plates.slice(1)) {
      const t = num(p.start, NaN);
      if (!Number.isFinite(t)) continue;
      n++;
      const dd = nearest(downs, t), db = nearest(beats, t);
      if (dd.d <= tol) onDown++;
      else if (db.d <= tol) W.push(`plate ${p.id} starts at ${t}s on a beat, not a downbeat (nearest downbeat ${r2(dd.t)}s); cut on a downbeat unless the lyric forces it`);
      else P.push(`plate ${p.id} starts at ${t}s, ${r2(db.d)}s off the beat grid (nearest beat ${r2(db.t)}s, downbeat ${r2(dd.t)}s): snap the cut`);
    }
    if (n >= 4 && onDown / n < 0.6) P.push(`only ${onDown} of ${n} plate cuts are on downbeats; cuts land on downbeats (>= 60%)`);
  } else W.push("no --audio (or no beats): plate cuts were not checked against the beat grid");

  // 5. lyric coverage: every line exactly once, in a plate whose window holds it
  const seen = new Map();
  for (const p of plates) {
    if (!Array.isArray(p.lines)) { if (p.lines !== undefined) P.push(`plate ${p.id}: lines must be an array of {i, idea}`); continue; }
    for (const e of p.lines) {
      const i = Number(e && (e.i ?? e.line));
      if (!Number.isInteger(i) || i < 0 || i >= lines.length) { P.push(`plate ${p.id}: lyric line ${JSON.stringify(e && (e.i ?? e.line))} does not exist (lyrics.json has ${lines.length} lines, 0-based)`); continue; }
      if (seen.has(i)) P.push(`lyric line ${i} ("${lines[i].text}") is in both ${seen.get(i)} and ${p.id}; every line belongs to exactly one plate`);
      seen.set(i, p.id);
      const idea = str(e.idea).trim();
      if (idea.length < 20 || todo(idea)) P.push(`line ${i} ("${lines[i].text}") in ${p.id}: no visual idea (>= 20 chars): the concrete image, pun or transformation this line becomes`);
      else {
        const lw = new Set(normLine(lines[i].text).split(" ")), iw = normLine(idea).split(" ");
        if (iw.length <= lw.size + 2 && iw.filter((w) => lw.has(w)).length / iw.length > 0.8) W.push(`line ${i} in ${p.id}: the idea restates the lyric; make it a picture (a pun, a transformation)`);
      }
      const l = lines[i], m = (l.start + l.end) / 2;
      if (Number.isFinite(Number(p.start)) && Number.isFinite(Number(p.end))) {
        if (m < Number(p.start) || m > Number(p.end)) P.push(`line ${i} ("${lines[i].text}", ${r2(l.start)}-${r2(l.end)}s) is sung outside its plate ${p.id} (${p.start}-${p.end}s)`);
        else if (l.start < Number(p.start) - 0.5 || l.end > Number(p.end) + 0.8) W.push(`line ${i} straddles the edge of ${p.id} (${r2(l.start)}-${r2(l.end)}s vs ${p.start}-${p.end}s); a word would cross a cut`);
      }
    }
  }
  const missing = lines.map((_, i) => i).filter((i) => !seen.has(i));
  if (missing.length) P.push(`${missing.length} lyric line(s) not in any plate: ${missing.slice(0, 12).map((i) => `${i} "${lines[i].text}"`).join("; ")}${missing.length > 12 ? "; ..." : ""}`);

  // 6. idioms
  const byIdiom = {};
  for (const p of plates) if (!empty(p.idiom, 4)) (byIdiom[str(p.idiom).toLowerCase().trim()] ||= []).push(p);
  const rec = Array.isArray(T.recurring_idioms) ? T.recurring_idioms : [];
  if (rec.length > 2) P.push("recurring_idioms: at most 2 (a hook template and a pre-chorus template); everything else gets its own idiom");
  const recSet = new Set(rec.map((r) => str(r.idiom).toLowerCase().trim()));
  for (const r of rec) if (empty(r.why, 10)) P.push(`recurring_idioms "${r.idiom}": say why it recurs and what escalates each time`);
  for (const [idm, ps] of Object.entries(byIdiom)) {
    if (ps.length > 2 && !recSet.has(idm)) P.push(`idiom "${idm}" is used in ${ps.length} plates (${ps.map((p) => p.id).join(", ")}); no idiom more than twice unless declared in recurring_idioms`);
    if (recSet.has(idm) && ps.length > 1) for (const p of ps.slice(1)) if (empty(p.change, 10)) P.push(`plate ${p.id}: repeats the recurring idiom "${idm}" and must say in \`change\` what is different this time`);
  }
  const distinct = Object.keys(byIdiom).length;
  const minId = num(args["min-idioms"], Math.min(plates.length, Math.max(4, Math.ceil(plates.length * 0.5))));
  if (distinct < minId) P.push(`${distinct} distinct idioms; at least ${minId} for ${plates.length} plates (each plate its own instrument)`);

  // 7. hook escalation: every repeated lyric line names what changes each time
  const reps = {};
  lines.forEach((l, i) => (reps[normLine(l.text)] ||= []).push(i));
  const hooks = [];
  for (const [t, idx] of Object.entries(reps)) {
    if (idx.length < 2) continue;
    hooks.push({ line: lines[idx[0]].text, times: idx.length });
    let prev = "";
    idx.forEach((i, n) => {
      const pl = plates.find((p) => (p.lines || []).some((e) => Number(e.i ?? e.line) === i));
      const e = pl && pl.lines.find((e) => Number(e.i ?? e.line) === i);
      if (!e) return;
      const ch = str(e.change).trim();
      if (n > 0) {
        if (ch.length < 15 || todo(ch)) P.push(`hook "${lines[idx[0]].text}" (line ${i}, occurrence ${n + 1} of ${idx.length}): name in \`change\` what escalates or turns this time (>= 15 chars)`);
        else if (normLine(ch) === prev) P.push(`hook line ${i}: \`change\` repeats the previous occurrence's; each repeat must differ`);
      } else if (ch.length < 10) W.push(`hook "${lines[idx[0]].text}" first occurrence (line ${i}): describe the baseline in \`change\` so the escalation has a start`);
      prev = normLine(ch);
    });
  }

  // 8. space: 3D/hybrid for songs over 60 s
  const sp = { "2d": 0, "3d": 0, hybrid: 0 };
  plates.forEach((p) => SPACES.includes(p.space) && sp[p.space]++);
  if (songEnd > 60 && sp["3d"] + sp.hybrid < 1) P.push("a song over 60 s needs at least one 3d or hybrid plate (references/3d.md): where does the film go deep, and why?");
  if (plates.length >= 6 && sp["3d"] + sp.hybrid > plates.length * 0.6) W.push(`${sp["3d"] + sp.hybrid} of ${plates.length} plates are 3D; render cost and sameness: keep 3D for the plates that earn depth (2 or 3 hero shots beat eight average ones)`);
  if (plates.length >= 6 && sp["2d"] === 0) W.push("no 2d plate; flat plates (documents, charts, type) are the contrast that makes depth land");

  // 9. energy follows the song
  const ens = plates.map((p) => num(p.energy, 3));
  if (plates.length >= 4 && !ens.some((e) => e >= 5)) P.push("no plate has energy 5; the film needs a peak");
  if (plates.length >= 4 && !ens.some((e) => e <= 2)) P.push("no plate has energy <= 2; the film needs a breath (a calm plate makes the peak read)");
  if (A?.sections?.length) {
    const acc2 = { chorus: [], verse: [] };
    for (const p of plates) {
      const m = (num(p.start, 0) + num(p.end, 0)) / 2;
      const s = A.sections.find((s) => m >= s.start && m < s.end);
      if (!s) continue;
      const k = kindOf(s.name);
      if (acc2[k]) acc2[k].push(num(p.energy, 3));
      p._section = s.name;
      if (p.section && p.section !== s.name) W.push(`plate ${p.id} says section "${p.section}" but sits in "${s.name}" (${A.sections.find((x) => x.name === s.name).start}-${A.sections.find((x) => x.name === s.name).end}s)`);
    }
    const avg = (a) => a.reduce((x, y) => x + y, 0) / (a.length || 1);
    if (acc2.chorus.length && acc2.verse.length) {
      if (avg(acc2.chorus) < avg(acc2.verse)) P.push(`energy runs against the song: chorus plates average ${r2(avg(acc2.chorus))}, verse/pre/bridge plates ${r2(avg(acc2.verse))}; choruses carry the most energy`);
      else if (avg(acc2.chorus) - avg(acc2.verse) < 0.5) W.push(`chorus plates (${r2(avg(acc2.chorus))}) barely out-energy verse plates (${r2(avg(acc2.verse))}); widen the curve`);
    }
    const final = A.sections.filter((s) => kindOf(s.name) === "chorus").pop();
    if (final) {
      const fp = plates.filter((p) => num(p.start, 0) >= final.start - 0.01 && num(p.start, 0) < final.end);
      if (fp.length && Math.max(...fp.map((p) => num(p.energy, 3))) < 5) W.push("the last chorus has no energy-5 plate; the final chorus should out-do the first");
    }
  } else W.push("no --audio sections: energy was not compared with the song's sections");

  // 10. light/dark rhythm
  const grounds = new Set(plates.map((p) => p.ground).filter(Boolean));
  if (plates.length >= 8 && pal.paper && grounds.size < 2) W.push("every plate has the same ground; invert a few plates to paper (set `ground: \"light\"`) for the light/dark rhythm");

  const stats = {
    plates: plates.length,
    distinct_idioms: distinct,
    spaces: sp,
    hooks,
    signal_motif_plates: sb.signal ? uses[sb.signal] || 0 : 0,
    lines_covered: seen.size + "/" + lines.length,
    energy: ens,
  };
  const ok = P.length === 0;
  out({ ok, problems: P, warnings: W, stats }, ok ? 0 : 2);
}

// --- scenes ----------------------------------------------------------------------
function scenes() {
  const T = load(args.treatment, "treatment");
  const L = load(args.lyrics, "lyrics");
  if (!args.out) die("--out <scenes.json> is required");
  const lines = L.lines || [];
  const plates = (T.plates || []).slice().sort((a, b) => a.start - b.start);
  const sb = T.style_bible || {};
  const intensity = (e) => (e >= 4 ? "high" : e <= 2 ? "low" : "medium");
  const sc = plates.map((p, k) => {
    const ls = (p.lines || []).map((e) => ({ ...e, text: e.text || (lines[Number(e.i ?? e.line)] || {}).text || "" }));
    const idea = ls.map((e) => `"${e.text}": ${e.idea}${e.change ? ` [${e.change}]` : ""}`).join(" | ");
    const mot = (p.motifs || []).map((m) => (T.motifs || []).find((x) => x.id === m)?.name || m).join(", ");
    return {
      title: p.title,
      on_screen: ls.map((e) => e.text).join(" / "),
      visual: `${p.visual}${idea ? " Lines: " + idea : ""} Words: ${p.lyric_integration}`,
      duration: r2(p.end - p.start),
      beat: p._section || p.section || "",
      intensity: intensity(Number(p.energy)),
      transition_in: k === 0 ? undefined : p.transition_in || "cut",
      type: "feature_showcase",
      notes: `Plate ${p.id}. Idiom: ${p.idiom}. Space: ${p.space}. Energy ${p.energy}/5. Ground: ${p.ground || "dark"}.${mot ? " Motifs: " + mot + "." : ""}${p.change ? " Changes this time: " + p.change + "." : ""} Lyrics lines ${ls.map((e) => e.i ?? e.line).join(",") || "none (instrumental)"} on the real word timings (lyrics.json); cut on the downbeat at ${p.start}s.`,
      plate: p.id,
      idiom: p.idiom,
      space: p.space,
      energy: p.energy,
      start: p.start,
      end: p.end,
      lines: ls.map((e) => Number(e.i ?? e.line)),
      motifs: p.motifs || [],
      ground: p.ground || "dark",
      asset_candidates: "none: drawn in code",
    };
  });
  const o = {
    title: T.song?.title ? `${T.song.title}: music video` : "Music video",
    message: str(T.concept?.title) + (T.concept?.text ? ": " + str(T.concept.text).split(/(?<=[.!?])\s/)[0] : ""),
    arc: `Treatment (${T.label || "Sure"})`,
    audience: "viewers of the song",
    aspect: str(args.aspect) || "16:9",
    music: str(args.music) || (T.song?.title ? `the track: ${T.song.title}` : "the supplied track"),
    narration: false,
    transition_default: "cut",
    style: { palette: sb.palette, type: sb.type, signal: sb.signal, tone: sb.tone, banned: sb.banned },
    scenes: sc,
  };
  writeFile(path.resolve(String(args.out)), JSON.stringify(o, null, 2) + "\n");
  out({ out: path.resolve(String(args.out)), scenes: sc.length, total_s: r2(sc.reduce((a, s) => a + s.duration, 0)) });
}

if (cmd === "skeleton") skeleton();
else if (cmd === "check") check();
else if (cmd === "scenes") scenes();
else die("usage: treatment.mjs skeleton|check|scenes (see the header of this file)");
