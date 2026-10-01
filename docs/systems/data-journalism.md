---
name: "Data journalism"
description: "Salmon newsprint, serif headline, one precise line chart with sourced annotations, thin rules and a restrained two-colour series."
colors:
  canvas: "#fff1e5"        # page ground
  ink: "#33302e"           # headlines and body text
  accent: "#0f5499"        # primary accent: the one thing that matters in each frame
  support: "#990f3d"       # supporting colour, used sparingly
  surface: "#fff9f5"       # raised cards and panels
  muted: "#807973"         # muted captions
typography:
  display:
    fontFamily: Source Serif 4
    fontWeight: 600
  body:
    fontFamily: Source Sans 3
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Data journalism

A motion-graphics design system from RasanAI's style library (Data & explainers). Also known as FT style, NYT Upshot look, The Pudding, newsroom graphics.

## Overview

Salmon newsprint, serif headline, one precise line chart with sourced annotations, thin rules and a restrained two-colour series.

It feels authoritative, considered, rigorous. Use it for news explainers, research reports, policy and economics stories.

## Visual language

- **Type:** Source Serif 4 (display, weight 600, tracking -0.02em) with Source Sans 3 for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #ccc1b7.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Print-Editorial
- **Information / data visualization:** Line Graph, Statistic Callout
- **Typography:** Editorial Serif
- **Composition / layout system:** Editorial Grid
- **Color treatment:** Limited Palette, Muted
- **Format / purpose:** Data Visualization, News Graphics
- **Narrative structure:** Statement → Evidence → Payoff
- **Emotional / brand tone:** Editorial, Trustworthy
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe

## Do's and Don'ts

- Do keep the accent (#0f5499) for the single most important element in each frame.
- Do use Source Serif 4 large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a dashboard: one argued chart with a headline and a source line, not a panel of metrics.

## References

- Search: "financial times chart animation"
- Search: "data journalism motion graphics"
- Search: "nyt style animated chart"
