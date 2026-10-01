---
name: "Dark atmospheric tech launch"
description: "Product floats out of pure black, rim-lit in a violet glow, glass panels and giant tight sans; slow push-ins and drifting light."
colors:
  canvas: "#050507"        # page ground
  ink: "#f5f5f7"           # headlines and body text
  accent: "#7b61ff"        # primary accent: the one thing that matters in each frame
  support: "#2dd4ff"       # supporting colour, used sparingly
  surface: "#141418"       # raised cards and panels
  muted: "#86868b"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 700
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 0 24px #7b61ff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dark atmospheric tech launch

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as keynote reveal, Apple event style, black product reveal, dark launch film.

## Overview

Product floats out of pure black, rim-lit in a violet glow, glass panels and giant tight sans; slow push-ins and drifting light.

It feels premium, futuristic, hushed. Use it for product launch films, hardware and AI reveals, keynote openers, app store promos.

## Visual language

- **Type:** Inter Tight (display, weight 700, tracking -0.04em) with Inter for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 28px; outlines none.
- **Depth:** glow shadows (`0 0 24px #7b61ff`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Cinematic, Futuristic Tech
- **Format / purpose:** Product Launch Film, Feature Reveal
- **Typography:** Neo-Grotesk
- **Composition / layout system:** Single-Object Hero, Negative-Space Composition
- **Photo / video integration:** Cinematic Product Footage, Device Mockup
- **Color treatment:** Dark UI, Gradient
- **VFX / compositing treatment:** Glow, Bloom, Depth of Field
- **Motion language:** Luxurious / Slow
- **Camera language:** Push-In, Orbit
- **Transition language:** Fade, Light Wipe

## Do's and Don'ts

- Do keep the accent (#7b61ff) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not sci-fi HUD: no readouts or rings; just darkness, light and the product.

## References

- Search: "dark product reveal animation"
- Search: "apple keynote style launch video"
- Search: "cinematic tech launch film"
