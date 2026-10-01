---
name: "Newsprint classifieds"
description: "A dense page of tiny boxed small ads on grey newsprint, bold condensed caps heads, hairline rules and one highlighter-yellow circle."
colors:
  canvas: "#e7e2d4"        # page ground
  ink: "#161514"           # headlines and body text
  accent: "#f2d53c"        # primary accent: the one thing that matters in each frame
  support: "#161514"       # supporting colour, used sparingly
  surface: "#efebdf"       # raised cards and panels
  muted: "#5d5a52"         # muted captions
typography:
  display:
    fontFamily: Fjalla One
    fontWeight: 400
  body:
    fontFamily: PT Serif
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Newsprint classifieds

A motion-graphics design system from RasanAI's style library (Print). Also known as classified ads, want ads, small ads page, personals column.

## Overview

A dense page of tiny boxed small ads on grey newsprint, bold condensed caps heads, hairline rules and one highlighter-yellow circle.

It feels busy, funny, local, nosy. Use it for community and marketplace apps, hiring and job campaigns, humour and parody spots, local business promos.

## Visual language

- **Type:** Fjalla One (display, weight 400, uppercase, tracking 0em) with PT Serif for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** glyph. **Decoration:** rules.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Print-Editorial
- **Composition / layout system:** Modular Grid, Editorial Grid
- **Material / surface language:** Newsprint
- **Texture:** Print Grain
- **Typography:** Condensed, Editorial Serif
- **Line / stroke language:** Hairline
- **Color treatment:** Grayscale, Accent-Color System
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Zoom Transition
- **Emotional / brand tone:** Quirky, Friendly

## Do's and Don'ts

- Do keep the accent (#f2d53c) for the single most important element in each frame.
- Do use Fjalla One large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the broadsheet front page: no hero headline or photo; many tiny equal boxes, the joke is in the small print.

## References

- Search: "classified ads page animation"
- Search: "newspaper small ads motion graphics"
- Search: "want ads typography video"
