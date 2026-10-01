---
name: "Herbarium pressed flowers"
description: "Faded olive and petal-tan specimens taped to an aged mount board, a typed Courier collector's label and a Libre Caslon title slip."
colors:
  canvas: "#ece5d3"        # page ground
  ink: "#2a2a22"           # headlines and body text
  accent: "#9aa66a"        # primary accent: the one thing that matters in each frame
  support: "#cfae8a"       # supporting colour, used sparingly
  surface: "#faf6ea"       # raised cards and panels
  muted: "#7e7866"         # muted captions
typography:
  display:
    fontFamily: Libre Caslon Display
    fontWeight: 400
  body:
    fontFamily: Courier Prime
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

# Herbarium pressed flowers

A motion-graphics design system from RasanAI's style library (Nature & material). Also known as herbarium sheet, pressed botanicals, specimen sheet, dried flower collage.

## Overview

Faded olive and petal-tan specimens taped to an aged mount board, a typed Courier collector's label and a Libre Caslon title slip.

It feels archival, curious, quiet. Use it for natural history and museum films, slow-craft brands, botanical and perfume stories, documentary openers.

## Visual language

- **Type:** Libre Caslon Display (display, weight 400, tracking -0.01em) with Courier Prime for body text.
- **Surfaces:** off-white paper with visible fibre; corners 2px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** paper. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Mixed-Media Collage, Print-Editorial
- **Illustration style:** Collage
- **Typography:** Editorial Serif, Monospace
- **Color treatment:** Muted, Earth Tones
- **Texture:** Paper Grain, Fibers
- **Material / surface language:** Paper
- **Motion language:** Stop-Motion-Like
- **Transition language:** Hard Cut, Slide
- **Emotional / brand tone:** Nostalgic, Intellectual

## Do's and Don'ts

- Do keep the accent (#9aa66a) for the single most important element in each frame.
- Do use Libre Caslon Display large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not scrapbook collage: no stickers or bright paper; every scrap is a dried specimen or a typed label on archival board.

## References

- Search: "herbarium specimen animation"
- Search: "pressed flowers stop motion"
- Search: "vintage botanical specimen video"
