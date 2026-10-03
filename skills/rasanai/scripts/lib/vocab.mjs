// The recipe vocabulary the console's specimen renderer (console/presets.js) draws from. Shared by presets.mjs
// (the raw-material presets) and the design-system gate (design.mjs check-system, lib/system.mjs).
export const VOCAB = {
  layout: ["pills", "cards", "bento", "poster", "hud", "terminal", "window", "editorial", "device", "diagram", "collage", "data", "map", "split", "bignumber", "typegrid", "timeline", "photo", "stack", "list", "isometric", "chat", "ticker", "floorplan", "record"],
  shadow: ["none", "soft", "hard", "long", "inset", "neu", "glow", "layered", "float"],
  surface: ["flat", "gradient", "glass", "metal", "clay", "paper", "neon"],
  texture: ["none", "grain", "halftone", "paper", "scanlines", "noise", "dots", "grid", "riso", "crt", "hatching", "checker", "woodgrain", "veining", "weave", "terrazzo", "perforation"],
  icons: ["doodle", "line", "filled", "duotone", "pixel", "glyph", "emoji3d", "none"],
  motif: ["none", "stars", "squiggles", "grid", "crosshair", "stickers", "blobs", "rays", "confetti", "rules", "circuit", "orbits", "particles", "refraction", "contours", "tiles", "stripes", "repeat", "pictograms"],
  motion: ["pop", "snap", "slide", "mask", "type", "glitch", "spring", "drift", "step", "fade", "bounce"],
  strokeStyle: ["solid", "dashed", "double", "sketch"],
  // optional recipe fields (absent = the renderer's defaults)
  effects: ["rgb-split", "extrude", "halation", "grain-heavy", "vignette", "blur-depth", "glint", "scanline-heavy", "misregister", "noise-bars", "light-leak"],
  iconSet: ["default", "geometric", "nature", "tech", "hand", "ornament", "pictogram"],
  density: ["airy", "balanced", "dense"],
  chrome: ["auto", "mac", "classic", "tabs", "none"],
  labels: ["kicker", "section", "date", "window", "title", "badge", "stat", "caption", "quote", "cta", "hint", "hud", "readouts", "steps", "dates", "items", "tags", "places", "before", "after", "messages", "ticker", "bug", "lines", "people", "corner", "emblem", "metrics", "times", "scale"],
  chart: ["auto", "none", "bars", "line", "wave", "jagged", "spectrum", "steps", "scatter", "donut"],
  scene: ["landscape", "city", "botanical", "interior", "poolside", "portrait", "still-life", "abstract", "night-sky"],
  photoTone: ["smooth", "flat"],
  photo: ["block", "plate", "none"],
  marker: ["auto", "circle", "diamond", "square", "rect", "ring"],
  diagram: ["flow", "tree", "network"],
  edges: ["arrow", "line"],
  families: ["bold", "soft", "editorial", "retro", "future", "handmade", "dimensional", "product", "data", "cinematic", "playful", "luxury", "heritage", "broadcast", "science", "print", "interface", "nature", "sound", "space"],
};

const hexRe = /^#[0-9a-f]{6}$/i;

// A recipe is what RasaPresets.render() takes: palette, fonts, layout, radius, stroke, shadow, surface, texture, icons,
// motif, motion (+ optional effects, density, ...). Returns a list of problems (empty = it will draw).
export function validateRecipe(r) {
  const problems = [];
  const bad = (m) => problems.push(`recipe: ${m}`);
  if (!r || typeof r !== "object") return ["recipe: missing"];
  const P = r.palette || {};
  for (const k of ["canvas", "ink", "accent", "accent2", "surface", "muted"]) if (!hexRe.test(String(P[k] || ""))) bad(`palette.${k} must be a #rrggbb colour`);
  const F = r.fonts || {};
  if (!F.display || !F.body) bad("fonts needs display and body (real, loadable families)");
  const weight = (w) => Number.isInteger(w) && w >= 100 && w <= 900 && w % 100 === 0;
  if (F.displayWeight != null && !weight(F.displayWeight)) bad("fonts.displayWeight must be 100-900 in steps of 100");
  if (F.bodyWeight != null && !weight(F.bodyWeight)) bad("fonts.bodyWeight must be 100-900 in steps of 100");
  for (const [k, list] of [["layout", VOCAB.layout], ["shadow", VOCAB.shadow], ["surface", VOCAB.surface], ["texture", VOCAB.texture], ["icons", VOCAB.icons], ["motif", VOCAB.motif], ["motion", VOCAB.motion]]) if (!list.includes(r[k])) bad(`${k} "${r[k]}" is not one of ${list.join("|")}`);
  if (typeof r.radius !== "number" || r.radius < 0 || (r.radius > 48 && r.radius !== 999)) bad("radius must be 0-48 or 999");
  const st = r.stroke || {};
  if (typeof st.width !== "number" || st.width < 0 || st.width > 8) bad("stroke.width must be 0-8");
  if (st.style && !VOCAB.strokeStyle.includes(st.style)) bad(`stroke.style "${st.style}"`);
  if (r.effects != null) {
    if (!Array.isArray(r.effects)) bad("effects must be a list");
    else {
      for (const e of r.effects) if (!VOCAB.effects.includes(e)) bad(`effects: "${e}" is not one of ${VOCAB.effects.join("|")}`);
      if (r.effects.length > 3) bad("effects: at most 3");
    }
  }
  for (const k of ["iconSet", "density", "chrome", "chart", "scene", "photoTone", "photo", "marker", "diagram", "edges"]) if (r[k] != null && !VOCAB[k].includes(r[k])) bad(`${k} "${r[k]}" is not one of ${VOCAB[k].join("|")}`);
  return problems;
}
