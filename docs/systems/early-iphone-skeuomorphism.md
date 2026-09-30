---
name: "Early iPhone skeuomorphism"
description: "Glossy app icons and brushed-metal bars in a phone, linen-textured backgrounds, embossed type and soft realistic shadows."
colors:
  canvas: "#d6d1c7"        # page ground
  ink: "#1d2126"           # headlines and body text
  accent: "#3a7bd5"        # primary accent: the one thing that matters in each frame
  support: "#c2553a"       # supporting colour, used sparingly
  surface: "#eceae4"       # raised cards and panels
  muted: "#6b6860"         # muted captions
typography:
  display:
    fontFamily: Arimo
    fontWeight: 700
  body:
    fontFamily: Arimo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 16px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Early iPhone skeuomorphism

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as iOS 6 style, skeuomorphic UI, rich UI, linen and leather.

## Overview

Glossy app icons and brushed-metal bars in a phone, linen-textured backgrounds, embossed type and soft realistic shadows.

It feels tactile, nostalgic, rich. Use it for app anniversary films, nostalgic app-store promos, hardware and audio tools.

## Visual language

- **Type:** Arimo (display, weight 700, tracking -0.01em) with Arimo for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 16px; outlines 1px solid in #8c8a84.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** noise. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Metallic, Web 2.0
- **Era / design-movement influence:** Skeuomorphism
- **UI treatment:** Skeuomorphic UI, Device-Bound UI
- **Iconography:** Skeuomorphic Icons
- **Material / surface language:** Brushed Metal, Fabric
- **Shadow / depth cues:** Realistic Shadow
- **Motion language:** Smooth
- **Transition language:** Page Flip, Slide

## Do's and Don'ts

- Do keep the accent (#3a7bd5) for the single most important element in each frame.
- Do use Arimo large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not neumorphism: this imitates real materials (metal, linen, glass), not soft extruded plastic.

## References

- Search: "ios 6 skeuomorphic animation"
- Search: "skeuomorphic app UI motion"
- Search: "early iphone interface"
