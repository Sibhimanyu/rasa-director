---
id: "newspaper-broadsheet"
name: "Broadsheet newspaper (column grid, masthead, Didone and slab, halftone newsprint)"
kind: "vernacular"
domain: "vernacular"
era: "Broadsheet format in Britain after the 1712 page-count tax (the tax was reduced from the 1830s and ended in 1855); halftone photographs in print from 1869-1881; newsprint web-fed presses ever since"
origin: ["British and American daily press", "Didot, Bodoni and Walbaum (the Didone types)", "newsprint and web-offset production"]
palette: {"roles": {"canvas": "#e6e0d0", "ink": "#1b1a17", "rule": "#2b2a26", "accent": "#a3261c", "halftone": "#3a3834", "aged_scan_paper": "#d5bba9", "aged_scan_ink": "#5f544b"}, "logic": "off-white, slightly yellow newsprint with one black ink; spot red only for a flag, a drop-in or breaking-news label. Newsprint has an off-white cast (cited) and yellows and turns brittle over time (cited); all hex values are proposed (not sourced)", "aged_variant": "#d8cfae canvas with #4a3b22 ink for a yellowed archive reading (proposed)", "evidence": "partial. Archive scans measured, k-means 5, 2026-10-03: NYT Titanic front page 1912 (https://commons.wikimedia.org/wiki/Special:FilePath/Titanic-NYT.jpg?width=500) neutral greys #f3f3f3 / #d2d2d2 / #545454; Chicago Bee 1938 (Commons) greys #dedede / #363636, i.e. the scanning removed the paper's cast; Duke Chronicle 1980-12-01 (Commons) #d5bba9 42% paper and #5f544b ink, a warm-cast scan. Digital scan white balance is arbitrary, so canvas #e6e0d0, ink #1b1a17, red and aged variants stay proposed; use the scans only to confirm that ink on newsprint is a dark grey-brown, not #000."}
type: {"display": {"family": "Playfair Display (high-contrast Didone-leaning) or Old Standard TT (Modern/classicist, designed by Alexey Kryukov)", "free_alternative": "Playfair Display / Old Standard TT / UnifrakturCook / Pirata One", "weights": [400, 700, 900], "case": "mixed for heads, small caps for datelines", "tracking": -0.01, "note": "Playfair Display is variable wght 400-900; Old Standard TT has 400 and 700 plus italics (no bold italic); UnifrakturCook only 700; Pirata One only 400. Both blackletters are OFL Google Fonts."}, "body": {"family": "Libre Caslon Text or Source Serif 4 (OFL); for tight columns 'Merriweather' 400", "free_alternative": "Libre Caslon Text", "weights": [400], "case": "mixed", "tracking": 0.0}, "rules": ["headline: tight leading (0.95-1.05), bold, set 2-4 sizes by importance", "body: 9-10 pt equivalent, justified with hyphenation in narrow columns, 1.15-1.25 leading", "a Didone's thin hairlines dazzle at small sizes, so keep display sizes for Didone and use a sturdier face for body (cited issue with digital Didone)", "small sans or mono for bylines and datelines"]}
grid: {"columns":6,"baseline_px":12,"margins":"outer 48px at 1920 wide; 16-24px gutters with hairline column rules","rules":["broadsheet width is about 12 in (US front page) by 22.75 in, with many papers trimmed to 11 x 21 in (cited); the spread is about 711 x 578 mm","six columns is the common broadsheet count (proposed; the cited source states no column count)","above the fold is the lead story and the dominant photo; below the fold secondary stories","horizontal hairline rules between stories, 2px double rule under the nameplate","headlines span 2-4 columns; stories jump to inner pages"]}
shape: {"radius":0,"stroke":"hairline rules 0.5-1 px, double or thick-thin rule under the masthead","shadow":"none","imagery":"halftone photographs, engraved or line-art maps, small ruled-box charts"}
texture: "newsprint tooth, slight ink spread on type (dot gain), halftone at about 85 lpi on newsprint (cited), ink show-through, misregistered colour spot, fold crease at the middle"
motion: {"language":"typeset, columnar, editorial","timing_ms":[160,320,640,1200],"eases":{"enter":"power3.out","move":"power2.inOut","exit":"power2.in"},"entrances":["a headline's lines rise in a mask, 80 ms stagger per line","columns fill top to bottom with text lines revealed 40 ms apart","a halftone photo resolves from coarse dots (large) to fine over 600 ms","a stamp or rule draws across a column"],"camera":"locked page; a push from the whole front page to a column and then a headline; a slow scan down a column","signature":"a headline spun in on a whip (the old 'spinning newspaper' cut) is a cliche; prefer the page assembled column by column and the camera finding the one story"}
space: {"2d":"native","3d":"possible: a newspaper as a physical page on a desk or a vitrine, with fold curl and halftone texture; paper with real folds"}
good_for: ["journalism, history, business, politics, true-story explainers, PR with a 'press' angle", "headlines, quotes, data in column form", "archive and period storytelling"]
not_for: ["luxury minimalism", "futurist/sci-fi", "kids"]
blends_with: ["screenprint", "risograph-print", "engraving-etching", "museum-label-and-specimen", "banknote-guilloche", "blueprint-technical-drawing"]
clashes_with: ["glass-product-cgi", "chrome-liquid-metal-cgi", "frutiger-aero"]
cheap_tells: ["a 'newspaper' template with a vintage filter and a rotating spin-in headline", "a single wide text block with no columns, rules or gutters", "a pure white background with pure black type (newsprint is off-white and ink spreads)", "lorem ipsum, or Times New Roman at 100% with no hierarchy", "a masthead set in one weight with no rules", "photos in smooth grayscale rather than halftone"]
verified: {"non_wikipedia":2,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/Titanic-NYT.jpg","https://commons.wikimedia.org/wiki/Special:FilePath/Duke_Chronicle_1980-12-01_page_1.jpg"],"grid":"partial","timings":"proposed","sources_fetched":6,"recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Broadsheet", "https://en.wikipedia.org/wiki/Newsprint", "https://en.wikipedia.org/wiki/Halftone", "https://en.wikipedia.org/wiki/Didone_(typography)", "https://www.typewolf.com/old-standard-tt", "https://commons.wikimedia.org/wiki/File:Titanic-NYT.jpg"]
tags: ["publication", "newspaper", "broadsheet", "editorial", "halftone", "newsprint", "serif", "column-grid"]
---
## What it is
A broadsheet is the large-format newspaper that took hold in Britain after a 1712 tax based on page counts made a bigger sheet cheaper to distribute; in the US the traditional front page is about 12 x 22.75 inches, and many papers have been trimmed to about 11 x 21. It carries multiple stories on the front page with the important ones above the fold, with more detailed, less sensational reporting than a tabloid. The visual identity is a nameplate on top (what American usage calls the nameplate; British usage calls it the masthead, while in American usage the masthead is the ownership box), columns of tightly set serif text with hairline rules, headlines in a high-contrast serif, and photographs reproduced as halftone dots on off-white newsprint.

## The rules that make it this and not something else
- **Columns with rules.** Text runs in narrow columns (proposed 6 for a broadsheet) with 16-24 px gutters and hairline rules; headlines span several columns. No single wide text block.
- **A hierarchy of heads.** A lead headline 3-4x the size of a secondary one, a deck (subhead) in italic, a byline and dateline in small caps or mono.
- **Fold logic.** The most important item sits above the fold; the film can show the fold as a faint horizontal crease at the page's half.
- **Nameplate, then double rule.** Large nameplate; underneath a thick-thin rule with edition line, date, price.
- **Didone and its limits.** Didone (Bodoni, Didot, Walbaum) means vertical stress, hairline unbracketed serifs and strong thick-thin contrast, from about 1800; at small sizes the thick verticals dazzle against the thin strokes (cited). So set the headline in a Didone-leaning display and the body in a sturdier face; or use a Modern like Old Standard TT for both.
- **Halftone, not greyscale.** Newsprint halftone is about 85 lpi (cited), so at 1920 wide a dot pitch of 9-12 px for large photos mimics it (proposed mapping). Screen angle 45 degrees for single-ink black.
- **Newsprint is off-white and imperfect.** It is a low-cost, non-archival wood-pulp paper with an off-white cast; lignin makes it brittle and yellow with air and sun. Show yellowing only when the story is archival.
- **Colour is rationed.** One spot colour for a flag or label; photographs in black ink.

## Tokens decoded
- Canvas `#e6e0d0`, ink `#1b1a17`, rules `#2b2a26`, red `#a3261c`; aged `#d8cfae` (all proposed; scans measured only confirm a dark grey-brown ink, see palette evidence).
- Type scale (at 1920 wide): nameplate 160-220 px; lead headline 96-128 px/1.0; secondary heads 48-64 px; deck 28 px italic; body 22 px/27 px with 34 characters per line in a 6-column page (a narrow measure); byline 14 px caps tracking 0.12em.
- Fonts: Playfair Display 700-900 for heads (OFL), Old Standard TT 400/700 (a free open-source Modern by Alexey Kryukov; regular, italic and bold only, no bold italic, per the Typewolf entry), Libre Caslon Text 400 for body (OFL), UnifrakturCook for a blackletter nameplate (OFL).
- Rules: 0.5 px column rules, 1 px story rules, 3 px + 1 px double under the nameplate.
- Halftone: a 10 px dot grid, `radial-gradient` or an SVG pattern at 45 degrees, circles scaled by luminance, `mix-blend-mode: multiply` on the paper.

## Motion and camera
2D:
- Headline rise: split into lines, each `gsap.from(line,{yPercent:105,duration:0.32,ease:'power3.out',stagger:0.08})` inside an `overflow:hidden` mask.
- Column fill: reveal body text line by line with `clip-path` or per-line opacity, stagger 40 ms, `power2.out`, a column at a time; total 640-1200 ms.
- Halftone resolve: scale the dot grid from 28 px pitch to 10 px over 600 ms with `power2.out`; the picture sharpens as the pitch shrinks.
- Rules draw: `scaleX 0 -> 1` over 320 ms `power2.inOut`, transform-origin left.
- Camera: a push from full page to a headline: `scale 1 -> 2.4` with `x/y` toward the story over 1200 ms `power3.inOut`; or a slow downward scan down a column (`y`, 5 s, `sine.inOut`). Hold 800 ms on each find.
- Cut: a hard cut to the next page; if the story needs a time passage, a stack of papers flipping at 120 ms per page (not a spin).

3D reading (Rasan3D): a paper on a desk, never a spinning newspaper.
- Sheet: `k.material('paper', {color: '#e6e0d0'})` folded plane (two planes joined at a 3-5 degree fold), 0.43 x 0.58 m, print texture via `k.image` (unlit overlay at z 0.0005).
- Desk: `k.material('matte', {color: '#3a2e24'})` or a plain tint ground; `k.rig('window', {dir: [-0.5, 0.9, 0.3], shadows: true, shadowSoftness: 8})`; `environment: 'soft'`.
- Camera keys: `lens:[[0,50]]`, `fstop:4`, `pos:[[0,[0,1.2,0.05]],[3,[0,0.5,0.05],"power3.inOut"]]`, `target:[[0,[0,0,0]]]`; a top-down crane from 1.2 m to 0.5 m over 3 s (`power3.inOut`) onto the lead story, hold 1 s; the headline stays DOM above the 3D at readable size.
- A stack of papers (3-6 with z offsets 0.003) lets a paper be pulled to reveal the next; 12-degree rotation of each sheet. Halftone on the photo only: a `k.pass("ht",{at:"post",...})` using `r3Halftone(c, gl_FragCoord.xy, 6.0, ink, paper)` would halftone the whole frame, so prefer a pre-halftoned `k.image(url)` texture on the sheet.
- post: `grain: 0.025`; no bloom.

## How to instruct a model to build it
Paste-ready (HyperFrames HTML/CSS/GSAP):

```html
<div id="page" style="width:1920px;height:1080px;background:#e6e0d0;color:#1b1a17;padding:48px;display:grid;grid-template-columns:repeat(6,1fr);column-gap:20px;position:relative">
  <header style="grid-column:1/-1;border-bottom:3px double #2b2a26;text-align:center">
    <h1 style="font:900 190px/0.9 'Old Standard TT'">The Daily Ledger</h1>
    <p style="font:400 14px 'IBM Plex Mono';letter-spacing:.12em">VOL. CXII . NO. 38 . THURSDAY . TWO PENCE</p>
  </header>
  <article style="grid-column:1/4;column-rule:1px solid #2b2a26"><h2 style="font:700 112px/1 'Playfair Display'">...</h2><p style="font:400 22px/27px 'Libre Caslon Text';columns:3;column-gap:20px;text-align:justify;hyphens:auto">...</p></article>
</div>
```
GSAP: `tl.from('h1',{yPercent:100,duration:.32,ease:'power3.out'}).from('article h2 .line',{yPercent:105,stagger:.08,duration:.32,ease:'power3.out'},'-=.1')`. Photos get a halftone SVG mask. Use CSS `columns` for body text so reflow is real.

Claude vs GPT: both tend to produce a vintage sepia filter plus a rotating headline; ask for the grid, rules, and halftone explicitly and say "no spin, no sepia filter".

## Blending notes
Carries: columns and rules, the head hierarchy, halftone, off-white paper. Blend with screenprint or risograph-print for a punk press or pamphlet voice, with engraving-etching for a Victorian register, with banknote-guilloche for a certificate-of-record voice. Breaks: smooth gradients, glass, glow, centred layouts.

## Sources
- https://en.wikipedia.org/wiki/Broadsheet — 1712 page-count tax origin, tax reduced from the 1830s and ended 1855, US front page 12 x 22.75 in (many 11 x 21), above-the-fold logic, tabloid contrast (fetched)
- https://en.wikipedia.org/wiki/Newsprint — low-cost non-archival wood pulp with an off-white cast, brittle and yellow with lignin (fetched)
- https://en.wikipedia.org/wiki/Halftone — dot screens, newsprint screen about 85 lpi (fetched)
- https://en.wikipedia.org/wiki/Didone_(typography) — vertical stress, hairline serifs, thick-thin contrast (fetched)
- https://www.typewolf.com/old-standard-tt — Old Standard TT by Alexey Kryukov, regular/italic/bold only (fetched)
- https://commons.wikimedia.org/wiki/File:Titanic-NYT.jpg — NYT front page scan, measured (fetched via FilePath); Duke Chronicle 1980 and Chicago Bee 1938 scans also measured
- Blocked: Library of Congress Chronicling America page (403). Proposed (not sourced): six columns, hex values, type scale, ms timings, 3D parameters.
