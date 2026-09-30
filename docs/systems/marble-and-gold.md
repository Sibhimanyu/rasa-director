---
name: "Marble and gold"
description: "Veined white-marble ground, ivory tiles edged in thin brushed gold, a classical Roman serif and slow, polished reveals."
colors:
  canvas: "#eeebe7"        # page ground
  ink: "#221f1b"           # headlines and body text
  accent: "#b8914f"        # primary accent: the one thing that matters in each frame
  support: "#d8c7a4"       # supporting colour, used sparingly
  surface: "#faf8f5"       # raised cards and panels
  muted: "#8d867c"         # muted captions
typography:
  display:
    fontFamily: Marcellus
    fontWeight: 400
  body:
    fontFamily: Tenor Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Marble and gold

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as marble luxe, Carrara and brass, hotel lobby luxe, stone and gilt.

## Overview

Veined white-marble ground, ivory tiles edged in thin brushed gold, a classical Roman serif and slow, polished reveals.

It feels classical, polished, stately. Use it for hotels and residences, beauty and skincare, jewellery retail, luxury interiors.

## Visual language

- **Type:** Marcellus (display, weight 400, uppercase, tracking 0.08em) with Tenor Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines 2px solid in accent.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** veining. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Metallic
- **Material / surface language:** Ceramic, Metal
- **Line / stroke language:** Hairline
- **Typography:** Editorial Serif, Extended
- **Composition / layout system:** Bento Grid, Symmetrical Composition
- **Color treatment:** Light UI, Warm Palette
- **Motion language:** Luxurious / Slow
- **Transition language:** Light Wipe, Crossfade

## Do's and Don'ts

- Do keep the accent (#b8914f) for the single most important element in each frame.
- Do use Marcellus large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not luxury serif minimal: the marble veining and gilt edges make it ornamental and material, not just typographic.

## References

- Search: "marble and gold motion graphics"
- Search: "luxury marble background animation"
- Search: "gold frame marble reveal"
