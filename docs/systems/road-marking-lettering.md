---
name: "Road-marking lettering"
description: "Thermoplastic paint on asphalt: towering condensed white words, a traffic-yellow block, lane rules and coarse road grain."
colors:
  canvas: "#2c2d2f"        # page ground
  ink: "#f4f4f0"           # headlines and body text
  accent: "#f5c400"        # primary accent: the one thing that matters in each frame
  support: "#3b3c3f"       # supporting colour, used sparingly
  surface: "#35363a"       # raised cards and panels
  muted: "#9a9a96"         # muted captions
typography:
  display:
    fontFamily: League Gothic
    fontWeight: 400
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Road-marking lettering

A motion-graphics design system from RasanAI's style library (Place & wayfinding). Also known as road markings, street paint type, thermoplastic lettering, painted road text, lane lettering.

## Overview

Thermoplastic paint on asphalt: towering condensed white words, a traffic-yellow block, lane rules and coarse road grain.

It feels loud, streetwise, kinetic. Use it for mobility and delivery, sport and street culture, urban campaigns, kinetic type statements.

## Visual language

- **Type:** League Gothic (display, weight 400, uppercase, tracking 0.02em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Graffiti / Street Art, Swiss / International Typographic Style
- **Typography:** Condensed, Display Typography
- **Composition / layout system:** Typography-Led Composition, Swiss Grid
- **Format / purpose:** Kinetic Typography
- **Color treatment:** High Contrast, Limited Palette
- **Texture:** Digital Noise, Distressed Edges
- **Material / surface language:** Perfectly Flat
- **Motion language:** Snappy
- **Transition language:** Wipe, Hard Cut
- **Emotional / brand tone:** Bold, Energetic

## Do's and Don'ts

- Do keep the accent (#f5c400) for the single most important element in each frame.
- Do use League Gothic large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a big-type poster: the words are painted on asphalt with lane rules and traffic yellow, stretched for drivers, not printed on paper.

## References

- Search: "road marking typography"
- Search: "street paint lettering animation"
- Search: "asphalt text motion graphics"
