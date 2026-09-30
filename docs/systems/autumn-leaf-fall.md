---
name: "Autumn leaf fall"
description: "Words tumbling like maple leaves across a wet-bark ground in maple orange, ochre and pale birch, set in heavy Bricolage Grotesque."
colors:
  canvas: "#2a1c13"        # page ground
  ink: "#f4e7d1"           # headlines and body text
  accent: "#df6a2c"        # primary accent: the one thing that matters in each frame
  support: "#e3ad3e"       # supporting colour, used sparingly
  surface: "#3a2a1e"       # raised cards and panels
  muted: "#b39a80"         # muted captions
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 800
  body:
    fontFamily: Bricolage Grotesque
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Autumn leaf fall

A motion-graphics design system from Rasa Director's style library (Nature & material). Also known as autumn palette, fall foliage, leaf litter, harvest season.

## Overview

Words tumbling like maple leaves across a wet-bark ground in maple orange, ochre and pale birch, set in heavy Bricolage Grotesque.

It feels warm, wistful, seasonal. Use it for seasonal campaigns, food and drink, back-to-school and harvest, retail and social.

## Visual language

- **Type:** Bricolage Grotesque (display, weight 800, tracking -0.04em) with Bricolage Grotesque for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Editorial, Organic / Biomorphic
- **Typography:** Display Typography, Grotesk
- **Composition / layout system:** Typography-Led Composition, Asymmetric Composition
- **Color treatment:** Warm Palette, Earth Tones
- **Texture:** Film Grain
- **Lighting:** Golden Hour
- **Motion language:** Floating
- **Transition language:** Push, Color Match
- **Emotional / brand tone:** Nostalgic, Friendly

## Do's and Don'ts

- Do keep the accent (#df6a2c) for the single most important element in each frame.
- Do use Bricolage Grotesque large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not seventies groovy: no retro rounded type or stripes; the colour is foliage, the motion is falling leaves on dark ground.

## References

- Search: "autumn leaves kinetic typography"
- Search: "fall foliage motion graphics"
- Search: "autumn season title animation"
