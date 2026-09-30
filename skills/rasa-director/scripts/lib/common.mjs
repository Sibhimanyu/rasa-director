// Shared helpers for rasa-director scripts. Zero dependencies (Node >= 20).
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

export const SKILL_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
export const PERSONALITY_DIR = path.join(SKILL_DIR, "personalities");
export const GSAP_PATH = path.join(SKILL_DIR, "scripts", "vendor", "gsap.min.js");
// GSAP inlined into generated pages: previews work offline and match the build's GSAP version
export function gsapInline() {
  return `<script>${fs.readFileSync(GSAP_PATH, "utf8").replace(/<\/script/gi, "<\\/script")}</script>`;
}
export const STATE_DIR = process.env.RASA_DIRECTOR_HOME || process.env.RASA_MOTION_HOME || process.env.MOTION_DIRECTOR_HOME || path.join(os.homedir(), ".rasa-director");

// --- args -------------------------------------------------------------------

export function parseArgs(argv = process.argv.slice(2)) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const eq = a.indexOf("=");
      if (eq > -1) out[a.slice(2, eq)] = a.slice(eq + 1);
      else if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) out[a.slice(2)] = argv[++i];
      else out[a.slice(2)] = true;
    } else out._.push(a);
  }
  return out;
}

export function die(msg, code = 1) {
  process.stderr.write(`rasa-director: ${msg}\n`);
  process.exit(code);
}

export function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

export function writeFile(p, s) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s);
}

// --- personalities ------------------------------------------------------------

export function listPersonalities() {
  return fs
    .readdirSync(PERSONALITY_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJSON(path.join(PERSONALITY_DIR, f)))
    .sort((a, b) => a.id.localeCompare(b.id));
}

// Accepts a library id or a path to a personality JSON (e.g. an adjusted
// custom variant emitted by motion-md.mjs for re-preview).
export function getPersonality(id) {
  if (id.endsWith(".json") && fs.existsSync(id)) return readJSON(id);
  const p = path.join(PERSONALITY_DIR, `${id}.json`);
  if (!fs.existsSync(p)) die(`unknown personality "${id}". Known: ${listPersonalities().map((x) => x.id).join(", ")}`);
  return readJSON(p);
}

// --- motion.md frontmatter ----------------------------------------------------
// Each top-level key sits on ONE line with a JSON value. That is valid YAML
// (YAML is a JSON superset) and trivially machine-parsed without a YAML lib.

export function writeFrontmatterDoc(fields, body) {
  const lines = Object.entries(fields).map(([k, v]) => `${k}: ${JSON.stringify(v)}`);
  return `---\n${lines.join("\n")}\n---\n\n${body.trim()}\n`;
}

export function readFrontmatterDoc(text) {
  text = text.replace(/\r\n/g, "\n");
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error("no frontmatter");
  const fields = {};
  for (const line of m[1].split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const i = line.indexOf(":");
    const key = line.slice(0, i).trim();
    const raw = line.slice(i + 1).trim();
    try {
      fields[key] = JSON.parse(raw);
    } catch {
      try {
        fields[key] = JSON.parse(raw.replace(/\s+#.*$/, "")); // tolerate a trailing # comment
      } catch {
        fields[key] = raw.replace(/^["']|["']$/g, "");
      }
    }
  }
  return { fields, body: m[2] };
}

// --- eases --------------------------------------------------------------------

// "expo.out" -> {family:"expo", dir:"out"}; "back.out(1.7)" -> {family:"back", dir:"out"}
// "none"/"linear" -> {family:"none", dir:"none"}; "steps(5)" -> {family:"steps", dir:"none"}
export function parseEase(e) {
  if (e == null) return { family: "implicit", dir: "implicit", raw: e };
  const s = String(e).trim().toLowerCase();
  if (s === "none" || s === "linear" || s === "power0" || s.startsWith("power0.")) return { family: "none", dir: "none", raw: s };
  if (s.startsWith("steps")) return { family: "steps", dir: "none", raw: s };
  const m = s.match(/^([a-z0-9]+)(?:\.(inout|in|out))?/);
  if (!m) return { family: s, dir: "out", raw: s };
  // GSAP: a bare family ("power2") defaults to .out
  return { family: m[1], dir: m[2] || "out", raw: s };
}

export function sameEase(a, b) {
  const x = parseEase(a);
  const y = parseEase(b);
  return x.family === y.family && x.dir === y.dir;
}

// --- aspect -------------------------------------------------------------------

export const ASPECTS = {
  "16:9": "1920x1080",
  "9:16": "1080x1920",
  "1:1": "1080x1080",
  "4:5": "1080x1350",
};

export function normalizeAspect(a) {
  if (!a) return "1920x1080";
  const s = String(a).trim().toLowerCase().replace(/\s/g, "");
  if (/^\d+x\d+$/.test(s)) return s;
  if (ASPECTS[s]) return ASPECTS[s];
  const aliases = {
    landscape: "16:9", youtube: "16:9", website: "16:9", desktop: "16:9",
    vertical: "9:16", portrait: "9:16", reels: "9:16", tiktok: "9:16", shorts: "9:16", story: "9:16",
    square: "1:1", feed: "1:1", instagram: "1:1",
  };
  if (aliases[s]) return ASPECTS[aliases[s]];
  die(`cannot normalize aspect "${a}". Use 16:9, 9:16, 1:1, 4:5 or WxH.`);
}

// --- look (frame.md) -------------------------------------------------------------

const DEFAULT_LOOK = {
  bg: "#101014",
  ink: "#f4f1ea",
  accent: "#ff5a36",
  muted: "#8a8780",
  font: "Inter",
  fontWeight: 700,
  source: "default",
};

// Best-effort extraction of bg / ink / accent / display font from a HyperFrames
// frame.md (or preset FRAME.md). The frontmatter is YAML; we only need a few
// flat values, so regexes are enough and avoid a YAML dependency.
export function readLook(framePath) {
  if (!framePath) return { ...DEFAULT_LOOK };
  if (!fs.existsSync(framePath)) die(`frame file not found: ${framePath}`);
  const text = fs.readFileSync(framePath, "utf8");
  const fm = (text.match(/^---\n([\s\S]*?)\n---/) || [, text])[1];

  const colors = {};
  const colorBlock = fm.match(/\ncolors:\n((?:[ \t]+.*\n?)+)/);
  if (colorBlock) {
    for (const line of colorBlock[1].split("\n")) {
      const m = line.match(/^\s+([\w-]+):\s*["']?(#[0-9a-fA-F]{3,8})/);
      if (m) colors[m[1].toLowerCase()] = m[2];
    }
  }
  const names = Object.keys(colors);
  const lum = (hex) => {
    const h = hex.replace("#", "");
    const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h.slice(0, 6);
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(f.slice(i, i + 2), 16) / 255);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const pick = (patterns) => names.find((n) => patterns.some((p) => p.test(n)));
  const bgName = pick([/^(bg|background|canvas|paper|ground|surface|cream|parchment|base)/, /bg|paper|canvas|cream/]);
  const inkName = pick([/^(ink|text|fg|foreground|black|charcoal)/, /ink|text/]);
  let bg = bgName ? colors[bgName] : null;
  let ink = inkName ? colors[inkName] : null;
  if (!bg && names.length) bg = colors[names.reduce((a, b) => (lum(colors[a]) > lum(colors[b]) ? a : b))];
  if (!ink && names.length) ink = colors[names.reduce((a, b) => (lum(colors[a]) < lum(colors[b]) ? a : b))];
  if (bg && ink && Math.abs(lum(bg) - lum(ink)) < 0.35) {
    // too little contrast: pick the extreme opposite of bg
    ink = colors[names.reduce((a, b) => (Math.abs(lum(colors[a]) - lum(bg)) > Math.abs(lum(colors[b]) - lum(bg)) ? a : b))];
  }
  const sat = (hex) => {
    const h = hex.replace("#", "");
    const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h.slice(0, 6);
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(f.slice(i, i + 2), 16) / 255);
    return Math.max(r, g, b) - Math.min(r, g, b);
  };
  const accentCandidates = names.filter((n) => colors[n] !== bg && colors[n] !== ink);
  const accentName =
    pick([/^(accent|primary|brand|highlight|signal|voltage)/]) ||
    accentCandidates.sort((a, b) => sat(colors[b]) - sat(colors[a]))[0];

  // display font: prefer display/headline/title entries, else first fontFamily
  let font = null;
  let fontWeight = 700;
  for (const key of ["display-hero", "display", "headline-xl", "headline", "title", "h1"]) {
    const m = fm.match(new RegExp(`\\n\\s+${key}:\\s*\\{[^}]*fontFamily:\\s*["']([^"']+)["'][^}]*\\}`));
    if (m) {
      font = m[1];
      const w = m[0].match(/weight:\s*(\d{3})/);
      if (w) fontWeight = Number(w[1]);
      break;
    }
  }
  if (!font) {
    const m = fm.match(/fontFamily:\s*["']([^"']+)["']/);
    if (m) font = m[1];
  }

  const defaulted = [!names.length && "colors", !font && "font"].filter(Boolean);
  if (defaulted.length) process.stderr.write(`rasa-director: ${framePath}: no ${defaulted.join(" or ")} found (looked for hex values under an indented "colors:" block and a fontFamily in the typography entries); using the default ${defaulted.join(" and ")} for previews\n`);
  return {
    defaulted,
    bg: bg || DEFAULT_LOOK.bg,
    ink: ink || DEFAULT_LOOK.ink,
    accent: accentName ? colors[accentName] : DEFAULT_LOOK.accent,
    muted: DEFAULT_LOOK.muted,
    font: font || DEFAULT_LOOK.font,
    fontWeight,
    source: framePath,
  };
}

// --- chrome -------------------------------------------------------------------

export function chromePath() {
  if ((process.env.RASA_DIRECTOR_CHROME || process.env.RASA_MOTION_CHROME || process.env.MOTION_DIRECTOR_CHROME)) return (process.env.RASA_DIRECTOR_CHROME || process.env.RASA_MOTION_CHROME || process.env.MOTION_DIRECTOR_CHROME);
  try {
    const out = execFileSync("npx", ["--yes", "hyperframes", "browser", "path"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
    const line = out.trim().split("\n").pop();
    if (line && fs.existsSync(line)) return line;
  } catch {}
  const mac = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ];
  for (const p of mac) if (fs.existsSync(p)) return p;
  die("no Chrome found. Run `npx hyperframes browser ensure` or set RASA_DIRECTOR_CHROME.");
}

// Headless Chrome can hang forever on a page whose virtual time never settles (an open
// network stream, a runaway timer), so every launch has a hard wall-clock limit and is
// killed outright when it passes it, instead of blocking the calling script.
function runChrome(argv, opts, budgetMs, what) {
  try {
    return execFileSync(chromePath(), argv, { ...opts, timeout: budgetMs + 30000, killSignal: "SIGKILL" });
  } catch (e) {
    if (e.code === "ETIMEDOUT" || e.signal === "SIGKILL") {
      // thrown (not die) so callers like obey can record "could not run" for one file;
      // uncaught, Node prints just this line (stack replaced) and exits 1
      const err = new Error(`headless Chrome did not finish ${what} within ${Math.round((budgetMs + 30000) / 1000)}s and was stopped (the page never settled: an open connection or a runaway script)`);
      err.stack = `rasa-director: ${err.message}`;
      throw err;
    }
    throw e;
  }
}

export function chromeDumpDom(file, budgetMs = 8000) {
  return runChrome(
    ["--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars", `--virtual-time-budget=${budgetMs}`, "--dump-dom", `file://${path.resolve(file)}`],
    { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], maxBuffer: 64 * 1024 * 1024 },
    budgetMs,
    `loading ${path.basename(file)}`
  );
}

export function chromeScreenshot(url, outPng, width, height, budgetMs = 8000) {
  runChrome(
    [
      "--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
      `--window-size=${width},${height}`, `--virtual-time-budget=${budgetMs}`,
      `--screenshot=${path.resolve(outPng)}`, url,
    ],
    { stdio: ["ignore", "ignore", "ignore"] },
    budgetMs,
    `a screenshot of ${path.basename(outPng)}`
  );
}

export function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export function googleFontLink(font) {
  const system = ["inter", "system-ui", "sans-serif", "serif", "monospace", "helvetica", "arial"];
  if (system.includes(font.toLowerCase()) && font.toLowerCase() !== "inter") return "";
  const fam = font.trim().replace(/\s+/g, "+");
  return `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${fam}:wght@400;500;600;700;800;900&display=swap">`;
}
