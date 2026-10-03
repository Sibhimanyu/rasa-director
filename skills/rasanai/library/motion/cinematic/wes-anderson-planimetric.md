---
id: "wes-anderson-planimetric"
name: "Wes Anderson planimetric camera: flat frontal planes, lateral tracks, whip pans"
space: "both"
family: "cinematic"
references: ["The Royal Tenenbaums (2001)", "The Grand Budapest Hotel (2014)", "The Life Aquatic", "Asteroid City (2023)", "Rushmore"]
timing: {"frame_rate":"24 fps source","holds_ms":[1200,3500],"durations_ms":{"lateral_track":[2500,6000],"whip_pan":[180,300],"snap_hold":[1200,3000]},"note":"the whip and track durations are derivations (the sources give none); 3d.md gives 0.15 to 0.3 s for a whip"}
eases: {"key":"power1.inOut (tracks), expo.inOut (whips)","notes":"tracks are even and mechanical (power1.inOut, or sine.inOut), whips are expo.inOut with heavy blur then a hard stop on a new, perfectly composed frame."}
camera: {"lens_mm":[35,40,50],"moves":["lateral dolly parallel to the back wall","vertical crane parallel to the facade","whip pan between locked tableaux","locked-off centred frame"],"rules":["the camera is perpendicular to the back wall (no yaw), so foreground, midground and background stack as flat planes","subject on the centre line; remaining information divided by thirds either side","horizontal and vertical lines parallel and near the frame's edge","long lens (or flat staging) to keep the lines straight; never fish-eye","movement creates a new flat composition, not a perspective one","a measuring tape, not an eye, centres the camera"],"unverified":"the claim that whips snap in 90 or 180 degree increments appeared only in a search snippet; no fetched page states it"}
recipe_2d: "HyperFrames GSAP: build each 'room' as a flat tableau in its own wrapper on #world, no perspective, no rotation, no per-layer parallax (planes are parallel: every layer gets the same translate, d = 1). Centre on x=960; build with mirrored pairs. Lateral track: tl.to('#world',{x:-1920,duration:4.5,ease:'power1.inOut'},t) so the next tableau, laid out exactly 1920 px to the right, slides into place; no y, no scale, no rotation. Whip (90-degree look): tl.to('#world',{x:-1920,duration:0.22,ease:'expo.inOut'},t) with a horizontal blur on a wrapper: tl.to('#blur-x',{attr:{stdDeviation:'38 0'},duration:0.11,ease:'power2.in'},t).to('#blur-x',{attr:{stdDeviation:'0 0'},duration:0.11,ease:'power2.out'},t+0.11) (an feGaussianBlur with an x-only stdDeviation; keep full-frame filter under about 40 px, pre-flatten the tableau layers for speed). Vertical crane for a dollhouse section: tl.to('#world',{y:-1080,duration:3.2,ease:'power1.inOut'},t). Snap-hold: 1.2 to 3 s locked after every move."
recipe_3d: "Rasan3D (metres). Build the set as flat planes facing +z (a dollhouse cross-section: walls, windows and furniture as thin boxes at z offsets 0, -1.2, -3.0). Camera never yaws during a track: pos.x and target.x move together. camera: { pos:[[0,[-6,1.3,9]],[4.5,[6,1.3,9],'power1.inOut'],[6.5,[6,1.3,9]]], target:[[0,[-6,1.3,-10]],[4.5,[6,1.3,-10],'power1.inOut'],[6.5,[6,1.3,-10]]], lens:[[0,40]], roll:[[0,0]], fstop:8 } (a 12 m lateral track on a 9 m standoff). Whip to the next room 90 degrees to the right at t=6.5: pos fixed [6,1.3,9]; target:[...,[6.5,[6,1.3,-10]],[6.72,[16,1.3,9],'expo.inOut'],[9,[16,1.3,9]]] (the target moves from straight ahead to level to the right in 0.22 s; the rooms sit on a ring around that standpoint). Keep motionBlur at the default 0.5 shutter for the whip so the streak is real. After the whip: a 1.2 to 3 s hold on a locked, centred frame. Lens 40 mm is a full-frame design choice (Anderson's 40 mm was anamorphic, a different projection); the geometry that matters is the zero yaw and the flat staging."
pitfalls: ["centred by eye: centre by formula (x = 960, or pos.x equals target.x and the set's axis) and verify on a still","symmetry in the layout but perspective in the staging: keep every plane parallel to the frame","a tilt or yaw during a 'track': a parallel track must keep the camera facing the wall","parallax between layers on a lateral move that should be flat: planimetric tracks shift the planes together, so use d = 1 for all layers (use depth factors only on a deliberate deep-stage move)","a whip that never lands on a composed frame: the arrival should be centred and still within 2 frames","pastel palette copied without the geometry: the cited technique is the framing; colour is separate (Premiumbeat mentions dusty pastels and LUTs)","fish-eye or very wide lens: the sources say long lenses keep lines straight"]
instruct: {"all":"Say 'camera perpendicular to the back wall, no yaw, no roll', give the centre as a number, say 'planes parallel to the frame', give track length, duration and ease, and say whips are 0.2 to 0.3 s with heavy x-only blur ending on a locked frame.","claude":"Ask Claude to lay out the tableaux as a strip with an exact pitch (1920 px) so every move is a clean translate by the pitch. Claude follows 'no yaw' well but tends to add small z-parallax to layers for 'depth'; forbid per-layer differences for tracks. Ask for a still at each hold, with the vertical axis drawn to check the centre.","gpt":"GPT-family output tends to add a vignette, a Dutch tilt or a slow Ken Burns on top of the flat staging. List these as forbidden and require every hold to be fully still."}
verified: {"sources_fetched":4,"non_wikipedia":3,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.premiumbeat.com/blog/stylize-cinematography-like-wes-anderson/", "https://blog.frame.io/2023/11/20/asteroid-city-cinematography/", "https://faroutmagazine.co.uk/how-to-shoot-like-wes-anderson/", "https://en.wikipedia.org/wiki/Whip_pan"]
---
## What it is

Anderson's camera treats the set as a stage seen straight on. The planimetric frame puts the camera perpendicular to the back wall, so foreground, midground and background stack as flat planes with parallel lines. Subjects sit on the centre line; space is balanced by thirds; movement is a lateral track, a vertical crane or a whip pan that lands on another locked tableau. The mood comes from the geometry and its discipline, not from camera motion.

## The defining traits (numbers)

- **Lens.** 40 mm anamorphic for the famous shots in The Royal Tenenbaums, The Grand Budapest Hotel and The Life Aquatic (Premiumbeat, Far Out). Frame.io's Asteroid City piece shows Arri Master Anamorphic 35 mm and 40 mm on an Arricam ST with Kodak 5213 (ISO 200). The Cooke Optics page (Robert Yeoman, ASC) returned HTTP 403 and was not used; a search snippet claimed Yeoman shot at least 90% of Rushmore and Tenenbaums on a 40 mm anamorphic (unverified).
- **Long lens for straight lines.** Both Premiumbeat and Far Out advise a long lens "to make the lines as straight as possible" and avoiding fish-eye.
- **Centring.** The cinematographer "uses a measuring tape to ensure the camera is properly centred" with horizontal and vertical lines near the frame edge (Frame.io).
- **Rule of thirds inside the symmetry.** Subject centred, the rest divided by thirds on either side, with a deliberate imbalance of detail between the two halves (Premiumbeat).
- **Movement.** "Movement creates new flat compositions" (Premiumbeat); a four-dolly track system arranged "like a pen plotter" for 2D movement in one Asteroid City scene (Frame.io); limited handheld.
- **Whip pans.** Wikipedia lists Anderson among directors who use whip pans liberally; StudioBinder cites The Grand Budapest Hotel as an example. Durations and degrees: no fetched source. The 0.18 to 0.3 s range is a derivation from the repo's whip guidance (`3d.md`: 0.15 to 0.3 s, `expo.inOut`).
- **Slow motion.** Used in "nearly every film", often at the ending (Premiumbeat).

## How to build it

**2D.** The whole style is geometry. Lay tableaux out on a strip with a fixed pitch. Every move is a translate by the pitch (x for lateral, y for vertical) with identical motion on every layer, because planes parallel to the lens do not shear against each other in a lateral track. Use depth factors only if the script calls for a deep move. The whip is the same translate in 0.22 s `expo.inOut` plus an x-only blur on the moving wrapper and a hard stop on a centred frame. Always rest 1.2 to 3 s so the symmetry is read.

**3D.** The camera keeps its facing fixed on lateral tracks; `pos.x` and `target.x` move together and `roll` stays 0. The set must be flat staging at three or four z offsets, not an environment with receding depth. For whips, rotate the `target` around the camera (rooms arranged on a ring about the standpoint). Use `fstop 8`: the style keeps everything sharp (a derivation, since the sources give no stops).

```js
camera: {
  pos:    [[0,[-6,1.3,9]], [4.5,[6,1.3,9],"power1.inOut"], [6.5,[6,1.3,9]]],
  target: [[0,[-6,1.3,-10]], [4.5,[6,1.3,-10],"power1.inOut"], [6.5,[6,1.3,-10]]],
  lens:   [[0,40]],
  roll:   [[0,0]],
  fstop:  8
}
```

## What makes a cheap imitation

- Centred layouts without parallel lines: symmetry without planimetric staging is just a centred composition.
- Pastels and a typeface (Futura, Helvetica, Didot are named in Premiumbeat) as the whole imitation. The camera is the style.
- Camera tilts, yaws or rolls. Any yaw during a track breaks the flatness.
- Per-layer parallax on tracks that should be flat.
- A whip that does not blur, or blurs symmetrically: a whip is horizontal.
- Constant cutting between whips: the tableaux need to be held.

## Sources

- https://www.premiumbeat.com/blog/stylize-cinematography-like-wes-anderson/ : 40 mm anamorphic, long lenses, centring and thirds, flat movement, slow motion, typefaces.
- https://blog.frame.io/2023/11/20/asteroid-city-cinematography/ : Master Anamorphic 35 and 40 mm, Arricam ST, measuring-tape centring, four-dolly plotter track.
- https://faroutmagazine.co.uk/how-to-shoot-like-wes-anderson/ : planimetric shooting straight on, long lens, 40 mm anamorphic in three films.
- https://en.wikipedia.org/wiki/Whip_pan : whip pans as a transition and the directors who use them (Anderson included).
