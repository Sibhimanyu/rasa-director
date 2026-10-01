---
name: "Whiteboard explainer"
description: "Black and red marker lines drawing onto a white board, hand-lettered labels, wobbly boxes and doodle icons appearing stroke by stroke."
colors:
  canvas: "#fbfbf8"        # page ground
  ink: "#1b1b1b"           # headlines and body text
  accent: "#d62828"        # primary accent: the one thing that matters in each frame
  support: "#1d6fd6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6d6d6d"         # muted captions
typography:
  display:
    fontFamily: Caveat
    fontWeight: 700
  body:
    fontFamily: Kalam
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Whiteboard explainer

A motion-graphics design system from RasanAI's style library (Data & explainers). Also known as whiteboard animation, sketch explainer, VideoScribe style.

## Overview

Black and red marker lines drawing onto a white board, hand-lettered labels, wobbly boxes and doodle icons appearing stroke by stroke.

It feels approachable, smart, human. Use it for training and onboarding, concept explainers, sales stories.

## Visual language

- **Type:** Caveat (display, weight 700, tracking 0em) with Kalam for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines 4px sketch in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** doodle. **Decoration:** none.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Doodle, Sketchbook
- **Illustration style:** Hand-Drawn, Doodle
- **Line / stroke language:** Marker, Animated Draw-On
- **Typography:** Handwritten / Script
- **Texture:** Marker
- **Format / purpose:** Concept Explainer
- **Motion language:** Handmade / Imperfect
- **Transition language:** Line-Draw Transition, Wipe

## Do's and Don'ts

- Do keep the accent (#d62828) for the single most important element in each frame.
- Do use Caveat large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not chalk talk: bright white board with crisp marker, not dusty chalk on dark slate.

## References

- Search: "whiteboard animation explainer"
- Search: "hand drawn marker explainer"
- Search: "sketch diagram animation"
