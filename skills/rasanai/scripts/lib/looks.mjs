// Design directions ("looks"): a visual style from the taxonomy made concrete as a
// palette by role, a type pairing, and shape / stroke / shadow / texture values, ready
// to render as a board and to write as frame.md. Many more than the frame presets:
// every visual style × palettes (its own signature colors, HyperFrames' 72 palettes,
// the color taxonomy) × type pairings (taxonomy/looks/type-pairings.json).
import fs from "node:fs";
import path from "node:path";
import { loadTaxonomy, TAXONOMY_DIR } from "./taxonomy.mjs";
import { findSkill } from "./hyperframes.mjs";
import { luminance, contrast, chroma, parseColor } from "./design-md.mjs";
import { suggest } from "./direction.mjs";

const hexes = (s) => [...new Set([...String(s).matchAll(/#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g)].map((m) => parseColor(m[0]).hex))];

// ---------------------------------------------------------------- palettes
export function loadPalettes() {
  const out = [];
  const dir = findSkill("hyperframes-creative") && path.join(findSkill("hyperframes-creative"), "palettes");
  if (dir && fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md"))) {
      const text = fs.readFileSync(path.join(dir, f), "utf8");
      const mood = f.replace(/\.md$/, "");
      text.split("\n").filter((l) => /^#[0-9a-f]{6}(\s+#[0-9a-f]{6})+\s*$/i.test(l.trim())).forEach((l, i) => out.push({ id: `${mood}-${i + 1}`, mood, source: "hyperframes", colors: hexes(l) }));
    }
  }
  const T = loadTaxonomy();
  for (const o of (T.byId.color || { options: [] }).options) if (o.palette && o.palette.length >= 3) out.push({ id: `color-${o.id}`, mood: o.id, source: "taxonomy", colors: o.palette.map((h) => h.toLowerCase()), term: o.term });
  return out;
}

// roles for a raw palette on a light or dark ground; canvasHint wins when given
export function rolePalette(colors, { ground = "auto", canvasHint = null } = {}) {
  const cs = [...new Set(colors)].filter(Boolean);
  if (cs.length < 2) return null;
  const neutralish = (h) => chroma(h) < 0.2;
  let canvas = canvasHint && cs.includes(canvasHint) ? canvasHint : null;
  if (!canvas) {
    const light = cs.filter((h) => luminance(h) > 0.6).sort((a, b) => chroma(a) - chroma(b) || luminance(b) - luminance(a));
    const dark = cs.filter((h) => luminance(h) < 0.06).sort((a, b) => luminance(a) - luminance(b));
    if (ground === "dark") canvas = dark[0] || null;
    else if (ground === "light") canvas = light.find(neutralish) || light[0] || null;
    else canvas = light.find(neutralish) || dark[0] || light[0] || null;
  }
  if (!canvas) canvas = ground === "dark" ? "#0e0e10" : "#f6f4ef";
  const rest = cs.filter((h) => h !== canvas);
  let ink = rest.filter(neutralish).sort((a, b) => contrast(b, canvas) - contrast(a, canvas))[0];
  if (!ink || contrast(ink, canvas) < 4.5) ink = luminance(canvas) > 0.4 ? "#111111" : "#f5f5f2";
  const others = rest.filter((h) => h !== ink);
  const accent = others.filter((h) => contrast(h, canvas) >= 2.2).sort((a, b) => chroma(b) - chroma(a))[0] || others.sort((a, b) => chroma(b) - chroma(a))[0] || ink;
  const remain = others.filter((h) => h !== accent);
  const surface = remain.filter((h) => Math.abs(luminance(h) - luminance(canvas)) < 0.18 && chroma(h) < 0.3)[0] || null;
  const support = remain.filter((h) => h !== surface).slice(0, 3);
  return { canvas, ink, accent, surface, muted: null, support };
}

// ---------------------------------------------------------------- style traits
const MOODS = [
  [/luxur|cinematic|premium|noir|fashion/, ["dark-premium", "jewel-rich"]],
  [/neon|cyber|vapor|synth|y2k|acid|hud|sci-fi|holograph|futur/, ["neon-electric", "dark-premium"]],
  [/pastel|kawaii|soft|clay|toy|gel|inflat|child|sticker/, ["pastel-soft", "bold-energetic"]],
  [/earth|organic|handmade|paper|craft|sketch|doodle|watercolor|folk|documentary/, ["nature-earth", "warm-editorial"]],
  [/editorial|print|riso|screen|halftone|zine|xerox|photocopy|collage|scrapbook/, ["warm-editorial", "bold-energetic"]],
  [/corporate|saas|startup|clean|minimal|swiss|modernist|technical/, ["clean-corporate", "monochrome"]],
  [/memphis|pop|comic|bauhaus|constructiv|playful|mascot|brutal|punk|graffiti|psychedel/, ["bold-energetic", "neon-electric"]],
  [/mono|duotone|grayscale|black/, ["monochrome"]],
  [/glass|chrome|metal|liquid|glossy|crystal/, ["dark-premium", "neon-electric"]],
];
const TYPE_KEYS = [
  [/pixel|8-bit|bitmap/, "pixel"], [/monospace|\bmono\b|terminal|code/, "monospace"], [/handwrit|marker|script|hand-lettered|brush lettering/, "handwritten"],
  [/didone|high-contrast serif|bodoni|fashion serif/, "high-contrast-serif"], [/slab/, "slab-serif"], [/serif/, "serif-editorial"],
  [/condensed|compressed|narrow/, "condensed"], [/extended|wide sans|wide display|expanded/, "extended"], [/rounded/, "rounded"],
  [/neo-grotesk|helvetica|univers|neue haas/, "neo-grotesk"], [/grotesk|grotesque|akzidenz/, "grotesk"], [/geometric/, "geometric-sans"], [/humanist/, "humanist-sans"],
];
const LAYOUTS = [
  [/luxur|cinematic|fashion|extreme-minimal|warm-minimal|editorial|art-deco|documentary|monochrome|duotone/, "poster"],
  [/swiss|modernist|bauhaus|constructiv|technical|corporate|saas|clean-minimal|isometric|data|grid/, "grid"],
  [/brutal|sticker|comic|playful|doodle|scrapbook|collage|punk|zine|memphis|kawaii|mascot|childlike|toy|clay/, "stack"],
  [/hud|sci-fi|futur|cyber|synth|retro-futur|holograph|web-1|pixel|glitch|vapor/, "hud"],
  [/pop|acid|psychedel|y2k|neon|gradient|liquid|gel|inflat|chrome|glossy|halftone|risograph|screen-print|graffiti/, "bleed"],
];
export function styleTraits(o) {
  const t = `${o.looks || ""} ${o.prompt || ""}`.toLowerCase();
  const radius = /no (shadows?, )?(gradients?, )?radii|radius 0\b|radii 0\b(?!-)|sharp (corners|0)/.test(t) ? 0 : (() => {
    const m = t.match(/radi(?:us|i)[^0-9]{0,12}(\d+)(?:\s*-\s*(\d+))?\s*px/) || t.match(/(\d+)(?:\s*-\s*(\d+))?\s*px (?:corner )?radi/);
    if (m) return m[2] ? Math.round((Number(m[1]) + Number(m[2])) / 2) : Number(m[1]);
    return /pill|blob|rounded|soft|inflat|clay|bubbl/.test(t) ? 20 : 8;
  })();
  const bm = t.match(/(\d+(?:\.\d+)?)\s*px\s+(?:solid\s+)?(?:#[0-9a-f]{3,6}\s+|black\s+)?(?:border|outline|stroke|rule)/) || t.match(/border[^.;]{0,20}?(\d+(?:\.\d+)?)\s*px/);
  const border = /no (border|outline)/.test(t) ? 0 : bm ? Math.min(6, Number(bm[1])) : /hairline|fine .*rule/.test(t) ? 1 : 0;
  const sm = (o.prompt || "").match(/box-shadow:\s*([^;)]+(?:\([^)]*\))?[^;)]*)/i);
  let shadow = "none";
  if (sm) shadow = sm[1].trim().replace(/[.,]$/, "");
  else if (/hard (un-blurred )?offset|offset (drop )?shadow/.test(t)) shadow = "6px 6px 0 var(--ink)";
  else if (/soft (diffuse )?shadow|elevation|layered shadow/.test(t) && !/no shadow/.test(t)) shadow = "0 12px 32px rgba(0,0,0,.14)";
  else if (/glow/.test(t) && !/no glow/.test(t)) shadow = "0 0 24px color-mix(in srgb, var(--accent) 55%, transparent)";
  const texture = /grain|noise|speckl|film/.test(t) ? "grain" : /halftone|dot screen/.test(t) ? "halftone" : /scanline|crt/.test(t) ? "scanlines" : /paper|fiber/.test(t) ? "paper" : "none";
  const typeClasses = [...new Set(TYPE_KEYS.filter(([re]) => re.test(t)).map(([, id]) => id))];
  const moodKey = `${o.id} ${o.family || ""} ${t.slice(0, 400)}`;
  const moods = (MOODS.find(([re]) => re.test(moodKey)) || [null, ["clean-corporate", "bold-energetic"]])[1];
  const canvasHint = ((o.prompt || "").match(/\bon (?:an? )?(?:[a-z-]+ )?(#[0-9a-fA-F]{6})/) || (o.prompt || "").match(/(?:ground|paper|background|canvas)[^#.]{0,20}(#[0-9a-fA-F]{6})/i) || [])[1];
  const layout = (LAYOUTS.find(([re]) => re.test(`${o.id} ${o.family || ""}`)) || [null, "split"])[1];
  return { radius: Math.min(radius, 40), border, shadow, texture, typeClasses, moods, layout, palette: hexes(o.prompt || ""), canvasHint: canvasHint ? canvasHint.toLowerCase() : null };
}

// ---------------------------------------------------------------- generator
function rng(seed) {
  let h = 2166136261;
  for (const ch of String(seed)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
}
export function loadPairings() {
  return JSON.parse(fs.readFileSync(path.join(TAXONOMY_DIR, "looks", "type-pairings.json"), "utf8")).pairings;
}

// picks: taxonomy picks so far; brand: normalized brand tokens (design-md) when the project has one
export function generateLooks({ picks = {}, count = 6, seed = "rasa", brand = null, recent = [], ground = "auto" } = {}) {
  const T = loadTaxonomy();
  const VS = T.byId["visual-style"];
  const R = rng(seed);
  const pairings = loadPairings();
  const palettes = loadPalettes();
  const pickedStyles = [].concat(picks["visual-style"] || []);
  const pickedType = [].concat(picks.typography || []);
  // which styles: the user's, else coherent candidates from distinct families, away from the generic default
  let styles = pickedStyles.map((id) => VS.options.find((o) => o.id === id)).filter(Boolean);
  if (!styles.length) {
    const ranked = suggest("visual-style", picks, { count: VS.options.length, recent, seed }).candidates;
    const seenFam = new Set();
    for (const c of ranked) {
      const o = VS.options.find((x) => x.id === c.id);
      if (c.generic || seenFam.has(o.family)) continue;
      seenFam.add(o.family);
      styles.push(o);
      if (styles.length === count) break;
    }
  }
  const looks = [];
  const usedPairs = new Set();
  const letters = "ABCDEFGHIJ";
  for (let i = 0; i < count; i++) {
    const style = styles[i % styles.length];
    const tr = styleTraits(style);
    const variant = Math.floor(i / styles.length); // 0 for the first pass over the styles
    // palette
    let roles, paletteSource;
    if (brand) {
      // brand-locked: the brand's own colors, but the ground rotates (its canvas, its accent as a color field, its surface)
      const b = brand.roles;
      const base = { canvas: b.canvas, ink: b.ink, accent: b.accent || b.ink, surface: b.surface, muted: b.muted, support: b.support || [] };
      const grounds = [
        { ...base, _ground: "the brand's canvas" },
        b.accent && contrast(b.accent, b.ink) >= 3 ? { ...base, canvas: b.accent, accent: b.ink, surface: b.canvas, _ground: "the brand accent as the ground" } : null,
        b.accent && contrast(b.accent, b.canvas) >= 3 ? { ...base, canvas: b.accent, ink: b.canvas, accent: b.ink, surface: b.canvas, _ground: "the brand accent as the ground" } : null,
        b.surface && contrast(b.surface, b.ink) >= 4.5 ? { ...base, canvas: b.surface, surface: b.canvas, _ground: "the brand surface" } : null,
      ].filter(Boolean);
      const g = grounds[i % grounds.length];
      paletteSource = `brand colors on ${g._ground}`;
      delete g._ground;
      roles = g;
    } else if (tr.palette.length >= 3 && variant === 0) {
      roles = rolePalette(tr.palette, { canvasHint: tr.canvasHint, ground });
      paletteSource = `the style's signature palette`;
    } else {
      const pool = palettes.filter((p) => tr.moods.includes(p.mood));
      const p = (pool.length ? pool : palettes)[Math.floor(R() * (pool.length || palettes.length))];
      roles = rolePalette(p.colors, { ground: ground === "auto" ? (i % 2 ? "dark" : "light") : ground });
      paletteSource = p.term ? `color: ${p.term}` : `HyperFrames palette ${p.id}`;
    }
    // type
    let type;
    if (brand && brand.fonts.display) {
      type = { display: brand.fonts.display, body: brand.fonts.body || brand.fonts.display, mono: brand.fonts.mono || null, id: "brand", classes: [] };
    } else {
      const want = pickedType.length ? pickedType : tr.typeClasses;
      const pool0 = pairings.filter((p) => p.classes.some((c) => want.includes(c)));
      // variants of one style never repeat a pairing (fall back to any unused pairing, then any)
      const unused = (list) => list.filter((p) => !usedPairs.has(`${style.id}|${p.id}`));
      const pool = unused(pool0).length ? unused(pool0) : unused(pairings).length ? unused(pairings) : pairings;
      const p = pool[Math.floor(R() * pool.length)];
      usedPairs.add(`${style.id}|${p.id}`);
      type = { display: p.display, body: p.body, mono: p.mono || null, id: p.id, classes: p.classes };
    }
    const typeTerm = (T.byId.typography.options.find((o) => o.id === (pickedType[0] || type.classes[0])) || {}).term;
    looks.push({
      id: letters[i],
      name: `${style.term}${variant ? ` (variant ${variant + 1})` : ""}`,
      visual_style: { id: style.id, term: style.term, what: style.what },
      palette: roles,
      palette_source: paletteSource,
      type: { display: type.display, body: type.body, mono: type.mono, pairing: type.id, class: typeTerm || null },
      radius: tr.radius,
      layout: tr.layout,
      border: tr.border,
      shadow: tr.shadow,
      texture: tr.texture,
      picks: { "visual-style": [style.id], ...(type.classes[0] && !brand ? { typography: [pickedType[0] || type.classes[0]] } : {}) },
      prompt: style.prompt,
    });
  }
  return looks;
}

// the brand-token shape design-md's toFrameMd writes from
export function lookAsBrand(L, sourceLabel = "look", brand = null) {
  // brand-locked: the brand's rules and status colors travel with the look
  const statusCols = brand ? brand.colors.filter((c) => (brand.roles.status || []).includes(c.hex)) : [];
  return {
    source: sourceLabel,
    format: "look",
    name: L.name,
    overview: `${L.visual_style.term}: ${L.visual_style.what}`,
    colors: statusCols,
    roles: { canvas: L.palette.canvas, ink: L.palette.ink, accent: L.palette.accent, surface: L.palette.surface, muted: L.palette.muted, border: brand ? brand.roles.border : null, support: L.palette.support || [], status: statusCols.map((c) => c.hex) },
    role_names: {},
    fonts: { display: L.type.display, body: L.type.body, mono: L.type.mono },
    radii: { md: L.radius },
    spacing: {},
    shadows: L.shadow && L.shadow !== "none" ? [{ name: "card", value: L.shadow.replace(/var\(--ink\)/g, L.palette.ink).replace(/var\(--accent\)/g, L.palette.accent) }] : brand ? brand.shadows : [],
    motion: brand ? brand.motion : "",
    dos: [L.prompt, ...(brand ? brand.dos : [])],
    donts: brand ? brand.donts : [],
    modes: null,
    warnings: [],
  };
}
