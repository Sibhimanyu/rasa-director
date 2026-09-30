---
name: "Football matchday package"
description: "Deep royal purple with electric green and hot magenta, a slabbed league table of condensed caps, rows that push in hard."
colors:
  canvas: "#38003c"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#00ff85"        # primary accent: the one thing that matters in each frame
  support: "#e90052"       # supporting colour, used sparingly
  surface: "#4d0a54"       # raised cards and panels
  muted: "#c9a6ce"         # muted captions
typography:
  display:
    fontFamily: Saira Condensed
    fontWeight: 800
  body:
    fontFamily: Saira
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "10px 10px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Football matchday package

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as Premier League graphics style, football broadcast package, league table graphics, matchday graphics.

## Overview

Deep royal purple with electric green and hot magenta, a slabbed league table of condensed caps, rows that push in hard.

It feels energetic, premium, competitive. Use it for sports and club content, league and fixture announcements, fan and betting apps, season recaps.

## Visual language

- **Type:** Saira Condensed (display, weight 800, uppercase, tracking 0em) with Saira for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines none.
- **Depth:** hard shadows (`10px 10px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Abstract Geometric
- **Format / purpose:** Sports Graphics, Broadcast Package
- **Typography:** Condensed, Geometric Sans
- **Information / data visualization:** Ranking List, Table
- **Color treatment:** Brand Palette, High Saturation
- **Shape language:** Angular
- **Motion language:** Snappy
- **Pacing / rhythm:** Fast
- **Transition language:** Push, Wipe
- **Emotional / brand tone:** Energetic, Confident

## Do's and Don'ts

- Do keep the accent (#00ff85) for the single most important element in each frame.
- Do use Saira Condensed large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the generic sports broadcast: one owned brand palette (purple, green, magenta) and table-led data, not navy stat tiles with yellow hits.

## References

- Search: "premier league broadcast graphics"
- Search: "football league table animation"
- Search: "matchday graphics package motion"
