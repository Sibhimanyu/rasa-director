---
name: "Stop-motion paper"
description: "Cardboard-cut cards that jitter in on twos with real drop shadows, hand-cut edges and visible frame-to-frame boil."
colors:
  canvas: "#e7dcc6"        # page ground
  ink: "#221d18"           # headlines and body text
  accent: "#e4572e"        # primary accent: the one thing that matters in each frame
  support: "#f3c13a"       # supporting colour, used sparingly
  surface: "#fbf4e4"       # raised cards and panels
  muted: "#7d705e"         # muted captions
typography:
  display:
    fontFamily: Chango
    fontWeight: 400
  body:
    fontFamily: Patrick Hand
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Stop-motion paper

A motion-graphics design system from RasanAI's style library (Handmade & printed). Also known as cut-out animation, stop-motion cutout, Terry Gilliam style, paper puppets.

## Overview

Cardboard-cut cards that jitter in on twos with real drop shadows, hand-cut edges and visible frame-to-frame boil.

It feels charming, handmade, quirky. Use it for brand shorts, kids' products, craft and food, quirky explainers.

## Visual language

- **Type:** Chango (display, weight 400, tracking 0em) with Patrick Hand for body text.
- **Surfaces:** off-white paper with visible fibre; corners 6px; outlines 2px sketch in #8c7a60.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** filled. **Decoration:** stickers.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Paper Cutout, Handmade / Craft
- **Illustration style:** Cutout Character, Paper Cut
- **Production technique:** Stop Motion, Frame-by-Frame Animation
- **Material / surface language:** Cardboard, Paper
- **Shadow / depth cues:** Floating Shadows
- **Motion language:** Stop-Motion-Like
- **Transition language:** Hard Cut, Slide

## Do's and Don'ts

- Do keep the accent (#e4572e) for the single most important element in each frame.
- Do use Chango large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not paper cutout illustration: the difference is motion; pieces step and boil at 12 fps like real stop-motion.

## References

- Search: "stop motion paper cutout animation"
- Search: "cut out stop motion explainer"
- Search: "papercraft stop motion"
