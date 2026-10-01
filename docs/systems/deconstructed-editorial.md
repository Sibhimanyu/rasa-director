---
name: "Deconstructed editorial"
description: "The grid breaks: condensed type overlapping and jittering, torn noise, off-kilter callouts, dirty black and a sodium-yellow hit."
colors:
  canvas: "#1a1917"        # page ground
  ink: "#ecebe4"           # headlines and body text
  accent: "#f5c400"        # primary accent: the one thing that matters in each frame
  support: "#8b8a83"       # supporting colour, used sparingly
  surface: "#2a2926"       # raised cards and panels
  muted: "#8b8a83"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Display
    fontWeight: 900
  body:
    fontFamily: Space Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Deconstructed editorial

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as grunge typography, David Carson style, Ray Gun layout, anti-grid.

## Overview

The grid breaks: condensed type overlapping and jittering, torn noise, off-kilter callouts, dirty black and a sodium-yellow hit.

It feels restless, experimental, loud. Use it for music videos, streetwear drops, festival promos, youth campaigns.

## Visual language

- **Type:** Big Shoulders Display (display, weight 900, uppercase, tracking -0.02em) with Space Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Chaotic**. Many elements moving at once in varied directions, speeds and scales, deliberately overwhelming before resolving.
- Enter `power4.out`, exit `power4.in`, move `expo.inOut`; durations 80 / 150 / 250 / 400 / 700 ms; stagger 20 ms; hold at least 350 ms.
- Never: fade-up-slide, opacity-only-entrance, blur-in.
- Preview entrance: glitch.

## The terms that define it

- **Visual style / art direction:** Grunge, Brutalism
- **Era / design-movement influence:** 1990s
- **Typography:** Condensed, Distorted Type
- **Composition / layout system:** Asymmetric Composition, Typography-Led Composition
- **Color treatment:** High Contrast, Limited Palette
- **Texture:** Digital Noise, Distressed Edges
- **VFX / compositing treatment:** Glitch, Noise
- **Motion language:** Chaotic
- **Transition language:** Glitch Transition, Hard Cut
- **Emotional / brand tone:** Experimental, Rebellious

## Do's and Don'ts

- Do keep the accent (#f5c400) for the single most important element in each frame.
- Do use Big Shoulders Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Photocopy zine: no taped scraps; the typography itself is fractured and layered on screen.

## References

- Search: "david carson typography animation"
- Search: "grunge typography motion"
- Search: "deconstructed type video"
