---
name: "Node canvas"
description: "Rounded nodes wired by dashed connectors on a dotted infinite canvas, data pulses travelling link to link."
colors:
  canvas: "#f6f6f8"        # page ground
  ink: "#16161d"           # headlines and body text
  accent: "#ff4f8b"        # primary accent: the one thing that matters in each frame
  support: "#4f7bff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7b7b88"         # muted captions
typography:
  display:
    fontFamily: Hanken Grotesk
    fontWeight: 800
  body:
    fontFamily: Hanken Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 16px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Node canvas

A motion-graphics design system from Rasa Director's style library (Product & UI). Also known as workflow builder, automation canvas, n8n / Zapier style.

## Overview

Rounded nodes wired by dashed connectors on a dotted infinite canvas, data pulses travelling link to link.

It feels logical, empowering, playful. Use it for automation tools, AI agent builders, integration platforms.

## Visual language

- **Type:** Hanken Grotesk (display, weight 800, tracking -0.03em) with Hanken Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners 16px; outlines 2px dashed in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** dots. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Playful Tech
- **UI treatment:** Canvas / Node-Graph UI, Abstracted UI
- **Product demonstration language:** Workflow Visualization
- **Composition / layout system:** Node Map, Infinite Canvas
- **Information / data visualization:** Flow Diagram
- **UI interaction motion:** Drag, Drop, Multiplayer Cursors
- **Motion language:** Fluid
- **Transition language:** Seamless Infinite-Canvas Transition, Line-Draw Transition

## Do's and Don'ts

- Do keep the accent (#ff4f8b) for the single most important element in each frame.
- Do use Hanken Grotesk large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not systems diagram: it is the product's own editable canvas, with cursors and drag, not an explanatory figure.

## References

- Search: "workflow builder animation"
- Search: "node based ui motion"
- Search: "automation canvas demo"
