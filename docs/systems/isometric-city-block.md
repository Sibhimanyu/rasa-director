---
name: "Isometric city block"
description: "A city-builder block in true 30° isometric: brick, concrete and glass-teal buildings outlined in ink on a tiled pavement slab with cast shadows."
colors:
  canvas: "#dde6e8"        # page ground
  ink: "#1e2428"           # headlines and body text
  accent: "#c65a3a"        # primary accent: the one thing that matters in each frame
  support: "#4f9d9a"       # supporting colour, used sparingly
  surface: "#efe9dd"       # raised cards and panels
  muted: "#66737a"         # muted captions
typography:
  display:
    fontFamily: Red Hat Display
    fontWeight: 800
  body:
    fontFamily: Red Hat Text
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Isometric city block

A motion-graphics design system from RasanAI's style library (Place & wayfinding). Also known as isometric city, city-builder style, SimCity style, isometric urban illustration.

## Overview

A city-builder block in true 30° isometric: brick, concrete and glass-teal buildings outlined in ink on a tiled pavement slab with cast shadows.

It feels busy, friendly, constructive. Use it for urban and property, smart-city and mobility, marketplaces and local services, growth stories.

## Visual language

- **Type:** Red Hat Display (display, weight 800, tracking -0.03em) with Red Hat Text for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Isometric, Corporate Flat
- **Illustration style:** Isometric Illustration, Thick-Outline Illustration
- **Depth / dimensionality:** Isometric
- **Camera language:** Isometric Camera
- **Composition / layout system:** Isometric Scene, Multi-Object Choreography
- **Color treatment:** Earth Tones, Analogous
- **Line / stroke language:** Medium, Uniform Stroke
- **Motion language:** Springy
- **Transition language:** Scale Transition, Camera Move Transition
- **Emotional / brand tone:** Friendly, Optimistic

## Do's and Don'ts

- Do keep the accent (#c65a3a) for the single most important element in each frame.
- Do use Red Hat Display large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not isometric 3D product style: an urban block of building materials and pavement, outlined like a city-builder game, not floating UI blocks.

## References

- Search: "isometric city animation"
- Search: "isometric city block illustration motion"
- Search: "city builder style explainer"
