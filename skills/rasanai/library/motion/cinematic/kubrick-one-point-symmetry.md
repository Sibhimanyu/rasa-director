---
id: "kubrick-one-point-symmetry"
name: "Kubrick one-point perspective: the centred corridor and the long, level track"
space: "both"
family: "cinematic"
references: ["The Shining (1980), Overlook corridors and hedge maze", "2001: A Space Odyssey, Discovery One corridors", "A Clockwork Orange, Korova Milkbar", "Full Metal Jacket, barracks"]
timing: {"frame_rate":"24 fps source; RasanAI renders at the film's fps","holds_ms":[1500,4000],"durations_ms":[8000,12000],"note":"track durations are a derivation (walking pace over a 10-14 m corridor); the sources give no shot lengths except 'about three-minute takes' for the Big Wheel Steadicam tracks"}
eases: {"key":"power1.inOut","notes":"a Steadicam track reads as near-constant speed with soft ends; use power1.inOut over a window about 10% longer than the shot, or sine.inOut for a slower creep. Never none (gate: linear-drift)."}
camera: {"lens_mm":[18,24],"moves":["level dead-centre track in or out along the vanishing axis","low-height Steadicam follow (0.3 to 0.6 m)","locked symmetrical tableau"],"rules":["camera on the set's centre axis in x, target on the same axis (no yaw, no roll)","target.y equals pos.y so verticals stay parallel and the horizon sits at frame centre","one vanishing point, dead centre; every converging line meets there","subject centred on the same axis, or mirrored pairs about it","no handheld wobble, no reframing, no zoom"]}
recipe_2d: "HyperFrames GSAP: vanishing point at (960,540) on a 1920x1080 frame. Build the space as concentric symmetric frames (floor/ceiling/wall bands as mirrored shapes about x=960), each layer .l with data-d (far 0.2, mid 1, near 3). Every layer: transform-origin '960px 540px'. Push: tl.fromTo('.l', {scale:1}, {scale: (i,el)=>1+0.06*el.dataset.d, duration:8.8, ease:'power1.inOut'}, 0) for an 8 s shot (window 10% longer than the shot, so it never visibly stops). No x/y on any layer; no rotation. Hold the final 1.5 s with the world still. Mirror content: left x = 960 - dx, right x = 960 + dx, integer pixels, text centred with the tracking's trailing space compensated (padding-left equal to letter-spacing). Optional depth cue: far layer blur 0, near layer scale-only (no blur) so the geometry stays crisp."
recipe_3d: "Rasan3D (metres). Corridor 3.0 m wide, 2.6 m high, 30 m long, back wall at z=-16, walls with a repeating, mirrored pattern. camera: { pos:[[0,[0,0.6,14]],[9,[0,0.6,3.5],'power1.inOut'],[10.5,[0,0.6,3.5]]], target:[[0,[0,0.6,-16]]], lens:[[0,18]], roll:[[0,0]], fstop:5.6 }. Subjects (two figures, a door, a tricycle) centred at x=0 or mirrored about it. Low follow variant: pos y 0.12 to 0.3, pos [[0,[0,0.2,6]],[10,[0,0.2,-4],'sine.inOut']], target [[0,[0,0.2,-20]]], lens 18, fstop 5.6, Steadicam-style: no roll key. Locked tableau: pos [[0,[0,1.2,9]]], target [[0,[0,1.2,0]]], lens [[0,24]] with a 2% push key only if the shot needs life (pos z 9 -> 8.8 over 6 s, sine.inOut)."
pitfalls: ["a centre axis off by even a few pixels (or 0.02 m) reads as a mistake, not a choice: compute it, do not eyeball it","a yaw or roll key anywhere ruins the geometry; keep target.x equal to pos.x","wide lens without a level camera makes verticals lean; keep target.y = pos.y","the track at constant speed (ease none) gets the linear-drift warning and reads as a screensaver","mirroring the content but not the light: a symmetrical set with a key from one side is a different, valid look, but then say so","adding vignette, grain and a teal grade to 'look Kubrick': the sources describe geometry and camera height, not a grade"]
instruct: {"all":"Give the vanishing point as a number (960,540 or x=0 on the axis), say 'level, no roll, no yaw', give the move as start and end values with an ease name and a hold, and list what is forbidden: handheld shake, orbit, zoom, rotation, off-centre subject.","claude":"State the axis and the camera height in metres, then ask for the corridor to be built symmetric from the same dx values left and right so symmetry is by construction. Name the ease (power1.inOut) and the window (10% longer than the shot). Ask it to check the stills at 0, 50 and 100% and confirm the vanishing point pixel.","gpt":"Spell out each constraint as a checklist item (no rotate, no skew, transform-origin 960px 540px, equal margins). GPT-family output tends to add decorative drift or a vignette and to centre by eye; require centring by formula and ban idle motion explicitly."}
verified: {"sources_fetched":3,"non_wikipedia":3,"colours":"n/a","colour_images":[],"grid":"n/a","timings":"partial","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://filmmakermagazine.com/85083-the-one-point-perspective-in-stanley-kubricks-work/", "https://www.stabilizer-news.com/the-steadicam-and-the-shining/", "https://pixflow.net/blog/kubrick-symmetry-one-point-perspective/"]
---
## What it is

Kubrick's one-point perspective is a composition and a camera rule together: the camera sits on the centre axis of a symmetrical space, looks straight down it, and every converging line meets at one dead-centre vanishing point. Filmmaker Magazine describes the device as "symmetrical framing, often from a down-the-corridor POV" and lists it across seven films (The Shining, 2001, A Clockwork Orange, Full Metal Jacket, Barry Lyndon, Eyes Wide Shut, Paths of Glory), used both for dread (Torrance, the twins) and for comedy (Alex at the spaghetti). In The Shining the move that goes with it is the Steadicam track, low and level, through those corridors.

## The defining traits (numbers)

- **Lens.** Stabilizer News (the Steadicam history of The Shining) names a Cooke 18 mm as the frequently used lens, a 9.8 mm Kinoptik for the hedge maze, and a 50 mm for close tracking at speed. Pixflow calls the Zeiss 24 mm Kubrick's legendary wide (blog source, not primary). Design use: 18 to 24 mm.
- **Camera height.** Stabilizer News: lens heights "from about 18 inches to waist high" (0.46 m up), about 24 inches (0.61 m) in the hedge maze, down to one inch on the Big Wheel sequence, and a modified rig for three inches on running feet. Low is part of the look.
- **Take length.** The Big Wheel tracks ran "approximately three-minute takes" (same source). That is a read, not a rule: a RasanAI scene track is 8 to 12 s (derivation).
- **Set geometry.** Pixflow: sets "constructed with forced perspective in mind" and "built to exaggerate their own length"; Kubrick "spent hours adjusting position by inches" to find the exact centre point (blog claim, unverified against a primary source).
- **Speed.** The Steadicam let the operator "boom up and down rapidly" to avoid distorting sets with the wide lens (Stabilizer News). No speeds are published; the 1.1 to 1.2 m/s in the 3D recipe is a walking-pace derivation.
- **Framing.** Subject centred on the same axis as the vanishing point; pairs mirrored about it; horizon and vanishing point at frame centre.

## How to build it

**2D.** Treat `#world` as a flat stack: layers scaled about the vanishing point. Per-layer depth factors replace the missing third dimension (far 0.2, mid 1, near 3, per `vocabulary.md` push-in). One uniform symmetric layout, one slow scale push, no translation. See `recipe_2d` for the exact tween. Build mirrored pairs from a single `dx` so the symmetry is exact. For a corridor graphic: nested rectangles (stroke or fill) each a fixed scale step apart (1.0, 0.62, 0.38, 0.24...), so they converge on the centre.

**3D.** Real geometry makes the effect honest: a box corridor, the camera on x=0, target on the axis, lens 18 mm, pos y 0.6 m. The three numbers that matter are x (0), `target.y = pos.y`, and `roll` (0). A 10 to 14 m push over 9 s with `power1.inOut` then a 1.5 s hold. For the low follow, drop y to 0.2 m and move away from camera (pos z decreasing while target stays ahead); the child on the tricycle is the subject, centred. `fstop 5.6` keeps the whole corridor sharp, which is the point of the wide lens; do not open to f/2.

Worked 3D keys (copy as-is, then change z):

```js
camera: {
  pos:    [[0,[0,0.6,14]], [9,[0,0.6,3.5],"power1.inOut"], [10.5,[0,0.6,3.5]]],
  target: [[0,[0,0.6,-16]]],
  lens:   [[0,18]],
  roll:   [[0,0]],
  fstop:  5.6
}
```

Seams: the hold (10.5 s) is the landing. A `depth-to-flat` seam (`3d.md` section 6) works well because the final centred corridor is already flat-symmetrical.

## What makes a cheap imitation

- The centre is eyeballed. Check the vanishing point pixel on a still; a 6 px error is visible on a dead-centre composition.
- A slow zoom or digital scale is used where Kubrick tracks: a zoom has no parallax, so the walls do not slide past. Use per-layer depth factors in 2D and a real dolly in 3D.
- Symmetry without a space: a centred title on a flat background is not one-point perspective. It needs converging lines.
- A tilt or Dutch angle slipped in for drama. The style is level.
- Unsourced grade (cold blue, crushed blacks) bolted on. The cited sources are about geometry.

## Sources

- https://filmmakermagazine.com/85083-the-one-point-perspective-in-stanley-kubricks-work/ : the definition, the seven films, humour and dread; no lens numbers (stated plainly there).
- https://www.stabilizer-news.com/the-steadicam-and-the-shining/ : Cooke 18 mm, Kinoptik 9.8 mm, 50 mm, lens heights (18 in to waist, 24 in maze, 1 in Big Wheel), three-minute takes.
- https://pixflow.net/blog/kubrick-symmetry-one-point-perspective/ : Zeiss 24 mm, forced-perspective sets, centring by inches (blog; treat the claims as unverified).
