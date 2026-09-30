#!/usr/bin/env node
// Music candidates for the Music step: long enough for the film, in moods written like a music
// supervisor would (genre, instruments, production, BPM, structure), each one analysed and fitted
// to the film so the console can show BPM, sections, the ending and how the edit will go.
//
//   node music.mjs --run <run dir> --film <seconds> [--intents "one|two|three"]
//        [--style "<visual style words>"] [--story "<arc / tone words>"]
//        [--format launch|explainer|reel|kinetic|brand|premium] [--narrated] [--count 3]
//        [--sources heygen,openverse,curated] [--no-preview]
//   -> {"options":[{id,title,mood,duration,file,preview,source,license,attribution,url,
//                   bpm,summary,ending,strong_from,fit:{shape,film_duration,needs_longer,why,plan},
//                   usable,problems}], "recommended": "<id>", "intents": [...], "notes": [...]}
//
// Sources, in order (each only if the previous ones gave too few usable tracks):
//   heygen    HeyGen's catalog through media-use's own helpers (needs the heygen sign-in): up to 30
//             results per mood, keeping tracks >= film + 4 s. Falls back to
//             `npx hyperframes media-use resolve` when media-use's helpers can't be loaded.
//   openverse Openverse API, CC0 / CC BY music only (mostly Jamendo), >= film + 4 s. Records the
//             licence and the attribution string (CC BY needs the credit in the description).
//   curated   a few verified direct links (Mixkit Free License; Incompetech CC BY 4.0, which is
//             very recognisable).
// Every candidate is analysed (sound.mjs analyze) and fitted (sound.mjs fit); `preview` is the
// fitted bed, so the user hears the edit the film will get, not the raw file. Licences go to
// <run>/music/LICENSES.json. No usable track: {"options":[], "unavailable":"<why>"} and exit 0.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { parseArgs, die } from "./lib/common.mjs";
import { findSkill } from "./lib/hyperframes.mjs";
import { track } from "./lib/report.mjs";
import { analyzeTrack, summarize, fitTrack, renderPlan, toolsAvailable } from "./lib/audio.mjs";

const args = parseArgs();
track("Finding music long enough for the film", "Music candidates ready");
if (!args.run) die("--run required");
const film = Number(args.film) || null;
const minLen = film ? film + 4 : 45;
const count = Math.max(2, Math.min(4, Number(args.count) || 3));
const dir = path.resolve(String(args.run), "music");
fs.mkdirSync(dir, { recursive: true });
const ws = process.cwd();
const rel = (p) => path.relative(ws, p) || p;
const notes = [];
const sources = String(args.sources || "heygen,openverse,curated").split(",").map((s) => s.trim());

// ---------------------------------------------------------------- intents

// Words that pull stock libraries toward the "happy corporate" cliché (research R4 §2.3)
const BANNED = /\b(corporate|inspirational|inspiring|uplifting|motivational|positive|happy|success|business|presentation|ukulele|whistl\w*|glockenspiel|background music|epic trailer)\b/gi;
const FAMILIES = [
  { id: "editorial", match: /swiss|editorial|minimal|grid|international|clean|mono|bauhaus|type/i, text: "dry minimal electronic, clean kick, sine bass, one synth arpeggio, tight staccato", bpm: "105-120", ov: ["electronic", "minimal"] },
  { id: "dark-tech", match: /dark|neon|terminal|cyber|code|hacker|glitch|developer|night/i, text: "dark synth electronic, analog bass, glitch percussion, filtered pad", bpm: "110-128", ov: ["synth", "electronic"] },
  { id: "playful", match: /playful|flat|pastel|illustrat|cartoon|friendly|toy|bouncy|kid|fun/i, text: "indie electronic, mallets and plucks, marimba, soft drums, bouncy", bpm: "105-120", ov: ["indie", "electronic"] },
  { id: "cinematic", match: /luxury|cinematic|premium|elegant|apple|serif|noir|keynote|restrain/i, text: "sparse cinematic ambient, warm pads, low strings, sub pulse, long tails", bpm: "70-90", ov: ["ambient", "cinematic"] },
  { id: "raw", match: /brutal|grunge|zine|punk|raw|collage|xerox/i, text: "breakbeat, distorted drums, bitcrushed texture, heavy bass, half-time feel", bpm: "130-170", ov: ["breakbeat", "electronic"] },
  { id: "retro", match: /retro|y2k|vapor|80s|90s|synthwave|arcade|chrome/i, text: "house groove, FM synths, shuffled drums, warm chords", bpm: "120-135", ov: ["house", "synth"] },
  { id: "organic", match: /organic|wellness|nature|calm|warm|craft|hand|paper|earth/i, text: "organic electronica, acoustic textures, warm pads, light percussion, honest space", bpm: "80-100", ov: ["acoustic", "ambient"] },
];
const FORMATS = {
  launch: { structure: "strong from the first bar, one clear lift, a real ending", bpm: null },
  explainer: { structure: "steady carpet, nothing melodic over the voice, small lifts, a real ending", bpm: "85-110" },
  reel: { structure: "hook in the first second, one drop, hard ending", bpm: "118-140" },
  kinetic: { structure: "steady rhythmic grid, builds into the last line, hard ending", bpm: "110-130" },
  brand: { structure: "long build to one climax, resolved ending", bpm: "70-95" },
  premium: { structure: "already playing at the first frame, few elements, one lift, resolved final chord", bpm: "80-100" },
};

function deriveIntents() {
  const fmt = FORMATS[String(args.format || "launch")] || FORMATS.launch;
  const words = `${args.style || ""} ${args.story || ""}`;
  const ranked = FAMILIES.map((f) => ({ f, hit: (words.match(new RegExp(f.match.source, "gi")) || []).length })).sort((a, b) => b.hit - a.hit);
  const picks = [];
  for (const r of ranked) if (r.hit && picks.length < 2) picks.push(r.f);
  const fallback = { launch: ["editorial", "dark-tech", "organic"], explainer: ["organic", "editorial", "cinematic"], reel: ["retro", "raw", "dark-tech"], kinetic: ["editorial", "dark-tech", "raw"], brand: ["cinematic", "organic", "retro"], premium: ["cinematic", "editorial", "organic"] }[String(args.format || "launch")] || ["editorial", "organic", "cinematic"];
  for (const id of fallback) if (picks.length < count && !picks.some((p) => p.id === id)) picks.push(FAMILIES.find((f) => f.id === id));
  const voice = args.narrated ? ", sits under a voice" : "";
  return picks.slice(0, count).map((f) => ({ family: f, intent: `${f.text}, ${fmt.bpm || f.bpm} BPM, no vocals${voice}, ${fmt.structure}` }));
}

let intents;
if (args.intents) {
  const derived = deriveIntents();
  intents = String(args.intents).split("|").map((s) => s.trim()).filter(Boolean).slice(0, 4).map((s, i) => {
    let clean = s.replace(BANNED, "").replace(/\s{2,}/g, " ");
    for (let k = 0; k < 3; k++) clean = clean.replace(/^[,\s]+|[,\s]+$/g, "").replace(/^(with|and|of|in)\b\s*/i, "").replace(/\s*\b(with|and|of|in)$/i, "");
    if (clean !== s) notes.push(`dropped cliché words from "${s}" (they pull libraries toward stock "happy corporate" tracks)`);
    if (clean.split(/[\s,]+/).filter((w) => w.length > 2).length < 3) {
      const d = derived[i % derived.length];
      notes.push(`"${s}" had too little left to search with: used "${d.intent}" instead`);
      return d;
    }
    const family = FAMILIES.find((f) => f.match.test(clean)) || FAMILIES[0];
    return { family, intent: /no vocals/i.test(clean) ? clean : `${clean}, no vocals` };
  });
} else intents = deriveIntents();

// ---------------------------------------------------------------- sources

const found = []; // {id,title,file,source,license,attribution,url,intent}
const seen = new Set();
const bannedIn = (s) => BANNED.test(String(s || "")) && ((BANNED.lastIndex = 0), true);

async function download(url, dest) {
  const res = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(120000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  return dest;
}

async function fromHeygen() {
  const mu = findSkill("media-use");
  const lib = mu && path.join(mu, "audio", "scripts", "lib", "heygen.mjs");
  let H = null;
  if (lib && fs.existsSync(lib)) {
    try {
      H = await import(pathToFileURL(lib).href);
    } catch {}
  }
  if (H) {
    let headers;
    try {
      headers = H.heygenAuthHeaders();
    } catch (e) {
      notes.push(`HeyGen catalog skipped: ${e.message.split("\n")[0]}`);
      return;
    }
    for (const it of intents) {
      if (found.length >= count * 2) break;
      let res = [];
      try {
        res = await H.searchSounds(it.intent.slice(0, 250), "music", headers, { limit: 30 });
      } catch (e) {
        notes.push(`HeyGen search failed for "${it.intent.slice(0, 40)}…": ${String(e.message).split("\n")[0]}`);
        continue;
      }
      const long = res.filter((r) => typeof r.duration === "number" && r.duration >= minLen && r.duration <= 360 && !bannedIn(r.description) && !seen.has(r.id));
      const shortest = res.length ? Math.max(...res.map((r) => r.duration || 0)) : 0;
      if (!long.length) {
        notes.push(`HeyGen had no track >= ${Math.round(minLen)} s for "${it.family.id}" (longest ${shortest} s)`);
        continue;
      }
      for (const r of long.slice(0, intents.length >= count ? 1 : 2)) {
        seen.add(r.id);
        const ext = (String(r.audio_url).split("?")[0].match(/\.(wav|mp3|m4a|ogg)$/i) || [, "mp3"])[1];
        const dest = path.join(dir, `heygen-${String(r.id).slice(0, 8)}.${ext}`);
        try {
          if (!fs.existsSync(dest)) await download(r.audio_url, dest);
          const desc = r.description || it.intent;
          found.push({ id: `hg-${String(r.id).slice(0, 8)}`, title: desc.charAt(0).toUpperCase() + desc.slice(1), file: dest, source: "HeyGen catalog via media-use", license: "HeyGen terms (commercial use with a HeyGen account)", attribution: null, url: null, intent: it });
        } catch (e) {
          notes.push(`HeyGen download failed: ${e.message}`);
        }
      }
    }
    return;
  }
  // media-use present only as the CLI: resolve one track per mood (length can't be requested)
  for (const it of intents) {
    try {
      const out = execFileSync("npx", ["--yes", "hyperframes", "media-use", "resolve", "--type", "bgm", "--intent", it.intent, "--project", dir, "--json"], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 180000 });
      let r = null;
      for (const line of out.split("\n").reverse()) {
        try {
          r = JSON.parse(line);
          break;
        } catch {}
      }
      if (!r || !r.ok || !r.path) continue;
      const file = path.resolve(dir, r.path);
      if (found.some((f) => f.file === file)) continue;
      found.push({ id: r.id, title: r.description || it.intent, file, source: "HeyGen catalog via media-use", license: "HeyGen terms", attribution: null, url: null, intent: it });
    } catch (e) {
      notes.push(`media-use resolve failed: ${String(e.stderr || e.message).split("\n").filter(Boolean).slice(-1)[0] || "error"}`);
    }
  }
}

async function fromOpenverse() {
  const words = [...new Set(intents.flatMap((it) => it.family.ov))];
  for (const w of words) {
    if (found.filter((f) => f.source.startsWith("Openverse")).length >= count) break;
    let j;
    try {
      const res = await fetch(`https://api.openverse.org/v1/audio/?q=${encodeURIComponent(w)}&category=music&license=by,cc0&page_size=20`, { signal: AbortSignal.timeout(30000) });
      j = await res.json();
    } catch (e) {
      notes.push(`Openverse unavailable: ${e.message}`);
      return;
    }
    const ok = (j.results || []).filter((r) => r.duration >= minLen * 1000 && r.duration <= 360000 && r.url && /^(by|cc0)$/.test(r.license) && !r.mature && !bannedIn(r.title) && !/vocal|vox|feat\.|remix|song/i.test(r.title) && !seen.has(r.id));
    for (const r of ok.slice(0, 2)) {
      seen.add(r.id);
      const dest = path.join(dir, `openverse-${String(r.id).slice(0, 8)}.mp3`);
      try {
        if (!fs.existsSync(dest)) await download(r.url, dest);
        const it = intents.find((x) => x.family.ov.includes(w)) || intents[0];
        found.push({ id: `ov-${String(r.id).slice(0, 8)}`, title: `${r.title} (${r.creator})`, file: dest, source: `Openverse / ${r.source}`, license: `CC ${r.license.toUpperCase()} ${r.license_version || ""}`.trim(), attribution: r.attribution || `"${r.title}" by ${r.creator} (${r.license_url || "CC"})`, url: r.foreign_landing_url || r.url, intent: it, caveat: r.source === "jamendo" ? "Jamendo: the artist's CC licence holds, but for client work keep the licence URL and check Content ID" : null });
      } catch (e) {
        notes.push(`Openverse download failed (${r.title}): ${e.message}`);
      }
    }
  }
}

// verified direct links (2026-09-30)
const CURATED = [
  { id: "mixkit-1167", title: "Mixkit #1167: dark minimal electronic, 105 BPM", url: "https://assets.mixkit.co/music/1167/1167.mp3", tags: ["editorial", "dark-tech", "cinematic"], license: "Mixkit Free License (commercial OK, no attribution)", attribution: null, source: "Mixkit" },
  { id: "mixkit-623", title: "Mixkit #623: driving electronic, 124 BPM, long", url: "https://assets.mixkit.co/music/623/623.mp3", tags: ["dark-tech", "retro", "raw"], license: "Mixkit Free License (commercial OK, no attribution)", attribution: null, source: "Mixkit" },
  { id: "incompetech-pamgaea", title: "Pamgaea: percussive world groove, 125 BPM", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Pamgaea.mp3", tags: ["organic", "playful"], license: "CC BY 4.0", attribution: '"Pamgaea" Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 4.0', source: "Incompetech (very recognisable)" },
  { id: "incompetech-local-forecast", title: "Local Forecast - Elevator: retro lounge swing, 109 BPM", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Local%20Forecast%20-%20Elevator.mp3", tags: ["retro", "playful"], license: "CC BY 4.0", attribution: '"Local Forecast - Elevator" Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 4.0', source: "Incompetech (very recognisable)" },
  { id: "incompetech-sneaky-snitch", title: "Sneaky Snitch: sneaky pizzicato, 87 BPM", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Sneaky%20Snitch.mp3", tags: ["playful"], license: "CC BY 4.0", attribution: '"Sneaky Snitch" Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 4.0', source: "Incompetech (very recognisable)" },
];

async function fromCurated() {
  const fams = intents.map((it) => it.family.id);
  const ranked = CURATED.map((c) => ({ c, score: c.tags.filter((t) => fams.includes(t)).length })).filter((x) => x.score > 0).sort((a, b) => b.score - a.score);
  for (const { c } of ranked.slice(0, count)) {
    const dest = path.join(dir, `${c.id}.mp3`);
    try {
      if (!fs.existsSync(dest)) await download(c.url, dest);
      const it = intents.find((x) => c.tags.includes(x.family.id)) || intents[0];
      found.push({ id: c.id, title: c.title, file: dest, source: c.source, license: c.license, attribution: c.attribution, url: c.url, intent: it });
    } catch (e) {
      notes.push(`${c.id} download failed: ${e.message}`);
    }
  }
}

// ---------------------------------------------------------------- analyse + fit each

const tools = toolsAvailable();
const options = [];
const analyzeOne = (f) => {
  const o = { id: f.id, title: f.title, mood: f.intent.family.id, duration: null, file: rel(f.file), preview: null, source: f.source, license: f.license, attribution: f.attribution, url: f.url };
  if (f.caveat) o.caveat = f.caveat;
  if (!tools.ffmpeg || !tools.ffprobe) {
    o.usable = null;
    o.problems = ["ffmpeg/ffprobe not installed: not analysed"];
    return o;
  }
  try {
    const A = analyzeTrack(f.file, { quick: true });
    o.duration = Math.round(A.duration);
    o.bpm = A.bpm;
    o.summary = summarize(A);
    o.ending = { natural: A.ending.natural, type: A.ending.type, at: A.ending.hit ?? A.ending.fade_start ?? null };
    o.strong_from = A.strong_sections[0] ? A.strong_sections[0].t0 : null;
    o.sections = A.sections.map((s) => ({ t0: s.t0, t1: s.t1, tier: s.tier, label: s.label }));
    o.problems = [...A.problems];
    o.warnings = [...A.warnings];
    if (film) {
      const plan = fitTrack(A, { film });
      const planFile = path.join(dir, `plan-${f.id}.json`);
      fs.writeFileSync(planFile, JSON.stringify(plan, null, 2) + "\n");
      o.fit = { shape: plan.shape, film_duration: plan.film_duration, needs_longer: !!plan.needs_longer, cost: plan.cost ?? null, why: plan.why, plan: rel(planFile) };
      if (plan.needs_longer) o.problems.push(`too short for a ${film} s film without repeating a section`);
      if (!args["no-preview"] && plan.segments && plan.segments.length) {
        const pv = path.join(dir, `fitted-${f.id}.wav`);
        renderPlan(plan, pv);
        o.preview = rel(pv);
      }
    }
    o.usable = o.problems.length === 0;
    // one line the console card can show as-is
    o.mood = [f.intent.family.id.replace("-", " "), `${Math.round(A.bpm)} BPM`, A.ending.natural ? "real ending" : A.ending.type === "fade" ? "fades out" : "no ending", o.fit ? `${o.fit.shape === "backtimed" ? "plays straight to its ending" : o.fit.shape === "head+tail" ? "one bar-line edit" : o.fit.shape} for ${film} s` : null].filter(Boolean).join(" · ");
  } catch (e) {
    o.usable = false;
    o.problems = [`analysis failed: ${e.message}`];
  }
  return o;
};

const usableCount = () => options.filter((o) => o.usable).length;
const runSource = async (name, fn) => {
  if (!sources.includes(name) || usableCount() >= count) return;
  const before = found.length;
  await fn();
  for (const f of found.slice(before)) options.push(analyzeOne(f));
};
await runSource("heygen", fromHeygen);
await runSource("openverse", fromOpenverse);
await runSource("curated", fromCurated);

// licence ledger
const ledgerFile = path.join(dir, "LICENSES.json");
let ledger = [];
try {
  ledger = JSON.parse(fs.readFileSync(ledgerFile, "utf8"));
} catch {}
for (const o of options) if (!ledger.some((l) => l.file === o.file)) ledger.push({ id: o.id, file: o.file, title: o.title, source: o.source, license: o.license, attribution: o.attribution, url: o.url, fetched: new Date().toISOString() });
fs.writeFileSync(ledgerFile, JSON.stringify(ledger, null, 2) + "\n");

options.sort((a, b) => (b.usable === true) - (a.usable === true) || (a.fit?.cost ?? 9) - (b.fit?.cost ?? 9));
// `count` options, one per mood first (different moods, not three takes of one), best fit first
const shown = [];
for (const o of options) if (shown.length < count && !shown.some((x) => x.mood.split(" · ")[0] === o.mood.split(" · ")[0])) shown.push(o);
for (const o of options) if (shown.length < count && !shown.includes(o)) shown.push(o);
const best = shown.find((o) => o.usable) || null;
const result = { options: shown, recommended: best ? best.id : null, intents: intents.map((i) => i.intent), film_s: film, min_length_s: Math.round(minLen), licenses: rel(ledgerFile), notes };
if (!film) notes.push("pass --film <seconds> so each track is fitted to the film and gets a preview of the edit");
if (!shown.length) result.unavailable = `No music could be fetched (${notes.join("; ") || "no source answered"}). Run \`npx hyperframes auth status\` (the HeyGen catalog needs the sign-in) or check the network. You can still pick "No music" or give your own track.`;
else if (!best) result.unavailable_note = `None of the tracks fits a ${film} s film cleanly: ask for more (other moods), or accept a repeat.`;
console.log(JSON.stringify(result, null, 2));
