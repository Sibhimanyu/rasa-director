---
id: "mixed-2d-3d-flat-to-depth-seam"
name: "Mixed 2D and 3D: the flat-to-depth seam (a pixel contract between DOM and a 3D world)"
space: "both"
family: "3d-cgi"
references: ["Rasan3D seams: flat-to-depth, depth-to-flat, camera-through, shared-element, pinned (references/3d.md section 6)", "Spider-Verse and Arcane: 2D drawn layers over 3D in compositing", "CSS matrix3d (DOM placed in perspective)"]
timing: {"frame_rate":"30 fps comp","holds_ms":[100,300],"durations_ms":[700,1100,1400],"lift_ms":[600,900],"camera_arc_ms":[1100,1400],"notes":"hold the flat pose 0.1-0.3 s so the viewer registers the cut-less handoff, then the subject lifts first; the camera starts 0.1-0.2 s later"}
eases: {"lift":"expo.out","turn":"power3.inOut","camera":"power3.inOut","shadow_in":"power2.out","notes":"the lift is a decelerating snap; the turn and camera are repositioning legs; the shadow fades in with the lift so a flat card never has a shadow"}
camera: {"lens_mm":[50],"moves":["arc of 20-35 degrees plus a 0.3-0.8 m crane on power3.inOut after the hold","push through the lifted object into the next scene (camera-through)","land on a layout pose for depth-to-flat"],"rules":["the t = 0 camera key IS the layout pose: k.layout reads the camera at time 'at'","a 50 mm lens keeps the flat card undistorted during the lift","depth-to-flat: the last key is a layout pose, hold 2+ frames before the cut"]}
recipe_2d: "The 2D side of the seam is plain HyperFrames DOM: the element sits at its px rect with its final CSS (border-radius, shadow, colours); on the cut frame the 2D scene ends and the 3D scene's ui and gl layers show the same pixels. Fallback with no WebGL: CSS 3D: wrapper perspective: 1400px; the card gets gsap rotationY -24 and z 60 with 'power3.inOut' over 1.1 s plus a box-shadow growing from 0 to 0 40px 80px rgba(0,0,0,.25) on 'power2.out'; it reads as a tilt, not as a world."
recipe_3d: "Rasan3D: const flat = k.layout({at:0, distance:12}); const ppu = flat.userData.pxPerUnit; a k.panel({width:w/ppu,height:h/ppu,depth:0.12,radius:r/ppu,texture:k.image('assets/card.png')}) (unlit face, toneMapped:false) positioned with flat.localToWorld(rect centre in px); camera key 0 = the layout pose (e.g. pos [0,0,12], target [0,0,0], lens 50); pose(t): panel.position.z = 0.35 * k.prog(t,0.3,1.0,'expo.out'), panel.rotation.y = k.at(t,[[0.3,0],[1.4,-0.42,'power3.inOut']]); camera pos/target keys leave the layout pose after the hold; k.ground fades a shadow in; DOM type stays crisp with k.pinDom(el,{at:panel,width:w/ppu,face:'object',px:[w,h],offset:[0,0,0.04]}) or lives in the ui layer; keep stage post empty on seam scenes and let finish.mjs apply grain to both sides."
pitfalls: ["the first 3D frame differs from the last 2D frame by even a pixel of position or a colour level: the viewer sees a pop, not a lift","border-radius, shadow or antialiasing differences between the CSS card and the extruded panel edge","tone-mapped or lit face: the screenshot's colours change at the seam (use the unlit face, toneMapped false, sRGB texture)","a shadow, grain, vignette or bloom on the 3D layer only (stage post touches only what 3D draws): they pop in at the cut","camera key 0 not equal to the layout pose: the panel does not cover the rect","lifting and moving the camera at the same instant: the subject should start first, the camera 0.1-0.2 s later","DOM text recreated at a different font size than the 2D scene's","testing at the keyframes only: look at a 15 fps strip across the cut"]
instruct: {"all":"Treat the seam as a contract. Take the outgoing element's exact px rect (x, y, w, h, radius) and colours from the 2D scene, lay the 3D object out in k.layout at that rect with an unlit face using the same image, make camera key 0 the layout pose, hold 0.1-0.3 s, then lift the object (expo.out) and 0.1-0.2 s later move the camera (power3.inOut). Keep stage post empty. Verify with crew.mjs strip across the cut.","claude":"You tend to treat the 3D scene as a fresh composition and fade in: do not. The first 3D frame must be the last 2D frame. State the rect, ppu, distance and camera pose numerically in a comment, and write the strip command you will run. Do not add a glow or a rim light during the lift; the shadow is the only addition.","gpt":"You tend to recreate the card in three.js by eye (a PlaneGeometry of arbitrary size and a hand-tuned camera z) and to crossfade. Compute sizes from k.layout's pxPerUnit, never by eye; no crossfade at the seam; no MeshStandardMaterial on the face, no tone mapping. Do not add OrbitControls or a requestAnimationFrame loop."}
sources: ["https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d", "https://www.sidefx.com/community/spider-man-into-the-spider-verse/", "https://www.awn.com/animationworld/rewriting-visual-rule-book-spider-man-spider-verse", "https://blog.syncsketch.com/creator-stories/arcane-fortiche/", "local: skills/rasanai/references/3d.md section 6", "local: skills/rasanai/references/vocabulary.md (Flat-to-depth row)", "local: skills/rasanai/stage3d/templates/scene-3d.html", "local: skills/rasanai/stage3d/rasan3d.js (layout, pxPlane, pinDom)"]
---
## What it is

Mixing 2D and 3D in one film is easy; making the cut invisible is the craft. A card the viewer has been reading becomes an object: it lifts off the page, turns, and the next idea is on its back, and at no frame does the picture jump. The mechanism is a pixel contract between a DOM element in the outgoing 2D scene and a 3D object in the incoming one: same rect, same colours, same corner radius, and the camera's first pose is exactly the pose at which the 3D world coincides with the page.

Studios blend the two media by layering rather than by seams: Arcane layers drawn 2D effects (scratches, textures, effects at 12 fps) over 3D animation in post (syncsketch, redsharknews) and Spider-Verse mixes 2D and 3D elements in explosions and effects, with over 25 custom Nuke tools for the printed-comic finish (sidefx, awn). Rasan3D's equivalent of that layering is the ground / gl / ui sandwich; its equivalent of the compositor's pixel match is `k.layout`.

## The defining traits (numbers)

- **Hold:** 0.1-0.3 s on the flat pose (3 to 9 frames at 30 fps) before anything moves (3d.md section 6).
- **Lift:** the subject starts first; the camera begins 0.1-0.2 s later (3d.md section 4); camera arc of 20-35 degrees plus a 0.3-0.8 m crane on `power3.inOut` (vocabulary.md, Flat-to-depth row).
- **Match tolerance:** frames on both sides of the cut match to within a pixel and a colour level (3d.md). Check a strip at 15 fps.
- **Layout maths:** `k.layout({at, distance})` returns a group in composition pixels on the plane `distance` in front of the camera as it stands at time `at`; its scale is `k = 2 d tan(fov/2) / height` (from the source), so `pxPerUnit = 1 / k`. At 50 mm on a 36 mm sensor and a 16:9 frame the vertical field of view is about 2 atan(0.5 x 20.25 / 50) = 22.9 degrees (our arithmetic: sensor height = 36 / 1.778 = 20.25 mm), so at `distance` 12 one pixel is 12 x 2 x tan(11.45 degrees) / 1080 = 4.5 mm. A 1100 x 660 px card is then 4.95 x 2.97 world units (the scaffold uses 1100 / ppu).
- **DOM in perspective:** a `matrix3d(...)` is a 4x4 column-major matrix of 16 numbers, last four being translation and the perspective divisor (MDN); `k.pinDom` computes one from the camera each draw, so crisp HTML type sits on the object.
- **Panel:** `k.panel` extrudes a rounded rectangle with depth (default 2 percent of width) and a bevel, and puts the face texture slightly above the front (z = 0.26 x depth), unlit (the face material is `MeshBasicMaterial` with `toneMapped: false`).

## How to build it

### 3D (Rasan3D)

```js
Rasan3D.stage({
  id: "05-lift", canvas, timeline: tl, duration: 4.2, fps: 30,
  camera: {
    pos:    [[0, [0, 0, 12]], [0.5, [0, 0, 12]], [1.7, [-4.2, 1.6, 10.6], "power3.inOut"], [4.2, [-4.2, 1.6, 10.6]]],   // key 0 IS the layout pose; hold 0.5 s; then an arc and a crane
    target: [[0, [0, 0, 0]], [0.5, [0, 0, 0]], [1.7, [0.4, 0.2, 0], "power3.inOut"]],
    lens:   [[0, 50]],
  },
  post: {},                                                       // seam scene: no stage grain/vignette/bloom; finish.mjs does it across 2D and 3D
  async build(k) {
    const { THREE } = k;
    const flat = k.layout({ at: 0, distance: 12 });              // composition-pixel group at the camera's t = 0 pose
    const ppu = flat.userData.pxPerUnit;
    const rect = { x: 560, y: 300, w: 800, h: 480, r: 18 };      // the outgoing 2D element: read these from the 2D scene's CSS
    const panel = k.panel({ width: rect.w / ppu, height: rect.h / ppu, depth: 0.12, radius: rect.r / ppu, texture: k.image("assets/card.png") });
    flat.updateWorldMatrix(true, false);
    panel.position.copy(flat.localToWorld(new THREE.Vector3(rect.x + rect.w / 2, rect.y + rect.h / 2, 0)));
    k.scene.add(panel);
    k.rig("top-soft", { dir: [-0.3, 1, 0.8], shadows: true, shadowSoftness: 8 });
    k.ground({ y: -3.2, shadowOpacity: 0.3 });                    // far below: the shadow is off-frame while the card is flat
    k.pinDom(document.getElementById("r3-05-lift-title"), { at: panel, width: rect.w / ppu, face: "object", px: [rect.w, 96], offset: [0, rect.h / ppu * 0.3, 0.04] });
    return { panel, z0: panel.position.z };
  },
  pose(t, k) {
    const { panel, z0 } = k.objects;
    panel.position.z = z0 + 0.35 * k.prog(t, 0.3, 1.0, "expo.out");                       // the subject goes first (0.3 s), the camera leaves at 0.5 s
    panel.rotation.y = k.at(t, [[0.5, 0], [1.7, -0.42, "power3.inOut"]]);                  // 24 degrees
    panel.rotation.x = k.at(t, [[0.5, 0], [1.7, 0.12, "power3.inOut"]]);
  },
});
```

Notes:

- **Read the rect from the 2D scene.** `getBoundingClientRect()` in the outgoing scene (or the composition's own CSS) gives x, y, w, h; the radius is its `border-radius`. The seam is only as exact as these numbers. Same image for the face: if the 2D card is DOM text and styles, render it to a PNG first (`design.mjs stills` on the outgoing frame, cropped to the rect) and use that as `k.image`, or leave the face blank and let `k.pinDom` carry the real DOM.
- **The ground.** The shadow catcher is placed far below (`y: -3.2`) so the flat card casts nothing visible. As it lifts the shadow appears on the 2D ground (the layer beneath the canvas shows through). A visible drop shadow on frame 0 would be a pop.
- **No stage post.** Stage `post` touches only what the 3D layer draws (3d.md section 3). Grain, vignette or bloom there would appear at the cut. With the delivery finish the film gets one grain across every scene (`references/finish.md`, `scripts/finish.mjs all`), and the stage should then also set `motionBlur: false` except for a whip move.
- **Other seams:** `depth-to-flat`: `k.layout({ at: 4.2 })`, put the object at the next scene's rect, camera's last key is that pose, hold 2+ frames. `camera-through`: velocity-match direction and speed in the seam's `out` and `in` and cut at peak speed under motion blur. `shared-element`: a button becomes a slab or a logo extrudes (`k.svg`), at the DOM element's px rect at the seam time. `pinned`: `onDraw` with `k.toScreen(point)` for labels, hide when `!p.visible`.
- **Check:** `crew.mjs strip --file <frame.html> --from 0 --to 1.4 --fps 15` and put the 2D scene's last frame beside it; compare rect edges at 4x zoom. Colour: sample one flat region on both sides and compare RGB to within one level.

### 2D fallback

```js
gsap.set("#card", { transformPerspective: 1400 });
tl.to("#card", { z: 60, duration: 0.7, ease: "expo.out" }, 0.3)
  .to("#card", { rotationY: -24, rotationX: 7, duration: 1.1, ease: "power3.inOut" }, 0.5)
  .fromTo("#card", { boxShadow: "0 0 0 rgba(0,0,0,0)" }, { boxShadow: "0 40px 80px rgba(0,0,0,0.25)", duration: 0.7, ease: "power2.out" }, 0.3);
```
Use this only when the project cannot run WebGL; the 3D version gives true parallax and a camera.

### Seam worksheet (fill these numbers before writing code)

| Quantity | Where it comes from | Example |
|---|---|---|
| rect x, y, w, h (px) | `getBoundingClientRect()` in the outgoing scene at its last frame | 560, 300, 800, 480 |
| corner radius (px) | the element's computed `border-radius` | 18 |
| face image | a still of the outgoing frame cropped to the rect, or the real screenshot | `assets/card.png`, 800 x 480 (2x for retina: 1600 x 960) |
| layout distance | any value; it only sets the world scale (`pxPerUnit`) | 12 |
| camera pose at t = 0 | the layout pose, fixed by `distance` and lens | pos [0,0,12], target [0,0,0], 50 mm |
| hold | 3d.md section 6 | 0.1-0.3 s (here 0.3 s) |
| lift | subject first | 0.35 world units in 0.7 s, `expo.out` |
| camera leaves | 0.1-0.2 s after the lift starts | at 0.5 s |

Texture sharpness: a 3D card turned 24 degrees and viewed at 1080p needs the face texture at about the on-screen size (800 x 480) or larger; supply 2x. Colour: `k.image` loads sRGB and the face is unlit, so a flat region reads the same RGB on both sides of the cut.

## What makes a cheap imitation

- A crossfade or a flash between a flat card and a 3D one.
- A 3D object rebuilt by eye: slightly smaller, slightly different radius, a different shade.
- Lighting the screenshot like a real object: the content's colours shift at the seam.
- A drop shadow that is visible on the first 3D frame.
- Lifting the camera and the object at once; or lifting with a linear ease.
- 3D that spins to show it is 3D: a 24-degree turn and a hold reads as a card with depth; 360 degrees reads as a demo.
- Glow added at the lift as a transition "effect".

## Sources

- https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d (fetched): matrix3d is a 4x4 column-major matrix with 16 values; translation and the divisor in the last four.
- https://www.sidefx.com/community/spider-man-into-the-spider-verse/ (fetched): Houdini effects mixing 2D and 3D elements, procedural line work.
- https://www.awn.com/animationworld/rewriting-visual-rule-book-spider-man-spider-verse (fetched): over 25 custom Nuke tools, compositing-heavy production.
- https://blog.syncsketch.com/creator-stories/arcane-fortiche/ (fetched): 2D effects layered over 3D animation in post.
- local: `skills/rasanai/references/3d.md` section 6, `references/vocabulary.md` (Flat-to-depth, Depth-to-flat), `stage3d/templates/scene-3d.html` (panel at layout, `pxPerUnit`), `stage3d/rasan3d.js` (`layout`, `pxPlane`, `panel`, `pinDom`, `toScreen`).
- Our own: the 22.9 degree and 4.5 mm per pixel arithmetic, the rect numbers in the sketch, and the offsets for pinDom. The snippet has not been run in this session (unverified).
