---
name: "Neural node graph"
description: "Frosted violet nodes connected by lines on deep indigo, soft glow and dot field; signals travel node to node."
colors:
  canvas: "#0c0a1f"        # page ground
  ink: "#efeaff"           # headlines and body text
  accent: "#a78bfa"        # primary accent: the one thing that matters in each frame
  support: "#34d399"       # supporting colour, used sparingly
  surface: "#1d1840"       # raised cards and panels
  muted: "#9a93c2"         # muted captions
typography:
  display:
    fontFamily: Space Grotesk
    fontWeight: 600
  body:
    fontFamily: Space Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
shadows:
  card: "0 0 24px #a78bfa"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Neural node graph

A motion-graphics design system from RasanAI's style library (Futuristic & tech). Also known as AI agent graph, neural network visualization, knowledge graph glow, agent workflow.

## Overview

Frosted violet nodes connected by lines on deep indigo, soft glow and dot field; signals travel node to node.

It feels intelligent, connected, futuristic. Use it for AI agent and workflow tools, ML explainers, data platforms, integration stories.

## Visual language

- **Type:** Space Grotesk (display, weight 600, tracking -0.03em) with Space Grotesk for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 20px; outlines none.
- **Depth:** glow shadows (`0 0 24px #a78bfa`).
- **Texture:** dots. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Futuristic Tech, Glass
- **UI treatment:** Abstracted UI, Canvas / Node-Graph UI
- **Information / data visualization:** Node Network, Flow Diagram
- **Composition / layout system:** Node Map
- **Color treatment:** Dark UI, Cool Palette
- **VFX / compositing treatment:** Glow, Particles
- **Motion language:** Fluid
- **Transition language:** Line-Draw Transition, Camera Move Transition
- **UI interaction motion:** Agent Step Sequence

## Do's and Don'ts

- Do keep the accent (#a78bfa) for the single most important element in each frame.
- Do use Space Grotesk large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not blueprint: dark and luminous with glass nodes, about intelligence and flow, not engineering drawings.

## References

- Search: "AI agent workflow animation"
- Search: "neural network node motion graphics"
- Search: "knowledge graph visualization video"
