---
name: "Mac OS 9 Platinum"
description: "Light platinum-grey windows with fine pinstriped title bars, soft 3D bevels and lavender highlights on a periwinkle desktop, bold Charcoal-style system type."
colors:
  canvas: "#8f93c9"        # page ground
  ink: "#000000"           # headlines and body text
  accent: "#ccccff"        # primary accent: the one thing that matters in each frame
  support: "#3a3a8c"       # supporting colour, used sparingly
  surface: "#dedede"       # raised cards and panels
  muted: "#4d4d4d"         # muted captions
typography:
  display:
    fontFamily: Archivo
    fontWeight: 800
  body:
    fontFamily: Archivo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 3px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Mac OS 9 Platinum

A motion-graphics design system from Rasa Director's style library (Interface). Also known as Platinum appearance, Mac OS 8, classic Mac OS, late-90s Mac desktop.

## Overview

Light platinum-grey windows with fine pinstriped title bars, soft 3D bevels and lavender highlights on a periwinkle desktop, bold Charcoal-style system type.

It feels nostalgic, orderly, friendly. Use it for creative-tool launches, late-90s nostalgia films, indie software teasers.

## Visual language

- **Type:** Archivo (display, weight 800, tracking -0.01em) with Archivo for body text.
- **Surfaces:** flat fills, no gradients; corners 3px; outlines 2px solid in ink.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** scanlines. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Mechanical**. Motion driven as if by motors, gears and belts: constant velocity segments with abrupt, rigid starts and stops.
- Enter `none`, exit `none`, move `power1.inOut`; durations 150 / 250 / 400 / 600 / 900 ms; stagger 100 ms; hold at least 700 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Metallic, Clean Minimalism
- **Era / design-movement influence:** Retro Operating Systems, 1990s
- **UI treatment:** Retro UI, Windowed UI, Skeuomorphic UI
- **Color treatment:** Grayscale, Pastel
- **Typography:** Grotesk
- **Line / stroke language:** Thin
- **Shadow / depth cues:** Inner Shadow
- **Motion language:** Mechanical
- **Transition language:** Hard Cut, Zoom Transition

## Do's and Don'ts

- Do keep the accent (#ccccff) for the single most important element in each frame.
- Do use Archivo large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Windows 95: Platinum is lighter and softer, with pinstriped bars, bevels and lavender, not navy title bars on teal.

## References

- Search: "mac os 9 platinum UI animation"
- Search: "classic mac os interface motion"
- Search: "mac os 8 desktop aesthetic"
