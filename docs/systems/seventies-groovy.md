---
name: "70s groovy"
description: "Fat swashy bubble type in orange, mustard and brown on warm cream, sunburst rays and a soft film grain."
colors:
  canvas: "#f6e7c8"        # page ground
  ink: "#3b1f0e"           # headlines and body text
  accent: "#e8641b"        # primary accent: the one thing that matters in each frame
  support: "#f2b632"       # supporting colour, used sparingly
  surface: "#fff4de"       # raised cards and panels
  muted: "#8a5a36"         # muted captions
typography:
  display:
    fontFamily: Shrikhand
    fontWeight: 400
  body:
    fontFamily: Chivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 36px
shadows:
  card: "18px 18px 0 #3b1f0e"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# 70s groovy

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as groovy retro, 70s psychedelic type, disco era, hippie retro.

## Overview

Fat swashy bubble type in orange, mustard and brown on warm cream, sunburst rays and a soft film grain.

It feels warm, funky, joyful. Use it for food and drink brands, festival promos, lifestyle and retail campaigns.

## Visual language

- **Type:** Shrikhand (display, weight 400, tracking -0.01em) with Chivo for body text.
- **Surfaces:** flat fills, no gradients; corners 36px; outlines none.
- **Depth:** long shadows (`18px 18px 0 #3b1f0e`).
- **Texture:** grain. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Bouncy**. Objects fall or travel to a boundary and rebound off it in decaying hops, never passing through the target.
- Enter `bounce.out`, exit `back.in(1.7)`, move `bounce.out`; durations 100 / 200 / 350 / 600 / 900 ms; stagger 60 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: bounce.

## The terms that define it

- **Visual style / art direction:** Psychedelic
- **Era / design-movement influence:** 1970s
- **Color treatment:** Warm Palette, Earth Tones
- **Typography:** Display Typography, Inflated Type
- **Texture:** Film Grain
- **Shape language:** Organic
- **Motion language:** Bouncy
- **Transition language:** Wipe, Shape Match

## Do's and Don'ts

- Do keep the accent (#e8641b) for the single most important element in each frame.
- Do use Shrikhand large and confident; one idea per frame.
- Do keep every shadow the same long style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not 60s mid-century: groovy is fat, curvy and warm-brown; mid-century is geometric, atomic and flat.

## References

- Search: "70s groovy typography animation"
- Search: "retro groovy motion graphics"
- Search: "seventies sunburst title"
