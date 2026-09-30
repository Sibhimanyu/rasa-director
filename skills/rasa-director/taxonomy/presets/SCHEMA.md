# Style presets

A **style preset** is one complete, named motion-graphics style a user can point at: the terms from every taxonomy dimension that make it what it is, and a **recipe** precise enough to draw it. `presets/<family>.json` holds one family (`{ "family": {...}, "presets": [...] }`); `node scripts/presets.mjs validate` checks them all.

Presets are the menu; the taxonomy is the vocabulary. A preset's `stack` uses taxonomy term ids only, so choosing a preset writes real decisions (`picks`) that compile into `DIRECTION.md`.

## A preset

```json
{
  "id": "soft-neo-brutalism",
  "name": "Soft neo-brutalism",
  "aka": ["neubrutalism", "playful brutalism", "hard-shadow UI"],
  "what": "Chunky black outlines and solid offset shadows on rounded pills, cream paper, hand-drawn doodles.",
  "feels": ["playful", "confident", "handmade"],
  "use": ["SaaS launch films", "creator tools", "social teasers"],
  "not": "Not skeuomorphism: nothing imitates a real material; depth is a flat block shadow.",
  "search": ["neubrutalism UI animation", "hard shadow pill UI motion"],
  "stack": { "visual-style": ["neo-brutalism"], "ui-treatment": ["neo-brutalist-ui"], "motion-language": ["snappy"] },
  "recipe": { ... see below ... }
}
```

| field | meaning |
|---|---|
| `id` | kebab-case, unique across all families |
| `name` | the name users see; the proper term where one exists |
| `aka` | other names people use (search and "what is this called?") |
| `what` | one sentence: what it looks like (max ~22 words) |
| `feels` | 2–4 adjectives: what it communicates |
| `use` | where it fits (formats, industries) |
| `not` | the style it's most often confused with, and the difference (optional) |
| `search` | reference search phrases |
| `stack` | taxonomy picks: `{ "<dimension id>": ["<term id>", ...] }`; ids must exist |
| `recipe` | how to draw it (below) |

## The recipe

Every field has a fixed vocabulary so one renderer (`console/presets.js`) can draw any preset on the user's own words.

| field | values |
|---|---|
| `palette` | `{ canvas, ink, accent, accent2, surface, muted }` hex colors (surface: cards/pills; muted: secondary text) |
| `fonts` | `{ display: "<Google Fonts family>", body: "<family>", displayWeight: 400–900, case: "none"\|"upper"\|"lower", tracking: -0.06…0.2 }` |
| `layout` | the specimen composition: `pills` (stacked pill controls + icons), `cards` (floating cards), `bento` (modular tiles), `poster` (headline-led), `hud` (sci-fi frame, rings, readouts), `terminal` (console window), `window` (OS windows), `editorial` (columns, rules, big type), `device` (phone frame), `diagram` (nodes and connectors), `collage` (cut-out scraps, tape), `data` (chart-led) |
| `radius` | 0–48 (px at 1600 wide); `999` for full pills |
| `stroke` | `{ width: 0–8, color: "ink"\|"accent"\|"<hex>", style: "solid"\|"dashed"\|"double"\|"sketch" }` |
| `shadow` | `none`, `soft` (diffuse), `hard` (solid offset block), `long` (long flat diagonal), `inset`, `neu` (soft extruded light+dark), `glow` (accent glow), `layered` (stacked offsets), `float` (big soft drop, elevated) |
| `shadowColor` | `"ink"`, `"accent"`, `"accent2"` or a hex (default ink) |
| `surface` | `flat`, `gradient` (canvas→accent wash on surfaces), `glass` (translucent blur), `metal` (chrome/brushed gradient), `clay` (inflated, inner highlight), `paper` (off-white with fibre), `neon` (dark with lit edges) |
| `texture` | `none`, `grain`, `halftone`, `paper`, `scanlines`, `noise`, `dots`, `grid`, `riso` (misregistered colour), `crt` |
| `icons` | `doodle` (hand-drawn, offset outline), `line`, `filled`, `duotone`, `pixel`, `glyph` (typographic symbols), `emoji3d` (glossy soft 3D), `none` |
| `motif` | `none`, `stars`, `squiggles`, `grid`, `crosshair`, `stickers`, `blobs`, `rays`, `confetti`, `rules` (editorial lines), `circuit`, `orbits` |
| `motion` | how the preview moves on hover and how the film moves: `pop` (scale up with overshoot), `snap` (fast, no overshoot), `slide` (short travel), `mask` (wipe reveal), `type` (typewriter), `glitch`, `spring` (elastic), `drift` (slow float), `step` (stop-motion, stepped), `fade` (slow dissolve), `bounce` |

Dark styles set `canvas` dark and `ink` light. Contrast: `ink` on `canvas` and on `surface` must reach 4.5:1 (the validator checks).

## Families

Group presets so the gallery can filter: `bold` (brutal, graphic, loud), `soft` (tactile, rounded, calm), `editorial` (print, magazine, type-led), `retro` (eras, old tech), `future` (sci-fi, tech, neon), `handmade` (drawn, cut, printed), `dimensional` (3D, materials, depth), `product` (clean product/UI-led), `data` (information, diagrams), `cinematic` (film, photographic, atmospheric), `playful` (toy-like, kids, pop), `luxury` (premium, restrained).
