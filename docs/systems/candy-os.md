---
name: "Candy desktop"
description: "Pastel pop-up windows with bubblegum title bars, thick outlines and double offset shadows, doodle icons on a dotted mint desktop."
colors:
  canvas: "#c9f2e3"        # page ground
  ink: "#23233a"           # headlines and body text
  accent: "#ff9ecf"        # primary accent: the one thing that matters in each frame
  support: "#fff08a"       # supporting colour, used sparingly
  surface: "#fffdf7"       # raised cards and panels
  muted: "#6f8c82"         # muted captions
typography:
  display:
    fontFamily: DynaPuff
    fontWeight: 700
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 18px
shadows:
  card: "7px 7px 0 #ff9ecf, 14px 14px 0 #23233a"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Candy desktop

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as cute OS, pastel desktop UI, playful windows, toy operating system.

## Overview

Pastel pop-up windows with bubblegum title bars, thick outlines and double offset shadows, doodle icons on a dotted mint desktop.

It feels nostalgic-cute, whimsical, cosy, fun. Use it for indie apps, creator portfolios, playful product tours, community launches.

## Visual language

- **Type:** DynaPuff (display, weight 700, tracking -0.01em) with Nunito for body text.
- **Surfaces:** flat fills, no gradients; corners 18px; outlines 4px solid in ink.
- **Depth:** layered shadows (`7px 7px 0 #ff9ecf, 14px 14px 0 #23233a`).
- **Texture:** dots. **Icons:** doodle. **Decoration:** none.

## Motion

Motion language: **Springy**. Motion that behaves like a damped physical spring: fast attack, one visible overshoot, then a quick settle.
- Enter `back.out(1.7)`, exit `power3.in`, move `elastic.out(1,0.75)`; durations 180 / 300 / 480 / 720 / 1100 ms; stagger 40 ms; hold at least 650 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Playful Tech, Y2K
- **UI treatment:** Windowed UI, Stylized UI
- **Line / stroke language:** Heavy
- **Shadow / depth cues:** Layered Shadows
- **Iconography:** Hand-Drawn Icons
- **Color treatment:** Pastel
- **Composition / layout system:** Desktop Workspace
- **Motion language:** Springy
- **Transition language:** Scale Transition, UI Morph

## Do's and Don'ts

- Do keep the accent (#ff9ecf) for the single most important element in each frame.
- Do use DynaPuff large and confident; one idea per frame.
- Do keep every shadow the same layered style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not retro OS: the windows are invented candy-coloured toys, not a faithful Windows 95 or Mac OS copy.

## References

- Search: "pastel desktop UI animation"
- Search: "cute window pop-up motion"
- Search: "playful OS style product video"
