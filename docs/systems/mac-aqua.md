---
name: "Mac OS X Aqua"
description: "Glossy blue gel pill buttons with wet highlights on pale pinstripe grey, lozenge controls and soft shadows."
colors:
  canvas: "#eef0f3"        # page ground
  ink: "#10223f"           # headlines and body text
  accent: "#2f8cff"        # primary accent: the one thing that matters in each frame
  support: "#9ecbff"       # supporting colour, used sparingly
  surface: "#dbe8f7"       # raised cards and panels
  muted: "#6a7688"         # muted captions
typography:
  display:
    fontFamily: Istok Web
    fontWeight: 700
  body:
    fontFamily: Istok Web
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Mac OS X Aqua

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as Aqua UI, gel buttons, lickable UI, early OS X.

## Overview

Glossy blue gel pill buttons with wet highlights on pale pinstripe grey, lozenge controls and soft shadows.

It feels glossy, optimistic, polished. Use it for app launches with a nostalgic wink, Apple-adjacent tools, Y2K-era brand refreshes.

## Visual language

- **Type:** Istok Web (display, weight 700, tracking -0.01em) with Istok Web for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners fully rounded (pills); outlines 2px solid in #7ea6d8.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** scanlines. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Web 2.0, Gel / Jelly
- **Era / design-movement influence:** Y2K, Skeuomorphism
- **UI treatment:** Retro UI, Skeuomorphic UI
- **Material / surface language:** Gel, Glossy Product Surface
- **Shape language:** Pill-Shaped
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Smooth
- **Transition language:** Scale Transition, Fade

## Do's and Don'ts

- Do keep the accent (#2f8cff) for the single most important element in each frame.
- Do use Istok Web large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not Y2K chrome: Aqua is translucent blue gel and pinstripes, not silver metal and sparkles.

## References

- Search: "mac os x aqua animation"
- Search: "gel button UI motion"
- Search: "aqua interface 2001"
