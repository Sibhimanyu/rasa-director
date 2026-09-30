---
name: "Annual report"
description: "Navy serif headlines, crisp sans figures, thin rules and one clean chart on bright paper; numbers presented as a story."
colors:
  canvas: "#f7f6f2"        # page ground
  ink: "#14213d"           # headlines and body text
  accent: "#1f7a8c"        # primary accent: the one thing that matters in each frame
  support: "#e5a823"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7a8296"         # muted captions
typography:
  display:
    fontFamily: Source Serif 4
    fontWeight: 600
  body:
    fontFamily: IBM Plex Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Annual report

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as corporate report, impact report, financial editorial, report design.

## Overview

Navy serif headlines, crisp sans figures, thin rules and one clean chart on bright paper; numbers presented as a story.

It feels trustworthy, measured, clear. Use it for investor updates, impact and ESG reports, year-in-review films, fintech.

## Visual language

- **Type:** Source Serif 4 (display, weight 600, tracking -0.02em) with IBM Plex Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** rules.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Editorial, Clean Minimalism
- **Typography:** Editorial Serif, Neutral Sans Serif
- **Composition / layout system:** Editorial Grid, Typography-Led Composition
- **Information / data visualization:** Line Graph, Number Counter, Statistic Callout
- **Color treatment:** Limited Palette, Cool Palette
- **Line / stroke language:** Hairline
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Wipe
- **Emotional / brand tone:** Trustworthy, Professional

## Do's and Don'ts

- Do keep the accent (#1f7a8c) for the single most important element in each frame.
- Do use Source Serif 4 large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a dashboard: one chart at a time, typeset like a printed page, no UI chrome.

## References

- Search: "annual report motion graphics"
- Search: "animated annual report video"
- Search: "editorial data storytelling"
