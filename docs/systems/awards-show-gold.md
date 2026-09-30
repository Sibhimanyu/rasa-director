---
name: "Awards-show gold"
description: "Cream serif capitals with deep gold 3D extrusion on black, a gold star, spotlight rays fanning behind and a specular glint."
colors:
  canvas: "#0b0706"        # page ground
  ink: "#f7ecd2"           # headlines and body text
  accent: "#d4a640"        # primary accent: the one thing that matters in each frame
  support: "#7a1020"       # supporting colour, used sparingly
  surface: "#1a1310"       # raised cards and panels
  muted: "#9c8a66"         # muted captions
typography:
  display:
    fontFamily: Playfair Display SC
    fontWeight: 700
  body:
    fontFamily: Jost
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Awards-show gold

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as award ceremony graphics, red carpet look, Oscars style, winner reveal.

## Overview

Cream serif capitals with deep gold 3D extrusion on black, a gold star, spotlight rays fanning behind and a specular glint.

It feels celebratory, glamorous, grand. Use it for awards and winner reveals, milestones and anniversaries, galas and events, customer awards.

## Visual language

- **Type:** Playfair Display SC (display, weight 700, uppercase, tracking 0.02em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Luxury, Metallic
- **Format / purpose:** Event Opener, Title Sequence
- **Typography:** High-Contrast Serif, Extruded 3D Type
- **Lighting:** Spotlight Pool, Volumetric Light
- **Color treatment:** Warm Palette, High Contrast
- **Material / surface language:** Metal
- **Motion language:** Luxurious / Slow
- **Pacing / rhythm:** Slow
- **Transition language:** Light Wipe, Fade
- **Emotional / brand tone:** Premium, Dramatic

## Do's and Don'ts

- Do keep the accent (#d4a640) for the single most important element in each frame.
- Do use Playfair Display SC large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not black-and-gold luxury: showbiz and spotlit, with extruded trophy type and rays, not quiet hairlines and engraved restraint.

## References

- Search: "award show graphics gold"
- Search: "awards ceremony motion graphics"
- Search: "winner reveal gold animation"
