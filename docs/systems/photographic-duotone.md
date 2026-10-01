---
name: "Cinematic duotone"
description: "Photography gradient-mapped to deep indigo and ember orange, washed panels, bright cream type and soft film grain."
colors:
  canvas: "#1b1540"        # page ground
  ink: "#fbe9d6"           # headlines and body text
  accent: "#ff6b3d"        # primary accent: the one thing that matters in each frame
  support: "#6a3fd1"       # supporting colour, used sparingly
  surface: "#2a2160"       # raised cards and panels
  muted: "#b2a3d6"         # muted captions
typography:
  display:
    fontFamily: Schibsted Grotesk
    fontWeight: 800
  body:
    fontFamily: Schibsted Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Cinematic duotone

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as photo duotone, two-tone grade, duotone photography, gradient-map photos.

## Overview

Photography gradient-mapped to deep indigo and ember orange, washed panels, bright cream type and soft film grain.

It feels moody, bold, atmospheric. Use it for music and events, brand campaigns, album and artist promos, social teasers.

## Visual language

- **Type:** Schibsted Grotesk (display, weight 800, tracking -0.03em) with Schibsted Grotesk for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 4px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Duotone, Cinematic
- **Color treatment:** Duotone, Gradient
- **Photo / video integration:** Masked Photography, Parallax Photography
- **Composition / layout system:** Floating Cards, Layered Depth
- **Typography:** Grotesk
- **Texture:** Film Grain
- **Motion language:** Smooth
- **Camera language:** Dolly
- **Transition language:** Color Match, Crossfade

## Do's and Don'ts

- Do keep the accent (#ff6b3d) for the single most important element in each frame.
- Do use Schibsted Grotesk large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not risograph: a smooth photographic gradient map in two colours, not overprinted spot inks.

## References

- Search: "duotone photo animation"
- Search: "cinematic duotone motion graphics"
- Search: "gradient map photography video"
