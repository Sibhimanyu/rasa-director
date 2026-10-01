---
name: "Shoegaze sleeve"
description: "Dream-pop sleeve: an out-of-focus photograph drowned in rose-red and magenta haze, small lower-case serif, warm light leaks and grain."
colors:
  canvas: "#2a0610"        # page ground
  ink: "#ffd9e2"           # headlines and body text
  accent: "#ff3d6e"        # primary accent: the one thing that matters in each frame
  support: "#b0126a"       # supporting colour, used sparingly
  surface: "#3a0a18"       # raised cards and panels
  muted: "#d98aa0"         # muted captions
typography:
  display:
    fontFamily: Cormorant
    fontWeight: 500
  body:
    fontFamily: Work Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Shoegaze sleeve

A motion-graphics design system from RasanAI's style library (Music & scene). Also known as dream pop cover, Loveless-style blur, 4AD-era sleeve, shoegaze album art.

## Overview

Dream-pop sleeve: an out-of-focus photograph drowned in rose-red and magenta haze, small lower-case serif, warm light leaks and grain.

It feels hazy, romantic, hypnotic. Use it for indie and alternative releases, fashion films, fragrance and beauty teasers, music video titles.

## Visual language

- **Type:** Cormorant (display, weight 500, lowercase, tracking 0.01em) with Work Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Cinematic
- **Photo / video integration:** Full-Bleed Footage
- **VFX / compositing treatment:** Depth of Field, Grain
- **Color treatment:** High Saturation, Warm Palette
- **Color grade:** Tinted Monochrome
- **Camera language:** Rack Focus
- **Typography:** Editorial Serif
- **Composition / layout system:** Full Bleed, Negative-Space Composition
- **Motion language:** Fluid
- **Pacing / rhythm:** Slow
- **Transition language:** Dissolve, Blur Transition
- **Shadow / depth cues:** No Shadow
- **Shape language:** Organic
- **Emotional / brand tone:** Mysterious, Dramatic
- **Sound + motion relationship:** Music-Led

## Do's and Don'ts

- Do keep the accent (#ff3d6e) for the single most important element in each frame.
- Do use Cormorant large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not dreamy soft-focus pastel: the blur is saturated and overdriven, rose-red and magenta like a wall of feedback, not calm wellness pastel.

## References

- Search: "shoegaze album cover aesthetic"
- Search: "loveless cover style blur"
- Search: "dream pop music video titles"
