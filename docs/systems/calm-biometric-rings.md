---
name: "Calm biometric rings"
description: "Soft sage progress rings and small readouts framed on a misty ground, rounded numerals, gentle sweeps like a sleep-tracker morning report."
colors:
  canvas: "#eef2ee"        # page ground
  ink: "#233029"           # headlines and body text
  accent: "#7fa593"        # primary accent: the one thing that matters in each frame
  support: "#e5a98a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7b877f"         # muted captions
typography:
  display:
    fontFamily: Varela Round
    fontWeight: 400
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 24px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Calm biometric rings

A motion-graphics design system from Rasa Director's style library (Soft & tactile). Also known as wellness tracker UI, ring metrics, sleep score UI, readiness rings.

## Overview

Soft sage progress rings and small readouts framed on a misty ground, rounded numerals, gentle sweeps like a sleep-tracker morning report.

It feels reassuring, precise, calm. Use it for wearables and health trackers, sleep and recovery apps, health insurance, wellness data stories.

## Visual language

- **Type:** Varela Round (display, weight 400, tracking -0.01em) with Nunito for body text.
- **Surfaces:** flat fills, no gradients; corners 24px; outlines 1px solid in accent.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Organic / Biomorphic
- **Information / data visualization:** Progress Ring, Statistic Callout
- **Composition / layout system:** Radial Composition, Negative-Space Composition
- **Color treatment:** Muted, Light UI
- **Typography:** Rounded Sans
- **Emotional / brand tone:** Calm, Trustworthy
- **Motion language:** Smooth
- **Transition language:** Line-Draw Transition, Fade

## Do's and Don'ts

- Do keep the accent (#7fa593) for the single most important element in each frame.
- Do use Varela Round large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a sci-fi HUD: pale, rounded and slow, rings are progress not targeting, with no neon, glitch or scanlines.

## References

- Search: "sleep tracker UI animation"
- Search: "health ring progress motion"
- Search: "wellness wearable app promo"
