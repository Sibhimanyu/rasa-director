---
name: "Hyperpop"
description: "Maximal internet pop: acid-lime ground, puffy bubble type, bubblegum-pink and baby-blue cut-outs, glossy 3D hearts, sparkle glints and chromatic fringes."
colors:
  canvas: "#c8ff3a"        # page ground
  ink: "#111111"           # headlines and body text
  accent: "#ff4fd8"        # primary accent: the one thing that matters in each frame
  support: "#7fd1ff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#4a5a10"         # muted captions
typography:
  display:
    fontFamily: Bagel Fat One
    fontWeight: 400
  body:
    fontFamily: Space Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "10px 10px 0 #111111"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hyperpop

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as hyperpop cover art, digicore, PC Music aesthetic, Y2K internet pop.

## Overview

Maximal internet pop: acid-lime ground, puffy bubble type, bubblegum-pink and baby-blue cut-outs, glossy 3D hearts, sparkle glints and chromatic fringes.

It feels chaotic, sugary, extremely online. Use it for pop and electronic releases, Gen Z brand social, creator merch drops, gaming and streaming promos.

## Visual language

- **Type:** Bagel Fat One (display, weight 400, lowercase, tracking -0.01em) with Space Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners 28px; outlines 4px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #111111`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** stars.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Y2K, Mixed-Media Collage
- **Typography:** Inflated Type
- **Iconography:** 3D Icons
- **Color treatment:** Fluorescent, High Saturation
- **VFX / compositing treatment:** Chromatic Aberration
- **Composition / layout system:** Collage Composition, Asymmetric Composition
- **Motion language:** Bouncy
- **Pacing / rhythm:** Hyper-Fast
- **Transition language:** Glitch Transition, Zoom Transition
- **Shadow / depth cues:** Hard Shadow
- **Shape language:** Inflated, Blob-Like
- **Emotional / brand tone:** Playful, Youthful
- **Sound + motion relationship:** Music-Led, Synth Effects

## Do's and Don'ts

- Do keep the accent (#ff4fd8) for the single most important element in each frame.
- Do use Bagel Fat One large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Y2K chrome: hyperpop is louder and messier, acid lime and bubblegum with cut-outs and fringing, not a cool silver tech sheen.

## References

- Search: "hyperpop album cover design"
- Search: "hyperpop aesthetic animation"
- Search: "y2k internet pop graphics"
