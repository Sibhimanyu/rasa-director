---
name: "Constructivism"
description: "Red, black and aged cream; heavy condensed capitals, solid red slabs, thick rules and diagonal tension like a 1920s propaganda poster."
colors:
  canvas: "#ebe0c8"        # page ground
  ink: "#141210"           # headlines and body text
  accent: "#c8161d"        # primary accent: the one thing that matters in each frame
  support: "#141210"       # supporting colour, used sparingly
  surface: "#c8161d"       # raised cards and panels
  muted: "#6b5f4e"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Display
    fontWeight: 900
  body:
    fontFamily: Oswald
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Constructivism

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as Russian constructivism, Soviet avant-garde, Rodchenko style, agitprop poster.

## Overview

Red, black and aged cream; heavy condensed capitals, solid red slabs, thick rules and diagonal tension like a 1920s propaganda poster.

It feels urgent, militant, dynamic, declarative. Use it for manifesto films, campaign launches, event openers, rebellious brand statements.

## Visual language

- **Type:** Big Shoulders Display (display, weight 900, uppercase, tracking 0em) with Oswald for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Constructivism, Print-Editorial
- **Era / design-movement influence:** Constructivism
- **Typography:** Condensed, Display Typography
- **Color treatment:** Limited Palette, High Contrast
- **Composition / layout system:** Asymmetric Composition, Poster Composition, Typography-Led Composition
- **Texture:** Paper Grain, Print Grain
- **Motion language:** Mechanical
- **Transition language:** Wipe, Push

## Do's and Don'ts

- Do keep the accent (#c8161d) for the single most important element in each frame.
- Do use Big Shoulders Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Bauhaus: constructivism is red-and-black, diagonal and shouting; Bauhaus is primary colours, balanced geometry.

## References

- Search: "constructivist motion design"
- Search: "Rodchenko poster animation"
- Search: "Soviet avant-garde kinetic type"
