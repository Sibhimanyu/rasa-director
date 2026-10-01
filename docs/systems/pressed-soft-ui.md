---
name: "Pressed soft UI"
description: "Warm stone panels carved into the canvas with inner shadows, charts sitting in debossed wells, a single terracotta data line."
colors:
  canvas: "#e8e1d6"        # page ground
  ink: "#33291f"           # headlines and body text
  accent: "#c46a45"        # primary accent: the one thing that matters in each frame
  support: "#9fae8f"       # supporting colour, used sparingly
  surface: "#e2d9cc"       # raised cards and panels
  muted: "#8f8373"         # muted captions
typography:
  display:
    fontFamily: Outfit
    fontWeight: 600
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 32px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Pressed soft UI

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as inset neumorphism, debossed UI, engraved soft UI, carved panels.

## Overview

Warm stone panels carved into the canvas with inner shadows, charts sitting in debossed wells, a single terracotta data line.

It feels grounded, tactile, quiet. Use it for wellness and finance dashboards, data summaries, product stat reveals, hardware control panels.

## Visual language

- **Type:** Outfit (display, weight 600, tracking -0.02em) with Outfit for body text.
- **Surfaces:** flat fills, no gradients; corners 32px; outlines none.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism
- **Era / design-movement influence:** Neumorphism
- **UI treatment:** Neo-Skeuomorphic UI, Dashboard UI
- **Shadow / depth cues:** Inner Shadow
- **Information / data visualization:** Line Graph, Statistic Callout
- **Color treatment:** Earth Tones, Low Contrast
- **Material / surface language:** Matte Product Surface
- **Motion language:** Smooth
- **Transition language:** Mask Reveal, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#c46a45) for the single most important element in each frame.
- Do use Outfit large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not neumorphism's extruded look: here everything is pressed in, like a stamped tray, not raised.

## References

- Search: "inset neumorphism dashboard"
- Search: "debossed UI animation"
- Search: "pressed soft UI chart"
