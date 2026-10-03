---
id: "one-take-through-scenes"
name: "One take through scenes: a continuous camera with hidden seams"
space: "both"
family: "cinematic"
references: ["1917 (2019), about 30 shots stitched as one", "Birdman (2014), Lubezki handheld", "Rope (1948), ten segments with hidden cuts", "Russian Ark (2002), a real single 96-minute take"]
timing: {"frame_rate":"24 fps source","holds_ms":[400,1500],"durations_ms":{"per_scene":[6000,14000],"seam_window":[800,1600]},"note":"1917: about 30 shots, some runs of 'a full nine minutes without a visible break' (No Film School). Rope: up to 10 minutes per take, 11 shots in all (Wikipedia, Long take). The scene and seam durations here are derivations for a short film"}
eases: {"key":"power2.inOut (travel), power2.in then power2.out (across a seam)","notes":"across a seam the outgoing leg accelerates (power2.in) and the incoming decelerates (power2.out) with equal speed at the join; the rest of the shot is continuous velocity with soft changes. Never none."}
camera: {"lens_mm":[18,28],"moves":["continuous track with direction changes at stations","seams hidden by: whip pan, body or object across the lens, darkness or a doorway, a wall or featureless surface, a fade to black"],"rules":["one lens through the whole film (the lens, height and exposure are the same on both sides of a seam)","at a seam the screen is fully covered by the mask for 2 to 4 frames","velocity matches across the seam: speed, direction, height","every scene is reached by the same camera, so the camera path is continuous in world space or in screen space","the cuts are for the film's use, never announced"],"unverified":"the 18 mm Leica Summilux-C and rare 14 mm on Birdman come from the Birdman Wikipedia page, which reports them; 1917's lenses were not found in any fetched page"}
recipe_2d: "HyperFrames GSAP: one wide world on #world (stations laid out left to right or in a snake), the camera tweens #world x/y/scale between stations with rests, as in vocabulary.md 'Camera journey (oner)': sweep 0.6 to 1.2 s power3.inOut, rest 1.5 to 2.5 s. For a seam between two separately authored scenes (sub-compositions), use a mask element that fills the frame at the cut: scene A's last 0.5 s: tl.to('.mask-a',{scale:12,duration:0.5,ease:'power3.in'},A_END-0.5) (an aperture, a door, a letter counter whose fill is the colour of the first frame of B); scene B's first 0.5 s starts inside the aperture and the camera keeps moving in the same direction at the same speed: tl.fromTo('#world',{scale:1.6},{scale:1,duration:0.8,ease:'power2.out'},0). Match the speed: A's end scale rate (power3.in derivative 3 at the end) and B's start rate must be equal; compute them (scale rate = k*Δscale/T). Hold the mask 2 to 4 frames (67 to 133 ms at 30 fps) at full coverage before opening."
recipe_3d: "Rasan3D, two or more stages joined by a door. Scene A, last leg: the camera flies at a doorway 1.2 m wide, 2.2 m high at z=0 on a 24 mm lens: camera:{ pos:[[0,[0,1.5,6]],[5.0,[0,1.5,6]],[6.2,[0,1.5,0.6],'power2.in']], target:[[0,[0,1.5,-10]]], lens:[[0,24]], fstop:5.6 }; the final speed is 2*5.4/1.2 = 9.0 m/s (power2.in has slope 2 at its end). Scene B, first leg: same direction and speed inside the next space: camera:{ pos:[[0,[0,1.5,0.6]],[1.2,[0,1.5,-4.8],'power2.out'],[3.5,[0,1.5,-4.8]]], target:[[0,[0,1.5,-20]]], lens:[[0,24]], fstop:5.6 }; B's start speed is 2*5.4/1.2 = 9.0 m/s (power2.out has slope 2 at its start). While the camera is inside the doorway the frame is the doorway's dark jamb: build the jamb in both scenes as a 0.25 m black cutout, so 3 to 4 frames at 9 m/s are covered. Same y (1.5), same lens (24), same exposure and grade. Layout and seam names follow 3d.md section 6 (camera-through). Handheld option (Birdman): add the seeded handheld functions from handheld-documentary to both stages with identical seeds' continuation (use t offset = A duration for B)."
pitfalls: ["different lens, height or exposure on the two sides of a seam: the cut shows; keep them identical","speeds not matched: compute the end speed of A and start speed of B and make them equal","a seam on an empty frame with no mask: hide it behind something that fills the screen for 2 to 4 frames","the actors or objects not carried across: time must be continuous; the carried element has the same position, pose and light on both sides","one take as a gimmick with no motive: the camera should be going somewhere (1917: 'every step, glance, and gesture had to sync across takes')","stacking too many seams in 10 s: each needs a mask and a match; two or three is plenty","a camera that never rests: pace stations with 1 to 2 s holds so the viewer reads","hiding cuts with a crossfade: a dissolve announces itself"]
instruct: {"all":"List the scenes and the seams as a table: scene, camera start (pos, target, lens), camera end, the mask that covers the cut (door, body, whip, darkness), speed at the seam in m/s or px/s; require same lens, height and exposure across each seam and equal speeds.","claude":"Ask Claude to write the seam table first and compute the speeds from the easing slope (power2.in ends at 2*distance/duration). Claude follows this well; without it, it tends to start each scene at rest, which exposes every seam.","gpt":"GPT-family output tends to open every scene with an establishing push from rest and to hide seams with a crossfade. Say 'no crossfade; each scene opens already moving at the stated speed; a mask fills the frame for 3 frames at the seam'."}
verified: {"sources_fetched":4,"non_wikipedia":1,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://nofilmschool.com/1917-one-take-movie-trick", "https://en.wikipedia.org/wiki/One-shot_film", "https://en.wikipedia.org/wiki/Long_take", "https://en.wikipedia.org/wiki/Birdman_(film)"]
---
## What it is

A one-take-through-scenes film (or sequence) moves one camera through changing places and times as if nothing had been cut, while the cuts are in fact hidden. 1917 is the cleanest example: No Film School reports about 30 shots disguised as one, with invisible edits "masked by motion, darkness, or a passing object", using "whip pans, camera wipes, or a body moving across the frame", and VFX blending, with some runs of a full nine minutes without a visible break. For RasanAI this is the form of the `camera-through` seam extended into a whole piece: a single spatial journey that carries a story or a product tour.

## The defining traits (numbers)

- **Shot count and run length.** 1917: 30 shots, runs up to nine minutes visible (No Film School). Rope: 11 shots with takes up to 10 minutes (Wikipedia, Long take); in One-shot film, Hitchcock "timed five of the ten segments to allow for hidden edits behind furniture".
- **Cut masks.** Rope: a dolly to a featureless surface (the back of a jacket), then the next take begins at that point and zooms out (Long take). 1917: fade to black, a wall, a shadow, a whip pan, a passing body (No Film School). Birdman: "panning on walls and actors' bodies" (Birdman article).
- **Lenses and rigs.** Birdman: Arri Alexa M handheld and Alexa XT on Steadicam, an 18 mm Leica Summilux-C chosen for intimacy, rare 14 mm, Zeiss Master Primes as alternatives; Lubezki performed all handheld camera work (Wikipedia). 1917: Deakins used custom rigs including wire rigs, cranes, handheld transitions and a motorcycle mount (No Film School).
- **Rehearsal.** Birdman: stand-ins mapped movements at Sony Studios; typically about 20 takes for shorter scenes, smooth ones around the fifteenth (Wikipedia). 1917: "every step, glance, and gesture had to sync across takes".
- **A true single take.** Russian Ark runs 96 minutes in one uninterrupted movement (One-shot film).
- **Light.** Birdman used natural light; continuous movement made crew shadows the difficulty (Wikipedia).
- **Numbers for RasanAI.** The 0.8 to 1.6 s seam window, the 2 to 4 frame full mask, and the speeds below are derivations from the repo's `camera-through` seam (cut at peak speed under motion blur, `3d.md` section 6).

## How to build it

**Plan as a seam table.** Scene, start pose, end pose, mask, speed at the join. Each seam gets: a mask (door, whip, body, darkness), the same lens, height and exposure on both sides, equal speed. Place seams at hinges of the story (change of place, time, topic) every 6 to 14 s.

**2D.** Lay the film out as stations on one world and move `#world` between them (vocabulary.md `camera journey`). For authored separate scenes, the aperture-mask seam in `recipe_2d`: the mask fills the frame for 2 to 4 frames and the next scene opens inside it moving at the same speed. Content on each station resolves during its rest, so the viewer reads on the hold and not on the move.

**3D.** The door seam in `recipe_3d` is the template: A's last leg is `power2.in` into a doorway, B's first leg is `power2.out` out of one, equal speeds (9 m/s in the worked numbers). Replace the doorway with a screen, a lens, a letter counter or a body. Use the same lens (24 mm in the example), same camera height, same fstop.

```js
// scene A, last leg:  pos z 6 -> 0.6 in 1.2 s, power2.in  (9.0 m/s at the cut)
// scene B, first leg: pos z 0.6 -> -4.8 in 1.2 s, power2.out (9.0 m/s from the cut)
```

For a handheld oner, continue the same seeded noise in B by adding A's duration as a time offset to the noise lookup so the shake does not restart.

**Sound.** Carry one bed through the whole film and let room tone change under the mask. The ear marks seams as readily as the eye.

## What makes a cheap imitation

- Seams hidden by a crossfade or a flash: a dissolve is a visible cut.
- Each scene begins at rest: the camera stops at the seam, so the viewer sees a new shot.
- A new lens or camera height after the seam.
- Time or light that jumps: the carried element differs across the seam.
- Too many seams too close together, so the 'single take' is a montage of movements.
- Moving the camera for its own sake: no one in the shot is going anywhere.

## Sources

- https://nofilmschool.com/1917-one-take-movie-trick : 30 shots, nine-minute runs, the masking methods, custom rigs, synchronisation.
- https://en.wikipedia.org/wiki/One-shot_film : Rope's hidden-cut segments and furniture, Russian Ark, the blackout in 1917 (the page says it is edited as two shots at that point).
- https://en.wikipedia.org/wiki/Long_take : Rope's 11 shots and 10-minute takes, the jacket-back dolly and zoom-out concealment, other long-take films.
- https://en.wikipedia.org/wiki/Birdman_(film) : Lubezki, handheld and Steadicam, 18 mm Leica Summilux-C, natural light, rehearsal and take counts.
