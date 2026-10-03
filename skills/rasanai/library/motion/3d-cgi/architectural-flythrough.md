---
id: "architectural-flythrough"
name: "Architectural walkthrough and fly-through (eye level, level verticals, human pace)"
space: "3d"
family: "3d-cgi"
references: ["archviz walkthrough animation (Enscape, D5, V-Ray, Corona style)", "architectural photography (perspective control, level camera)"]
timing: {"frame_rate":"30 fps, motion blur 180 degrees","holds_ms":[600,1500],"durations_ms":[2500,4000,6000],"walking_pace_ms_per_m":[700,850],"shot_s":[5,9]}
eases: {"key":"sine.inOut","notes":"start gently, glide, stop smoothly (studiomatrx); power3.inOut for the threshold crossing; crane rise on power2.inOut; no sudden direction change"}
camera: {"lens_mm":[24,35],"moves":["walk-through dolly at 1.55 m eye height","threshold crossing with a 0.2-0.3 m crane rise","aerial fly-through at 35-50 mm for form and context"],"rules":["interiors 24-35 mm, exteriors 35-70 mm, 85 mm+ for compressed detail (3dstuff)","eye height 1.5-1.6 m standing, 1.1-1.2 m seated mood (3dstuff); walkthrough about 1.55 m (studiomatrx)","keep the camera level so verticals stay vertical","one clear subject per shot, foreground depth (a doorway, a plant), leading lines","sequence: approach, threshold, reveal, inhabit, close (studiomatrx)"]}
recipe_2d: "2.5D parallax of four depth layers cut from one rendered still: GSAP scale multipliers 1.00 / 1.06 / 1.14 / 1.30 (back to front) over 6 s with 'sine.inOut', foreground layer blurred 6 px (filter: blur), a 3 px vertical translate on the nearest layer for the crane. Verticals stay vertical because nothing rotates. Use only when no 3D room exists."
recipe_3d: "Rasan3D: room blocked at real scale (a 8 x 3.2 x 5 m living room) from boxes with k.material('matte'|'concrete'|'ceramic'); k.rig('window',{dir:[-1,0.55,0.35],shadows:true,shadowSoftness:8}) plus a HemisphereLight bounce; k.ground floor; camera.pos 5 keys at y = 1.55 with sine.inOut legs and one power3.inOut threshold leg, target.y == pos.y (zero pitch) except the reveal, camera.shift [[0,[0,0.1]]] to frame tall rooms without tilting, lens [[0,28],[...,24]], fstop 4; fog {color, near:12, far:60}; toneMapping 'agx' or 'neutral', exposure 1; post {bloom:{strength:0.15,threshold:1.2},grain:0.02}; optional dust shafts from the volumetric-light-god-rays entry."
pitfalls: ["tilting the camera up to frame a tall room: converging verticals (use camera.shift to raise the frame instead of pitching; see note)","fisheye lens (14 mm) used as a default: every room looks like a hotel listing","faster than a walking pace: the viewer cannot read the space","sudden direction changes and vertical bobbing (fake handheld) in a walkthrough","camera path with too many control points: wobble","empty room, no foreground, no scale cue: a clay render with nothing to measure against","a constant-speed glide (gate: linear-drift) through every room"]
instruct: {"all":"Block the building in metres. Camera height 1.55 m, pitch zero (target.y equals pos.y) except one deliberate crane. Lens 24-35 mm inside, 35-50 mm outside. Speed at or below 1.4 m/s. Write the path as 5 or fewer keys with an ease on each. Structure the shot as approach, threshold, reveal, inhabit, close; hold 600-1500 ms at the reveal.","claude":"You will want to add a slow orbit and a lot of bloom to make it feel cinematic: do not. Keep the light motivated by one window. Put one foreground object in every shot. Compute the speed of each leg (distance divided by duration) in a comment and check it against 1.4 m/s.","gpt":"You tend to place the camera by trial and drift it with sin(t): write explicit keys. You also tend to use fov values instead of mm: use the lens array in millimetres (36 mm sensor). Do not add head-bob, Math.random shake, OrbitControls, or a skybox loaded from a URL."}
verified: {"sources_fetched":4,"non_wikipedia":3,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://3dstuff.at/articles/architectural-camera-setup.html", "https://www.studiomatrx.org/students/real-time-vr-for-architecture/architectural-walkthroughs-and-flythroughs", "https://en.wikipedia.org/wiki/Perspective_control", "local: skills/rasanai/references/3d.md sections 4 and 5"]
---
## What it is

The camera language of architectural visualisation: a viewpoint at human height moving through a building at human speed, or an aerial pass that shows form and site. It is not a drone shot of a building and it is not a game camera. The job is to let a viewer understand a space they have never seen, so the camera slows down, stays level and arrives at a reveal.

## The defining traits (numbers)

- **Lens.** Interiors 24-35 mm full-frame equivalent, "the honest range"; exteriors 35-70 mm; 85 mm and up for compressed detail (3dstuff).
- **Height.** 1.5-1.6 m for a standing view, 1.1-1.2 m for a seated, relaxed atmosphere (3dstuff). Walkthroughs sit at about 1.55 m (studiomatrx).
- **Pace.** "Human walking pace or slower": the viewer is seeing the space for the first time (studiomatrx). A walking pace is roughly 1.2-1.4 m/s: that figure is our own derivation, not from the source. The timing field above converts it to 700-850 ms per metre.
- **Level verticals.** Keep the camera level; use shift/tilt-shift to frame higher without tilting (3dstuff); on film this is perspective control, which exists to avoid the keystone effect (Wikipedia).
- **Path.** A rail spline with a few evenly spaced control points; "a handful of well-placed points is smoother than one crammed with them"; route through thresholds, clear of walls (studiomatrx).
- **Narrative.** Approach, threshold, reveal, inhabit, close. The reveal is the emotional peak: deliberate compression before release into the main volume; a crane rise can disclose ceiling height as the camera enters (studiomatrx).
- **Composition.** Foreground depth, leading lines, rule of thirds, one clear subject per shot (3dstuff).
- **Easing.** Start gently, glide, stop smoothly; avoid sudden direction changes and rapid vertical moves (studiomatrx).

## How to build it

### 3D (Rasan3D)

```js
// room: x 0..8, z 0..5 (door at z = 5), height 3.2; camera enters through the door and reveals the window wall
camera: {
  pos:    [[0,   [4.0, 1.55, 9.0]],                    // approach, outside the door
           [2.2, [4.0, 1.55, 5.6], "sine.inOut"],      // threshold: slow down
           [3.4, [4.0, 1.78, 4.0], "power3.inOut"],    // reveal: 0.23 m crane rise as the volume opens
           [6.0, [3.2, 1.70, 1.8], "sine.inOut"],      // inhabit
           [7.0, [3.2, 1.70, 1.8]]],                   // close: rest
  target: [[0, [4.0, 1.55, 0.0]], [3.4, [4.0, 1.78, 0.0], "power3.inOut"], [6.0, [5.2, 1.70, 0.0], "sine.inOut"]],  // pitch stays near zero
  lens:   [[0, 32], [3.4, 24, "power3.inOut"], [6.0, 28, "sine.inOut"]],
  fstop: 4,
},
environment: "soft", toneMapping: "agx", exposure: 1,
fog: { color: "#d9d6cf", near: 12, far: 60 },
post: { bloom: { strength: 0.15, threshold: 1.2 }, grain: 0.02, vignette: 0.12 },
async build(k) {
  const { THREE } = k;
  k.rig("window", { dir: [-1, 0.55, 0.35], intensity: 1.1, shadows: true, shadowSoftness: 8 });
  k.scene.add(new THREE.HemisphereLight("#fff4e6", "#b9b0a2", 0.35));   // the bounce a real room has
  const wall = k.material("matte", { color: "#e9e4da" }), floor = k.material("ceramic", { color: "#b49a7c", roughness: 0.45 });
  // ... boxes for walls, floor, a window opening, one sofa and one plant as foreground
},
pose(t, k) { /* nothing travels here: the camera is the move; animate only people, blinds, a door */ },
```

Speed check (do it in a comment): leg 1 = 3.4 m in 2.2 s = 1.55 m/s, a touch fast: stretch it to 2.6 s and shift the later keys. Leg 3 (reveal to inhabit) = 2.3 m in 2.6 s = 0.9 m/s.

Notes:

- **Vertical shift exists.** The Rasan3D camera has a keyable lens shift: `camera.shift: [[t,[x,y],ease]]` in fractions of the frame (+y raises the frame), the digital equivalent of a shift lens. Keep pitch at zero (target.y equals pos.y) and use e.g. `shift: [[0,[0,0.12]],[6,[0,0.18],"sine.inOut"]]` to frame tall rooms and facades with verticals true; verify on a still that the verticals are parallel. Source: `rasan3d.js` camera tracks (pos, target, lens, roll, focus, fstop, aperture, shift) and references/3d.md.
- **Flythrough (exterior)**: `pos` as a 35-50 mm eased arc around the building at 15-40 m height, target on the entrance, then a descent to eye height that hands off to the walkthrough (this is the `camera-through` seam in 3d.md section 6).
- **Light:** one motivated key (`window`), one bounce. Hard sun for exteriors with `shadowSoftness: 4`.
- **Seeing it:** `crew.mjs strip --from 2 --to 4 --fps 15` to check the threshold leg for wobble and verticals.

### 2D fallback

```js
const layers = ["#far", "#mid", "#near", "#fore"], s = [1.0, 1.06, 1.14, 1.30];
layers.forEach((l, i) => tl.fromTo(l, { scale: 1 }, { scale: s[i], duration: 6, ease: "sine.inOut", transformOrigin: "50% 58%" }, 0));
tl.fromTo("#fore", { y: 0, filter: "blur(6px)" }, { y: -3, filter: "blur(6px)", duration: 6, ease: "sine.inOut" }, 0);
```

### Shot plan (a 7 s walkthrough, the five beats mapped to times)

| Beat | Time (s) | Camera | Speed | What the viewer reads |
|---|---|---|---|---|
| approach | 0.0-2.2 | dolly in from outside the door, lens 32 mm | 1.5 m/s, ease out of rest | the building's face, the door as a destination |
| threshold | 2.2-3.4 | slow to 1.3 m/s, 0.23 m crane rise, lens eases 32 to 24 mm | 1.3 m/s | compression, then the room opens (the reveal) |
| reveal | 3.4-4.6 | hold the widest lens, window wall in frame | 0.9 m/s | ceiling height, the light |
| inhabit | 4.6-6.0 | drift left toward the sofa, lens 28 mm, rack focus foreground plant to window | 0.9 m/s | scale cues, materials |
| close | 6.0-7.0 | rest | 0 | a held composition on thirds, one clear subject |

Checks before rendering: no key has ease `none`; the target's y stays within 0.25 m of the camera's y outside the reveal (pitch under about 2 degrees at a 4 m look distance); the window light direction matches the shadow on the floor; one foreground object present in the first and last frame; the strip at 15 fps shows no lateral wobble. For a flythrough (exterior) replace the thresholds with a descent: height 28 m to 1.55 m over 4 s on `power3.inOut`, lens 40 to 28 mm, pitch easing from 25 degrees to 0.

## What makes a cheap imitation

- A game-like fisheye (14 mm and below) and a bobbing camera.
- A slow orbit around an empty room instead of a path with an arrival.
- Pitched-up shots with converging verticals.
- Constant speed from door to wall.
- No scale cues, no foreground, a single flat light, white clay with no material.
- Rooms lit by an invisible, shadowless ambient light.
- Everything in focus (f/22) or everything blurred: use f/4 to keep depth cues without hiding the room.

## Sources

- https://3dstuff.at/articles/architectural-camera-setup.html (fetched): lens ranges, 1.5-1.6 m and 1.1-1.2 m heights, vertical shift, composition list.
- https://www.studiomatrx.org/students/real-time-vr-for-architecture/architectural-walkthroughs-and-flythroughs (fetched): 1.55 m, walking pace or slower, rail spline with few points, approach-threshold-reveal-inhabit-close, eased keyframing.
- https://en.wikipedia.org/wiki/Perspective_control (fetched): converging verticals, shift lenses and view cameras, digital correction.
- local: skills/rasanai/references/3d.md (lens table, rigs, camera-through seam). The 1.2-1.4 m/s walking figure and the leg-speed arithmetic are our own derivation.
