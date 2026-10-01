---
name: "Systems diagram"
description: "Crisp labelled boxes and orthogonal arrows on white, monospace headings, one highlighted path pulsing through the system."
colors:
  canvas: "#f8fafc"        # page ground
  ink: "#111827"           # headlines and body text
  accent: "#f97316"        # primary accent: the one thing that matters in each frame
  support: "#38bdf8"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6b7280"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Mono
    fontWeight: 600
  body:
    fontFamily: IBM Plex Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "10px 10px 0 #111827"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Systems diagram

A motion-graphics design system from RasanAI's style library (Data & explainers). Also known as architecture diagram, technical explainer, box-and-arrow.

## Overview

Crisp labelled boxes and orthogonal arrows on white, monospace headings, one highlighted path pulsing through the system.

It feels logical, rigorous, clear. Use it for architecture explainers, security and infra stories, how-it-works segments.

## Visual language

- **Type:** IBM Plex Mono (display, weight 600, tracking -0.02em) with IBM Plex Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 2px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #111827`).
- **Texture:** grid. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **Illustration style:** Technical Diagram
- **Information / data visualization:** Flow Diagram, Process Diagram
- **Format / purpose:** Technical Explainer, Diagram-Led Explainer
- **Composition / layout system:** Flowchart
- **Typography:** Monospace
- **Motion language:** Mechanical
- **Transition language:** Line-Draw Transition, Graphic Match

## Do's and Don'ts

- Do keep the accent (#f97316) for the single most important element in each frame.
- Do use IBM Plex Mono large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not node canvas: an explanatory figure with a fixed path, not an editable product canvas.

## References

- Search: "system architecture diagram animation"
- Search: "technical explainer motion"
- Search: "box and arrow diagram animated"
