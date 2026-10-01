---
name: "Automotive HMI"
description: "A charcoal cockpit screen with thin cyan gauges and rings, condensed uppercase readouts, restrained glow: shipping hardware, not sci-fi."
colors:
  canvas: "#0c0f12"        # page ground
  ink: "#e6f1f5"           # headlines and body text
  accent: "#35d0ff"        # primary accent: the one thing that matters in each frame
  support: "#ff7a45"       # supporting colour, used sparingly
  surface: "#161b21"       # raised cards and panels
  muted: "#6b7a86"         # muted captions
typography:
  display:
    fontFamily: Barlow Semi Condensed
    fontWeight: 600
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "0 0 24px #35d0ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Automotive HMI

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as in-car UI, instrument cluster, hardware interface.

## Overview

A charcoal cockpit screen with thin cyan gauges and rings, condensed uppercase readouts, restrained glow: shipping hardware, not sci-fi.

It feels engineered, calm, precise. Use it for EV and mobility, smart hardware, industrial IoT.

## Visual language

- **Type:** Barlow Semi Condensed (display, weight 600, uppercase, tracking 0.06em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines 1px solid in accent.
- **Depth:** glow shadows (`0 0 24px #35d0ff`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Inertial**. Objects keep moving after the force that started them stops, gliding on a long decelerating tail until friction brings them to rest.
- Enter `expo.out`, exit `power3.in`, move `power3.out`; durations 300 / 500 / 800 / 1200 / 1700 ms; stagger 60 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, blur-in, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Futuristic Tech, Technical Minimalism
- **UI treatment:** Futuristic UI / FUI, Full-Screen UI, Dashboard UI
- **Information / data visualization:** Progress Ring, Status Indicator
- **Typography:** Condensed
- **Color treatment:** Dark UI, Cool Palette
- **Shadow / depth cues:** Glow Instead of Shadow
- **Motion language:** Inertial
- **Transition language:** Light Wipe, Blur Transition

## Do's and Don'ts

- Do keep the accent (#35d0ff) for the single most important element in each frame.
- Do use Barlow Semi Condensed large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sci-fi HUD: fewer brackets, no noise or glitch; every gauge reads like a real product.

## References

- Search: "car infotainment ui animation"
- Search: "instrument cluster motion design"
- Search: "ev dashboard hmi"
