---
name: "Amiga Workbench"
description: "Workbench-blue screen with white and orange window gadgets, black outlines, depth boxes in the title bar and chunky Topaz-style bitmap type."
colors:
  canvas: "#0055aa"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ff8800"        # primary accent: the one thing that matters in each frame
  support: "#000022"       # supporting colour, used sparingly
  surface: "#004a96"       # raised cards and panels
  muted: "#a8c8ec"         # muted captions
typography:
  display:
    fontFamily: Silkscreen
    fontWeight: 700
  body:
    fontFamily: VT323
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Amiga Workbench

A motion-graphics design system from Rasa Director's style library (Interface). Also known as Workbench 1.3, AmigaOS, Amiga desktop, Topaz font.

## Overview

Workbench-blue screen with white and orange window gadgets, black outlines, depth boxes in the title bar and chunky Topaz-style bitmap type.

It feels nostalgic, nerdy, cheerful. Use it for demoscene tributes, retro game launches, creative-coding films.

## Visual language

- **Type:** Silkscreen (display, weight 700, uppercase, tracking 0.02em) with VT323 for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in #ffffff.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Pixel Art, Retro-Futurism
- **Era / design-movement influence:** 1980s, Early Desktop Computing
- **UI treatment:** Retro UI, Windowed UI, Terminal / Code UI
- **Color treatment:** Limited Palette, High Contrast
- **Typography:** Pixel Type
- **Line / stroke language:** Medium
- **Shadow / depth cues:** No Shadow
- **Motion language:** Choppy / Stepped
- **Transition language:** Hard Cut, Pixel Dissolve

## Do's and Don'ts

- Do keep the accent (#ff8800) for the single most important element in each frame.
- Do use Silkscreen large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not DOS text mode: Workbench is a windowed desktop in blue, white, black and orange, not a full-screen console in DOS blue and yellow.

## References

- Search: "amiga workbench animation"
- Search: "amiga 500 interface aesthetic"
- Search: "workbench 1.3 UI"
