---
name: "Grass-court championship"
description: "Crisp white with deep grass green and royal purple, a bookish serif headline, the draw as a timeline from first round to final."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#0b3d2c"           # headlines and body text
  accent: "#5b1f8f"        # primary accent: the one thing that matters in each frame
  support: "#c9a227"       # supporting colour, used sparingly
  surface: "#f1eef6"       # raised cards and panels
  muted: "#5f7a6d"         # muted captions
typography:
  display:
    fontFamily: Libre Baskerville
    fontWeight: 700
  body:
    fontFamily: Karla
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Grass-court championship

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as Wimbledon style graphics, tennis broadcast graphics, tournament draw, heritage sport graphics.

## Overview

Crisp white with deep grass green and royal purple, a bookish serif headline, the draw as a timeline from first round to final.

It feels heritage, composed, prestigious. Use it for tournaments and seasons, heritage and premium sport, roadmaps with prestige, anniversary journeys.

## Visual language

- **Type:** Libre Baskerville (display, weight 700, tracking -0.02em) with Karla for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines 3px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Editorial
- **Format / purpose:** Sports Graphics, Timeline
- **Composition / layout system:** Timeline, Negative-Space Composition
- **Typography:** Editorial Serif, Humanist Sans
- **Information / data visualization:** Timeline
- **Color treatment:** Limited Palette, Light UI
- **Narrative structure:** Journey
- **Motion language:** Smooth
- **Pacing / rhythm:** Medium Explanatory
- **Transition language:** Mask Reveal, Crossfade
- **Emotional / brand tone:** Premium, Calm

## Do's and Don'ts

- Do keep the accent (#5b1f8f) for the single most important element in each frame.
- Do use Libre Baskerville large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a roadmap explainer: a tournament draw in heritage green and purple with a serif voice, not a startup timeline.

## References

- Search: "wimbledon broadcast graphics"
- Search: "tennis tournament draw animation"
- Search: "heritage sport motion design"
