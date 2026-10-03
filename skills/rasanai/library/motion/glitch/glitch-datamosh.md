---
id: "glitch-datamosh"
name: "Glitch and datamosh"
space: "both"
family: "glitch"
references: ["Takeshi Murata, Monster Movie (2005, Smithsonian American Art Museum)", "Kanye West, Welcome to Heartbreak (2009, dir. Nabil, datamosh by Ghost Town Media)", "Owi Mahn and Laura Baginski, Pastell Kompressor (2003)", "Rosa Menkman, Glitch Studies Manifesto (2010)"]
timing: {"frame_rate":"30 fps; glitch states last 1 to 6 frames (33 to 200 ms); a mosh bloom lasts 20 to 60 frames (0.7 to 2 s)","holds_ms":[400,1500],"durations_ms":{"slice_tear":[33,133],"rgb_split_burst":[66,200],"freeze":[100,260],"mosh_bloom":[700,2000],"recover_cut":[0,33]},"note":"frame counts are derived working values; the sources describe the technique, not durations"}
eases: {"key":"none / hard cuts: glitch states are discontinuities","notes":"a mosh bloom's pixel flow is driven by the codec's motion vectors, so it decelerates only by the source motion; use ease 'none' on displacement strength and cut out hard."}
camera: {"lens_mm":[35,50],"moves":["locked-off or the source clip's own camera","3D: unaffected geometry, glitch applied as post passes"],"rules":["the glitch is a failure of the medium, so keep the 'clean' parts clean for contrast","trigger on musical hits or story breaks, not continuously"]}
recipe_2d: "Two families. (A) Datamosh proper is a media-prep step: render the sequence uncompressed, encode to an old-style intra/delta codec at a high data rate so cuts become I-frames, delete the I-frames at the cut (Avidemux 2.5.6 or an After Effects plugin are named in the sources), render back, finish in AE; HyperFrames then plays the moshed MP4 as a clip. (B) Signal glitch inside the composition, all seeded on the integer frame f: slice tear = 6 to 14 horizontal strips (clip-path inset on duplicated layers), each x-offset (r-0.5)*2*[24..160] px for 1 to 4 frames; RGB split = three copies of the layer isolated by feColorMatrix to R, G, B with mix-blend-mode screen, offsets +-6 to +-14 px, 2 to 6 frames; block freeze = hold one frame 3 to 8 frames; feDisplacementMap on a frozen frame with scale 60 to 200 driven by clip B's low-res luma for 20 to 40 frames (a mosh look). Glitch events land on beats, at most 4 per 10 s, each with an envelope g(t) in {0,1}. mulberry32(seed + f)."
recipe_3d: "Rasan3D: glitch as a post pass, never as scene state. graph(k): k.pass('glitch', { at:'post', uniforms:{ uG: (t) => glitchEnv(t) }, frag }) where glitchEnv(t) is a pure step function of t from the beat list. frag: cell = floor(vUv * vec2(24.0, 14.0)); h = r3Hash12(cell + floor(uFrame/2.0)); uv = vUv + vec2((h-0.5)*0.12*uG*step(0.7,h), 0.0); col = r3Chroma(uSrc, uv, 0.012*uG); add scanline via r3Scanlines(col, gl_FragCoord.xy, 0.25*uG, 3.0); freeze: hold uv.y quantised to 1/18 for rows where h>0.9. The 3D scene underneath stays physically clean. Camera moves per the scene; motionBlur off during glitch frames (declare intent) so the tears stay hard."
pitfalls: ["glitch on every frame: it becomes texture; the style needs clean frames for contrast", "random from Math.random or the clock: the render must be reproducible, seed from the frame index", "RGB split only: that is a chromatic aberration filter, not datamosh; true mosh is pixel bleed driven by motion", "datamosh effect applied to text copy that must be read: carry the message in a clean layer", "overusing the Kanye-era look: the source article reports it was deemed passe by some artists by 2009", "heavy feTurbulence full-frame displacement: slow; use a baked 512 px map", "fake glitch that has no source of failure: tie it to a story reason (signal loss, a transition, a cut)"]
instruct: {"all":"Say which family: codec datamosh (pixel bleed, media-prep step) or signal glitch (slice, split, freeze). Give event times, frame counts and amplitudes in px. State the seed rule (seed + frame index) and that clean frames dominate.","claude":"Claude will try to fake the datamosh with a sequence of CSS clip-path slices and call it done, and will apply glitch continuously for 'energy'. Say 'if you cannot produce a moshed clip, say so and use the signal-glitch recipe; events only on listed beats; at most four per ten seconds'. It also forgets seeds; require the frame-index seed.","gpt":"GPT models often write a CSS keyframe glitch (steps() animations with clip-path and text-shadow) which violates the paused-timeline contract. Forbid CSS animation; require tl.set at integer frames and a precomputed event list. They also overdo scanlines and neon cyan/magenta; specify the palette from the design system and the amplitude limits."}
sources: ["https://newatlas.com/art-technology-digital-datamoshing/48152/", "https://motionographer.com/2009/02/19/tintori-and-nabil-breaking-your-internets/", "https://www.sessions.edu/notes-on-design/all-about-glitch-datamoshing/", "https://en.wikipedia.org/wiki/Takeshi_Murata"]
---

## What it is

Glitch art uses the failure of a medium as material. Two distinct looks are often merged and should not be.

Datamoshing exploits video compression. Sessions describes it as intentionally damaging or combining the input from two media files so the playback distorts, by corrupting the I-frames (keyframes): without them "a video becomes like visual soup". New Atlas dates it to the early 2000s, from errors in codecs like DivX, with Owi Mahn and Laura Baginski's Pastell Kompressor (2003) among the earliest serious uses and Takeshi Murata's Monster Movie (2005, from the 1981 film Caveman, in the Smithsonian American Art Museum's collection) as the breakthrough; Wikipedia's Murata page quotes the museum notes: "punching virtual holes through the compressed video file", mixing the video into "a kind of digital liquid". Kanye West's Welcome to Heartbreak (2009) took it to the mainstream, and New Atlas notes some artists regarded it as passe afterwards.

Signal glitch is the other look: block displacement, RGB channel separation, freezes and scanlines, the visual vocabulary of corrupted images and broadcasts. Rosa Menkman's Glitch Studies Manifesto (2010) is the theory text (I could only reach a search-result summary of it, since the Rhizome page returned 403).

## The defining traits (numbers)

Documented (datamosh):
- Mechanism: remove I-frames so delta (P/B) frames apply motion to the wrong base picture; pixels from one scene bleed along the next scene's motion.
- Visual: "small colorful squares sprinkled across a screen like confetti" (Sessions); colours and shapes bleeding across frames (New Atlas).
- Welcome to Heartbreak workflow (Motionographer interview): render uncompressed (a 7 to 8 GB QuickTime), compress to AVI at a high data rate (about 125 MB) so cut points become I-frames, delete the keyframes with specialised software, render back to uncompressed (6 hours per render), refine in After Effects; 45 to 50 iterations. The directors also staged events (a balloon filled with red glitter and flour, grinder sparks) to give the codec strong motion to smear.
- Tools named by Sessions: After Effects and Quartz Composer plugins, Avidemux 2.5.6 for manual frame manipulation.

Derived (signal glitch, 1920x1080, 30 fps):
- Slice tear: 6 to 14 strips, offset 24 to 160 px, 1 to 4 frames.
- RGB split: channel offsets 6 to 14 px, 2 to 6 frames; screen blend.
- Block freeze: 3 to 8 frames.
- Block size for macroblock look: 16 px source macroblocks scaled up to 32 to 64 px for a 1080p composite.
- Frequency: at most 4 events per 10 s; each event aligned to a beat or story break.
- Clean ratio: at least 70 percent of frames unaffected.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

Family A (datamosh): do it in media prep and treat the output as a clip. Steps from the sources: render source uncompressed, encode with a codec and settings that put I-frames at the cuts, delete those I-frames, render the result back, then import the MP4 into the composition as a `<video>` clip with `data-start`/`data-duration`. I have not verified any one-line ffmpeg recipe in a fetched source, so none is given; test the tool chain before promising it.

Family B (signal glitch inside the composition):

```js
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const FPS = 30, tl = gsap.timeline({ paused: true });
window.__timelines["12-glitch"] = tl;
const EVENTS = [ { t: 1.50, f: 4 }, { t: 3.20, f: 6 }, { t: 5.40, f: 3 } ];       // beat-aligned, frames long; the clean cut follows
const strips = gsap.utils.toArray(".strip");                                      // 10 duplicates of #plate, each clip-path: inset(top% 0 bottom% 0)
const R = gsap.utils.toArray(".ch-r"), G = gsap.utils.toArray(".ch-g"), B = gsap.utils.toArray(".ch-b");   // channel copies via feColorMatrix filters
EVENTS.forEach(({ t, f }) => {
  for (let i = 0; i < f; i++) {
    const rnd = mulberry32(Math.round(t*FPS) + i*97), at = t + i/FPS;
    strips.forEach((s, j) => tl.set(s, { x: (rnd() < 0.55 ? 0 : (rnd()-0.5)*2*(24 + rnd()*136)) }, at));
    const d = 6 + rnd()*8;
    tl.set(R, { x: -d }, at).set(B, { x: d }, at).set(G, { x: 0 }, at);
  }
  const end = t + f/FPS;                                                          // hard recovery, no ease
  tl.set(strips, { x: 0 }, end).set([R, G, B], { x: 0 }, end);
});
// freeze: hold a plate by swapping to a still of the frame at t0 for n frames
tl.set("#plate-live", { visibility: "hidden" }, 3.20).set("#plate-still", { visibility: "visible" }, 3.20)
  .set("#plate-live", { visibility: "visible" }, 3.20 + 5/FPS).set("#plate-still", { visibility: "hidden" }, 3.20 + 5/FPS);
// mosh bloom (displacement of a frozen frame by clip B's low-res luma)
const disp = document.querySelector("#mosh feDisplacementMap");
for (let f = 0; f < 36; f++) tl.set(disp, { attr: { scale: 20 + 160 * Math.min(1, f/18) } }, 4.0 + f/FPS);
```

Rules:
1. Everything is `tl.set` at integer frames; no CSS `@keyframes`, no `steps()` animations.
2. Seed from `frame index` and strip index; never from the clock.
3. The text and logo that carry the message sit on a layer outside the glitch group, or the group is exempted for the event's last 2 frames so copy is readable.
4. The displacement map for the mosh bloom is a pre-baked 480x270 luma image of the incoming clip (or a still), not a live `feTurbulence`.
5. Sound: pair each event with a short digital hit (see media-use for SFX), 1 to 3 frames earlier than the picture.

### 3D (Rasan3D)

```js
graph(k) {
  const events = [[1.50, 4], [3.20, 6], [5.40, 3]];
  k.pass("glitch", { at: "post",
    uniforms: { uG: (t) => events.some(([a, f]) => t >= a && t < a + f/30) ? 1 : 0 },   // pure function of t
    frag: `
      #include <r3/post>
      uniform float uG;
      void main() {
        vec2 cell = floor(vUv * vec2(24.0, 14.0));
        float h = r3Hash12(cell + floor(uFrame / 2.0));
        vec2 uv = vUv + vec2((h - 0.5) * 0.12 * uG * step(0.7, h), 0.0);
        uv.y = mix(uv.y, floor(uv.y * 18.0) / 18.0, uG * step(0.9, h));          // freeze rows
        vec3 c = r3Chroma(uSrc, uv, 0.012 * uG);
        c = r3Scanlines(c, gl_FragCoord.xy, 0.25 * uG, 3.0);
        gl_FragColor = vec4(c, 1.0);
      }` });
}
```
`uFrame` is the frame index, so the hash changes every two frames and is repeatable. Scene content stays clean; declare `motionBlur: false` on the stage if the tears must stay hard.

## What makes a cheap imitation

- A neon cyan and magenta shadow on a title, with no failure behind it.
- Constant shaking and flicker.
- Using one filter over everything for the whole film.
- Chromatic aberration alone, labelled datamosh.
- Randomness that changes between renders.
- Reusing the 2009 music-video look as the whole idea.
- Text under the glitch that cannot be read.

## Sources

- https://newatlas.com/art-technology-digital-datamoshing/48152/ : origins in codec errors, Pastell Kompressor 2003, Monster Movie 2005-06, 2009 mainstream and passe note.
- https://motionographer.com/2009/02/19/tintori-and-nabil-breaking-your-internets/ : Welcome to Heartbreak workflow, file sizes, iterations, render time, staged events.
- https://www.sessions.edu/notes-on-design/all-about-glitch-datamoshing/ : I-frame corruption, "visual soup", confetti squares, tools.
- https://en.wikipedia.org/wiki/Takeshi_Murata : Monster Movie source (Caveman, 1981), "punching virtual holes", Smithsonian collection.

Not retrieved: Rhizome (Menkman manifesto) returned 403; Menkman is cited from a search-result summary only.

Derived or unverified: all frame counts, amplitudes, event frequency, the shader constants, the claim that scene passes are unaffected by a post pass (per 3d.md section 12: post passes run on the accumulated frame).
