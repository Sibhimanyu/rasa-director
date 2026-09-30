---
name: "Map explainer"
description: "Pale land on a dot-matrix field, bold red markers and crosshairs pinning places, routes drawing on between them."
colors:
  canvas: "#e8ede4"        # page ground
  ink: "#1c2a24"           # headlines and body text
  accent: "#e4572e"        # primary accent: the one thing that matters in each frame
  support: "#2e86ab"       # supporting colour, used sparingly
  surface: "#f6f8f3"       # raised cards and panels
  muted: "#6c7a70"         # muted captions
typography:
  display:
    fontFamily: Barlow Condensed
    fontWeight: 700
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Map explainer

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as animated map, geo explainer, route map.

## Overview

Pale land on a dot-matrix field, bold red markers and crosshairs pinning places, routes drawing on between them.

It feels grounded, clear, journalistic. Use it for logistics and travel, news and geopolitics, store and network rollouts.

## Visual language

- **Type:** Barlow Condensed (display, weight 700, uppercase, tracking 0.01em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines none.
- **Depth:** no shadows.
- **Texture:** dots. **Icons:** filled. **Decoration:** orbits.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Editorial
- **Information / data visualization:** Map
- **Format / purpose:** Map Animation
- **Camera language:** Top-Down, Zoom
- **Composition / layout system:** Full Bleed
- **Motion function:** Show Location
- **Typography:** Condensed
- **Motion language:** Smooth
- **Transition language:** Zoom Transition, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#e4572e) for the single most important element in each frame.
- Do use Barlow Condensed large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.

## References

- Search: "animated map explainer"
- Search: "route map motion graphics"
- Search: "dot matrix map animation"
