---
id: "whip-pan-match-cut"
name: "Whip pan match cut: two blurred pans joined at the peak of the blur"
space: "both"
family: "cinematic"
references: ["Hot Fuzz (Edgar Wright)", "The Grand Budapest Hotel", "Magnolia", "La La Land", "Boogie Nights", "Avengers: Infinity War"]
timing: {"frame_rate":"30 fps render","holds_ms":[0,0],"durations_ms":{"out_leg":[100,160],"in_leg":[100,160],"whole_whip":[200,320]},"blur_ramp_ms":[60,120],"note":"the 0.2 to 0.32 s total is the repo's own whip guidance (3d.md: 0.15 to 0.3 s) plus a derivation; no fetched source gives a duration. 'Trim to where the blur begins, give or take a few frames' is from No Film School."}
eases: {"key":"power3.in (out leg) then power3.out (in leg)","notes":"split one power3.inOut whip at its peak: the outgoing scene accelerates (power3.in), the incoming one decelerates (power3.out); the cut falls where speed is highest and the frame is fully smeared. expo.inOut for a single-scene whip."}
camera: {"lens_mm":[24,35],"moves":["horizontal whip (yaw) out of scene A","horizontal whip (yaw) into scene B, same direction and speed"],"rules":["same direction in both shots","same speed at the cut (match the end velocity of A to the start velocity of B)","cut at peak blur, when neither frame is readable","match brightness and colour at the smear, so the cut does not flash","trim to where the blur begins, plus or minus a few frames (No Film School)","pan, not dolly: all layers move together, no parallax"],"formula":"A: yaw(t) = Y * ((t-t0)/T)^4 over T seconds to Y degrees (power3.in); B: yaw(t) = -Y + Y * (1 - (1-(t-t1)/T)^4) (power3.out); end speed of A = 4*Y/T = start speed of B"}
recipe_2d: "HyperFrames GSAP across two frames (scenes). Scene A, last 0.14 s: tl.to('#world',{x:-1400,duration:0.14,ease:'power3.in'},A_END-0.14) with an x-only blur: tl.fromTo('#blur-x',{attr:{stdDeviation:'0 0'}},{attr:{stdDeviation:'38 0'},duration:0.14,ease:'power2.in'},A_END-0.14). Scene B, first 0.14 s: tl.fromTo('#world',{x:1400},{x:0,duration:0.14,ease:'power3.out'},0).fromTo('#blur-x',{attr:{stdDeviation:'38 0'}},{attr:{stdDeviation:'0 0'},duration:0.14,ease:'power2.out'},0). Both blur on an feGaussianBlur (stdDeviation 'x 0') filter on #world; keep x at or under about 40 (vocabulary.md cost note); pre-flatten heavy layers. All layers get the same x (a pan has no parallax). Match element: put a bright vertical bar or a wide colour field at the same y and the same mean luminance on the last frame of A and the first of B so the smear is continuous. Handoff in the score: out {direction:'left', speed_px_s: 4*1400/0.14 = 40000 at the cut (power3 slope 4 at the end)}, in {same}. The cut is at A_END = B start = peak blur."
recipe_3d: "Rasan3D, two stages with a 3D-to-3D whip. Pan right 90 degrees across the cut, split at 45. Both cameras: pos fixed at their stand-point, lens 28 mm, roll 0, motionBlur default (or {shutter:0.25} plus the finish at --shutter 0.25 for the final render, per 3d.md section 4). Scene A (ends at A_END): const yawA = (t)=>45*Rasan3D.prog(t, A_END-0.12, A_END, 'power3.in'); camera:{ pos:[[0,[0,1.5,0]]], target:(t)=>{const a=yawA(t)*Math.PI/180;return [Math.sin(a)*10, 1.5, -Math.cos(a)*10]}, lens:[[0,28]] }. Scene B (starts at 0): const yawB = (t)=>-45+45*Rasan3D.prog(t, 0, 0.12, 'power3.out'); the same target function with yawB, then yaw continues 0 and the camera rests. End speeds: A 4*45/0.12 = 1500 degrees/s at the cut, B 1500 degrees/s at its start. At 28 mm (65.6 degrees across the long side) 1500 degrees/s is about 43,000 px/s on a 1920 frame, so a frame spans most of the screen: the streak is real and nothing in either frame is readable (derivations). Put a bright, horizontal-continuous feature (a horizon band, a light strip) at the same screen y at the cut."
pitfalls: ["different pan directions in A and B: the eye reads two moves, not one","speeds that do not match at the cut: the streak changes character and the cut shows (No Film School: if one pan is much faster or slower than the other, it does not work)","cut at rest or at low blur: the cut is the whole trick; it belongs at the peak","no brightness or colour match at the smear (No Film School): the frame flashes","symmetric blur or a radial blur: a whip is horizontal; use an x-only blur","parallax (per-layer speeds) in a pan: it makes the smear look like a dolly","a whip every scene: Wikipedia lists directors who use it 'liberally', but a film of whips reads as a preset; use it at two or three real hinges","a full-frame blur over 40 px in 2D: render cost (vocabulary.md) and banding; use 38 and let the translation do the rest"]
instruct: {"all":"Give both legs their direction, distance, duration, ease and blur ramp as numbers, state the cut is at the peak of the blur, say the brightness at the smear must match, and require the same speed at the cut (compute: end speed of A equals start speed of B).","claude":"Ask Claude to write the handoff block first (direction, speed, the matched element, the luminance at the cut) and then build both scenes from it. It tends to put the cut on the stop frame or to ease 'power3.inOut' on one scene only; tell it the two legs are halves of one ease.","gpt":"GPT-family output tends to use a crossfade with a radial or zoom blur and a flash. Say 'no crossfade, no zoom blur, no flash; a horizontal translate with x-only blur; a hard cut at peak blur'."}
verified: {"sources_fetched":4,"non_wikipedia":3,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Whip_pan", "https://www.studiobinder.com/camera-shots/camera-movements/whip-pan-shot/", "https://nofilmschool.com/how-to-do-a-whip-pan", "https://wolfcrow.com/the-3-important-in-camera-transitions-in-filmmaking/"]
---
## What it is

A whip pan is a camera pan so fast the picture smears into streaks. A whip pan match cut is the editing version: shot A ends in a whip, shot B begins in one, and the cut hides in the blur. StudioBinder's definition of the post-produced version: "the editor taking footage from one shot that ends with a whip pan and motion blur away from point A, and cutting it seamlessly with another shot that begins with a motion blur and whip pan ending on point B". Wikipedia notes it is a convenient, interesting motivation to move from one shot to another, and that it can suggest the passage of time or frenetic action; it lists Sam Raimi, Wes Anderson, Edgar Wright, James Wan, Damien Chazelle and Anatole Litvak among frequent users.

## The defining traits (numbers)

- **Same direction, same speed.** No Film School steps 1 and 2: whip in the same direction; keep both pans at relatively the same speed, since a drastic difference ruins the transition.
- **Colour and brightness match at the whip point.** Step 3, to hide the cut.
- **Trim point.** "Trim your first clip to the point where your motion blur begins, give or take a few frames" (step 5).
- **Blur.** Shoot with a slow shutter to maximise blur (No Film School). In render terms: a 180 degree shutter or wider on a very fast pan (the Rasan3D default is 0.5 of the frame time).
- **Speed.** Not given in any fetched source. Repo guidance for a 3D whip is 0.15 to 0.3 s with `expo.inOut` (`3d.md`); the 90 degree, 0.24 s whip here peaks at about 2,800 degrees/s for `expo.inOut` (derivation), and the split `power3` form at 1,500 degrees/s at the cut.
- **Equipment.** A good tripod and fluid head (Wolfcrow); consistent speed is the goal.
- **Examples with a shot list.** StudioBinder analyses Hot Fuzz and cites The Grand Budapest Hotel, Magnolia, La La Land, Boogie Nights and Avengers: Infinity War.

## How to build it

**The split-ease idea.** One whip `power3.inOut` has a symmetric speed profile peaking at its midpoint. Cut it there: scene A plays the first half (`power3.in`, accelerating), scene B plays the second (`power3.out`, decelerating). The angle or distance at the cut is half the whole; speeds are equal by construction: A's end speed = 4*Y/T, B's start speed = 4*Y/T.

**2D.** Translate `#world` by the same px in both scenes (A: 0 to -1400 px in 0.14 s; B: +1400 to 0 in 0.14 s), with an x-only `feGaussianBlur` ramp (0 to 38 and 38 to 0) and one matched feature at the same y and luminance. All layers move together. Record the handoff in the score so the two scenes are built from the same numbers.

**3D.** Yaw from a fixed stand-point, with the target as a function of t, split at 45 degrees. For the final render with the delivery finish, use `motionBlur: {shutter: 0.25}` on a whip-speed 3D scene and pass `--shutter 0.25` to the finish (`3d.md`).

Worked 3D keys (both stages share `lens 28`, `roll 0`):

```js
// scene A, ends at A_END
const yawA = (t) => 45 * Rasan3D.prog(t, A_END - 0.12, A_END, "power3.in");
camera: { pos: [[0,[0,1.5,0]]], lens: [[0,28]],
  target: (t) => { const a = yawA(t) * Math.PI/180; return [Math.sin(a)*10, 1.5, -Math.cos(a)*10]; } }
// scene B, starts at 0
const yawB = (t) => -45 + 45 * Rasan3D.prog(t, 0, 0.12, "power3.out");
```

**Where to use it.** A hinge where the film changes place or time, or a shift between two equal subjects. Pair it with a sound hit or a whoosh on the cut (sound plan) and one hard consonant of the next line on the arrival frame.

## What makes a cheap imitation

- A crossfade with a blur on top. The cut is the point: nothing should dissolve.
- A zoom blur or radial blur. A whip is horizontal.
- Two different speeds or directions. The viewer reads two events.
- A flash frame at the cut. The match should be in brightness, so no flash is needed.
- No matched element: even a smear needs a feature (a horizon, a light strip) that continues across the cut.
- Using it as a default transition for every scene.

## Sources

- https://en.wikipedia.org/wiki/Whip_pan : definition, transition function, directors who use it, how the blur hides the cut.
- https://www.studiobinder.com/camera-shots/camera-movements/whip-pan-shot/ : the whip pan match cut defined, Hot Fuzz and other examples, practical tips; no speed or shutter numbers.
- https://nofilmschool.com/how-to-do-a-whip-pan : same direction, same speed, match colour and brightness, trim where the blur begins plus or minus a few frames, slow shutter.
- https://wolfcrow.com/the-3-important-in-camera-transitions-in-filmmaking/ : consistent speed, tripod and fluid head, matching lighting and style.
