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
| `fonts` | `{ display: "<Google Fonts family>", body: "<family>", displayWeight: 100–900 (steps of 100; 200/300 for light styles), case: "none"\|"upper"\|"lower", tracking: -0.06…0.2 }`; optional: `bodyWeight` (100–900, default 400), `mono` (a Google Fonts family for small print: captions, readouts, HUD labels, terminal text; without it small print uses `body`, and only a console `terminal` falls back to JetBrains Mono), `italic` (`true`: the display face is set in italic and pull quotes follow; default upright). The renderer loads every weight it draws with (body at its weight and at 700 for labels and rows) |
| `layout` | the specimen composition: `pills` (stacked pill controls + icons; a `radius` under 12 makes square sign panels / label tape), `cards` (floating cards), `bento` (modular tiles), `poster` (headline-led; a surface panel behind the headline when `surface` isn't `flat`), `hud` (sci-fi frame, rings, quiet meters or `labels.readouts`), `terminal` (console window; chrome follows the style, see `chrome`), `window` (OS windows), `editorial` (masthead, columns, rules, big type), `device` (phone frame), `diagram` (nodes and connectors), `collage` (cut-out scraps, tape), `data` (chart-led), `map` (stylised map: land, regions, a route with pins, compass, scale bar; headline on a card), `split` (half canvas / half accent, the headline crossing the seam in both colours, before/after panels and a slider knob; `chart: "none"` makes it two poster halves), `bignumber` (one giant stat, caption rule, supporting headline and a small trend chart), `typegrid` (typographic poster: the headline broken across a 12-column grid, one word rotated, one outlined, one on a block; strict when `motif` is `rules`/`grid`/`crosshair` or `texture` is `grid`, tilted otherwise), `timeline` (horizontal axis with milestones, the current one marked), `photo` (a duotone photographic plate built from the palette: full-bleed and letterboxed on dark canvases, a captioned plate beside the headline on light ones), `stack` (a fanned deck of notification cards), `list` (ranked list / changelog; rows become cards when `surface` isn't flat or there is a shadow), `isometric` (true 30° isometric blocks on a tiled floor), `chat` (conversation bubbles, the headline as the big message), `ticker` (broadcast: photographic background, lower third, channel bug, ticker band), `floorplan` (an architectural plan: poché walls, door swings, glazing, a stair, rooms named from `labels.places`, one room picked out with the route to it; architecture, interiors, wayfinding, venues), `record` (a record sleeve carrying the headline with the vinyl sliding out: grooves, sheen, a centre label from `labels.title` / `labels.badge`, an optional track list from `labels.items`) |
| `radius` | 0–48 (px at 1600 wide); `999` for full pills |
| `stroke` | `{ width: 0–8, color: "ink"\|"accent"\|"<hex>", style: "solid"\|"dashed"\|"double"\|"sketch" }`; `double` also draws a double-rule page frame on `poster`, `editorial` and light `photo` |
| `shadow` | `none`, `soft` (diffuse), `hard` (solid offset block), `long` (long flat diagonal), `inset`, `neu` (soft extruded light+dark), `glow` (accent glow), `layered` (stacked offsets), `float` (big soft drop, elevated) |
| `shadowColor` | `"ink"`, `"accent"`, `"accent2"` or a hex (default ink) |
| `surface` | `flat`, `gradient` (canvas→accent wash on surfaces), `glass` (translucent blur), `metal` (chrome/brushed gradient), `clay` (inflated, inner highlight), `paper` (off-white with fibre), `neon` (dark with lit edges) |
| `texture` | over everything: `none`, `grain`, `halftone`, `paper` (stronger on dark canvases), `scanlines` (black on dark canvases; on light ones the palette colour that shows: green-bar paper, pinstripes), `noise`, `dots` (a dot with a halo in the opposite tone, so it reads on light and dark areas), `riso` (misregistered colour), `crt`, `hatching` (engraved diagonal lines), `perforation` (tractor-feed holes down both margins, perforated tear lines, alternating green-bar bands). On the canvas, behind the content: `grid` (a drawing grid, 2px lines with a heavier line every fourth cell), `checker`, `woodgrain`, `veining` (marble / stone veins), `weave` (linen, basket weave), `terrazzo` (scattered chips in the palette) |
| `icons` | `doodle` (hand-drawn, offset outline), `line`, `filled`, `duotone`, `pixel`, `glyph` (typographic symbols), `emoji3d` (glossy soft 3D), `none` |
| `motif` | `none`, `stars`, `squiggles`, `grid`, `crosshair`, `stickers`, `blobs`, `rays`, `confetti`, `rules` (editorial lines), `circuit`, `orbits`, `particles` (point field with depth), `refraction` (prismatic light beams), `contours` (topographic lines), `tiles` (a zellige / azulejo repeat: eight-point stars and crosses glazed in the accents), `stripes` (woven kente strips down both edges), `repeat` (a Morris-style vine, leaf and flower repeat), `pictograms` (an Isotype counting row of figures along the foot of the frame, a few picked out). `rays` becomes a full-strength optical pattern (op-art polar checkerboard) when `texture` is `none` and `accent` on `canvas` is 10:1 or more; otherwise it is a wash |
| `motion` | how the preview moves on hover and how the film moves: `pop` (scale up with overshoot), `snap` (fast, no overshoot), `slide` (short travel), `mask` (wipe reveal), `type` (typewriter), `glitch`, `spring` (elastic), `drift` (slow float), `step` (stop-motion, stepped), `fade` (slow dissolve), `bounce` |

### Optional recipe fields

Leave any of these out and the renderer uses its defaults.

| field | values |
|---|---|
| `effects` | up to 3 finishing passes: `rgb-split` (red/cyan fringes on every element), `extrude` (3D extruded letters on hero-size type), `halation` (warm film glow around type and light elements), `grain-heavy` (coarse film grain), `vignette`, `blur-depth` (decoration goes out of focus, back elements blur, bokeh), `glint` (a specular sweep and sparkles), `scanline-heavy` (thick CRT lines, RGB phosphor, edge falloff), `misregister` (an offset second colour, print misregistration), `noise-bars` (signal dropout: static bands and displaced lines), `light-leak` (warm film light leaks) |
| `labels` | short words the layouts print instead of their neutral defaults (strings up to 48 characters; list labels take an array or `"a · b · c"`). A label left out gets the layout's neutral default (often nothing: kickers, captions, plate numbers, HUD labels and section names are hidden unless written); an empty string `""` hides that element. Labels: `kicker` (eyebrow / masthead left / HUD fallback), `section` (masthead middle), `date` (masthead right, list version, photo plate number, ticker clock), `window` (window and terminal title), `title` (panel, list and chat header), `badge` (toggle text, timeline callout, ticker chip, chat status), `stat` (the big number), `caption` (photo caption, stat caption), `quote` (editorial pull quote when there's no sub), `cta` (button), `hint` (empty search field), `hud` (HUD label), `readouts` (HUD numbers; without them the HUD shows quiet meters), `steps` (diagram nodes, timeline milestones), `dates` (timeline), `items` (list rows, stack cards), `tags` (list chips), `places` (map pins), `before` / `after` (split), `messages` (chat lines), `ticker` (ticker items), `bug` (channel bug), `lines` (terminal output), `people` (bento footer), `corner` (up to four corner notes, clockwise from top left; absent by default: the renderer never invents coordinates, folios or figure numbers), `emblem` (the mark over a `poster` headline and on a `record` sleeve: an icon slot name `burst`\|`crown`\|`star`\|`bolt`\|`heart`\|`knot`\|`smile`\|`arrow`, any short text or symbol such as `"❦"` or `"No. 1"`, or `""` for none; default the star slot), `metrics` (captions under the `bignumber` readouts; none by default), `times` (stack card timestamps; none by default), `scale` (map / floorplan scale bar text; `""` hides the map's). Never product-specific: they must suit any user's film |
| `iconSet` | which shapes the icons draw (every `icons` treatment, including `glyph` characters and `pixel` grids): `default`, `geometric` (circle, triangle, diamond, square, hexagon…), `nature` (sun, leaf, flower, drop, moon, mountain, waves, sprout), `tech` (chip, code brackets, cursor, signal, gear, nodes, prompt, power), `hand` (spiral, wobbly star, loop arrow, cloud, check), `ornament` (fleurons, quatrefoil, laurel, medallion, flourish), `pictogram` (Isotype figures: man, woman, pair, house, factory, tree, car, ship). Icons pick their colour against what they sit on: an accent that would vanish on its tile or panel is swapped for the palette colour that shows |
| `density` | `airy` (fewer elements, smaller headline, more space), `balanced` (default), `dense` (more real content: rows, bars, milestones, pins, lanes, readouts, grid lines; never decoration such as corner print) |
| `chrome` | window furniture for `terminal` / `window`: `auto` (default: paper styles get a bare page, retro styles a classic striped title bar, others traffic lights), `mac`, `classic`, `tabs` (terminal: browser-style tabs; window: a small BeOS-style title tab on the window's top edge), `none` (window: no title bar) |
| `chart` | the chart and UI-widget furniture of `bento`, `bignumber`, `data`, `split`, `window` (its second pane), `cards` and `pills`: `auto` (default: each layout's own), `none` (no chart or widget: bento's footer tile widens, bignumber and data drop the chart panel, window's second pane shows text, pills drop the slider row, `split` becomes two poster halves with no panels or knob and no Before/After chips unless `labels.before`/`after` are written), `bars`, `line`, `wave` (periodic signal), `jagged` (seismograph trace), `spectrum` (audio spectrum), `steps`, `scatter`, `donut` |
| `scene` | the subject of photographic plates (`photo`, `ticker`, editorial `photo: "plate"`): `landscape` (default: ridges and sun), `city` (skyline, lit windows), `botanical` (fern fronds, leaves, a flower head), `interior` (window light, a lounge chair, a pendant lamp), `poolside` (palms, pool, modernist block), `portrait` (head-and-shoulders silhouette with rim light), `still-life` (vase, bottle, fruit on a table), `abstract` (mid-century shapes), `night-sky` (stars, moon, milky way, pines) |
| `photoColors` | the plate's tonal ramp, 2–6 hexes from shadows to highlights (e.g. a thermal scale `["#050014","#3b0f70","#b5367a","#fb8761","#fcfdbf"]`; reverse the order to invert, e.g. a cyanotype photogram `["#f4f1e8","#1d4e89"]`). Without it the ramp comes from the palette (and a red accent's highlights go amber, not pink) |
| `photoTone` | `smooth` (default: gradients) or `flat` (screenprint: every tone is a solid ink from the ramp, the sky solid bands, no glows) |
| `sky` | 2–3 hexes for the plate's sky, top to horizon (e.g. `["#10305a","#f3c98b"]`, deep Prussian blue to a warm horizon); default from the ramp |
| `photo` | the `editorial` photo well: `block` (default: a solid accent block), `plate` (a photographic plate in the `scene`), `none` (the text takes the width) |
| `marker` | `timeline` milestones: `auto` (default: diamonds for sharp outlined styles, else circles), `circle`, `diamond`, `square`, `rect` (a tall trail blaze), `ring` |
| `diagram` | the `diagram` composition: `flow` (default: boxes with arrows), `tree` (a hierarchy with elbow connectors), `network` (round nodes and straight bonds: graphs, molecules) |
| `edges` | diagram connectors: `arrow` (default for `flow`) or `line` (undirected; default for `tree` and `network`) |
| `edgeColor` | diagram connector colour: `ink` (default), `accent`, `accent2` or a hex |

Dark styles set `canvas` dark and `ink` light. Contrast: `ink` on `canvas` and on `surface` must reach 4.5:1 (the validator checks).

## Families

Group presets so the gallery can filter (the validator checks the family id): `bold` (brutal, graphic, loud), `soft` (tactile, rounded, calm), `editorial` (print, magazine, type-led), `retro` (eras, old tech), `future` (sci-fi, tech, neon), `handmade` (drawn, cut, printed), `dimensional` (3D, materials, depth), `product` (clean product/UI-led), `data` (information, diagrams), `cinematic` (film, photographic, atmospheric), `playful` (toy-like, kids, pop), `luxury` (premium, restrained), `heritage` (cultural traditions, crafts, historic schools), `broadcast` (TV graphics, sport, news, live), `science` (instruments, lab, charts, specimens), `print` (printing processes and stationery), `interface` (operating systems and app UI), `nature` (materials, landscapes, the living world), `sound` (music, sleeves, audio), `space` (architecture, wayfinding, places).

## Recipe cookbook

Start from the style's real references, then reach for the layout and fields that make it unmistakable. A preset only needs the fields it changes; everything else keeps its default.

**Swiss / International Typographic poster**: strict grid, one rotated word, no tilt.
```json
{ "layout": "typegrid", "motif": "rules", "density": "dense", "radius": 0, "stroke": { "width": 0 },
  "labels": { "kicker": "No. 12", "section": "Kunsthalle", "date": "03—06" } }
```

**Deconstructed / glitch type**: the same grid, tilted, with a broken signal.
```json
{ "layout": "typegrid", "texture": "noise", "motion": "glitch", "fonts": { "display": "Anton", "case": "upper" },
  "effects": ["rgb-split", "noise-bars"] }
```

**Pop stat / explainer number**: a giant extruded figure.
```json
{ "layout": "bignumber", "shadow": "hard", "effects": ["extrude"], "density": "dense",
  "labels": { "stat": "3×", "caption": "faster than last year", "readouts": ["12k", "4.8", "31%"] } }
```

**Travel / logistics / field map**
```json
{ "layout": "map", "motif": "contours", "texture": "paper", "shadow": "soft", "stroke": { "width": 2, "color": "ink", "style": "solid" },
  "labels": { "kicker": "Day 03", "places": ["Harbour", "Old Town", "Ridge", "Lookout"] } }
```

**Cinematic title over a plate** (dark canvas → full bleed, letterboxed)
```json
{ "layout": "photo", "motion": "fade", "fonts": { "display": "Cormorant Garamond" },
  "effects": ["halation", "grain-heavy", "vignette"], "labels": { "caption": "Reel 2 — Dawn", "kicker": "A film by the studio" } }
```

**Editorial photo essay** (light canvas → captioned plate, double-rule frame)
```json
{ "layout": "photo", "stroke": { "width": 3, "color": "ink", "style": "double" }, "effects": ["light-leak"],
  "labels": { "kicker": "Field notes", "caption": "The ridge at first light", "date": "PLATE IV" } }
```

**Before / after, product comparison**
```json
{ "layout": "split", "shadow": "hard", "stroke": { "width": 3, "color": "ink", "style": "solid" }, "labels": { "before": "Old way", "after": "New way" } }
```

**Changelog / top-N / release notes**
```json
{ "layout": "list", "texture": "grid", "motion": "type", "effects": ["scanline-heavy"], "labels": { "title": "Release notes", "date": "v3.1" } }
```

**Roadmap / history**
```json
{ "layout": "timeline", "iconSet": "tech", "labels": { "steps": ["Idea", "Draft", "Build", "Launch", "Grow"], "dates": ["2021", "2022", "2023", "2024", "2025"], "badge": "We are here" } }
```

**Glass notifications / app moments**
```json
{ "layout": "stack", "surface": "glass", "shadow": "float", "iconSet": "nature", "effects": ["blur-depth", "glint"] }
```

**Isometric product world**
```json
{ "layout": "isometric", "stroke": { "width": 2, "color": "ink", "style": "solid" }, "shadow": "soft", "motif": "particles", "labels": { "kicker": "Level 2" } }
```

**Messaging / social story**
```json
{ "layout": "chat", "radius": 30, "shadow": "hard", "icons": "doodle", "iconSet": "hand", "motif": "squiggles",
  "labels": { "title": "Studio", "badge": "3 people", "messages": ["Have you seen this?", "Wait, really?"] } }
```

**Broadcast news / sports lower third**
```json
{ "layout": "ticker", "fonts": { "display": "Barlow Condensed", "case": "upper" }, "icons": "glyph", "iconSet": "ornament",
  "labels": { "bug": "CH 4", "kicker": "Developing", "badge": "Latest", "ticker": ["Top of the hour", "Full report at nine"] } }
```

**Op art**: `"layout": "poster", "motif": "rays", "texture": "none"` with a black-and-white palette (accent on canvas ≥ 10:1) draws a polar checkerboard; the headline sits on a solid plate.

**Holographic / prism**: `"motif": "refraction"` on a dark canvas with `"surface": "glass"`, `"icons": "emoji3d"`, `"iconSet": "geometric"`.

**Screenplay / typewriter page**: `"layout": "terminal"` with `"surface": "paper"` (or `"texture": "paper"`) drops the window bar for a bare numbered page; `"chrome": "classic"` gives DOS / System 7 styles a striped title bar; `labels.window` and `labels.lines` replace the filler.

**Two poster halves (no UI)**: a split with no panels, knob or slider.
```json
{ "layout": "split", "chart": "none", "labels": { "before": "Night", "after": "Day" } }
```

**Seismograph / instrument readout**
```json
{ "layout": "bignumber", "chart": "jagged", "density": "dense", "fonts": { "mono": "IBM Plex Mono" },
  "labels": { "stat": "M 6.4", "readouts": ["12 km", "38 s", "IV"], "metrics": ["depth", "duration", "intensity"] } }
```

**Audio / oscilloscope**: `"layout": "data", "chart": "spectrum"` (or `"wave"`), `labels.stat` for the reading.

**Thermal camera**: a hot ramp on a portrait plate.
```json
{ "layout": "photo", "scene": "portrait", "photoColors": ["#050014", "#3b0f70", "#b5367a", "#fb8761", "#fcfdbf"] }
```

**Screenprint travel poster**: flat inks, no gradients, an explicit sky.
```json
{ "layout": "photo", "scene": "landscape", "photoTone": "flat", "photoColors": ["#1f2a44", "#3e6259", "#d98e4a", "#f2d7a6"], "sky": ["#3e6259", "#f2d7a6"] }
```

**City pop / poolside sleeve**: `"layout": "photo", "scene": "poolside"`; **night drive**: `"scene": "city"`; **plant photogram (cyanotype)**: `"scene": "botanical", "photoColors": ["#f4f1e8", "#1d4e89"]`.

**Magazine feature with a picture**: `"layout": "editorial", "photo": "plate", "scene": "still-life", "fonts": { "italic": true }` (italic headline and pull quote); `"photo": "none"` for a text-only page.

**Architecture / wayfinding**
```json
{ "layout": "floorplan", "stroke": { "width": 0 }, "labels": { "kicker": "Level 2", "places": ["Gallery", "Archive", "WC", "Stair", "Foyer"], "scale": "5 m" } }
```

**Record sleeve**
```json
{ "layout": "record", "labels": { "kicker": "Vol. 2", "title": "Side A", "badge": "33⅓", "items": ["Opening", "Slow one", "Title track"], "emblem": "" } }
```

**Molecule / network / org chart**: `"layout": "diagram", "diagram": "network"` (undirected bonds) or `"diagram": "tree"`; `"edgeColor": "accent"` for coloured connectors, `"edges": "line"` to drop arrowheads on a flow.

**Trail markers**: `"layout": "timeline", "marker": "rect"` draws painted blazes; `"square"` / `"ring"` for signage styles.

**Zellige / azulejo / kente / Morris**: `"motif": "tiles"`, `"stripes"` or `"repeat"`, usually on `"layout": "poster"` with a non-flat `surface` so the headline sits on a panel; `labels.emblem` sets or removes the mark over it.

**Isotype**: `"iconSet": "pictogram", "icons": "filled", "motif": "pictograms"`.

**Materials**: `"texture": "veining"` (marble), `"woodgrain"`, `"weave"`, `"terrazzo"`, `"checker"`; `"hatching"` for engraved shading; `"perforation"` for continuous computer paper (pair with `"layout": "terminal"`, `"chrome": "none"`).

**Light type**: `"fonts": { "display": "Cormorant Garamond", "displayWeight": 300, "body": "Inter", "bodyWeight": 300 }`.

Tips: effects are a finish, not the style: one or two usually do it, and three is the limit. `density: "airy"` suits luxury and calm styles; `dense` suits Swiss, data, HUD and newsroom styles. Two presets that differ only in `effects`, `iconSet`, `density` or `chrome` count as distinct to the validator, but make them genuinely different looks, not the same look with a filter.
