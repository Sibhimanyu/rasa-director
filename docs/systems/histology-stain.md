---
name: "Histology stain (H&E)"
description: "Stained tissue under glass: eosin-pink and haematoxylin-violet cell blobs washing a slide-white field, frosted panels and clean lab sans."
colors:
  canvas: "#fbf6f9"        # page ground
  ink: "#2e1a47"           # headlines and body text
  accent: "#e46aa0"        # primary accent: the one thing that matters in each frame
  support: "#6b4fa0"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a7596"         # muted captions
typography:
  display:
    fontFamily: Public Sans
    fontWeight: 700
  body:
    fontFamily: Public Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Histology stain (H&E)

A motion-graphics design system from Rasa Director's style library (Science). Also known as H&E stain, microscope slide, stained section, pathology slide, micrograph.

## Overview

Stained tissue under glass: eosin-pink and haematoxylin-violet cell blobs washing a slide-white field, frosted panels and clean lab sans.

It feels organic, clinical, curious. Use it for biotech and pharma, medical research stories, healthcare explainers, lab and diagnostics brands.

## Visual language

- **Type:** Public Sans (display, weight 700, tracking -0.02em) with Public Sans for body text.
- **Surfaces:** translucent frosted panels (backdrop blur) over colour; corners 6px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** riso. **Icons:** line. **Decoration:** blobs.

## Motion

Motion language: **Organic**. Motion that follows living, growing systems: soft sine curves, arcs rather than straight lines, uneven timing and growth from a source.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 400 / 650 / 1000 / 1500 / 2200 ms; stagger 90 ms; hold at least 1100 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Organic / Biomorphic, Clean Minimalism
- **Color treatment:** Limited Palette, Pastel
- **Shape language:** Blob-Like, Organic
- **Material / surface language:** Glass
- **Camera language:** Macro, Rack Focus
- **Format / purpose:** Educational Motion, Concept Explainer
- **Motion language:** Organic
- **Transition language:** Dissolve, Zoom Transition
- **Emotional / brand tone:** Intellectual, Calm

## Do's and Don'ts

- Do keep the accent (#e46aa0) for the single most important element in each frame.
- Do use Public Sans large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is glass.
- Don't confuse it: Not organic biomorphic: the blobs are stained cells on a glass slide in eosin pink and haematoxylin violet, labelled like a lab.

## References

- Search: "microscope slide animation"
- Search: "H&E stain motion graphics"
- Search: "cell biology explainer style"
