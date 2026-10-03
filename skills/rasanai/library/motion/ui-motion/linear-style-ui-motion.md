---
id: "linear-style-ui-motion"
name: "Linear-style UI motion (calm, dark, dense)"
space: "both"
family: "ui-motion"
references: ["Linear app UI (2024 redesign, 'a calmer interface for a product in motion')", "Linear.app marketing site (dark shell, product-first)", "the wider 'Linear design' SaaS trend"]
timing: {"frame_rate":"60 fps preferred for UI; 30 acceptable","holds_ms":[500,1500],"durations_ms":{"micro":[100,150],"simple":[150,220],"panel":[220,320],"hero_reveal":[500,800]},"note":"none of these appear on the Linear pages fetched; they are derived working values in the common UI range. The performance.dev breakdown that discusses Linear's animation choices could not be fetched."}
eases: {"key":"power3.out for entrances (ease-out is about 80 percent of UI motion), power2.inOut for moves, power2.in for exits","notes":"restraint: translate 6 to 16 px with opacity, scale from 0.98; no springs with overshoot; no bounce; transitions on list rows are avoided in the product (search-result claim, unverified)"}
camera: {"lens_mm":[50,85],"moves":["locked-off","slow 2 to 4 percent push into one panel","parallax tilt of 3 to 6 degrees on a slab when 3D"],"rules":["structure is felt not seen: hairline borders, low-contrast separators","one glow or gradient accent per frame","the product UI is the hero, shown real"]}
recipe_2d: "GSAP paused timeline, 1920x1080. Ground #08090a-like near-black (derived), panels one step lighter with 1px border rgba(255,255,255,0.08), radii 6/8/12 px (rows, controls, panels per the Fudge analysis), text off-white #f7f8f8 at primary and ~#8a8f98 secondary (derived), Inter Display 64 px weight 510 tracking -1.4 px for headings and Inter 16/24 400 for body (Fudge-reported scale). Reveal: panel y 12 px to 0, opacity 0 to 1, scale 0.985 to 1, 260 ms, power3.out, stagger 40 ms; text lines y 8 px, 180 ms. Hover/focus ring: border opacity 0.08 to 0.2 in 120 ms. Spotlight: radial-gradient(240px circle at var(--mx) var(--my), rgba(255,255,255,0.07), transparent) with --mx, --my driven from a seeded path. Origin-referenced motion: popovers scale 0.96 to 1 from their trigger (transform-origin at the trigger), sidebars slide 16 px from their toggle. Hold 800 to 1500 ms per state."
recipe_3d: "Rasan3D: the product as k.panel slabs (real screenshots, k.image), body #0e0f11, rig 'rim' with dir [0.6,0.8,0.4] and a faint blue-white rim, lens 85 mm, fstop 4, environment 'none' or 'soft' 0.2. Layers exploded at z 0.05 to 0.3 m separate on the beat (320 ms, 'power3.out') and close back. Camera arc 10 to 20 degrees (k.orbit) over 3 s 'sine.inOut'. post: vignette 0.25, grain 0.02, halation small; emissive accent lines (k.material('emissive'), intensity 2) are the only bloom source at threshold 1.15. DOM labels pinned via k.pinDom."
pitfalls: ["glassmorphism and neon gradients everywhere: the Linear register is calm; structure should be felt, not seen", "bounce and overshoot: the product feel is precise", "high-contrast white borders: borders are softened and reduced in number", "saturated brand blue everywhere: Linear limited the brand colour's weight in the colour system", "animating every list row on load", "blurry type from scaling the UI: render the screenshot at 2x and scale down", "mocking the product: use the real UI capture"]
instruct: {"all":"Give the exact surface colours, border alpha, radii, type scale, and per-element translate/opacity/duration/ease. State that nothing overshoots and that borders are hairlines. Name the one accent and where it appears.","claude":"Claude over-delivers on polish: adds gradients, glows and a stagger on every element. Say 'one glow per frame, one stagger group per beat, no bounce' and give the negatives. It may also invent Linear's logo or product UI; ask for the real screenshots.","gpt":"GPT models tend to go for glassmorphism (backdrop-filter blur, purple gradients) as the 'Linear look'. Say 'flat near-black surfaces, 1px rgba(255,255,255,0.08) borders, no backdrop-filter, no purple', and require the type scale in px. It also defaults to 0.6 s fade-ups; require the 180 to 260 ms values."}
verified: {"sources_fetched":4,"non_wikipedia":4,"colours":"partial","colour_images":[],"grid":"sourced","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://linear.app/now/how-we-redesigned-the-linear-ui", "https://linear.app/now/behind-the-latest-design-refresh", "https://design.withfudge.com/share/linear.app-design", "https://linear.app/brand"]
---

## What it is

Linear's UI is the reference for a calm, dark, information-dense product interface that treats motion as a small supporting signal. The company's own posts describe the design principles: the redesign moved colour generation to LCH so lightness is perceptually uniform across hues, increased contrast in text and icons, introduced Inter Display for headings with regular Inter for body, and aimed to "reduce visual noise, maintain visual alignment, and increase the hierarchy and density". The latest refresh pushes further: the sidebar and tabs are dimmed and compacted so the main content area leads, borders and separators are softened and reduced ("structure should be felt not seen"), icons are reduced, and the palette shifts from cool blue-ish grays toward warmer, less saturated grays. A third-party analysis (Fudge) records the marketing site as a dark shell with off-white copy, hairline dividers and a limited warm accent, and states that motion timing is not established by still captures.

So the visual traits are documented; the motion timing is not. This entry takes the documented register (calm, aligned, low-contrast structure) and specifies a motion language consistent with it, labelled as derived.

## The defining traits (numbers)

Documented (Linear posts, Fudge):
- Colour in LCH; contrast raised; brand blue limited in the theme calculation; warmer grays in the latest refresh.
- Headings Inter Display; body Inter. Fudge reports a display size of 64 px, weight 510, tracking -1.408 px; body 16/24 weight 400; label 13 weight 500; compact 12 to 15 weights 450 to 600.
- Spacing: 2 px micro, 8 px tight, 14 to 16 px row, 24 px group, 64 px section, 72 px top margin.
- Radii: 6 px row, 8 px control, 12 px panel, 9999 px pill.
- Brand palette (linear.app/brand): Mercury White `#F4F5F8` and Nordic Gray `#222326`, with a primary colour described as "a subtle desaturated blue". These are the only published hex values; Linear's UI theme is generated from three variables (base, accent, contrast) in LCH, so the in-app surface values below remain derived.
- Borders: Fudge lists a 0.5 px hairline and a 1 px standard border as tokens.
- Dark marketing and workspace treatment, off-white primary copy, lower-contrast gray secondary, fine dark dividers, limited warm status/team accent.
- Principle: not every element should carry equal visual weight.

Derived motion (not from the pages; consistent with the register):
- Entrance: translate 6 to 16 px, opacity, optional scale 0.985 to 1, 180 to 260 ms, `power3.out`.
- Movement between positions: 220 to 320 ms, `power2.inOut`.
- Exit: 120 to 180 ms, `power2.in`.
- Origin-referenced: new elements come from the control that made them (a popover scales out of its trigger; a panel slides in from its toggle). This is a search-result description of Linear's behaviour, unverified by a fetched page.
- Ease-out in about 80 percent of UI animations and micro-interactions at 100 to 150 ms, simple transitions 150 to 200 ms, modals 200 to 300 ms: common range from a search result, not Linear-specific.
- Performance habit (search result, unverified): animate composited properties (transform, opacity), sometimes colour and border colour.
- Hex values are not published in the fetched pages; working values: ground #08090a, panel #0f1011, border rgba(255,255,255,0.08), text #f7f8f8, secondary #8a8f98 (derived; verify against a capture).

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

```js
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const tl = gsap.timeline({ paused: true });
window.__timelines["08-linear-ui"] = tl;
// 1. the shell fades up once, then everything else is relative to it
tl.from("#shell", { opacity: 0, y: 12, scale: 0.985, duration: 0.5, ease: "power3.out" }, 0);
// 2. rows come in as one group, 40 ms apart, 6 px travel (rows are not individually dramatic)
tl.from(".row", { opacity: 0, y: 6, duration: 0.22, ease: "power3.out", stagger: 0.04 }, 0.35);
// 3. focus moves: a ring slides to the selected row (move), the detail panel slides 16 px from its toggle (origin-referenced)
tl.to("#focus-ring", { y: 96, duration: 0.26, ease: "power2.inOut" }, 1.6)
  .fromTo("#detail", { x: 16, opacity: 0 }, { x: 0, opacity: 1, duration: 0.28, ease: "power3.out" }, 1.7);
// 4. spotlight follows a seeded path (pure of t, no pointer events)
const rnd = mulberry32(2024); const pts = Array.from({length: 6}, () => ({ x: 300 + rnd()*1200, y: 200 + rnd()*600 }));
pts.forEach((p, i) => tl.to("#spot", { "--mx": p.x + "px", "--my": p.y + "px", duration: 0.8, ease: "sine.inOut" }, 0.5 + i*0.8));
```

Rules:
1. Surface: `background: #0f1011; border: 1px solid rgba(255,255,255,.08); border-radius: 12px;` no `backdrop-filter`.
2. One accent, used for state (selected, success, focus), not for decoration.
3. Heading `font: 510 64px/1.05 "Inter Display","Inter"; letter-spacing: -0.022em`; Inter Display is in Inter 4.0 on Google Fonts (OFL) as an opsz axis; if unavailable, Inter at 600 with the same tracking.
4. Stagger groups of at most 8 elements per beat; the rest appear with the shell.
5. After a state lands, hold 800 to 1500 ms. Nothing idles.
6. `--mx` and `--my` tweens need `@property` registration or use `gsap.quickSetter` driven values; otherwise animate a plain `x`/`y` on the gradient layer.

### 3D (Rasan3D)

```js
camera: { pos: Rasan3D.orbit({ center:[0,0,0], radius:3.2, height:0.3, from:-12, to:8, t0:0, t1:3.2, ease:"sine.inOut" }),
          target:[[0,[0,0,0]]], lens:[[0,85]], fstop: 4 },
// rig: k.rig("rim", { dir:[0.6,0.8,0.4], intensity:0.7 })
async build(k){
  const shell   = k.panel({ width:1.6, height:0.9, depth:0.02, radius:0.02, texture: await k.image("assets/screens/app.png"), bodyColor:"#0f1011" });   // k.image returns a promise
  const sidebar = k.panel({ width:0.34, height:0.9, depth:0.02, radius:0.0, texture: await k.image("assets/screens/sidebar.png") });
  const list    = k.panel({ width:0.8, height:0.9, depth:0.02, radius:0.0, texture: await k.image("assets/screens/list.png") });
  return { shell, sidebar, list };
},
pose(t, k){
  const s = k.prog(t, 1.2, 1.52, "power3.out"), back = k.prog(t, 2.4, 2.72, "power3.inOut");
  k.objects.sidebar.position.z = 0.02 + 0.18*(s - back);
  k.objects.list.position.z    = 0.02 + 0.30*(s - back);
}
```
Edge accent: a 2 mm emissive strip (`k.material("emissive", { color:"#5e6ad2" })` at intensity 2) is the only thing that blooms; verify the Linear accent hex before use (the #5e6ad2 indigo is my recollection, unverified). Post: `vignette` 0.25, `grain` 0.02.

## What makes a cheap imitation

- Glass cards with backdrop blur and a purple-to-pink gradient, labelled "Linear style".
- Bright borders, big shadows, large radii (the real radii are 6 to 12 px).
- Springs and bounce on every panel.
- Animating dozens of rows with a long stagger so nothing reads.
- Fake or generic UI instead of the real product capture.
- High-saturation accent colour used as a fill on large areas.

## Sources

- https://linear.app/now/how-we-redesigned-the-linear-ui — LCH colour ("perceptually uniform"), theme reduced from 98 variables to three (base, accent, contrast), Inter Display for headings with Inter for body, chrome limited for a more neutral and timeless look, contrast raised (fetched 2026-10-03).
- https://linear.app/now/behind-the-latest-design-refresh — sidebar dimmed "a few notches", borders softened and reduced, fewer and smaller icons, cool blue-ish grays to a warmer, less saturated gray, "Structure should be felt not seen" (fetched 2026-10-03).
- https://design.withfudge.com/share/linear.app-design — type scale 64/64 weight 510 tracking -1.408 px, body 16/24, label 13, compact 12 to 15; spacing 2/8/14-16/24/64/72; radii 6/8/12/9999; hairline 0.5 px and standard 1 px borders; states exact colour tokens and motion are not established (fetched 2026-10-03).
- https://linear.app/brand — Mercury White #F4F5F8, Nordic Gray #222326, primary "a subtle desaturated blue" (fetched 2026-10-03).

Not fetched (blocked or failed): the performance.dev breakdown of Linear's animation choices; a LogRocket article (403). Derived or unverified: all motion numbers, all in-app hex values, the indigo accent #5e6ad2 (a recollection), the origin-referenced behaviours.
