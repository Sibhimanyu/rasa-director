---
name: "Blind deboss"
description: "No ink at all: type and marks pressed into heavy off-white cotton card, readable only as soft shadowed dents in raking light."
colors:
  canvas: "#efebe3"        # page ground
  ink: "#57524a"           # headlines and body text
  accent: "#d9d3c7"        # primary accent: the one thing that matters in each frame
  support: "#c7c0b2"       # supporting colour, used sparingly
  surface: "#e9e4da"       # raised cards and panels
  muted: "#8b8478"         # muted captions
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
  md: 4px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Blind deboss

A motion-graphics design system from RasanAI's style library (Print). Also known as blind emboss, debossed stationery, blind embossing, tone-on-tone letterpress.

## Overview

No ink at all: type and marks pressed into heavy off-white cotton card, readable only as soft shadowed dents in raking light.

It feels restrained, tactile, premium, silent. Use it for luxury and fashion reveals, architecture and design studios, wedding and invitation brands, logo reveals.

## Visual language

- **Type:** Bodoni Moda (display, weight 500, uppercase, tracking 0.1em) with Jost for body text.
- **Surfaces:** off-white paper with visible fibre; corners 4px; outlines none.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** paper. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Extreme Minimalism, Luxury
- **Material / surface language:** Paper
- **Shadow / depth cues:** Inner Shadow
- **Texture:** Paper Grain, Fibers
- **Color treatment:** Monochrome, Low Contrast
- **Typography:** High-Contrast Serif
- **Lighting:** Split Side Light
- **Motion language:** Luxurious / Slow
- **Transition language:** Fade, Light Wipe
- **Emotional / brand tone:** Premium, Minimal

## Do's and Don'ts

- Do keep the accent (#d9d3c7) for the single most important element in each frame.
- Do use Bodoni Moda large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not neumorphism: nothing floats up as UI; the paper is pressed down and the only colour is the card itself.

## References

- Search: "blind deboss logo reveal"
- Search: "embossed paper animation"
- Search: "debossed letterpress mockup motion"
