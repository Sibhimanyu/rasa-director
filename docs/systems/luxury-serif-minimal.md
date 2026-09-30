---
name: "Luxury serif minimal"
description: "A light Garamond line centred on ivory with one hairline icon, taupe accents, immense margins and unhurried fades."
colors:
  canvas: "#f6f2ea"        # page ground
  ink: "#1c1a17"           # headlines and body text
  accent: "#b3a488"        # primary accent: the one thing that matters in each frame
  support: "#d9cfbe"       # supporting colour, used sparingly
  surface: "#fbf9f4"       # raised cards and panels
  muted: "#8e877b"         # muted captions
typography:
  display:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Luxury serif minimal

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as ivory serif, boutique minimal, understated serif, hairline luxury.

## Overview

A light Garamond line centred on ivory with one hairline icon, taupe accents, immense margins and unhurried fades.

It feels refined, calm, assured. Use it for boutique hotels, skincare and wellness brands, private clinics, high-end real estate.

## Visual language

- **Type:** Cormorant Garamond (display, weight 400, tracking -0.01em) with Manrope for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines 1px solid in #cfc5b3.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Clean Minimalism
- **Typography:** Editorial Serif
- **Line / stroke language:** Hairline
- **Color treatment:** Muted, Light UI
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Shadow / depth cues:** No Shadow
- **Emotional / brand tone:** Premium, Calm
- **Motion language:** Luxurious / Slow
- **Transition language:** Fade, Crossfade

## Do's and Don'ts

- Do keep the accent (#b3a488) for the single most important element in each frame.
- Do use Cormorant Garamond large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not warm minimalism: colder and more formal, hairlines instead of blocks, a classical Garamond rather than a soft serif.

## References

- Search: "luxury serif minimal brand motion"
- Search: "elegant serif typography animation"
- Search: "boutique hotel brand film"
