---
name: "Pop art"
description: "Ben-Day halftone dots, primary yellow, red and blue panels, heavy black outlines and punchy block lettering straight off a 1960s canvas."
colors:
  canvas: "#ffe22b"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#e8262b"        # primary accent: the one thing that matters in each frame
  support: "#1c6fd6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#5b4b00"         # muted captions
typography:
  display:
    fontFamily: Bungee
    fontWeight: 400
  body:
    fontFamily: Rubik
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #111111"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "6px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Pop art

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as Lichtenstein style, Ben-Day dots, Warhol pop, halftone pop.

## Overview

Ben-Day halftone dots, primary yellow, red and blue panels, heavy black outlines and punchy block lettering straight off a 1960s canvas.

It feels loud, witty, iconic, retro-bright. Use it for consumer launches, fashion and beauty, social campaigns, music promos.

## Visual language

- **Type:** Bungee (display, weight 400, uppercase, tracking 0em) with Rubik for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 6px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #111111`).
- **Texture:** halftone. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Pop Art, Halftone
- **Era / design-movement influence:** Pop Art
- **Color treatment:** Primary Colors, High Saturation
- **Texture:** Halftone
- **Line / stroke language:** Heavy
- **Shadow / depth cues:** Hard Shadow
- **Composition / layout system:** Bento Grid, Modular Grid
- **Typography:** Display Typography, Filled Type
- **Motion language:** Snappy
- **Transition language:** Flash Transition, Hard Cut

## Do's and Don'ts

- Do keep the accent (#e8262b) for the single most important element in each frame.
- Do use Bungee large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not comic-book style: pop art is gallery-framed and ironic, flat colour plus dots, no story panels or characters.

## References

- Search: "pop art motion graphics"
- Search: "Ben-Day dots animation"
- Search: "Lichtenstein style video"
