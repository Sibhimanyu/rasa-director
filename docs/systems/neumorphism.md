---
name: "Neumorphism"
description: "Controls extruded from a same-colour pale grey-blue canvas by a paired light and dark shadow; no outlines, one quiet accent."
colors:
  canvas: "#e3e8ef"        # page ground
  ink: "#2b3447"           # headlines and body text
  accent: "#5b6cff"        # primary accent: the one thing that matters in each frame
  support: "#9aa6ff"       # supporting colour, used sparingly
  surface: "#e3e8ef"       # raised cards and panels
  muted: "#7d879a"         # muted captions
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontWeight: 700
  body:
    fontFamily: Plus Jakarta Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "12px 12px 26px rgba(0,0,0,0.16), -12px -12px 26px rgba(255,255,255,0.7)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Neumorphism

A motion-graphics design system from Rasa Director's style library (Soft & tactile). Also known as soft UI, neo-skeuomorphism, neumorphic UI, extruded UI.

## Overview

Controls extruded from a same-colour pale grey-blue canvas by a paired light and dark shadow; no outlines, one quiet accent.

It feels calm, tactile, precise. Use it for smart-home and IoT app demos, fintech controls, music player UI showcases, settings and toggle micro-interactions.

## Visual language

- **Type:** Plus Jakarta Sans (display, weight 700, tracking -0.02em) with Plus Jakarta Sans for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** neu shadows (`12px 12px 26px rgba(0,0,0,0.16), -12px -12px 26px rgba(255,255,255,0.7)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **Era / design-movement influence:** Neumorphism
- **UI treatment:** Neo-Skeuomorphic UI, Isolated-Component UI
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Shape language:** Rounded, Pill-Shaped
- **Color treatment:** Monochrome, Low Contrast
- **Iconography:** Line Icons
- **Motion language:** Smooth
- **Transition language:** Crossfade, Scale Transition

## Do's and Don'ts

- Do keep the accent (#5b6cff) for the single most important element in each frame.
- Do use Plus Jakarta Sans large and confident; one idea per frame.
- Do keep every shadow the same neu style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not claymorphism: nothing is inflated or coloured; surfaces are the canvas itself, pushed up by light.

## References

- Search: "neumorphism UI animation"
- Search: "soft UI toggle motion"
- Search: "neumorphic dashboard dribbble"
