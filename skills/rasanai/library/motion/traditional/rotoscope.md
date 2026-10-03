---
id: "rotoscope"
name: "Rotoscope: traced live action, boiling lines, interpolated vector keys"
space: "both"
family: "traditional"
references: ["Max Fleischer, Out of the Inkwell (1918-1927) and the Rotoscope", "Disney, Snow White and the Seven Dwarfs (1937)", "Fleischer, Gulliver's Travels (1939)", "Ralph Bakshi, Wizards, The Lord of the Rings, Heavy Traffic", "Richard Linklater, Waking Life (2001) and A Scanner Darkly (2006), Bob Sabiston's Rotoshop"]
timing: {"frame_rate":"traced at the film rate (24 fps drawings or fewer); digital Rotoshop interpolates vector keyframes automatically","holds_ms":[42,167],"durations_ms":[42,83,167,500],"line_boil_rate":"a new line wobble every drawing (on ones or twos)","key_spacing_frames":"every 2-6 frames for interpolated rotoscope (own recommendation)"}
eases: {"key":"inherited from the live action; interpolated between keys with a gentle ease","notes":"The motion is the performance of a real person, so there are no animator-invented arcs: weight, overlap and timing come from the footage. Between vector keys an automatic interpolation is used (Rotoshop). The visible artefact is the line, which wobbles."}
camera: {"lens_mm":[35,50],"moves":["handheld live-action camera, kept","dolly and pan from the source plate"],"rules":["The camera is the footage's camera","Backgrounds may be traced (wobbly) or painted flat or photographed","Live action plates should be shot with silhouette clarity: clear edges and strong light"]}
recipe_2d: "HyperFrames: source video clip as <video> (framework-owned playback). Two routes. (A) Pre-process with ffmpeg (preferred for cost) to a posterised, outlined clip before composing. (B) In-browser SVG filter on the video: feColorMatrix to luminance, feComponentTransfer type discrete tableValues '0 .33 .66 1' (4 flat tone bands), feConvolveMatrix edge kernel '0 -1 0 -1 4 -1 0 -1 0' with bias 1 on luminance for ink, feBlend multiply over a flat colour wash. Boil: feTurbulence baseFrequency 0.012 numOctaves 2 seed = frame index (or Math.floor(frame/2)) into feDisplacementMap scale 2-4 px, so lines shimmer every drawing. Interpolated variant for hand-authored shapes: store a vector shape at keys every 4 frames and compute points with lerp(P[k],P[k+1],gsap.parseEase('sine.inOut')(u)) plus 1.2 px seeded jitter from mulberry32(seed+frame) in a plain-object clock tween's onUpdate. Fills flat, shading limited to 2-3 tones, line weight 2-4 px."
recipe_3d: "Rasan3D: the 'footage' is a posed 3D figure or a video texture on a plane; the rotoscope read comes from a post pass. graph(k): k.pass('roto', {at:'post', uniforms:{uSeed:(t)=>Math.floor(Math.round(t*30)/2)}, frag}) where frag (a) displaces the lookup uv by (r3Simplex2(vUv*uRes/90.0 + uSeed*3.7)) * 2.5/uRes (a boil of 2.5 px that changes per drawing), (b) posterises with floor(r3Luma(c)*4.0+0.5)/4.0 into a 4-band ramp via r3ToonRamp, (c) draws an ink line from the Sobel of r3Luma on the displaced samples and of uDepth, 2-3 px, multiplied in. pose(t,k) quantises to ones or twos with Math.round(t*30). motionBlur false, no DOF."
pitfalls: ["Treating rotoscope as 'a cartoon filter': the point is human motion weight and the wobbling traced line", "Perfectly stable edges: the tracing wobbles and the lines boil each frame; interpolated rotoscope has smoother but still drifting lines", "A single uniform look: Waking Life changes style per scene because many artists drew their own sections", "Posterise without edges, or edges without flat fills: the look is flat colour plus a drawn line", "Smooth 60 fps interpolation of the posterised result: keep drawings on ones or twos", "Shadow and detail kept photographic: shading is reduced to 2-4 tones", "Applying it to type or UI: text stays outside the rotoscoped layer", "Using real faces without clearance: the technique traces real people; use stock or cleared footage only"]
instruct: {"all":"Say whether the build is traced (pre-processed footage) or synthetic. Provide the number of tone bands (4), the line weight (2-4 px), the boil amplitude (2-4 px) and the boil rate (every 1 or 2 frames), seeded by frame index. Keep type and UI out of the filter.","claude":"Claude tends to apply a posterise and an edge filter once and leave it static, forgetting the boil, or to call a CSS filter stack 'rotoscope'. Spell out that seed = frame index and that edge and displacement must re-roll. It will propose an ffmpeg pre-pass if asked, which is faster than a full-frame SVG filter in the renderer.","gpt":"GPT models tend to use Math.random for the wobble and CSS blur plus contrast for the look. Require seeded displacement from the frame index, and flat tone bands with a discrete table. Ask it to explain which steps run in ffmpeg and which in the composition, and to avoid a full-frame filter on 1080p video if it can be pre-rendered."}
sources: ["https://en.wikipedia.org/wiki/Rotoscoping", "https://en.wikipedia.org/wiki/Max_Fleischer", "https://en.wikipedia.org/wiki/Gulliver%27s_Travels_(1939_film)", "https://en.wikipedia.org/wiki/A_Scanner_Darkly_(film)", "https://en.wikipedia.org/wiki/Waking_Life"]
---

## What it is

Rotoscoping is animation traced over live-action footage frame by frame. Max Fleischer developed it (tests 1914-1916, patent granted 1917 according to the Max Fleischer page; the Rotoscoping page says invented in 1915) as a combined projector and easel, first used in the Out of the Inkwell series (1918-1927), where his brother Dave performed as Koko the Clown in a clown suit. Disney used it for human characters in Snow White (1937); Fleischer's Gulliver's Travels (1939) rotoscoped Gulliver, Glory and David (Sam Parker, Gulliver's voice, was the live-action model). Ralph Bakshi used it extensively in the 1970s (Wizards 1977, The Lord of the Rings 1978, Cool World 1992). In the digital era Bob Sabiston's Rotoshop created interpolated rotoscoping, which Linklater used for Waking Life (2001) and A Scanner Darkly (2006). The visible fingerprint of the style is the traced line, which "wiggles" because the tracer is separated from the projected image: "slight deviations from the true line" (Wikipedia).

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Invented / patent | tests 1914-1916; patent granted 1917 (Max Fleischer page); invented 1915 (Rotoscoping page) | Wikipedia (sources differ) |
| Device | combined projector and easel for tracing live-action frames | Max Fleischer wiki |
| First use | Out of the Inkwell, 1918-1927, Dave Fleischer as Koko | Rotoscoping wiki |
| Cost | laborious; for Snow White it raised production cost significantly | Rotoscoping wiki |
| Line | tracing deviations make the line wiggle; the work was reworked to remove it | Rotoscoping wiki |
| Feature uses | Gulliver's Travels (Sam Parker as Gulliver reference), Snow White humans, Bakshi's Wizards, LOTR, Heavy Traffic | Gulliver wiki, search summary |
| Digital interpolation | Rotoshop 'creates blends between key frame vector shapes' with virtual layers | Waking Life wiki |
| Waking Life | shot on Mini DV for six weeks from August 1999; many artists, so the feel shifts scene to scene | Waking Life wiki |
| A Scanner Darkly | 18 months of animation after photography, about 30 animators in 5 teams, Panasonic AG-DVX100, Rotoshop vector keyframes and automatic in-betweens | Scanner Darkly wiki |
| Tone bands | 2-4 flat bands (own recommendation) | own |
| Line weight / boil | 2-4 px / 2-4 px at 1080p, re-rolled each drawing | own working range |
| Key spacing for interpolated rotoscope | a vector key every 2-6 frames | own working range; Rotoshop's own interval is not stated in the fetched pages |

Not found in any fetched page: how many hours a minute of Rotoshop takes, and the frame step Fleischer used. Do not cite those.

## How to build it

### 2D (HyperFrames)

Route A, preferred (cost): pre-process the clip before it enters the composition, because a full-frame SVG filter on 1080p video is slow to render.

```bash
# luminance edge + 4-level posterise, then composite in the film; flags are ffmpeg filter names, verify them on your build
ffmpeg -i in.mp4 -vf "format=gray,edgedetect=low=0.1:high=0.3,negate" edges.mp4
ffmpeg -i in.mp4 -vf "lutyuv=y='floor(val/64)*64+32'" posterised.mp4        # 4 tone bands on luma
```

Route B (in browser, for short clips or small areas):

```html
<svg width="0" height="0" style="position:absolute">
  <filter id="roto" color-interpolation-filters="sRGB">
    <feTurbulence id="boil" type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="1" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" result="wob"/>
    <feColorMatrix in="wob" type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" result="lum"/>
    <feComponentTransfer in="lum" result="bands"><feFuncR type="discrete" tableValues="0 .33 .66 1"/><feFuncG type="discrete" tableValues="0 .33 .66 1"/><feFuncB type="discrete" tableValues="0 .33 .66 1"/></feComponentTransfer>
    <feConvolveMatrix in="lum" order="3" kernelMatrix="0 -1 0 -1 4 -1 0 -1 0" divisor="1" bias="1" preserveAlpha="true" result="edge"/>   <!-- flat areas = white, darker-than-neighbour pixels go dark: a one-sided line, verify on your frame -->
    <feBlend in="bands" in2="edge" mode="multiply"/>
  </filter>
</svg>
```

```js
const FPS = 30, HOLD = 2;                                                        // twos; use 1 for ones
tl.to(clock, { t: DUR, duration: DUR, ease: "none", onUpdate() {
  boil.setAttribute("seed", String(Math.floor(Math.round(clock.t * FPS) / HOLD)));   // re-rolls every drawing, pure function of the frame index
} }, 0);
```

- Colour: bands map to a flat palette (2-3 hues from the film's design system) with a colour wash blended in `multiply`; skin and cloth keep one tone each, not a gradient.
- Interpolated version (shapes you author): store the outline at keys every 4 frames and compute intermediate points in the clock tween: `P = lerp(K[i], K[i+1], gsap.parseEase("sine.inOut")(u))` then add 1.2 px of `mulberry32(seed + frame)` jitter per point, so the line drifts the way a Rotoshop line does between keys.
- The wobble amplitude should be larger on loose clothing and hair than on the body (3 px vs 1.5 px), which is what makes it read as traced rather than as a filter.
- The film's grade and the type live outside the filtered layer.

### 3D (Rasan3D)

```js
Rasan3D.stage({ id: "roto", canvas, timeline: tl, duration: 4, fps: 30, motionBlur: false,
  camera: { pos: [[0, [0, 1.5, 4]], [3, [0.4, 1.5, 3.4], "sine.inOut"]], target: [[0, [0, 1.3, 0]]], lens: [[0, 35]] },
  graph(k) {
    k.pass("roto", { at: "post", uniforms: { uSeed: (t) => Math.floor(Math.round(t * 30) / 2) },
      frag: `#include <r3/noise>
        #include <r3/npr>
        out vec4 outColor; uniform float uSeed;
        vec3 samp(vec2 uv) { return r3Src(uv).rgb; }
        void main() {
          vec2 px = 1.0 / uRes;
          vec2 wob = vec2(r3Simplex2(vUv * uRes / 90.0 + uSeed * 3.7), r3Simplex2(vUv * uRes / 90.0 + 17.0 + uSeed * 3.7)) * 2.5 * px;   // 2.5 px boil, per drawing
          vec2 uv = vUv + wob;
          float l = r3Luma(samp(uv));
          float band = floor(l * 4.0 + 0.5) / 4.0;                                   // 4 flat tone bands
          float e = abs(r3Luma(samp(uv + vec2(px.x, 0.0))) - l) + abs(r3Luma(samp(uv + vec2(0.0, px.y))) - l);
          float ink = smoothstep(0.04, 0.10, e);                                      // line where tone changes
          vec3 col = r3ToonRamp(band, vec3(0.12, 0.10, 0.18), vec3(0.55, 0.45, 0.40), vec3(0.95, 0.88, 0.78), 0.01);
          outColor = vec4(mix(col, vec3(0.07), ink), 1.0);
        }` });
  } });
```

The figure itself can be motion-captured or keyframed in 3D and posed on ones; the 3D pose is the 'footage'. If a real video is the source, use `k.image` for stills or lay the video in the 2D ground layer and run the 2D route. The pass reads the accumulated frame (`r3Src`), so the boil is the same across the anti-aliasing samples.

## What makes a cheap imitation

- A posterise and edge-detect filter applied once with no per-drawing re-rolled line wobble.
- Cartoon-smooth motion: the realistic weight and secondary motion come from the performer, so a keyframed bounce under a filter does not read as rotoscope.
- Gradients and soft shading under the lines.
- Noise-generated boil that is the same every frame (a static displacement map).
- Lines of uniform thickness and perfect closure: traced lines vary and drift.
- Running the filter on type and UI.
- Sampling the displacement from Math.random so renders differ between runs.

## Sources

- https://en.wikipedia.org/wiki/Rotoscoping (fetched) - Fleischer Process, Out of the Inkwell, line wiggle, Snow White, Bakshi, Sabiston, Linklater.
- https://en.wikipedia.org/wiki/Max_Fleischer (fetched) - patent 1917, tests 1914-1916, projector and easel.
- https://en.wikipedia.org/wiki/Gulliver%27s_Travels_(1939_film) (fetched) - rotoscoped Gulliver, Glory and David, Sam Parker as reference.
- https://en.wikipedia.org/wiki/A_Scanner_Darkly_(film) (fetched) - 18 months, about 30 animators, Rotoshop vector keyframes, DVX100.
- https://en.wikipedia.org/wiki/Waking_Life (fetched) - Rotoshop, Mini DV, many artists, shifting style.
- Unverified: ffmpeg filter parameters (edgedetect, lutyuv) were not checked in docs; the hour-per-minute cost of rotoscoping; all px and boil amplitudes are own working numbers; Bakshi's film years are from search summaries and the Rotoscoping page only.
