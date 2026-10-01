---
name: "Jewelry macro"
description: "Polished platinum cards glinting on midnight navy, star-shaped sparkles, ice-blue glow, slow macro-like drift."
colors:
  canvas: "#0b0f1a"        # page ground
  ink: "#eef2f8"           # headlines and body text
  accent: "#cfe0ff"        # primary accent: the one thing that matters in each frame
  support: "#8aa3cc"       # supporting colour, used sparingly
  surface: "#7d8698"       # raised cards and panels
  muted: "#8791a6"         # muted captions
typography:
  display:
    fontFamily: Italiana
    fontWeight: 400
  body:
    fontFamily: Tenor Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "0 0 24px #cfe0ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Jewelry macro

A motion-graphics design system from RasanAI's style library (Luxury & restrained). Also known as diamond sparkle, fine jewellery film, platinum glint, gemstone macro.

## Overview

Polished platinum cards glinting on midnight navy, star-shaped sparkles, ice-blue glow, slow macro-like drift.

It feels precious, brilliant, delicate. Use it for jewellery and watch ads, engagement and gifting campaigns, premium card launches, luxury product details.

## Visual language

- **Type:** Italiana (display, weight 400, uppercase, tracking 0.12em) with Tenor Sans for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 6px; outlines none.
- **Depth:** glow shadows (`0 0 24px #cfe0ff`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** stars.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Luxury, Metallic
- **Material / surface language:** Metal, Crystal
- **VFX / compositing treatment:** Light Streaks, Glow
- **Camera language:** Macro, Dolly
- **Color treatment:** Cool Palette, Dark UI
- **Typography:** High-Contrast Serif
- **Motion language:** Luxurious / Slow
- **Transition language:** Light Wipe, Dissolve

## Do's and Don'ts

- Do keep the accent (#cfe0ff) for the single most important element in each frame.
- Do use Italiana large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not chrome Y2K: cool and restrained, polished metal with pinpoint sparkle, no rainbow reflections or bubbly type.

## References

- Search: "jewelry commercial sparkle animation"
- Search: "diamond glint motion graphics"
- Search: "platinum luxury product reveal"
