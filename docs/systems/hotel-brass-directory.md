---
name: "Hotel brass signage"
description: "Engraved brass on smoked-oak black: wide-tracked roman capitals, hairline rows, floor numbers in brass rings; a grand hotel's lobby directory."
colors:
  canvas: "#1c1915"        # page ground
  ink: "#efe6d2"           # headlines and body text
  accent: "#c4a46c"        # primary accent: the one thing that matters in each frame
  support: "#7c6440"       # supporting colour, used sparingly
  surface: "#26221c"       # raised cards and panels
  muted: "#9b8f7a"         # muted captions
typography:
  display:
    fontFamily: Marcellus
    fontWeight: 400
  body:
    fontFamily: Jost
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hotel brass signage

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as hotel wayfinding, grand hotel directory, brass plaque signage, lobby directory, hospitality signage.

## Overview

Engraved brass on smoked-oak black: wide-tracked roman capitals, hairline rows, floor numbers in brass rings; a grand hotel's lobby directory.

It feels gracious, discreet, warm. Use it for hospitality and travel, members' clubs, premium services, event programmes.

## Visual language

- **Type:** Marcellus (display, weight 400, uppercase, tracking 0.1em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Art Deco
- **Typography:** Editorial Serif, Display Typography
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition
- **Information / data visualization:** Ranking List
- **Color treatment:** Warm Palette, Dark UI
- **Material / surface language:** Brushed Metal, Wood
- **Line / stroke language:** Hairline
- **Motion language:** Luxurious / Slow
- **Transition language:** Fade, Mask Reveal
- **Pacing / rhythm:** Luxurious
- **Emotional / brand tone:** Luxurious, Calm

## Do's and Don'ts

- Do keep the accent (#c4a46c) for the single most important element in each frame.
- Do use Marcellus large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not black-and-gold luxury: a working directory of floors and hairline rows in brass and ivory, not a glowing gold logo reveal.

## References

- Search: "hotel signage design"
- Search: "brass wayfinding sign"
- Search: "luxury hotel directory motion graphics"
