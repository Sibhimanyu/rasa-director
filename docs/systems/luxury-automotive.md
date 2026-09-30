---
name: "Luxury automotive reveal"
description: "Near-black stage, hairline spec callouts linking graphite nodes, one signal-red accent, extended caps and long, weighted glides."
colors:
  canvas: "#08090b"        # page ground
  ink: "#eeeeee"           # headlines and body text
  accent: "#d7263d"        # primary accent: the one thing that matters in each frame
  support: "#3a3d42"       # supporting colour, used sparingly
  surface: "#1b1d21"       # raised cards and panels
  muted: "#8b8f96"         # muted captions
typography:
  display:
    fontFamily: Sora
    fontWeight: 300
  body:
    fontFamily: Sora
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Luxury automotive reveal

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as supercar reveal, EV launch film, spec-sheet luxe, grand tourer.

## Overview

Near-black stage, hairline spec callouts linking graphite nodes, one signal-red accent, extended caps and long, weighted glides.

It feels powerful, engineered, exclusive. Use it for car and EV launches, performance product specs, motorsport sponsorship, premium mobility.

## Visual language

- **Type:** Sora (display, weight 300, uppercase, tracking 0.16em) with Sora for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines 1px solid in #4a4e55.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Inertial**. Objects keep moving after the force that started them stops, gliding on a long decelerating tail until friction brings them to rest.
- Enter `expo.out`, exit `power3.in`, move `power3.out`; durations 300 / 500 / 800 / 1200 / 1700 ms; stagger 60 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, blur-in, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Cinematic, Technical Minimalism
- **Information / data visualization:** Flow Diagram
- **Product demonstration language:** Callout Annotation, Exploded-Interface Explanation
- **Typography:** Extended
- **Line / stroke language:** Hairline
- **Color treatment:** Dark UI, Accent-Color System
- **Motion language:** Inertial
- **Transition language:** Light Wipe, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#d7263d) for the single most important element in each frame.
- Do use Sora large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not stealth tech luxe: this is a spec reveal with a hot accent and connectors, about power and engineering, not a quiet object.

## References

- Search: "luxury car reveal motion graphics"
- Search: "EV launch spec animation"
- Search: "automotive callout lines animation"
