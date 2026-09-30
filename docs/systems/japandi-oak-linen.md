---
name: "Japandi oak & linen"
description: "Undyed linen ground, pale white-oak and olive cards with soft daylight shadows, a light Albert Sans voice and fine leaf line icons."
colors:
  canvas: "#ebe5da"        # page ground
  ink: "#262320"           # headlines and body text
  accent: "#b8966a"        # primary accent: the one thing that matters in each frame
  support: "#77806a"       # supporting colour, used sparingly
  surface: "#f6f2eb"       # raised cards and panels
  muted: "#8b847a"         # muted captions
typography:
  display:
    fontFamily: Albert Sans
    fontWeight: 500
  body:
    fontFamily: Albert Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Japandi oak & linen

A motion-graphics design system from Rasa Director's style library (Nature & material). Also known as Japandi, Scandi-Japanese, oak and linen, calm Nordic interior.

## Overview

Undyed linen ground, pale white-oak and olive cards with soft daylight shadows, a light Albert Sans voice and fine leaf line icons.

It feels calm, tactile, honest. Use it for furniture and homeware, wellness and sleep apps, interior studios, slow-living brand films.

## Visual language

- **Type:** Albert Sans (display, weight 500, tracking -0.03em) with Albert Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 10px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** weave. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism, Clean Minimalism
- **Typography:** Humanist Sans
- **Composition / layout system:** Floating Cards, Negative-Space Composition
- **Color treatment:** Earth Tones, Low Contrast
- **Texture:** Fibers
- **Material / surface language:** Wood, Fabric
- **Motion language:** Floating
- **Pacing / rhythm:** Meditative
- **Transition language:** Crossfade, Slide
- **Emotional / brand tone:** Calm, Minimal

## Do's and Don'ts

- Do keep the accent (#b8966a) for the single most important element in each frame.
- Do use Albert Sans large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Nordic soft: that is cool grey UI tiles; Japandi is warm wood and linen with Japanese restraint, fewer things, more air.

## References

- Search: "japandi aesthetic animation"
- Search: "oak and linen brand video"
- Search: "japandi interior motion graphics"
