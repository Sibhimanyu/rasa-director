---
name: "80s network ident"
description: "Early-CGI blocks in red, yellow and cyan on a wireframed floor, cobalt sky, white edge lines, wide techno caps, scanlines and a glint."
colors:
  canvas: "#0a1a5c"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ff3131"        # primary accent: the one thing that matters in each frame
  support: "#ffd400"       # supporting colour, used sparingly
  surface: "#00b3e6"       # raised cards and panels
  muted: "#8ea2e8"         # muted captions
typography:
  display:
    fontFamily: Michroma
    fontWeight: 400
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# 80s network ident

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as station ident, retro channel ident, 80s CGI ident, network promo.

## Overview

Early-CGI blocks in red, yellow and cyan on a wireframed floor, cobalt sky, white edge lines, wide techno caps, scanlines and a glint.

It feels nostalgic, proud, bright. Use it for retro brand moments, anniversaries, channel and podcast idents, throwback campaigns.

## Visual language

- **Type:** Michroma (display, weight 400, uppercase, tracking 0.02em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in ink.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** scanlines. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Inertial**. Objects keep moving after the force that started them stops, gliding on a long decelerating tail until friction brings them to rest.
- Enter `expo.out`, exit `power3.in`, move `power3.out`; durations 300 / 500 / 800 / 1200 / 1700 ms; stagger 60 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, blur-in, linear-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Retro-Futurism, Isometric
- **Era / design-movement influence:** 1980s
- **Format / purpose:** Ident, Logo Sting
- **Depth / dimensionality:** Isometric
- **Color treatment:** Primary Colors, High Saturation
- **Texture:** CRT Scanlines
- **Production technique:** 3D Keyframe Animation
- **Motion language:** Inertial
- **Transition language:** Zoom-Through, Light Wipe
- **Emotional / brand tone:** Nostalgic, Bold

## Do's and Don'ts

- Do keep the accent (#ff3131) for the single most important element in each frame.
- Do use Michroma large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not synthwave: primary-colour CGI blocks and broadcast scanlines from a TV station, no neon sunsets or magenta grids.

## References

- Search: "80s tv station ident"
- Search: "retro channel ident animation"
- Search: "80s cgi broadcast graphics"
