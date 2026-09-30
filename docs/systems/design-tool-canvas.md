---
name: "Design-tool canvas"
description: "Neutral grey infinite canvas holding white frames, a bright blue selection box with square handles and size tag, coloured named cursors drifting in."
colors:
  canvas: "#e5e5e5"        # page ground
  ink: "#1e1e1e"           # headlines and body text
  accent: "#0d99ff"        # primary accent: the one thing that matters in each frame
  support: "#f24822"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6b6b6b"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 700
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Design-tool canvas

A motion-graphics design system from Rasa Director's style library (Interface). Also known as Figma-style canvas, design file view, multiplayer canvas, artboard view.

## Overview

Neutral grey infinite canvas holding white frames, a bright blue selection box with square handles and size tag, coloured named cursors drifting in.

It feels collaborative, precise, creative. Use it for design-tool launches, agency case studies, process and making-of films.

## Visual language

- **Type:** Inter Tight (display, weight 700, tracking -0.03em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines 2px solid in accent.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Startup / SaaS Minimalism, Clean Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Canvas / Node-Graph UI, Floating-Card UI, Production-Faithful UI
- **Composition / layout system:** Infinite Canvas, Floating Cards
- **Color treatment:** Light UI, Accent-Color System
- **Typography:** Neutral Sans Serif
- **Line / stroke language:** Thin
- **Shadow / depth cues:** No Shadow
- **Motion language:** Precise
- **Transition language:** Zoom Transition, Camera Move Transition
- **UI interaction motion:** Multiplayer Cursors, Marquee Selection, Resize

## Do's and Don'ts

- Do keep the accent (#0d99ff) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not node canvas: no wired nodes or data pulses; frames, selection handles and multiplayer cursors from a design tool.

## References

- Search: "figma canvas animation"
- Search: "design tool UI motion graphic"
- Search: "multiplayer cursors animation"
