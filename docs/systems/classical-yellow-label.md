---
name: "Classical yellow label"
description: "The classical label look: bright white page, one sun-yellow cartouche block, engraved Garamond titles, programme columns and thin black rules."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#1a1a1a"           # headlines and body text
  accent: "#f6cf00"        # primary accent: the one thing that matters in each frame
  support: "#1a1a1a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6d6d6d"         # muted captions
typography:
  display:
    fontFamily: EB Garamond
    fontWeight: 500
  body:
    fontFamily: EB Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Classical yellow label

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as Deutsche Grammophon style, yellow cartouche, classical record label, concert season brochure.

## Overview

The classical label look: bright white page, one sun-yellow cartouche block, engraved Garamond titles, programme columns and thin black rules.

It feels cultured, assured, timeless. Use it for orchestra and opera seasons, classical releases, museums and galleries, premium education.

## Visual language

- **Type:** EB Garamond (display, weight 500, tracking -0.01em) with EB Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Print-Editorial
- **Typography:** Editorial Serif
- **Color treatment:** Accent-Color System, Light UI
- **Composition / layout system:** Editorial Grid, Negative-Space Composition
- **Motion language:** Luxurious / Slow
- **Pacing / rhythm:** Slow
- **Transition language:** Fade, Wipe
- **Shadow / depth cues:** No Shadow
- **Shape language:** Rectilinear
- **Emotional / brand tone:** Premium, Editorial
- **Sound + motion relationship:** Music-Led

## Do's and Don'ts

- Do keep the accent (#f6cf00) for the single most important element in each frame.
- Do use EB Garamond large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not magazine serif: one sacred colour block and restrained programme typography, not a busy spread of photos and pull quotes.

## References

- Search: "deutsche grammophon cover design"
- Search: "classical album cover typography"
- Search: "orchestra season brochure design"
