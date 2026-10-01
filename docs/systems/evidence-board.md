---
name: "True-crime evidence board"
description: "Cork wall, cream index cards pinned and joined by dashed red string, typewriter labels, one suspect card flagged in yellow."
colors:
  canvas: "#a67c52"        # page ground
  ink: "#1e1510"           # headlines and body text
  accent: "#c8302a"        # primary accent: the one thing that matters in each frame
  support: "#f0cf4a"       # supporting colour, used sparingly
  surface: "#f4ecd8"       # raised cards and panels
  muted: "#4f3b28"         # muted captions
typography:
  display:
    fontFamily: Special Elite
    fontWeight: 400
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px dashed {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# True-crime evidence board

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as conspiracy board, detective wall, investigation board, red string board.

## Overview

Cork wall, cream index cards pinned and joined by dashed red string, typewriter labels, one suspect card flagged in yellow.

It feels intriguing, investigative, suspenseful. Use it for true-crime and podcast promos, security and fraud products, mystery explainers, case studies.

## Visual language

- **Type:** Special Elite (display, weight 400, tracking 0em) with Courier Prime for body text.
- **Surfaces:** off-white paper with visible fibre; corners 0px; outlines 3px dashed in accent.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** noise. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Cinematic**. Film-grammar motion: slow push-ins, focus pulls, long eased camera moves and breathing holds under which the frame never fully stops.
- Enter `power2.out`, exit `power2.inOut`, move `sine.inOut`; durations 400 / 700 / 1100 / 1600 / 2400 ms; stagger 160 ms; hold at least 1400 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Cinematic, Mixed-Media Collage
- **Composition / layout system:** Node Map, Collage Composition
- **Information / data visualization:** Node Network
- **Material / surface language:** Paper, Cardboard
- **Typography:** Monospace
- **Line / stroke language:** Hand-Drawn
- **Color treatment:** Earth Tones, Accent-Color System
- **Motion language:** Cinematic
- **Camera language:** Push-In, Rack Focus
- **Transition language:** Line-Draw Transition, Camera Move Transition
- **Emotional / brand tone:** Mysterious

## Do's and Don'ts

- Do keep the accent (#c8302a) for the single most important element in each frame.
- Do use Special Elite large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not a flowchart explainer: a physical, messy detective wall with string and pins, not clean nodes.

## References

- Search: "conspiracy board animation"
- Search: "detective evidence wall motion graphics"
- Search: "red string investigation video"
