---
name: "Highway guide sign"
description: "A reflective green panel with a white border and rounded corners, Highway Gothic–style lettering and a route marker over dusk asphalt."
colors:
  canvas: "#2a2d31"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#0d8a58"        # primary accent: the one thing that matters in each frame
  support: "#ffcc00"       # supporting colour, used sparingly
  surface: "#00673f"       # raised cards and panels
  muted: "#b9c2bd"         # muted captions
typography:
  display:
    fontFamily: Overpass
    fontWeight: 700
  body:
    fontFamily: Overpass
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Highway guide sign

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as interstate sign, freeway signage, Highway Gothic, motorway sign, green guide sign.

## Overview

A reflective green panel with a white border and rounded corners, Highway Gothic–style lettering and a route marker over dusk asphalt.

It feels direct, American, on the move. Use it for road-trip and travel films, automotive, chapter cards, direction and milestone moments.

## Visual language

- **Type:** Overpass (display, weight 700, tracking 0em) with Overpass for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 22px; outlines 6px solid in #ffffff.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Modernist
- **Typography:** Condensed, Neutral Sans Serif
- **Composition / layout system:** Centered Hero Composition, Poster Composition
- **Color treatment:** Limited Palette, High Contrast
- **Shape language:** Rounded, Rectilinear
- **Line / stroke language:** Medium
- **Material / surface language:** Metal
- **Motion language:** Smooth
- **Transition language:** Push, Slide
- **Emotional / brand tone:** Confident, Optimistic

## Do's and Don'ts

- Do keep the accent (#0d8a58) for the single most important element in each frame.
- Do use Overpass large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not enamel street signs: a big retroreflective road panel read at speed, green and white, with a route marker instead of a plaque.

## References

- Search: "highway sign animation"
- Search: "interstate sign motion graphics"
- Search: "freeway sign title card"
