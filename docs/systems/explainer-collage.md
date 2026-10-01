---
name: "Explainer collage"
description: "Torn paper, halftone photos and yellow highlighter blocks taped over charts: newsroom collage that argues a point."
colors:
  canvas: "#efe9dc"        # page ground
  ink: "#161616"           # headlines and body text
  accent: "#ffd500"        # primary accent: the one thing that matters in each frame
  support: "#e8402b"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#6f6a60"         # muted captions
typography:
  display:
    fontFamily: Archivo
    fontWeight: 900
  body:
    fontFamily: Libre Franklin
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 2px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Explainer collage

A motion-graphics design system from RasanAI's style library (Data & explainers). Also known as Vox style, paper-cut explainer, mixed-media explainer.

## Overview

Torn paper, halftone photos and yellow highlighter blocks taped over charts: newsroom collage that argues a point.

It feels curious, energetic, journalistic. Use it for video essays, news explainers, YouTube documentaries.

## Visual language

- **Type:** Archivo (display, weight 900, uppercase, tracking -0.02em) with Libre Franklin for body text.
- **Surfaces:** flat fills, no gradients; corners 2px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** halftone. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Mixed-Media Collage, Halftone
- **Illustration style:** Photo Collage, Collage
- **Material / surface language:** Paper
- **Texture:** Halftone, Paper Grain
- **Composition / layout system:** Collage Composition
- **Format / purpose:** Concept Explainer, News Graphics
- **Motion language:** Stop-Motion-Like
- **Transition language:** Object Wipe, Hard Cut

## Do's and Don'ts

- Do keep the accent (#ffd500) for the single most important element in each frame.
- Do use Archivo large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not deconstructed UI: it collages print, photos and charts, not interface pieces.

## References

- Search: "vox style explainer animation"
- Search: "paper collage explainer"
- Search: "mixed media motion graphics news"
