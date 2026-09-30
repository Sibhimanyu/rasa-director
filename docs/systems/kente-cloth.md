---
name: "Kente cloth"
description: "Asante strip-woven cloth: narrow bands of gold, green, red and black set edge to edge, zigzag blocks, heavy woven texture, blocky monoline caps."
colors:
  canvas: "#e8b021"        # page ground
  ink: "#161310"           # headlines and body text
  accent: "#1f7a3c"        # primary accent: the one thing that matters in each frame
  support: "#c8352b"       # supporting colour, used sparingly
  surface: "#161310"       # raised cards and panels
  muted: "#5a3d12"         # muted captions
typography:
  display:
    fontFamily: Rubik Mono One
    fontWeight: 400
  body:
    fontFamily: Work Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Kente cloth

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as kente, Asante kente, Ewe kente, strip-woven cloth, West African textile.

## Overview

Asante strip-woven cloth: narrow bands of gold, green, red and black set edge to edge, zigzag blocks, heavy woven texture, blocky monoline caps.

It feels proud, rhythmic, celebratory. Use it for cultural festivals and heritage months, graduation and ceremony films, music and fashion launches, community campaigns.

## Visual language

- **Type:** Rubik Mono One (display, weight 400, uppercase, tracking 0.02em) with Work Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** weave. **Icons:** filled. **Decoration:** stripes.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Abstract Geometric, Handmade / Craft
- **Material / surface language:** Fabric
- **Color treatment:** High Saturation, Warm Palette
- **Shape language:** Geometric, Grid-Based
- **Composition / layout system:** Symmetrical Composition, Poster Composition
- **Texture:** Fibers
- **Typography:** Display Typography
- **Motion language:** Rhythmic
- **Transition language:** Wipe, Slide
- **Emotional / brand tone:** Bold, Energetic

## Do's and Don'ts

- Do keep the accent (#1f7a3c) for the single most important element in each frame.
- Do use Rubik Mono One large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a generic tribal print: kente is woven in narrow strips sewn side by side, so the pattern runs in bands with blocks, not an all-over printed motif.

## References

- Search: "kente cloth pattern animation"
- Search: "kente textile motion graphics"
- Search: "African woven pattern title design"
