---
name: "Photo essay"
description: "A large moody photograph dominates a dark spread, with a restrained sans headline, italic caption and film grain on charcoal."
colors:
  canvas: "#1c1b19"        # page ground
  ink: "#ece8df"           # headlines and body text
  accent: "#6b6456"        # primary accent: the one thing that matters in each frame
  support: "#a38f6e"       # supporting colour, used sparingly
  surface: "#26241f"       # raised cards and panels
  muted: "#9a948a"         # muted captions
typography:
  display:
    fontFamily: Hanken Grotesk
    fontWeight: 600
  body:
    fontFamily: Newsreader
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Photo essay

A motion-graphics design system from Rasa Director's style library (Editorial & print). Also known as photojournalism layout, reportage, picture story, documentary editorial.

## Overview

A large moody photograph dominates a dark spread, with a restrained sans headline, italic caption and film grain on charcoal.

It feels honest, human, grounded. Use it for brand stories, nonprofit and impact films, travel and hospitality, case studies.

## Visual language

- **Type:** Hanken Grotesk (display, weight 600, tracking -0.03em) with Newsreader for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Documentary, Print-Editorial
- **Typography:** Humanist Sans, Editorial Serif
- **Composition / layout system:** Editorial Grid, Asymmetric Composition
- **Photo / video integration:** Ken Burns Effect, Masked Photography
- **Color treatment:** Muted, Dark UI
- **Texture:** Film Grain
- **Motion language:** Luxurious / Slow
- **Camera language:** Push-In
- **Transition language:** Crossfade, Mask Reveal

## Do's and Don'ts

- Do keep the accent (#6b6456) for the single most important element in each frame.
- Do use Hanken Grotesk large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not documentary film: still photography composed on a page, captions typeset, no lower thirds.

## References

- Search: "photo essay motion design"
- Search: "editorial photography animation"
- Search: "reportage layout video"
