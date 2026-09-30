---
name: "Low poly"
description: "Faceted flat-shaded panels in sunset orange, amber and plum, sharp corners, hard offset facets and angular caps."
colors:
  canvas: "#2b1e4a"        # page ground
  ink: "#fff4e6"           # headlines and body text
  accent: "#ff7849"        # primary accent: the one thing that matters in each frame
  support: "#ffc53d"       # supporting colour, used sparingly
  surface: "#46307a"       # raised cards and panels
  muted: "#b6a3d8"         # muted captions
typography:
  display:
    fontFamily: Chakra Petch
    fontWeight: 700
  body:
    fontFamily: Chakra Petch
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #fff4e6"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Low poly

A motion-graphics design system from Rasa Director's style library (3D & materials). Also known as low-poly 3D, faceted 3D, polygon art, flat-shaded 3D.

## Overview

Faceted flat-shaded panels in sunset orange, amber and plum, sharp corners, hard offset facets and angular caps.

It feels crafted, geometric, adventurous. Use it for games and indie studios, travel and outdoors, education explainers, motion backgrounds.

## Visual language

- **Type:** Chakra Petch (display, weight 700, uppercase, tracking 0.02em) with Chakra Petch for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 0px; outlines none.
- **Depth:** hard shadows (`10px 10px 0 #fff4e6`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Low-Poly, Abstract Geometric
- **Illustration style:** Low-Poly 3D, Geometric Vector
- **Shape language:** Angular, Geometric
- **Depth / dimensionality:** Pseudo-3D
- **Color treatment:** Warm Palette, Analogous
- **Shadow / depth cues:** Hard Shadow
- **Typography:** Extended
- **Motion language:** Choppy / Stepped
- **Transition language:** Fragmentation, Shape Match

## Do's and Don'ts

- Do keep the accent (#ff7849) for the single most important element in each frame.
- Do use Chakra Petch large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not isometric: low poly is about visible triangles and flat shading, not a fixed 30-degree grid.

## References

- Search: "low poly animation motion graphics"
- Search: "faceted 3D landscape loop"
- Search: "low poly logo reveal"
