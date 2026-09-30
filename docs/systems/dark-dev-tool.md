---
name: "Dark dev-tool"
description: "Near-black tiles with hairline borders, one indigo accent, tight grotesk type and a faint grid; restrained, exact, quietly premium."
colors:
  canvas: "#0a0a0b"        # page ground
  ink: "#ededef"           # headlines and body text
  accent: "#5e6ad2"        # primary accent: the one thing that matters in each frame
  support: "#3ecf8e"       # supporting colour, used sparingly
  surface: "#141416"       # raised cards and panels
  muted: "#8a8f98"         # muted captions
typography:
  display:
    fontFamily: Geist
    fontWeight: 600
  body:
    fontFamily: Geist
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dark dev-tool

A motion-graphics design system from Rasa Director's style library (Futuristic & tech). Also known as Linear style, Vercel aesthetic, developer dark mode, technical monochrome.

## Overview

Near-black tiles with hairline borders, one indigo accent, tight grotesk type and a faint grid; restrained, exact, quietly premium.

It feels precise, confident, restrained. Use it for developer tools, API and infra launches, changelog films, B2B SaaS.

## Visual language

- **Type:** Geist (display, weight 600, tracking -0.04em) with Geist for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines 1px solid in #2a2a2f.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** grid.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Startup / SaaS Minimalism
- **UI treatment:** Bento UI, Simplified UI
- **Color treatment:** Dark UI, Accent-Color System
- **Line / stroke language:** Hairline
- **Typography:** Neo-Grotesk, Monospace
- **Composition / layout system:** Bento Grid
- **Motion language:** Smooth
- **Transition language:** Crossfade, UI Morph
- **Emotional / brand tone:** Technical, Premium

## Do's and Don'ts

- Do keep the accent (#5e6ad2) for the single most important element in each frame.
- Do use Geist large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not terminal hacker: no green phosphor or console cosplay; this is a polished product UI in dark mode.

## References

- Search: "Linear style product video"
- Search: "Vercel dark bento animation"
- Search: "developer tool launch motion"
