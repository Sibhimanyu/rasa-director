---
name: "Blue Note jazz sleeve"
description: "Reid Miles-style LP sleeve: huge condensed caps cropped across a deep-blue field, white type, one word on a mustard block, a black record disc."
colors:
  canvas: "#123f85"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#f4b400"        # primary accent: the one thing that matters in each frame
  support: "#0b0b0b"       # supporting colour, used sparingly
  surface: "#0b2a5c"       # raised cards and panels
  muted: "#a9bfe0"         # muted captions
typography:
  display:
    fontFamily: Oswald
    fontWeight: 700
  body:
    fontFamily: Libre Franklin
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Blue Note jazz sleeve

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as Reid Miles cover, Blue Note Records sleeve, hard bop LP, 50s jazz album cover.

## Overview

Reid Miles-style LP sleeve: huge condensed caps cropped across a deep-blue field, white type, one word on a mustard block, a black record disc.

It feels cool, confident, sophisticated. Use it for jazz and live-music promos, record label idents, podcast title cards, club and venue posters.

## Visual language

- **Type:** Oswald (display, weight 700, uppercase, tracking -0.01em) with Libre Franklin for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Modernist, Duotone
- **Era / design-movement influence:** Mid-Century Modern
- **Typography:** Condensed, Grotesk
- **Color treatment:** Duotone, Limited Palette
- **Composition / layout system:** Asymmetric Composition, Typography-Led Composition
- **Motion language:** Rhythmic
- **Pacing / rhythm:** Beat-Driven
- **Transition language:** Hard Cut, Wipe
- **Shadow / depth cues:** No Shadow
- **Shape language:** Rectilinear, Circular
- **Sound + motion relationship:** Music-Led

## Do's and Don'ts

- Do keep the accent (#f4b400) for the single most important element in each frame.
- Do use Oswald large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Swiss International: the grid swings, type is cropped and jammed together, and the field is a tinted photographic blue, not white paper.

## References

- Search: "reid miles blue note cover design"
- Search: "blue note album cover typography"
- Search: "jazz album cover motion graphics"
