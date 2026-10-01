---
name: "Raw web brutalism"
description: "Unstyled-looking pages: Times-style serif, default blue links, grey system boxes, thin black borders, zero decoration or rounding."
colors:
  canvas: "#ffffff"        # page ground
  ink: "#000000"           # headlines and body text
  accent: "#0000ee"        # primary accent: the one thing that matters in each frame
  support: "#ff0000"       # supporting colour, used sparingly
  surface: "#e4e4e4"       # raised cards and panels
  muted: "#551a8b"         # muted captions
typography:
  display:
    fontFamily: Tinos
    fontWeight: 700
  body:
    fontFamily: Cousine
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Raw web brutalism

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as brutalist web design, anti-design web, HTML brutalism, default-browser aesthetic.

## Overview

Unstyled-looking pages: Times-style serif, default blue links, grey system boxes, thin black borders, zero decoration or rounding.

It feels raw, honest, defiant, intellectual. Use it for art and culture brands, developer manifestos, indie launches, provocative teasers.

## Visual language

- **Type:** Tinos (display, weight 700, tracking -0.01em) with Cousine for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Brutalism, Web 1.0
- **UI treatment:** Windowed UI, Retro UI
- **Line / stroke language:** Thin, Uniform Stroke
- **Shadow / depth cues:** No Shadow
- **Shape language:** Rectilinear
- **Typography:** Editorial Serif, Monospace
- **Color treatment:** Limited Palette, Light UI
- **Motion language:** Choppy / Stepped
- **Transition language:** Hard Cut

## Do's and Don'ts

- Do keep the accent (#0000ee) for the single most important element in each frame.
- Do use Tinos large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not neo-brutalism: no playful colour or shadows; it looks unfinished on purpose, like 1996 HTML.

## References

- Search: "brutalist website design"
- Search: "raw HTML aesthetic motion"
- Search: "brutalist web animation"
