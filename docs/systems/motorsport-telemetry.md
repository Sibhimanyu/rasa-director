---
name: "Motorsport telemetry"
description: "Race-broadcast overlays on carbon black: rev-dial rings, live timing readouts, italic-energy caps in racing red and teal."
colors:
  canvas: "#0e0e10"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#e10600"        # primary accent: the one thing that matters in each frame
  support: "#00d2be"       # supporting colour, used sparingly
  surface: "#1a1a1e"       # raised cards and panels
  muted: "#8d8d95"         # muted captions
typography:
  display:
    fontFamily: Titillium Web
    fontWeight: 700
  body:
    fontFamily: Titillium Web
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Motorsport telemetry

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as F1 broadcast graphics, racing telemetry, speed HUD, timing tower.

## Overview

Race-broadcast overlays on carbon black: rev-dial rings, live timing readouts, italic-energy caps in racing red and teal.

It feels fast, technical, thrilling. Use it for automotive and EV launches, sports graphics, performance products, recap highlights.

## Visual language

- **Type:** Titillium Web (display, weight 700, uppercase, tracking 0.02em) with Titillium Web for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in accent.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Inertial**. Objects keep moving after the force that started them stops, gliding on a long decelerating tail until friction brings them to rest.
- Enter `expo.out`, exit `power3.in`, move `power3.out`; durations 300 / 500 / 800 / 1200 / 1700 ms; stagger 60 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, blur-in, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Cinematic, Sci-Fi / HUD
- **Format / purpose:** Sports Graphics, Broadcast Package
- **Typography:** Extended, Condensed
- **Information / data visualization:** Progress Ring, Number Counter, Ranking List
- **Composition / layout system:** Radial Composition, Layered Depth
- **Color treatment:** Dark UI, High Contrast
- **VFX / compositing treatment:** Motion Blur, Light Streaks
- **Motion language:** Inertial
- **Pacing / rhythm:** Fast
- **Transition language:** Whip Transition, Light Wipe

## Do's and Don'ts

- Do keep the accent (#e10600) for the single most important element in each frame.
- Do use Titillium Web large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a sci-fi HUD: grounded real-world telemetry (speed, laps, deltas) in broadcast colours, not fantasy interface.

## References

- Search: "f1 broadcast graphics"
- Search: "motorsport telemetry motion graphics"
- Search: "racing hud animation"
