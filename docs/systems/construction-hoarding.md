---
name: "Construction hoarding"
description: "Painted plywood hoarding green meeting safety orange, a heavy grotesk slogan split across the seam, the site today against the finished skyline."
colors:
  canvas: "#20483a"        # page ground
  ink: "#f3f1e9"           # headlines and body text
  accent: "#ff6a13"        # primary accent: the one thing that matters in each frame
  support: "#f3f1e9"       # supporting colour, used sparingly
  surface: "#2c5a48"       # raised cards and panels
  muted: "#a9bdb2"         # muted captions
typography:
  display:
    fontFamily: Public Sans
    fontWeight: 900
  body:
    fontFamily: Public Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Construction hoarding

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as site hoarding, building-site graphics, developer hoarding, coming soon hoarding.

## Overview

Painted plywood hoarding green meeting safety orange, a heavy grotesk slogan split across the seam, the site today against the finished skyline.

It feels ambitious, under way, confident. Use it for before-and-after reveals, property and infrastructure, rebrands and relaunches, coming-soon teasers.

## Visual language

- **Type:** Public Sans (display, weight 900, uppercase, tracking -0.03em) with Public Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Modernist, Brutalism
- **Typography:** Grotesk, Display Typography
- **Composition / layout system:** Split Screen, Typography-Led Composition
- **Format / purpose:** Before/After Demonstration
- **Narrative structure:** Transformation
- **Color treatment:** Complementary, High Contrast
- **Material / surface language:** Wood
- **Motion language:** Snappy
- **Transition language:** Wipe, Push
- **Emotional / brand tone:** Bold, Optimistic

## Do's and Don'ts

- Do keep the accent (#ff6a13) for the single most important element in each frame.
- Do use Public Sans large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not hazard-industrial: a developer's hoarding with painted panels and a big promise, not black-and-yellow warning signage.

## References

- Search: "construction hoarding design"
- Search: "site hoarding graphics"
- Search: "coming soon hoarding animation"
