---
id: "tilt-shift-miniature"
name: "Tilt-shift miniature: a narrow focus band on a high angle"
space: "both"
family: "cinematic"
references: ["tilt-shift photography and time-lapse (the diorama effect)", "model-railway and architectural-model cinematography"]
timing: {"frame_rate":"render at 30 fps, move the world on 6 to 10 fps steps for the toy feel","holds_ms":[800,2500],"durations_ms":[6000,12000],"speed_up":"2x to 8x on moving things (derivation); Wikipedia: run the video faster than recorded to reduce perceived inertia","note":"no source gives a speed-up factor or step rate; both are derivations"}
eases: {"key":"sine.inOut","notes":"slow crane or lateral move of a few percent; the effect lives in the focus pattern and the colour, not in the camera move. Moving things use linear or step motion (toy-like), never overshoot."}
camera: {"lens_mm":[85,135],"moves":["high-angle hold","slow truck of 2 to 5% of frame width","slow crane (pos.y) of 5 to 10%"],"rules":["elevated viewpoint looking down 30 to 55 degrees (Wikipedia: high angle simulates looking down at a miniature)","focus a thin horizontal band; blur grows progressively above and below it","longer focal length compresses the image (Pond5)","boost saturation and contrast (Pond5 starts at +20 to +30 saturation; Wikipedia: brighter colours and harder shadows)","real-scale subject with miniature depth cues, or a scene genuinely built at miniature scale"]}
recipe_2d: "HyperFrames: three stacked copies of the plate (or the whole layered scene flattened into one layer) with masks. Sharp copy on top: mask-image: linear-gradient(to bottom, transparent 0%, #000 36%, #000 58%, transparent 74%) (focus band about 38% to 58% of frame height, centre 48%). Under it two blurred copies: blur(6px) with mask transparent 0% / #000 30% / transparent 60% bands not overlapping the sharp band, and blur(14px) beyond them (a banded gradient fakes the wedge; use 3 to 4 levels to avoid steps). All copies: filter saturate(1.25) contrast(1.08). Then: tl.to('.plate',{y:-40,duration:9,ease:'sine.inOut'},0) as a 4% slow crane. Step the moving elements: tl.to('.car',{x:900,duration:6,ease:'steps(48)'},0) (8 steps per second) for a stop-motion feel, or move on twos. Add 3% grain. No full-frame SVG filter; the masks and 3 pre-blurred copies are cheaper (vocabulary.md cost note)."
recipe_3d: "Rasan3D (metres). OPTION A (physical, preferred): build the scene at miniature scale. A 2 m by 1.2 m table city (blocks 5 to 12 cm, vehicles 3 to 5 cm). Camera 1.2 m from the middle of the table, 40 degrees down, 85 mm, fstop 8, focus numeric on the central band: camera:{ pos:[[0,[0,0.8,0.9]],[10,[0.25,0.8,0.9],'sine.inOut']], target:[[0,[0,0,0]],[10,[0.25,0,0],'sine.inOut']], lens:[[0,85]], focus:[[0,1.2]], fstop:8 }. Depth of field from the standard thin-lens formulas (circle of confusion 0.03 mm assumed, my own calculation): H = 85^2/(8*0.03) = 30.1 m, near limit 1.154 m, far limit 1.250 m at 1.2 m: about 9.6 cm sharp, so roughly one block deep, and everything nearer or further blurs progressively. At f/2.8 the band is 3.4 cm (too thin for a city); f/5.6 gives about 6.7 cm. The high angle turns the depth band into a horizontal stripe on screen. OPTION B (full-scale scene, post pass): a screen-space blur band: k.pass('tilt',{at:'post', frag:`#include <r3/post>\\nout vec4 outColor; void main(){ float d=abs(vUv.y-0.52); float r=0.012*smoothstep(0.05,0.38,d); vec3 a=vec3(0.); for(int i=0;i<16;i++){ float ang=float(i)*2.39996; float rr=sqrt((float(i)+0.5)/16.)*r; vec2 o=vec2(cos(ang)*rr*uRes.y/uRes.x, sin(ang)*rr); a+=r3Src(vUv+o).rgb;} vec3 c=a/16.; float L=dot(c,vec3(0.2126,0.7152,0.0722)); c=mix(vec3(L),c,1.25); c=(c-0.5)*1.08+0.5; outColor=vec4(c, r3Src(vUv).a); }`}) (max blur 0.012 of frame height, about 13 px at 1080; saturation 1.25, contrast 1.08). Moving things: pose(t) positions on k.at keys at 4x the real speed, with no ease overshoot."
pitfalls: ["blurring the top and bottom of a flat image uniformly: the band must grade progressively, with the sharp region a thin stripe","eye-level shots: the effect depends on looking down","low saturation or a grey grade: miniatures read as painted and bright (Wikipedia, Pond5)","slow, heavy motion: real-speed cars look full-size; speed up or step the motion","using the post pass on a full-scale scene without a high angle: the blur reads as a bad vignette","tilting the whole image: the band is horizontal; do not rotate it unless the wedge follows a real plane","very large blurs in 2D: render cost and banding; pre-blur static layers once"]
instruct: {"all":"Specify: high angle (looking down 40 degrees), a thin horizontal focus band at 48% of the frame height, progressive blur above and below, saturation +25%, contrast +8%, longer lens (85 mm in 3D), moving elements at 4x speed or on steps; ban uniform blur, vignette, eye-level views.","claude":"Claude can compute depth of field: give the lens, f-stop and distance and ask it to derive the sharp band and choose f/5.6 to 8 so the band is one block deep; ask it to build the 3D scene at miniature scale rather than blur a full-scale scene. Ask it to say which numbers are derived.","gpt":"GPT-family output tends to apply one uniform gaussian blur and a vignette. Require a masked, graded blur (3 to 4 levels), a stated band position, and a high camera angle."}
verified: {"sources_fetched":3,"non_wikipedia":2,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Miniature_faking", "https://blog.pond5.com/20031-making-a-tilt-shift-miniature-effect-video-practically-and-in-post/", "https://www.studiobinder.com/blog/what-is-a-tilt-shift-lens/"]
---
## What it is

The miniature or diorama effect makes a full-size scene look like a model. Wikipedia's explanation: blur is a visual cue to distance that "appears to override" the familiar size information, so objects look toy-like. Optically it comes from the tilt of a tilt-shift lens (the Scheimpflug principle, StudioBinder), which makes a wedge of sharpness; digitally it is a progressive blur from the centre to the top and bottom.

## The defining traits (numbers)

- **High angle.** "Be elevated: looking down at the scene is crucial because it makes objects appear smaller" (Pond5); Wikipedia: many photos are taken from a high angle to simulate looking down on a miniature.
- **Focus pattern.** A skinny triangle or rectangle of focus, blur increasing away from it (Pond5, Wikipedia). Pond5's After Effects start values: lens blur radius 30, decagon shape for round bokeh, diffraction fringe 50 (these are AE units, not CSS pixels).
- **Longer focal length.** Pond5: longer lenses compress the image for a better miniature effect (no mm given).
- **Colour.** Saturation boost of 20 to 30 as a starting point because "toys are vibrant and very colourful" (Pond5); Wikipedia adds raised contrast "simulating the darker, harder shadows of a miniature under a light".
- **Time.** Frame-rate lock via Posterize Time and speed changes, usually time-lapse (Pond5). Wikipedia: playing the video faster than recorded reduces perceived inertia. Shutter faster than 1/60 for sharp time-lapse frames (Pond5).
- **Order of work (Pond5).** Pre-compose, posterize time, make the blur map (mask or light sweep), lens blur, boost saturation, add grain.
- **The physics.** In real miniatures depth of field is shallow even at small apertures, because the camera is close (the Pond5 and Wikipedia explanations both say this in words). The 3D numbers in this entry (9.6 cm of band at f/8) are my own thin-lens calculation with an assumed 0.03 mm circle of confusion.

## How to build it

**2D.** Build the focus band with masks, not a global blur: one sharp copy and two or three pre-blurred copies stacked so the blur increases with distance from the band. Raise saturation 1.25 and contrast 1.08 on every copy. Add a slow 4% crane and step the moving elements (8 steps per second) so they move like toys. A faint 3% grain unifies the copies.

**3D.** Prefer building a real miniature: 1.2 m camera distance, 85 mm, f/8, 40 degrees down. Rasan3D's aperture model uses the real focal length and f-stop, so the sharp depth is physical. Compute the band before building:

```
H = f^2 / (N * c) = 85^2 / (8 * 0.03) = 30,104 mm
near = H*s/(H+s) = 1.154 m ; far = H*s/(H-s) = 1.250 m   (s = 1.2 m)
```

With the camera looking down 40 degrees, distance to the table varies with screen y, so the sharp band is a horizontal stripe. Hold `focus` numerically (a number) on the central distance. If the scene must stay full-scale, use the post pass in `recipe_3d` (a band blur plus saturation and contrast) and keep the high angle.

```js
camera: {
  pos:    [[0,[0,0.8,0.9]], [10,[0.25,0.8,0.9],"sine.inOut"]],
  target: [[0,[0,0,0]],     [10,[0.25,0,0],"sine.inOut"]],
  lens:   [[0,85]],
  focus:  [[0,1.2]],
  fstop:  8
}
```

Note: pos (0, 0.8, 0.9) to target (0, 0, 0) is a distance of 1.20 m and 42 degrees down (derivation); set `focus` to that distance, and recompute if the blocking changes.

## What makes a cheap imitation

- A phone-app blur: one gaussian, a vignette, nothing else.
- Eye-level or low angles. The effect needs height.
- Real-time motion: cars at 50 km/h speed look like cars.
- Muted colour. Models are brightly painted.
- A blur that begins abruptly at a hard edge with no progressive falloff.

## Sources

- https://en.wikipedia.org/wiki/Miniature_faking : why it works (blur as a distance cue), high angle, progressive blur, saturation and contrast, running video faster.
- https://blog.pond5.com/20031-making-a-tilt-shift-miniature-effect-video-practically-and-in-post/ : elevated view, longer focal length, AE blur and saturation values, posterise time, order of operations.
- https://www.studiobinder.com/blog/what-is-a-tilt-shift-lens/ : the Scheimpflug principle and why a tilt creates a thin wedge of focus (no focal lengths given in the page).
