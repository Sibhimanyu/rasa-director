---
name: "Developer docs"
description: "A light documentation page: white canvas, grey code blocks with hairline borders, blue links, monospace snippets, tidy and literal."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#1f2328"           # headlines and body text
  accent: "#0969da"        # primary accent: the one thing that matters in each frame
  support: "#bf3989"       # supporting colour, used sparingly
  surface: "#f6f8fa"       # raised cards and panels
  muted: "#656d76"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Sans
    fontWeight: 600
  body:
    fontFamily: IBM Plex Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Developer docs

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as docs-style explainer, API reference look, GitHub docs.

## Overview

A light documentation page: white canvas, grey code blocks with hairline borders, blue links, monospace snippets, tidy and literal.

It feels clear, helpful, literal. Use it for API tutorials, SDK quickstarts, integration guides.

## Visual language

- **Type:** IBM Plex Sans (display, weight 600, tracking -0.015em) with IBM Plex Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 1px solid in #d0d7de.
- **Depth:** no shadows.
- **Texture:** grid. **Icons:** line. **Decoration:** rules.

## Motion

Motion language: **Linear**. Constant-speed interpolation from start to end with no acceleration or deceleration.
- Enter `none`, exit `none`, move `none`; durations 200 / 400 / 700 / 1000 / 1600 ms; stagger 100 ms; hold at least 800 ms.
- Never: fade-up-slide, bounce, overshoot, blur-in, scale-pop.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **UI treatment:** Terminal / Code UI, Simplified UI
- **Format / purpose:** Tutorial, Technical Explainer
- **Typography:** Grotesk, Monospace
- **Color treatment:** Light UI
- **UI interaction motion:** Typing, API Request, Response
- **Motion language:** Linear
- **Transition language:** Crossfade, Slide

## Do's and Don'ts

- Do keep the accent (#0969da) for the single most important element in each frame.
- Do use IBM Plex Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not terminal product demo: bright and instructional; it teaches the code rather than shows off the tool.

## References

- Search: "api documentation explainer video"
- Search: "developer tutorial animation"
- Search: "code snippet explainer motion"
