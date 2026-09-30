# Story: the playbook

Left alone, every AI launch video tells the same story: hook stat → problem montage → "Introducing X" → three features → CTA. That is a sales deck built outward from the feature list, and it has no turn. Rasa's stories start from **one idea** instead (a borrowed form, one metaphor, one rule about time or camera, an unexpected protagonist), and the features show up *inside* that idea as evidence.

The engine is `scripts/story.mjs` over the catalog `taxonomy/devices.json` (66 devices in 7 families; schema in `taxonomy/devices-SCHEMA.md`). The loop:

1. **Truth sheet** → `story.mjs truth --out "$RUN/story/truth.md"`, then fill it.
2. **Pick** → `story.mjs pick --truth "$RUN/story/truth.md" [--recent <ids>]` → three devices labelled Sure / Bold / Wild.
3. **Pitch** → write one pitch per device in `$RUN/story/pitches.json`.
4. **Check** → `story.mjs check --pitch "$RUN/story/pitches.json" --truth "$RUN/story/truth.md"`, then rewrite until it ships.
5. **Show** → the three films in the console (SKILL.md "2 · Films": each pitch paired with a design system and drawn on its hook, with optional sketch frames), and take the user's feedback.

## 1. The truth sheet (before any concept)

Specificity comes from here, and this is the step that gets skipped most. Fill every section from the capture, the brief, the screenshots and the user's words:

- **Transformation**: from ___ to ___, in the audience's words. ("from PRs that wait two days on one tired senior, to PRs that arrive already reviewed")
- **Emotional truth**: the feeling *under* the task, not a feature. The small shame, fear, longing or relief. ("the quiet guilt of approving a 900-line diff with 'LGTM' at 11 pm")
- **Enemy**: a thing, a habit, a phrase or a deadline. Not a competitor.
- **Native objects (8 or more)**: physical and digital things, sounds and details from the product's world, as specific as you can make them ("merge conflict markers", "the 2 am pager alert"; not "code").
- **Native formats (5 or more)**: document and media formats that exist in this world (a pull request, a postmortem, a status page, a receipt, a calendar invite). A native format plus a borrowed container is the richest source of concepts.
- **Native words**: the product's exact UI labels, button text, jargon and error messages, **copied** from the site or screenshots. These are the only UI words a film may show.
- **Proof**: every claim the film may make, each with its source. Only what is true.
- **Surprising facts**: at least one non-obvious truth, with a source.
- **Must-show features** (3 at most), **Assets** (screenshots, logo, footage, product sounds, real data), **Competitors** (for the swap test), **Audience**, **Format / length / aspect**, **Tone**, **Tags** (product-type tags from the catalog's vocabulary).
- **The cliché version**: write the default-arc film in six lines. It is the negative example; the pitches must not be it.

`pick` refuses an empty sheet and lists the gaps of a thin one (`truth_gaps`); fill them rather than pitching around them.

## 2. Pick three devices

```bash
node $SKILL_DIR/scripts/story.mjs pick --truth "$RUN/story/truth.md" --recent "$(recent device ids, comma-separated)"
```

It samples candidates from every family (weighted toward borrowed containers and metaphors, which pass the swap test most often), down-weights the LLM-overused devices (x0.3) and recently used ones (x0.15), favours devices that fit the product's tags, format and tone, and returns the best trio in which **every pair differs on at least 5 of the 7 axes** (family, protagonist, time, camera, tone, turn, visual world), always including family, protagonist and visual world. Each pick carries its beats, pitfalls, a generic example, its buildability, and `fuse_with`: a native format and a native object from the truth sheet to build it from.

- `--seed` makes it deterministic; the default seed is the product name plus today's date. For a fresh set, pass a new seed or `--exclude` the ids already shown.
- `--format` / `--tone` override the truth sheet. `--like <id>` leans the set toward one device's axes. `--footage` makes live-action devices buildable.
- **Sure** = the most buildable and immediately clear; **Bold** = the most original that's still on the brief; **Wild** = the reach that might be the best film or might not work. Always show all three.
- Browse the catalog when you need to: `story.mjs devices [--family metaphor] [--fits devtool] [--q "receipt"]`, `story.mjs devices --id A5`, `story.mjs cliche`.

## 3. Write the pitches

Fuse each device with its `fuse_with` material (or better material from the sheet): *device × native form* ("a museum of the review queue", "the pull request as a receipt", "an outage told backwards"). Then write:

- **Title**: 2-4 words.
- **Logline**: 12 words at most; the party retell ("It's the one where…") without those words.
- **Beats**: 4-7 timed beats in the device's grammar. Every beat has `on_screen` (the only words the viewer reads, 7 or fewer) and `visual`. Mark the turn with `"turn": true`; it lands at **60-75%** of the running time.
- **Three sketch frames**: the opening (seconds 0-2, the most striking image), the turn, and the close. `check` returns them as `sketch_frames` (beat, time, caption); draw exactly those.
- **Where the features live**: each must-show feature proves itself inside a beat (an exhibit, a chain link, a game level), never as a list.
- **Signature image** (the poster frame) and **last line** (could stand alone as a GIF or a tweet).
- **The hostile second reading** ("what else could this metaphor say about us?"). Apple's iPad "Crush" read as "tech destroys artists"; kill a metaphor like that before the user sees it.

### Pitch JSON

`$RUN/story/pitches.json` is `{ "pitches": [ …three pitches… ] }` (a single pitch object or a bare array also works):

```jsonc
{
  "id": "unmerged",
  "label": "Bold",                                  // Sure | Bold | Wild, from pick
  "title": "Unmerged",
  "logline": "A 2 am outage rewinds to the one line nobody read.",   // <= 12 words
  "device": "rewind",                               // a device id or code; an array for a combination (first is primary)
  "twist": "",                                      // required when the device is overused: what makes it not the default
  "beats": [
    { "name": "The pager", "on_screen": "02:14 · checkout-api down", "visual": "…", "duration_s": 4 },
    { "name": "Lintel reads it", "on_screen": "Lintel suggested a change", "visual": "…", "duration_s": 6, "turn": true },
    { "name": "…", "on_screen": "…", "visual": "…", "duration_s": 7, "maps_to": "cta" }   // optional: a default beat you know it is
  ],
  "first_4s": "What seconds 0-4 show, in one line",
  "clear_by_s4": true,                              // self-assessed: does the device read by second 4?
  "swap_test": { "competitor": "CodeRabbit", "result": "breaks", "why": "the image or line that breaks" },
  "grounded_claims": [ { "claim": "…", "source": "truth sheet, Proof" } ],   // every claim or number shown as fact
  "props": ["line 212"],                            // numbers that are story details, not claims
  "ui_labels": ["LGTM", "Apply suggestion"],        // UI words shown; must be in the truth sheet's Native words
  "honest_demo": true,                              // only real capabilities are shown
  "form_proves_claim": false,                       // true when the form itself demonstrates the claim (+1 originality)
  "signature_image": "…", "last_line": "…",
  "visual_motifs": ["…"],                           // scanned for visual clichés
  "build": { "hardest_shot": "…", "how": "…", "needs_live_action": false },
  "critique": { "retell": "…", "first_4s": "…", "turn": "…", "own_material": "…", "swap": "…",
                "second_reading": "…", "default_beats": "…", "hardest_shot": "…" },
  "scores": { "originality": 4, "clarity": 4, "fit": 5, "memorability": 4, "feasibility": 5 }   // self-assessed, 1-5
}
```

## 4. Check, then rewrite

```bash
node $SKILL_DIR/scripts/story.mjs check --pitch "$RUN/story/pitches.json" --truth "$RUN/story/truth.md"
```

Exit 0 = ship; 2 = rewrite (reasons in the JSON); 1 = the pitch JSON is malformed. The five gates (fail any and the pitch is rewritten):

| Gate | Machine-checked | Self-assessed |
|---|---|---|
| **G1 Distance from the cliché arc** | Maps each beat to the 8 default beats; fails at 4+ in default order, 3 feature beats in a row, a stock opener ("Meet X", "Introducing X", "What if…?", "Tired of…?"), 2+ visual clichés, or a logo in the first beat | `maps_to` per beat |
| **G2 Swap test** | Returns the swap prompt; with `--truth`, fails if no beat uses the product's own objects, formats or words | `swap_test.result` ("breaks" / "survives") and `why` |
| **G3 Clear by second 4** | A beat must start before 4 s, and no logo or title card may take up seconds 0-4 | `first_4s`, `clear_by_s4` |
| **G4 Honest demo** | Every number on screen must appear in `grounded_claims` or the truth sheet (with its unit), or be declared a story detail in `props`; claims need a source; `ui_labels` must be in Native words | `honest_demo` |
| **G5 Buildable** | Fails on live action or footage-only devices without footage, or a device rated 2/5 or lower | `build.hardest_shot` |

Then the **weighted score**: originality 25%, clarity 20%, fit 20%, memorability 20%, feasibility 15%. Claude scores itself honestly; `check` then adjusts: -2 originality for an overused device without a twist, +1 when the form proves the claim, -1 fit per visual cliché, -1 memorability with no marked turn, originality capped at 3 when 3 default beats appear in order, feasibility capped at the device's build score + 1, clarity capped at 2 when G3 fails. **Ship at 3.8 or more with no dimension below 3.** For a set of three it also checks the portfolio: different families, protagonists and visual worlds, at least 5 axes apart, no shared signature image, one pitch at 4+ originality and one at 4+ feasibility.

**To rewrite**, push in this order: a more specific artifact from the truth sheet → a sharper turn → a stricter constraint. Two rewrites at most; then replace the device with another from `pick` (`--exclude` the failed one) that keeps the set's distances.

## Principles

1. **One idea, one sentence.** If the logline needs "and", it's two ideas.
2. **Borrow a container the viewer already reads.** A search log, an auction, a weather report, a receipt or a manual give instant clarity (the grammar is known) and surprise (the grammar is misused).
3. **Build from the product's own material:** its UI, data, output, name, sounds, artifacts. Google told a love story with nothing but its search box; Spotify wrote billboards from its own listening data.
4. **The swap test.** Put a competitor's name in. If the film still works, it fails.
5. **Specific beats general.** "SQ *BLUEBTL 4.75", not "a purchase". Numbers, names, times, the product's own objects.
6. **Tension before relief.** Something is at stake; the product resolves it, it doesn't decorate a problem slide.
7. **The turn at 60-75%:** a reveal, reversal, list-break, POV swap, escalation that collapses, or a line that reframes everything. The cliché arc has none. Every pitch names its turn.
8. **One feature as a weapon, not three as a list.** If three must show, they live inside the device (three exhibits, three chain links, three levels).
9. **The film can be the proof.** When the form demonstrates the claim (precision shown by precise choreography, speed by an uncut real-time take), say so: `form_proves_claim`.
10. **One rule, held.** One metaphor, one color, no cuts, reverse only. A strict rule is memorable and makes code-built motion look intentional.
11. **Clear by second 4.** The viewer grasps the *device* (not necessarily the product) in about 4 seconds: "oh, it's a weather report".
12. **Grounding: never invent claims, numbers or UI labels.** Stylize, compress and abstract, but show only real capabilities, only sourced numbers, only UI words copied from the product. A demo that lies is worse than none (Humane's launch film got facts wrong on camera).
13. **Check the second reading.** Ask what else the metaphor could say about the brand, and drop it if the answer hurts.
14. **Craft rescues the standard arc only for loved brands.** Linear or Raycast can run hook → features → CTA because taste is the message. A new product needs a concept. A "craft-forward standard arc" can be the Sure option on request, never the default.

## Avoid

**LLM-overused devices** (penalized unless the pitch names a twist that *is* the idea): a day in the life at 100x, before/after (and its subtype chaos → calm), the cosmos-to-cursor zoom with a glowing globe, the product as a friendly-blob mascot, the fake iMessage thread, the "In a world…" trailer, and, for AI products, a prompt typing itself into a glowing input box.

**Visual clichés** (-1 fit each; two fail G1): glowing orbs or brains, particle networks, blue-purple gradients, the sparkles icon, holographic UI panels, isometric floating cards, "the future is here" copy ("revolutionize", "seamless", "supercharge"), stock handshakes and smiling teams, three feature cards sliding in, a dashboard floating in a void at a 30° tilt, confetti CTAs, the glowing globe, lens flares and bokeh.

**Stock openers**: "Meet X", "Introducing X", "What if…?", "Tired of…?", "Imagine…", "The future of ___ is here", "Say goodbye to…", "Did you know…".

## Taking feedback

Feedback arrives as a console `note`. Answer it with `console.mjs reply`, change the pitches, re-run `check`, and re-push `concept`.

- **"More like B"**: keep B's device and write three variants of it that differ on the axes a pitch *can* move (tone, turn, the native material, the protagonist inside the device). For fresh neighbours, run `pick --like <B's device> --exclude <A's and C's devices>`.
- **"Mix A and C"**: take one pitch's device (the structure) and the other's tone, visual world or native material. The structure wins when they conflict; say which you kept. Check it as a single pitch with `device: [primaryId, secondaryId]`.
- **"Too jokey" / "too serious" / "too weird"**: that's a tone or ambition reason. Re-pick with `--tone <new tone>` and `--exclude` the rejected devices, keeping any pitch they liked.
- **"Make it simpler / shorter"**: cut to the device's minimum beats, keep the turn; or move it toward a constraint device (a 5-second film, one shape, one number).
- **"None of these"**: ask what they're picturing (one console question), then `pick` with a new seed and `--exclude` all three.
- **Record** what they chose: `memory.mjs record --step concept --value "<title> (<device id>)"`, so the next "you decide" can pass the device ids to `pick --recent` and never repeat them.
