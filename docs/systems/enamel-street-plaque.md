---
name: "Enamel street sign"
description: "A deep-blue vitreous enamel plate with a green rim and white condensed capitals, softly shadowed on pale limestone: a Parisian street sign."
colors:
  canvas: "#e7e1d5"        # page ground
  ink: "#1b2233"           # headlines and body text
  accent: "#1f58b5"        # primary accent: the one thing that matters in each frame
  support: "#1f7a4d"       # supporting colour, used sparingly
  surface: "#0b3b8c"       # raised cards and panels
  muted: "#6b6f78"         # muted captions
typography:
  display:
    fontFamily: IBM Plex Sans Condensed
    fontWeight: 600
  body:
    fontFamily: IBM Plex Sans Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "7px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Enamel street sign

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as Paris street sign, vitreous enamel plaque, street name plate, plaque de rue.

## Overview

A deep-blue vitreous enamel plate with a green rim and white condensed capitals, softly shadowed on pale limestone: a Parisian street sign.

It feels charming, European, timeless. Use it for place and travel brands, food and hospitality, chapter and location cards, local stories.

## Visual language

- **Type:** IBM Plex Sans Condensed (display, weight 600, uppercase, tracking 0.02em) with IBM Plex Sans Condensed for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 28px; outlines 7px solid in #1f7a4d.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Modernist
- **Typography:** Condensed, Neutral Sans Serif
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Color treatment:** Limited Palette, Cool Palette
- **Material / surface language:** Ceramic, Metal
- **Shape language:** Rounded
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Smooth
- **Transition language:** Fade, Scale Transition
- **Emotional / brand tone:** Nostalgic, Friendly

## Do's and Don'ts

- Do keep the accent (#1f58b5) for the single most important element in each frame.
- Do use IBM Plex Sans Condensed large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not a highway guide sign: a small hand-finished enamel plate on stone, blue with a green rim and no route markers.

## References

- Search: "paris street sign design"
- Search: "enamel sign title animation"
- Search: "street name plate motion graphics"
