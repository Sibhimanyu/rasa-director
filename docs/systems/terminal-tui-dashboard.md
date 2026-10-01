---
name: "Terminal TUI dashboard"
description: "Box-drawn panes on a black terminal, block-character meters shading green to red, bracketed key hints along the bottom, one monospace face throughout."
colors:
  canvas: "#0c0c0c"        # page ground
  ink: "#e4e4e4"           # headlines and body text
  accent: "#5fd75f"        # primary accent: the one thing that matters in each frame
  support: "#ff5f5f"       # supporting colour, used sparingly
  surface: "#121212"       # raised cards and panels
  muted: "#8a8a8a"         # muted captions
typography:
  display:
    fontFamily: Ubuntu Mono
    fontWeight: 700
  body:
    fontFamily: Ubuntu Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Terminal TUI dashboard

A motion-graphics design system from RasanAI's style library (Interface). Also known as TUI, ncurses interface, htop look, text user interface.

## Overview

Box-drawn panes on a black terminal, block-character meters shading green to red, bracketed key hints along the bottom, one monospace face throughout.

It feels technical, dense, honest. Use it for CLI tool launches, infrastructure products, developer changelog films.

## Visual language

- **Type:** Ubuntu Mono (display, weight 700, tracking 0em) with Ubuntu Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #5fd75f.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Monochrome
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Terminal / Code UI, Dashboard UI
- **Color treatment:** Dark UI, Accent-Color System
- **Typography:** Monospace
- **Information / data visualization:** Progress Bar, Dashboard
- **Line / stroke language:** Hairline
- **Shadow / depth cues:** No Shadow
- **Motion language:** Mechanical
- **Transition language:** Hard Cut

## Do's and Don'ts

- Do keep the accent (#5fd75f) for the single most important element in each frame.
- Do use Ubuntu Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a code editor or green-screen CRT: modern full-colour terminal panes and meters, flat and sharp, no syntax colours and no phosphor glow.

## References

- Search: "TUI dashboard animation"
- Search: "htop btop terminal aesthetic"
- Search: "ncurses interface motion"
