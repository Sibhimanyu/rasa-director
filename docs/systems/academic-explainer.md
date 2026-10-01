---
name: "Academic explainer"
description: "Cream page, classic serif set in two columns, a muted-teal figure plate, thin rules and footnote-sized captions."
colors:
  canvas: "#f7f3ea"        # page ground
  ink: "#222222"           # headlines and body text
  accent: "#2d6a73"        # primary accent: the one thing that matters in each frame
  support: "#b5523b"       # supporting colour, used sparingly
  surface: "#efe8d8"       # raised cards and panels
  muted: "#6f6a60"         # muted captions
typography:
  display:
    fontFamily: Crimson Pro
    fontWeight: 600
  body:
    fontFamily: Crimson Pro
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Academic explainer

A motion-graphics design system from RasanAI's style library (Data & explainers). Also known as scientific paper style, journal figure, lecture explainer.

## Overview

Cream page, classic serif set in two columns, a muted-teal figure plate, thin rules and footnote-sized captions.

It feels intellectual, credible, unhurried. Use it for research summaries, university and science comms, grant and paper explainers.

## Visual language

- **Type:** Crimson Pro (display, weight 600, tracking -0.01em) with Crimson Pro for body text.
- **Surfaces:** off-white paper with visible fibre; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Editorial
- **Typography:** Editorial Serif
- **Composition / layout system:** Editorial Grid
- **Format / purpose:** Educational Motion, Concept Explainer
- **Color treatment:** Muted
- **Emotional / brand tone:** Intellectual, Serious
- **Texture:** Paper Grain
- **Motion language:** Smooth
- **Transition language:** Crossfade, Page Flip

## Do's and Don'ts

- Do keep the accent (#2d6a73) for the single most important element in each frame.
- Do use Crimson Pro large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not data journalism: bookish and figure-led, no newsroom headline energy.

## References

- Search: "scientific explainer animation"
- Search: "academic paper motion graphics"
- Search: "research summary video"
