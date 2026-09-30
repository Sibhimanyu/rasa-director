---
name: "Dark ops dashboard"
description: "Dense dark tiles edged in neon, big live numbers, status dots and mono labels; a wall of real-time metrics."
colors:
  canvas: "#070b14"        # page ground
  ink: "#e6edf7"           # headlines and body text
  accent: "#00e0a4"        # primary accent: the one thing that matters in each frame
  support: "#7c5cff"       # supporting colour, used sparingly
  surface: "#0f1626"       # raised cards and panels
  muted: "#6b7a90"         # muted captions
typography:
  display:
    fontFamily: Space Grotesk
    fontWeight: 700
  body:
    fontFamily: JetBrains Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
shadows:
  card: "0 0 24px #00e0a4"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dark ops dashboard

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as NOC dashboard, dark analytics, control room.

## Overview

Dense dark tiles edged in neon, big live numbers, status dots and mono labels; a wall of real-time metrics.

It feels vigilant, technical, live. Use it for observability and security, trading and ops, live event stats.

## Visual language

- **Type:** Space Grotesk (display, weight 700, tracking -0.03em) with JetBrains Mono for body text.
- **Surfaces:** dark panels with lit accent edges; corners 10px; outlines 1px solid in #1e2a40.
- **Depth:** glow shadows (`0 0 24px #00e0a4`).
- **Texture:** grid. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Futuristic Tech
- **UI treatment:** Dashboard UI, Bento UI
- **Information / data visualization:** Dashboard, Number Counter, Status Indicator
- **Color treatment:** Dark UI, Neon
- **Shadow / depth cues:** Glow Instead of Shadow
- **Format / purpose:** Dashboard Animation
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Flash Transition

## Do's and Don'ts

- Do keep the accent (#00e0a4) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is neon.
- Don't confuse it: Not dashboard showcase: dense, dark and operational, built for monitoring rather than marketing.

## References

- Search: "dark dashboard animation"
- Search: "noc screen motion graphics"
- Search: "real time metrics ui"
