// Font staging: HyperFrames renders in a clean headless Chrome, so every font family a
// composition names needs a local .woff2 and an @font-face (lint: font_family_without_font_face).
// Order: families HyperFrames resolves itself → files shipped with a frame preset →
// Google Fonts (latin subset) → Fontshare → give up (caller falls back, with a warning).
import fs from "node:fs";
import path from "node:path";

export const HF_AUTO_FONTS = ["inter", "montserrat", "outfit", "nunito", "oswald", "league gothic", "archivo black", "space mono", "ibm plex mono", "jetbrains mono", "eb garamond", "playfair display", "source code pro", "noto sans jp", "roboto", "open sans", "lato", "poppins"];
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

async function fetchText(url) {
  const r = await fetch(url, { headers: { "user-agent": UA } });
  return r.ok ? r.text() : "";
}
async function save(url, dest) {
  const r = await fetch(url, { headers: { "user-agent": UA } });
  if (!r.ok) return false;
  const buf = Buffer.from(await r.arrayBuffer());
  if (buf.length < 1000) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return true;
}

// -> { family, css, source, files } ; css is "" when HyperFrames resolves the family itself
export async function stageFont(family, weights, projectDir, { presetDir = null, offline = false } = {}) {
  if (!family) return { family: null, css: "", source: "none", files: [] };
  if (HF_AUTO_FONTS.includes(family.toLowerCase())) return { family, css: "", source: "hyperframes", files: [] };
  const fontDir = path.join(projectDir, "assets", "fonts");
  const compact = family.replace(/\s+/g, "");
  const faces = [];
  const have = (w) => faces.some((f) => f.w === w);
  for (const w of weights) {
    const name = `${compact}-${w}.woff2`;
    const dest = path.join(fontDir, name);
    if (!fs.existsSync(dest) && presetDir) {
      const cand = path.join(presetDir, "fonts", name);
      if (fs.existsSync(cand)) { fs.mkdirSync(fontDir, { recursive: true }); fs.copyFileSync(cand, dest); }
    }
    if (fs.existsSync(dest)) faces.push({ w, rel: `assets/fonts/${name}`, source: "local" });
  }
  let source = faces.length ? "local" : null;
  const missing = () => weights.filter((w) => !have(w));
  if (missing().length && !offline) {
    try {
      const css = await fetchText(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(family).replace(/%20/g, "+")}:wght@${missing().join(";")}&display=swap`);
      for (const block of css.split("}")) {
        if (!/\/\* latin \*\//.test(block) && /\/\* [a-z-]+ \*\//.test(block)) continue;
        const wm = block.match(/font-weight:\s*(\d+)/), um = block.match(/url\((https:[^)]+\.woff2)\)/);
        if (!wm || !um || have(Number(wm[1]))) continue;
        const name = `${compact}-${wm[1]}.woff2`;
        if (await save(um[1], path.join(fontDir, name))) { faces.push({ w: Number(wm[1]), rel: `assets/fonts/${name}` }); source = source || "google-fonts"; }
      }
    } catch {}
  }
  if (missing().length && !offline) {
    try {
      const slug = family.toLowerCase().replace(/\s+/g, "-");
      const css = await fetchText(`https://api.fontshare.com/v2/css?f[]=${slug}@${missing().join(",")}&display=swap`); // one family, comma-separated weights
      for (const block of css.split("}")) {
        const wm = block.match(/font-weight:\s*(\d+)/), um = block.match(/url\(['"]?((?:https:)?\/\/[^)'"]+\.woff2)['"]?\)/);
        if (!wm || !um || have(Number(wm[1]))) continue;
        const name = `${compact}-${wm[1]}.woff2`;
        if (await save(um[1].startsWith("//") ? `https:${um[1]}` : um[1], path.join(fontDir, name))) { faces.push({ w: Number(wm[1]), rel: `assets/fonts/${name}` }); source = source || "fontshare"; }
      }
    } catch {}
  }
  if (!faces.length) return { family: null, css: "", source: "unavailable", files: [] };
  faces.sort((a, b) => a.w - b.w);
  return {
    family,
    source,
    files: faces.map((f) => f.rel),
    css: faces.map((f) => `@font-face { font-family: "${family}"; src: url("${f.rel}") format("woff2"); font-weight: ${f.w}; font-style: normal; font-display: block; }`).join("\n  "),
  };
}

// stage several families; returns { css, families: {asked: used}, warnings }
export async function stageFonts(list, projectDir, opts = {}) {
  const warnings = [];
  const used = {};
  const css = [];
  for (const { family, weights } of list) {
    if (!family || used[family] !== undefined) continue;
    const r = await stageFont(family, weights || [400, 500, 700], projectDir, opts);
    if (!r.family) {
      used[family] = "Inter";
      warnings.push(`font "${family}" could not be staged (no local file, not on Google Fonts or Fontshare, or offline); using Inter`);
    } else {
      used[family] = r.family;
      if (r.css) css.push(r.css);
    }
  }
  return { css: css.join("\n  "), families: used, warnings };
}
