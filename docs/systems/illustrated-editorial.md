---
name: "Illustrated editorial"
description: "A conceptual spot illustration in grainy flat colour, muted ochre and teal on off-white, crowned by a calm serif headline."
colors:
  canvas: "#f2ede3"        # page ground
  ink: "#23201c"           # headlines and body text
  accent: "#d49a3a"        # primary accent: the one thing that matters in each frame
  support: "#2f6b6a"       # supporting colour, used sparingly
  surface: "#faf6ee"       # raised cards and panels
  muted: "#8a8173"         # muted captions
typography:
  display:
    fontFamily: Fraunces
    fontWeight: 500
  body:
    fontFamily: Karla
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Illustrated editorial

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as spot illustration, New Yorker style, conceptual editorial illustration, grainy vector editorial.

## Overview

A conceptual spot illustration in grainy flat colour, muted ochre and teal on off-white, crowned by a calm serif headline.

It feels thoughtful, warm, clever. Use it for concept explainers, fintech and health, thought-leadership films, newsletter teasers.

## Visual language

- **Type:** Fraunces (display, weight 500, tracking -0.02em) with Karla for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** duotone. **Decoration:** blobs.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Editorial, Warm Minimalism
- **Illustration style:** Editorial Illustration, Grainy Vector
- **Typography:** Editorial Serif
- **Composition / layout system:** Centered Hero Composition, Illustration-Led Composition
- **Color treatment:** Muted, Earth Tones
- **Texture:** Print Grain
- **Iconography:** Duotone Icons
- **Motion language:** Organic
- **Transition language:** Shape Match, Crossfade
- **Narrative structure:** Statement → Evidence → Payoff

## Do's and Don'ts

- Do keep the accent (#d49a3a) for the single most important element in each frame.
- Do use Fraunces large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not flat corporate illustration: textured, conceptual and restrained, drawn like a magazine commission.

## References

- Search: "editorial illustration animation"
- Search: "grainy vector motion design"
- Search: "conceptual illustration explainer"
