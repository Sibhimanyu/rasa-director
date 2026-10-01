---
name: "On-air countdown clock"
description: "A white studio clock ring on black with a red sweeping second arc, monospaced time readouts and stepped, ticking reveals."
colors:
  canvas: "#0a0a0a"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#e6e6e6"        # primary accent: the one thing that matters in each frame
  support: "#ff2d1a"       # supporting colour, used sparingly
  surface: "#161616"       # raised cards and panels
  muted: "#8c8c8c"         # muted captions
typography:
  display:
    fontFamily: Azeret Mono
    fontWeight: 700
  body:
    fontFamily: Azeret Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# On-air countdown clock

A motion-graphics design system from RasanAI's style library (Broadcast). Also known as broadcast countdown, studio clock, live countdown, going live timer.

## Overview

A white studio clock ring on black with a red sweeping second arc, monospaced time readouts and stepped, ticking reveals.

It feels tense, precise, anticipatory. Use it for live launches and premieres, event openers, stream starts, deadline announcements.

## Visual language

- **Type:** Azeret Mono (display, weight 700, uppercase, tracking -0.03em) with Azeret Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Monochrome
- **Format / purpose:** Broadcast Package, Event Opener
- **Typography:** Monospace
- **Information / data visualization:** Progress Ring, Number Counter
- **Color treatment:** Black and White, Accent-Color System
- **Motion function:** Build Anticipation, Show Progress
- **Motion language:** Mechanical
- **Pacing / rhythm:** Event-Driven
- **Transition language:** Hard Cut
- **Emotional / brand tone:** Urgent, Technical

## Do's and Don'ts

- Do keep the accent (#e6e6e6) for the single most important element in each frame.
- Do use Azeret Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a sci-fi HUD: a real studio clock in black, white and on-air red; nothing futuristic, only time running out.

## References

- Search: "broadcast countdown clock animation"
- Search: "going live countdown graphic"
- Search: "studio clock countdown motion"
