---
id: "handheld-documentary"
name: "Handheld documentary camera: reactive, imperfect, never random"
space: "both"
family: "cinematic"
references: ["The Bourne Supremacy (2004), Paul Greengrass", "Saving Private Ryan (1998)", "The Thin Red Line (1998)", "Children of Men (2006)", "Birdman (2014), Lubezki handheld"]
timing: {"frame_rate":"30 fps render; noise seeded per frame index","holds_ms":[0,600],"durations_ms":[3000,12000],"flinch_ms":[80,200],"note":"flinch and drift values are derivations; pixflow's After Effects parameters are the only numeric source and are a post-production starting point, not a measurement of real operators"}
eases: {"key":"sine.inOut (drift), expo.out (flinch decay)","notes":"the shake is a noise function, not a tween. Smooth it (value noise with smoothstep, or Bezier-converted keys) so it does not jitter; decay events with expo.out."}
camera: {"lens_mm":[18,24,35],"moves":["slow drift (0.5 to 1 Hz)","operator tremor (2 Hz)","event flinch (3 to 6 frames)","late follow: the frame trails the subject by 0.1 to 0.2 s and settles slightly off"],"rules":["the shake is a response to something (a punch, a step, a shout)","amplitude proportional to lens: wide lenses shake less in screen px per degree","near layers shake more than far layers (parallax)","roll is small (0.2 to 0.5 degrees)","focus hunts slightly; framing is imperfect, with headroom lost and regained"]}
recipe_2d: "HyperFrames GSAP, seek-safe: one clock tween applies a seeded, smoothed noise to #world per frame. const R = mulberry32(seed); build 3 tables of random values (drift 0.6 Hz, tremor 2 Hz, jolt 7 Hz) and read them with smoothstep interpolation of floor/ceil indices; frameIdx = Math.floor(tl.time()*30 + 1e-6) so the value is constant across a frame's shutter. tl.to({}, {duration: D, onUpdate(){ const t=tl.time(); gsap.set('#world', {x: A_x*(0.6*n1(t)+0.3*n2(t)) , y: A_y*(0.6*n1b(t)+0.3*n2b(t)), rotation: 0.3*n3(t), scale: 1.06}); }}, 0) with A_x = 8 px and A_y = 6 px at 1920 wide. Layers: near layer x,y multiplied by 2 to 3, far by 0.3 (same data-d idea as push-in). scale 1.06 or more hides the edge crawl; it must cover the maximum excursion plus rotation. Events: tl.to('#world', {x:'+=18', y:'+=10', duration:0.08, ease:'power3.out'}, tHit).to('#world', {x:'-=18', y:'-=10', duration:0.18, ease:'expo.out'}, '>')."
recipe_3d: "Rasan3D: pos, target and roll may be functions of t. const R = Rasan3D.rng(7); const T = (n)=>Array.from({length:n},()=>R()*2-1); const A=T(400),B=T(400),C=T(400); const vn=(tab,f,t)=>{const x=t*f,i=Math.floor(x),u=x-i,s=u*u*(3-2*u);return tab[i%400]*(1-s)+tab[(i+1)%400]*s;}; camera:{ pos:(t)=>{const b=Rasan3D.at(t,base);return [b[0]+0.012*vn(A,0.6,t)+0.006*vn(A,2,t+9), b[1]+0.010*vn(B,0.7,t)+0.005*vn(B,2.1,t+3), b[2]]}, target:(t)=>{const q=Rasan3D.at(t,tgt);return [q[0]+0.03*vn(C,0.5,t), q[1]+0.02*vn(C,0.55,t+5), q[2]]}, roll:(t)=>0.35*vn(C,0.4,t+11), lens:[[0,28]], fstop:4 }. base and tgt are ordinary key arrays for the underlying move (e.g. base=[[0,[0,1.5,5]],[6,[0.8,1.5,3.6],'power2.inOut']]). Wide lenses read shake in the target (a pan jitter), not position: put most amplitude in target. Crisp variant (Ryan-style): motionBlur:{shutter:0.25}. Flinch: add Rasan3D.prog(t, tHit, tHit+0.2,'expo.out') scaled kick on target.y. Declare intent: declare:{intent:{'never-rests':'handheld, the camera is alive on purpose'}}."
pitfalls: ["random noise sampled by continuous t re-rolls in every sub-frame and averages to mush; seed by frame index (pdoom ENGINE.md says the same about jitter)","white noise: jerky and fake. Use smoothed low-frequency noise plus one small high-frequency octave","shake with no cause: the sources describe a camera that flinches when Bourne punches and dips when he moves","uniform scale of the whole frame with no near/far difference: reads as a digital effect","too much amplitude and too many cuts in a row: viewers coined 'Queasicam' for The Bourne films (Wikipedia, Shaky camera); cap it","fights the repo rule: craft.md allows shake only on an impact, 6 frames max, 2 per 30 s. A handheld film is an explicit override and must be declared in the score","edge crawl: scale too small to cover the excursion"]
instruct: {"all":"Define the shake as seeded noise with frequencies and amplitudes in pixels or metres and degrees, name the events that cause flinches, give a scale that hides the edges, and say it must be a pure function of t (seeded, no Math.random, no Date.now).","claude":"Ask for three octaves with explicit Hz and amplitude and for the noise table to be generated from mulberry32 with a fixed seed. Claude tends to implement shake as a looping yoyo tween (idle motion, banned and not seek-safe) unless told to use a per-frame noise function. Also tell it to tie each flinch to a named event time.","gpt":"GPT-family output tends to over-shake (amplitudes 3 to 5x too large) and to use Math.random in onUpdate. Cap amplitudes in the prompt (x 8 px, y 6 px, rotation 0.3 degrees) and require a seeded table."}
verified: {"sources_fetched":5,"non_wikipedia":4,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://nofilmschool.com/bourne-supremacy-shaky-cam", "https://en.wikipedia.org/wiki/Shaky_camera", "https://www.cined.com/handheld-camera-and-the-different-kinds-of-impact-it-creates-in-film/", "https://pixflow.net/blog/creating-handheld-camera-shake-after-effects-and-premiere/", "https://theasc.com/article/shot-craft-camera-movement/"]
---
## What it is

Handheld documentary camera lets the operator's body into the frame: breath, step, flinch, a late reframe. As a style it descends from newsreel and direct cinema (Wikipedia: Cassavetes in the 1960s, then NYPD Blue, Saving Private Ryan, The Blair Witch Project), and its modern action form is Greengrass and editor Christopher Rouse's Bourne Supremacy. No Film School's point is that it was not random: the camera "flinched" when Bourne punched and "dipped" when he moved, working as a second party to the action.

## The defining traits (numbers)

- **Reactive, not ambient.** The shake follows events (No Film School). The numeric consequence for RasanAI: a low continuous layer plus event flinches of 3 to 6 frames (derivation).
- **Operator motion.** CineD: the shake "visually heightens the intensity... pace, elevated heartbeat, panic". Shoulder rigs "take some weight off the body and better control the amount of shake".
- **Shutter.** CineD: Saving Private Ryan paired handheld with a faster shutter for crisp, jittery combat; Malick's The Thin Red Line was nearly all handheld. In Rasan3D this is `motionBlur: {shutter: 0.25}` instead of the default 0.5 (derivation).
- **Post parameters (blog numbers).** Pixflow's After Effects starting point: position wiggle 2 per second at 30 px (x 10 to 20 px, y 5 to 15 px), rotation 0.5 per second at 0.3 degrees, focus breathing about 1.5 per second at about 8 px, scale up to hide edges (the post states 110 to 120%, which is large; the repo's own table uses 1 to 4 px and 0.1 to 0.5 degrees at 0.5 to 2 Hz, `vocabulary.md`). Use the repo's amplitudes first.
- **Frequency content.** A search snippet citing a USPTO patent says hand shake is mostly several Hz and large below about 4 Hz (not fetched; unverified). It supports a 0.5 to 2 Hz main band with a small 5 to 7 Hz octave.
- **Cutting.** Rouse uses inserts "to construct geography rather than lengthy masters"; a shot may last "a fraction of a second" (No Film School).
- **Which tool.** The ASC's Shot Craft calls handheld "the fastest and cheapest form of camera movement" and the Steadicam the "smooth, drifting, floating" counterpart.

## How to build it

**2D.** Because `onUpdate` on an empty target is the repo's accepted clock pattern, one tween drives a smoothed, seeded noise (`recipe_2d`). Three octaves: slow drift (0.6 Hz, 60% of amplitude), tremor (2 Hz, 30%), jolt (7 Hz, 10%, only in action). Position amplitudes 8 px (x) and 6 px (y) at 1920 wide; rotation 0.3 degrees. Multiply by a depth factor per layer (far 0.3, content 1, near 2 to 3) so the near layers move more. `scale: 1.06` covers the maximum excursion. Add 1 to 2 px of rack-focus-style blur change if the frame has a shallow-depth subject. Never use yoyo, repeat -1 or a CSS keyframe loop.

**3D.** Camera `pos`, `target` and `roll` accept a function of t. Put most of the amplitude in `target` (an operator's aim wobbles more than the body travels) and a little in `pos`. The functions in `recipe_3d` are pure and seeded. Lens 28 mm; use 18 to 24 mm for in-the-scene immediacy. A late follow is a target that eases toward the subject with 0.15 s lag: `target: (t) => subjectAt(t - 0.15)`.

Worked flinch: at tHit = 4.2 s, add to target.y: `-0.06 * (Rasan3D.prog(t,4.2,4.28,'power3.out') - Rasan3D.prog(t,4.28,4.46,'expo.out'))`, so it drops 6 cm in 0.08 s and recovers in 0.18 s.

Gate notes: a constant function reads as a changing track; the `never-rests` warning is expected, so declare the intent with a reason.

## What makes a cheap imitation

- Looped or yoyo shake. It repeats visibly and breaks seeking.
- Uniform amplitude on every layer and every frame; no cause, no rest.
- Random per-frame jitter at 30 Hz: it reads as VHS tracking, not a hand.
- Max amplitude on a wide lens with rotation 3+ degrees: the 'earthquake' look.
- Fast cuts every few frames with no insert logic. Rouse builds geography with inserts.
- Over-smoothed (stabiliser-like) noise that never changes direction: that is a gimbal.

## Sources

- https://nofilmschool.com/bourne-supremacy-shaky-cam : reactive camera, Greengrass and Rouse, inserts, fragments.
- https://en.wikipedia.org/wiki/Shaky_camera : history, 'Queasicam', McQuarrie's criticism.
- https://www.cined.com/handheld-camera-and-the-different-kinds-of-impact-it-creates-in-film/ : intensity, immersion, authenticity; Ryan and Thin Red Line; shutter.
- https://pixflow.net/blog/creating-handheld-camera-shake-after-effects-and-premiere/ : the AE wiggle parameters (blog numbers).
- https://theasc.com/article/shot-craft-camera-movement/ : handheld versus dolly versus Steadicam, in the ASC's words.
