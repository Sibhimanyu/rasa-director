---
name: "2 Tone ska"
description: "2 Tone Records look: a hard black-and-white split down the middle, heavy condensed caps reversing across the seam, halftone grit, nothing grey."
colors:
  canvas: "#f4f4f0"        # page ground
  ink: "#0d0d0d"           # headlines and body text
  accent: "#0d0d0d"        # primary accent: the one thing that matters in each frame
  support: "#d62828"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#5c5c5c"         # muted captions
typography:
  display:
    fontFamily: Archivo Black
    fontWeight: 400
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #0d0d0d"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# 2 Tone ska

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as two-tone, ska revival graphics, rude boy style, black-and-white ska.

## Overview

2 Tone Records look: a hard black-and-white split down the middle, heavy condensed caps reversing across the seam, halftone grit, nothing grey.

It feels sharp, defiant, rhythmic. Use it for ska, punk and indie releases, unity campaigns, streetwear drops, club nights.

## Visual language

- **Type:** Archivo Black (display, weight 400, uppercase, tracking -0.01em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #0d0d0d`).
- **Texture:** checker. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Monochrome, Punk / Zine
- **Era / design-movement influence:** 1980s
- **Color treatment:** Black and White, High Contrast
- **Composition / layout system:** Split Screen, Typography-Led Composition
- **Typography:** Grotesk, Condensed
- **Motion language:** Snappy
- **Pacing / rhythm:** Staccato
- **Transition language:** Split, Wipe
- **Shadow / depth cues:** Hard Shadow
- **Shape language:** Rectilinear, Geometric
- **Emotional / brand tone:** Rebellious, Energetic
- **Sound + motion relationship:** Music-Led

## Do's and Don'ts

- Do keep the accent (#0d0d0d) for the single most important element in each frame.
- Do use Archivo Black large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not high-contrast monochrome photography: black and white are graphic halves in dialogue, a split identity with no greys and no photos.

## References

- Search: "2 tone ska graphic design"
- Search: "two tone records poster"
- Search: "black and white ska aesthetic"
