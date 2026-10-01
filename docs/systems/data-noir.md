---
name: "Data noir"
description: "Black page, hard white type, thin rules and one blood-red accent; columns of figures and a stark headline wipe in."
colors:
  canvas: "#0b0b0c"        # page ground
  ink: "#f2f2f2"           # headlines and body text
  accent: "#ff3b30"        # primary accent: the one thing that matters in each frame
  support: "#8a8a8a"       # supporting colour, used sparingly
  surface: "#151516"       # raised cards and panels
  muted: "#8f8f8f"         # muted captions
typography:
  display:
    fontFamily: Barlow Condensed
    fontWeight: 800
  body:
    fontFamily: IBM Plex Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Data noir

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as dark editorial data, noir infographic, black-and-red data, investigative data.

## Overview

Black page, hard white type, thin rules and one blood-red accent; columns of figures and a stark headline wipe in.

It feels serious, urgent, investigative. Use it for investigative explainers, financial and risk reports, security incident stories, documentary graphics.

## Visual language

- **Type:** Barlow Condensed (display, weight 800, uppercase, tracking -0.01em) with IBM Plex Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Editorial, Monochrome
- **UI treatment:** Editorial UI
- **Color treatment:** Black and White, Accent-Color System
- **Composition / layout system:** Editorial Grid, Typography-Led Composition
- **Typography:** Condensed, Monospace
- **Information / data visualization:** Statistic Callout, Number Counter
- **Texture:** Film Grain
- **Motion language:** Precise
- **Transition language:** Wipe, Hard Cut

## Do's and Don'ts

- Do keep the accent (#ff3b30) for the single most important element in each frame.
- Do use Barlow Condensed large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not dark dev-tool: no product UI; this is editorial journalism, rules and numbers, in the dark.

## References

- Search: "dark data journalism motion graphics"
- Search: "noir infographic animation"
- Search: "black red editorial data video"
