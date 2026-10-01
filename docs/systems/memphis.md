---
name: "Memphis"
description: "Squiggles, dots and confetti shapes in pink, teal and yellow, cut-out panels at jaunty angles with black outlines and hard shadows."
colors:
  canvas: "#fff7e8"        # page ground
  ink: "#1b1b1b"           # headlines and body text
  accent: "#ff5fa2"        # primary accent: the one thing that matters in each frame
  support: "#1cc7c1"       # supporting colour, used sparingly
  surface: "#ffe14a"       # raised cards and panels
  muted: "#7a6f5c"         # muted captions
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 800
  body:
    fontFamily: Poppins
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #1b1b1b"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Memphis

A motion-graphics design system from RasanAI's style library (Playful & pop). Also known as Memphis design, Memphis Group, 80s Memphis, squiggle pattern.

## Overview

Squiggles, dots and confetti shapes in pink, teal and yellow, cut-out panels at jaunty angles with black outlines and hard shadows.

It feels cheeky, retro-fun, maximal, energetic. Use it for youth brands, event promos, creative agencies, social content.

## Visual language

- **Type:** Bricolage Grotesque (display, weight 800, tracking -0.03em) with Poppins for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 4px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #1b1b1b`).
- **Texture:** dots. **Icons:** filled. **Decoration:** squiggles.

## Motion

Motion language: **Playful**. Light, cheeky motion with small overshoots, tilts and secondary wiggles, playful in intent rather than in strict physics.
- Enter `back.out(1.7)`, exit `back.in(1.7)`, move `sine.inOut`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 40 ms; hold at least 600 ms.
- Never: fade-up-slide, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Memphis, Abstract Geometric
- **Era / design-movement influence:** Memphis, 1980s
- **Shape language:** Geometric, Irregular
- **Color treatment:** High Saturation, Triadic
- **Texture:** Stipple
- **Composition / layout system:** Collage Composition, Asymmetric Composition
- **Line / stroke language:** Heavy
- **Motion language:** Playful
- **Transition language:** Shape Match, Slide

## Do's and Don'ts

- Do keep the accent (#ff5fa2) for the single most important element in each frame.
- Do use Bricolage Grotesque large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Bauhaus: Memphis is patterned, pastel-meets-loud and deliberately off-balance.

## References

- Search: "Memphis design motion graphics"
- Search: "Memphis pattern animation"
- Search: "80s squiggle shapes animation"
