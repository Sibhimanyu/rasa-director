---
name: "Whiteboard animation"
description: "Black marker diagrams drawn live on a bright whiteboard, boxes and arrows linking ideas, one blue and one red marker."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#1a1a1a"           # headlines and body text
  accent: "#2a6fdb"        # primary accent: the one thing that matters in each frame
  support: "#e0453a"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7a7a7a"         # muted captions
typography:
  display:
    fontFamily: Kalam
    fontWeight: 700
  body:
    fontFamily: Kalam
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Whiteboard animation

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as RSA Animate style, draw-my-life, scribe video, whiteboard explainer.

## Overview

Black marker diagrams drawn live on a bright whiteboard, boxes and arrows linking ideas, one blue and one red marker.

It feels clear, smart, approachable. Use it for concept explainers, training and onboarding, process diagrams, thought-leadership talks.

## Visual language

- **Type:** Kalam (display, weight 700, tracking 0em) with Kalam for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines 4px sketch in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** doodle. **Decoration:** none.

## Motion

Motion language: **Gestural**. Motion that traces the energy of a hand gesture: sweeping arcs, a fast attack and a dragging finish, like a brush or a flick of the wrist.
- Enter `power3.out`, exit `power2.in`, move `power3.inOut`; durations 150 / 300 / 500 / 800 / 1200 ms; stagger 70 ms; hold at least 800 ms.
- Never: fade-up-slide, fade-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Doodle, Ink / Marker
- **Format / purpose:** Concept Explainer, Diagram-Led Explainer
- **Illustration style:** Doodle, Technical Diagram
- **Line / stroke language:** Marker, Animated Draw-On
- **Character / mascot treatment:** Hand-Only Character
- **Composition / layout system:** Flowchart, Node Map
- **Motion language:** Gestural
- **Transition language:** Line-Draw Transition, Camera Move Transition

## Do's and Don'ts

- Do keep the accent (#2a6fdb) for the single most important element in each frame.
- Do use Kalam large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not chalkboard: clean marker on white, drawn as you watch, focused on the logic of a diagram.

## References

- Search: "whiteboard animation explainer"
- Search: "scribe video style"
- Search: "hand drawn diagram animation"
