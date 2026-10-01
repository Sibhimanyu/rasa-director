---
name: "Topographic survey map"
description: "A survey quad: brown contour lines, woodland-green land tint, blue water, a red trail between pins, compass, scale bar and fine sans lettering."
colors:
  canvas: "#d4e5ea"        # page ground
  ink: "#3a2a1c"           # headlines and body text
  accent: "#b8412a"        # primary accent: the one thing that matters in each frame
  support: "#3a7fb4"       # supporting colour, used sparingly
  surface: "#dbe7c4"       # raised cards and panels
  muted: "#7b6a55"         # muted captions
typography:
  display:
    fontFamily: Archivo Narrow
    fontWeight: 700
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Topographic survey map

A motion-graphics design system from RasanAI's style library (Science). Also known as topo map, USGS quad, contour map, survey sheet, Ordnance Survey style.

## Overview

A survey quad: brown contour lines, woodland-green land tint, blue water, a red trail between pins, compass, scale bar and fine sans lettering.

It feels grounded, exploratory, precise. Use it for outdoor and travel brands, field research stories, site and land explainers, expedition films.

## Visual language

- **Type:** Archivo Narrow (display, weight 700, uppercase, tracking 0.03em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines 2px solid in #8a5a32.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** none. **Decoration:** contours.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **Information / data visualization:** Map
- **Format / purpose:** Map Animation
- **Camera language:** Top-Down
- **Color treatment:** Earth Tones
- **Line / stroke language:** Thin, Technical
- **Texture:** Paper Grain
- **Motion function:** Show Location
- **Motion language:** Smooth
- **Transition language:** Line-Draw Transition, Zoom Transition
- **Emotional / brand tone:** Technical, Calm

## Do's and Don'ts

- Do keep the accent (#b8412a) for the single most important element in each frame.
- Do use Archivo Narrow large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a map explainer: a surveyor's sheet with contours, land tints and a scale bar, not bold news markers on a dot grid.

## References

- Search: "topographic map animation"
- Search: "contour lines motion graphics"
- Search: "USGS topo map style video"
