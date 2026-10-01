---
name: "Marshmallow 3D flat"
description: "Pillowy peach, mint and cream tiles with soft inner highlights in a bento grid, glossy bead icons, rounded chunky type."
colors:
  canvas: "#fff3ea"        # page ground
  ink: "#3d2a22"           # headlines and body text
  accent: "#ffb08a"        # primary accent: the one thing that matters in each frame
  support: "#b6e3cf"       # supporting colour, used sparingly
  surface: "#fffaf5"       # raised cards and panels
  muted: "#a08878"         # muted captions
typography:
  display:
    fontFamily: Fredoka
    fontWeight: 700
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 44px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Marshmallow 3D flat

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as squishy UI, puffy bento, soft-serve 3D, pillow tiles.

## Overview

Pillowy peach, mint and cream tiles with soft inner highlights in a bento grid, glossy bead icons, rounded chunky type.

It feels cosy, sweet, playful. Use it for food and delivery apps, feature roundups, social teasers, habit and journaling apps.

## Visual language

- **Type:** Fredoka (display, weight 700, tracking -0.01em) with Nunito for body text.
- **Surfaces:** inflated, soft-lit clay surfaces with inner highlights; corners 44px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** none.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Soft 3D, Kawaii
- **UI treatment:** Bento UI, Claymorphic UI
- **Composition / layout system:** Bento Grid
- **Shape language:** Inflated, Soft
- **Typography:** Rounded Sans
- **Color treatment:** Pastel, Warm Palette
- **Material / surface language:** Foam
- **Iconography:** 3D Icons
- **Motion language:** Bouncy
- **Transition language:** Scale Transition, Morph Transition

## Do's and Don'ts

- Do keep the accent (#ffb08a) for the single most important element in each frame.
- Do use Fredoka large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is clay.
- Don't confuse it: Not claymorphism's floating cards: tiles sit snug in a grid like pillows, with barely any drop shadow.

## References

- Search: "puffy 3D bento UI"
- Search: "squishy UI animation"
- Search: "soft 3D pastel tiles motion"
