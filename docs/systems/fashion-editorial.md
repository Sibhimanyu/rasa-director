---
name: "Fashion editorial"
description: "Towering uppercase Didone with hairline serifs, stark white page, a blush photo plate and wide-tracked captions; silence as luxury."
colors:
  canvas: "#fbfaf8"        # page ground
  ink: "#0d0d0d"           # headlines and body text
  accent: "#e8cfc4"        # primary accent: the one thing that matters in each frame
  support: "#b8a398"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#9b9690"         # muted captions
typography:
  display:
    fontFamily: Bodoni Moda
    fontWeight: 500
  body:
    fontFamily: Jost
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Fashion editorial

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as Didone fashion, Vogue style, high-fashion layout, luxury magazine.

## Overview

Towering uppercase Didone with hairline serifs, stark white page, a blush photo plate and wide-tracked captions; silence as luxury.

It feels glamorous, cool, exacting. Use it for fashion and beauty launches, lookbooks, campaign films, retail teasers.

## Visual language

- **Type:** Bodoni Moda (display, weight 500, uppercase, tracking 0.02em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Fashion Editorial, Luxury
- **Typography:** High-Contrast Serif, Display Typography
- **Composition / layout system:** Editorial Grid, Negative-Space Composition, Asymmetric Composition
- **Color treatment:** Limited Palette, High Contrast
- **Photo / video integration:** Masked Photography, Photo + Typography
- **Motion language:** Luxurious / Slow
- **Pacing / rhythm:** Slow
- **Transition language:** Crossfade, Mask Reveal
- **Emotional / brand tone:** Luxurious, Editorial

## Do's and Don'ts

- Do keep the accent (#e8cfc4) for the single most important element in each frame.
- Do use Bodoni Moda large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not fashion minimal: a full spread with a photo plate and captions, not a lone headline on white.

## References

- Search: "fashion editorial motion graphics"
- Search: "didone typography animation"
- Search: "vogue style title animation"
