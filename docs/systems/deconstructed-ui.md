---
name: "Deconstructed UI"
description: "A familiar screen broken into its buttons, cards and labels, scattered at angles with tape and hard shadows, then snapping back together."
colors:
  canvas: "#ffe45c"        # page ground
  ink: "#141414"           # headlines and body text
  accent: "#ff4d8d"        # primary accent: the one thing that matters in each frame
  support: "#3d7bff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#5e5516"         # muted captions
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 800
  body:
    fontFamily: Bricolage Grotesque
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 14px
shadows:
  card: "10px 10px 0 #141414"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Deconstructed UI

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as UI collage, scattered interface, pieces flying apart.

## Overview

A familiar screen broken into its buttons, cards and labels, scattered at angles with tape and hard shadows, then snapping back together.

It feels playful, inventive, energetic. Use it for brand-forward launches, design tools, social teasers.

## Visual language

- **Type:** Bricolage Grotesque (display, weight 800, tracking -0.035em) with Bricolage Grotesque for body text.
- **Surfaces:** flat fills, no gradients; corners 14px; outlines 3px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #141414`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Playful**. Light, cheeky motion with small overshoots, tilts and secondary wiggles, playful in intent rather than in strict physics.
- Enter `back.out(1.7)`, exit `back.in(1.7)`, move `sine.inOut`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 40 ms; hold at least 600 ms.
- Never: fade-up-slide, linear-entrance, blur-in.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Playful Tech, Mixed-Media Collage
- **UI treatment:** Deconstructed UI, Stylized UI
- **Composition / layout system:** Collage Composition, Multi-Object Choreography
- **Product demonstration language:** UI to Abstract Visualization
- **Shadow / depth cues:** Hard Shadow
- **Motion language:** Playful
- **Transition language:** Fragmentation, Object Morph

## Do's and Don'ts

- Do keep the accent (#ff4d8d) for the single most important element in each frame.
- Do use Bricolage Grotesque large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not exploded UI: pieces scatter freely and rotate; there is no single stacking axis.

## References

- Search: "deconstructed ui animation"
- Search: "ui pieces collage motion"
- Search: "interface breaking apart"
