---
id: "paper-cutout-parallax-2-5d"
name: "Paper cut-out parallax (multiplane 2.5D)"
space: "both"
family: "collage"
references: ["Disney multiplane camera (The Old Mill, 1937; Snow White)", "Lotte Reiniger's early multi-layer glass setup (1923)", "Karel Zeman and Terry Gilliam multi-plane cut-outs", "Laika/Kubo-style layered paper sets", "Parallax scrolling in games (Moon Patrol, 1982)"]
timing: {"frame_rate":"30 fps smooth (default) or stepped on twos for a tactile stop-motion variant","holds_ms":[600,2000],"durations_ms":[1200,2400,4000,6000],"camera_move_ms":[2400,6000]}
eases: {"key":"sine.inOut or power2.inOut on the camera; layers follow the same ease at different amplitudes","notes":"Parallax is a ratio, not a separate animation: every layer uses the same time curve, scaled by its depth. Foreground layers can lead by 80-150 ms for secondary action."}
camera: {"lens_mm":[50,85],"moves":["slow lateral truck","push-in","6-12 degree arc","rack focus between layers"],"rules":["Layer spacing 0.02-0.15 m in 3D so paper shadows read as thickness","Near foreground is out of focus and dark at the frame edges","Camera moves 2-6% of frame width per second in 2D, never a full constant-speed drift"]}
recipe_2d: "HyperFrames: #world with perspective 1600px and transform-style preserve-3d; each layer is a div (or inline SVG) with translateZ(z) and a compensating scale (1600 - z)/1600 so it keeps its authored size; z for 6 layers: -1200, -800, -400, 0, +300, +600. The camera is one tween on #world: x from 0 to -260 px and rotateY 0 -> 3 deg over 4 s sine.inOut, or per-layer x = -D*d with d = 1600/(1600 - z) (layers at z=-1200 move 0.57x, z=+600 move 1.6x). Paper edge: filter drop-shadow(0 Hpx Bpx rgba(10,10,20,.28)) with H = 2 + elevation*6 px and B = 3 + elevation*10 px where elevation is 0..1 from back to front; a 1 px inner highlight on the top edge; paper grain 256 px tile at 5 percent multiply. Near foreground layer: blur 6-10 px (pre-blurred) and 25 percent darker at the edges. Every layer animates inside its own element; all tweens on one paused timeline."
recipe_3d: "Rasan3D: each layer a plane (k.pxPlane or PlaneGeometry with k.image alpha texture) in k.material('paper'), cut shape from the alpha, stacked at z = 0, -0.04, -0.09, -0.15, -0.22 m (layer spacing 0.02-0.15), rig 'top-soft' with shadows:true and shadowSoftness 2-4 so each layer casts a soft paper shadow on the next; camera pos keys: truck 0.35 m over 5 s 'sine.inOut' or an arc k.orbit({center:[0,0,-0.1], radius:1.6, from:-6, to:6, t0:0, t1:5, ease:'sine.inOut'}), lens 50-85 mm, fstop 2.8 with a focus key stepping from the mid layer to the far layer for a rack focus; motion blur default; environment 'soft'. DOM type stays in the ui layer or is pinned with k.pinDom at the layer."
pitfalls: ["Layers move at the same speed (a flat slide), or at speeds unrelated to z", "Linear constant-speed drift with no start or end: the camera must ease and rest", "No shadows between layers: paper layers read as flat PNGs without them", "Shadow offset identical on every layer; it should grow with elevation", "Hard cut-out silhouettes with no thickness or edge highlight", "Too many layers (10+) with tiny differences: 4-7 clear depth planes read better", "Blur on the whole frame instead of per-layer focus", "Perspective distortion: lateral truck with rotateY above 5 deg tears the paper illusion unless layers have real z", "Text placed on a back layer at its parallax speed: the type must stay on the plane it belongs to and remain readable"]
instruct: {"all":"Give the layer table (name, z, depth factor d, shadow offset, blur) and one camera tween; state that all layers share one ease and differ only in amplitude. Specify shadows and paper grain numerically.","claude":"Claude tends to give every layer a separate hand-tuned x tween with slightly different durations, so the parallax drifts out of sync. Say 'one camera value, layers multiply by d'. It will otherwise add a faint continuous drift to every layer; forbid that. A table with d computed from z is followed accurately.","gpt":"GPT models tend to move layers with CSS animation and the same distance but different durations, and to omit shadows. Require one GSAP tween on #world (or one clock value) and per-layer d from the z formula; require the drop-shadow chain per layer with numbers; forbid CSS animation."}
sources: ["https://en.wikipedia.org/wiki/Multiplane_camera", "https://en.wikipedia.org/wiki/Parallax_scrolling", "https://en.wikipedia.org/wiki/Cutout_animation", "https://blog.animationstudies.org/?p=4032"]
---

## What it is

A multiplane setup moves several flat layers past a camera at different distances and speeds so that near layers shift more than far ones: the parallax of depth, built from flat pieces. Wikipedia's Multiplane camera page: Disney's version used up to seven layers painted in oils on glass; Lotte Reiniger used multiple layers of glass in 1923; Ub Iwerks built a version in 1933; William Garity created Disney's version, tested on the 1937 Silly Symphony The Old Mill (an Academy Award winner) and used on Snow White. "The further away from the camera, the slower the speed." Parallax scrolling in games "grew out of the multiplane camera technique" (Parallax scrolling page), and Gilliam took Karel Zeman's idea of building cut-outs into multi-plane shots (Animation Studies). In motion graphics the look is layered paper: cut-out shapes in depth, each layer casting a thin shadow on the next, a camera sliding slowly over them.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Layer count | up to 7 in the Disney multiplane | Multiplane wiki |
| Speed rule | the farther the layer, the slower it moves; opposite directions can create rotation | Multiplane wiki |
| Example ratios | ground 8x the vegetation layer, vegetation 2x the cloud layer | Parallax scrolling wiki |
| Early game | Moon Patrol (1982): three background layers at different speeds | Parallax scrolling wiki |
| Layered cut-out practice | Reiniger backlit, Gilliam lit from above | Cutout animation wiki |
| Depth factor d | 1600/(1600 - z): z -1200 gives 0.57, 0 gives 1.0, +300 gives 1.23, +600 gives 1.6 (perspective 1600 px) | derived (perspective projection) |
| Vocabulary depth factors | far 0.2, content 1, near 3-6 | references/vocabulary.md |
| Practical layers | 4-7 clear planes | own recommendation |
| Layer spacing in 3D | 0.02-0.15 m (shadows read as paper thickness) | own working range |
| Shadow growth | offset 2 px at the back to 8 px at the front; blur 3 to 13 px | own working range |
| Camera amplitude | 2-6% of frame width per second, or 3-12 deg of arc | own working range |

## How to build it

### 2D (HyperFrames, true CSS 3D so the parallax is exact)

```html
<div id="stage" style="perspective:1600px; perspective-origin:50% 50%; width:1920px; height:1080px; overflow:hidden">
  <div id="world" style="transform-style:preserve-3d; width:1920px; height:1080px; position:absolute">
    <div class="layer" data-z="-1200" id="L0"><!-- far hills --></div>
    <div class="layer" data-z="-800"  id="L1"></div>
    <div class="layer" data-z="-400"  id="L2"></div>
    <div class="layer" data-z="0"     id="L3"><!-- hero plane, type here --></div>
    <div class="layer" data-z="300"   id="L4"></div>
    <div class="layer" data-z="600"   id="L5"><!-- near foreground, pre-blurred --></div>
  </div>
</div>
```

```js
const P = 1600;
document.querySelectorAll(".layer").forEach((el, i, all) => {
  const z = +el.dataset.z, e = i / (all.length - 1);                 // elevation 0 (back) .. 1 (front)
  gsap.set(el, { position: "absolute", inset: 0, z, scale: (P - z) / P,            // keeps its authored on-screen size at rest
    filter: `drop-shadow(0 ${2 + e * 6}px ${3 + e * 10}px rgba(10,10,20,0.28))` });
});
gsap.set("#L5", { filter: "blur(8px) brightness(0.8)" });             // near foreground, pre-blurred once

const tl = gsap.timeline({ paused: true }); window.__timelines["scene"] = tl;
tl.fromTo("#world", { x: 0, rotationY: 0 }, { x: -260, rotationY: 3, duration: 4, ease: "sine.inOut", transformOrigin: "50% 50%" }, 0.3);   // one camera, one ease
tl.fromTo("#world", { z: 0 }, { z: 120, duration: 4, ease: "sine.inOut" }, 0.3);                                                          // 2-3% push, parallax comes free from the layer z
```

- The depth factor falls out of CSS perspective: a camera translation of D px moves a layer at z by D * P / (P - z) px, so you do not hand-tune per-layer speeds. Keep layers' own animation (a bird, a cloud) as small relative motions inside the layer.
- Make the paper read: each layer's artwork is a cut shape with a 1 px lighter top edge (`box-shadow: inset 0 1px 0 rgba(255,255,255,.35)` on the shape) and a paper grain tile at 5% in multiply across the stage, not the layer (no per-layer texture seams).
- Stepped variant: add `HOLD = 2` sampling: tween a plain-object clock and write the camera x with the held time, so the layers jump 6-12 px per drawing with the same ratios (see cutout-collage-gilliam).
- Type stays on the hero plane (z 0) and does not take the parallax; shadow numbers above apply to text containers too.
- Rack focus between layers: tween `filter: blur()` of the layers, never of `#world` (blur only the planes that are out of focus, 6-10 px, 0.5-0.8 s).
- Cost: preblur static layers; keep drop-shadow blur under 16 px; six full-frame layers with filters are fine on GPU, but do not stack feTurbulence on them.

### 3D (Rasan3D)

```js
Rasan3D.stage({ id: "paper", canvas, timeline: tl, duration: 6, fps: 30, environment: "soft",
  camera: { pos: [[0, [-0.18, 0.05, 1.7]], [5, [0.18, 0.05, 1.5], "sine.inOut"]], target: [[0, [0, 0, -0.1]]], lens: [[0, 65]],
            fstop: 2.8, focus: [[0, 1.7], [2.2, 1.7], [3.4, 1.95, "power2.inOut"]] },      // hold on the mid layer, then rack to the far layer
  async build(k) {
    const Z = [-0.30, -0.22, -0.15, -0.09, -0.04, 0], layers = [];
    Z.forEach((z, i) => { const m = new k.THREE.Mesh(new k.THREE.PlaneGeometry(2.4, 1.35),
      k.material("paper", { map: k.image(`assets/layer${i}.png`), transparent: true, alphaTest: 0.5 }));   // the cut shape is the alpha
      m.position.z = z; m.castShadow = true; m.receiveShadow = true; layers.push(m); });
    k.rig("top-soft", { dir: [-0.3, 0.8, 0.6], intensity: 1.0, shadows: true, shadowSoftness: 3, shadowSize: 2048 });
    return { layers };
  },
  pose(t, k) { /* optional: small per-layer relative motion, each eased, e.g. layers[2].position.y = 0.01 * Math.sin(...) */ } });
```

For an arc instead of a truck, replace the `pos` keys with `pos: k.orbit({ center: [0,0,-0.1], radius: 1.6, from: -6, to: 6, t0: 0, t1: 5, ease: "sine.inOut" })` as in 3d.md. Layer spacing of 0.04-0.09 m at a 1.5 m camera distance gives 3-5% differential shift over a 0.36 m truck; a 65 mm lens keeps the flatness of a rostrum camera. Alpha-tested planes cast alpha-shaped shadows; check `crew.mjs strip` that shadow edges don't flicker (use shadowSize 2048 and `alphaTest`, not `transparent` blending, for casters). The 2D type goes in the ui layer, or `k.pinDom` onto the hero layer.

## What makes a cheap imitation

- All layers translating at one speed or at speeds with no relation to depth.
- Flat PNGs with no shadow on the layer below: the 'paper' reading is the shadow.
- Perfectly constant drift with no ease or rest.
- Ten near-identical layers where four would read.
- A generic gaussian blur on the whole frame to fake depth.
- Layers with soft feathered edges: paper is a hard cut with a thin lighter edge.
- A foreground that is not different from the middle: the near plane should be dark, out of focus and fast.

## Sources

- https://en.wikipedia.org/wiki/Multiplane_camera (fetched) - up to seven layers, speed rule, Reiniger 1923, Iwerks 1933, Garity and The Old Mill.
- https://en.wikipedia.org/wiki/Parallax_scrolling (fetched) - layer speed ratio example, Moon Patrol, lineage from the multiplane camera.
- https://en.wikipedia.org/wiki/Cutout_animation (fetched) - Reiniger backlit, Gilliam lit from above, digital cut-out.
- https://blog.animationstudies.org/?p=4032 (fetched) - Gilliam's debt to Zeman's multi-plane cut-outs.
- Unverified: every px, metre, degree and shadow value is an own working number; the depth factor formula is projective geometry applied to CSS perspective, checked arithmetically only; the Rasan3D snippet was not rendered in this session.
