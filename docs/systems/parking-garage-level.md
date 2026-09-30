---
name: "Parking garage level graphics"
description: "A huge stencilled level number painted in one level colour on raw concrete, a caption rule, bay letters and a small occupancy chart."
colors:
  canvas: "#c9c7c1"        # page ground
  ink: "#151515"           # headlines and body text
  accent: "#0a5fc2"        # primary accent: the one thing that matters in each frame
  support: "#ffcc00"       # supporting colour, used sparingly
  surface: "#dedcd6"       # raised cards and panels
  muted: "#595753"         # muted captions
typography:
  display:
    fontFamily: Big Shoulders Stencil Display
    fontWeight: 800
  body:
    fontFamily: Barlow Semi Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Parking garage level graphics

A motion-graphics design system from Rasa Director's style library (Place & wayfinding). Also known as car park wayfinding, parking level signage, supergraphics, garage level numbers, stencilled floor numbers.

## Overview

A huge stencilled level number painted in one level colour on raw concrete, a caption rule, bay letters and a small occupancy chart.

It feels blunt, urban, memorable. Use it for mobility and EV, urban services, stat reveals, chapter numbers.

## Visual language

- **Type:** Big Shoulders Stencil Display (display, weight 800, uppercase, tracking 0em) with Barlow Semi Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Brutalism, Modernist
- **Typography:** Condensed, Display Typography
- **Composition / layout system:** Typography-Led Composition, Asymmetric Composition
- **Information / data visualization:** Number Counter, Statistic Callout
- **Color treatment:** Limited Palette, Accent-Color System
- **Texture:** Print Grain
- **Material / surface language:** Matte Product Surface
- **Motion language:** Heavy
- **Transition language:** Wipe, Hard Cut
- **Emotional / brand tone:** Bold, Confident

## Do's and Don'ts

- Do keep the accent (#0a5fc2) for the single most important element in each frame.
- Do use Big Shoulders Stencil Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not hazard-industrial: a colour-coded level number painted huge on grey concrete, wayfinding rather than yellow warning signage.

## References

- Search: "parking garage supergraphics"
- Search: "car park wayfinding design"
- Search: "stencil number animation"
