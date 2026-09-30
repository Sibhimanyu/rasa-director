#!/usr/bin/env node
// Transitions menu: two scenes of the user's video (in their look) handing off
// through each HyperFrames transition, side by side, looping. It runs the exact
// GSAP templates from the workflow's own registry (product-launch-video /
// faceless-explainer / pr-to-video scripts/lib/transitions.json), so what the user
// picks is what transitions.mjs will inject at build time.
//
//   node transition-menu.mjs --from "Scene A text" --to "Scene B text" \
//     [--preset <look> | --frame <frame.md>] [--aspect 16:9] --out <dir> [--stills]
// Writes <dir>/index.html (+ transitions-mid.png with --stills) and transitions.json:
//   {"cells":[{"letter","id","label","energy","duration_s"}]}   id = the exact transition_in value
import fs from "node:fs";
import path from "node:path";
import { parseArgs, die, readLook, normalizeAspect, esc, googleFontLink, writeFile, chromeScreenshot, chromeDumpDom, gsapInline } from "./lib/common.mjs";
import { resolvePreset, findSkill } from "./lib/hyperframes.mjs";
import { track } from "./lib/report.mjs";

const args = parseArgs();
track("Rendering your scenes handing off, every way", "Transitions menu ready");
if (!args.from || !args.to) die('--from "<scene A text>" and --to "<scene B text>" are required (two consecutive scenes of the video)');
if (!args.out) die("--out required");
const regDir = ["product-launch-video", "faceless-explainer", "pr-to-video"].map(findSkill).find(Boolean);
if (!regDir) die("no HyperFrames workflow with a transition registry is installed (npx hyperframes skills update product-launch-video)");
const REG = JSON.parse(fs.readFileSync(path.join(regDir, "scripts", "lib", "transitions.json"), "utf8"));
const look = readLook(args.frame || (args.preset ? resolvePreset(args.preset) : null));
const [W, H] = normalizeAspect(args.aspect || "16:9").split("x").map(Number);

// the menu: a hard cut, every registry type, and push-slide in two directions
const items = [{ id: "cut", label: "Hard cut", energy: "any", duration_s: 0, tpl: [] }];
for (const t of REG.transitions) {
  if (t.directions && t.directions.length) {
    for (const dir of ["LEFT", "UP"]) items.push({ id: `${t.name} ${dir}`, label: `${t.name} ${dir.toLowerCase()}`, energy: t.energy, duration_s: t.default_duration_s, tpl: dir === "LEFT" || dir === "RIGHT" ? t.gsap_template_horizontal : t.gsap_template_vertical, dir });
  } else items.push({ id: t.name, label: t.name, energy: t.energy, duration_s: t.default_duration_s, tpl: t.gsap_template });
}
const letters = "ABCDEFGHIJ";

const PAGE_W = 1920, PAGE_H = 1080, GAP = 24, PAD = 48, LABEL_H = 46;
const n = items.length;
const cols = W / H <= 0.85 ? Math.min(n, 7) : 4;
const rows = Math.ceil(n / cols);
let cellW = (PAGE_W - PAD * 2 - GAP * (cols - 1)) / cols;
let cellH = cellW * (H / W);
const maxH = (PAGE_H - PAD * 2 - GAP * (rows - 1) - LABEL_H * rows) / rows;
if (cellH > maxH) {
  cellH = maxH;
  cellW = cellH * (W / H);
}
cellW = Math.floor(cellW);
cellH = Math.floor(cellH);

// substitute the registry tokens for one cell (canvas = the cell)
function cellJs(it, i) {
  const dx = it.dir === "RIGHT" ? cellW : -cellW, dy = it.dir === "DOWN" ? cellH : -cellH;
  return it.tpl
    .map((line) =>
      line
        .replaceAll("__OLD__", JSON.stringify(`#a-${i}`))
        .replaceAll("__NEW__", JSON.stringify(`#b-${i}`))
        .replaceAll("__T__", "T")
        .replaceAll("__DUR__", String(it.duration_s))
        .replaceAll("__DXIN__", String(-dx))
        .replaceAll("__DX__", String(dx))
        .replaceAll("__DYIN__", String(-dy))
        .replaceAll("__DY__", String(dy))
    )
    .join("\n        ");
}

const cells = items
  .map(
    (it, i) => `
    <figure>
      <div class="cell" id="cell-${i}">
        <div class="scene a" id="a-${i}"><span>${esc(args.from)}</span></div>
        <div class="scene b" id="b-${i}"><span>${esc(args.to)}</span></div>
      </div>
      <figcaption><b>${letters[i]}</b> ${esc(it.label)}<span>${it.duration_s ? `${it.duration_s}s · ${esc(it.energy)} energy` : "instant"}</span></figcaption>
    </figure>`
  )
  .join("");

const html = `<!doctype html>
<html lang="en"><head><meta charset="UTF-8" />
<title>Transitions: ${esc(args.from)} → ${esc(args.to)}</title>
${gsapInline()}
${googleFontLink(look.font)}
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${PAGE_W}px; height: ${PAGE_H}px; overflow: hidden; background: #0c0c0e; }
  #stage { width: 100%; height: 100%; display: grid; grid-template-columns: repeat(${cols}, ${cellW}px); gap: ${GAP}px; justify-content: center; align-content: center; padding: ${PAD}px; }
  figure { display: flex; flex-direction: column; gap: 8px; }
  .cell { position: relative; width: ${cellW}px; height: ${cellH}px; overflow: hidden; border-radius: 6px; background: #000; }
  .scene { position: absolute; inset: 0; display: grid; place-items: center; padding: 8%; text-align: center; font-family: "${look.font}", Inter, sans-serif; font-weight: ${look.fontWeight}; line-height: 1.05; letter-spacing: -0.02em; font-size: ${Math.round(cellH * 0.12)}px; }
  .scene.a { background: ${look.bg}; color: ${look.ink}; }
  .scene.b { background: ${look.accent}; color: ${look.bg}; }
  figcaption { font: 500 14px/1.3 ui-monospace, "JetBrains Mono", Menlo, monospace; color: #e8e6e1; height: ${LABEL_H - 8}px; }
  figcaption b { display: inline-block; min-width: 1.5em; padding: 1px 6px; margin-right: 6px; background: #e8e6e1; color: #0c0c0e; border-radius: 3px; text-align: center; }
  figcaption span { display: block; color: #8d8a84; font-size: 12px; margin-top: 3px; }
</style></head>
<body>
  <div id="stage" data-composition-id="transitions" data-start="0" data-duration="4" data-width="${PAGE_W}" data-height="${PAGE_H}">${cells}</div>
  <script>
    (function () {
      var standalone = !window.__timelines;
      window.__timelines = window.__timelines || {};
      var master = gsap.timeline({ paused: true });
      var T = 1.4, subs = [];
      ${items
        .map(
          (it, i) => `(function () {
        var tl = gsap.timeline();
        tl.set("#b-${i}", { opacity: 0 }, 0);
        ${it.id === "cut" ? `tl.set("#a-${i}", { opacity: 0 }, T); tl.set("#b-${i}", { opacity: 1 }, T);` : `tl.set("#b-${i}", { opacity: 1 }, T - 0.001);\n        ${cellJs(it, i)}`}
        tl.to({}, { duration: 1.6 }, T + ${it.duration_s});
        master.add(tl, 0); subs.push({ tl: tl, mid: T + ${it.duration_s / 2 || 0.001} });
      })();`
        )
        .join("\n      ")}
      window.__timelines["transitions"] = master;
      master.seek(0);
      document.body.setAttribute("data-md-cells", String(subs.length));
      var q = new URLSearchParams(location.search);
      if (q.get("phase") === "mid") { subs.forEach(function (s) { s.tl.pause(); s.tl.seek(s.mid); }); }
      else if (standalone) { subs.forEach(function (s) { master.remove(s.tl); gsap.globalTimeline.add(s.tl, gsap.globalTimeline.time()); s.tl.repeat(-1).repeatDelay(0.2).play(0); }); }
    })();
  </script>
</body></html>
`;

const out = path.resolve(args.out);
const file = path.join(out, "index.html");
writeFile(file, html);
const dom = chromeDumpDom(file, 5000);
const m = dom.match(/data-md-cells="(\d+)"/);
if (!m || Number(m[1]) !== items.length) die(`transitions page did not render (${m ? m[1] : 0}/${items.length}). Open ${file} in a browser to see the console error.`, 1);
const manifest = { file, registry: path.join(regDir, "scripts", "lib", "transitions.json"), cells: items.map((it, i) => ({ letter: letters[i], id: it.id, label: it.label, energy: it.energy, duration_s: it.duration_s })) };
if (args.stills) {
  const png = path.join(out, "transitions-mid.png");
  chromeScreenshot(`file://${file}?phase=mid`, png, PAGE_W, PAGE_H, 5000);
  manifest.still = png;
}
writeFile(path.join(out, "transitions.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(JSON.stringify(manifest, null, 2));
