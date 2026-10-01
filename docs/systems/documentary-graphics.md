---
name: "Documentary graphics"
description: "Understated sans captions and figures over graded dark footage, one archival-yellow accent, a slow line chart and gentle grain."
colors:
  canvas: "#161816"        # page ground
  ink: "#eeeae1"           # headlines and body text
  accent: "#e2b33c"        # primary accent: the one thing that matters in each frame
  support: "#6e7a70"       # supporting colour, used sparingly
  surface: "#1f2320"       # raised cards and panels
  muted: "#8f948d"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Sans
    fontWeight: 600
  body:
    fontFamily: IBM Plex Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Documentary graphics

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as doc lower thirds, Netflix documentary style, factual graphics, investigative doc.

## Overview

Understated sans captions and figures over graded dark footage, one archival-yellow accent, a slow line chart and gentle grain.

It feels credible, serious, human. Use it for brand documentaries, impact reports, investigative explainers, case-study films.

## Visual language

- **Type:** IBM Plex Sans (display, weight 600, tracking -0.01em) with IBM Plex Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Documentary, Cinematic
- **Typography:** Neo-Grotesk
- **Photo / video integration:** Documentary Footage, Ken Burns Effect
- **Information / data visualization:** Line Graph, Statistic Callout
- **Composition / layout system:** Full Bleed, Negative-Space Composition
- **Color treatment:** Muted, Dark UI
- **Texture:** Film Grain
- **Motion language:** Smooth
- **Pacing / rhythm:** Voiceover-Synchronized
- **Transition language:** Crossfade, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#e2b33c) for the single most important element in each frame.
- Do use IBM Plex Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a news package: no banners or tickers; graphics are sparse and let the footage lead.

## References

- Search: "documentary motion graphics"
- Search: "netflix documentary graphics style"
- Search: "documentary lower third design"
