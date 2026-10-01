---
name: "Archival documentary"
description: "Sepia photographs and clippings laid on aged paper, slow pans and push-ins, typewriter captions and faded brick-red annotation."
colors:
  canvas: "#e6dcc6"        # page ground
  ink: "#2b2219"           # headlines and body text
  accent: "#a4472f"        # primary accent: the one thing that matters in each frame
  support: "#b9a27a"       # supporting colour, used sparingly
  surface: "#f3ead6"       # raised cards and panels
  muted: "#7f6f58"         # muted captions
typography:
  display:
    fontFamily: Libre Caslon Text
    fontWeight: 700
  body:
    fontFamily: Courier Prime
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Archival documentary

A motion-graphics design system from RasanAI's style library (Cinematic & atmospheric). Also known as Ken Burns effect, historical documentary, archive collage, old photo montage.

## Overview

Sepia photographs and clippings laid on aged paper, slow pans and push-ins, typewriter captions and faded brick-red annotation.

It feels historic, intimate, reflective. Use it for company history films, anniversaries, museum and heritage, biographical stories.

## Visual language

- **Type:** Libre Caslon Text (display, weight 700, tracking -0.01em) with Courier Prime for body text.
- **Surfaces:** off-white paper with visible fibre; corners 0px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** paper. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Documentary, Mixed-Media Collage
- **Illustration style:** Photo Collage
- **Photo / video integration:** Ken Burns Effect, Photo Cutout
- **Composition / layout system:** Collage Composition, Layered Depth
- **Color treatment:** Earth Tones, Muted
- **Texture:** Paper Grain, Dust
- **Material / surface language:** Paper
- **Motion language:** Luxurious / Slow
- **Camera language:** Push-In, Pan
- **Transition language:** Dissolve, Camera Move Transition

## Do's and Don'ts

- Do keep the accent (#a4472f) for the single most important element in each frame.
- Do use Libre Caslon Text large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not scrapbook: the scraps are real archival records moved with slow camera, not decorative craft.

## References

- Search: "ken burns effect archive documentary"
- Search: "historical photo montage animation"
- Search: "archival documentary motion graphics"
