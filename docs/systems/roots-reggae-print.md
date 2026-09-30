---
name: "Roots reggae print"
description: "Sound-system tiles in Rasta red, gold and green: black blocks on a sun-gold ground, fat rounded caps, hand-cut stars and a big green number tile."
colors:
  canvas: "#f4c20d"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#1e7b34"        # primary accent: the one thing that matters in each frame
  support: "#c8102e"       # supporting colour, used sparingly
  surface: "#111111"       # raised cards and panels
  muted: "#5a4a06"         # muted captions
typography:
  display:
    fontFamily: Bowlby One
    fontWeight: 400
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Roots reggae print

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as Rasta colours, sound system poster, reggae 45 label, roots and culture.

## Overview

Sound-system tiles in Rasta red, gold and green: black blocks on a sun-gold ground, fat rounded caps, hand-cut stars and a big green number tile.

It feels warm, defiant, joyful. Use it for reggae and dancehall events, Caribbean food and culture brands, heritage-month content, summer festival promos.

## Visual language

- **Type:** Bowlby One (display, weight 400, uppercase, tracking 0em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 20px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** duotone. **Decoration:** stars.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Screen Print, Handmade / Craft
- **Typography:** Display Typography, Rounded Sans
- **Color treatment:** Limited Palette, Warm Palette
- **Composition / layout system:** Bento Grid, Modular Grid
- **Motion language:** Rhythmic
- **Pacing / rhythm:** Beat-Driven
- **Transition language:** Push, Hard Cut
- **Shadow / depth cues:** No Shadow
- **Shape language:** Rounded, Modular
- **Emotional / brand tone:** Friendly, Rebellious
- **Sound + motion relationship:** Music-Led

## Do's and Don'ts

- Do keep the accent (#1e7b34) for the single most important element in each frame.
- Do use Bowlby One large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not colour-blocking: the three colours are the Rasta flag in fixed roles on gold and black, with sound-system poster type, not arbitrary bright blocks.

## References

- Search: "reggae poster design"
- Search: "rasta colours motion graphics"
- Search: "sound system flyer typography"
