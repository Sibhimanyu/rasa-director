---
name: "TV weather map"
description: "Pale green land on a mid-blue sea, isobar contours, warm-front orange and cold-front cyan regions, temperature pins in friendly rounded sans."
colors:
  canvas: "#1f5f99"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ff8a1f"        # primary accent: the one thing that matters in each frame
  support: "#33c1ff"       # supporting colour, used sparingly
  surface: "#d6ebc4"       # raised cards and panels
  muted: "#b9d4ea"         # muted captions
typography:
  display:
    fontFamily: Mulish
    fontWeight: 800
  body:
    fontFamily: Mulish
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 16px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# TV weather map

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as weather forecast graphics, weather presenter map, forecast map, met office style.

## Overview

Pale green land on a mid-blue sea, isobar contours, warm-front orange and cold-front cyan regions, temperature pins in friendly rounded sans.

It feels friendly, clear, reassuring. Use it for forecasts and outlooks, regional rollouts, travel and outdoor brands, local news.

## Visual language

- **Type:** Mulish (display, weight 800, tracking -0.02em) with Mulish for body text.
- **Surfaces:** flat fills, no gradients; corners 16px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** contours.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **Information / data visualization:** Map, Heat Map
- **Format / purpose:** Map Animation, Broadcast Package
- **Camera language:** Top-Down, Push-In
- **Color treatment:** Cool Palette, Complementary
- **Motion function:** Show Location, Show State Change
- **Motion language:** Smooth
- **Transition language:** Crossfade, Wipe
- **Emotional / brand tone:** Friendly, Trustworthy

## Do's and Don'ts

- Do keep the accent (#ff8a1f) for the single most important element in each frame.
- Do use Mulish large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not an election map: a natural sea-and-land palette with isobars and temperatures, not two opposing result colours.

## References

- Search: "tv weather map graphics"
- Search: "weather forecast motion graphics"
- Search: "weather presenter map animation"
