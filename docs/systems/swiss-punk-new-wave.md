---
name: "Swiss punk (New Wave)"
description: "Swiss grid broken apart: layered tilted slabs, halftone dot fields, mixed weights and rules colliding in black, orange and grey."
colors:
  canvas: "#dcdad4"        # page ground
  ink: "#101010"           # headlines and body text
  accent: "#ff5a1f"        # primary accent: the one thing that matters in each frame
  support: "#8f8f8f"       # supporting colour, used sparingly
  surface: "#f7f6f2"       # raised cards and panels
  muted: "#555555"         # muted captions
typography:
  display:
    fontFamily: Epilogue
    fontWeight: 900
  body:
    fontFamily: Epilogue
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Swiss punk (New Wave)

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as New Wave typography, Weingart style, Swiss punk, post-modern typography.

## Overview

Swiss grid broken apart: layered tilted slabs, halftone dot fields, mixed weights and rules colliding in black, orange and grey.

It feels experimental, rebellious, intellectual, kinetic. Use it for design conferences, art-school brands, music and culture, experimental titles.

## Visual language

- **Type:** Epilogue (display, weight 900, lowercase, tracking -0.04em) with Epilogue for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** dots. **Icons:** glyph. **Decoration:** rules.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style, Mixed-Media Collage
- **Typography:** Grotesk, Extended
- **Composition / layout system:** Collage Composition, Layered Depth, Asymmetric Composition
- **Texture:** Halftone, Print Grain
- **Color treatment:** Limited Palette
- **Line / stroke language:** No Outlines
- **Motion language:** Rhythmic
- **Transition language:** Slide, Graphic Match

## Do's and Don'ts

- Do keep the accent (#ff5a1f) for the single most important element in each frame.
- Do use Epilogue large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss International: same grotesk, but the grid is deliberately broken, layered and textured.

## References

- Search: "Wolfgang Weingart motion"
- Search: "Swiss punk typography animation"
- Search: "new wave typography poster motion"
