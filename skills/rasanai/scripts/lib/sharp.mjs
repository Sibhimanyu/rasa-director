// Scenes the film finish leaves unblurred (stepped looks), and the filter graph that does it. Used by finish.mjs.
import fs from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------- sharp scenes (no blur: stepped looks)
// Windows [t0, t1] in seconds where frames are the centre sub-frame, not an average: from --sharp, from --sharp-scenes
// (1-based clip order in index.html) and from data-finish-blur="off" on a clip in index.html or on the root of its frame file.
export function sharpRanges(project, a = {}) {
  const ranges = [];
  const list = (v) => String(v === true || v == null ? "" : v).split(",").map((x) => x.trim()).filter(Boolean);
  for (const r of list(a.sharp)) { const m = r.match(/^([\d.]+)\s*-\s*([\d.]+)$/); if (m && Number(m[2]) > Number(m[1])) ranges.push([Number(m[1]), Number(m[2]), "--sharp"]); }
  const idx = path.join(project, "index.html");
  if (!fs.existsSync(idx)) return ranges;
  const html = fs.readFileSync(idx, "utf8");
  const clips = [...html.matchAll(/<[a-z][^>]*\bdata-start="([\d.]+)"[^>]*>/gi)].map((m) => ({ tag: m[0], start: Number(m[1]), dur: Number((m[0].match(/data-duration="([\d.]+)"/) || [])[1]) })).filter((c) => c.dur > 0 && /data-composition-(src|id)=/.test(c.tag));
  const wantScenes = new Set(list(a["sharp-scenes"]).map(Number));
  clips.forEach((c, i) => {
    let off = wantScenes.has(i + 1);
    if (!off && !a["no-auto-sharp"]) {
      if (/data-finish-blur="off"/i.test(c.tag)) off = true;
      const src = (c.tag.match(/data-composition-src="([^"]+)"/) || [])[1];
      if (!off && src && fs.existsSync(path.join(project, src))) off = /<[a-z][^>]*\bdata-finish-blur="off"[^>]*>/i.test(fs.readFileSync(path.join(project, src), "utf8"));
    }
    if (off) ranges.push([c.start, c.start + c.dur, `scene ${i + 1}`]);
  });
  return ranges;
}
// the filter graph: the whole film blurred, with the sharp windows laid over it from the centre sub-frame of each frame
export function graphWithSharp(pre, chain, { N, fps, ranges }) {
  if (!ranges.length || N <= 1) return pre + chain;
  const expr = ranges.map(([a, b]) => `between(t,${(a - 0.0001).toFixed(4)},${(b - 0.0001).toFixed(4)})`).join("+");
  return `${pre}split=2[sa][sb];[sa]${chain}[bl];[sb]select='not(mod(n,${N}))',setpts=N/(${fps}*TB)[sh];[bl][sh]overlay=enable='${expr}':eof_action=repeat`;
}

