---
name: "Dark neumorphism"
description: "Charcoal soft UI: panels and keys pushed out of a graphite canvas by faint rim light, with one mint accent glowing through."
colors:
  canvas: "#2a2e35"        # page ground
  ink: "#e8ebf0"           # headlines and body text
  accent: "#5ee6b8"        # primary accent: the one thing that matters in each frame
  support: "#3a4049"       # supporting colour, used sparingly
  surface: "#2a2e35"       # raised cards and panels
  muted: "#8a919c"         # muted captions
typography:
  display:
    fontFamily: Manrope
    fontWeight: 700
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 24px
shadows:
  card: "12px 12px 26px rgba(0,0,0,0.16), -12px -12px 26px rgba(255,255,255,0.7)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dark neumorphism

A motion-graphics design system from Rasa Director's style library (Soft & tactile). Also known as dark soft UI, night neumorphic, charcoal soft UI.

## Overview

Charcoal soft UI: panels and keys pushed out of a graphite canvas by faint rim light, with one mint accent glowing through.

It feels moody, tactile, premium. Use it for audio and hardware companion apps, smart-home night modes, fitness trackers, car infotainment concepts.

## Visual language

- **Type:** Manrope (display, weight 700, tracking -0.02em) with Manrope for body text.
- **Surfaces:** flat fills, no gradients; corners 24px; outlines none.
- **Depth:** neu shadows (`12px 12px 26px rgba(0,0,0,0.16), -12px -12px 26px rgba(255,255,255,0.7)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **Era / design-movement influence:** Neumorphism
- **UI treatment:** Neo-Skeuomorphic UI, Device-Bound UI
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Color treatment:** Dark UI, Accent-Color System
- **Composition / layout system:** Phone Composition
- **Iconography:** Line Icons
- **Motion language:** Smooth
- **Transition language:** Crossfade, UI Morph

## Do's and Don'ts

- Do keep the accent (#5ee6b8) for the single most important element in each frame.
- Do use Manrope large and confident; one idea per frame.
- Do keep every shadow the same neu style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not dark glassmorphism: nothing is translucent; the panels are solid graphite shaped only by highlight and shade.

## References

- Search: "dark neumorphism app animation"
- Search: "dark soft UI motion"
- Search: "charcoal neumorphic player"
