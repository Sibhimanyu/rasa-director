---
id: "macro-product-closeup"
name: "Macro product close-up: razor-thin focus, slider moves, light that crawls across a surface"
space: "both"
family: "cinematic"
references: ["macro and probe-lens product cinematography", "luxury watch and jewellery films", "tabletop commercial work"]
timing: {"frame_rate":"24 to 30 fps; slow motion optional","holds_ms":[600,2000],"durations_ms":[4000,8000],"slider_travel_cm":[2,6],"note":"slider travel and durations are derivations; the sources describe slow or controlled dolly and slider moves without numbers"}
eases: {"key":"sine.inOut","notes":"the move is slow and smooth: sine.inOut over 4 to 8 s, or power1.inOut. Focus pulls use power2.inOut over 0.8 to 1.6 s. Light sweeps use power1.inOut."}
camera: {"lens_mm":[60,100,125],"moves":["slider move (lateral) of 2 to 6 cm","slow push of 1 to 3 cm","focus pull between two details","light sweep with a still camera"],"rules":["the camera is on a tripod or slider: tiny shake shows magnified (Film Daft)","manual focus; the sharp plane is millimetres deep","stop down to f/8 or smaller for any depth (Film Daft, Tom Crowl, Dutch Thrift f/5.6 to f/11)","diffused side light, no direct overhead, no light facing the lens (Dutch Thrift)","fill ratio and edge light define the form; the highlight travels across the surface"],"unverified":"1 mm of sharp depth at life size and f/8 appears only in a search snippet, not in a fetched page"}
recipe_2d: "HyperFrames GSAP: the product fills 60 to 90% of frame width (vocabulary.md ECU). Planes: far background (d 0.2, blur 22 px), product body (d 1, sharp), a near foreground detail (d 3 to 5, blur 14 to 24 px, partially in frame). Slider: tl.to('#world',{x:-70,duration:6,ease:'sine.inOut'},0) with per-layer depth factors so the near plane travels 5x the far plane (x -350 vs -14 px); a 1 to 2% push on top. Focus pull between two planes: tl.to('.front-detail',{filter:'blur(0px)',duration:1.2,ease:'power2.inOut'},2.2).to('.logo-plane',{filter:'blur(14px)',duration:1.2,ease:'power2.inOut'},2.2) (blur layers, never the whole frame) plus 1 to 2% scale breathing on the world for focus breathing. Light sweep: an overlay gradient layer (linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)) with mix-blend-mode soft-light or screen, masked to the product, tl.fromTo('.sweep',{xPercent:-120},{xPercent:120,duration:2.2,ease:'power1.inOut'},1.4). Bokeh: 6 to 10 out-of-focus circles in the far layer (blur 8, opacity 0.35) drifting 20 px slower than the world. 3% grain."
recipe_3d: "Rasan3D (metres). Product 0.08 m wide at the origin; strip lights as emissive panels or rect lights, a rim from behind, a white card for fill; polished material with an environment so the highlight moves with the camera. Rasan3D's projection is a pinhole, so a 36 mm wide field at 100 mm focal length sits at 0.10 m from the subject (36*d/mm; a real macro lens reaches the same width at about 0.2 m by thin-lens magnification, so do not reuse real working distances). camera: { pos:[[0,[-0.03,0.015,0.11]],[6,[0.03,0.015,0.11],'sine.inOut'],[7.5,[0.03,0.015,0.11]]], target:[[0,[0,0.01,0]],[6,[0.01,0.01,0],'sine.inOut']], lens:[[0,100]], roll:[[0,0]], focus:[[0,0.108],[2.0,0.108],[3.4,0.121,'power2.inOut'],[7.5,0.121]], fstop:8 }. Pull focus from the front edge (0.108 m) to the engraved logo (0.121 m) between 2.0 and 3.4 s. Light sweep: a strip light moving on pose(t): x = -0.10 + 0.20*Rasan3D.prog(t,1.0,5.5,'power1.inOut'), so the specular highlight crosses the metal. Test f/8 against f/5.6 and f/11 with stills: pick the one where the focus band is about a third of the product depth. Samples: DoF at 100 mm uses many sub-frames; check the gate cost."
pitfalls: ["the whole object sharp: macro depth of field is millimetres, so the shot needs a focus plan (what is sharp, when it changes)","no moving light: a static, flat-lit product looks like a catalogue still; sweep a highlight or a lit edge","camera shake: shake is magnified at macro, so use a slider move, never a handheld wobble (Film Daft)","hard light facing the lens: glare. Use diffused side lights (Dutch Thrift)","real working distances in Rasan3D: the engine is pinhole; derive distance from 36*d/mm","fstop 2: the sharp plane thinner than the subject's feature, so nothing reads; macro work stops down to f/8 to f/16 (Tom Crowl: f/8 to f/16, f/22 for detailed surfaces)","blur on the whole frame in 2D: blur planes separately","over-sharpening and halos"]
instruct: {"all":"Specify the frame width the product fills, the lens (100 mm), the stop (f/8), the slider travel (centimetres or pixels) and duration, the focus plan (which plane is sharp from when to when), the light sweep timing and what moves; ban handheld shake, orbit, and an all-sharp frame.","claude":"Ask Claude to write the focus plan as a table of time, sharp feature and distance, then derive focus keys from distances; and to say which light moves and when. It tends to leave focus on 'target' and fstop at 2.8 for every shot, so give the stop and the distances.","gpt":"GPT-family output tends to default to a slow orbit with a generic glow. Require a straight slider move, the focus pull with plane names, and one travelling highlight."}
verified: {"sources_fetched":4,"non_wikipedia":4,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://tomcrowl.com/macro-photography/", "https://vmi.tv/blog/learn-help/macro-and-micro-cinematography/", "https://filmdaft.com/what-is-a-macro-lens/", "https://dutchthrift.com/blogs/blogs/how-to-shoot-stunning-product-videos-with-a-used-macro-lens"]
---
## What it is

Macro product work shoots a small object at close to life size. The physics define the look: the closer the lens, the shallower the depth of field, so a few millimetres are sharp and everything else dissolves; the camera moves in centimetres on a slider; and the light, not the camera, does most of the travelling. Product commercials use it for watches, jewellery, cosmetics, circuitry and food.

## The defining traits (numbers)

- **Magnification.** True macro is 1:1 or greater (Tom Crowl); VMI treats 1:1 to 10:1 as macro and above 10:1 as micro; Film Daft says lower ratios like 1:2 or 1:3 work for cinematic inserts.
- **Focal length.** 90 to 105 mm for product work (Tom Crowl: Nikon 105, Canon 100, Sony 90); Film Daft: 100 mm preferred, 60 mm needs a few centimetres of working distance; VMI lists dedicated macro primes from 65 to 125 mm, a 100 mm macro at 4 to 6 inches working distance, a 125 mm MikroMak at about 9 inches, and a 24 mm Laowa probe at under an inch to the front element.
- **Aperture.** f/8 to f/16 starting point, f/22 for very detailed surfaces (Tom Crowl); f/8 or smaller (Film Daft); f/5.6 to f/11, about f/8 with ISO 100 to 400 and shutter 1/50 at 25 fps (Dutch Thrift).
- **Depth of field.** "Optical laws define the depth of field achieved for a given iris and focal length" (VMI); at life size and f/8 it is roughly 1 mm (a search snippet, unverified); focus stacking of three to fifty frames is the stills answer (Tom Crowl). In motion the answer is a focus plan.
- **Movement.** Sturdy tripod or small slider, "slow motion or controlled dolly moves" accentuate shape (Dutch Thrift); handheld is difficult because "even the most minor shakes get exaggerated" (Film Daft). The ASC's Shot Craft calls the slider "a mini dolly" for small moves on fixed subjects (an ASC page fetched for the handheld entry; not used for numbers).
- **Light.** Diffuse light, angular light from several directions, two diffused side lights, no direct overhead or lens-facing light, extra light because small apertures darken the image; ring lights, twin flashes, reflectors, light tunnels (Film Daft, Dutch Thrift, VMI).

## How to build it

**Plan the focus.** Name what is sharp at each time: edge of the crown 0 to 2 s, then the engraved logo 3.4 to 7.5 s. The pull between them is the shot's event.

**2D.** Fill 60 to 90% of the frame with the product, put a heavily blurred foreground detail in a near plane and a soft background behind, move the camera 70 px with per-layer depth factors, pull focus by crossfading blur between planes, and run a masked highlight sweep over the surface. That is the whole language: depth, a pull, a light.

**3D.** The scene is metres (a 0.08 m product), the lens 100 mm, the stop f/8. Place a travelling light and let the specular move: highlights crossing a polished edge are what the viewer watches. Because Rasan3D's projection is a pinhole, compute distance as `d = width_in_frame * mm / 36`: for a 36 mm field at 100 mm, `d = 0.1 m`. Numeric `focus` keys follow the camera-to-feature distance.

```js
camera: {
  pos:    [[0,[-0.03,0.015,0.11]], [6,[0.03,0.015,0.11],"sine.inOut"], [7.5,[0.03,0.015,0.11]]],
  target: [[0,[0,0.01,0]], [6,[0.01,0.01,0],"sine.inOut"]],
  lens:   [[0,100]], roll: [[0,0]],
  focus:  [[0,0.108], [2.0,0.108], [3.4,0.121,"power2.inOut"], [7.5,0.121]],
  fstop:  8
}
```

The focus values are distances from the camera to the front edge and to the logo (derivations from the blocking above; recompute if you move either).

## What makes a cheap imitation

- Everything in focus, or a uniform blur on the background. The depth falls off in millimetres and the sharp region moves.
- A glowing object on black with no travelling highlight.
- Shake, floaty orbits and constant-speed spins. Macro is slider-smooth.
- Bokeh circles as decoration with no relation to a light source.
- Real-world working distances reused in a pinhole renderer.

## Sources

- https://tomcrowl.com/macro-photography/ — start macro product shots at f/8 to f/16, f/22 for very detailed or textured surfaces; depth of field "especially limited"; smaller apertures need longer shutter or higher ISO; focus stacking for full sharpness; diffused artificial light to remove harsh shadows (fetched 2026-10-03). The 90 to 105 mm lens figure and the three-to-fifty stack count are carried from the earlier read and were not in this fetch.
- https://vmi.tv/blog/learn-help/macro-and-micro-cinematography/ — probe lenses combine wide-angle perspective with closeness; "bathe the object in angular light" with several panels; moving the camera away increases depth of field; use a closed iris on micro lenses (fetched 2026-10-03). Magnification-range numbers from the earlier read were not in this fetch.
- https://filmdaft.com/what-is-a-macro-lens/ — 1:1 ratio defined as life size on the sensor; probe lenses up to 2x (Laowa); stop down to f/8 or smaller; "even a one-millimeter movement can throw your subject out of focus"; use a tripod or rig; macro lenses 50 to 200 mm with 100 mm popular (fetched 2026-10-03).
- https://dutchthrift.com/blogs/blogs/how-to-shoot-stunning-product-videos-with-a-used-macro-lens — two diffused side lights, avoid overhead or lens-facing light, f/5.6 to f/11, sturdy tripod or small slider, remote release (fetched 2026-10-03). The 1/50 s at 25 fps shutter figure was not in this fetch.
