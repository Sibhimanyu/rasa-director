---
id: "material-motion-easing"
name: "Material Design motion: easing, duration tokens and transition patterns"
space: "both"
family: "ui-motion"
references: ["Material Design 3 easing and duration tokens", "Material Design 3 transition patterns (container transform, shared axis, fade through, fade)", "Material 3 Expressive spring tokens (fast, default, slow; spatial and effects)", "Material Design 1 standard curve"]
timing: {"frame_rate":"60 fps for UI recordings, 30 acceptable","holds_ms":[400,1200],"durations_ms":{"micro":[50,150],"small":[150,250],"medium":[250,400],"large":[400,600],"hero":[500,700]},"tokens":"M3 duration tokens run 50 to 1000 ms across short, medium, long and extra-long (search result and vocut summary); short1 50, short2 100, medium1 250, medium2 300, long1 450, long2 500 are listed in a search result; the remaining values are not verified here","desktop_m1":"150 to 200 ms; mobile 300 ms; tablet about 390 ms (Material 1 baselines per vocut summary)"}
eases: {"key":"emphasized (0.2, 0, 0, 1); emphasized-decelerate (0.05, 0.7, 0.1, 1); emphasized-accelerate (0.3, 0, 0.8, 0.15); standard (0.2, 0, 0, 1)","notes":"entering elements decelerate, exiting accelerate, exits 20 to 30 percent shorter than entrances. The emphasized curve 'does 80 percent of the distance in the first 20 percent of the time' (toolbox365). Material 1 standard was (0.4, 0, 0.2, 1)."}
camera: {"lens_mm":[50],"moves":["locked-off","shared-axis Z as a short dolly of 3 to 6 percent"],"rules":["the UI container moves, the camera does not","depth is expressed by elevation and scale, not by perspective"]}
recipe_2d: "GSAP paused timeline. Register curves: CustomEase.create('m3emph','0.2,0,0,1'); CustomEase.create('m3dec','0.05,0.7,0.1,1'); CustomEase.create('m3acc','0.3,0,0.8,0.15'). Enter: 400 to 500 ms on m3dec; move (large reposition): 500 ms on m3emph; exit: 200 to 300 ms on m3acc. Container transform: one tween from the card's rect to the full-screen rect (x, y, width via scale on a clip, border-radius 12 to 0 px) over 500 ms on m3emph while the card's content fades out in the first 90 ms and the new content fades in from 90 to 300 ms. Shared axis (x): outgoing x 0 to -30 px, opacity 1 to 0 in 90 ms m3acc; incoming x +30 to 0, opacity 0 to 1, from 90 ms to 300 ms m3dec (the 30 px and the 90/210 split are from my memory of the Material components, unverified here). Fade through: out 90 ms, in 210 ms with scale 0.92 to 1 (unverified). Stagger list items 30 to 50 ms."
recipe_3d: "Rasan3D: a stack of k.panel slabs in one world, camera 50 mm, fstop 5.6. pose(t,k) maps k.prog(t, a, b, 'expo.out') or a CustomEase-derived k.ease to panel x/y/scale; elevation = z offset 0.02 to 0.12 m with soft shadow from a 'top-soft' rig and a k.ground catcher; container transform = the panel's scale/position morph from the card rect (via k.layout(at:0)) to the screen rect (k.layout(at:end)). Shared axis Z = camera.pos z key 3 to 6 percent over 400 ms with 'power3.inOut' while panels cross-fade (opacity of unlit faces)."
pitfalls: ["ease-in-out everywhere: Material distinguishes entering (decelerate), exiting (accelerate) and moving (emphasized)", "linear easing for movement", "same duration for every distance: duration proportional to travel", "overshoot on standard spatial motion in M3 (non-expressive); springs with overshoot are an Expressive choice and should be declared as one", "long exits: exits are shorter than entrances", "fading in place with no spatial relationship: the container transform and shared axis exist to show where content came from", "mixing M1 and M3 curves in one film"]
instruct: {"all":"Name the pattern per transition (container transform, shared axis, fade through, fade) and, for each, the curve token and duration; state which direction each element travels and what it came from.","claude":"Claude tends to pick one ease (power2.inOut) for the whole film and overshoot with back.out for delight. Provide the three registered curves and a rule table (enter, exit, move) and ask it to label each tween with the token name in a comment. Claude may also reverse an exit with the entrance's curve; say that exits are accelerate and 20 to 30 percent shorter.","gpt":"GPT models tend to write cubic-bezier(0.4,0,0.2,1) 300 ms for everything (the Material 1 curve) and call it Material 3. Say 'M3 curves only (0.2,0,0,1 and the decelerate/accelerate pair)', and require CustomEase.create calls with the exact strings. They also animate height and width; require transform and clip."}
verified: {"sources_fetched":4,"non_wikipedia":4,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.toolbox365.net/tutorials/easing-curves-m3-ios/", "https://wwnorton.github.io/design-system/docs/foundations/motion/", "https://github.com/anzy-renlab-ai/vocut/blob/main/docs/research/methodology/material-motion.md", "https://m3.material.io/styles/motion/transitions/transition-patterns"]
---

## What it is

Material Design motion is a token system: a small set of easing curves and a ladder of durations, paired to four transition patterns. The M3 pages at m3.material.io named the patterns (container transform, shared axis, fade through, fade) but my fetches of the easing and duration spec pages returned only prose summaries, so the numbers in this entry come from secondary pages that quote the tokens. Where I could not find a number on a fetched page it is marked unverified.

Material 3 Expressive (2025) layers spring tokens on top: fast, default and slow variants for spatial properties (position, size, shape, orientation; allowed to overshoot) and for effects (colour, opacity; no overshoot), each defined by damping and stiffness so motion scales with the device. I could not retrieve the numeric stiffness and damping values from a fetched page.

## The defining traits (numbers)

Easing tokens, as quoted by the toolbox365 tutorial:
- standard: cubic-bezier(0.2, 0, 0, 1), for secondary motion (buttons, chips).
- emphasized: cubic-bezier(0.2, 0, 0, 1) as a CSS approximation; the tutorial notes it does about 80 percent of the distance in the first 20 percent of the time. (In M3 the true emphasized curve is a two-segment path; a single bezier is an approximation. Unverified.)
- emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1), entering elements, strong initial movement.
- emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15), exiting elements.
- Material 1 standard: cubic-bezier(0.4, 0, 0.2, 1) "quickly accelerate, slowly decelerate" (vocut summary and the Norton design system).

Duration:
- M3 tokens span 50 to 1000 ms. Listed in a search result: short1 50, short2 100, medium1 250, medium2 300, long1 450, long2 500. Others unverified.
- Norton's Material implementation: selections 100 ms, entrances 150 ms, shape changes 200 ms, detailed transformations up to 500 ms; open 250, close 200, expand 300, collapse 250.
- Material 1 baselines: 300 ms mobile, about 390 ms tablet, 150 to 200 ms desktop.
- Rule from toolbox365: exits 20 to 30 percent faster than entrances; spring/overshoot reserved for success feedback.
- Norton adds a duration scalar that drops to 0 under reduced motion: for a film, ignore it.

Transition patterns (names fetched from m3.material.io): container transform, shared axis, fade through, fade. Per-pattern numbers are unverified except where marked in the recipe.

Typography and shape that usually accompany it (derived, not from the motion pages): Roboto or Roboto Flex (OFL, Google Fonts), 12 to 28 dp radii, tonal surfaces with elevation by tint.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

```js
gsap.registerPlugin(CustomEase);
CustomEase.create("m3emph", "0.2,0,0,1");
CustomEase.create("m3dec",  "0.05,0.7,0.1,1");
CustomEase.create("m3acc",  "0.3,0,0.8,0.15");
const tl = gsap.timeline({ paused: true });
window.__timelines["07-material"] = tl;

// Container transform: card (480x320 at 720,280) to full screen
const T0 = 0.6;
tl.to("#card",   { x: -720, y: -280, width: 1920, height: 1080, borderRadius: 0, duration: 0.5, ease: "m3emph" }, T0)
  .to("#card .summary", { opacity: 0, duration: 0.09, ease: "none" }, T0)
  .fromTo("#detail", { opacity: 0 }, { opacity: 1, duration: 0.21, ease: "none" }, T0 + 0.09);

// Shared axis X to the next page
tl.to("#page-a", { x: -30, opacity: 0, duration: 0.09, ease: "m3acc" }, 2.0)
  .fromTo("#page-b", { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.21, ease: "m3dec" }, 2.09);

// List enter: 40 ms stagger, entering uses decelerate, 400 ms
tl.from(".row", { y: 24, opacity: 0, duration: 0.4, ease: "m3dec", stagger: 0.04 }, 3.0);
```

Rules:
1. Every tween names its role in a comment: enter, exit, move, or fade. Enter uses `m3dec`, exit `m3acc`, move `m3emph`.
2. Exits are 20 to 30 percent shorter than the matching entrance.
3. Duration scales with distance: 100 px about 250 ms, 500 px about 400 ms, full screen about 500 ms (derived).
4. Animating `width` and `height` in a container transform is a render-cost and shimmer risk; for text-heavy content use a clip-path inset on a full-size layer instead and keep transform-only movement.
5. Register the curves in `motion.md` so the 2D obey check treats them as the film's ease set (CustomEase names are not among GSAP's built-ins).

### 3D (Rasan3D)

```js
camera: { pos:[[0,[0,0,3.0]],[0.4,[0,0,2.88],"power3.inOut"]], target:[[0,[0,0,0]]], lens:[[0,50]], fstop: 5.6 },
async build(k){
  const card = k.panel({ width:0.48, height:0.32, depth:0.012, radius:0.03, texture:k.image("assets/screens/card.png") });
  const detail = k.panel({ width:1.92, height:1.08, depth:0.012, radius:0, texture:k.image("assets/screens/detail.png") });
  return { card, detail };
},
pose(t, k){
  const e = k.prog(t, 0.6, 1.1, "expo.out");                 // closest named GSAP ease to the emphasized curve
  k.objects.card.position.set(-0.72*(1-e), 0.28*(1-e), 0.04 + 0.08*(1-e));
  k.objects.card.scale.setScalar(1 + 3.0*e);
  k.objects.detail.material.opacity = k.prog(t, 0.69, 0.9, "none");
}
```
`k.ease("expo.out")` stands in for the emphasized curve because a CustomEase object is not a 3D-gated ease name; declare it with `declare.intent["custom-ease"]`.

## What makes a cheap imitation

- `ease-in-out` and `power2.inOut` on every move.
- Overshoot on every card: M3 spatial moves settle; only Expressive springs overshoot.
- Fades with no spatial origin: a card that appears out of nowhere cannot be container-transformed.
- Same duration regardless of distance.
- Exit and entrance mirror images: exits should be quicker and use acceleration.
- Using Material colours and elevation but standard web `ease` timing.

## Sources

- https://www.toolbox365.net/tutorials/easing-curves-m3-ios/ : the four M3 curve values, the 80-in-20 description, enter/exit and spring guidance, exits 20 to 30 percent faster.
- https://wwnorton.github.io/design-system/docs/foundations/motion/ : durations by role (100, 150, 200, 250, 300, 500 ms), Material 1 standard curve, duration scalar.
- https://github.com/anzy-renlab-ai/vocut/blob/main/docs/research/methodology/material-motion.md : M1 vs M3 summary, 50 to 1000 ms token range, platform baselines.
- https://m3.material.io/styles/motion/transitions/transition-patterns : names the four patterns; numeric detail not returned by my fetch.
- Also fetched without usable numbers: https://m3.material.io/styles/motion/easing-and-duration/tokens-specs and https://m3.material.io/styles/motion/overview/specs (prose summaries only), https://m3.material.io/blog/m3-expressive-motion-theming.

Derived or unverified: the 30 px and 90/210 ms shared-axis and fade-through numbers, per-distance durations, the two-segment emphasized curve note.
