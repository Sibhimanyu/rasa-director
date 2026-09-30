---
name: "Indian truck art"
description: "Hand-painted panels in peacock blue, parrot green and marigold on crimson, double keyline borders, ornament medallions, sign-painter letters."
colors:
  canvas: "#6e0d24"        # page ground
  ink: "#fff1d0"           # headlines and body text
  accent: "#22b35e"        # primary accent: the one thing that matters in each frame
  support: "#ffb400"       # supporting colour, used sparingly
  surface: "#0b3f6b"       # raised cards and panels
  muted: "#f4b7a8"         # muted captions
typography:
  display:
    fontFamily: Yatra One
    fontWeight: 400
  body:
    fontFamily: Hind
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
shadows:
  card: "10px 10px 0 #fff1d0"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Indian truck art

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Horn OK Please, lorry art, South Asian truck art, hand-painted truck, desi kitsch.

## Overview

Hand-painted panels in peacock blue, parrot green and marigold on crimson, double keyline borders, ornament medallions, sign-painter letters.

It feels exuberant, devotional, loud, handmade. Use it for food and street brands, music and festival promos, travel and mobility, fashion drops.

## Visual language

- **Type:** Yatra One (display, weight 400, tracking 0em) with Hind for body text.
- **Surfaces:** flat fills, no gradients; corners 22px; outlines 4px double in accent2.
- **Depth:** hard shadows (`10px 10px 0 #fff1d0`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** repeat.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Pop Art
- **Color treatment:** High Saturation, Complementary
- **Typography:** Display Typography, Dimensional Type
- **Line / stroke language:** Double-Line, Heavy
- **Shadow / depth cues:** Hard Shadow
- **Composition / layout system:** Modular Grid, Symmetrical Composition
- **Texture:** Paint
- **Motion language:** Rhythmic
- **Transition language:** Hard Cut, Wipe

## Do's and Don'ts

- Do keep the accent (#22b35e) for the single most important element in each frame.
- Do use Yatra One large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not pop art: dense, ornamental South Asian sign painting with borders around everything, not comic dots and speech bubbles.

## References

- Search: "Indian truck art animation"
- Search: "Horn OK Please design"
- Search: "truck art motion graphics"
