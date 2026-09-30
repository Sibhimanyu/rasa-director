---
name: "Turn-by-turn navigation"
description: "Night-mode map in slate and charcoal, a thick bright-blue route line, a green turn banner with a big arrow and distance, an ETA pill below."
colors:
  canvas: "#1f2630"        # page ground
  ink: "#f1f5f9"           # headlines and body text
  accent: "#4c8dff"        # primary accent: the one thing that matters in each frame
  support: "#1e8e3e"       # supporting colour, used sparingly
  surface: "#2c3542"       # raised cards and panels
  muted: "#94a3b8"         # muted captions
typography:
  display:
    fontFamily: Roboto
    fontWeight: 700
  body:
    fontFamily: Roboto
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 16px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Turn-by-turn navigation

A motion-graphics design system from Rasa Director's style library (Interface). Also known as sat-nav UI, maps navigation screen, GPS directions, night-mode map.

## Overview

Night-mode map in slate and charcoal, a thick bright-blue route line, a green turn banner with a big arrow and distance, an ETA pill below.

It feels guided, calm, in-motion. Use it for mobility and delivery apps, travel stories, automotive launches.

## Visual language

- **Type:** Roboto (display, weight 700, tracking -0.02em) with Roboto for body text.
- **Surfaces:** flat fills, no gradients; corners 16px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** grid.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Technical Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Production-Faithful UI, Full-Screen UI, In-Context UI
- **Information / data visualization:** Map, Status Indicator
- **Color treatment:** Dark UI, Accent-Color System
- **Typography:** Neutral Sans Serif
- **Shadow / depth cues:** Floating Shadows
- **Motion language:** Smooth
- **Transition language:** Camera Move Transition, Slide

## Do's and Don'ts

- Do keep the accent (#4c8dff) for the single most important element in each frame.
- Do use Roboto large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not map explainer: a live driver's view with route, turn banner and ETA in night mode, not an annotated editorial map.

## References

- Search: "turn by turn navigation animation"
- Search: "GPS map UI motion graphic"
- Search: "night mode map route animation"
