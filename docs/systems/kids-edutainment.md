---
name: "Kids edutainment"
description: "Crayon-bright primaries on lined-paper cream, rounded step nodes joined by dashed paths, big friendly rounded type, gold stars."
colors:
  canvas: "#fff9e9"        # page ground
  ink: "#23305e"           # headlines and body text
  accent: "#ff6b4a"        # primary accent: the one thing that matters in each frame
  support: "#3fb7ff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a8fa8"         # muted captions
typography:
  display:
    fontFamily: Fredoka
    fontWeight: 700
  body:
    fontFamily: Fredoka
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 26px
shadows:
  card: "10px 10px 0 #23305e"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Kids edutainment

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as kids education animation, preschool learning style, educational cartoon UI, classroom explainer.

## Overview

Crayon-bright primaries on lined-paper cream, rounded step nodes joined by dashed paths, big friendly rounded type, gold stars.

It feels clear, encouraging, cheerful, safe. Use it for educational explainers, ed-tech, kids apps, how-it-works for families.

## Visual language

- **Type:** Fredoka (display, weight 700, tracking 0em) with Fredoka for body text.
- **Surfaces:** flat fills, no gradients; corners 26px; outlines 4px dashed in ink.
- **Depth:** hard shadows (`10px 10px 0 #23305e`).
- **Texture:** paper. **Icons:** filled. **Decoration:** stars.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Childlike / Naive, Playful Tech
- **Format / purpose:** Educational Motion, Process Explainer
- **Composition / layout system:** Flowchart, Illustration-Led Composition
- **Color treatment:** Primary Colors
- **Typography:** Rounded Sans
- **Line / stroke language:** Medium
- **Shape language:** Rounded
- **Motion language:** Bouncy
- **Transition language:** Slide, Line-Draw Transition
- **Motion function:** Show Progress, Show Success

## Do's and Don'ts

- Do keep the accent (#ff6b4a) for the single most important element in each frame.
- Do use Fredoka large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not childlike doodle: it is organised for learning (steps, paths, rewards), not scribbly art.

## References

- Search: "kids educational animation style"
- Search: "edtech explainer motion"
- Search: "learning steps cartoon diagram"
