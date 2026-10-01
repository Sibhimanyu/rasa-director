---
name: "Vellum layers"
description: "Translucent vellum sheets overlapping at slight angles over peach and blue shapes, fibre texture, tape tabs, gentle paper slides."
colors:
  canvas: "#f3efe8"        # page ground
  ink: "#2f2b27"           # headlines and body text
  accent: "#f3b39a"        # primary accent: the one thing that matters in each frame
  support: "#a9c6e6"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#948a7f"         # muted captions
typography:
  display:
    fontFamily: DM Serif Display
    fontWeight: 400
  body:
    fontFamily: DM Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Vellum layers

A motion-graphics design system from RasanAI's style library (Soft & tactile). Also known as tracing paper, translucent paper, frosted paper collage, glassine.

## Overview

Translucent vellum sheets overlapping at slight angles over peach and blue shapes, fibre texture, tape tabs, gentle paper slides.

It feels delicate, crafted, airy. Use it for stationery and wedding brands, architecture concept films, gentle explainers, portfolio reels.

## Visual language

- **Type:** DM Serif Display (display, weight 400, tracking -0.02em) with DM Sans for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 6px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** paper. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Paper Cutout, Glass
- **Material / surface language:** Paper, Frosted Glass
- **Texture:** Paper Grain, Fibers
- **Composition / layout system:** Collage Composition, Layered Depth
- **Color treatment:** Pastel, Low Contrast
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Floating
- **Transition language:** Slide, Page Flip

## Do's and Don'ts

- Do keep the accent (#f3b39a) for the single most important element in each frame.
- Do use DM Serif Display large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not layered cardstock: the sheets are see-through, so colours glow softly through them instead of stacking opaquely.

## References

- Search: "vellum paper animation"
- Search: "translucent paper layers motion"
- Search: "tracing paper collage design"
