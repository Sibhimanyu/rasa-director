---
name: "Spatial glass UI"
description: "Frosted translucent panels hover over a deep blurred colour field, soft light edges, gentle parallax depth."
colors:
  canvas: "#0e1020"        # page ground
  ink: "#f4f5ff"           # headlines and body text
  accent: "#5b8cff"        # primary accent: the one thing that matters in each frame
  support: "#ff6fb5"       # supporting colour, used sparingly
  surface: "#262a44"       # raised cards and panels
  muted: "#a3a8c7"         # muted captions
typography:
  display:
    fontFamily: DM Sans
    fontWeight: 600
  body:
    fontFamily: DM Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 32px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Spatial glass UI

A motion-graphics design system from Rasa Director's style library (Product & UI). Also known as visionOS style, spatial computing UI, floating glass panels.

## Overview

Frosted translucent panels hover over a deep blurred colour field, soft light edges, gentle parallax depth.

It feels immersive, weightless, futuristic. Use it for XR and spatial apps, OS-level features, premium product teasers.

## Visual language

- **Type:** DM Sans (display, weight 600, tracking -0.03em) with DM Sans for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 32px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Weightless**. Zero-gravity motion: objects drift at constant slow velocity and keep rotating, with no floor, no settling and no rest point.
- Enter `power1.out`, exit `power1.in`, move `none`; durations 600 / 1000 / 1600 / 2400 / 3600 ms; stagger 120 ms; hold at least 1600 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Glass
- **UI treatment:** Spatial UI, Glassmorphic UI
- **Material / surface language:** Frosted Glass
- **Depth / dimensionality:** Spatial Interface
- **Composition / layout system:** Layered Depth, Floating Cards
- **Camera language:** Parallax Camera, Dolly
- **Motion language:** Weightless
- **Transition language:** Blur Transition, Parallax Transition

## Do's and Don'ts

- Do keep the accent (#5b8cff) for the single most important element in each frame.
- Do use DM Sans large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not floating-card UI: panels are see-through glass in dark space, not opaque white cards on a pale field.

## References

- Search: "visionos ui animation"
- Search: "spatial glass panels motion"
- Search: "glassmorphism product video"
