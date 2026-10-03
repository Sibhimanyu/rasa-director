---
id: "dolly-zoom-vertigo"
name: "Dolly zoom (the Vertigo effect)"
space: "both"
family: "cinematic"
references: ["Vertigo (1958), Irmin Roberts for Hitchcock", "Jaws (1975), Brody on the beach", "Goodfellas (1990), the diner", "Raging Bull (1980)"]
timing: {"frame_rate":"24 fps source","holds_ms":[600,1500],"durations_ms":[2500,4000],"note":"duration is a derivation for a graphic scene; the sources give none. Once per film at most (3d.md and Morphic both say repetition kills it)"}
eases: {"key":"power2.inOut","notes":"dolly and zoom must use the SAME ease and the SAME times. Because subject distance is linear in focal length, one eased progress drives both and the subject stays exactly the same size."}
camera: {"lens_mm":[24,85],"moves":["dolly back while zooming in (background closes in and compresses)","dolly in while zooming out (background recedes and stretches)"],"rules":["subject size must stay constant: distance / focal length = constant","needs at least two separated planes: a subject and a background that is visibly deeper","continuous focus: key focus with the distance","start and end on a hold; run the move through the line or the realisation"],"formula":"d(t) = d0 * mm(t) / mm0 ; horizontal frame width at the subject = 36 * d / mm (full-frame, 36 mm on the long side); background plane at s metres behind the subject scales by r*(d0+s)/(r*d0+s), r = mm(t)/mm0"}
recipe_2d: "HyperFrames GSAP: subject layer scale constant (1); every other layer scales by the formula. With subject distance d0 = 3 m, end ratio r = 85/24 = 3.542 and layers at s metres behind (+) or in front (-): scale = r*(d0+s)/(r*d0+s). const layers=[{el:'.bg',s:6},{el:'.mid',s:2},{el:'.subject',s:0},{el:'.fg',s:-1}]; const P={r:1}; gsap.set('.l',{transformOrigin:'960px 540px'}); tl.to(P,{r:3.542,duration:3,ease:'power2.inOut',onUpdate(){layers.forEach(L=>gsap.set(L.el,{scale:P.r*(3+L.s)/(P.r*3+L.s)}))}},1.0). Results at r = 3.542: bg (s=6) 1.917, mid (s=2) 1.311, subject 1.000, fg (s=-1) 0.735. For a push-in and zoom-out, tween r from 3.542 to 1 (background stretches). Add focus: blur the bg layer from 4 px to 10 px as r rises (long lens, shallower DoF), 0.5 to 1 px edge softness on the subject. Hold the first 1.0 s and the last 0.8 s. A pure function of r: seek-safe."
recipe_3d: "Rasan3D (metres): subject 1.8 m tall at the origin, background wall at z = -6 (s = 6) with a pattern, a few objects at s = 2. Pull back and zoom in over 3.0 s: camera:{ pos:[[0,[0,1.5,3.0]],[1.0,[0,1.5,3.0]],[4.0,[0,1.5,10.625],'power2.inOut'],[4.8,[0,1.5,10.625]]], target:[[0,[0,1.4,0]]], lens:[[0,24],[1.0,24],[4.0,85,'power2.inOut'],[4.8,85]], focus:[[0,3.0],[1.0,3.0],[4.0,10.625,'power2.inOut'],[4.8,10.625]], fstop:4 }. Check: width at the subject = 36*3/24 = 4.5 m at the start and 36*10.625/85 = 4.5 m at the end; the intermediate mm = 24+61u and d = 3+7.625u keep d/mm = 0.125 at every u. Reverse (push in, zoom out): swap start and end values. If the keys carry different ease names or times the subject breathes: use identical eases and times. Use target y slightly below pos y only if needed for framing; keep target.x = pos.x. fstop 4 lets the background blur grow naturally as the lens lengthens."
pitfalls: ["different ease or duration on the dolly and the zoom: the subject pumps; use the same eased progress for both","a single plane: with nothing deeper than the subject the effect is invisible","the subject moves in the frame: the effect reads as a mistake; hold the subject still or pin it","focus left on a fixed number: key focus with the distance (3d.md focus keys are numeric)","using it for a calm scene: Morphic's own list of mistakes includes wrong emotional context and overuse","uniform scale of #world in 2D: that is a zoom, not a dolly zoom","the 24 to 85 mm range cut short: a 35 to 50 mm range barely shows the stretch"]
instruct: {"all":"State the formula (subject distance proportional to focal length), the start and end lens and distance, the single ease and duration for both, that the subject stays the same size, and which plane is the background; ask for stills at 0, 50 and 100 percent that show the subject width unchanged.","claude":"Give Claude the numbers (24 to 85 mm, 3.0 to 10.625 m, power2.inOut, 3 s) and the formula, and ask it to verify the width at the subject at three times. Left open, it often animates lens only (a zoom) or moves pos only (a dolly); name both.","gpt":"GPT-family output tends to animate fov and camera z with different eases (breathing) or scale the whole 2D frame. Require one progress variable driving both, and per-layer scale from the stated formula in 2D."}
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Dolly_zoom", "https://www.cined.com/the-timeless-craft-of-dolly-zoom-in-film-how-to-execute-it/", "https://morphic.com/ai-glossary/dolly-zoom-zolly"]
---
## What it is

The dolly zoom moves the camera toward or away from a subject while the lens zooms the opposite way, so the subject keeps the same size in frame while the background expands or compresses. Wikipedia credits Irmin Roberts, a Paramount second-unit cameraman, with creating it for Hitchcock's Vertigo using a camera that could change focal length quickly; it names Jaws, Goodfellas and Raging Bull as famous uses. The visual system "cannot reconcile the contradictory spatial signals", which reads as dread, realisation or spatial wrongness (Morphic).

## The defining traits (numbers)

- **The constant.** Distance over focal length stays constant: `d / mm = const`. Wikipedia's geometry: `distance = width / (2 tan(FOV/2))` holds the subject's frame width fixed. Rasan3D's lens is full-frame with 36 mm on the long side, so frame width at the subject is `36 * d / mm`.
- **Direction.** Camera pulls away while zooming in: the background compresses toward the subject and seems to close in. Camera pushes in while zooming out: the background recedes and stretches (Morphic's two variants). Which one Vertigo uses on which shot: not verified in the fetched pages.
- **Rates.** Dolly speed and zoom rate must be "mathematically equivalent" (CineD). Mismatched speeds are the first listed mistake.
- **Focus.** Continuous focus adjustment as distance changes (Morphic).
- **Range.** Too small a zoom range limits the effect (CineD). A usable range for a graphic scene is about 3.5x (24 to 85 mm); this is a derivation.
- **Duration.** No source gives one; 2.5 to 4 s in the recipes is a derivation.
- **Frequency.** Once per film at most (`3d.md`), because the effect's power "diminishes through repetition" (CineD).

## How to build it

**Worked numbers.** Subject at d0 = 3.0 m on 24 mm (frame width 4.5 m). Ending on 85 mm requires d = 3.0 * 85 / 24 = 10.625 m. A wall 6 m behind the subject appears 24/9 = 2.667 and 85/16.625 = 5.113 units at the start and end, so it grows by 1.917x while the subject does not change.

**2D.** The subject layer stays at scale 1. Other layers scale by `r*(d0+s)/(r*d0+s)`, where r is the zoom ratio and s the layer's depth behind (positive) or in front of (negative) the subject. Drive r from one tween with `power2.inOut`; apply the scale in `onUpdate` as a pure function of r. Layers with larger s change most. Blur the background more as r rises to match a longer lens's shallower field. Three planes minimum.

**3D.** Key `pos`, `lens` and `focus` with the same times and the same ease; since d and mm are linear in the eased progress, the constancy is exact at every frame (the engine interpolates mm linearly with the ease). Use fstop 4. Follow the move with a hold, then continue the scene or cut.

```js
camera: {
  pos:   [[0,[0,1.5,3.0]], [1.0,[0,1.5,3.0]], [4.0,[0,1.5,10.625],"power2.inOut"], [4.8,[0,1.5,10.625]]],
  target:[[0,[0,1.4,0]]],
  lens:  [[0,24], [1.0,24], [4.0,85,"power2.inOut"], [4.8,85]],
  focus: [[0,3.0], [1.0,3.0], [4.0,10.625,"power2.inOut"], [4.8,10.625]],
  fstop: 4
}
```

Narrative use: land the move on the realisation (the line, the number, the face). Put the cause in the first hold and let the background do the emotion. Combine with a rack focus only if the second plane is the point.

## What makes a cheap imitation

- A zoom (lens only) or a dolly (position only). It needs both, matched.
- A background that does not change much because there is nothing behind the subject.
- A subject that grows or shrinks by 5 to 10 percent mid-move because the eases differ.
- The same effect on several scenes: it is a single-use device.
- In 2D, a uniform scale plus a blur: no plane-dependent scaling means no stretch.

## Sources

- https://en.wikipedia.org/wiki/Dolly_zoom : the origin (Irmin Roberts, Vertigo), the formula, Jaws, Goodfellas, Raging Bull.
- https://www.cined.com/the-timeless-craft-of-dolly-zoom-in-film-how-to-execute-it/ : speed synchronisation, common mistakes, range, overuse.
- https://morphic.com/ai-glossary/dolly-zoom-zolly : the two directions, the perceptual outcome, continuous focus, how to describe it to generative models.
