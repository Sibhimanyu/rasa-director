---
name: "Acid graphics"
description: "Black void, chrome and toxic lime, extended wide type, crosshairs and tiny technical labels, glitchy and rave-flyer sharp."
colors:
  canvas: "#0a0a0a"        # page ground
  ink: "#f0f0f0"           # headlines and body text
  accent: "#c6ff00"        # primary accent: the one thing that matters in each frame
  support: "#b6b6c8"       # supporting colour, used sparingly
  surface: "#1a1a1a"       # raised cards and panels
  muted: "#8a8a8a"         # muted captions
typography:
  display:
    fontFamily: Unbounded
    fontWeight: 900
  body:
    fontFamily: Space Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Acid graphics

A motion-graphics design system from Rasa Director's style library (Bold & graphic). Also known as acid design, new acid, rave graphics, post-Y2K acid.

## Overview

Black void, chrome and toxic lime, extended wide type, crosshairs and tiny technical labels, glitchy and rave-flyer sharp.

It feels edgy, underground, futuristic, hypnotic. Use it for music releases, streetwear drops, club and festival promos, web3 and gaming teasers.

## Visual language

- **Type:** Unbounded (display, weight 900, uppercase, tracking 0.02em) with Space Mono for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 0px; outlines 1px solid in accent.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** glyph. **Decoration:** crosshair.

## Motion

Motion language: **Glitchy**. Motion that simulates digital failure: horizontal slice offsets, RGB channel splits, flicker and frame skips.
- Enter `steps(5)`, exit `steps(3)`, move `steps(8)`; durations 60 / 100 / 160 / 250 / 400 ms; stagger 30 ms; hold at least 600 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, scale-pop.
- Preview entrance: glitch.

## The terms that define it

- **Visual style / art direction:** Acid Graphics, Chrome
- **Era / design-movement influence:** Y2K
- **Color treatment:** Dark UI, Fluorescent
- **Typography:** Extended, Distorted Type
- **VFX / compositing treatment:** Glitch, Noise
- **Texture:** Digital Noise
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition
- **Motion language:** Glitchy
- **Transition language:** Glitch Transition, Flash Transition

## Do's and Don'ts

- Do keep the accent (#c6ff00) for the single most important element in each frame.
- Do use Unbounded large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not cyberpunk: acid is flat-black, chrome and lime with flyer typography, not neon cities or HUD blue.

## References

- Search: "acid graphics motion design"
- Search: "acid rave poster animation"
- Search: "chrome lime acid type"
