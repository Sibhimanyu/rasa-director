---
name: "Ticket stub"
description: "A mustard roll ticket split by a perforated seam: ADMIT ONE on one side, a red serial stub on the other, heavy condensed caps."
colors:
  canvas: "#f2c95a"        # page ground
  ink: "#1d1914"           # headlines and body text
  accent: "#c7362a"        # primary accent: the one thing that matters in each frame
  support: "#1d1914"       # supporting colour, used sparingly
  surface: "#f7d983"       # raised cards and panels
  muted: "#6b5520"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Display
    fontWeight: 900
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Ticket stub

A motion-graphics design system from Rasa Director's style library (Print). Also known as admit one ticket, raffle ticket, cinema ticket, roll ticket, perforated stub.

## Overview

A mustard roll ticket split by a perforated seam: ADMIT ONE on one side, a red serial stub on the other, heavy condensed caps.

It feels exciting, retro, inviting. Use it for events and festivals, cinema and theatre, launch invitations, giveaways and raffles.

## Visual language

- **Type:** Big Shoulders Display (display, weight 900, uppercase, tracking 0.02em) with Courier Prime for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 3px dashed in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Mid-Century Modern
- **Composition / layout system:** Split Screen, Centered Hero Composition
- **Typography:** Condensed, Slab Serif
- **Material / surface language:** Cardboard
- **Line / stroke language:** Offset-Line, Heavy
- **Color treatment:** Warm Palette, Limited Palette
- **Texture:** Print Grain
- **Motion language:** Snappy
- **Transition language:** Split, Wipe
- **Emotional / brand tone:** Energetic, Nostalgic

## Do's and Don'ts

- Do keep the accent (#c7362a) for the single most important element in each frame.
- Do use Big Shoulders Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a die-cut sticker: flat printed card torn along a dotted perforation, serial numbers, no glossy border.

## References

- Search: "admit one ticket animation"
- Search: "ticket stub motion graphics"
- Search: "raffle ticket design video"
