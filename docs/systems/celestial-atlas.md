---
name: "Celestial atlas"
description: "An engraved star-atlas plate: midnight-blue ground, pale-gold star points and double-ruled frame, a cartouche title in Fell small caps."
colors:
  canvas: "#0f1c33"        # page ground
  ink: "#efe6cc"           # headlines and body text
  accent: "#d6b36a"        # primary accent: the one thing that matters in each frame
  support: "#9fb3d1"       # supporting colour, used sparingly
  surface: "#15284a"       # raised cards and panels
  muted: "#8e98ad"         # muted captions
typography:
  display:
    fontFamily: IM Fell English SC
    fontWeight: 400
  body:
    fontFamily: IM Fell English
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Celestial atlas

A motion-graphics design system from Rasa Director's style library (Science). Also known as star chart, star atlas, constellation map, uranography, antique sky map.

## Overview

An engraved star-atlas plate: midnight-blue ground, pale-gold star points and double-ruled frame, a cartouche title in Fell small caps.

It feels awed, timeless, scholarly. Use it for astronomy and space stories, science documentaries, planetarium and museum, brand origin myths.

## Visual language

- **Type:** IM Fell English SC (display, weight 400, tracking 0.04em) with IM Fell English for body text.
- **Surfaces:** off-white paper with visible fibre; corners 0px; outlines 2px double in accent.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** line. **Decoration:** stars.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Print-Editorial
- **Illustration style:** Ink Illustration
- **Color treatment:** Limited Palette, Dark UI
- **Typography:** Editorial Serif
- **Line / stroke language:** Double-Line, Hairline
- **Texture:** Print Grain
- **Composition / layout system:** Centered Hero Composition, Symmetrical Composition
- **Motion language:** Luxurious / Slow
- **Pacing / rhythm:** Slow
- **Transition language:** Dissolve, Fade
- **Emotional / brand tone:** Mysterious, Intellectual

## Do's and Don'ts

- Do keep the accent (#d6b36a) for the single most important element in each frame.
- Do use IM Fell English SC large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not orbital space: an antique engraved plate with gold rules and star points, not a black void with orbit paths.

## References

- Search: "star atlas animation"
- Search: "antique celestial map motion graphics"
- Search: "constellation chart title design"
