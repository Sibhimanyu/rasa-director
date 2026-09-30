---
name: "Minimal arthouse"
description: "A centred lowercase title in a quiet sans on a bone-coloured still, wide empty margins, soft grain and long, patient dissolves."
colors:
  canvas: "#ebe5da"        # page ground
  ink: "#2a2724"           # headlines and body text
  accent: "#b98b82"        # primary accent: the one thing that matters in each frame
  support: "#7d8a7a"       # supporting colour, used sparingly
  surface: "#f4efe6"       # raised cards and panels
  muted: "#8e877c"         # muted captions
typography:
  display:
    fontFamily: Hanken Grotesk
    fontWeight: 400
  body:
    fontFamily: Hanken Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Minimal arthouse

A motion-graphics design system from Rasa Director's style library (Cinematic & atmospheric). Also known as A24 style, indie film titles, arthouse minimal, festival film look.

## Overview

A centred lowercase title in a quiet sans on a bone-coloured still, wide empty margins, soft grain and long, patient dissolves.

It feels intimate, understated, poetic. Use it for brand films, fashion and lifestyle, film festival promos, manifesto films.

## Visual language

- **Type:** Hanken Grotesk (display, weight 400, lowercase, tracking -0.01em) with Hanken Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Cinematic, Warm Minimalism
- **Typography:** Neutral Sans Serif
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Color treatment:** Muted, Low Contrast
- **Photo / video integration:** Full-Bleed Footage
- **Texture:** Film Grain
- **Motion language:** Luxurious / Slow
- **Pacing / rhythm:** Meditative
- **Transition language:** Dissolve, Hard Cut
- **Emotional / brand tone:** Calm, Cinematic

## Do's and Don'ts

- Do keep the accent (#b98b82) for the single most important element in each frame.
- Do use Hanken Grotesk large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not fashion editorial: small lowercase sans and muted stills, no Didone glamour.

## References

- Search: "a24 style title design"
- Search: "arthouse film titles animation"
- Search: "minimal indie film typography"
