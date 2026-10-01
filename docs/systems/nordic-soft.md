---
name: "Nordic soft"
description: "Flat fog-blue, oat and moss tiles in a calm grid, no shadows, thin line icons, a friendly sans, tidy slides."
colors:
  canvas: "#eef0ec"        # page ground
  ink: "#23282b"           # headlines and body text
  accent: "#9fb4c4"        # primary accent: the one thing that matters in each frame
  support: "#b9c29f"       # supporting colour, used sparingly
  surface: "#e3ddd1"       # raised cards and panels
  muted: "#7c8386"         # muted captions
typography:
  display:
    fontFamily: Nunito Sans
    fontWeight: 800
  body:
    fontFamily: Nunito Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Nordic soft

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as hygge, Scandi minimal, Scandinavian design, fog and oat.

## Overview

Flat fog-blue, oat and moss tiles in a calm grid, no shadows, thin line icons, a friendly sans, tidy slides.

It feels cosy, honest, tidy. Use it for furniture and interiors, public services, banking apps, family and parenting brands.

## Visual language

- **Type:** Nunito Sans (display, weight 800, tracking -0.02em) with Nunito Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 20px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Warm Minimalism
- **Composition / layout system:** Bento Grid, Modular Grid
- **Color treatment:** Muted, Cool Palette
- **Typography:** Rounded Sans, Humanist Sans
- **Iconography:** Line Icons
- **Shadow / depth cues:** No Shadow
- **Emotional / brand tone:** Calm, Friendly
- **Motion language:** Smooth
- **Transition language:** Slide, Push

## Do's and Don'ts

- Do keep the accent (#9fb4c4) for the single most important element in each frame.
- Do use Nunito Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not warm minimalism: cooler and flatter, a tidy grid of muted tiles and a sans voice rather than serif and terracotta.

## References

- Search: "scandinavian minimal motion graphics"
- Search: "hygge brand animation"
- Search: "nordic design UI video"
