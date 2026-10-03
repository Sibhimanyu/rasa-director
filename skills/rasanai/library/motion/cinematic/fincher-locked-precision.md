---
id: "fincher-locked-precision"
name: "Fincher locked-off precision: still frames, barely perceptible pushes, repeatable moves"
space: "both"
family: "cinematic"
references: ["Zodiac (2007)", "The Social Network (2010)", "Se7en (1995)", "Gone Girl (2014)", "Mindhunter"]
timing: {"frame_rate":"24 fps source","holds_ms":[2500,8000],"durations_ms":[8000,16000],"note":"push durations are a derivation; the sources give no shot lengths. The one number cited is 'a fraction of an inch per second' (blog, unverified)"}
eases: {"key":"sine.inOut","notes":"a push so slow it is felt, not seen: sine.inOut or power1.inOut over a window 10 to 20% longer than the shot; power2.inOut for a motivated push that lands on a beat."}
camera: {"lens_mm":[27,40,50],"moves":["locked-off tableau","barely perceptible dolly push of 2 to 5% over 8 to 16 s","motivated push-in timed to a shift in power","overhead (top-down) omniscient frame","motion-controlled move that repeats exactly"],"rules":["camera is locked unless a move is motivated by a psychological shift","no handheld except one designated chaos beat (Se7en's chase and finale, per Indie Film Hustle)","no unmotivated reframes, no zooms","compositions are precise and held; the move starts before the subject notices"],"unverified":"lens_mm is a design range (derivation); no source in this entry gives Fincher lens focal lengths"}
recipe_2d: "HyperFrames GSAP: T0 locked is the default: no #world transform, all change is inside the frame. Creep (T1): tl.fromTo('#world', {scale:1, transformOrigin:'50% 50%'}, {scale:1.035, duration:13, ease:'sine.inOut'}, 0) for a 12 s shot, origin set at the eye-line of the subject (e.g. '960px 430px') so the push goes toward it. Motivated push: hold 0 to the beat, then tl.to('#world', {scale:1.06, duration:2.4, ease:'power2.inOut'}, beatT - 0.15). Per-layer depth: far layer scale 1+0.035*0.2, subject layer 1.035, near occluder 1+0.035*3 (parallax is the proof it is a dolly). No x/y drift, no rotation. Overhead frame: world rotateX is not needed; compose the layout as a plan view and push 1 to 1.03."
recipe_3d: "Rasan3D (metres). Locked: camera:{pos:[[0,[0.0,1.45,6.0]]], target:[[0,[0,1.35,0]]], lens:[[0,40]], fstop:4}. Creep: pos:[[0,[0,1.45,6.0]],[13,[0,1.45,5.75],'sine.inOut']] (0.25 m over 13 s, about 1.9 cm/s: a derivation of 'a fraction of an inch per second'), target fixed, lens 40, fstop 4. Motivated push on a beat at t=5.1: pos:[[0,[0,1.45,6.0]],[5.0,[0,1.45,6.0]],[7.4,[0,1.45,5.65],'power2.inOut'],[10,[0,1.45,5.65]]]. Overhead: pos:[[0,[0.0,9.0,0.15]],[12,[0.0,8.5,0.15],'sine.inOut']], target:[[0,[0,0,0]]], lens 35, fstop 5.6 (z offset 0.15 avoids a degenerate straight-down lookAt). Motion-controlled repeat: same keys on every scene variant, so a re-take is identical. Keep the push real (0.25 m, about 4% of the 6 m distance); a push under about 1% reads as no move at all."
pitfalls: ["a push fast enough to notice (above about 6% over 10 s) turns a Fincher creep into a corporate zoom","easing from rest to rest within the shot: the move must be in motion at the start and end of the frame it is seen in; extend the tween window","pushing with a uniform scale only: no parallax, so it reads as a digital zoom","pushing while the subject also moves in the frame: choose one (craft.md: move or hold, never both)","handheld for 'edge' on every scene: the cited pattern is control, with handheld rationed to the moments control is lost","glossy light and large bokeh: Zodiac's own reference was the mundane (Eggleston and Shore photographs), so keep f/4+ and flat, real-looking light"]
instruct: {"all":"Specify the move as a percentage or a distance over a duration with an ease name; say 'locked-off by default', 'push starts 0.15 s before the beat', and ban handheld, zoom, orbit and shake.","claude":"Ask Claude to name the one psychological shift the push belongs to and to start the tween 0.1 to 0.2 s before it. It follows numbers well; give it 0.25 m over 13 s and ease sine.inOut and it will not add drift. Ask for a before/after stills pair 0 s and end to confirm the move is felt (3 to 5%).","gpt":"GPT-family output tends to overshoot a 'subtle push' into 10 to 15% and add a slow pan as well. Give the hard cap (scale 1.035 max, one axis only) and require that nothing else on #world animates."}
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://pixflow.net/blog/david-fincher-camera-movement/", "https://indiefilmhustle.com/david-fincher/", "https://en.wikipedia.org/wiki/Zodiac_(film)"]
---
## What it is

Fincher's camera is controlled: it holds locked, strong compositions and, when it moves, it moves with calculated dolly or Technocrane work, often so slowly the viewer cannot say it moved. Pixflow's breakdown calls the "barely perceptible dolly push" the signature tension device and lists locked-off frames as "nowhere left to go", overhead shots for omniscient distance (Se7en, Zodiac, Mindhunter) and motion-control rigs for exactly repeatable moves. The cited pattern is restraint: handheld, zooms and unmotivated reframes are what he avoids.

## The defining traits (numbers)

- **Push rate.** Pixflow: speeds of "a fraction of an inch per second". No primary figure was found; the recipe uses 2 to 5% scale (2D) or 0.25 m over 13 s (3D), both derivations, which match the repo's T1 lean-in (2 to 5%, `craft.md`).
- **Format.** Zodiac was shot mostly on the Thomson Viper FilmStream camera (uncompressed 1080p 4:4:4 RAW as digital negative); high-speed film cameras were used only for slow-motion murder sequences (Wikipedia). Pixflow notes RED and ARRI Alexa on later work.
- **Look target.** The Zodiac team sought "a look mundane enough that audiences would accept that what they were watching was the truth", referencing William Eggleston and Stephen Shore photographs and the police files (Wikipedia). Real-looking, not stylised, light.
- **Handheld rationing.** Indie Film Hustle: in Se7en handheld appears only in the foot chase and the desert finale, "the only moments where the balance of control is tipped".
- **Preparation.** "Extensive computer pre-visualisation" and many takes (Indie Film Hustle); Technocrane plus CGI to stitch multiple shots into one move.
- **Timing.** Push-ins are "timed to specific moments of psychological shift" (Pixflow). Principal photography of Zodiac was 115 days (Wikipedia), which is background, not a rule.

## How to build it

**2D.** The default is T0: nothing on `#world` moves. When a move is earned, it is a T1 creep with per-layer depth (far 0.2, subject 1, near 3) so there is parallax, origin at the subject's eye-line, ease `sine.inOut`, window longer than the shot so it never settles on screen. Motivated pushes (`power2.inOut`, 1.6 to 2.4 s, 4 to 6%) start 0.15 s before the beat the line or the reveal lands on. Hold after.

**3D.** The camera carries real parallax for free. Block the room at scale, put the camera at 1.45 m (seated eye-line 1.2 m), lens 35 to 50 mm (a derivation: normal lenses keep the geometry honest), f/4 so the room is legible. The three keys in `recipe_3d` are the whole language: locked, creep, motivated push, overhead. Because the gate warns `never-rests`, end every shot on a hold.

```js
camera: {
  pos:    [[0,[0,1.45,6.0]], [5.0,[0,1.45,6.0]], [7.4,[0,1.45,5.65],"power2.inOut"], [10,[0,1.45,5.65]]],
  target: [[0,[0,1.35,0]]],
  lens:   [[0,40]],
  fstop:  4
}
```

**Motion control repeat.** For a before/after pair, give both scenes identical camera keys and swap only the content; this is the legitimate way to get the "same shot, different state" Fincher achieves with motion control.

## What makes a cheap imitation

- A zoom or scale push with no parallax, and so no dolly. In 2D, give layers different depth factors.
- A push that is visibly a push. The point is that it is felt.
- Every shot gets a move. Locked frames carry the style; a film of constant creeping is the "screensaver".
- Orange-teal grade slapped on as shorthand. The cited Zodiac look is mundane, not graded.
- Handheld energy "for contrast" on a scene that has no loss of control.

## Sources

- https://pixflow.net/blog/david-fincher-camera-movement/ : the barely perceptible push, motion control, locked-off meaning, overhead frames, what he avoids (blog; the "fraction of an inch" figure is unverified).
- https://indiefilmhustle.com/david-fincher/ : handheld rationing in Se7en, Technocrane plus CGI stitching, pre-visualisation and takes.
- https://en.wikipedia.org/wiki/Zodiac_(film) : Viper, RAW, Harris Savides, the mundane-truth look, Eggleston and Shore references.
