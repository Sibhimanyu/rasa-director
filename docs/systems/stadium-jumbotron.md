---
name: "Stadium jumbotron"
description: "Huge blocky caps smashed across a black LED dot field, a red slab, a yellow disc, one word turned sideways, flashing on the beat."
colors:
  canvas: "#050505"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ff1d25"        # primary accent: the one thing that matters in each frame
  support: "#ffd100"       # supporting colour, used sparingly
  surface: "#151515"       # raised cards and panels
  muted: "#8a8a8a"         # muted captions
typography:
  display:
    fontFamily: Bungee
    fontWeight: 400
  body:
    fontFamily: Barlow Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Stadium jumbotron

A motion-graphics design system from RasanAI's style library (Broadcast). Also known as arena big screen, crowd prompt graphics, scoreboard hype, LED screen graphics.

## Overview

Huge blocky caps smashed across a black LED dot field, a red slab, a yellow disc, one word turned sideways, flashing on the beat.

It feels loud, hyped, communal. Use it for live events and arenas, hype reels, countdowns and drops, sports and music promos.

## Visual language

- **Type:** Bungee (display, weight 400, uppercase, tracking 0em) with Barlow Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** halftone. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Rhythmic**. Motion organized on a regular meter so entrances, pulses and holds repeat at fixed musical intervals, with or without a soundtrack.
- Enter `power3.out`, exit `power3.in`, move `sine.inOut`; durations 125 / 250 / 500 / 1000 / 2000 ms; stagger 125 ms; hold at least 1000 ms.
- Never: fade-up-slide, blur-in, linear-entrance, bounce.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Brutalism
- **Format / purpose:** Event Backdrop, Kinetic Typography
- **Typography:** Display Typography, Dimensional Type
- **Composition / layout system:** Typography-Led Composition, Full Bleed
- **Texture:** Pixelation
- **Color treatment:** High Contrast, Primary Colors
- **Lighting:** Screen Glow
- **Motion language:** Rhythmic
- **Pacing / rhythm:** Hyper-Fast
- **Transition language:** Flash Transition, Hard Cut

## Do's and Don'ts

- Do keep the accent (#ff1d25) for the single most important element in each frame.
- Do use Bungee large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a big-type poster: an LED-screen crowd prompt with a pixel dot field and chunky display caps, flashing rather than composed.

## References

- Search: "stadium jumbotron graphics"
- Search: "arena screen hype animation"
- Search: "make some noise scoreboard graphic"
