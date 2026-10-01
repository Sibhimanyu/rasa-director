---
name: "Persian miniature"
description: "A lapis-blue manuscript page inside gold illuminated double borders, a gilded panel, turquoise and vermilion details, graceful Persian-inspired lettering."
colors:
  canvas: "#14255a"        # page ground
  ink: "#f3e6c3"           # headlines and body text
  accent: "#d3a548"        # primary accent: the one thing that matters in each frame
  support: "#2aa39a"       # supporting colour, used sparingly
  surface: "#1c3170"       # raised cards and panels
  muted: "#b7ab8c"         # muted captions
typography:
  display:
    fontFamily: Lalezar
    fontWeight: 400
  body:
    fontFamily: Vazirmatn
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Persian miniature

A motion-graphics design system from RasanAI's style library (Heritage). Also known as Persian manuscript, illuminated manuscript, Safavid miniature, Mughal miniature page.

## Overview

A lapis-blue manuscript page inside gold illuminated double borders, a gilded panel, turquoise and vermilion details, graceful Persian-inspired lettering.

It feels opulent, poetic, storied. Use it for cultural and museum films, perfume and textiles, poetry and storytelling, festive greetings.

## Visual language

- **Type:** Lalezar (display, weight 400, tracking 0.01em) with Vazirmatn for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px double in accent.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** glyph. **Decoration:** stars.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Print-Editorial
- **Line / stroke language:** Double-Line
- **Color treatment:** High Contrast, Cool Palette
- **Composition / layout system:** Editorial Grid, Symmetrical Composition
- **Typography:** Display Typography, Editorial Serif
- **Material / surface language:** Paper
- **Motion language:** Luxurious / Slow
- **Transition language:** Page Flip, Dissolve

## Do's and Don'ts

- Do keep the accent (#d3a548) for the single most important element in each frame.
- Do use Lalezar large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not art deco: gold on deep colour, but framed like a hand-illuminated book page with floral ornament, not streamlined sunbursts.

## References

- Search: "Persian miniature animation"
- Search: "illuminated manuscript motion graphics"
- Search: "Persian ornament design"
