---
name: "Ocean depth zones"
description: "Descending through the water column: petrol-teal to abyssal navy, bathymetric contour lines, a ruled list of depth zones in Libre Franklin."
colors:
  canvas: "#061f2d"        # page ground
  ink: "#e3f1f4"           # headlines and body text
  accent: "#34b8b3"        # primary accent: the one thing that matters in each frame
  support: "#11607a"       # supporting colour, used sparingly
  surface: "#0b3243"       # raised cards and panels
  muted: "#7fa6b3"         # muted captions
typography:
  display:
    fontFamily: Libre Franklin
    fontWeight: 800
  body:
    fontFamily: Libre Franklin
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Ocean depth zones

A motion-graphics design system from Rasa Director's style library (Nature & material). Also known as bathymetric, deep sea, ocean zones, abyssal.

## Overview

Descending through the water column: petrol-teal to abyssal navy, bathymetric contour lines, a ruled list of depth zones in Libre Franklin.

It feels deep, curious, immersive. Use it for ocean and science documentaries, marine conservation, diving and travel, data stories about depth or scale.

## Visual language

- **Type:** Libre Franklin (display, weight 800, tracking -0.03em) with Libre Franklin for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** contours.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Documentary, Technical Minimalism
- **Typography:** Neo-Grotesk
- **Composition / layout system:** Editorial Grid
- **Color treatment:** Cool Palette, Dark UI
- **Information / data visualization:** Ranking List
- **Lighting:** Low-Key Lighting
- **Motion language:** Floating
- **Pacing / rhythm:** Slow
- **Transition language:** Push, Dissolve
- **Emotional / brand tone:** Intellectual, Mysterious

## Do's and Don'ts

- Do keep the accent (#34b8b3) for the single most important element in each frame.
- Do use Libre Franklin large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not data noir: no neon or dashboards; a natural-history descent where colour darkens with depth.

## References

- Search: "ocean depth infographic animation"
- Search: "deep sea zones motion graphics"
- Search: "bathymetry map style video"
