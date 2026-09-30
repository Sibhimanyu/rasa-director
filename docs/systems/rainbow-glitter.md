---
name: "Rainbow glitter"
description: "Hot pink ground, rainbow-washed cards with violet glow, swoopy script headline, glitter grain and sparkle stars everywhere."
colors:
  canvas: "#ff4fb8"        # page ground
  ink: "#2a0040"           # headlines and body text
  accent: "#8a3cff"        # primary accent: the one thing that matters in each frame
  support: "#00d9ff"       # supporting colour, used sparingly
  surface: "#fff2fb"       # raised cards and panels
  muted: "#6a1f5a"         # muted captions
typography:
  display:
    fontFamily: Pacifico
    fontWeight: 400
  body:
    fontFamily: Quicksand
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 26px
shadows:
  card: "0 0 24px #8a3cff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Rainbow glitter

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as Lisa Frank style, 90s sparkle, glitter pop, trapper-keeper rainbow.

## Overview

Hot pink ground, rainbow-washed cards with violet glow, swoopy script headline, glitter grain and sparkle stars everywhere.

It feels sparkly, nostalgic, over-the-top, sweet. Use it for beauty and fashion drops, kids and tween brands, birthday and party content, nostalgia campaigns.

## Visual language

- **Type:** Pacifico (display, weight 400, tracking 0em) with Quicksand for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 26px; outlines none.
- **Depth:** glow shadows (`0 0 24px #8a3cff`).
- **Texture:** noise. **Icons:** glyph. **Decoration:** stars.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Psychedelic, Kawaii
- **Era / design-movement influence:** 1990s
- **Color treatment:** High Saturation, Gradient
- **Typography:** Handwritten / Script, Display Typography
- **VFX / compositing treatment:** Glow, Particles
- **Texture:** Digital Noise
- **Shadow / depth cues:** Glow Instead of Shadow
- **Motion language:** Floating
- **Transition language:** Dissolve, Light Wipe

## Do's and Don'ts

- Do keep the accent (#8a3cff) for the single most important element in each frame.
- Do use Pacifico large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not kawaii: rainbow glitter is saturated and maximal, glowing and sparkly, not soft pastel understatement.

## References

- Search: "Lisa Frank style animation"
- Search: "rainbow glitter motion graphics"
- Search: "90s sparkle pop title"
