---
name: "Soft flow diagram"
description: "Rounded pastel nodes on a faint dot grid joined by soft dashed connectors, light shadows, duotone icons, gentle step-by-step pops."
colors:
  canvas: "#f6f5fd"        # page ground
  ink: "#2b2945"           # headlines and body text
  accent: "#b7a6ff"        # primary accent: the one thing that matters in each frame
  support: "#ffd6a5"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8583a3"         # muted captions
typography:
  display:
    fontFamily: M PLUS Rounded 1c
    fontWeight: 800
  body:
    fontFamily: M PLUS Rounded 1c
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 30px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Soft flow diagram

A motion-graphics design system from Rasa Director's style library (Soft & tactile). Also known as friendly flowchart, pastel diagram, soft whiteboard, rounded node diagram.

## Overview

Rounded pastel nodes on a faint dot grid joined by soft dashed connectors, light shadows, duotone icons, gentle step-by-step pops.

It feels clear, approachable, orderly. Use it for process explainers, onboarding flows, workflow automation demos, internal training.

## Visual language

- **Type:** M PLUS Rounded 1c (display, weight 800, tracking -0.02em) with M PLUS Rounded 1c for body text.
- **Surfaces:** flat fills, no gradients; corners 30px; outlines 2px dashed in #cfc8f0.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** dots. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Startup / SaaS Minimalism, Playful Tech
- **Composition / layout system:** Flowchart, Node Map
- **Information / data visualization:** Flow Diagram, Process Diagram
- **Shape language:** Rounded
- **Line / stroke language:** Medium
- **Color treatment:** Pastel
- **Motion language:** Springy
- **Transition language:** Line-Draw Transition, Scale Transition

## Do's and Don'ts

- Do keep the accent (#b7a6ff) for the single most important element in each frame.
- Do use M PLUS Rounded 1c large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a blueprint or technical schematic: nodes are soft pastel lozenges with friendly type, not hairline technical drawing.

## References

- Search: "pastel flowchart animation"
- Search: "soft diagram explainer motion"
- Search: "rounded node diagram animation"
