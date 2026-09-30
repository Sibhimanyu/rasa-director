---
name: "Widget-first UI"
description: "Chunky rounded widgets on a dark home-screen field: vivid colour tiles, big glanceable numbers, glossy 3D icons springing in."
colors:
  canvas: "#111114"        # page ground
  ink: "#f5f5f7"           # headlines and body text
  accent: "#ff9f0a"        # primary accent: the one thing that matters in each frame
  support: "#30d158"       # supporting colour, used sparingly
  surface: "#232329"       # raised cards and panels
  muted: "#98989f"         # muted captions
typography:
  display:
    fontFamily: Sora
    fontWeight: 700
  body:
    fontFamily: DM Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 44px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Widget-first UI

A motion-graphics design system from Rasa Director's style library (Product & UI). Also known as iOS widgets, home-screen widgets, glanceable UI.

## Overview

Chunky rounded widgets on a dark home-screen field: vivid colour tiles, big glanceable numbers, glossy 3D icons springing in.

It feels glanceable, cheerful, native. Use it for mobile feature launches, widget announcements, wearable apps.

## Visual language

- **Type:** Sora (display, weight 700, tracking -0.03em) with DM Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 44px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Playful Tech
- **UI treatment:** Widget / Notification UI, Bento UI
- **Composition / layout system:** Modular Grid
- **Information / data visualization:** Statistic Callout, Progress Ring
- **Shape language:** Rounded
- **Color treatment:** Dark UI, High Saturation
- **Iconography:** 3D Icons
- **Motion language:** Springy
- **Transition language:** Scale Transition, Card Flip

## Do's and Don'ts

- Do keep the accent (#ff9f0a) for the single most important element in each frame.
- Do use Sora large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not bento showcase: dark, native and toy-bright; tiles are live widgets, not marketing panels.

## References

- Search: "ios widget animation"
- Search: "home screen widgets motion"
- Search: "widget ui promo"
