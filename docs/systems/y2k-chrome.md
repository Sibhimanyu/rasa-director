---
name: "Y2K chrome"
description: "Liquid-silver chrome cards and wide techno type on icy blue, pink and cyan highlights, four-point sparkles everywhere."
colors:
  canvas: "#dfe7f2"        # page ground
  ink: "#0b1633"           # headlines and body text
  accent: "#ff4fc8"        # primary accent: the one thing that matters in each frame
  support: "#35d6ff"       # supporting colour, used sparingly
  surface: "#c8d2df"       # raised cards and panels
  muted: "#58678a"         # muted captions
typography:
  display:
    fontFamily: Syncopate
    fontWeight: 700
  body:
    fontFamily: Michroma
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 0 24px #ff4fc8"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Y2K chrome

A motion-graphics design system from Rasa Director's style library (Retro & eras). Also known as Y2K aesthetic, millennium chrome, cyber Y2K, chrome bubble.

## Overview

Liquid-silver chrome cards and wide techno type on icy blue, pink and cyan highlights, four-point sparkles everywhere.

It feels shiny, futuristic, nostalgic. Use it for fashion and beauty drops, music releases, Gen-Z social campaigns.

## Visual language

- **Type:** Syncopate (display, weight 700, uppercase, tracking 0.04em) with Michroma for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 28px; outlines 2px solid in #ffffff.
- **Depth:** glow shadows (`0 0 24px #ff4fc8`).
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** stars.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Y2K, Chrome
- **Era / design-movement influence:** Y2K
- **Material / surface language:** Chrome
- **Typography:** Extended, Chrome Type
- **Color treatment:** Iridescent, Cool Palette
- **Iconography:** Glyph Icons
- **Motion language:** Springy
- **Transition language:** Flash Transition, Light Wipe

## Do's and Don'ts

- Do keep the accent (#ff4fc8) for the single most important element in each frame.
- Do use Syncopate large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not Frutiger Aero: Y2K is metallic and techno; Aero is glassy, sky-blue and nature-clean.

## References

- Search: "y2k chrome motion graphics"
- Search: "y2k aesthetic animation"
- Search: "chrome sparkle typography"
