---
name: "Private banking"
description: "Deep navy panels with a thin gold performance line, a large serif figure, measured grid, and soft shadows: trust rendered as calm."
colors:
  canvas: "#0e1a2b"        # page ground
  ink: "#eef0f3"           # headlines and body text
  accent: "#c9a55e"        # primary accent: the one thing that matters in each frame
  support: "#5c7394"       # supporting colour, used sparingly
  surface: "#15253b"       # raised cards and panels
  muted: "#8c98aa"         # muted captions
typography:
  display:
    fontFamily: Libre Caslon Display
    fontWeight: 400
  body:
    fontFamily: Figtree
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Private banking

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as wealth management, navy and gold finance, premium fintech, family office.

## Overview

Deep navy panels with a thin gold performance line, a large serif figure, measured grid, and soft shadows: trust rendered as calm.

It feels trustworthy, discreet, authoritative. Use it for wealth and investment brands, premium credit cards, annual results, insurance and legal firms.

## Visual language

- **Type:** Libre Caslon Display (display, weight 400, tracking -0.01em) with Figtree for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 1px solid in #2a3d58.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Editorial
- **Information / data visualization:** Line Graph, Statistic Callout
- **Typography:** Editorial Serif
- **Color treatment:** Dark UI, Limited Palette
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Emotional / brand tone:** Trustworthy, Premium, Serious
- **Motion language:** Smooth
- **Transition language:** Line-Draw Transition, Crossfade

## Do's and Don'ts

- Do keep the accent (#c9a55e) for the single most important element in each frame.
- Do use Libre Caslon Display large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a SaaS dashboard: sparse, serif-led and slow, with one metric and one line, not a crowded widget grid.

## References

- Search: "private bank brand film"
- Search: "luxury finance data animation"
- Search: "navy gold financial motion graphics"
