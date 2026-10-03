---
id: "screen-studio-cursor-zoom"
name: "Screen Studio cursor-follow zoom and smoothed cursor"
space: "both"
family: "ui-motion"
references: ["Screen Studio (macOS screen recorder with automatic zoom)", "open-source clones: Open ScreenStudio, screenstudio-alt", "Screenify Studio auto-zoom guidance"]
timing: {"frame_rate":"60 fps source, 30 or 60 fps output","holds_ms":[800,2000],"durations_ms":{"zoom_in":[350,500],"zoom_out":[350,500],"pan_between_targets":[400,600],"click_ripple":[300,400],"min_segment":600},"note":"the numbers come from Screenify's guide (a competitor) and my derivations; Screen Studio publishes no timings on pages I could fetch"}
eases: {"key":"ease-in-out for zoom (350 to 500 ms), spring-like glide for the cursor","notes":"Screenify advises moving from ease-out at about 200 ms to ease-in-out at 350 to 500 ms for a more cinematic zoom; reviews say raw cursor input gets 'a slight spring easing'. In GSAP: power3.inOut for zoom, a critically damped follower for the cursor."}
camera: {"lens_mm":[50],"moves":["virtual camera: scale 1 to 1.5-2x with the cursor target held at the frame's focus","pan following smoothed cursor","zoom out when the action is done"],"rules":["zoom only for a reason (click, typing, window change)","hold at least 600 ms per zoom segment","never zoom while the cursor is in transit"]}
recipe_2d: "GSAP paused timeline, 1920x1080. Stage = rounded recording window (radius 14 px, shadow 0 40px 100px rgba(0,0,0,0.35)) on a gradient wallpaper with 80 to 120 px padding (derived). The recording is a video/img inside #screen. Virtual camera on #world (transform-origin 0 0): for a target point (px,py) and zoom Z: x = -(px*Z - 960), y = -(py*Z - 540), scale = Z, clamped so the window edge never shows inside the frame. Zoom in 420 ms power3.inOut; hold 800-1200 ms (click) or 1500-2000 ms (text-heavy); pan to next target 500 ms power3.inOut; out 450 ms power3.inOut. Z = 1.6 to 2.0 (2x at most; 3x pixelates a 1080p capture). Cursor: raw positions from the capture log are passed through a critically damped follower (precomputed per frame at build, written with tl.set per frame) with response 120 ms; hide after 1 s idle. Click: ring scale 0.4 to 1.6, opacity 0.6 to 0, 350 ms power2.out. Motion blur via the film finish, not CSS."
recipe_3d: "Rasan3D: screen recording as a k.panel (video frames pre-extracted to a texture sequence via k.image per frame set, or a still per state), unlit face, on a gradient ground; the zoom is a camera push: camera.pos z 3.2 to 1.7 over 0.45 s 'power3.inOut', target eased to the click point (via k.layout px to world), lens 50 mm fixed (a dolly, not a lens zoom, so the window edge gets true parallax) or lens 50 to 85 for a flat zoom; fstop 5.6. The cursor stays DOM, pinned with onDraw + k.toScreen so it stays crisp. Shadow on a k.ground catcher, 'top-soft' rig."
pitfalls: ["zooming on every event: Screenify warns that too many zooms makes the video feel 'like a pinball machine'", "zooming during cursor transit: only slow, deliberate movement should trigger a zoom", "segments shorter than 600 ms feel glitchy", "3x zoom on a 1080p capture: pixelation; record at 4K or zoom 2x at most", "linear cursor path or teleporting cursor", "camera target not following the cursor in the pan: viewer loses the action", "cursor frozen on screen during holds: hide static cursors", "forgetting that the zoom must be deterministic: no pointer events, everything from the log"]
instruct: {"all":"Supply the event log (time, x, y, type), the zoom level, hold times per event type, and the follower response. Say what the camera does between events (nothing: hold). Ask for an explicit list of zoom segments with start, end and target before any code.","claude":"Claude tends to zoom on every click and to tween the camera with the same duration for all moves, producing the pinball effect. Ask for a segment list that merges events within 1.5 s and skips transits, and for hold lengths by content type. It may also forget to clamp the camera to the window bounds.","gpt":"GPT models often implement the cursor smoothing with a running exponential filter in an onUpdate (stateful, not seek-safe) and use Math.random for the jitter. Require a precomputed per-frame array from the event log and tl.set per frame, and forbid onUpdate state. They often animate scale on #screen instead of #world, so the cursor and the click ring do not zoom with it."}
verified: {"sources_fetched":4,"non_wikipedia":4,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://www.screenify.studio/blog/2026-04-10-auto-zoom-screen-recording", "https://pickuma.com/for-dev/screen-studio-macos-screen-recording-review/", "https://hypertools.so/tool/screen-studio", "https://github.com/crafter-station/open-screenstudio"]
---

## What it is

Screen Studio records the screen with a log of cursor position, clicks and keystrokes, then, after recording, generates a "virtual camera": zoom-in and pan keyframes that follow the action, plus a smoothed cursor, click effects, a styled background with padding, rounded corners and shadow. Pickuma's review describes the analysis as detecting "mouse clicks, text input, window focus changes, and UI interactions" and says raw mouse input gets "a slight spring easing so the cursor glides rather than teleports". About one in five of the reviewer's roughly 40 recordings needed manual correction of zooms. HyperTools adds that cursor smoothing carries across video cuts and static cursors are hidden. The open-source Open ScreenStudio lists the same family of features: auto-zoom following the cursor, smooth cursor movement, click highlights, customizable backgrounds, padding, shadows and rounded corners; screenstudio-alt (a Claude Code skill) adds idle acceleration, keystroke chips, click ripples and vertical export.

For motion design, the useful part is the camera language: a locked 2D screen, a virtual camera that moves only with purpose, and a cursor that behaves like a hand rather than a mouse.

## The defining traits (numbers)

From Screenify's auto-zoom guide (a competing product; its numbers are guidance for the technique, not Screen Studio's settings):
- Zoom level: 2x "is the default for a reason", roughly the size jump from comfortable desktop viewing to comfortable phone viewing; 3x can reveal pixelation; 1.5x for already readable interfaces.
- Segment hold: 800 ms to 1.2 s for click actions with immediate visual feedback; 1.5 to 2 s for text-heavy changes; minimum 600 ms or it looks glitchy.
- Ease: moving from ease-out at about 200 ms to ease-in-out at 350 to 500 ms gives a more cinematic feel.
- Sensitivity: skip low-confidence click events; do not trigger on fast cursor movement ("you're in transit"), do trigger on slow deliberate movement.

From Screen Studio coverage:
- Zoom follows clicks, text input and window focus changes; the user can adjust zoom points on the timeline.
- Cursor: smoothed with spring-like easing; adjustable size; hidden when static.
- Export: H.265; 4K 60 fps about 80 to 120 MB for 3 minutes; 1080p 30 fps 20 to 30 MB (Pickuma).
- No published numbers for padding, radius, shadow or motion blur on the pages fetched. Working values (derived): padding 80 to 120 px, window radius 12 to 16 px, shadow 0 40px 100px rgba(0,0,0,0.35), wallpaper a soft two-stop gradient.

Derived camera maths (1920x1080, zoom Z, target point (px, py) in recording pixels): `x = clamp(960 - px*Z, 1920 - 1920*Z, 0)`, `y = clamp(540 - py*Z, 1080 - 1080*Z, 0)`, scale Z, with `transform-origin: 0 0`. The clamp keeps the window's own edges outside the frame while zoomed.

## How to build it

### 2D (HyperFrames, GSAP, 1920x1080, 30 fps)

```js
const FPS = 30, tl = gsap.timeline({ paused: true });
window.__timelines["09-screen-zoom"] = tl;
const log = window.CURSOR_LOG;                 // [{t, x, y, type:"move"|"click"|"type"}], from the capture, in recording px (1920x1080)

// 1. cursor: critically damped follower, precomputed at build (state lives here, not in pose/onUpdate)
function followed(log, response = 0.12, dur = 12, fps = FPS) {
  const wn = 2*Math.PI/response, out = []; let x = log[0].x, y = log[0].y, vx = 0, vy = 0, i = 0;
  for (let f = 0; f <= dur*fps; f++) {
    const t = f/fps; while (i+1 < log.length && log[i+1].t <= t) i++;
    const tx = log[i].x, ty = log[i].y, dt = 1/fps;
    vx += (wn*wn*(tx - x) - 2*wn*vx)*dt; x += vx*dt; vy += (wn*wn*(ty - y) - 2*wn*vy)*dt; y += vy*dt;
    out.push([x, y]);
  }
  return out;
}
followed(log).forEach(([x, y], f) => tl.set("#cursor", { x, y }, f/FPS));

// 2. camera segments: merge events closer than 1.5 s, skip transits (cursor speed above 1800 px/s)
const Z = 1.8, seg = [ // [start, hold, px, py]
  [1.0, 1.2, 1180, 420], [3.4, 1.8, 640, 760] ];
const cam = (px, py) => ({ x: Math.max(1920 - 1920*Z, Math.min(0, 960 - px*Z)), y: Math.max(1080 - 1080*Z, Math.min(0, 540 - py*Z)), scale: Z });
seg.forEach(([t0, hold, px, py], i) => {
  tl.to("#world", { ...cam(px, py), duration: 0.42, ease: "power3.inOut" }, t0 - 0.2);     // arrives as the click lands
  const end = t0 + hold, next = seg[i+1];
  if (!next || next[0] - end > 1.5) tl.to("#world", { x: 0, y: 0, scale: 1, duration: 0.45, ease: "power3.inOut" }, end);
});

// 3. click ring (inside #world so it zooms with the screen)
log.filter(e => e.type === "click").forEach(e =>
  tl.fromTo("#ring", { x: e.x, y: e.y, scale: 0.4, opacity: 0.6 }, { scale: 1.6, opacity: 0, duration: 0.35, ease: "power2.out" }, e.t));
```

Steps and rules:
1. Segment list first. Take the click and typing events, drop any where cursor speed exceeds about 1800 px/s (transit; derived threshold), merge events within 1.5 s into one segment with a pan.
2. Z at most 2.0 unless the capture is 4K.
3. The camera arrives 200 ms before the click (anticipation) and holds at least 600 ms; text-heavy changes 1.5 to 2 s.
4. Background and frame (static): `#frame { padding: 100px; background: linear-gradient(135deg,#3a2f7a,#c76a6a); } #screen { border-radius: 14px; box-shadow: 0 40px 100px rgba(0,0,0,.35); overflow: hidden; }`. Put the zoom on `#world` which contains `#screen`, `#cursor` and `#ring`, with the wallpaper outside `#world` and static; or let the wallpaper be part of `#world` with a 0.2 depth factor for subtle parallax.
5. Idle acceleration, if used, happens in the clip prep (speed the video), not as a tween.
6. Delivery blur: the film finish adds the shutter; do not add CSS blur to the zoom.

### 3D (Rasan3D)

```js
camera: { pos:[[0,[0,0,3.2]],[1.0,[0.18,0.07,3.2]],[1.42,[0.18,0.07,1.75],"power3.inOut"],[3.0,[0.18,0.07,1.75]],[3.45,[0,0,3.2],"power3.inOut"]],
          target:[[0,[0,0,0]],[1.0,[0,0,0]],[1.42,[0.18,0.07,0],"power3.inOut"],[3.0,[0.18,0.07,0]],[3.45,[0,0,0],"power3.inOut"]],
          lens:[[0,50]], fstop: 5.6 },
async build(k){ return { win: k.panel({ width:1.6, height:0.9, depth:0.015, radius:0.02, texture:k.image("assets/screens/frame_a.png") }) }; },
onDraw(t, k){ const p = k.toScreen(k.objects.win.getObjectByName("click-point")); /* set DOM #cursor and #ring from p when p.visible */ }
```
Swap `texture` between stills at state changes (pose picks the image by `t`). The 3D dolly gives real parallax between the window and the wallpaper plane, which a 2D scale cannot; use it when the film is mixed 2D and 3D, otherwise the 2D recipe is cheaper.

## What makes a cheap imitation

- Zoom on every click, with a 200 ms ease-out snap.
- Cursor teleports or follows the raw, jittery mouse path.
- Static cursor sitting in the middle of frames during holds.
- A zoom origin that is the centre of the screen rather than the action.
- Padding and shadow absent: the window floats on nothing, or the shadow is a muddy 0 0 20px.
- Pixelated zoom beyond 2x on a low-resolution capture.

## Sources

- https://www.screenify.studio/blog/2026-04-10-auto-zoom-screen-recording : 2x zoom, hold times, ease advice, sensitivity and velocity filter (competitor guidance).
- https://pickuma.com/for-dev/screen-studio-macos-screen-recording-review/ : event detection list, spring-eased cursor, 1 in 5 recordings needing correction, export sizes.
- https://hypertools.so/tool/screen-studio : cursor-following zoom, smoothing across cuts, adjustable cursor size, hides static cursors, no numeric settings disclosed.
- https://github.com/crafter-station/open-screenstudio : feature list for auto-zoom, smooth cursor, click highlights, backgrounds, padding, shadows, rounded corners.
- https://github.com/connerkward/screenstudio-alternative-skill : idle acceleration, keystroke chips, click ripples, smart callouts.

Not fetched (blocked or failed): screen.studio and its guide pages, screenify cursor-smoothing page, datastudios.org, designzig (no numbers).

Derived or unverified: follower response of 120 ms, 1800 px/s transit threshold, padding, radius, shadow, all 2D camera formulas (my arithmetic).
