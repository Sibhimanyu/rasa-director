---
name: "Hand-lettered script"
description: "One big flowing script headline with a swash underline on warm cream, deep burgundy ink, tiny spaced caps below."
colors:
  canvas: "#f7efe2"        # page ground
  ink: "#5a1a2a"           # headlines and body text
  accent: "#d98c3f"        # primary accent: the one thing that matters in each frame
  support: "#5a1a2a"       # supporting colour, used sparingly
  surface: "#fff8ec"       # raised cards and panels
  muted: "#9a7a6a"         # muted captions
typography:
  display:
    fontFamily: Pacifico
    fontWeight: 400
  body:
    fontFamily: Josefin Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 20px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Hand-lettered script

A motion-graphics design system from RasanAI's style library (Handmade & printed). Also known as hand lettering, brush script, sign-painter script, calligraphic lettering.

## Overview

One big flowing script headline with a swash underline on warm cream, deep burgundy ink, tiny spaced caps below.

It feels warm, personal, crafted. Use it for food and drink brands, weddings and gifting, cafes and bakeries, quote animations.

## Visual language

- **Type:** Pacifico (display, weight 400, tracking 0em) with Josefin Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 20px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Warm Minimalism
- **Typography:** Handwritten / Script, Display Typography
- **Line / stroke language:** Variable Width, Animated Draw-On
- **Composition / layout system:** Typography-Led Composition, Centered Hero Composition
- **Format / purpose:** Kinetic Typography, Quote Animation
- **Color treatment:** Warm Palette
- **Motion language:** Fluid
- **Transition language:** Line-Draw Transition, Mask Reveal

## Do's and Don'ts

- Do keep the accent (#d98c3f) for the single most important element in each frame.
- Do use Pacifico large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not marker: lettering is drawn with thick-thin contrast and swashes, not an even felt-tip line.

## References

- Search: "hand lettering animation"
- Search: "script lettering motion graphics"
- Search: "brush script write-on"
