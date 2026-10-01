---
name: "Dymo label tape"
description: "Strips of glossy black, red and blue plastic tape with white raised capitals punched in by a label maker, stuck on grey steel."
colors:
  canvas: "#43474d"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#d7261e"        # primary accent: the one thing that matters in each frame
  support: "#1f4fae"       # supporting colour, used sparingly
  surface: "#121212"       # raised cards and panels
  muted: "#b9bdc3"         # muted captions
typography:
  display:
    fontFamily: Saira Extra Condensed
    fontWeight: 700
  body:
    fontFamily: Saira Extra Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 3px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Dymo label tape

A motion-graphics design system from RasanAI's style library (Print). Also known as Dymo labels, embossed label tape, label maker, punched plastic tape.

## Overview

Strips of glossy black, red and blue plastic tape with white raised capitals punched in by a label maker, stuck on grey steel.

It feels tactile, organised, quirky, DIY. Use it for productivity and organisation apps, hardware and workshops, creator and maker brands, social teasers.

## Visual language

- **Type:** Saira Extra Condensed (display, weight 700, uppercase, tracking 0.12em) with Saira Extra Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 3px; outlines none.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** noise. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Sticker Style
- **Material / surface language:** Plastic, Metal
- **Typography:** Condensed, Dimensional Type
- **Shape language:** Rectilinear
- **Shadow / depth cues:** Inner Shadow
- **Color treatment:** Primary Colors, High Contrast
- **Texture:** Clean / No Texture
- **Motion language:** Mechanical
- **Transition language:** Slide, Hard Cut
- **Emotional / brand tone:** Quirky, Playful

## Do's and Don'ts

- Do keep the accent (#d7261e) for the single most important element in each frame.
- Do use Saira Extra Condensed large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a pill-button UI: each strip is a stamped plastic label with raised letters and a dent shadow, not a rounded control.

## References

- Search: "dymo label animation"
- Search: "embossed label tape typography"
- Search: "label maker text motion"
