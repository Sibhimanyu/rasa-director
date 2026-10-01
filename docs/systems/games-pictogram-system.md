---
name: "Olympic-style pictogram system"
description: "Crisp white modular tiles, solid ring-colour blocks in blue, red, green and black, flat geometric pictograms and tight bold sans."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#0081c8"        # primary accent: the one thing that matters in each frame
  support: "#ee334e"       # supporting colour, used sparingly
  surface: "#f2f3f5"       # raised cards and panels
  muted: "#00a651"         # muted captions
typography:
  display:
    fontFamily: Red Hat Display
    fontWeight: 900
  body:
    fontFamily: Red Hat Text
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Olympic-style pictogram system

A motion-graphics design system from RasanAI's style library (Broadcast). Also known as Olympic pictograms, Games identity, sport pictogram system, multi-sport event graphics.

## Overview

Crisp white modular tiles, solid ring-colour blocks in blue, red, green and black, flat geometric pictograms and tight bold sans.

It feels optimistic, international, orderly. Use it for events and conferences, multi-track programmes, wayfinding and schedules, sport and community campaigns.

## Visual language

- **Type:** Red Hat Display (display, weight 900, tracking -0.03em) with Red Hat Text for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Swiss / International Typographic Style, Abstract Geometric
- **Format / purpose:** Motion Identity System, Sports Graphics
- **Iconography:** Pictograms
- **Composition / layout system:** Bento Grid, Modular Grid
- **Color treatment:** Primary Colors, Light UI
- **Shape language:** Geometric
- **Motion language:** Precise
- **Transition language:** Shape Match, Wipe
- **Emotional / brand tone:** Optimistic, Friendly

## Do's and Don'ts

- Do keep the accent (#0081c8) for the single most important element in each frame.
- Do use Red Hat Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a bento product showcase: an event identity system of pictograms and ring colours on white, not device UI tiles.

## References

- Search: "olympic pictogram animation"
- Search: "games identity motion design"
- Search: "sport pictogram system graphics"
