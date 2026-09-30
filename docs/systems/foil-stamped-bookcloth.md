---
name: "Foil-stamped bookcloth"
description: "Bright gold foil blocked into navy book cloth: small-cap serif title, a double-rule panel, fleurons, and a glint sweeping across."
colors:
  canvas: "#16264a"        # page ground
  ink: "#ead08c"           # headlines and body text
  accent: "#d6b264"        # primary accent: the one thing that matters in each frame
  support: "#8a6d34"       # supporting colour, used sparingly
  surface: "#1c2f59"       # raised cards and panels
  muted: "#9ba7c4"         # muted captions
typography:
  display:
    fontFamily: Playfair Display SC
    fontWeight: 700
  body:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Foil-stamped bookcloth

A motion-graphics design system from Rasa Director's style library (Print). Also known as hot foil stamping, gilt book cover, gold foil blocking, clothbound classic.

## Overview

Bright gold foil blocked into navy book cloth: small-cap serif title, a double-rule panel, fleurons, and a glint sweeping across.

It feels heritage, literary, precious, classic. Use it for publishing and book launches, heritage and anniversary films, whisky and spirits, awards and invitations.

## Visual language

- **Type:** Playfair Display SC (display, weight 700, uppercase, tracking 0.08em) with Cormorant Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px double in accent.
- **Depth:** no shadows.
- **Texture:** weave. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Luxury, Print-Editorial
- **Material / surface language:** Fabric, Metal
- **Typography:** High-Contrast Serif, Editorial Serif
- **Line / stroke language:** Double-Line, Hairline
- **Color treatment:** Limited Palette, Complementary
- **Texture:** Fibers
- **Lighting:** Specular Sweep
- **Iconography:** Glyph Icons
- **Motion language:** Luxurious / Slow
- **Transition language:** Light Wipe, Fade
- **Emotional / brand tone:** Premium, Nostalgic

## Do's and Don'ts

- Do keep the accent (#d6b264) for the single most important element in each frame.
- Do use Playfair Display SC large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not black-and-gold luxury: it is a bound book cover, gilt pressed into woven blue cloth inside a ruled panel, not glowing gold on black.

## References

- Search: "gold foil stamping animation"
- Search: "clothbound book cover reveal"
- Search: "foil blocked title motion"
