---
name: "Stencil crate"
description: "Black spray-stencilled numbers and bridged capitals on raw plywood, overspray fuzz, handling marks and a red FRAGILE stamp."
colors:
  canvas: "#c9a06a"        # page ground
  ink: "#17130f"           # headlines and body text
  accent: "#17130f"        # primary accent: the one thing that matters in each frame
  support: "#b3291f"       # supporting colour, used sparingly
  surface: "#d8b27d"       # raised cards and panels
  muted: "#5e4526"         # muted captions
typography:
  display:
    fontFamily: Stardos Stencil
    fontWeight: 700
  body:
    fontFamily: Roboto Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Stencil crate

A motion-graphics design system from Rasa Director's style library (Print). Also known as shipping crate stencil, spray stencil, military stencil, cargo markings, crate lettering.

## Overview

Black spray-stencilled numbers and bridged capitals on raw plywood, overspray fuzz, handling marks and a red FRAGILE stamp.

It feels rugged, utilitarian, no-nonsense. Use it for logistics and shipping, hardware and tools, outdoor and workwear brands, product drop teasers.

## Visual language

- **Type:** Stardos Stencil (display, weight 700, uppercase, tracking 0.04em) with Roboto Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in ink.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** filled. **Decoration:** crosshair.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Grunge, Brutalism
- **Typography:** Condensed, Display Typography
- **Material / surface language:** Wood, Cardboard
- **Texture:** Ink Bleed, Distressed Edges
- **Color treatment:** Earth Tones, Limited Palette
- **Information / data visualization:** Number Counter
- **Motion language:** Heavy
- **Transition language:** Hard Cut, Mask Reveal
- **Emotional / brand tone:** Bold, Urgent

## Do's and Don'ts

- Do keep the accent (#17130f) for the single most important element in each frame.
- Do use Stardos Stencil large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not industrial hazard: no safety yellow or double boxes; bare wood, bridged stencil letters and spray bleed.

## References

- Search: "stencil crate typography animation"
- Search: "shipping crate stencil lettering"
- Search: "spray stencil text motion"
