---
name: "Byzantine mosaic"
description: "A gold-leaf tessera ground, a deep lapis panel edged in crimson, a haloed cross ornament and solemn uncial capitals."
colors:
  canvas: "#c49a3e"        # page ground
  ink: "#161a45"           # headlines and body text
  accent: "#9e1f2c"        # primary accent: the one thing that matters in each frame
  support: "#f3e2a6"       # supporting colour, used sparingly
  surface: "#1d2466"       # raised cards and panels
  muted: "#5c4516"         # muted captions
typography:
  display:
    fontFamily: Uncial Antiqua
    fontWeight: 400
  body:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Byzantine mosaic

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Byzantine gold mosaic, Ravenna mosaic, icon painting style, gold-ground mosaic.

## Overview

A gold-leaf tessera ground, a deep lapis panel edged in crimson, a haloed cross ornament and solemn uncial capitals.

It feels sacred, radiant, ancient. Use it for history and religion documentaries, museum and heritage films, premium spirits and jewellery, choral and classical music.

## Visual language

- **Type:** Uncial Antiqua (display, weight 400, tracking 0.01em) with Cormorant Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in accent.
- **Depth:** no shadows.
- **Texture:** halftone. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Handmade / Craft
- **Material / surface language:** Ceramic, Metal
- **Texture:** Stipple, Print Grain
- **Color treatment:** Warm Palette, High Contrast
- **Composition / layout system:** Symmetrical Composition, Centered Hero Composition
- **Typography:** Display Typography, Editorial Serif
- **Motion language:** Luxurious / Slow
- **Transition language:** Dissolve, Light Wipe

## Do's and Don'ts

- Do keep the accent (#9e1f2c) for the single most important element in each frame.
- Do use Uncial Antiqua large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not art deco gold: the gold is a glittering tessera ground behind flat, frontal forms, with uncial letters, not streamlined metal.

## References

- Search: "Byzantine mosaic animation"
- Search: "Ravenna gold mosaic style"
- Search: "gold mosaic motion graphics"
