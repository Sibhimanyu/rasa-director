---
name: "Art Nouveau"
description: "Mucha-style poster: a haloed arch panel framed in old-gold double lines, floral ornaments, sage and dusty rose, decorative swash lettering."
colors:
  canvas: "#dcd3b4"        # page ground
  ink: "#2c281d"           # headlines and body text
  accent: "#a67a2e"        # primary accent: the one thing that matters in each frame
  support: "#b0646a"       # supporting colour, used sparingly
  surface: "#f1e8cf"       # raised cards and panels
  muted: "#6f684f"         # muted captions
typography:
  display:
    fontFamily: Macondo Swash Caps
    fontWeight: 400
  body:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 48px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Art Nouveau

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Mucha style, Jugendstil, Liberty style, whiplash ornament, Belle Époque poster.

## Overview

Mucha-style poster: a haloed arch panel framed in old-gold double lines, floral ornaments, sage and dusty rose, decorative swash lettering.

It feels romantic, ornate, graceful. Use it for perfume, tea and botanical brands, theatre and festival titles, wedding and events, heritage packaging.

## Visual language

- **Type:** Macondo Swash Caps (display, weight 400, tracking 0.01em) with Cormorant Garamond for body text.
- **Surfaces:** off-white paper with visible fibre; corners 48px; outlines 3px double in accent.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Luxury
- **Illustration style:** Editorial Illustration, Textured Vector
- **Shape language:** Organic, Rounded
- **Line / stroke language:** Double-Line, Variable Width
- **Color treatment:** Muted, Earth Tones
- **Typography:** Display Typography, Editorial Serif
- **Composition / layout system:** Symmetrical Composition, Centered Hero Composition
- **Texture:** Paper Grain
- **Motion language:** Fluid
- **Transition language:** Dissolve, Mask Reveal

## Do's and Don'ts

- Do keep the accent (#a67a2e) for the single most important element in each frame.
- Do use Macondo Swash Caps large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not art deco: nouveau is organic, floral and curving (1890s); deco is geometric, symmetrical and metallic (1920s).

## References

- Search: "Alphonse Mucha animation"
- Search: "art nouveau motion graphics"
- Search: "art nouveau poster title"
