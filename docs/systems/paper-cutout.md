---
name: "Paper cutout"
description: "Flat coloured paper shapes stacked in layers with small soft shadows between them, visible fibre, no outlines."
colors:
  canvas: "#f4ecdf"        # page ground
  ink: "#2b2a33"           # headlines and body text
  accent: "#e2703a"        # primary accent: the one thing that matters in each frame
  support: "#4f9d8a"       # supporting colour, used sparingly
  surface: "#fffaf1"       # raised cards and panels
  muted: "#8a8176"         # muted captions
typography:
  display:
    fontFamily: Fredoka
    fontWeight: 700
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 30px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Paper cutout

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as cut paper, papercraft, layered paper, paper-cut illustration.

## Overview

Flat coloured paper shapes stacked in layers with small soft shadows between them, visible fibre, no outlines.

It feels crafted, warm, tactile. Use it for brand films, children's and education, sustainability stories, holiday campaigns.

## Visual language

- **Type:** Fredoka (display, weight 700, tracking -0.01em) with Nunito for body text.
- **Surfaces:** off-white paper with visible fibre; corners 30px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** paper. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Paper Cutout, Handmade / Craft
- **Illustration style:** Paper Cut, 2.5D Layered Illustration
- **Material / surface language:** Paper
- **Depth / dimensionality:** Layered 2D
- **Texture:** Fibers, Paper Grain
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Stop-Motion-Like
- **Transition language:** Slide, Fold

## Do's and Don'ts

- Do keep the accent (#e2703a) for the single most important element in each frame.
- Do use Fredoka large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not scrapbook collage: pieces are cleanly cut shapes in a tidy layout, no tape, photos or found scraps.

## References

- Search: "paper cut animation"
- Search: "layered paper motion graphics"
- Search: "papercraft explainer video"
