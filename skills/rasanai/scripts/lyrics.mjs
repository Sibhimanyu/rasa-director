#!/usr/bin/env node
// Lyric videos: word-level lyric timing and the music's hooks, as JSON a composition can read.
// Pure Node + ffmpeg + whisper.cpp (no Python, no npm); demucs makes it tighter when installed.
// The playbook: references/lyrics.md. The browser side: stage3d/rasan-music.js (window.RasanMusic).
//
//   node lyrics.mjs align --track <audio> [--lyrics <text, one lyric line per line>] [--lang en]
//        [--stems <vocals.wav>] [--no-stems] [--models small.en,large-v3-turbo] [--work <dir>] --out <lyrics.json>
//       -> {lines:[{i,text,start,end,words:[{w,start,end,conf}]}], source, method, stats}
//   node lyrics.mjs audio --track <audio> [--stems <vocals.wav>] [--no-stems] [--work <dir>] --out <audio.json>
//       -> {duration,bpm,beats,downbeats,sections,fps:100,rms,low,mid,high,[vocal],onsets:{kick,snare,hat,[vocal]}}
//   node lyrics.mjs check --lyrics <lyrics.json> --truth <lyrics.json>
//       -> mean/median/p90 absolute word start (and end) error in ms, worst words
//   node lyrics.mjs models [--fetch]      -> the speech models found; --fetch downloads large-v3-turbo (q5, 574 MB)
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parseArgs, die, readJSON, writeFile } from "./lib/common.mjs";
import { requireTools } from "./lib/audio.mjs";
import { alignLyrics, analyzeMusic, checkAlignment, listModels, findWhisper, findStemmer, isolateVocals } from "./lib/lyrics.mjs";

const args = parseArgs();
const cmd = args._[0];
const log = (m) => process.stderr.write(`lyrics: ${m}\n`);
const emit = (o) => console.log(JSON.stringify(o, null, 2));

function need(flag) {
  if (!args[flag] || args[flag] === true) die(`--${flag} is required`);
  return String(args[flag]);
}

function workDir() {
  return args.work ? path.resolve(String(args.work)) : null;
}

function main() {
  if (!cmd || cmd === "help" || args.help) {
    console.log(fs.readFileSync(new URL(import.meta.url), "utf8").split("\n").filter((l) => l.startsWith("//")).map((l) => l.slice(3)).join("\n"));
    return;
  }
  if (cmd === "models") {
    const found = listModels(String(args.lang || "en"));
    if (args.fetch) {
      const dir = path.join(os.homedir(), ".cache", "hyperframes", "whisper", "models");
      fs.mkdirSync(dir, { recursive: true });
      const name = "ggml-large-v3-turbo-q5_0.bin";
      const dest = path.join(dir, name);
      if (fs.existsSync(dest)) return emit({ ok: true, already: dest });
      return fetch(`https://huggingface.co/ggerganov/whisper.cpp/resolve/main/${name}`, { redirect: "follow" }).then(async (r) => {
        if (!r.ok) die(`download failed: HTTP ${r.status}`);
        const buf = Buffer.from(await r.arrayBuffer());
        fs.writeFileSync(dest, buf);
        emit({ ok: true, downloaded: dest, bytes: buf.length });
      });
    }
    return emit({ whisper: findWhisper(), demucs: findStemmer(), models: found.map((m) => ({ name: m.name, file: m.file, mb: Math.round(m.size / 1e6) })), note: found.length ? "align uses up to 3 of these, best first (--models picks)" : "no model: run `npx hyperframes transcribe <audio>` once, or `lyrics.mjs models --fetch`" });
  }
  if (cmd === "check") {
    const got = readJSON(need("lyrics"));
    const truth = readJSON(need("truth"));
    return emit(checkAlignment(got, truth));
  }
  requireTools();
  if (cmd === "align") {
    const track = path.resolve(need("track"));
    const lyricsText = args.lyrics && args.lyrics !== true ? fs.readFileSync(String(args.lyrics), "utf8") : undefined;
    const models = args.models && args.models !== true ? String(args.models).split(",") : undefined;
    const res = alignLyrics(track, {
      lyricsText, lang: String(args.lang || "en"), stems: args.stems && args.stems !== true ? String(args.stems) : undefined,
      noStems: !!args["no-stems"], models, maxModels: Number(args["max-models"] || 3), work: workDir(), log,
      bias: args.bias != null ? Number(args.bias) : undefined, gap: args.gap != null ? Number(args.gap) : undefined, dual: args["no-dual"] ? false : undefined, dualB: args["dual-b"] != null ? Number(args["dual-b"]) : undefined, anchorThr: args["anchor-thr"] != null ? Number(args["anchor-thr"]) : undefined,
    });
    const out = args.out && args.out !== true ? path.resolve(String(args.out)) : null;
    if (out) writeFile(out, JSON.stringify(res, null, 1) + "\n");
    return emit({ ok: true, out, source: res.source, stats: res.stats, method: res.method, low_confidence: res.lines.flatMap((l) => l.words.filter((w) => w.conf < 0.5).map((w) => `${w.w}@${w.start}`)).slice(0, 40) });
  }
  if (cmd === "audio") {
    const track = path.resolve(need("track"));
    const wd = workDir() || fs.mkdtempSync(path.join(os.tmpdir(), "rasan-audio-"));
    const iso = isolateVocals(track, path.join(wd, "stems"), { stems: args.stems && args.stems !== true ? String(args.stems) : undefined, noStems: !!args["no-stems"] });
    const vocalsFile = iso.vocals !== "mix" ? iso.file : null;
    const res = analyzeMusic(track, { stems: iso.stems, log });
    const out = args.out && args.out !== true ? path.resolve(String(args.out)) : null;
    if (out) writeFile(out, JSON.stringify(res) + "\n");
    return emit({ ok: true, out, duration: res.duration, bpm: res.bpm, beats: res.beats.length, downbeats: res.downbeats.length, sections: res.sections, onsets: Object.fromEntries(Object.entries(res.onsets).map(([k, v]) => [k, v.length])), vocal_stem: !!vocalsFile, drum_stem: !!iso.stems.drums, bytes: out ? fs.statSync(out).size : undefined });
  }
  die(`unknown command: ${cmd} (align | audio | check | models)`);
}

try {
  const r = main();
  if (r && typeof r.then === "function") r.catch((e) => die(e.message, e.code === "NO_WHISPER" ? 3 : 1));
} catch (e) {
  die(e.message, e.code === "NO_WHISPER" ? 3 : 1);
}
