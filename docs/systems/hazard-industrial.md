---
name: "Industrial hazard"
description: "Safety yellow and black, stencil-condensed capitals, double-ruled boxes, crosshair marks and data readouts like factory signage."
colors:
  canvas: "#ffcc00"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#111111"        # primary accent: the one thing that matters in each frame
  support: "#e0480f"       # supporting colour, used sparingly
  surface: "#ffe066"       # raised cards and panels
  muted: "#5c4a00"         # muted captions
typography:
  display:
    fontFamily: Saira Stencil One
    fontWeight: 400
  body:
    fontFamily: Barlow Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Industrial hazard

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as caution graphics, safety-stripe aesthetic, industrial signage, warning label design.

## Overview

Safety yellow and black, stencil-condensed capitals, double-ruled boxes, crosshair marks and data readouts like factory signage.

It feels urgent, rugged, utilitarian, tough. Use it for hardware and logistics, security products, sports and energy drinks, warnings and outages.

## Visual language

- **Type:** Saira Stencil One (display, weight 400, uppercase, tracking 0.02em) with Barlow Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 6px double in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** crosshair.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Brutalism, Technical Minimalism
- **Color treatment:** High Contrast, Limited Palette
- **Typography:** Condensed, Slab Serif
- **Line / stroke language:** Heavy, Double-Line
- **Texture:** Scratches
- **Information / data visualization:** Number Counter, Status Indicator
- **Motion language:** Heavy
- **Transition language:** Wipe, Hard Cut

## Do's and Don'ts

- Do keep the accent (#111111) for the single most important element in each frame.
- Do use Saira Stencil One large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sci-fi HUD: it is printed industrial signage, flat and heavy, not glowing screens.

## References

- Search: "industrial hazard graphic design motion"
- Search: "caution tape typography animation"
- Search: "safety yellow black design"
