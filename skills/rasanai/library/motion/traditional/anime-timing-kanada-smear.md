---
id: "anime-timing-kanada-smear"
name: "Anime timing: Kanada irregular spacing, smear frames, impact frames"
space: "both"
family: "traditional"
references: ["Yoshinori Kanada (Galaxy Express 999, Harmagedon)", "Kanada-lineage animators: Hiroyuki Imaishi, Yu Yoshiyama, Takeshi Maenami", "Tex Avery and Chuck Jones smear frames", "Panty and Stocking, Gurren Lagann (Imaishi/Trigger)"]
timing: {"frame_rate":"24 fps source; drawings change on irregular holds of 1 to 6 frames (ones, twos, threes, fours, a long hold)","holds_ms":[83,250],"durations_ms":[42,83,125,167,250],"impact_frame_ms":[42,83],"frame_ms_24fps":42,"frame_ms_30fps":33}
eases: {"key":"stepped, irregular","notes":"Extreme spacing between poses (large jumps) with irregular timing; no smoothing. Speed is conveyed by distance between drawings, smear and speed lines, not by an ease curve."}
camera: {"lens_mm":[14,24,35],"moves":["fast camera moves across layouts with objects moving toward and away from the viewer","crash zoom on a 1-2 frame impact","whip on a held frame"],"rules":["Strong perspective, exaggerated depth","Hold the camera for 2-6 frames then jump","Light and effects drawn by the animator, not post"]}
recipe_2d: "GSAP: pose-to-pose with tl.set at integer frame times from an explicit holds array, e.g. frames [0,6,6+0,9,13,15,16,18] for 'hold 6, jump, 3, 4, 2, 1, 2'. Each key sets x,y,rotation,scaleX,scaleY and path/texture swap in ONE tl.set so there is no tween. Extremes use large distances (400-900 px per jump at 1080p). Smear: on the frame before an extreme, scaleX 1.5-2.2 along the motion axis (use rotation + scaleX with transform-origin at the trailing end) plus 2 trailing copies at opacity 0.5 and 0.25 offset 40% and 80% of the jump. Impact frame: 1-2 frames (33-67 ms at 30 fps) of full-frame black or white with the silhouette inverted (filter invert(1) contrast(1.6) on #world), set at frame f and reset at f+1 or f+2. Speed lines: 16-40 thin wedges radiating from the focal point, positions from mulberry32(seed + keyIndex), regenerated at every key. Line weight 6-12 px, rough, no gradient."
recipe_3d: "Rasan3D: pose(t,k){ const f=Math.round(t*30); let i=0; while(i+1<KEYS.length && KEYS[i+1].f<=f) i++; apply KEYS[i].pose } with irregular key frames; no interpolation. Smear = scale the mesh along the velocity vector 1.6-2.2x on the frame between keys (a stretched in-between) and add 2 ghost clones at 0.5 and 0.25 opacity. Impact frame = post pass with uniform uInvert:(t)=>IMPACT.has(Math.round(t*30))?1:0 that outputs vec3(1.0)-luminance step, or black/white silhouette from r3Luma and r3Toon(l,2.0,0.01). Camera: lens 14-24 mm; pos as a function of t sampling the same key table (hold 2-6 frames, then jump); motionBlur false, fstop off."
pitfalls: ["Treating anime as 'twos with a smear': Kanada's signature is irregular modulation, long holds then bursts, not a uniform 12/s", "Smoothing the jumps with easing or motion blur: the speed is carried by spacing, so blur only softens it", "Smear frames on every move: they are for the fastest 1-2 frames between extremes", "Impact frames that fade: they are 1-2 frames of hard black or white", "Uniform line weight and clean polished outlines: the Kanada hand is rough, thick strokes", "Speed lines all pointing at the same spot at the same angle every time (regenerate per key)", "Random timing from Math.random: the irregularity must be authored and seeded so seeks match", "Everything in the frame irregular: pick one hero element and keep type and UI smooth"]
instruct: {"all":"Provide the holds as an explicit list of frame numbers and poses per key; say 'no tweening between keys, each key is a tl.set'. Specify smear and impact frames by frame number and duration. Tell the model the irregularity is authored: a hold of 6, then jump, then 3, 4, 2, 1, 2.","claude":"Claude will regularise the list into 2-frame steps or interpolate with power eases because that reads cleaner to it. Say 'keep the irregular holds exactly as listed; a 1-frame key is correct'. It follows a numbered key table well, so give one and ask it to echo the frame deltas before building.","gpt":"GPT models tend to add motion blur, CSS filter blur on fast moves and ease functions on every key. Forbid blur and eases; require tl.set only; ask for the delta list and a one-line assertion that no key has a duration. Give the invert-frame snippet verbatim because it often reaches for flashes with opacity fades."}
sources: ["https://en.wikipedia.org/wiki/Yoshinori_Kanada", "https://animetudes.com/2021/03/06/the-kanada-style-in-context/", "https://animetudes.com/2021/07/09/the-kanada-style-now/", "https://en.wikipedia.org/wiki/Smear_frame", "https://en.wikipedia.org/wiki/Limited_animation"]
---

## What it is

Anime grew from limited animation (few drawings, long holds), and Yoshinori Kanada turned that constraint into a style. The fetched Animetudes analysis says he systematised irregular modulation of frame rate between ones and twos far beyond his predecessors, with extreme spacing between poses to express velocity, strong poses with limbs that extend and retract during jumps and falls, rough thick strokes in place of clean Toei lines, black and white impact frames, "drawn light" flares done by the animator, and speed lines that add depth. Wikipedia credits him with breaking down the directorial system so key animators could impose their own style, with Galaxy Express 999 (1979) and Harmagedon (1983) as the most influential works. A Kanada-style burst is the opposite of smooth: long hold, jump, a few uneven drawings, hold.

## The defining traits (numbers)

| Trait | Value | Source / status |
|---|---|---|
| Frame modulation | irregular between 1s and 2s, with holds and 3s/4s mixed in | animetudes (in context) |
| Example sequence | a 6-frame hold, a jump with no in-between, then poses on 3s, 4s and 2s as the character aims and shoots | animetudes (in context) |
| Range of holds | 1 to 6 frames per drawing ("midareuchi") | a search summary of a journal article; not fetched in full: unverified |
| Spacing | extreme distance between poses to express velocity | animetudes |
| Pose language | extended limbs that retract and contract in jumps, falls and flight | animetudes |
| Line | rough, thick strokes that show the animator's hand | animetudes |
| Impact frames | black and white frames that support shock moments | animetudes |
| Effects | drawn light flares, lightning, speed lines, organic liquid shapes, angular impact shapes | animetudes (now) |
| Smears | outline smears to give speed; exaggerated deformation as style | animetudes (now) |
| Smear taxonomy | elongated in-between (1-2 frames), multiples, duplicated smears, smear trails, blob | smear-frame wiki |
| 1 frame at 24 fps / 30 fps | 42 ms / 33 ms | derived |
| Camera | layouts full of camera motion; objects move toward and away from the viewer with accurate proportion at every depth | animetudes |
| Descendants | Yoshiyama (effects-heavy abstract frames), Maenami (classic Kanada plus webgen fluidity) | animetudes (now) |

The irregularity is the point: Animetudes notes that the style "cannot thrive" at high frame rates. Keep this on a 24 fps feel: if the comp is 30 fps, author the key table in frames and let the 30 fps comp resample (a 1-frame key at 24 becomes 1.25 frames; use 1 or 2 and accept it, or make the comp 24 fps).

## How to build it

### 2D (HyperFrames, 1920x1080, 30 fps)

```js
const FPS = 30, f = n => n / FPS;
// key: [frame, x, y, rotation, scaleX, scaleY, drawingId]; drawing lengths are 6,1,3,4,2,1 frames on purpose (the hold-and-burst irregularity)
const K = [
  [0,   300, 700,   0, 1.0, 1.0, "crouch"],           // frames 0-5: a 6-frame hold
  [6,   980, 380, -18, 1.9, 0.7, "smear-a"],          // frame 6: 1-frame smear, stretched along the travel
  [7,  1380, 260, -22, 1.0, 1.0, "extended"],         // frames 7-9: the extreme, limbs fully extended (3)
  [10, 1500, 300, -10, 1.0, 1.0, "aim"],              // frames 10-13 (4)
  [14, 1500, 300, -10, 1.0, 1.0, "fire"],             // frames 14-15 (2)
  [16, 1500, 300, -10, 1.0, 1.0, "fire-flash"],       // frame 16 (1), then the impact frames at 17-18
];
K.forEach(([fr, x, y, r, sx, sy, id], i) => {
  tl.set("#hero", { x, y, rotation: r, scaleX: sx, scaleY: sy, transformOrigin: "10% 50%" }, f(fr));      // one key per frame, so order never matters
  tl.set("#hero-art", { attr: { href: "#" + id } }, f(fr));
});
// impact frame: 2 frames of hard inversion, no fade
tl.set("#world", { filter: "invert(1) contrast(1.6)" }, f(17)).set("#world", { filter: "none" }, f(19));   // frames 17-18
// speed lines: regenerated at every key (seeded), 16-40 wedges
function lines(seed, n) { const r = mulberry32(seed); return Array.from({ length: n }, () => ({ a: r() * 360, len: 300 + r() * 600, w: 6 + r() * 6 })); }
K.forEach(([fr], i) => tl.call(() => drawLines(lines(900 + i, 28)), null, f(fr)));
```

- `tl.call` for drawing is allowed because it is deterministic from the seed; make `drawLines` replace the SVG children (no accumulation) so seeking backwards is exact.
- A smear is one frame between two extremes: scaleX 1.5-2.2 aligned to the travel direction, plus two trailing copies at opacity 0.5 and 0.25 offset by 40% and 80% of the jump. For non-character elements (a card slamming in), the same recipe works: 1 smear frame, then the landed pose with a 2-frame 4% squash (scaleY 0.96).
- Light flares are drawn: a white star or ring shape (polygon, no blur), 3 sizes over 3 frames (scale 0.4, 1.4, 0.9), then gone. No glow filters.
- If the film is mostly smooth, use this for one hero beat of 12-24 frames (0.4-0.8 s) so it reads as an event.

### 3D (Rasan3D)

```js
const KEYS = [{ f: 0, p: [0,0,0] }, { f: 6, p: [0,0,0] }, { f: 7, p: [4.2,1.1,0], smear: 1.9 }, { f: 10, p: [4.6,1.2,0] }];
const IMPACT = new Set([17, 18]);
Rasan3D.stage({ id: "kanada", canvas, timeline: tl, duration: 2, fps: 30, motionBlur: false,
  camera: { pos: (t) => CAM.at(Math.round(t * 30)), target: [[0, [0, 1, 0]]], lens: [[0, 18]] },
  declare: { intent: { "linear-drift": "authored irregular holds", "custom-ease": "the camera is a held-key function" } },
  pose(t, k) { const f = Math.round(t * 30); let i = 0; while (i + 1 < KEYS.length && KEYS[i + 1].f <= f) i++;
    const key = KEYS[i]; hero.position.set(...key.p);
    hero.scale.set(key.smear || 1, 1 / Math.sqrt(key.smear || 1), 1 / Math.sqrt(key.smear || 1)); },
  graph(k) { k.pass("impact", { at: "post", uniforms: { uInvert: (t) => IMPACT.has(Math.round(t * 30)) ? 1 : 0 },
    frag: `#include <r3/npr>
      out vec4 outColor; uniform float uInvert;
      void main(){ vec4 s = r3Src(vUv); float l = r3Toon(r3Luma(s.rgb), 2.0, 0.01);
        vec3 c = mix(s.rgb, vec3(1.0 - l), uInvert); outColor = vec4(c, s.a); }` }); } });
```

Camera lens 14-24 mm gives the exaggerated depth the layouts rely on; hold 2-6 frames then jump. For toon shading use `r3ToonRamp(x, shadow, mid, lit, 0.01)` on a custom material for a hard 3-tone ramp.

## What makes a cheap imitation

- Uniform on-twos stepping with a speed-line overlay: it lacks the long-hold-then-burst irregularity that is the style.
- Motion blur or eased in-betweens on the fast part.
- Smear on every move, or smears that are a blur filter rather than a stretched, outlined drawing.
- Impact frames as a fade or a white flash with opacity easing.
- Perfectly even, thin, vector-clean outlines.
- Light effects done as soft glows and lens flares instead of drawn shapes.
- Irregular timing generated randomly at render time, which cannot be reproduced on seek.

## Sources

- https://en.wikipedia.org/wiki/Yoshinori_Kanada (fetched) - influence, Galaxy Express 999, Harmagedon, breaking the directorial system, descendants.
- https://animetudes.com/2021/03/06/the-kanada-style-in-context/ (fetched) - irregular 1s/2s modulation, example hold-and-jump sequence, line quality, impact frames, drawn light, perspective.
- https://animetudes.com/2021/07/09/the-kanada-style-now/ (fetched) - outline smears, speed lines, organic effects, descendants, high frame rates are hostile to the style.
- https://en.wikipedia.org/wiki/Smear_frame (fetched) - five types of smear, origin 1912, Avery and Jones.
- https://en.wikipedia.org/wiki/Limited_animation (fetched) - limited animation as the anime foundation.
- Unverified: the "1 to 6 frames" range and the term midareuchi (from a search summary, not a fetched page); flare scale values and speed-line counts are own working numbers.
