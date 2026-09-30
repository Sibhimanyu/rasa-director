---
name: "Scandinavian folk art"
description: "Dala red ground, painted flowers and hearts in yellow, cornflower blue and white, rounded folk capitals and soft hand-drawn outlines."
colors:
  canvas: "#b3212c"        # page ground
  ink: "#fff6ea"           # headlines and body text
  accent: "#f3c14b"        # primary accent: the one thing that matters in each frame
  support: "#3a73c0"       # supporting colour, used sparingly
  surface: "#fff6ea"       # raised cards and panels
  muted: "#f5c7bd"         # muted captions
typography:
  display:
    fontFamily: Grandstander
    fontWeight: 800
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 26px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Scandinavian folk art

A motion-graphics design system from Rasa Director's style library (Heritage). Also known as Dala horse style, rosemaling, Nordic folk, Swedish folk pattern, kurbits.

## Overview

Dala red ground, painted flowers and hearts in yellow, cornflower blue and white, rounded folk capitals and soft hand-drawn outlines.

It feels cosy, cheerful, homespun. Use it for holiday campaigns, food, bakery and craft brands, kids and family, wool, home and gift.

## Visual language

- **Type:** Grandstander (display, weight 800, tracking -0.01em) with Nunito for body text.
- **Surfaces:** flat fills, no gradients; corners 26px; outlines 3px sketch in ink.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** doodle. **Decoration:** stars.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Childlike / Naive
- **Illustration style:** Hand-Drawn, Flat Vector
- **Color treatment:** Warm Palette, Primary Colors
- **Shape language:** Organic, Rounded
- **Line / stroke language:** Hand-Drawn
- **Typography:** Display Typography, Rounded Sans
- **Motion language:** Organic
- **Transition language:** Slide, Scale Transition

## Do's and Don'ts

- Do keep the accent (#f3c14b) for the single most important element in each frame.
- Do use Grandstander large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not nordic soft minimalism: this is painted peasant ornament, saturated red and flowers, not pale calm interiors.

## References

- Search: "Scandinavian folk art animation"
- Search: "Dala horse motion graphics"
- Search: "rosemaling pattern animation"
