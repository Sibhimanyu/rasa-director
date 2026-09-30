---
name: "Museum specimen label"
description: "A specimen drawer: cream typewritten labels with fine black borders on dark cabinet green, catalogue numbers and a red type-specimen tag."
colors:
  canvas: "#2f3d36"        # page ground
  ink: "#efe9d8"           # headlines and body text
  accent: "#b3261e"        # primary accent: the one thing that matters in each frame
  support: "#d8c99f"       # supporting colour, used sparingly
  surface: "#f5efdc"       # raised cards and panels
  muted: "#a8b0a6"         # muted captions
typography:
  display:
    fontFamily: Gelasio
    fontWeight: 700
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Museum specimen label

A motion-graphics design system from Rasa Director's style library (Science). Also known as natural history label, collection label, type specimen tag, herbarium label.

## Overview

A specimen drawer: cream typewritten labels with fine black borders on dark cabinet green, catalogue numbers and a red type-specimen tag.

It feels curious, scholarly, quiet. Use it for museum and heritage, natural history stories, collections and archives, craft and provenance films.

## Visual language

- **Type:** Gelasio (display, weight 700, tracking -0.01em) with Courier Prime for body text.
- **Surfaces:** off-white paper with visible fibre; corners 0px; outlines 1px solid in #2b2b2b.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Documentary
- **Material / surface language:** Paper
- **Texture:** Paper Grain
- **Typography:** Editorial Serif, Monospace
- **Composition / layout system:** Stacked Cards
- **Color treatment:** Earth Tones, Muted
- **Line / stroke language:** Hairline
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Smooth
- **Transition language:** Dissolve, Card Flip
- **Emotional / brand tone:** Nostalgic, Intellectual

## Do's and Don'ts

- Do keep the accent (#b3261e) for the single most important element in each frame.
- Do use Gelasio large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not archival documentary: small typed labels in a cabinet drawer, catalogue-numbered, not sepia photos panned on paper.

## References

- Search: "museum label animation"
- Search: "natural history specimen label design"
- Search: "collection tag motion graphics"
