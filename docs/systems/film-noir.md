---
name: "Film noir"
description: "Stark black and white, venetian-blind light striping the frame, a heavy italic-free serif title and deep, smoky shadow."
colors:
  canvas: "#0d0d0d"        # page ground
  ink: "#f2f2f2"           # headlines and body text
  accent: "#bdbdbd"        # primary accent: the one thing that matters in each frame
  support: "#5c5c5c"       # supporting colour, used sparingly
  surface: "#1c1c1c"       # raised cards and panels
  muted: "#8a8a8a"         # muted captions
typography:
  display:
    fontFamily: Playfair Display
    fontWeight: 900
  body:
    fontFamily: Old Standard TT
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Film noir

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as noir, black-and-white thriller, venetian-blind shadows, hard-boiled.

## Overview

Stark black and white, venetian-blind light striping the frame, a heavy italic-free serif title and deep, smoky shadow.

It feels mysterious, tense, dramatic. Use it for teasers, mystery and true-crime, fashion and fragrance, security products.

## Visual language

- **Type:** Playfair Display (display, weight 900, uppercase, tracking 0.04em) with Old Standard TT for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** scanlines. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Cinematic**. Film-grammar motion: slow push-ins, focus pulls, long eased camera moves and breathing holds under which the frame never fully stops.
- Enter `power2.out`, exit `power2.inOut`, move `sine.inOut`; durations 400 / 700 / 1100 / 1600 / 2400 ms; stagger 160 ms; hold at least 1400 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Cinematic, Monochrome
- **Typography:** High-Contrast Serif
- **Color treatment:** Black and White, High Contrast
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **VFX / compositing treatment:** Shadows, Smoke, Grain
- **Texture:** Film Grain
- **Motion language:** Cinematic
- **Camera language:** Push-In
- **Transition language:** Luma Matte, Fade
- **Emotional / brand tone:** Mysterious, Dramatic

## Do's and Don'ts

- Do keep the accent (#bdbdbd) for the single most important element in each frame.
- Do use Playfair Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not neo-noir: no neon or colour at all; drama comes from light and shadow alone.

## References

- Search: "film noir motion graphics"
- Search: "noir title sequence"
- Search: "venetian blind shadow animation"
