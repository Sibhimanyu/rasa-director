# keyframes.json (keyframe board input)

Written by the agent in the Key poses step of a single motion unit, rendered and validated by `scripts/board.mjs`, and copied into the project by `handoff.mjs`. There the build treats it as binding (see "Build semantics").

```json
{
  "title": "Slow Pour reel intro",
  "content": "Slow Pour",
  "aspect": "9:16",
  "shots": [
    {
      "id": "s1",
      "title": "Pour line, name, tagline",
      "note": "optional line shown beside the live stage",
      "elements": [
        { "id": "pour", "role": "box", "w": 0.8, "h": 38, "at": { "top": 30, "left": 50 }, "origin": "50% 0%" },
        { "id": "name", "role": "headline", "text": "Slow|Pour", "size": 22, "at": { "top": 58, "left": 50 } },
        { "id": "tag", "role": "sub", "text": "Brewed like it matters", "size": 5.5, "split": "words", "at": { "top": 76, "left": 50 } }
      ],
      "poses": [
        { "t": 0, "label": "Empty", "state": { "pour": { "scaleY": 0 }, "name": { "opacity": 0, "letterSpacing": 0.5 }, "tag": { "opacity": 0 } } },
        { "t": 1.2, "label": "Pour drawn", "state": { "pour": { "scaleY": 1 } } },
        { "t": 3.0, "label": "Name settles", "state": { "name": { "opacity": 1, "letterSpacing": 0 } } },
        { "t": 4.2, "label": "Tagline", "state": { "tag": { "opacity": 1 } } },
        { "t": 6.0, "label": "Hold", "state": {} }
      ],
      "segments": [
        { "from": 1, "note": "optional per-segment override: kind, ease, note" }
      ]
    }
  ]
}
```

`aspect` accepts 16:9, 9:16, 1:1, 4:5, `WxH`, or aliases (reels, feed...).

## Units

The board and the build use the same units:
- `size`, `w`, `h`, state `x`, `y`, `blur`: **% of the canvas's shorter side** (CSS `cqmin`). Type therefore reads the same size in 16:9 and 9:16.
- `at.top`, `at.left`: % of the canvas height / width. The element is anchored there (see `align`).
- `clip`: CSS `clip-path` (e.g. `inset(0% 100% 0% 0%)`); `letterSpacing`: em; `rotation`, `skewX`: degrees.

## Elements

| Field | Meaning | Default |
|---|---|---|
| `id` | stable id; the build uses it as the DOM id | required |
| `role` | `headline`, `sub`, `label`, `stat` (text) · `rule`, `box`, `logo` (shapes) | `headline` |
| `text` | on-screen text, verbatim; `\|` = line break | none |
| `at` | `{ "top": %, "left": % }` | per role (headline 44/50, sub 62/50, label 9/12, stat 42/50, rule 54/50, box and logo centred) |
| `size` | font size (text roles) | headline 13, sub 4.2, label 2.8, stat 30 |
| `w`, `h` | shape size | rule 45×0.8, box 20×20, logo 18×18 |
| `weight` | font weight | the look's display weight (sub 500) |
| `font` | `display` (the look's font) or `mono` | label mono, the rest display |
| `align` | `left`, `center`, `right`: which side of the element sits on `at.left` | from the element's `at.left` (< 30 left, > 70 right, else centre) |
| `origin` | CSS transform-origin, e.g. `50% 0%` to draw a line from its top | centre |
| `color` | `ink`, `accent`, `bg`, or any CSS colour | text ink; shapes accent |
| `split` | `chars`, `words` or `lines` (split on `\|`): the element animates unit by unit, staggered at motion.md's `stagger.each_ms` | none (the element moves as one) |

## Poses

- `t`: seconds from the shot start. Poses are sorted by `t`. At least 2 per shot.
- `state` maps element id → properties: `opacity`, `x`, `y`, `scale`, `scaleX`, `scaleY`, `rotation`, `skewX`, `clip`, `blur`, `letterSpacing`.
- **States are cumulative:** a pose lists only what changes; everything else carries over. The first pose should set the starting state of everything that will animate.
- A pose whose `state` is empty (or changes nothing) makes the segment before it a **hold**.
- Every id in a `state` must exist in `elements` (board.mjs refuses otherwise).

## Segments

The gap between pose *i* and pose *i+1* is segment *i*. `segments[].from` is that **0-based pose index**, not a time. `board.mjs` fills in, per segment:
- `kind`: `hold` (nothing changes), `enter` (an element becomes visible: opacity up, clip opening, scale from 0), `exit` (something hides and nothing appears), else `move`. Override with `segments[].kind`.
- `ease`: motion.md's ease for that kind. Override with `segments[].ease`, but only with an ease from motion.md.
- `spread_ms`: stagger spread of the slowest `split` element moving in it: `stagger.each_ms × (units − 1)`.

**Validation** (exit code 3 when anything fails; flagged red on the board and listed in `board.json`):
- an animated segment's duration (gap between the poses) is on the motion.md scale (±15%). This is the per-element / per-unit duration; stagger is added on top.
- its ease is in motion.md;
- a hold segment is ≥ `holds.min_ms` (−15%) while anything is on screen (a closing hold on an empty frame isn't checked);
- a staggered segment finishes (`t + ms + spread`) before the next animated segment starts;
- every element holds ≥ `holds.min_ms` (−15%) between fully arriving (including its stagger) and the start of its exit;
- no element's pose pair matches a pattern motion.md bans (the same signatures obey.mjs uses; `x`/`y`/`blur` are converted to canvas px), because approved keyframes are binding on the build.

`node board.mjs --poses keyframes.json --motion motion.md --validate` runs only these checks (no page, no Chrome); handoff.mjs runs it before every handoff.

## Output

`board.html` (open it: live stage with play / scrub, opened on the hero pose; pose cards; a curve and duration per segment), `board.json` (resolved segments + issues), and with `--still` `board.png` (previous still kept as `board.prev.png`).

## Build semantics

In the build, each non-hold segment becomes tweens: every element listed in the next pose goes from its current state to that pose's state, starting at the earlier pose's `t`, for the segment's duration, at its ease. `split` elements animate their units with the contract stagger. One shot = one scene, back to back. `DISPATCH.md` gives the Director the same mapping into `shot-plan.json`.
