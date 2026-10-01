---
name: "Photoreal product CGI"
description: "The product alone on black under studio light, deep float shadow, tight grotesk type, one blue accent, nothing decorative."
colors:
  canvas: "#0a0a0a"        # page ground
  ink: "#f5f5f7"           # headlines and body text
  accent: "#2997ff"        # primary accent: the one thing that matters in each frame
  support: "#a1a1a6"       # supporting colour, used sparingly
  surface: "#1d1d1f"       # raised cards and panels
  muted: "#86868b"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 600
  body:
    fontFamily: Inter Tight
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 24px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Photoreal product CGI

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as product CGI, Apple-style product film, hero render, packshot CGI.

## Overview

The product alone on black under studio light, deep float shadow, tight grotesk type, one blue accent, nothing decorative.

It feels premium, precise, confident. Use it for hardware launches, premium consumer products, app-store heroes, keynote reveals.

## Visual language

- **Type:** Inter Tight (display, weight 600, tracking -0.045em) with Inter Tight for body text.
- **Surfaces:** flat fills, no gradients; corners 24px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Cinematic**. Film-grammar motion: slow push-ins, focus pulls, long eased camera moves and breathing holds under which the frame never fully stops.
- Enter `power2.out`, exit `power2.inOut`, move `sine.inOut`; durations 400 / 700 / 1100 / 1600 / 2400 ms; stagger 160 ms; hold at least 1400 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Photoreal CGI, Luxury
- **Illustration style:** Photorealistic 3D
- **Material / surface language:** Glossy Product Surface, Brushed Metal
- **Composition / layout system:** Single-Object Hero, Negative-Space Composition
- **Photo / video integration:** Device Mockup, Cinematic Product Footage
- **Camera language:** Macro, Orbit
- **VFX / compositing treatment:** Reflections, Depth of Field
- **Motion language:** Cinematic
- **Transition language:** Fade, Match Cut

## Do's and Don'ts

- Do keep the accent (#2997ff) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not glossy 3D: photoreal aims for physical truth (real materials, studio light), not a stylized cartoon sheen.

## References

- Search: "photoreal product CGI animation"
- Search: "Apple style product reveal"
- Search: "cinematic product render film"
