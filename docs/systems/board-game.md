---
name: "Board game"
description: "Chunky board spaces on a cardboard game board joined by a path, red and blue pieces, hard drop shadows, stepped moves."
colors:
  canvas: "#e8d9b0"        # page ground
  ink: "#2b1d0e"           # headlines and body text
  accent: "#e63946"        # primary accent: the one thing that matters in each frame
  support: "#2f7fe0"       # supporting colour, used sparingly
  surface: "#fff8e7"       # raised cards and panels
  muted: "#7d6a45"         # muted captions
typography:
  display:
    fontFamily: Lilita One
    fontWeight: 400
  body:
    fontFamily: Rubik
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
shadows:
  card: "10px 10px 0 #2b1d0e"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Board game

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as tabletop style, game board graphics, board-game path, family game night.

## Overview

Chunky board spaces on a cardboard game board joined by a path, red and blue pieces, hard drop shadows, stepped moves.

It feels strategic, social, cosy, fun. Use it for process explainers, onboarding journeys, roadmaps, team and collaboration tools.

## Visual language

- **Type:** Lilita One (display, weight 400, tracking 0em) with Rubik for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines none.
- **Depth:** hard shadows (`10px 10px 0 #2b1d0e`).
- **Texture:** checker. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Toy-Like 3D, Playful Tech
- **Composition / layout system:** Node Map, Timeline
- **Narrative structure:** Journey
- **Shape language:** Rounded, Modular
- **Shadow / depth cues:** Hard Shadow
- **Material / surface language:** Cardboard, Paper
- **Color treatment:** Primary Colors
- **Motion language:** Stop-Motion-Like
- **Transition language:** Camera Move Transition, Slide

## Do's and Don'ts

- Do keep the accent (#e63946) for the single most important element in each frame.
- Do use Lilita One large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a flowchart: the steps read as game spaces and tokens, turn by turn, with toy-like depth.

## References

- Search: "board game style animation"
- Search: "game board journey explainer"
- Search: "tabletop path motion graphics"
