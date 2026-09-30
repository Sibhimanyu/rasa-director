---
name: "Thermal imaging"
description: "An infrared camera frame: a full-bleed scene in a heat ramp from violet-black through red-orange to a white-hot spot, with an emissivity and spot readout."
colors:
  canvas: "#14061a"        # page ground
  ink: "#fbf1e4"           # headlines and body text
  accent: "#ff5a1f"        # primary accent: the one thing that matters in each frame
  support: "#7a12b0"       # supporting colour, used sparingly
  surface: "#1f0b26"       # raised cards and panels
  muted: "#b59ab0"         # muted captions
typography:
  display:
    fontFamily: Tomorrow
    fontWeight: 600
  body:
    fontFamily: Tomorrow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Thermal imaging

A motion-graphics design system from Rasa Director's style library (Science). Also known as infrared camera, ironbow thermography, heat camera, IR imaging.

## Overview

An infrared camera frame: a full-bleed scene in a heat ramp from violet-black through red-orange to a white-hot spot, with an emissivity and spot readout.

It feels revealing, tense, investigative. Use it for energy and buildings, security and inspection, science documentaries, climate stories.

## Visual language

- **Type:** Tomorrow (display, weight 600, uppercase, tracking 0.01em) with Tomorrow for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** none. **Decoration:** crosshair.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Duotone, Technical Minimalism
- **Photo / video integration:** Full-Bleed Footage
- **Color grade:** Duotone Grade
- **Color treatment:** Duotone, Warm Palette
- **Composition / layout system:** Full Bleed
- **Typography:** Geometric Sans
- **Motion language:** Smooth
- **Transition language:** Color Match, Dissolve
- **Emotional / brand tone:** Technical, Mysterious

## Do's and Don'ts

- Do keep the accent (#ff5a1f) for the single most important element in each frame.
- Do use Tomorrow large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not photographic duotone: the ramp reads as temperature, violet to yellow with a spot meter, not an art-directed two-colour print.

## References

- Search: "thermal camera look motion graphics"
- Search: "infrared thermography video style"
- Search: "heat map camera overlay"
