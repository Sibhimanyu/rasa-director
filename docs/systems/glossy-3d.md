---
name: "Glossy 3D"
description: "Wet-look candy-pink orbs with hard specular highlights and sparkles on blush, fat display type popping in with overshoot."
colors:
  canvas: "#fde7f1"        # page ground
  ink: "#2a0a3a"           # headlines and body text
  accent: "#ff3d9a"        # primary accent: the one thing that matters in each frame
  support: "#ffc93d"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#9a6a88"         # muted captions
typography:
  display:
    fontFamily: Unbounded
    fontWeight: 900
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 48px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Glossy 3D

A motion-graphics design system from Rasa Director's style library (3D & materials). Also known as candy 3D, glossy plastic render, shiny 3D, bubblegum 3D.

## Overview

Wet-look candy-pink orbs with hard specular highlights and sparkles on blush, fat display type popping in with overshoot.

It feels juicy, playful, loud. Use it for consumer app launches, beauty and snacks, social ads, creator brands.

## Visual language

- **Type:** Unbounded (display, weight 900, tracking -0.04em) with Outfit for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 48px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** emoji3d. **Decoration:** stars.

## Motion

Motion language: **Elastic**. Objects overshoot past their target and oscillate back and forth several times before settling, as if attached by a rubber band.
- Enter `elastic.out(1,0.4)`, exit `back.in(1.4)`, move `elastic.out(1,0.5)`; durations 200 / 350 / 550 / 850 / 1300 ms; stagger 45 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Glossy 3D
- **Illustration style:** 3D Cartoon
- **Material / surface language:** Plastic, Glossy Product Surface
- **Iconography:** 3D Icons
- **Color treatment:** High Saturation, Pastel
- **VFX / compositing treatment:** Reflections, Bloom
- **Typography:** Inflated Type, Display Typography
- **Motion language:** Elastic
- **Transition language:** Scale Transition, Zoom Transition

## Do's and Don'ts

- Do keep the accent (#ff3d9a) for the single most important element in each frame.
- Do use Unbounded large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not soft 3D: glossy is high-gloss plastic with bright specular hits, not matte pastel forms.

## References

- Search: "glossy 3D motion design"
- Search: "candy 3D render animation"
- Search: "shiny plastic 3D brand loop"
