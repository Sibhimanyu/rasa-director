// Copied from skills/rasanai/personalities/*.json (the 10 motion personalities the tasting menu plays).
window.RASA_PERSONALITIES = {
 "brutalist-step": {
  "id": "brutalist-step",
  "name": "Brutalist Step",
  "oneLiner": "No easing at all. Hard cuts, stepped jumps, jitter. Raw and loud.",
  "feel": [
   "raw",
   "loud",
   "anti-design"
  ],
  "median_likelihood": 0.05,
  "tempo": {
   "scale_ms": [
    100,
    160,
    250,
    400,
    600
   ]
  },
  "easing": {
   "enter": "steps(4)",
   "exit": "steps(3)",
   "move": "steps(6)"
  },
  "stagger": {
   "each_ms": 60
  },
  "holds": {
   "min_ms": 500
  },
  "entrances": [
   "hard-cut"
  ],
  "exits": [
   "hard-cut-out"
  ],
  "transitions": [
   "hard-cut",
   "jitter-cut"
  ],
  "banned": [
   "fade-up-slide",
   "fade-slide",
   "blur-in",
   "bounce",
   "overshoot",
   "opacity-only-entrance"
  ],
  "demo": {
   "split": "words",
   "enter": "hard-cut",
   "move": "jitter",
   "exit": "hard-cut-out",
   "enter_ms": 250,
   "move_ms": 400,
   "exit_ms": 160,
   "hold_ms": 500
  },
  "builder_notes": "Nothing interpolates smoothly: use steps(N) eases or zero-duration tl.set() cuts on the timeline (never on a .clip element). Words appear on the frame, offset in x on stepped jitters, then snap to place. Mis-registration and inversion (swap ink/background for 2-3 frames) are welcome. Exits are instant cuts."
 },
 "cinematic-slow": {
  "id": "cinematic-slow",
  "name": "Cinematic Slow",
  "oneLiner": "Out-of-focus to razor sharp, slow push-ins, long breathing holds. Trailer energy.",
  "feel": [
   "cinematic",
   "dramatic",
   "premium"
  ],
  "median_likelihood": 0.24,
  "tempo": {
   "scale_ms": [
    400,
    700,
    1100,
    1600,
    2400
   ]
  },
  "easing": {
   "enter": "power2.out",
   "exit": "power2.inOut",
   "move": "sine.inOut"
  },
  "stagger": {
   "each_ms": 160
  },
  "holds": {
   "min_ms": 1400
  },
  "entrances": [
   "blur-focus"
  ],
  "exits": [
   "blur-out"
  ],
  "transitions": [
   "slow-dissolve",
   "push-in"
  ],
  "banned": [
   "fade-up-slide",
   "bounce",
   "overshoot",
   "scale-pop",
   "linear-entrance"
  ],
  "demo": {
   "split": "words",
   "enter": "blur-focus",
   "move": "slow-push",
   "exit": "blur-out",
   "enter_ms": 1600,
   "move_ms": 2400,
   "exit_ms": 1100,
   "hold_ms": 1400
  },
  "builder_notes": "Elements resolve from blur(16-24px) and scale 1.08 down to 1 while opacity rises, with slightly widened tracking settling in. The camera never stops: a slow scale push (1 -> 1.04) runs under the hold. Exits dissolve back into blur. Nothing snaps."
 },
 "editorial-mask": {
  "id": "editorial-mask",
  "name": "Editorial Mask",
  "oneLiner": "Lines wipe on like ink across paper, an accent rule sweeps under the key word. Magazine calm.",
  "feel": [
   "editorial",
   "literary",
   "considered"
  ],
  "median_likelihood": 0.12,
  "tempo": {
   "scale_ms": [
    250,
    450,
    700,
    1000,
    1400
   ]
  },
  "easing": {
   "enter": "expo.out",
   "exit": "power2.in",
   "move": "expo.inOut"
  },
  "stagger": {
   "each_ms": 120
  },
  "holds": {
   "min_ms": 1000
  },
  "entrances": [
   "mask-wipe"
  ],
  "exits": [
   "mask-wipe-out"
  ],
  "transitions": [
   "mask-push",
   "hard-cut"
  ],
  "banned": [
   "fade-up-slide",
   "fade-slide",
   "bounce",
   "overshoot",
   "scale-pop",
   "blur-in"
  ],
  "demo": {
   "split": "lines",
   "enter": "mask-wipe",
   "move": "underline-sweep",
   "exit": "mask-wipe-out",
   "enter_ms": 1000,
   "move_ms": 700,
   "exit_ms": 450,
   "hold_ms": 1000
  },
  "builder_notes": "Reveal with clip-path inset wipes (left to right) per line, never fades. Emphasis is a thin accent rule sweeping under the key word (scaleX 0 -> 1 from left). Exits wipe off in the same direction. Generous margins; motion is a page being set."
 },
 "elastic-playful": {
  "id": "elastic-playful",
  "name": "Elastic Playful",
  "oneLiner": "Letters pop and squash with springy overshoot. Toy-like, cheeky, alive.",
  "feel": [
   "playful",
   "friendly",
   "energetic"
  ],
  "median_likelihood": 0.14,
  "tempo": {
   "scale_ms": [
    180,
    300,
    500,
    800,
    1200
   ]
  },
  "easing": {
   "enter": "back.out(1.8)",
   "exit": "back.in(1.4)",
   "move": "elastic.out(1,0.5)"
  },
  "stagger": {
   "each_ms": 40
  },
  "holds": {
   "min_ms": 600
  },
  "entrances": [
   "char-pop"
  ],
  "exits": [
   "char-shrink"
  ],
  "transitions": [
   "squash-push"
  ],
  "banned": [
   "fade-up-slide",
   "linear-entrance",
   "blur-in",
   "opacity-only-entrance"
  ],
  "demo": {
   "split": "chars",
   "enter": "char-pop",
   "move": "squash",
   "exit": "char-shrink",
   "enter_ms": 500,
   "move_ms": 800,
   "exit_ms": 300,
   "hold_ms": 600
  },
  "builder_notes": "Characters or elements scale up from 0 with a small rotation and overshoot (back.out). Emphasis moves squash-and-stretch (scaleX/scaleY opposite) with elastic settle. Exits shrink back with back.in. Keep it tight: short durations, small stagger."
 },
 "kinetic-punch": {
  "id": "kinetic-punch",
  "name": "Kinetic Punch",
  "oneLiner": "Words slam in oversized and hit the frame. Short, percussive, beat-driven.",
  "feel": [
   "punchy",
   "urgent",
   "sporty"
  ],
  "median_likelihood": 0.17,
  "tempo": {
   "scale_ms": [
    120,
    200,
    320,
    500,
    800
   ]
  },
  "easing": {
   "enter": "power4.out",
   "exit": "power4.in",
   "move": "expo.out"
  },
  "stagger": {
   "each_ms": 90
  },
  "holds": {
   "min_ms": 450
  },
  "entrances": [
   "word-slam"
  ],
  "exits": [
   "punch-out"
  ],
  "transitions": [
   "hard-cut",
   "zoom-punch"
  ],
  "banned": [
   "fade-up-slide",
   "linear-entrance",
   "blur-in",
   "bounce"
  ],
  "demo": {
   "split": "words",
   "enter": "word-slam",
   "move": "shake",
   "exit": "punch-out",
   "enter_ms": 200,
   "move_ms": 320,
   "exit_ms": 200,
   "hold_ms": 450
  },
  "builder_notes": "Each word arrives oversized (scale 1.8-2.4 -> 1) in 120-200ms, one per beat, with a tiny camera shake on impact. Holds are short. Exits punch forward (scale up, opacity out) fast. Everything lands on a beat grid."
 },
 "liquid-morph": {
  "id": "liquid-morph",
  "name": "Liquid Morph",
  "oneLiner": "Letters pour up from a baseline and ripple like fluid. Smooth, organic, hypnotic.",
  "feel": [
   "fluid",
   "organic",
   "hypnotic"
  ],
  "median_likelihood": 0.06,
  "tempo": {
   "scale_ms": [
    300,
    500,
    800,
    1200,
    1800
   ]
  },
  "easing": {
   "enter": "power4.inOut",
   "exit": "power4.inOut",
   "move": "sine.inOut"
  },
  "stagger": {
   "each_ms": 30
  },
  "holds": {
   "min_ms": 800
  },
  "entrances": [
   "liquid-rise"
  ],
  "exits": [
   "liquid-drain"
  ],
  "transitions": [
   "ripple-wipe"
  ],
  "banned": [
   "fade-up-slide",
   "linear-entrance",
   "bounce",
   "blur-in"
  ],
  "demo": {
   "split": "chars",
   "enter": "liquid-rise",
   "move": "wave",
   "exit": "liquid-drain",
   "enter_ms": 1200,
   "move_ms": 1800,
   "exit_ms": 800,
   "hold_ms": 800
  },
  "builder_notes": "Characters grow from the baseline (scaleY 0 -> 1, transform-origin bottom) with skew that relaxes to 0, staggered tightly so the line pours. Holds keep a slow sine wave travelling through the letters. Exits drain back into the baseline."
 },
 "luxe-minimal": {
  "id": "luxe-minimal",
  "name": "Luxe Minimal",
  "oneLiner": "A slow reveal opens from the centre, a hairline draws, then stillness. Expensive restraint.",
  "feel": [
   "luxury",
   "restrained",
   "quiet"
  ],
  "median_likelihood": 0.1,
  "tempo": {
   "scale_ms": [
    600,
    900,
    1400,
    2000,
    2800
   ]
  },
  "easing": {
   "enter": "circ.out",
   "exit": "circ.in",
   "move": "power1.inOut"
  },
  "stagger": {
   "each_ms": 200
  },
  "holds": {
   "min_ms": 1800
  },
  "entrances": [
   "center-reveal"
  ],
  "exits": [
   "center-close"
  ],
  "transitions": [
   "center-wipe",
   "long-hold-cut"
  ],
  "banned": [
   "fade-up-slide",
   "fade-slide",
   "bounce",
   "overshoot",
   "scale-pop",
   "linear-entrance",
   "blur-in"
  ],
  "demo": {
   "split": "lines",
   "enter": "center-reveal",
   "move": "hairline",
   "exit": "center-close",
   "enter_ms": 2000,
   "move_ms": 1400,
   "exit_ms": 900,
   "hold_ms": 1800
  },
  "builder_notes": "Reveals open symmetrically from the centre (clip-path inset 0 50% -> 0 0%) with an almost imperceptible scale settle (0.985 -> 1). A single hairline rule draws out from the centre. Holds are long and completely still. Fewer moves than you think."
 },
 "retro-terminal": {
  "id": "retro-terminal",
  "name": "Retro Terminal",
  "oneLiner": "Typed out character by character with a blinking cursor. Hacker-console nostalgia.",
  "feel": [
   "technical",
   "nostalgic",
   "nerdy"
  ],
  "median_likelihood": 0.08,
  "tempo": {
   "scale_ms": [
    80,
    150,
    300,
    500,
    900
   ]
  },
  "easing": {
   "enter": "none",
   "exit": "steps(4)",
   "move": "steps(2)"
  },
  "stagger": {
   "each_ms": 45
  },
  "holds": {
   "min_ms": 900
  },
  "entrances": [
   "typewriter"
  ],
  "exits": [
   "backspace"
  ],
  "transitions": [
   "hard-cut",
   "scanline-wipe"
  ],
  "banned": [
   "fade-up-slide",
   "fade-slide",
   "blur-in",
   "bounce",
   "overshoot",
   "scale-pop"
  ],
  "demo": {
   "split": "chars",
   "enter": "typewriter",
   "move": "cursor-blink",
   "exit": "backspace",
   "enter_ms": 900,
   "move_ms": 500,
   "exit_ms": 500,
   "hold_ms": 900
  },
  "builder_notes": "Characters appear one at a time (zero-duration tl.set of visibility per character at a fixed interval, on the timeline, never on a .clip element) behind a block cursor. The cursor blinks on steps during holds. Exits backspace right to left. Monospace chrome, no smooth tweens on type at all."
 },
 "soft-drift": {
  "id": "soft-drift",
  "name": "Soft Drift",
  "oneLiner": "Tracking breathes open and closed, nothing hurries. Calm, airy, wellness-quiet.",
  "feel": [
   "calm",
   "airy",
   "gentle"
  ],
  "median_likelihood": 0.2,
  "tempo": {
   "scale_ms": [
    500,
    800,
    1200,
    1800,
    2600
   ]
  },
  "easing": {
   "enter": "sine.out",
   "exit": "sine.in",
   "move": "sine.inOut"
  },
  "stagger": {
   "each_ms": 70
  },
  "holds": {
   "min_ms": 1500
  },
  "entrances": [
   "drift-space"
  ],
  "exits": [
   "drift-away"
  ],
  "transitions": [
   "crossfade-slow"
  ],
  "banned": [
   "fade-up-slide",
   "bounce",
   "overshoot",
   "scale-pop",
   "linear-entrance"
  ],
  "demo": {
   "split": "lines",
   "enter": "drift-space",
   "move": "breathe",
   "exit": "drift-away",
   "enter_ms": 1800,
   "move_ms": 2600,
   "exit_ms": 1200,
   "hold_ms": 1500
  },
  "builder_notes": "Entrances settle letter-spacing from very wide to natural while opacity rises and a hair of rotation relaxes; no vertical travel. Holds breathe (scale 1 -> 1.015 and back). Exits let tracking drift open as it fades. Long, soft, never snappy."
 },
 "swiss-precise": {
  "id": "swiss-precise",
  "name": "Swiss Precise",
  "oneLiner": "Type snaps into a grid from behind masks. Fast in, long confident holds, no decoration.",
  "feel": [
   "precise",
   "confident",
   "systematic"
  ],
  "median_likelihood": 0.22,
  "tempo": {
   "scale_ms": [
    200,
    300,
    450,
    700,
    1000
   ]
  },
  "easing": {
   "enter": "expo.out",
   "exit": "expo.in",
   "move": "expo.inOut"
  },
  "stagger": {
   "each_ms": 80
  },
  "holds": {
   "min_ms": 900
  },
  "entrances": [
   "clip-rise"
  ],
  "exits": [
   "clip-drop"
  ],
  "transitions": [
   "hard-cut",
   "grid-shift"
  ],
  "banned": [
   "fade-up-slide",
   "fade-slide",
   "bounce",
   "overshoot",
   "blur-in",
   "opacity-only-entrance"
  ],
  "demo": {
   "split": "lines",
   "enter": "clip-rise",
   "move": "grid-shift",
   "exit": "clip-drop",
   "enter_ms": 450,
   "move_ms": 450,
   "exit_ms": 300,
   "hold_ms": 900
  },
  "builder_notes": "Every element enters from behind an overflow-hidden mask (yPercent 100 -> 0, opacity untouched). Align everything to a strict column grid; moves are whole-block shifts to the next grid position. Exits reverse the mask. No blur, no bounce, no fades."
 }
};
