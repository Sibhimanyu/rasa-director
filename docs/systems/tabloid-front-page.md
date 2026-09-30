---
name: "Tabloid front page"
description: "A red masthead box, screaming condensed capitals, yellow flash callouts, boxed halftone photos and heavy black keylines."
colors:
  canvas: "#f7f5f0"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#d7141a"        # primary accent: the one thing that matters in each frame
  support: "#ffd400"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6d6a64"         # muted captions
typography:
  display:
    fontFamily: Oswald
    fontWeight: 700
  body:
    fontFamily: Roboto Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Tabloid front page

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as red-top tabloid, tabloid headline, splash headline, screamer.

## Overview

A red masthead box, screaming condensed capitals, yellow flash callouts, boxed halftone photos and heavy black keylines.

It feels loud, sensational, irreverent. Use it for announcements, social ads, parody and humour spots, launch hype.

## Visual language

- **Type:** Oswald (display, weight 700, uppercase, tracking -0.01em) with Roboto Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in ink.
- **Depth:** no shadows.
- **Texture:** halftone. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Halftone
- **Typography:** Condensed, Display Typography
- **Composition / layout system:** Modular Grid, Typography-Led Composition
- **Color treatment:** Primary Colors, High Contrast
- **Texture:** Halftone
- **Material / surface language:** Newsprint
- **Line / stroke language:** Heavy
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Flash Transition
- **Emotional / brand tone:** Bold, Playful

## Do's and Don'ts

- Do keep the accent (#d7141a) for the single most important element in each frame.
- Do use Oswald large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not newspaper broadsheet: sensational rather than sober; red and yellow boxes, huge caps, almost no body text.

## References

- Search: "tabloid headline animation"
- Search: "breaking news tabloid motion graphics"
- Search: "tabloid newspaper style video"
