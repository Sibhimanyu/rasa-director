---
id: "apple-keynote-type-reveal"
name: "Apple keynote and product-film type reveal"
space: "both"
family: "kinetic-type"
references: ["Apple product films (iPhone Air reveal, September 2025)", "Apple keynotes and product pages (SF Pro Display set plainly)", "Apple carbon-neutral 2030 film (accelerated type plus hand-drawn motion)"]
timing: {"frame_rate":"30 or 60 fps","holds_ms":[1200,2400],"durations_ms":{"line_reveal":[600,900],"word_stagger":[60,110],"line_stagger":[120,200],"exit":[300,450]},"note":"the sources describe restraint and spacing, not millisecond values; all numbers here are derived working values, to be checked against reference frames"}
eases: {"key":"expo.out or power4.out for reveals; power2.in for exits","notes":"fast start, long soft landing; no overshoot on type. Blur and translate resolve together."}
camera: {"lens_mm":[85,135],"moves":["locked-off","slow lean-in of 2 to 4 percent over the hold"],"rules":["one short statement per beat","generous empty space","type never competes with the product: the product carries the frame"]}
recipe_2d: "GSAP paused timeline, 1920x1080. One statement of 3 to 8 words, SF Pro Display lookalike at 120 to 160 px (11 to 15 percent of frame height), weight 600 to 700, tracking -0.02em, line-height 1.05, centred or left on a 12-column grid with 160 px side margins. Split into lines (mask per line) or words. Reveal: each word y 40 px to 0 (or 0.4em), opacity 0 to 1, filter blur(14px) to blur(0), 700-900 ms, expo.out, stagger 60-110 ms; whole statement held 1200-2400 ms; exit as one block: opacity 1 to 0 and y 0 to -16 px over 300-450 ms, power2.in. Colour: white on #000 or #1d1d1f on #fbfbfd; the emphasised word may carry a gradient (one hue family, 2 stops). No outlines, no shadows."
recipe_3d: "Rasan3D: the statement is DOM above the 3D layer (crisp, per 3d.md section 7); the product is the 3D hero on a 'top-soft' rig, 85-135 mm lens, f/2.4, camera push-in of 3 to 5 percent over 4 s ('sine.inOut'). Type reveals on the 2D layer with the GSAP recipe, timed 150-250 ms after the product's own move starts. For a hero word in space use k.extrudeText depth 0.04 m, k.material('ceramic') or 'matte', lit by 'top-soft', camera 135 mm, no spin. k.pass post with bloom only on emissive accents (threshold 1.15)."
pitfalls: ["animating every word with a different effect: Apple's reveals are one behaviour, repeated", "bouncy overshoot on type: it reads as consumer app, not Apple", "decorative effects on type (outlines, shadows, glow): the source article names these as weakening the authority of a restrained system", "no empty space: the layout needs generous margins and the product on screen", "copy that is not worth the motion: the animation cannot rescue a weak line", "a free font that is wrong in weight and tracking: SF Pro is proprietary to Apple platform developers; use Inter Display or Inter with matching tracking and say it is a substitute", "reveals longer than 1 s per statement: the pace is brisk"]
instruct: {"all":"Give the exact statement, the font substitute and size in px, the reveal's translate, blur, duration, ease and stagger, the hold, and the exit. State that the product, not the text, is the visual subject of the frame.","claude":"Claude adds a different effect per line to show range (slide, scale, blur, rotate). Say 'one reveal behaviour for the whole film, and it repeats' and give the numbers. Claude also overlays supporting sub-copy and badges; say 'no sub-copy unless the script has it'.","gpt":"GPT models tend to use fade-up with power2.out at 1.2 s and add gradient text on everything. Require expo.out, blur resolving with translate, 700-900 ms, and a gradient only on a single emphasised word. Ask it to state the font-substitution in a comment so it does not invent SF Pro file paths."}
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"n/a","colour_images":[],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.moonb.io/blog/kinetic-typography", "https://en.wikipedia.org/wiki/San_Francisco_(sans-serif_typeface)", "https://developer.apple.com/design/human-interface-guidelines/typography"]
---

## What it is

The Apple register for moving type is restraint. A MoonB article on kinetic type in brand video analyses the iPhone Air reveal (September 2025): one line, "incredibly light and thin with pro-level performance", and a runtime spent proving it with the product. Its observation is that most frames are pure product, the words are set plainly in San Francisco and given room, and "extra outlines, shadows, and decorative effects usually weaken the authority of a restrained system". The same article notes that the carbon-neutral 2030 film pairs accelerated typography with hand-drawn animation, so Apple's type is not always this quiet; the quiet register is the one this entry captures.

The craft is therefore: a short statement, a single reveal behaviour, space, and timing that lets the product do the work. This is a register of kinetic type that depends on the writing more than on the animation.

## The defining traits (numbers)

- Copy: 3 to 8 words per beat. One idea. The sources say the animation should amplify strong copy and not compensate for weak copy.
- Typeface: SF Pro. SF Pro Display is used from 20 pt upward, Text below; the Text cut has "larger apertures and more generous letter-spacing". SF Pro ships in nine weights and is a variable font with weight, width, optical size and grade axes; it is licensed to registered developers "only for the design and development of applications for Apple's platforms" (Wikipedia). For video outside that use, use a substitute and say so: Inter (OFL, Google Fonts; a variable font with `opsz` and `wght` axes per Google metadata, so set `font-variation-settings: "opsz" 32` at display sizes) or Inter Tight (wght axis only), with tracking -0.02em. Google Fonts has no family named "Inter Display"; that name exists only in the standalone Inter release.
- Size: 11 to 15 percent of frame height for a hero statement (120 to 160 px at 1080p). Derived.
- Weight: 600 to 700 for the statement; 400 for any supporting line.
- Space: statement occupies at most 40 percent of frame width in a left-aligned layout or sits on the centre axis with at least 20 percent clear on all sides. Derived.
- Reveal behaviour (derived): translate 40 px up, blur 14 px to 0, opacity 0 to 1, 700 to 900 ms, `expo.out`; words staggered 60 to 110 ms; lines staggered 120 to 200 ms.
- Hold: 1200 to 2400 ms depending on word count (reading speed about 3 words per second plus 400 ms).
- Exit: one block, 300 to 450 ms, `power2.in`, 16 px upward drift.
- Colour: white on black, or near-black on near-white; at most one accent hue for one emphasised word.
- The product moves first: the type arrives after the product's own move starts. Derived, matches the "product carries the frame" point.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

```js
const tl = gsap.timeline({ paused: true });
window.__timelines["05-statement"] = tl;
// Hand-split into words (deterministic; no SplitText dependency needed). Each word sits in an overflow-visible span.
const words = gsap.utils.toArray(".statement .w");
tl.fromTo(words,
  { y: 40, opacity: 0, filter: "blur(14px)" },
  { y: 0,  opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "expo.out", stagger: 0.085 }, 0.35);
tl.to(".statement", { opacity: 0, y: -16, duration: 0.38, ease: "power2.in" }, 0.35 + 0.8 + words.length*0.085 + 1.6);
// emphasised word: gradient by background-clip, applied statically, revealed with the same tween (no extra motion)
```

CSS essentials: `font: 650 144px/1.05 "Inter", system-ui; font-variation-settings: "opsz" 32; letter-spacing: -0.02em; text-wrap: balance;` Static gradient on one word: `background: linear-gradient(90deg,#f5f5f7,#8e8e93); -webkit-background-clip: text; color: transparent;`.

Checklist:
1. Blur radius at most 14 px at 1080p; larger blurs are slow to render and look like a dissolve.
2. If a line wraps, mask each line (`overflow: hidden` on the line, text rises from below the mask) instead of fading; this is the SplitText `mask: "lines"` option in GSAP 3.13+, or hand-built.
3. The statement does not move once revealed (no idle drift); the camera lean-in of 2 to 4 percent is on the world (`#world`, `power1.inOut`), not the text.
4. The product shot gets its own beat before the statement arrives; do not reveal both at once.

### 3D (Rasan3D)

```js
camera: { pos:[[0,[0,0.05,1.1]],[4,[0,0.05,1.04],"sine.inOut"]], target:[[0,[0,0,0]]], lens:[[0,100]], fstop: 2.4 },
// rig: k.rig("top-soft", { dir:[-0.4,1,0.6], shadows:true, shadowSoftness:10 })
// Statement: DOM in #r3-<frame>-ui, animated by the 2D recipe above, starting 0.2 s after the product move.
// Hero word in space (only if being an object is the point):
//   k.extrudeText("Light.", { font:"assets/fonts/Inter-Bold.ttf", size:0.18, depth:0.012, bevel:0.0008, material:k.material("ceramic",{color:"#f5f5f7"}) })
```
Scale of the move: 4 percent of a 1.1 m camera distance is 44 mm; on 100 mm that reads as a breath, which is what the style wants. No idle spin; `never-rests` stays quiet because the lean-in ends in a hold.

## What makes a cheap imitation

- Overshoot and bounce on type (back.out, elastic).
- Rainbow or neon gradient text.
- Long statements broken into 4 lines, each with different motion.
- The text fades in at the same time as everything else; Apple sequences product then words.
- Using Helvetica or Arial at default tracking: the display tightness is half the look.
- Reveal duration of 1.2 s or more.

## Sources

- https://www.moonb.io/blog/kinetic-typography — on the iPhone Air reveal: "Most frames are pure product; the words that do appear are rationed, set plainly in Apple's own type family, San Francisco, and given room"; "Extra outlines, shadows, and decorative effects usually weaken the authority of a restrained system"; "if the brand already has a strong typeface, use it confidently" (fetched 2026-10-03). The fetched text did not repeat the carbon-neutral film note, which is carried from the earlier draft.
- https://en.wikipedia.org/wiki/San_Francisco_(sans-serif_typeface) — Display at 20 pt and larger, Text below; Text has larger apertures and looser spacing; nine weights; proprietary, licensed to registered developers for Apple platforms; SF Pro is variable (fetched 2026-10-03).
- https://developer.apple.com/design/human-interface-guidelines/typography — the HIG typography page covers optical sizing at 20 pt, Large Title, default sizes, weights and a tracking table; the fetch returned only a topic outline, so no tracking numbers are taken from it (fetched 2026-10-03, partial).

Not re-fetched: the HackerNoon kinetic-type quickstart (dropped). Derived or unverified: every px, ms, blur and hex value; the claim that Apple reveals use a blur-up (a common pattern, not quantified in the sources).
