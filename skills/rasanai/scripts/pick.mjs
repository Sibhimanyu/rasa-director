#!/usr/bin/env node
// Candidate selection for the Motion and Look steps.
//
// Motion (library has median_likelihood tags):
//   node pick.mjs motion [--count 3-6] [--feel calm,premium] [--seed "<content>"] [--exclude id,id]
//   -> candidates for the tasting menu (always 2 tail personalities with
//      median_likelihood <= 0.10), rotating away from the
//      last 3 motion picks. If the exclusion leaves too few candidates, the
//      window shrinks (3 -> 2 -> 1 -> 0) until it fits.
//   -> "auto": the pick used when the user says "you decide", plus the most
//      obvious option passed over (highest median_likelihood among feel matches).
//   -> "recommended": a remembered confirmed preference (only for active choice).
//
// Look (frame presets have no likelihood tags):
//   node pick.mjs look [--count 3] [--feel editorial,calm] [--exclude id,id]
//   -> rotation only: exclude the last 3 look picks; "obvious" = the preset whose
//      description best matches the feel words; auto pick = the best match that
//      is NOT the obvious one.
import { parseArgs, die, listPersonalities } from "./lib/common.mjs";
import { listPresets } from "./lib/hyperframes.mjs";
import { recent, recommend } from "./memory.mjs";
import "./lib/motion-lang.mjs"; // motion-language terms ("lang-snappy") resolve like swatch ids

const args = parseArgs();
const kind = args._[0];
// --exclude a,b: ids the user just rejected ("none of these fit"), never offered again this run
const userExcluded = String(args.exclude || "").split(",").map((x) => x.trim()).filter(Boolean);
const feel = String(args.feel || "")
  .toLowerCase()
  .split(/[,\s]+/)
  .filter(Boolean);

// Small deterministic PRNG so a run is reproducible given the same seed + history.
function rng(seedStr) {
  let h = 2166136261;
  for (const c of seedStr) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 1e9) / 1e9;
  };
}

function withRotation(items, step, count, idOf) {
  for (let k = 3; k >= 0; k--) {
    const excl = k ? recent(step, k) : [];
    const pool = items.filter((x) => !excl.includes(idOf(x)));
    if (pool.length >= Math.min(count, items.length) || k === 0) return { pool, excluded: excl, window: k };
  }
}

// Free words -> the feel tags personalities carry. Unknown words are reported
// back (unmatched_feel) so the agent can re-run with vocabulary words.
export const SYNONYMS = {
  calm: ["calm", "gentle", "airy", "quiet", "restrained"],
  slow: ["calm", "gentle", "airy", "cinematic", "restrained"],
  warm: ["friendly", "gentle", "organic", "considered"],
  cozy: ["friendly", "gentle", "calm"],
  soft: ["gentle", "airy", "calm"],
  premium: ["premium", "luxury", "restrained", "cinematic", "quiet"],
  luxury: ["luxury", "restrained", "quiet", "premium"],
  elegant: ["luxury", "restrained", "editorial", "considered"],
  minimal: ["restrained", "quiet", "precise", "systematic"],
  playful: ["playful", "friendly", "energetic"],
  fun: ["playful", "friendly", "energetic"],
  friendly: ["friendly", "playful", "gentle"],
  bold: ["loud", "punchy", "raw", "urgent", "confident"],
  energetic: ["energetic", "punchy", "urgent", "sporty"],
  sporty: ["sporty", "punchy", "urgent"],
  urgent: ["urgent", "punchy"],
  editorial: ["editorial", "literary", "considered"],
  literary: ["literary", "editorial", "considered"],
  corporate: ["precise", "systematic", "confident"],
  serious: ["precise", "confident", "considered", "restrained"],
  technical: ["technical", "nerdy", "systematic", "precise"],
  tech: ["technical", "precise", "systematic"],
  retro: ["nostalgic", "technical", "raw"],
  nostalgic: ["nostalgic"],
  dramatic: ["dramatic", "cinematic"],
  cinematic: ["cinematic", "dramatic", "premium"],
  organic: ["organic", "fluid", "gentle"],
  fluid: ["fluid", "organic", "hypnotic"],
  raw: ["raw", "loud", "anti-design"],
  edgy: ["raw", "anti-design", "loud"],
  weird: ["raw", "anti-design", "hypnotic", "fluid", "nostalgic"],
};
function expandFeel(words) {
  const out = new Set();
  const unmatched = [];
  const tags = new Set(listPersonalities().flatMap((p) => p.feel));
  words.forEach((w) => {
    if (SYNONYMS[w]) { out.add(w); SYNONYMS[w].forEach((s) => out.add(s)); }
    else if (tags.has(w)) out.add(w);
    else unmatched.push(w);
  });
  expandFeel.unmatched = unmatched;
  return [...out];
}

const TAIL = 0.1; // median_likelihood <= 0.10 counts as "a model would rarely do this"
const countArg = (def, lo, hi) => {
  const n = args.count === undefined ? def : Number(args.count);
  if (!Number.isInteger(n) || n < lo || n > hi) die(`--count must be an integer ${lo}-${hi}`);
  return n;
};

if (kind === "motion") {
  const count = countArg(6, 3, 6);
  const lib = listPersonalities().filter((p) => !userExcluded.includes(p.id));
  if (lib.length < count) die(`only ${lib.length} personalities left after --exclude; lower --count or exclude fewer`);
  const want = expandFeel(feel);
  const score = (p) => (want.length ? p.feel.filter((f) => want.includes(f)).length : 0);
  const rand = rng(`${args.seed || ""}|${recent("motion", 10).join(",")}`);
  const order = (arr) => arr.map((p) => ({ p, k: score(p) * 10 + rand() })).sort((a, b) => b.k - a.k).map((x) => x.p);
  const isTail = (p) => p.median_likelihood <= TAIL;

  // rotation per tier: the tail must still offer 2 after excluding recent picks
  const { pool, excluded, window } = withRotation(lib, "motion", count, (p) => p.id);
  let tailPool = pool.filter(isTail);
  if (tailPool.length < 2) tailPool = order(lib.filter(isTail)).filter((p, i, arr) => arr.indexOf(p) === i);
  const tailPick = order(tailPool).slice(0, 2);
  const restPick = order(pool.filter((p) => !isTail(p) && !tailPick.includes(p))).slice(0, count - tailPick.length);
  let candidates = [...restPick, ...tailPick];
  if (candidates.length < count) candidates = [...candidates, ...order(pool.filter((p) => !candidates.includes(p)))].slice(0, count);

  // a remembered confirmed pick is shown first (active choice only), replacing a non-tail candidate
  const rec = recommend("motion");
  if (rec && !candidates.find((c) => c.id === rec.value)) {
    const recP = lib.find((p) => p.id === rec.value);
    if (recP) {
      // never evict a tail candidate; a remembered tail pick may replace a tail slot only if 2 tail remain
      const dropIdx = candidates.map((c, i) => [c, i]).reverse().find(([c]) => !isTail(c));
      if (dropIdx) {
        candidates.splice(dropIdx[1], 1);
        candidates = [recP, ...candidates];
      } else if (isTail(recP)) {
        candidates.pop();
        candidates = [recP, ...candidates];
      }
    }
  }

  // "you decide": never the remembered preference, never a recently picked one
  const feelMatches = want.length ? lib.filter((p) => score(p) > 0) : lib;
  const obvious = (feelMatches.length ? feelMatches : lib).reduce((a, b) => (b.median_likelihood > a.median_likelihood ? b : a));
  const banned = new Set([obvious.id, ...(rec ? [rec.value] : []), ...excluded]);
  let autoPool = candidates.filter((c) => !banned.has(c.id));
  // small menus can be all-excluded: fall back to the whole library, still never the remembered/recent/obvious one
  if (!autoPool.length) autoPool = lib.filter((c) => !banned.has(c.id));
  if (!autoPool.length) autoPool = lib.filter((c) => c.id !== obvious.id && (!rec || c.id !== rec.value));
  const autoPick = autoPool.map((p) => ({ p, k: score(p) * 10 - p.median_likelihood * 8 + rand() * 2 })).sort((a, b) => b.k - a.k)[0].p;

  console.log(
    JSON.stringify(
      {
        kind: "motion",
        candidates: candidates.map((p) => ({ id: p.id, name: p.name, median_likelihood: p.median_likelihood, feel: p.feel, oneLiner: p.oneLiner })),
        tail_count: candidates.filter(isTail).length,
        unmatched_feel: expandFeel.unmatched,
        rotation: { excluded, window },
        recommended: rec,
        auto: {
          pick: autoPick.id,
          obvious: obvious.id,
          receipt: `picked ${autoPick.name} (${autoPick.oneLiner.split(".")[0].toLowerCase()}); passed over the obvious ${obvious.name}${excluded.length ? `; rotated away from recent ${excluded.join(", ")}` : ""}`,
        },
      },
      null,
      2
    )
  );
} else if (kind === "look") {
  const count = countArg(3, 1, 5);
  const presets = listPresets().filter((x) => !userExcluded.includes(x.id));
  const want = expandFeel(feel);
  const score = (x) => (want.length ? want.filter((w) => x.description.toLowerCase().includes(w)).length : 0);
  const { pool, excluded, window } = withRotation(presets, "look", count, (x) => x.id);
  const rand = rng(`${args.seed || ""}|${recent("look", 10).join(",")}`);
  const ranked = pool.map((x) => ({ x, k: score(x) * 10 + rand() })).sort((a, b) => b.k - a.k).map((y) => y.x);
  // "obvious" only means something when the feel words matched a description
  const top = presets.map((x) => ({ x, k: score(x) })).sort((a, b) => b.k - a.k)[0];
  const obvious = top.k > 0 ? top.x : null;
  const rec = recommend("look");
  let candidates = ranked.slice(0, count);
  const recX = rec && presets.find((x) => x.id === rec.value);
  if (recX && !candidates.includes(recX)) candidates = [recX, ...candidates.slice(0, count - 1)];
  // "you decide": not the remembered preference, not the obvious match, not a recent pick
  const auto = ranked.find((x) => (!obvious || x.id !== obvious.id) && (!rec || x.id !== rec.value)) || ranked[0];
  console.log(
    JSON.stringify(
      {
        kind: "look",
        candidates: candidates.map((x) => ({ id: x.id, showcase: x.showcase, frame: x.frame, description: x.description })),
        rotation: { excluded, window },
        unmatched_feel: expandFeel.unmatched,
        note: "Frame presets are designed at 16:9. For other aspects the look is judged again in the Step 4 tasting cells at the real aspect.",
        recommended: rec,
        auto: {
          pick: auto.id,
          obvious: obvious ? obvious.id : null,
          receipt: `picked ${auto.id}${obvious ? `; passed over the obvious ${obvious.id}` : " (no preset matched the feel words, so this is a fit-by-eye pick)"}${excluded.length ? `; rotated away from recent ${excluded.join(", ")}` : ""}`,
        },
      },
      null,
      2
    )
  );
} else {
  die("usage: pick.mjs motion|look [--count N] [--feel words] [--seed text]");
}
