---
name: "Surreal 3D"
description: "Pastel peach dreamscape with arched forms, long soft shadows and slow orbiting objects; impossible, calm, cinematic."
colors:
  canvas: "#f3cdb8"        # page ground
  ink: "#2b1320"           # headlines and body text
  accent: "#6a4bd6"        # primary accent: the one thing that matters in each frame
  support: "#ff8a3d"       # supporting colour, used sparingly
  surface: "#fbe3d6"       # raised cards and panels
  muted: "#8a5f60"         # muted captions
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 700
  body:
    fontFamily: Bricolage Grotesque
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 48px
shadows:
  card: "18px 18px 0 #2b1320"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Surreal 3D

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as dreamy 3D, surreal render, pastel dreamscape, 3D dreamworld.

## Overview

Pastel peach dreamscape with arched forms, long soft shadows and slow orbiting objects; impossible, calm, cinematic.

It feels dreamy, curious, calm. Use it for brand films, art and fashion, music visuals, wellness and lifestyle.

## Visual language

- **Type:** Bricolage Grotesque (display, weight 700, tracking -0.04em) with Bricolage Grotesque for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 48px; outlines none.
- **Depth:** long shadows (`18px 18px 0 #2b1320`).
- **Texture:** grain. **Icons:** filled. **Decoration:** orbits.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Surreal 3D
- **Illustration style:** Surreal 3D, 3D Soft Forms
- **Depth / dimensionality:** Full 3D Environment
- **Composition / layout system:** Single-Object Hero, Negative-Space Composition
- **Color treatment:** Pastel, Warm Palette
- **Shadow / depth cues:** Long Shadow
- **Camera language:** Orbit, Dolly
- **Motion language:** Luxurious / Slow
- **Transition language:** Dissolve, Camera Move Transition

## Do's and Don'ts

- Do keep the accent (#6a4bd6) for the single most important element in each frame.
- Do use Bricolage Grotesque large and confident; one idea per frame.
- Do keep every shadow the same long style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not soft 3D product UI: surreal 3D is a scene, impossible architecture and objects, not floating interface cards.

## References

- Search: "surreal 3D animation pastel"
- Search: "dreamscape 3D render loop"
- Search: "surreal architecture motion design"
