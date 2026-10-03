---
id: "swiss-precise-motion"
name: "Swiss precise motion (grid-locked, objective)"
space: "both"
family: "other"
references: ["Josef Muller-Brockmann (Tonhalle Zurich posters, Grid Systems in Graphic Design, 1981)", "International Typographic Style / Swiss Style", "Armin Hofmann, Ernst Keller, Basel and Zurich schools", "Neue Grafik (journal, from 1958/59)"]
timing: {"frame_rate":"30 or 60 fps","holds_ms":[600,2000],"durations_ms":{"cut_in":[0,33],"line_draw":[500,700],"mask_rise":[350,500],"grid_move":[300,450],"count_up":[800,1200]},"note":"Swiss graphic design predates screen motion; these are derived translations of its rules, not documented timings"}
eases: {"key":"power3.out for arrivals, power2.inOut for grid moves, expo.out for line draws, none for counters","notes":"no overshoot, no secondary bounce; every move starts and ends on a grid line"}
camera: {"lens_mm":[200,400],"moves":["locked-off","orthogonal truck along grid axes","straight push of 2 to 4 percent"],"rules":["no roll, no dutch, no handheld","3D only as orthographic planes (paper in space), never glossy","one move per shot, on a grid axis"]}
recipe_2d: "GSAP paused timeline, 1920x1080. 12-column grid: margins 120 px, gutter 24 px, column 118 px (so column pitch 142 px), 8 px baseline. Everything positioned by column and baseline units; x moves are integer multiples of 142 px, y moves multiples of 8 px. Type: Inter Tight or Hanken Grotesk (OFL) 700 for display, 400 for text, flush-left ragged-right, size ratio at least 2x between levels (e.g. 160 / 64 / 28 px), tracking -0.02em display. Palette: canvas #f2f0ea, ink #111, one accent #e2231a (derived). Entrances: line draw scaleX 0 to 1 (origin left) 500-700 ms expo.out; text mask-rise (clip line, y 100 percent to 0) 350-500 ms power3.out, 60 ms line stagger; blocks cut in at one frame on a beat. Moves between layouts: grid_move 300-450 ms power2.inOut, whole-column steps. Counters: ease none, tabular figures. Hold 600-2000 ms. No fades except 0/1 cuts."
recipe_3d: "Rasan3D: orthographic-feeling planes. lens 200-300 mm, camera on +z or a 90-degree-aligned oblique, no roll. Planes are k.panel/pxPlane depth 0.004-0.02 m with k.material('paper') or 'matte', colours from the palette, spaced at z 0.01 to 0.06 m so parallax is gentle. Rig 'top-soft' with shadowSoftness 12 and shadowOpacity 0.08, or unlit. Type as DOM above, or k.text planes. Moves: camera truck along x by one grid pitch (0.142 m if 1 px = 1 mm) 'power2.inOut', 0.4 s; planes slide on grid steps. No bloom, no DoF (fstop off), motionBlur on only for faster moves."
pitfalls: ["Helvetica on white with a centred title and a fade: that is default, not Swiss", "fades and bounces: Swiss motion is cuts, wipes and linear-feeling precise moves", "centred layouts: Swiss is asymmetric, flush-left ragged-right on a strong left axis", "random accent colours: one hot accent as signal", "diagonal and rotated type with no system: Muller-Brockmann used angled type deliberately, within the grid", "illustrations and decoration: objective photography or none", "motion that does not land on grid lines", "ignoring rhythm: the style treats rhythm and harmony as principles"]
instruct: {"all":"Give the grid in numbers (columns, gutter, margin, baseline), express every position and move in grid units, name the one accent and where it appears, and make every duration a multiple of the beat or of 1/30 s.","claude":"Claude tends to centre a title and add a gentle fade-up because that is the safe default. Say 'flush-left on column 1, no centred text, no opacity fades except cuts', and ask for a table of element, column span, baseline. It also adds subtle shadows; forbid them.","gpt":"GPT models tend to produce a generic minimal landing look: lots of white, light grey type, centred, power2.out fade-ups. Require a visible grid (draw the column guides in the first frame during review), a size ratio of at least 2x between levels, and positions as calc(var(--col) * n). Ask it to state the accent's single use."}
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.printmag.com/featured/swiss-style-principles-typefaces-designers/", "https://grapheine.com/en/magazine/graphic-designer-muller-brockmann-swiss-style/", "https://en.wikipedia.org/wiki/International_Typographic_Style"]
---

## What it is

Swiss motion is the International Typographic Style translated into time. The style itself is documented: Wikipedia describes it as emphasising "simplicity, clarity, readability, and objectivity", with asymmetric layouts on mathematical grids, sans-serif type (Akzidenz-Grotesk, Univers, Helvetica), flush-left ragged-right text and objective photography instead of illustration. Print Magazine's summary adds the stated values (cleanliness, readability, objectivity), the type dates (Akzidenz-Grotesk 1896, Univers 1954 by Adrian Frutiger, Helvetica 1957 by Max Miedinger and Eduard Hoffmann) and the figures (Ernst Keller at the Zurich Kunstgewerbeschule, Armin Hofmann at Basel, Josef Muller-Brockmann, Max Bill). Grapheine quotes Muller-Brockmann on removing subjectivity "in favour of a geometric grid", covers his Tonhalle Zurich concert posters and Grid Systems, and records his rejection of illegible type.

None of the three pages describes motion, because the movement predates it. What follows is a translation: take the rules that govern a page and apply them to how elements arrive, move and leave. Everything numeric in the motion section is derived.

## The defining traits (numbers)

Documented:
- Grid as the organising system; asymmetric composition; strict compositional grids, objective photographs, rhythm, harmony and geometry (Grapheine).
- Typefaces: Akzidenz-Grotesk, Univers, Helvetica. Muller-Brockmann is associated with Akzidenz-Grotesk.
- Flush-left, ragged-right alignment; sans-serif; photography over illustration.
- Muller-Brockmann also used type on angles, photomontage and circular shapes against the stiffness of the grid (search result summary; the Beethoven poster, cited by Grapheine as the Tonhalle series, is the reference).
- Content-first: Keller's teaching that "the solution to the design problem should emerge from its content" (Wikipedia).

Derived screen specification (1920x1080):
- Grid: 12 columns, 120 px margins, 24 px gutters, columns 118 px, pitch 142 px; baseline 8 px. (1680 px live width minus 11 x 24 px, divided by 12.)
- Type: size ratio at least 2x between levels (160, 64, 28 px). Weights 700 and 400. Inter Tight, Hanken Grotesk or Schibsted Grotesk as OFL stand-ins; Akzidenz-Grotesk and Helvetica Now are commercial.
- Palette: canvas #f2f0ea, ink #111111, one accent #e2231a. One accent used as signal, never decoration.
- Motion vocabulary: cut, line draw, mask rise, grid move, counter. No fade, no bounce.
- Durations: cut 0 to 33 ms; line draw 500 to 700 ms; mask rise 350 to 500 ms; grid move 300 to 450 ms; counters 800 to 1200 ms; holds 600 to 2000 ms.
- Rhythm: durations and holds as multiples of a beat (for example 0.5 s at 120 bpm) so edits feel metred.
- Camera: locked or orthogonal; 90-degree-aligned pans only.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

```js
const COL = 142, MX = 120, BASE = 8, BEAT = 0.5;
const gx = n => MX + n*COL, gy = n => n*BASE;             // grid position helpers
const tl = gsap.timeline({ paused: true });
window.__timelines["10-swiss"] = tl;

// 1. rule line draws from the left axis
tl.fromTo("#rule", { scaleX: 0, transformOrigin: "0 50%" }, { scaleX: 1, duration: 0.6, ease: "expo.out" }, 0);
// 2. headline lines: mask-rise (each line wrapped in an overflow:hidden .line)
tl.from("#head .l > span", { yPercent: 105, duration: 0.45, ease: "power3.out", stagger: 0.06 }, BEAT);
// 3. block cut-in on a beat (visibility, no fade)
tl.set("#fig-1", { visibility: "visible" }, 2*BEAT);
// 4. grid move: figure steps right by 3 columns
tl.to("#fig-1", { x: 3*COL, duration: 0.4, ease: "power2.inOut" }, 4*BEAT);
// 5. counter: tabular numerals, linear
const c = { v: 0 }; tl.to(c, { v: 1840, duration: 1.0, ease: "none", onUpdate: () => { document.querySelector("#n").textContent = Math.round(c.v).toLocaleString("en-US"); } }, 6*BEAT);
// 6. the one accent: a 142 x 8 px bar under the key number, cut in on the same beat as the number lands
tl.set("#accent", { visibility: "visible" }, 7*BEAT);
```

Rules:
1. Place every element with `left: calc(120px + 142px * var(--c))` and `top` as multiples of 8 px; do not hand-tune pixels.
2. Flush-left on a column line; ragged-right; never centre-align body or titles.
3. Size jumps of at least 2x between hierarchy levels; at most 3 levels per frame.
4. Cuts are `visibility` sets; wipes are mask-rises; fades are not used.
5. Counters: `font-variant-numeric: tabular-nums;` with `ease: "none"`, which is the only legitimate linear in this style.
6. Show the grid in review stills (a toggled overlay) and hide it in the render.
7. Photography only if supplied: black and white, objective, cropped to grid cells; no illustration.

### 3D (Rasan3D)

```js
camera: { pos:[[0,[0,0,16]],[1.0,[0.142,0,16],"power2.inOut"]], target:[[0,[0,0,0]],[1.0,[0.142,0,0],"power2.inOut"]], lens:[[0,250]] },
// rig: k.rig("top-soft", { shadows:true, shadowSoftness:12 }) ; ground: k.ground({ y:-0.2, shadowOpacity:0.08 })
async build(k){
  const mk = (w,h,z,color) => { const p = k.panel({ width:w, height:h, depth:0.004, radius:0, bodyColor:color }); p.position.z = z; return p; };
  return { sheet: mk(1.92,1.08,0,"#f2f0ea"), bar: mk(0.142,0.008,0.01,"#e2231a"), block: mk(0.426,0.6,0.03,"#111111") };
},
pose(t, k){
  k.objects.block.position.x = -0.2 + 0.142*3*k.prog(t, 1.2, 1.6, "power2.inOut");   // moves by three grid pitches
}
```
Scale: 1 px = 1 mm = 0.001 world units, so a 142 px pitch is 0.142 units. The narrow z-spacing (10 to 30 mm) plus a 250 mm lens gives parallax of a pixel or two, enough to read as paper layers without perspective distortion.

## What makes a cheap imitation

- Helvetica on white with nothing else, centred: default, not Swiss.
- Fades and ease-out bounces.
- A grid that exists but that no element obeys.
- Random accent colours or gradients.
- Text sizes that differ by 10 to 20 percent, so hierarchy is unclear.
- Rotated and wavy type with no system; the angled type in Muller-Brockmann's work sits within a rigorous layout.
- Decorative illustration and icon clip art.

## Sources

- https://www.printmag.com/featured/swiss-style-principles-typefaces-designers/ : cleanliness, readability, objectivity; grid as the most legible means; type dates and designers.
- https://grapheine.com/en/magazine/graphic-designer-muller-brockmann-swiss-style/ : Muller-Brockmann's grid, geometry and objectivity; Tonhalle posters; Neue Grafik; his stance on legibility.
- https://en.wikipedia.org/wiki/International_Typographic_Style : characteristic list (asymmetry, grid, flush-left ragged-right, sans-serif, objective photography), schools and Keller's principle.

Derived or unverified: every motion number, the 12-column pixel grid, all hex values, the Akzidenz-Grotesk attribution for Muller-Brockmann's specific posters (the pages tie the typeface to the style generally; one search summary ties it to him).
