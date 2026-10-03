---
id: "isometric-motion"
name: "Isometric motion (parallel projection, axis-locked)"
space: "both"
family: "other"
references: ["Isometric and dimetric video game graphics (Zaxxon 1982, Treasure Island 1981, Civilization II, Diablo, X-COM)", "Monument Valley (ustwo games, 2014)", "Isometric projection in technical drawing (William Farish)"]
timing: {"frame_rate":"30 or 60 fps","holds_ms":[500,1500],"durations_ms":{"build_up_per_block":[350,600],"slide_on_axis":[400,700],"world_rotate_90":[700,1100],"stagger":[40,90]},"note":"timings are derived; the sources cover geometry and design constraints"}
eases: {"key":"power3.out for build-ups, power3.inOut for slides, expo.inOut for 90-degree world rotations","notes":"motion is axis-locked: pieces travel along one of the three iso axes (screen vectors (0.866, 0.5), (-0.866, 0.5), (0, -1)); no free diagonal tweening"}
camera: {"lens_mm":[300,600],"moves":["locked iso view","90-degree world rotation about the vertical axis","slow truck along an iso axis"],"rules":["no vanishing point: parallel projection","axes at 30 degrees from horizontal (true isometric) or 26.565 degrees (2:1 pixel dimetric)","no roll or tilt changes mid-shot"]}
recipe_2d: "GSAP paused timeline, 1920x1080. Do not use CSS 3D for geometry; project: iso(x,y,z) = [ox + (x - y) * 0.866 * s, oy + (x + y) * 0.5 * s - z * s] with s = 48 px per unit (derived), ox,oy at frame centre. Boxes are three polygons (top, left, right) recomputed from a proxy height h with onUpdate (a pure function of progress); face fills from one hue at three lightness steps (top lightest, left mid, right darkest, as a fixed light from upper-left: 100 / 78 / 58 percent of the base lightness, derived). Build-up: blocks rise from h=0 to final, 350-600 ms power3.out, stagger 40-90 ms ordered by x+y (back to front for painter's order). Slides: translate along an axis by moving the box's world coordinate on one axis only, power3.inOut 400-700 ms. World rotation: animate angle a from 0 to 90 degrees over 700-1100 ms on expo.inOut and reproject every point with the rotation about z before the iso map; sort by depth each update. CSS-only alternative for a flat plane: transform: rotateX(54.736deg) rotateZ(45deg). Shadows: a single parallelogram offset along the light axis, 18 percent black, no blur."
recipe_3d: "Rasan3D: true isometric by lens and placement: camera.pos = target + D*(1,1,1)/sqrt(3) with D = 60 to 120 m and lens 300-600 mm (near-parallel rays; Rasan3D's camera is perspective, so a long lens is the substitute for an orthographic camera). Elevation 35.264 degrees gives 30-degree screen axes; for 2:1 dimetric use elevation 30 degrees (slope sin(elev) = 0.5) with 45-degree azimuth. Blocks are k.panel/box meshes with k.material('matte'/'clay') in 3 tones, rig 'top-soft' dir [-0.5,1,0.4] with shadowSoftness 4. pose(t,k): build-ups scale y from the base (k.prog with 'power3.out'), slides on one axis, world rotation via camera.pos on k.orbit from 45 to 135 degrees with 'expo.inOut' over 0.9 s while the lens and elevation stay fixed. No DoF (fstop off), motion blur on."
pitfalls: ["axes at the wrong angle: 30 degrees from horizontal for true isometric; many games use 2:1 (26.565 degrees), so decide once and keep it", "perspective creeping in: tilted CSS planes with a perspective value or a short lens makes edges converge", "free diagonal motion: pieces should move along iso axes", "inconsistent light: three tones on the three visible face directions, one light source", "painter's-order mistakes: draw back to front, sort by x+y+z", "pixel-art stair-stepping on a smooth vector: choose either a crisp vector look or a deliberate 2:1 pixel grid", "rotating the world by tilting the camera elevation: iso rotations spin about the vertical axis in 90-degree steps", "saturated, dark palettes: the Monument Valley analysis notes restraint, avoiding heavily saturated and dark hues", "using it for dense text: the projection distorts type"]
instruct: {"all":"State the projection (isometric 30 degrees or 2:1 dimetric), the unit size in px, the three face tones, the light direction, and which axis each piece moves on. Provide the iso() function so the model does not use CSS 3D.","claude":"Claude tends to build isometric scenes with CSS 3D transforms and a perspective, which introduces convergence, and to rotate pieces freely. Give it the projection function and say 'no perspective property, no CSS 3D, pieces move on one axis'. Claude may also draw all faces with the same fill; require three tones.","gpt":"GPT models often write transform: rotateX(60deg) rotateZ(45deg) with a perspective on the parent and tween everything with power2.out. Require the iso() projection, an explicit z-sort, and an ease table by motion type. They also forget the depth sort when pieces pass each other; require a sort by x+y+z each update."}
sources: ["https://en.wikipedia.org/wiki/Isometric_projection", "https://en.wikipedia.org/wiki/Isometric_video_game_graphics", "https://nabauer.com/monument-valley-design-analysis/", "https://en.wikipedia.org/wiki/Monument_Valley_(video_game)"]
---

## What it is

Isometric projection is a parallel projection in which the three coordinate axes are equally foreshortened with 120-degree angles between them. Wikipedia gives the viewing rotation as about 35.264 degrees (arctan 1/sqrt 2), the foreshortening as roughly 80 percent of true length, and the history: formalised by William Farish (1759 to 1837), with axonometry itself, per the article, originating in China. Dimetric projection differs by not foreshortening all axes equally.

In games, "isometric" mostly means dimetric. Wikipedia's article on isometric video game graphics says such graphics rarely use true isometric projection: a 2:1 pixel ratio with axes at about 26.565 degrees is most common rather than the mathematical 30. The style started in arcades with Data East's Treasure Island (1981) and Sega's Zaxxon (1982), thrived in strategy and RPG titles (Civilization II, Diablo, X-COM), and the parallel projection removes sprite scaling and lets large areas be drawn quickly. It revived in the 2010s indie scene.

Monument Valley (ustwo games, released 3 April 2014 after about ten months of development) is the design reference for isometric motion: the Nabauer analysis reports a 30 degree isometric grid where "every angle you see is either at 30 degrees, 120 degrees, or perfectly vertical", so rotating the viewpoint reveals hidden paths; a restrained palette that avoids heavily saturated and dark hues and balances warm and cool; low-poly style limited to moving entities; and Museo as the typeface. Wikipedia lists the influences as Japanese prints, minimalist sculpture, Windosill, Fez and Superbrothers: Sword and Sworcery, with Escher and impossible geometry as the comparison, and Ken Wong's aim "to make each frame of the gameplay worthy of public display".

## The defining traits (numbers)

Documented:
- True isometric: axes 120 degrees apart; on screen, horizontal-ish axes at 30 degrees from horizontal; rotation 35.264 degrees; foreshortening about 0.816 per axis.
- 2:1 dimetric (game pixel art): axes at about 26.565 degrees (slope 0.5).
- Parallel projection: no vanishing point, no scaling with distance.
- Monument Valley: angles of 30, 120 or 90 degrees only; moderately saturated, not dark; world rotations that reveal paths.

Derived screen specification (1920x1080):
- Unit: 48 px per world unit (a 10 x 10 floor spans about 830 px wide, 480 px tall).
- Projection: `sx = ox + (x - y) * 0.866 * 48`, `sy = oy + (x + y) * 0.5 * 48 - z * 48`.
- Face tones: top 100, left 78, right 58 percent of the base lightness (light from upper-left); a single hue family per object, a second hue for accents.
- Shadows: parallelogram offset along the light axis, 18 percent black, no blur.
- Timing: build-up 350 to 600 ms per block, stagger 40 to 90 ms; slides 400 to 700 ms; 90-degree rotation 700 to 1100 ms; holds 500 to 1500 ms.
- Camera: locked; the world rotates in 90-degree steps.
- Typeface: Museo is cited for Monument Valley (Museo is distributed free in some weights; check the licence); for OFL use Nunito or Fredoka for a rounded feel, or a neutral grotesk.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

```js
const S = 48, OX = 960, OY = 640, C = Math.cos(Math.PI/6), SN = 0.5;
const iso = (x, y, z) => [OX + (x - y) * C * S, OY + (x + y) * SN * S - z * S];
const P = pts => pts.map(p => p.join(",")).join(" ");
function drawBox(el, x, y, h, w = 1) {                                 // el = <g> with three <polygon class="top|left|right">
  const A = iso(x, y, h), B = iso(x+w, y, h), Cc = iso(x+w, y+w, h), D = iso(x, y+w, h);   // top face corners
  const a = iso(x, y+w, 0), b = iso(x+w, y+w, 0), c = iso(x+w, y, 0);                       // base corners visible from the viewer
  el.querySelector(".top").setAttribute("points", P([A, B, Cc, D]));
  el.querySelector(".left").setAttribute("points", P([D, Cc, b, a]));
  el.querySelector(".right").setAttribute("points", P([Cc, B, c, b]));
}
const tl = gsap.timeline({ paused: true });
window.__timelines["14-iso"] = tl;
const blocks = gsap.utils.toArray(".blk").map(el => ({ el, x: +el.dataset.x, y: +el.dataset.y, H: +el.dataset.h, h: 0 }));
blocks.sort((p, q) => (p.x + p.y) - (q.x + q.y)).forEach((b, i) => {      // back to front; stagger by depth
  drawBox(b.el, b.x, b.y, 0);
  tl.to(b, { h: b.H, duration: 0.45, ease: "power3.out", onUpdate: () => drawBox(b.el, b.x, b.y, b.h) }, 0.3 + i * 0.06);
});
// slide one block 3 units along +x (an iso axis), power3.inOut
const mover = blocks[5];
tl.to(mover, { x: mover.x + 3, duration: 0.55, ease: "power3.inOut", onUpdate: () => drawBox(mover.el, mover.x, mover.y, mover.h) }, 2.4);
```

Rules:
1. No `perspective` anywhere in the ancestor chain; do not use `rotateX/rotateY` for geometry (the flat-plane CSS shortcut `rotateX(54.736deg) rotateZ(45deg)` is for a single floor texture only).
2. Sort draw order by `x + y + z` whenever positions change; re-append DOM nodes if needed.
3. World rotation: animate `a` and use `x' = x cos a - y sin a`, `y' = x sin a + y cos a` about the world centre before `iso()`; use `expo.inOut`, 700 to 1100 ms, 90 degrees per step; re-sort on update.
4. Edges: 1 px stroke in a tone 10 percent darker than the face, or none; never a black outline unless the whole style has one.
5. All motion axis-locked: if a path needs a corner, make two tweens on two axes.
6. Pixel-art variant: snap `iso()` outputs to a 2 px grid and use 2:1 slopes (0.5) with `steps()` eases; do not mix with smooth vector motion.

### 3D (Rasan3D)

```js
const D = 90, e = D / Math.sqrt(3);                                      // (1,1,1) direction at distance D
camera: { pos: Rasan3D.orbit({ center:[0,0,0], radius: D*0.8165, height: e, from:45, to:135, t0:2.4, t1:3.3, ease:"expo.inOut" }),
          target:[[0,0,0]], lens:[[0,400]] },
// rig: k.rig("top-soft", { dir:[-0.5,1,0.4], shadows:true, shadowSoftness:4 }); materials: k.material("clay", { color:"#e8b4a0" }) in 3 tones
pose(t, k){
  k.objects.blocks.forEach((b, i) => { const g = k.prog(t, 0.3 + i*0.06, 0.75 + i*0.06, "power3.out"); b.scale.y = Math.max(0.001, g); b.position.y = g * b.userData.H / 2; });
}
```
Notes: radius of the orbit in the horizontal plane is `D * sqrt(2/3)` = 0.8165 D when elevation is 35.264 degrees (derived trigonometry). For a 2:1 dimetric view, set height = `D * sin(30deg)` = 0.5 D and radius `D * cos(30deg)`. The lens at 400 mm with D = 90 m keeps convergence under a pixel or two across a 10 m scene (derived estimate; verify with a strip). Keep `fstop` off so edges stay crisp.

## What makes a cheap imitation

- A CSS `rotateX(60deg) rotateZ(-45deg)` card with a perspective value: it converges and the angles are wrong.
- The same fill on all three faces.
- Dark, saturated neon palettes with glow.
- Pieces that glide diagonally across the screen.
- A world that tumbles on arbitrary angles.
- Pixel-art noise or dithering mixed with smooth gradients.

## Sources

- https://en.wikipedia.org/wiki/Isometric_projection : 120-degree axes, 35.264 degree rotation, about 80 percent foreshortening, Farish, dimetric distinction, indie revival.
- https://en.wikipedia.org/wiki/Isometric_video_game_graphics : 2:1 dimetric at about 26.565 degrees, Treasure Island 1981, Zaxxon 1982, parallel projection advantages.
- https://nabauer.com/monument-valley-design-analysis/ : 30-degree grid, 30/120/vertical angles, restrained palette, low-poly moving entities, Museo.
- https://en.wikipedia.org/wiki/Monument_Valley_(video_game) : 2014 release, ten months, influences, Ken Wong's aim.

Derived or unverified: unit size, face lightness ratios, timings, the orbit radius arithmetic, the long-lens parallax estimate, the claim that Monument Valley rotates the world in 90-degree steps (the analysis says rotating the viewpoint reveals paths, not the step size).
