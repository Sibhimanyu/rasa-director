---
name: "Black and gold"
description: "Near-black panels hairlined and haloed in warm gold, engraved wide-tracked capitals, a gold ornament, film grain, slow fades."
colors:
  canvas: "#0d0c0a"        # page ground
  ink: "#f2e8d5"           # headlines and body text
  accent: "#c9a45c"        # primary accent: the one thing that matters in each frame
  support: "#8a6d3b"       # supporting colour, used sparingly
  surface: "#1a1814"       # raised cards and panels
  muted: "#8f8676"         # muted captions
typography:
  display:
    fontFamily: Cinzel
    fontWeight: 500
  body:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
shadows:
  card: "0 0 24px #c9a45c"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Black and gold

A motion-graphics design system from RasanAI's style library (Luxury & restrained). Also known as noir gold, gold on black, gala luxury, premium dark gold.

## Overview

Near-black panels hairlined and haloed in warm gold, engraved wide-tracked capitals, a gold ornament, film grain, slow fades.

It feels opulent, formal, exclusive. Use it for award shows and galas, premium product teasers, whisky and spirits, VIP event openers.

## Visual language

- **Type:** Cinzel (display, weight 500, uppercase, tracking 0.14em) with Cormorant Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines 1px solid in accent.
- **Depth:** glow shadows (`0 0 24px #c9a45c`).
- **Texture:** grain. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Cinematic
- **Color treatment:** Dark UI, Limited Palette
- **Typography:** High-Contrast Serif, Extended
- **Texture:** Film Grain
- **Composition / layout system:** Floating Cards, Negative-Space Composition
- **Emotional / brand tone:** Luxurious, Premium, Dramatic
- **Motion language:** Luxurious / Slow
- **Transition language:** Fade, Light Wipe

## Do's and Don'ts

- Do keep the accent (#c9a45c) for the single most important element in each frame.
- Do use Cinzel large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a film title sequence: gold frames and panels carry the brand, not just credits floating on black.

## References

- Search: "black and gold title animation"
- Search: "luxury gold text reveal"
- Search: "gala opener motion graphics"
