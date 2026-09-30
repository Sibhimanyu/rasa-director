---
name: "Ink brush (sumi-e)"
description: "Expressive black brush strokes on rice paper, lots of empty space, a small vermilion seal, dry-brush edges."
colors:
  canvas: "#f4f0e6"        # page ground
  ink: "#141414"           # headlines and body text
  accent: "#c8321e"        # primary accent: the one thing that matters in each frame
  support: "#555049"       # supporting colour, used sparingly
  surface: "#f8f5ee"       # raised cards and panels
  muted: "#8a8479"         # muted captions
typography:
  display:
    fontFamily: Kaushan Script
    fontWeight: 400
  body:
    fontFamily: Shippori Mincho
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 48px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Ink brush (sumi-e)

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as sumi-e, Japanese ink wash, brush calligraphy, ink wash painting.

## Overview

Expressive black brush strokes on rice paper, lots of empty space, a small vermilion seal, dry-brush edges.

It feels calm, poised, expressive. Use it for tea, wellness and craft, martial arts and sport, cultural campaigns, meditative brand films.

## Visual language

- **Type:** Kaushan Script (display, weight 400, tracking 0em) with Shippori Mincho for body text.
- **Surfaces:** off-white paper with visible fibre; corners 48px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Gestural**. Motion that traces the energy of a hand gesture: sweeping arcs, a fast attack and a dragging finish, like a brush or a flick of the wrist.
- Enter `power3.out`, exit `power2.in`, move `power3.inOut`; durations 150 / 300 / 500 / 800 / 1200 ms; stagger 70 ms; hold at least 800 ms.
- Never: fade-up-slide, fade-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Extreme Minimalism
- **Illustration style:** Brush Illustration, Ink Illustration
- **Texture:** Brush Texture, Ink Bleed
- **Line / stroke language:** Variable Width, Ink
- **Composition / layout system:** Negative-Space Composition, Asymmetric Composition
- **Color treatment:** Black and White, Accent-Color System
- **Motion language:** Gestural
- **Transition language:** Mask Reveal, Dissolve

## Do's and Don'ts

- Do keep the accent (#c8321e) for the single most important element in each frame.
- Do use Kaushan Script large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not marker: strokes swell and taper and break into dry brush; emptiness matters as much as ink.

## References

- Search: "sumi-e ink brush animation"
- Search: "japanese ink wash motion graphics"
- Search: "brush stroke reveal"
