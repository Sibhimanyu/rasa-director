---
name: "Game-show board"
description: "Saturated TV-blue tiles on a midnight set, gold compressed numbers, black gaps between cells, marquee sparkles and pop-in reveals."
colors:
  canvas: "#060a42"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ffc72c"        # primary accent: the one thing that matters in each frame
  support: "#e0197d"       # supporting colour, used sparingly
  surface: "#1233d1"       # raised cards and panels
  muted: "#9fb0ff"         # muted captions
typography:
  display:
    fontFamily: Antonio
    fontWeight: 700
  body:
    fontFamily: Barlow Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
shadows:
  card: "10px 10px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Game-show board

A motion-graphics design system from Rasa Director's style library (Broadcast). Also known as quiz show graphics, Jeopardy board look, game show tiles, prime-time quiz.

## Overview

Saturated TV-blue tiles on a midnight set, gold compressed numbers, black gaps between cells, marquee sparkles and pop-in reveals.

It feels exciting, playful, suspenseful. Use it for quizzes and challenges, giveaways and reveals, community and social campaigns, event shows.

## Visual language

- **Type:** Antonio (display, weight 700, uppercase, tracking 0em) with Barlow Condensed for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 5px solid in #02041c.
- **Depth:** hard shadows (`10px 10px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** stars.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Retro-Futurism
- **Format / purpose:** Broadcast Package, Ident
- **Composition / layout system:** Modular Grid, Bento Grid
- **Color treatment:** Primary Colors, High Saturation
- **Lighting:** Spotlight Pool
- **Sound + motion relationship:** Impacts, Risers
- **Motion language:** Springy
- **Transition language:** Card Flip, Flash Transition
- **Emotional / brand tone:** Playful, Energetic

## Do's and Don'ts

- Do keep the accent (#ffc72c) for the single most important element in each frame.
- Do use Antonio large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not arcade pixels: a studio board of big glossy tiles and gold numbers, not a retro game screen.

## References

- Search: "game show board graphics"
- Search: "quiz show motion graphics"
- Search: "jeopardy style board animation"
