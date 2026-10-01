---
name: "Vinyl record sleeve"
description: "A square LP jacket carrying the title in heavy caps, the black vinyl sliding out with grooves and a coloured centre label, a short track list beside it."
colors:
  canvas: "#e9e3d6"        # page ground
  ink: "#1a1714"           # headlines and body text
  accent: "#d8452b"        # primary accent: the one thing that matters in each frame
  support: "#2d4f7c"       # supporting colour, used sparingly
  surface: "#f3eee4"       # raised cards and panels
  muted: "#6f675b"         # muted captions
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
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Vinyl record sleeve

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as LP sleeve, 12-inch record, album jacket, vinyl mock-up, record release.

## Overview

A square LP jacket carrying the title in heavy caps, the black vinyl sliding out with grooves and a coloured centre label, a short track list beside it.

It feels tactile, warm, collectible. Use it for album and single announcements, label and reissue campaigns, podcast season launches, record-store and venue promos.

## Visual language

- **Type:** Archivo Black (display, weight 400, uppercase, tracking -0.01em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Modernist
- **Material / surface language:** Vinyl, Paper
- **Composition / layout system:** Single-Object Hero, Asymmetric Composition
- **Typography:** Grotesk
- **Color treatment:** Limited Palette, Warm Palette
- **Shape language:** Circular, Rectilinear
- **Motion language:** Smooth
- **Transition language:** Slide, Mask Reveal
- **Sound + motion relationship:** Music-Led
- **Emotional / brand tone:** Nostalgic, Confident

## Do's and Don'ts

- Do keep the accent (#d8452b) for the single most important element in each frame.
- Do use Archivo Black large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not the Blue Note sleeve: this is the object itself, jacket and disc, not one label's cropped typographic cover.

## References

- Search: "vinyl record sleeve animation"
- Search: "album release record slide out motion"
- Search: "LP mockup title animation"
