---
name: "Scientific journal"
description: "Figure 1 of a paper: white page, serif captions, thin black boxes and arrows, numbered labels and one vermilion highlight."
colors:
  canvas: "#fdfdfb"        # page ground
  ink: "#151515"           # headlines and body text
  accent: "#e8553e"        # primary accent: the one thing that matters in each frame
  support: "#dfe3e6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7c7c78"         # muted captions
typography:
  display:
    fontFamily: Source Serif 4
    fontWeight: 500
  body:
    fontFamily: Source Serif 4
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Scientific journal

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as academic paper, research figure, Nature-style figure, white paper.

## Overview

Figure 1 of a paper: white page, serif captions, thin black boxes and arrows, numbered labels and one vermilion highlight.

It feels rigorous, credible, intellectual. Use it for AI and research launches, technical explainers, biotech, white-paper videos.

## Visual language

- **Type:** Source Serif 4 (display, weight 500, tracking -0.01em) with Source Serif 4 for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Editorial
- **Typography:** Editorial Serif
- **Illustration style:** Technical Diagram
- **Composition / layout system:** Flowchart, Negative-Space Composition
- **Information / data visualization:** Flow Diagram, Process Diagram
- **Color treatment:** Black and White, Accent-Color System
- **Line / stroke language:** Thin, Technical
- **Motion language:** Precise
- **Transition language:** Line-Draw Transition, Fade
- **Format / purpose:** Technical Explainer

## Do's and Don'ts

- Do keep the accent (#e8553e) for the single most important element in each frame.
- Do use Source Serif 4 large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a whiteboard explainer: typeset and exact, like a printed figure, never hand-drawn.

## References

- Search: "scientific figure animation"
- Search: "research paper explainer video"
- Search: "academic diagram motion design"
