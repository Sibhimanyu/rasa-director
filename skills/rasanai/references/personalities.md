# Preview swatches (the former personality library)

The user no longer chooses among these. The decision is a **motion-language term** (`taxonomy/dimensions/motion-language.json`), whose contract becomes motion.md; the real animation is Claude's. These ten calibrated sets in `personalities/*.json` remain as preview swatches: `lib/motion-lang.mjs` (`SWATCH_BASE`) borrows a swatch's demo choreography to preview a motion language on the user's lines, played with the language's own eases and timings. Each swatch still passes the checker against its own motion.md (self-test). The notes below describe the swatches as data.

`median_likelihood` is a directional guess at how likely a model handed a generic brief would produce this motion unprompted (not calibrated; ≤ 0.10 is the tail). `pick.mjs motion` still uses it when a swatch id is asked for directly.

| id | feel tags | median | enter / exit / move | scale (ms) | stagger | hold | one-liner |
|---|---|---:|---|---|---:|---:|---|
| `cinematic-slow` | cinematic, dramatic, premium | 0.24 | `power2.out` / `power2.inOut` / `sine.inOut` | 400 / 700 / 1100 / 1600 / 2400 | 160 | 1400 | Out-of-focus to razor sharp, slow push-ins, long breathing holds. Trailer energy. |
| `swiss-precise` | precise, confident, systematic | 0.22 | `expo.out` / `expo.in` / `expo.inOut` | 200 / 300 / 450 / 700 / 1000 | 80 | 900 | Type snaps into a grid from behind masks. Fast in, long confident holds, no decoration. |
| `soft-drift` | calm, airy, gentle | 0.20 | `sine.out` / `sine.in` / `sine.inOut` | 500 / 800 / 1200 / 1800 / 2600 | 70 | 1500 | Tracking breathes open and closed, nothing hurries. Calm, airy, wellness-quiet. |
| `kinetic-punch` | punchy, urgent, sporty | 0.17 | `power4.out` / `power4.in` / `expo.out` | 120 / 200 / 320 / 500 / 800 | 90 | 450 | Words slam in oversized and hit the frame. Short, percussive, beat-driven. |
| `elastic-playful` | playful, friendly, energetic | 0.14 | `back.out(1.8)` / `back.in(1.4)` / `elastic.out(1,0.5)` | 180 / 300 / 500 / 800 / 1200 | 40 | 600 | Letters pop and squash with springy overshoot. Toy-like, cheeky, alive. |
| `editorial-mask` | editorial, literary, considered | 0.12 | `expo.out` / `power2.in` / `expo.inOut` | 250 / 450 / 700 / 1000 / 1400 | 120 | 1000 | Lines wipe on like ink across paper, an accent rule sweeps under the key word. Magazine calm. |
| `luxe-minimal` | luxury, restrained, quiet | 0.10 | `circ.out` / `circ.in` / `power1.inOut` | 600 / 900 / 1400 / 2000 / 2800 | 200 | 1800 | A slow reveal opens from the centre, a hairline draws, then stillness. Expensive restraint. |
| `retro-terminal` | technical, nostalgic, nerdy | 0.08 | `none` / `steps(4)` / `steps(2)` | 80 / 150 / 300 / 500 / 900 | 45 | 900 | Typed out character by character with a blinking cursor. Hacker-console nostalgia. |
| `liquid-morph` | fluid, organic, hypnotic | 0.06 | `power4.inOut` / `power4.inOut` / `sine.inOut` | 300 / 500 / 800 / 1200 / 1800 | 30 | 800 | Letters pour up from a baseline and ripple like fluid. Smooth, organic, hypnotic. |
| `brutalist-step` | raw, loud, anti-design | 0.05 | `steps(4)` / `steps(3)` / `steps(6)` | 100 / 160 / 250 / 400 / 600 | 60 | 500 | No easing at all. Hard cuts, stepped jumps, jitter. Raw and loud. |

## Feel vocabulary (`pick.mjs --feel`)

Pass 1–3 words. Each is matched against personality feel tags (and, for Look, preset descriptions). Words outside this list are ignored and reported back as `unmatched_feel`, so pick from here:

- **Words that expand:**
  - `calm` → calm, gentle, airy, quiet, restrained
  - `slow` → calm, gentle, airy, cinematic, restrained
  - `warm` → friendly, gentle, organic, considered
  - `cozy` → friendly, gentle, calm
  - `soft` → gentle, airy, calm
  - `premium` → premium, luxury, restrained, cinematic, quiet
  - `luxury` → luxury, restrained, quiet, premium
  - `elegant` → luxury, restrained, editorial, considered
  - `minimal` → restrained, quiet, precise, systematic
  - `playful` → playful, friendly, energetic
  - `fun` → playful, friendly, energetic
  - `friendly` → friendly, playful, gentle
  - `bold` → loud, punchy, raw, urgent, confident
  - `energetic` → energetic, punchy, urgent, sporty
  - `sporty` → sporty, punchy, urgent
  - `urgent` → urgent, punchy
  - `editorial` → editorial, literary, considered
  - `literary` → literary, editorial, considered
  - `corporate` → precise, systematic, confident
  - `serious` → precise, confident, considered, restrained
  - `technical` → technical, nerdy, systematic, precise
  - `tech` → technical, precise, systematic
  - `retro` → nostalgic, technical, raw
  - `nostalgic` → nostalgic
  - `dramatic` → dramatic, cinematic
  - `cinematic` → cinematic, dramatic, premium
  - `organic` → organic, fluid, gentle
  - `fluid` → fluid, organic, hypnotic
  - `raw` → raw, loud, anti-design
  - `edgy` → raw, anti-design, loud
  - `weird` → raw, anti-design, hypnotic, fluid, nostalgic
- **Tags used directly:** `airy`, `anti-design`, `calm`, `cinematic`, `confident`, `considered`, `dramatic`, `editorial`, `energetic`, `fluid`, `friendly`, `gentle`, `hypnotic`, `literary`, `loud`, `luxury`, `nerdy`, `nostalgic`, `organic`, `playful`, `precise`, `premium`, `punchy`, `quiet`, `raw`, `restrained`, `sporty`, `systematic`, `technical`, `urgent`

Choose words for how the piece should *feel*, not what it is about (a coffee brand is "calm, warm, considered", not "coffee").

## Adding a personality

1. Copy an existing JSON to `personalities/<id>.json` and edit every field:
   - `easing`: GSAP ease names only. `steps(N)` and `none` are allowed; DISPATCH.md tells the builder they override its default ease list.
   - `tempo.scale_ms`: 5 values, ascending.
   - `banned`: names from the signature table in `motion-md-contract.md` only.
   - `demo`: `split` (lines | words | chars), plus `enter`, `move` and `exit` primitives the engine knows (below), and `*_ms` values taken from the scale.
   - `feel`: tags from the vocabulary above, or new ones (then add synonyms in `pick.mjs`).
   - `median_likelihood`: an honest guess; ≤ 0.10 means a model would rarely do this unprompted.
   - `builder_notes`: how to build it in HyperFrames. Use zero-duration `tl.set` for cuts (never on a `.clip` element).
2. Self-check: the engine must obey the personality it previews.
   ```bash
   node scripts/tasting.mjs --content "Ship it in an afternoon" --sub "a second line" --personalities <id>,<id> --out /tmp/t
   node scripts/motion-md.mjs write --personality <id> --out /tmp/t/motion.md
   node scripts/obey.mjs --project /tmp/t        # must be clean
   ```
3. For a new entrance, move or exit, add a `case` to `scripts/lib/engine.js` that uses only `E.enter` / `E.exit` / `E.move` and `snap()`-ed durations.

Engine primitives:
- enter: clip-rise, char-pop, blur-focus, hard-cut, mask-wipe, liquid-rise, word-slam, drift-space, typewriter, center-reveal
- move: grid-shift, squash, slow-push, jitter, underline-sweep, wave, shake, breathe, cursor-blink, hairline
- exit: clip-drop, char-shrink, blur-out, hard-cut-out, mask-wipe-out, liquid-drain, punch-out, drift-away, backspace, center-close
