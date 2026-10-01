---
name: "Real-estate brochure"
description: "An airy property brochure: a sunlit sage duotone plate, wide-tracked geometric capitals, stone and white space, and plot details in small caps."
colors:
  canvas: "#f6f5f1"        # page ground
  ink: "#22262a"           # headlines and body text
  accent: "#b7c4ab"        # primary accent: the one thing that matters in each frame
  support: "#6e7f79"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#7c8079"         # muted captions
typography:
  display:
    fontFamily: Jost
    fontWeight: 500
  body:
    fontFamily: Jost
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

# Real-estate brochure

A motion-graphics design system from RasanAI's style library (Place & wayfinding). Also known as property brochure, development brochure, residential marketing, property listing design.

## Overview

An airy property brochure: a sunlit sage duotone plate, wide-tracked geometric capitals, stone and white space, and plot details in small caps.

It feels aspirational, calm, spacious. Use it for property and interiors, hospitality, architecture studios, premium launches.

## Visual language

- **Type:** Jost (display, weight 500, uppercase, tracking 0.12em) with Jost for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism, Editorial
- **Typography:** Geometric Sans
- **Composition / layout system:** Asymmetric Composition, Negative-Space Composition
- **Photo / video integration:** Masked Photography, Ken Burns Effect
- **Color treatment:** Muted, Light UI
- **Lighting:** Golden Hour
- **Motion language:** Luxurious / Slow
- **Camera language:** Push-In
- **Transition language:** Dissolve, Mask Reveal
- **Emotional / brand tone:** Premium, Calm

## Do's and Don'ts

- Do keep the accent (#b7c4ab) for the single most important element in each frame.
- Do use Jost large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not an editorial photo essay: sales-brochure calm, wide-tracked capitals and plot numbers, no double rules or reportage captions.

## References

- Search: "real estate brochure design"
- Search: "property marketing video"
- Search: "luxury residential motion graphics"
