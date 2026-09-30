---
name: "Large-letter postcard"
description: "Big blocky extruded capitals on linen-textured card, a script 'Greetings from', saturated sky blue and sunset orange, white border."
colors:
  canvas: "#f2e6c8"        # page ground
  ink: "#1b2a4a"           # headlines and body text
  accent: "#e0592a"        # primary accent: the one thing that matters in each frame
  support: "#2a8fb8"       # supporting colour, used sparingly
  surface: "#fbf4e2"       # raised cards and panels
  muted: "#6b6150"         # muted captions
typography:
  display:
    fontFamily: Bowlby One SC
    fontWeight: 400
  body:
    fontFamily: Oswald
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #1b2a4a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Large-letter postcard

A motion-graphics design system from Rasa Director's style library (Print). Also known as Greetings from postcard, linen postcard, Curt Teich postcard, vintage travel postcard.

## Overview

Big blocky extruded capitals on linen-textured card, a script 'Greetings from', saturated sky blue and sunset orange, white border.

It feels sunny, nostalgic, welcoming, fun. Use it for travel and tourism, city and event promos, hospitality, summer campaigns.

## Visual language

- **Type:** Bowlby One SC (display, weight 400, uppercase, tracking 0.01em) with Oswald for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #1b2a4a`).
- **Texture:** paper. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Mid-Century Modern
- **Era / design-movement influence:** Mid-Century Modern
- **Typography:** Extruded 3D Type, Display Typography
- **Color treatment:** High Saturation, Warm Palette
- **Texture:** Paper Grain, Print Grain
- **Depth / dimensionality:** Extruded 2D
- **Material / surface language:** Paper
- **Motion language:** Springy
- **Transition language:** Scale Transition, Push
- **Emotional / brand tone:** Optimistic, Friendly

## Do's and Don'ts

- Do keep the accent (#e0592a) for the single most important element in each frame.
- Do use Bowlby One SC large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not seventies groovy: flat printed linen card with a white border and extruded block caps, not swirly rainbow lettering.

## References

- Search: "greetings from postcard animation"
- Search: "large letter postcard typography"
- Search: "vintage linen postcard motion"
