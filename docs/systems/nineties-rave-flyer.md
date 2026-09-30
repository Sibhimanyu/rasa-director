---
name: "90s rave flyer"
description: "Acid yellow, magenta and cyan on black, shaded 3D display type, halftone dots and stacked colour offsets in dense tiles."
colors:
  canvas: "#0a0a0a"        # page ground
  ink: "#eaff00"           # headlines and body text
  accent: "#ff00a8"        # primary accent: the one thing that matters in each frame
  support: "#00e5ff"       # supporting colour, used sparingly
  surface: "#1a1a1a"       # raised cards and panels
  muted: "#b7c400"         # muted captions
typography:
  display:
    fontFamily: Bungee Shade
    fontWeight: 400
  body:
    fontFamily: Bungee
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "7px 7px 0 #ff00a8, 14px 14px 0 #eaff00"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# 90s rave flyer

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as acid house flyer, rave graphics, 90s club flyer, acid smiley.

## Overview

Acid yellow, magenta and cyan on black, shaded 3D display type, halftone dots and stacked colour offsets in dense tiles.

It feels loud, euphoric, underground. Use it for club and festival promos, music drops, streetwear, energy drinks.

## Visual language

- **Type:** Bungee Shade (display, weight 400, uppercase, tracking 0em) with Bungee for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in ink.
- **Depth:** layered shadows (`7px 7px 0 #ff00a8, 14px 14px 0 #eaff00`).
- **Texture:** halftone. **Icons:** filled. **Decoration:** confetti.

## Motion

Motion language: **Beat-Synchronized**. Motion locked to the transients of a specific music track so impacts, cuts and pulses land exactly on kicks, snares and drops.
- Enter `power4.out`, exit `power4.in`, move `expo.out`; durations 117 / 234 / 469 / 938 / 1875 ms; stagger 234 ms; hold at least 938 ms.
- Never: fade-up-slide, linear-entrance, blur-in, bounce, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Acid Graphics, Psychedelic
- **Era / design-movement influence:** 1990s
- **Color treatment:** Fluorescent, High Contrast
- **Typography:** Display Typography, Dimensional Type
- **Texture:** Halftone
- **Shadow / depth cues:** Layered Shadows
- **Motion language:** Beat-Synchronized
- **Transition language:** Flash Transition, Glitch Transition

## Do's and Don'ts

- Do keep the accent (#ff00a8) for the single most important element in each frame.
- Do use Bungee Shade large and confident; one idea per frame.
- Do keep every shadow the same layered style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not synthwave: rave flyers are fluoro, dense and xeroxed, not smooth neon sunsets.

## References

- Search: "90s rave flyer animation"
- Search: "acid house graphics motion"
- Search: "rave poster typography"
