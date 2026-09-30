---
name: "Orbital space"
description: "Deep-space black, elliptical orbit paths and a single signal-orange accent; wide extended caps and slow weightless drift."
colors:
  canvas: "#03040b"        # page ground
  ink: "#f4f1e8"           # headlines and body text
  accent: "#ff6b35"        # primary accent: the one thing that matters in each frame
  support: "#7aa7ff"       # supporting colour, used sparingly
  surface: "#0f1220"       # raised cards and panels
  muted: "#8b8fa3"         # muted captions
typography:
  display:
    fontFamily: Exo 2
    fontWeight: 800
  body:
    fontFamily: Exo 2
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Orbital space

A motion-graphics design system from Rasa Director's style library (Futuristic & tech). Also known as space age, aerospace, NASA-punk, mission graphics, orbital mechanics.

## Overview

Deep-space black, elliptical orbit paths and a single signal-orange accent; wide extended caps and slow weightless drift.

It feels vast, awe-inspiring, serious. Use it for space and aerospace, deep-tech launches, science explainers, keynote openers.

## Visual language

- **Type:** Exo 2 (display, weight 800, uppercase, tracking 0.1em) with Exo 2 for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** line. **Decoration:** orbits.

## Motion

Motion language: **Weightless**. Zero-gravity motion: objects drift at constant slow velocity and keep rotating, with no floor, no settling and no rest point.
- Enter `power1.out`, exit `power1.in`, move `none`; durations 600 / 1000 / 1600 / 2400 / 3600 ms; stagger 120 ms; hold at least 1600 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Futuristic Tech, Extreme Minimalism
- **Composition / layout system:** Orbit Composition, Negative-Space Composition
- **Color treatment:** Dark UI, Accent-Color System
- **Typography:** Extended
- **VFX / compositing treatment:** Grain, Particles
- **Camera language:** Orbit, Pull-Out
- **Motion language:** Weightless
- **Transition language:** Zoom-Through, Fade
- **Emotional / brand tone:** Futuristic, Cinematic

## Do's and Don'ts

- Do keep the accent (#ff6b35) for the single most important element in each frame.
- Do use Exo 2 large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sci-fi HUD: fewer instruments, more void; the orbit and the scale carry it.

## References

- Search: "orbital space motion graphics"
- Search: "aerospace launch title design"
- Search: "space mission animation minimal"
