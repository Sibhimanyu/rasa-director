---
name: "Museum wall text"
description: "Vinyl-cut lettering on a pale gallery wall: a large grotesk title, one ultramarine colour field, a short text column and room numbers."
colors:
  canvas: "#e8e7e3"        # page ground
  ink: "#161616"           # headlines and body text
  accent: "#2a3cc7"        # primary accent: the one thing that matters in each frame
  support: "#c9c6bd"       # supporting colour, used sparingly
  surface: "#f3f2ee"       # raised cards and panels
  muted: "#6f6d68"         # muted captions
typography:
  display:
    fontFamily: Instrument Sans
    fontWeight: 600
  body:
    fontFamily: Instrument Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Museum wall text

A motion-graphics design system from RasanAI's style library (Place & wayfinding). Also known as gallery wall text, exhibition graphics, vinyl wall lettering, curatorial text panel.

## Overview

Vinyl-cut lettering on a pale gallery wall: a large grotesk title, one ultramarine colour field, a short text column and room numbers.

It feels curatorial, quiet, intelligent. Use it for culture and arts, brand heritage films, case studies, manifestos read slowly.

## Visual language

- **Type:** Instrument Sans (display, weight 600, tracking -0.03em) with Instrument Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Editorial, Clean Minimalism
- **Typography:** Grotesk
- **Composition / layout system:** Editorial Grid, Negative-Space Composition, Asymmetric Composition
- **Color treatment:** Limited Palette, Accent-Color System
- **Material / surface language:** Perfectly Flat
- **Motion language:** Luxurious / Slow
- **Transition language:** Fade, Wipe
- **Pacing / rhythm:** Pause-Heavy
- **Emotional / brand tone:** Intellectual, Calm, Editorial

## Do's and Don'ts

- Do keep the accent (#2a3cc7) for the single most important element in each frame.
- Do use Instrument Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not exhibition wayfinding: this is the wall itself, a curatorial text block beside one colour field, not directional sign panels.

## References

- Search: "exhibition wall text design"
- Search: "museum graphics motion"
- Search: "gallery typography animation"
