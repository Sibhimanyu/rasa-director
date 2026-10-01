---
name: "Main title sequence"
description: "Widely tracked uppercase serif credits fading on near-black, warm gold hairlines, heavy film grain and long, patient holds."
colors:
  canvas: "#0b0b0c"        # page ground
  ink: "#efe9dc"           # headlines and body text
  accent: "#c9a86a"        # primary accent: the one thing that matters in each frame
  support: "#6b5a3a"       # supporting colour, used sparingly
  surface: "#161517"       # raised cards and panels
  muted: "#8c867a"         # muted captions
typography:
  display:
    fontFamily: Cormorant Garamond
    fontWeight: 500
  body:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Main title sequence

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as opening titles, film credits, prestige TV titles, title card.

## Overview

Widely tracked uppercase serif credits fading on near-black, warm gold hairlines, heavy film grain and long, patient holds.

It feels cinematic, expectant, prestigious. Use it for opening titles, brand film openers, event openers, trailers.

## Visual language

- **Type:** Cormorant Garamond (display, weight 500, uppercase, tracking 0.18em) with Cormorant Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Cinematic, Extreme Minimalism
- **Format / purpose:** Title Sequence, Opening Titles
- **Typography:** Editorial Serif
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Color treatment:** Dark UI, Limited Palette
- **Texture:** Film Grain
- **Motion language:** Luxurious / Slow
- **Pacing / rhythm:** Slow
- **Transition language:** Fade, Dissolve
- **Emotional / brand tone:** Cinematic, Mysterious

## Do's and Don'ts

- Do keep the accent (#c9a86a) for the single most important element in each frame.
- Do use Cormorant Garamond large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a trailer: slow fades and quiet holds instead of slams, and the type stays small and spaced.

## References

- Search: "film opening title sequence"
- Search: "prestige tv title design"
- Search: "cinematic title card animation"
