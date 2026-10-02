// Lyric alignment and music hooks in pure JS (Node >= 20 + ffmpeg + whisper.cpp; no Python, no npm deps).
//
//   isolate      a vocal stem when demucs/spleeter exists (or --stems <file>), else the mix, said out loud
//   transcribe   whisper-cli (the whisper.cpp binary and ggml models `hyperframes transcribe` installs) with
//                DTW token timestamps (-dtw): each token's DTW time lands on the END of the sung token to
//                about 60 ms, which makes it the boundary between legato words
//   ensemble     several models x (mix | stem) x (default | no-context) runs, fused by the median per word
//   match        char-level global alignment (Needleman-Wunsch) of the user's lyric text to every
//                transcription, so splits, merges and mishearings ("flops" / "FLOPs", "Share GPT" /
//                "ChatGPT") still land every lyric word on its sounds
//   refine       word start = previous boundary (+ a measured bias), moved to the strongest vocal onset
//                nearby; after a pause the start comes from the word's own end instead
//   interpolate  words nothing matched are spread between their neighbours, conf low
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fft, decode, analyzeTrack, probeDuration } from "./audio.mjs";

export const median = (a) => {
  if (!a.length) return 0;
  const s = Float64Array.from(a).sort();
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
export const pctile = (a, p) => {
  if (!a.length) return 0;
  const s = Float64Array.from(a).sort();
  return s[Math.max(0, Math.min(s.length - 1, Math.round((p / 100) * (s.length - 1))))];
};
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const r3 = (x) => Math.round(x * 1000) / 1000;
const r2 = (x) => Math.round(x * 100) / 100;

// ---------------------------------------------------------------- text

// straight quotes -> typographic ones (the data keeps what the lyricist meant to show)
export function smart(s) {
  return s
    .replace(/(^|[\s(\[—–-])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/(^|[\s(\[—–])'(?=\p{L})/gu, (m, a, off, str) => {
      // an opening single quote only when a closing one follows (and it isn't an elision like 'cause)
      const rest = str.slice(off + m.length);
      return /'(\s|$|[,.!?;:])/.test(rest) && !/^(cause|til|till|em|round|bout|n|twas|tis)\b/i.test(rest) ? `${a}‘` : `${a}’`;
    })
    .replace(/'/g, "’");
}
export const fold = (s) => s.toLowerCase().replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
export const norm = (s) => s.toLowerCase().replace(/[‘’']/g, "").replace(/[^\p{L}\p{N}]/gu, "");

export function parseLyricsText(text) {
  const lines = [];
  for (const raw of String(text).split(/\r?\n/)) {
    const t = raw.trim();
    if (!t || /^\[[^\]]*\]$/.test(t)) continue; // blank lines and [Chorus] markers
    const words = t.split(/\s+/).map(smart).filter((w) => /[\p{L}\p{N}]/u.test(w));
    if (words.length) lines.push({ text: words.join(" "), words });
  }
  return lines;
}

// rough syllable count (acronyms spell out letter by letter): used only to spread unmatched words
export function syllables(w) {
  const t = w.replace(/[^\p{L}]/gu, "");
  if (!t) return 1;
  if (/^[A-Z]{3,5}$/.test(t) && !/OO|EE/.test(t)) return t.length;
  const s = t.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  const g = s.match(/[aeiouy]{1,2}/g);
  return Math.max(1, g ? g.length : 1);
}

// ---------------------------------------------------------------- tools

const have = (bin, args = ["-h"]) => !spawnSync(bin, args, { stdio: "ignore" }).error;

export function findWhisper() {
  for (const bin of [process.env.WHISPER_CLI, "whisper-cli", "whisper-cpp"].filter(Boolean)) if (have(bin)) return bin;
  return null;
}

export const MODEL_DIRS = () =>
  [process.env.WHISPER_MODEL_DIR, path.join(os.homedir(), ".cache", "hyperframes", "whisper", "models"), "/opt/homebrew/share/whisper.cpp", "/usr/local/share/whisper.cpp", "/usr/share/whisper.cpp"].filter(Boolean);

// DTW alignment-head preset for a ggml file name (whisper.cpp: -dtw <preset>)
export function dtwPreset(name) {
  const n = name.replace(/-q\d.*$/, "").replace(/-f16$/, "");
  const map = { "tiny.en": "tiny.en", tiny: "tiny", "base.en": "base.en", base: "base", "small.en": "small.en", small: "small", "medium.en": "medium.en", medium: "medium", "large-v1": "large.v1", "large-v2": "large.v2", "large-v3": "large.v3", "large-v3-turbo": "large.v3.turbo" };
  return map[n] || null;
}

export function listModels(lang = "en") {
  const found = [];
  const seen = new Set();
  for (const d of MODEL_DIRS()) {
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) {
      const m = f.match(/^ggml-(.+)\.bin$/);
      if (!m || m[1].startsWith("for-tests") || seen.has(m[1])) continue;
      if (lang !== "en" && /\.en(-|$)/.test(m[1])) continue;
      if (!dtwPreset(m[1])) continue;
      seen.add(m[1]);
      found.push({ name: m[1], file: path.join(d, f), size: fs.statSync(path.join(d, f)).size });
    }
  }
  // best first: the models that time words best on music
  const rank = (n) => (/large-v3-turbo/.test(n) ? 0 : /large/.test(n) ? 1 : /medium/.test(n) ? 2 : /small/.test(n) ? 3 : /base/.test(n) ? 4 : 5);
  return found.sort((a, b) => rank(a.name) - rank(b.name));
}

export function findStemmer() {
  if (process.env.RASAN_DEMUCS && fs.existsSync(process.env.RASAN_DEMUCS)) return process.env.RASAN_DEMUCS;
  if (have("demucs", ["--help"])) return "demucs";
  return null;
}

// -> {file, vocals: "demucs" | "stems-file" | "mix", stems: {vocals, drums, bass, other}}
// `stems` is a vocals file, or a folder with vocals.wav (+ drums/bass/other.wav); without it demucs is
// run when installed (4 stems, cached in workDir), else the mix is used and the result says so
export function isolateVocals(track, workDir, { stems, noStems = false } = {}) {
  const fromDir = (dir) => {
    const o = {};
    for (const k of ["vocals", "drums", "bass", "other"]) { const f = path.join(dir, `${k}.wav`); if (fs.existsSync(f)) o[k] = f; }
    return o;
  };
  if (stems) {
    const p = path.resolve(stems);
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) { const o = fromDir(p); if (o.vocals) return { file: o.vocals, vocals: "stems-file", stems: o }; }
    return { file: p, vocals: "stems-file", stems: { vocals: p } };
  }
  if (noStems) return { file: track, vocals: "mix", stems: {} };
  const bin = findStemmer();
  if (!bin) return { file: track, vocals: "mix", stems: {} };
  const base = path.basename(track).replace(/\.[^.]+$/, "");
  const find = () => {
    if (!fs.existsSync(workDir)) return null;
    const f = fs.readdirSync(workDir, { recursive: true }).map(String).find((x) => x.endsWith(path.join(base, "vocals.wav")));
    return f ? path.dirname(path.join(workDir, f)) : null;
  };
  let dir = find();
  if (!dir) {
    fs.mkdirSync(workDir, { recursive: true });
    const r = spawnSync(bin, ["-o", workDir, track], { encoding: "utf8", stdio: ["ignore", "ignore", "pipe"] });
    if (r.status === 0) dir = find();
  }
  const o = dir ? fromDir(dir) : {};
  return o.vocals ? { file: o.vocals, vocals: "demucs", stems: o } : { file: track, vocals: "mix", stems: {} };
}

export function toWav16(file, out, filter) {
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs > fs.statSync(file).mtimeMs) return out;
  const argv = ["-y", "-loglevel", "error", "-nostdin", "-i", file, "-vn"];
  if (filter) argv.push("-af", filter);
  argv.push("-ar", "16000", "-ac", "1", out);
  execFileSync("ffmpeg", argv);
  return out;
}

// ---------------------------------------------------------------- transcription (DTW token ends)

// -> [{text, start, end}] where `end` is the DTW time of the word's last sounded token and
// `start` is the previous word's end (what a legato word starts on)
export function transcribeDTW(wav, { model, lang = "en", extra = [], bin, workDir, tag }) {
  const preset = dtwPreset(model.name);
  const of = path.join(workDir, `w_${tag}`);
  const argv = ["-m", model.file, "-f", wav, "-ml", "1", "-sow", "-ojf", "-of", of, "-np", "-nfa", "-l", lang, ...extra];
  if (preset) argv.push("-dtw", preset);
  const cached = fs.existsSync(of + ".json") && fs.statSync(of + ".json").mtimeMs > fs.statSync(wav).mtimeMs && fs.statSync(of + ".json").mtimeMs > fs.statSync(model.file).mtimeMs;
  const r = cached ? { status: 0 } : spawnSync(bin, argv, { encoding: "utf8", maxBuffer: 1 << 28 });
  if (r.status !== 0 || !fs.existsSync(of + ".json")) throw new Error(`whisper failed (${model.name}): ${(r.stderr || "").trim().split("\n").pop()}`);
  const j = JSON.parse(fs.readFileSync(of + ".json", "utf8"));
  const words = [];
  const special = (t) => t.id >= 50257;
  for (const s of j.transcription) {
    for (const t of s.tokens || []) {
      if (special(t)) continue;
      const txt = t.text;
      if (!/[\p{L}\p{N}]/u.test(txt) && words.length) { words[words.length - 1].text += txt; continue; }
      const tEnd = preset && t.t_dtw >= 0 ? t.t_dtw / 100 : t.offsets.to / 1000;
      if (/^\s/.test(txt) || !words.length) words.push({ text: txt.trim(), end: tEnd, dtw: !!(preset && t.t_dtw >= 0) });
      else { const w = words[words.length - 1]; w.text += txt; w.end = Math.max(w.end, tEnd); }
    }
  }
  const out = words.filter((w) => /[\p{L}\p{N}]/u.test(w.text) && !/^[\[(*♪]/.test(w.text) && !/[\])*♪]$/.test(w.text));
  let prev = 0;
  for (const w of out) { w.start = Math.min(prev, w.end - 0.02); prev = Math.max(prev, w.end); }
  return out;
}

// ---------------------------------------------------------------- matching lyrics to a transcription

// char-level global alignment: -> per lyric word {end, frac} or null when no char matched
export function matchWords(lyricWords, trWords) {
  const lc = [];
  lyricWords.forEach((w, wi) => { for (const c of norm(w)) lc.push({ c, w: wi }); });
  const tc = [];
  trWords.forEach((w, wi) => {
    const n = norm(w.text);
    for (let k = 0; k < n.length; k++) tc.push({ c: n[k], w: wi, t: w.start + ((k + 0.5) / n.length) * (w.end - w.start), n: n.length });
  });
  const N = lc.length, M = tc.length;
  if (!N || !M) return lyricWords.map(() => null);
  const MATCH = 2, MIS = -1.5, GAP = -1;
  const W = M + 1;
  const S = new Float32Array((N + 1) * W);
  const B = new Uint8Array((N + 1) * W); // 0 diag, 1 skip lyric char, 2 skip transcript char
  for (let j = 1; j <= M; j++) B[j] = 2; // leading transcript chars are free (an intro hallucination)
  for (let i = 1; i <= N; i++) { S[i * W] = i * GAP; B[i * W] = 1; }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      const d = S[(i - 1) * W + j - 1] + (lc[i - 1].c === tc[j - 1].c ? MATCH : MIS);
      const u = S[(i - 1) * W + j] + GAP;
      const l = S[i * W + j - 1] + (i === N ? 0 : GAP * 0.6);
      let best = d, b = 0;
      if (u > best) { best = u; b = 1; }
      if (l > best) { best = l; b = 2; }
      S[i * W + j] = best;
      B[i * W + j] = b;
    }
  }
  let i = N, j = M;
  { let bj = M, bs = -Infinity; for (let jj = 0; jj <= M; jj++) if (S[N * W + jj] > bs) { bs = S[N * W + jj]; bj = jj; } j = bj; }
  const pairs = [];
  while (i > 0) {
    if (j === 0) { i--; continue; }
    const b = B[i * W + j];
    if (b === 0) { if (lc[i - 1].c === tc[j - 1].c) pairs.push([i - 1, j - 1]); i--; j--; }
    else if (b === 1) i--;
    else j--;
  }
  pairs.reverse();
  const per = lyricWords.map((w) => ({ n: 0, tot: norm(w).length, last: null }));
  for (const [li, ti] of pairs) { const p = per[lc[li].w]; p.n++; p.last = tc[ti]; }
  return per.map((p) => {
    if (!p.n) return null;
    const l = p.last, lw = trWords[l.w];
    return { end: l.t + (lw.end - lw.start) / l.n / 2, frac: p.n / Math.max(1, p.tot) };
  });
}

// ---------------------------------------------------------------- vocal onsets (10 ms frames)

const OSR = 16000, OHOP = 160;
export function onsetCurve(file, { vocals = "mix" } = {}) {
  // the voice band; from a mix take the centre channel (the voice is panned centre) and cut the low end
  const filt = vocals === "mix" ? "pan=mono|c0=0.5*c0+0.5*c1,highpass=f=180,lowpass=f=5000" : "pan=mono|c0=0.5*c0+0.5*c1,highpass=f=120,lowpass=f=7000";
  const buf = execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-nostdin", "-i", file, "-vn", "-af", filt, "-ar", String(OSR), "-ac", "1", "-f", "f32le", "-"], { maxBuffer: 1 << 29 });
  const y = new Float32Array(buf.buffer.slice(buf.byteOffset, buf.byteOffset + (buf.length >> 2) * 4));
  const NF = 512, bins = NF / 2 + 1, n = Math.floor(y.length / OHOP), NB = 24;
  const win = new Float64Array(NF);
  for (let i = 0; i < NF; i++) win[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / NF);
  const edges = Array.from({ length: NB + 1 }, (_, k) => 180 * Math.pow(5000 / 180, k / NB));
  const bandOf = new Int8Array(bins).fill(-1);
  for (let b = 1; b < bins; b++) { const f = (b * OSR) / NF; for (let k = 0; k < NB; k++) if (f >= edges[k] && f < edges[k + 1]) { bandOf[b] = k; break; } }
  const re = new Float64Array(NF), im = new Float64Array(NF), bp = new Float64Array(NB), prev = new Float32Array(NB).fill(-100);
  const on = new Float32Array(n), env = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const c = i * OHOP - NF / 2 + OHOP / 2;
    for (let k = 0; k < NF; k++) { const idx = c + k; re[k] = (idx >= 0 && idx < y.length ? y[idx] : 0) * win[k]; im[k] = 0; }
    fft(re, im);
    bp.fill(0);
    for (let b = 1; b < bins; b++) if (bandOf[b] >= 0) bp[bandOf[b]] += re[b] * re[b] + im[b] * im[b];
    let s = 0, e = 0;
    for (let k = 0; k < NB; k++) {
      const db = 10 * Math.log10(bp[k] + 1e-9);
      const d = db - prev[k];
      if (d > 0 && prev[k] > -99) s += d;
      prev[k] = db;
      e += bp[k];
    }
    on[i] = s / NB;
    env[i] = 10 * Math.log10(e + 1e-9);
  }
  const nrm = new Float32Array(n); // each onset against the loudest onset within +-1 s
  for (let i = 0; i < n; i++) { let mx = 0; for (let k = Math.max(0, i - 100); k < Math.min(n, i + 100); k += 4) mx = Math.max(mx, on[k]); nrm[i] = on[i] / (mx + 0.3); }
  return { on, nrm, env, fps: OSR / OHOP, n };
}

// ---------------------------------------------------------------- the aligner

const defaultLog = () => {};

export function alignLyrics(track, { lyricsText, lang = "en", stems, noStems = false, models: want, maxModels = 3, work, bias = 0.08, gap = 1.5, anchorThr = 1.2, dual = true, dualB = 1.3, snapWin = 0.07, log = defaultLog } = {}) {
  if (!fs.existsSync(track)) throw new Error(`track not found: ${track}`);
  const bin = findWhisper();
  const all = listModels(lang);
  let models = want?.length ? all.filter((m) => want.some((w) => m.name === w || m.file === w || m.name.startsWith(w))) : all;
  if (!bin || !models.length) {
    const e = new Error(`no speech-to-text with word timing found (whisper-cli ${bin ? "ok" : "missing"}, ggml models ${models.length ? "ok" : "missing"}). Run \`npx hyperframes transcribe <any audio> --json\` once (it builds whisper.cpp and fetches small.en), or \`brew install whisper-cpp\`; \`node lyrics.mjs models --fetch\` downloads the large-v3-turbo model that times singing best.`);
    e.code = "NO_WHISPER";
    throw e;
  }
  // different models make independent errors: use up to maxModels, the best first
  models = models.slice(0, maxModels);
  const workDir = work ? path.resolve(work) : fs.mkdtempSync(path.join(os.tmpdir(), "rasan-lyrics-"));
  fs.mkdirSync(workDir, { recursive: true });
  const t0 = Date.now();

  log(`vocals: looking for a stem tool (demucs)…`);
  const iso = isolateVocals(track, path.join(workDir, "stems"), { stems, noStems });
  log(`vocals: ${iso.vocals}${iso.vocals === "mix" ? " (no stem tool: working on the mix; install demucs for tighter timing)" : ""}`);

  // inputs for the ensemble
  const inputs = [
    { name: "mix", wav: toWav16(track, path.join(workDir, "mix16.wav")), variants: [[], ["-mc", "0"]] },
    { name: "mixbp", wav: toWav16(track, path.join(workDir, "mixbp16.wav"), "highpass=f=250,lowpass=f=4500"), variants: [[]] },
  ];
  if (iso.vocals !== "mix") inputs.push({ name: "stem", wav: toWav16(iso.file, path.join(workDir, "stem16.wav")), variants: [[], ["-mc", "0"]] });

  // lyric words: the user's text, or (no text given) the transcription itself
  let lines;
  let lyricsSource = "text";
  const runsRaw = [];
  const doRun = (model, inp, extra) => {
    const tag = `${model.name}_${inp.name}${extra.join("") || ""}`.replace(/[^\w.-]/g, "");
    log(`transcribe: ${model.name} on ${inp.name}${extra.length ? " " + extra.join(" ") : ""}`);
    const words = transcribeDTW(inp.wav, { model, lang, extra, bin, workDir, tag });
    return { tag, model: model.name, input: inp.name, words };
  };
  let first;
  if (lyricsText && String(lyricsText).trim()) lines = parseLyricsText(lyricsText);
  else {
    lyricsSource = "transcript";
    first = doRun(models[0], inputs[0], []);
    runsRaw.push(first);
    lines = linesFromTranscript(first.words);
  }
  if (!lines.length) throw new Error("no lyric words to align (empty lyrics text and nothing transcribed)");
  const flat = lines.flatMap((l) => l.words);
  const lineStart = new Set();
  { let k = 0; for (const l of lines) { lineStart.add(k); k += l.words.length; } }

  for (const model of models) for (const inp of inputs) for (const extra of inp.variants) {
    if (first && model === models[0] && inp === inputs[0] && !extra.length) continue;
    try { runsRaw.push(doRun(model, inp, extra)); } catch (e) { log(`  skipped: ${e.message}`); }
  }
  const runs = runsRaw.map((r) => ({ ...r, m: matchWords(flat, r.words) }));
  const usable = runs.filter((r) => r.m.filter(Boolean).length >= 0.4 * flat.length);
  if (!usable.length) throw new Error("the transcription matches too little of the lyrics (wrong text, wrong track, or no singing found)");

  // fuse the boundaries
  const n = flat.length;
  const E = new Array(n).fill(null), spread = new Array(n).fill(0), frac = new Array(n).fill(0), votes = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const v = usable.map((r) => r.m[i]).filter(Boolean);
    if (!v.length) continue;
    const ts = v.map((x) => x.end);
    E[i] = median(ts);
    spread[i] = ts.length > 1 ? median(ts.map((t) => Math.abs(t - E[i]))) : 0.12;
    frac[i] = v.reduce((a, x) => a + x.frac, 0) / v.length;
    votes[i] = v.length / usable.length;
  }
  // words nothing matched: spread between the neighbouring boundaries by syllables
  const interp = E.map((e) => e == null);
  const sy = flat.map(syllables);
  for (let i = 0; i < n; ) {
    if (E[i] != null) { i++; continue; }
    let j = i;
    while (j < n && E[j] == null) j++;
    const a = i > 0 ? E[i - 1] : null;
    const b = j < n ? E[j] : null;
    const tot = sy.slice(i, j).reduce((x, y) => x + y, 0);
    for (let k = i, acc = 0; k < j; k++) {
      acc += sy[k];
      if (a != null && b != null) E[k] = a + ((b - a) * acc) / tot;
      else if (a != null) E[k] = a + 0.2 * acc;
      else E[k] = b - 0.2 * (tot - acc);
    }
    i = j;
  }
  for (let i = 1; i < n; i++) if (E[i] < E[i - 1] + 0.03) E[i] = E[i - 1] + 0.03;

  // refine the starts
  log("refine: vocal onsets");
  const feat = onsetCurve(iso.file, { vocals: iso.vocals === "mix" ? "mix" : "stem" });
  const { on, nrm, fps } = feat;
  const snap = (t, back, fwd, pen = 2, thr = 0.3) => {
    let best = t, bs = -1e9;
    for (let f = Math.max(1, Math.round((t - back) * fps)); f <= Math.min(on.length - 2, Math.round((t + fwd) * fps)); f++) {
      if (!(on[f] >= on[f - 1] && on[f] >= on[f + 1])) continue;
      const s = nrm[f] - pen * Math.abs(f / fps - t);
      if (nrm[f] > thr && s > bs) { bs = s; best = f / fps; }
    }
    return best;
  };
  const onsetNear = (t, w, thr) => { for (let f = Math.max(0, Math.round((t - w) * fps)); f <= Math.min(on.length - 1, Math.round((t + w) * fps)); f++) if (nrm[f] >= thr) return true; return false; };
  const snapScore = (t, back, fwd, pen = 2, thr = 0.3) => {
    let best = t, bs = -1e9;
    for (let f = Math.max(1, Math.round((t - back) * fps)); f <= Math.min(on.length - 2, Math.round((t + fwd) * fps)); f++) {
      if (!(on[f] >= on[f - 1] && on[f] >= on[f + 1])) continue;
      const sc = nrm[f] - pen * Math.abs(f / fps - t);
      if (nrm[f] > thr && sc > bs) { bs = sc; best = f / fps; }
    }
    return { t: best, s: bs };
  };
  const start = new Array(n), snapped = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    const own = E[i] + bias;
    const D = Math.min(1.0, 0.18 * sy[i] + 0.05);
    const A = i > 0 ? E[i - 1] + bias : null;
    const Bt = own - D;
    let t, s0;
    if (A == null) { t = Bt; s0 = snap(t, 0.3, 0.1); }
    else if (Bt - A > gap && !onsetNear(A, 0.12, anchorThr)) { t = Bt; s0 = snap(t, 0.3, 0.1); }
    else if (dual && lineStart.has(i) && Bt - A > 0.25) {
      // a line opens: the previous word's DTW end is early when that word was held, the word's own end
      // minus its duration is late when this word is held: take the stronger onset near either
      const cA = snapScore(A, 0.07, 0.1), cB = snapScore(Bt, 0.3, 0.1);
      t = A;
      s0 = cB.s * dualB > cA.s ? cB.t : cA.t;
    } else { t = A; s0 = snap(t, snapWin, snapWin); }
    snapped[i] = s0 !== t;
    start[i] = s0;
  }
  for (let i = 0; i < n; i++) {
    if (i > 0 && start[i] < start[i - 1] + 0.04) start[i] = start[i - 1] + 0.04;
    start[i] = Math.min(start[i], E[i] + bias - 0.04);
    if (i > 0 && start[i] < start[i - 1] + 0.02) start[i] = start[i - 1] + 0.02;
  }
  const end = new Array(n);
  for (let i = 0; i < n; i++) {
    const own = Math.max(start[i] + 0.08, E[i] + bias);
    const nxt = i + 1 < n ? start[i + 1] : null;
    const sameLine = nxt != null && !lineStart.has(i + 1);
    if (nxt != null && (own >= nxt - 0.2 || (sameLine && nxt - own < 0.6))) end[i] = nxt;
    else if (iso.vocals !== "mix") {
      // a vocal stem shows where the voice drops: 15 dB under the word's level (held notes keep their length)
      const f0 = Math.round(start[i] * fps), f1 = Math.min(feat.env.length - 1, Math.round((nxt != null ? nxt : own + 3) * fps));
      let lvl = -1e9;
      for (let f = f0; f <= Math.min(f1, Math.max(f0, Math.round(own * fps))); f++) lvl = Math.max(lvl, feat.env[f]);
      let e = own;
      for (let f = Math.max(f0, Math.round(own * fps)); f <= f1; f++) { if (feat.env[f] < lvl - 15) { e = f / fps; break; } e = f / fps; }
      end[i] = nxt != null ? Math.min(Math.max(e, own), nxt) : Math.max(e, own);
    } else end[i] = nxt != null ? Math.min(own, nxt) : own;
    if (end[i] < start[i] + 0.05) end[i] = start[i] + 0.05;
  }

  // assemble
  const outLines = [];
  let k = 0, lowCount = 0;
  lines.forEach((l, li) => {
    const words = l.words.map((w) => {
      const i = k++;
      let conf;
      if (interp[i]) conf = 0.2;
      else conf = clamp(0.3 + 0.7 * (1 - Math.min(1, spread[i] / 0.35)) * Math.min(1, 0.25 + frac[i] * votes[i]), 0.25, 1);
      // a long stretch before the word's own end means its start was inferred (held note, pause), not heard
      if (i > 0 && !interp[i]) conf = clamp(conf * (1 - Math.min(0.55, Math.max(0, E[i] - E[i - 1] - (0.18 * sy[i] + 0.05)) / 1.6)), 0.25, 1);
      if (conf < 0.5) lowCount++;
      const o = { w, start: r3(start[i]), end: r3(end[i]), conf: r2(conf) };
      if (interp[i]) o.interpolated = true;
      return o;
    });
    outLines.push({ i: li, text: l.text, start: words[0].start, end: words[words.length - 1].end, words });
  });
  const modelsUsed = [...new Set(usable.map((r) => r.model))];
  return {
    lines: outLines,
    source: { track: path.basename(track), lyrics: lyricsSource, lang, vocals: iso.vocals },
    method: `whisper.cpp DTW token times (${modelsUsed.join(", ")}; ${usable.length} runs: ${[...new Set(usable.map((r) => r.input))].join(" + ")}) fused by median per word; lyric text matched to the transcription at character level; starts = previous boundary + ${bias} s, snapped to vocal onsets (${iso.vocals === "mix" ? "centre-channel voice band of the mix" : "vocal stem"}); pauses placed from the word's own end; unmatched words interpolated (conf 0.2)`,
    stats: { words: n, lines: lines.length, interpolated: interp.filter(Boolean).length, low_conf: lowCount, runs: usable.length, seconds: r3((Date.now() - t0) / 1000) },
    notes: iso.vocals === "mix" ? "No vocal stem was available, so timings come from the full mix; typical error is a few tens of ms at word starts, more where the voice is buried (backing pads, held notes)." : undefined,
  };
}

// no lyrics given: lines from the transcript (gaps, sentence ends, 9 words max)
function linesFromTranscript(tr) {
  const lines = [];
  let cur = [];
  const flush = () => { if (cur.length) lines.push({ text: smart(cur.join(" ")), words: cur.map(smart) }); cur = []; };
  tr.forEach((w, i) => {
    cur.push(w.text);
    const nxt = tr[i + 1];
    if (!nxt || nxt.end - w.end > 1.2 || /[.?!]$/.test(w.text) || (cur.length >= 9) || (/[,;]$/.test(w.text) && cur.length >= 5)) flush();
  });
  flush();
  return lines;
}

// ---------------------------------------------------------------- accuracy check against a ground truth

export function checkAlignment(got, truth) {
  const flat = (j) => (j.lines || []).flatMap((l) => l.words.map((w) => ({ ...w, line: l.i })));
  const A = flat(got), T = flat(truth);
  const na = A.map((w) => norm(w.w)), nt = T.map((w) => norm(w.w));
  // LCS on normalised words, in order
  const N = na.length, M = nt.length;
  const D = new Uint16Array((N + 1) * (M + 1));
  for (let i = 1; i <= N; i++) for (let j = 1; j <= M; j++) D[i * (M + 1) + j] = na[i - 1] === nt[j - 1] ? D[(i - 1) * (M + 1) + j - 1] + 1 : Math.max(D[(i - 1) * (M + 1) + j], D[i * (M + 1) + j - 1]);
  const pairs = [];
  for (let i = N, j = M; i > 0 && j > 0; ) {
    if (na[i - 1] === nt[j - 1]) { pairs.push([i - 1, j - 1]); i--; j--; }
    else if (D[(i - 1) * (M + 1) + j] >= D[i * (M + 1) + j - 1]) i--;
    else j--;
  }
  pairs.reverse();
  const es = pairs.map(([a, b]) => Math.abs(A[a].start - T[b].start) * 1000);
  const ee = pairs.map(([a, b]) => Math.abs(A[a].end - T[b].end) * 1000);
  const signed = pairs.map(([a, b]) => (A[a].start - T[b].start) * 1000);
  const st = (v) => ({ mean: Math.round(v.reduce((x, y) => x + y, 0) / Math.max(1, v.length)), median: Math.round(median(v)), p90: Math.round(pctile(v, 90)), max: Math.round(Math.max(0, ...v)) });
  const within = (v, ms) => r2(v.filter((x) => x <= ms).length / Math.max(1, v.length));
  const worst = pairs.map(([a, b], i) => ({ w: A[a].w, line: A[a].line, got: A[a].start, truth: T[b].start, err_ms: Math.round(signed[i]) })).sort((x, y) => Math.abs(y.err_ms) - Math.abs(x.err_ms)).slice(0, 8);
  return {
    words_got: N, words_truth: M, matched: pairs.length,
    start_error_ms: st(es), end_error_ms: st(ee), bias_ms: Math.round(median(signed)),
    within_50ms: within(es, 50), within_80ms: within(es, 80), within_150ms: within(es, 150),
    worst,
  };
}

// ---------------------------------------------------------------- music hooks (audio.json)

const AFPS = 100;
const ASR = 22000;
const ANF = 1024;

function stftBands(y) {
  const hop = ASR / AFPS; // 220
  const n = Math.floor(y.length / hop) + 1;
  const win = new Float64Array(ANF);
  for (let i = 0; i < ANF; i++) win[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / ANF);
  const bins = ANF / 2 + 1;
  const hz = (b) => (b * ASR) / ANF;
  // band layout: low (<200), mid (200-2000), high (>2000) for the envelopes; kick/snare/hat flux bands
  const inb = (b, lo, hi) => hz(b) >= lo && hz(b) < hi;
  const re = new Float64Array(ANF), im = new Float64Array(ANF);
  const out = { n, rms: new Float32Array(n), low: new Float32Array(n), mid: new Float32Array(n), high: new Float32Array(n),
    kick: new Float32Array(n), sn: new Float32Array(n), snb: new Float32Array(n), hat: new Float32Array(n), vox: new Float32Array(n) };
  const prev = { kick: -100, sn: -100, snb: -100, hat: -100 };
  for (let i = 0; i < n; i++) {
    const c = i * hop - ANF / 2;
    let ss = 0;
    for (let k = 0; k < ANF; k++) { const idx = c + k; const v = idx >= 0 && idx < y.length ? y[idx] : 0; ss += v * v; re[k] = v * win[k]; im[k] = 0; }
    fft(re, im);
    let lo = 0, mi = 0, hi = 0, kk = 0, sn = 0, snb = 0, ht = 0;
    for (let b = 1; b < bins; b++) {
      const p = re[b] * re[b] + im[b] * im[b];
      const f = hz(b);
      if (f < 200) lo += p; else if (f < 2000) mi += p; else hi += p;
      if (f >= 35 && f < 130) kk += p;
      else if (f >= 180 && f < 380) sn += p;
      if (f >= 1800 && f < 6000) snb += p;
      else if (f >= 7000 && f < 11000) ht += p;
    }
    out.rms[i] = Math.sqrt(ss / ANF);
    out.low[i] = Math.sqrt(lo); out.mid[i] = Math.sqrt(mi); out.high[i] = Math.sqrt(hi);
    const flux = (key, p) => { const db = 10 * Math.log10(p + 1e-6); const d = Math.max(0, db - prev[key]); prev[key] = db; return prev[key] > -99 ? d : 0; };
    out.kick[i] = flux("kick", kk);
    out.sn[i] = flux("sn", sn);
    out.snb[i] = flux("snb", snb);
    out.hat[i] = flux("hat", ht);
  }
  return out;
}

function pickPeaks(x, { minGap = 5, win = 60, k = 1.5, floor = 0.1 } = {}) {
  const n = x.length;
  // normalise by the 97th percentile, then adaptive threshold from the local mean
  const p = pctile(Array.from(x), 97) || 1;
  const v = Float32Array.from(x, (q) => q / p);
  const cs = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) cs[i + 1] = cs[i] + v[i];
  const peaks = [];
  for (let i = 2; i < n - 2; i++) {
    if (!(v[i] > v[i - 1] && v[i] >= v[i + 1] && v[i] >= v[i - 2] && v[i] >= v[i + 2])) continue;
    const a = Math.max(0, i - win), b = Math.min(n, i + win);
    const mean = (cs[b] - cs[a]) / (b - a);
    if (v[i] < floor || v[i] < mean * k) continue;
    if (peaks.length && i - peaks[peaks.length - 1][0] < minGap) { if (v[i] > peaks[peaks.length - 1][1]) peaks[peaks.length - 1] = [i, v[i]]; continue; }
    peaks.push([i, v[i]]);
  }
  return peaks;
}

// -> the audio.json of references/lyrics.md
export function analyzeMusic(track, { stems = {}, log = defaultLog } = {}) {
  const vocalsFile = stems.vocals;
  log("tempo, beats, bars, sections");
  const A = analyzeTrack(track, { quick: true });
  log("envelopes and drum onsets");
  const y = decode(track, { sr: ASR });
  const B = stftBands(y);
  // drums from a drum stem when there is one: far cleaner than the band-split of the mix
  const D = stems.drums ? stftBands(decode(stems.drums, { sr: ASR })) : B;
  const dur = y.length / ASR;
  const norm01 = (a, exp = 1) => {
    const p = pctile(Array.from(a), 99.5) || 1;
    return Array.from(a, (v) => r2(Math.pow(clamp(v / p, 0, 1), exp)));
  };
  const env = { rms: norm01(B.rms, 0.8), low: norm01(B.low, 0.8), mid: norm01(B.mid, 0.8), high: norm01(B.high, 0.8) };
  const strength = (peaks) => peaks.map(([i, v]) => [r3(i / AFPS), r2(clamp(v / 1.2, 0, 1))]);
  // thresholds tuned on the pdoom ground truth: a drum stem is clean, the mix needs a stricter pick
  const T = stems.drums ? { kk: 2.0, kf: 0.4, sk: 3.0, sf: 0.8, hk: 2.5, hf: 0.6 } : { kk: 3.5, kf: 0.9, sk: 3.0, sf: 0.9, hk: 2.8, hf: 0.6 };
  const kicks = pickPeaks(D.kick, { minGap: 8, win: 100, k: T.kk ?? 1.7, floor: T.kf ?? 0.3 });
  const snareX = Float32Array.from(D.sn, (v, i) => Math.min(v, D.snb[i]) * 2); // body and noise together
  let snares = pickPeaks(snareX, { minGap: 12, win: 100, k: T.sk ?? 1.7, floor: T.sf ?? 0.3 });
  const kset = kicks.map(([i]) => i);
  snares = snares.filter(([i]) => !kset.some((k) => Math.abs(k - i) <= 1 && D.kick[k] > 1.5 * D.kick[i]));
  const sset = snares.map(([i]) => i);
  let hats = pickPeaks(D.hat, { minGap: 4, win: 50, k: T.hk ?? 1.7, floor: T.hf ?? 0.25 });
  hats = hats.filter(([i]) => !sset.some((s) => Math.abs(s - i) <= 2));
  const onsets = { kick: strength(kicks), snare: strength(snares), hat: strength(hats) };
  let vocal_stem = false;
  if (vocalsFile) {
    log("vocal onsets and envelope");
    const f = onsetCurve(vocalsFile, { vocals: "stem" });
    const vp = pickPeaks(Float32Array.from(f.on), { minGap: 6, win: 100, k: 1.7, floor: 0.3 });
    onsets.vocal = strength(vp);
    const venv = Float32Array.from({ length: B.n }, (_, i) => { const j = Math.min(f.n - 1, i); return Math.pow(10, f.env[j] / 20); });
    env.vocal = norm01(venv, 0.8);
    vocal_stem = true;
  }
  for (const k of ["drums", "bass", "other"]) {
    if (!stems[k]) continue;
    env[k] = norm01(stems.drums && k === "drums" ? D.rms : stftBands(decode(stems[k], { sr: ASR })).rms, 0.8);
  }
  const beats = A.beats.map(r3);
  const downbeats = A.bars.map(r3);
  const sections = A.sections.map((s, i) => ({ name: s.label || `section${i + 1}`, start: r3(s.t0), end: r3(s.t1) }));
  if (sections.length) { sections[0].start = 0; sections[sections.length - 1].end = r3(dur); }
  return {
    duration: r3(dur), bpm: A.bpm, beat_period: r3(A.beat_s), time_signature: 4,
    beats, downbeats, sections, fps: AFPS,
    ...env,
    onsets,
    notes: `Compact music analysis by lyrics.mjs audio: tempo/beats/bars/sections from the track analysis (grid: ${A.grid}); envelopes rms/low(<200 Hz)/mid/high(>2 kHz) at ${AFPS} Hz, 0..1 normalised by the 99.5th percentile; onsets are [time, strength 0..1] from band-split spectral flux: kick (35-130 Hz), snare (180-380 Hz with 1.8-6 kHz noise), hat (7-11 kHz)${stems.drums ? "; drum onsets from the drum stem" : ""}${vocal_stem ? "; vocal onsets and envelope from the vocal stem" : "; no vocal stem, so no vocal onsets"}.`,
  };
}
