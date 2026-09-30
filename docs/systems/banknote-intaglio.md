---
name: "Banknote intaglio"
description: "Engraved currency: fine guilloché line patterns in bank-note green on pale security paper, a huge denomination, roman caps and a seal."
colors:
  canvas: "#e5eadb"        # page ground
  ink: "#1f3a2b"           # headlines and body text
  accent: "#3e6b52"        # primary accent: the one thing that matters in each frame
  support: "#9b4a36"       # supporting colour, used sparingly
  surface: "#eef1e6"       # raised cards and panels
  muted: "#5d7564"         # muted captions
typography:
  display:
    fontFamily: Marcellus SC
    fontWeight: 400
  body:
    fontFamily: Old Standard TT
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Banknote intaglio

A motion-graphics design system from Rasa Director's style library (Print). Also known as security printing, guilloché, engraved banknote, currency design, stock certificate.

## Overview

Engraved currency: fine guilloché line patterns in bank-note green on pale security paper, a huge denomination, roman caps and a seal.

It feels official, valuable, intricate, trustworthy. Use it for fintech and banking, crypto and payments launches, pricing and money explainers, anniversary and value stories.

## Visual language

- **Type:** Marcellus SC (display, weight 400, uppercase, tracking 0.06em) with Old Standard TT for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px double in accent.
- **Depth:** no shadows.
- **Texture:** hatching. **Icons:** glyph. **Decoration:** contours.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Luxury
- **Illustration style:** Ink Illustration, Geometric Vector
- **Line / stroke language:** Hairline, Double-Line
- **Color treatment:** Monochrome, Cool Palette
- **Texture:** Hatching, Stipple
- **Typography:** Editorial Serif
- **Information / data visualization:** Number Counter, Statistic Callout
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Mask Reveal
- **Emotional / brand tone:** Trustworthy, Premium

## Do's and Don'ts

- Do keep the accent (#3e6b52) for the single most important element in each frame.
- Do use Marcellus SC large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not private banking luxury: busy engraved line-work, guilloché and big numerals like real money, not calm serif on cream.

## References

- Search: "banknote guilloche animation"
- Search: "engraved currency motion graphics"
- Search: "money security print design"
