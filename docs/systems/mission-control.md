---
name: "Mission control"
description: "Graphite panels with recessed wells, amber telemetry numbers and cyan trend lines on a module grid; everything snaps to live values."
colors:
  canvas: "#11151a"        # page ground
  ink: "#e9edf2"           # headlines and body text
  accent: "#ffb000"        # primary accent: the one thing that matters in each frame
  support: "#3fd0ff"       # supporting colour, used sparingly
  surface: "#1a2028"       # raised cards and panels
  muted: "#7d8896"         # muted captions
typography:
  display:
    fontFamily: Barlow Condensed
    fontWeight: 700
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Mission control

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as telemetry dashboard, ops center, flight console, control room UI.

## Overview

Graphite panels with recessed wells, amber telemetry numbers and cyan trend lines on a module grid; everything snaps to live values.

It feels serious, in-control, operational. Use it for observability and ops tools, logistics and fleet, launch countdowns, live-data explainers.

## Visual language

- **Type:** Barlow Condensed (display, weight 700, uppercase, tracking 0.04em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 2px solid in #2e3845.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** grid.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Futuristic Tech
- **UI treatment:** Dashboard UI, Stylized UI
- **Information / data visualization:** Dashboard, Line Graph, Number Counter
- **Color treatment:** Dark UI, Accent-Color System
- **Typography:** Condensed, Monospace
- **Shadow / depth cues:** Inner Shadow
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Push

## Do's and Don'ts

- Do keep the accent (#ffb000) for the single most important element in each frame.
- Do use Barlow Condensed large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not sci-fi HUD: mission control is a working console (panels, numbers, charts), not cinematic linework.

## References

- Search: "mission control dashboard animation"
- Search: "telemetry UI motion graphics"
- Search: "control room interface design"
