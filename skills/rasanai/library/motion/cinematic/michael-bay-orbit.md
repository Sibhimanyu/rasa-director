---
id: "michael-bay-orbit"
name: "Michael Bay 360: the low-angle slow-motion orbit hero shot"
space: "both"
family: "cinematic"
references: ["Bad Boys (1995), the circular dolly hero shot", "Transformers", "The Island", "Bad Boys II"]
timing: {"frame_rate":"24 fps source with slight slow motion (rate not given in sources)","holds_ms":[400,1200],"durations_ms":[3000,6000],"orbit_deg":[90,200],"note":"duration and arc are derivations; the sources say only 'slow', 'circular dolly', 'slight slow motion'. A full 360 degrees at constant speed is what the gate warns about; the signature is a partial arc with a rising subject"}
eases: {"key":"sine.inOut","notes":"real circular dolly speed is near constant; for a gated film use sine.inOut (soft ends, near-constant middle) or declare the linear-drift intent with a reason."}
camera: {"lens_mm":[85,100,135],"moves":["circular dolly orbit at a low height","subject rises into frame (actors or hero object)","slight slow motion on the subject","parallax of a fast-moving background"],"rules":["telephoto at a low angle: compresses the figure against a sky and makes the background streak past","camera height 0.3 to 0.6 m, looking up 5 to 12 degrees","orbit radius large (5 to 8 m) so the long lens still frames the subject","backlight and rim; hot highlights, saturated sky","one beat only: the moment of realisation or arrival"],"unverified":"telephoto focal length, camera height and radius are derivations; no fetched source states them"}
recipe_2d: "HyperFrames GSAP: fake the orbit with depth-weighted counter-translation (vocabulary.md Arc/orbit 2D fake). Layers: sky/back skyline (d 0.2), mid buildings (d 0.5), subject (d 1), foreground debris (d 3). Orbit u from 0 to 1 over 4.0 s with ease sine.inOut: bg x = +420*(1-2u) px (right to left), mid x = +260*(1-2u), subject x = 0 with rotationY (perspective 1400px) from -14 to +14 degrees, fg x = -900*(1-2u) (opposite direction, blurred 10 to 14 px). tl.to('.bg',{x:-420,duration:4,ease:'sine.inOut'},0) etc. from x:+420. World low angle: transformOrigin '50% 100%', rotateX -9deg with perspective 1200px. Subject rises: tl.fromTo('.hero',{y:120},{y:0,duration:1.6,ease:'power2.out'},0.2); slow motion by stretching the subject's own tweens by 1.5x. Backlight: a radial gradient behind the subject plus a 60 px blurred rim copy on the subject at 0.5 opacity. Hold the last 0.6 s."
recipe_3d: "Rasan3D (metres). Subject group at [0,0,0], height 1.8. Ring of buildings, vehicles and smoke planes at 25 to 80 m so the long lens shows streaking parallax. camera: { pos: Rasan3D.orbit({center:[0,0,0], radius:6.5, height:0.5, from:-60, to:110, t0:0, t1:4.5, ease:'sine.inOut'}), target:[[0,[0,1.3,0]]], lens:[[0,100]], roll:[[0,0]], focus:[[0,6.5]], fstop:2.8 }. Target 0.8 m above the camera at 6.5 m is a 7 degree look-up. A 170 degree arc in 4.5 s is an average of 38 degrees/s; with sine.inOut the peak is about 59 degrees/s (derivations). Subject rise on pose(t): y = -0.5 + 0.5*Rasan3D.prog(t,0,1.6,'power2.out'). Slow motion: the subject's own animation clock = t*0.6. Declare 'never-rests' if the orbit has no hold: add a hold by ending the orbit at t1 = 4.5 and keeping a 0.8 s still. Light: one backlight (low sun) from the far side of the orbit, a rim, a warm key from camera left at 20 percent, exposure up so highlights clip softly. motionBlur default 0.5 shutter (the long lens and parallax need it)."
pitfalls: ["constant-speed full 360 at eye height: the sources say low angle and telephoto; both change the look","a wide lens: the background does not compress and the streak disappears","orbit radius too small for the lens: the subject leaves the frame or the framing breaks","no foreground or background depth: parallax is the whole effect; add layered objects at 3 depths","over-use: Bay's hero shot lands on a moment of realisation or arrival, not on every shot","in 2D, rotating the whole frame instead of counter-translating layers: that is a spin, not an orbit","untethered slow motion: slow the subject, not the world, or the whole shot goes soft"]
instruct: {"all":"Say 'low angle (camera 0.5 m, looking up), long lens (100 mm), orbit radius 6.5 m, 170 degrees in 4.5 s, sine.inOut, subject rising, backlit'; ban a full constant-speed spin, a wide lens, and eye-level height.","claude":"Claude's default orbit is constant speed at eye height on a 35 to 50 mm lens: name height, lens and radius in metres explicitly and ask for the arc in degrees with an ease. Ask for the subject to rise during the first 1.6 s so there is a reason for the camera to be low.","gpt":"GPT-family output tends to give a full 360 with an unspecified lens and linear speed. Give the arc (from -60 to 110 degrees), the lens (100 mm), the height (0.5 m) and require a final hold."}
sources: ["https://www.premiumbeat.com/blog/how-to-craft-an-epic-tracking-shot-like-michael-bay/", "https://www.slashfilm.com/516981/votd-michael-bays-signature-slowmo-lowangle-360degree-shot-supercut/", "https://www.slashfilm.com/899094/how-michael-bays-signature-shot-saved-bad-boys-from-sony/", "https://howtofilmschool.com/dictionary/bayhem/"]
---
## What it is

The Bay 360 is a slow, low-angle circular dolly around a character as they rise, usually at a moment of realisation or arrival, in slight slow motion and on a long lens. SlashFilm describes the supercut: the camera "slowly revolves around" the subject, often someone recovering from an incident. Bay's own account of the first one, in Bad Boys (1995): "Where's the circle trolley? Get the circle trolley", and the shot went into the trailer. Premiumbeat adds the optics: a telephoto lens at a low angle produces parallax, the background passing "at an incredible rate".

## The defining traits (numbers)

- **Rig.** A circular dolly track (SlashFilm, Bad Boys piece), counter-clockwise in the first one per a search summary (unverified). No rig measurements are published in the fetched pages (the Deep Fried Movies page had no technical content).
- **Lens.** "Telephoto" (Premiumbeat, which gives no millimetres). The 85 to 135 mm range is a design derivation (compression of the figure against the sky).
- **Height and angle.** Low angle (Premiumbeat, SlashFilm). 0.3 to 0.6 m camera height with a 5 to 12 degree look-up is a derivation.
- **Speed.** Slightly slowed by slow motion (Premiumbeat; rate not given). The 90 to 200 degree arc in 3 to 6 s is a derivation.
- **Layering.** "Foreground motion + midground subject + background chaos" (How To Film School on Bayhem), hot highlights, strong contrast, saturation, motivated backlight, short shots elsewhere in the sequence.
- **Subject motion.** In Premiumbeat's description actors move vertically while the camera moves horizontally: the subject rises while the camera circles.

## How to build it

**2D.** The orbit is fake in depth-weighted counter-translation: far layers slide right to left slowly, foreground slides left to right fast, the subject stays near centre and turns a few degrees in perspective. Backlight and a low world angle sell the height. The streak comes from blurred foreground debris moving fast. A world rotation is not an orbit.

**3D.** Use `k.orbit` with a partial arc and a hold, aim `target` above the camera for the look-up, and use a long lens with a large radius. Parallax requires objects at several distances; put a ring of buildings at 25 to 80 m and a few near things (dust, a hanging cable, a wing) at 2 to 4 m. Keep `fstop` at 2.8 so the near and far fall off; focus 6.5 m (the radius).

```js
camera: {
  pos:    Rasan3D.orbit({ center:[0,0,0], radius:6.5, height:0.5, from:-60, to:110, t0:0, t1:4.5, ease:"sine.inOut" }),
  target: [[0,[0,1.3,0]]],
  lens:   [[0,100]],
  focus:  [[0,6.5]],
  fstop:  2.8
}
```

Because the orbit radius is constant, focus stays at 6.5 m for the whole shot. If the camera pushes in, key the focus numerically with it.

Seams: hold the final frame 0.6 to 1.0 s on the subject's face. Cut or whip out on a beat after the hold.

## What makes a cheap imitation

- An eye-level, constant-speed orbit on a normal lens around a floating object. That is the demo-reel spinner `3d.md` warns about.
- No rising subject and no slow motion, so the moment has no weight.
- No layered background, so the long lens has nothing to streak.
- A full 360 when the beat only needs a 120 to 200 degree sweep: the repeat of the same view is the boring part.
- Using it as a transition between every scene. The shot works as a single hero beat per film.

## Sources

- https://www.premiumbeat.com/blog/how-to-craft-an-epic-tracking-shot-like-michael-bay/ : telephoto at a low angle, circular movement, parallax of the background, the subject moving against the camera.
- https://www.slashfilm.com/516981/votd-michael-bays-signature-slowmo-lowangle-360degree-shot-supercut/ : the shot described, films in the supercut (Transformers, The Island).
- https://www.slashfilm.com/899094/how-michael-bays-signature-shot-saved-bad-boys-from-sony/ : Bay's quote on the circle trolley and the origin of the shot in Bad Boys.
- https://howtofilmschool.com/dictionary/bayhem/ : 360 low-angle hero shots, layering, contrast, backlight.
