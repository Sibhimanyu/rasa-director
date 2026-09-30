---
name: "Network graph"
description: "Glowing pill nodes linked by fine lines on deep navy, orbit rings around clusters, links lighting up as relationships emerge."
colors:
  canvas: "#0a0e27"        # page ground
  ink: "#e8ecff"           # headlines and body text
  accent: "#7aa2ff"        # primary accent: the one thing that matters in each frame
  support: "#ff8fd8"       # supporting colour, used sparingly
  surface: "#151a3d"       # raised cards and panels
  muted: "#7c84b0"         # muted captions
typography:
  display:
    fontFamily: Sora
    fontWeight: 600
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 0 24px #7aa2ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Network graph

A motion-graphics design system from Rasa Director's style library (Data & explainers). Also known as knowledge graph, node-link diagram, constellation graph.

## Overview

Glowing pill nodes linked by fine lines on deep navy, orbit rings around clusters, links lighting up as relationships emerge.

It feels connected, intelligent, vast. Use it for AI and data platforms, social and supply networks, research stories.

## Visual language

- **Type:** Sora (display, weight 600, tracking -0.02em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** glow shadows (`0 0 24px #7aa2ff`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** orbits.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Generative
- **Information / data visualization:** Node Network, Knowledge Graph
- **Composition / layout system:** Node Map, Orbit Composition
- **Format / purpose:** Network Visualization
- **Shadow / depth cues:** Glow Instead of Shadow
- **Color treatment:** Dark UI, Cool Palette
- **Motion language:** Organic
- **Transition language:** Zoom-Through, Particle Transition

## Do's and Don'ts

- Do keep the accent (#7aa2ff) for the single most important element in each frame.
- Do use Sora large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.

## References

- Search: "network graph animation"
- Search: "knowledge graph motion graphics"
- Search: "node link visualization"
