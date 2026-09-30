---
name: "Radiology viewer (MRI)"
description: "A radiology workstation: greyscale scan panes on black, DICOM corner text, fine noise, and one hot-orange false-colour signal."
colors:
  canvas: "#050505"        # page ground
  ink: "#e4e4e4"           # headlines and body text
  accent: "#ff7a1a"        # primary accent: the one thing that matters in each frame
  support: "#3c3c3c"       # supporting colour, used sparingly
  surface: "#131313"       # raised cards and panels
  muted: "#8a8a8a"         # muted captions
typography:
  display:
    fontFamily: Chivo
    fontWeight: 600
  body:
    fontFamily: Chivo Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Radiology viewer (MRI)

A motion-graphics design system from Rasa Director's style library (Science). Also known as MRI scan, DICOM viewer, medical imaging, fMRI heat map, CT scan.

## Overview

A radiology workstation: greyscale scan panes on black, DICOM corner text, fine noise, and one hot-orange false-colour signal.

It feels clinical, serious, revealing. Use it for medtech and health AI, neuroscience stories, diagnostics launches, research explainers.

## Visual language

- **Type:** Chivo (display, weight 600, tracking -0.01em) with Chivo Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in #2e2e2e.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** line. **Decoration:** crosshair.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Monochrome, Technical Minimalism
- **Color treatment:** Grayscale, Accent-Color System
- **UI treatment:** Dashboard UI
- **Composition / layout system:** Modular Grid
- **Information / data visualization:** Heat Map
- **Texture:** Digital Noise
- **Typography:** Monospace, Neo-Grotesk
- **Color grade:** Cool Clinical
- **Motion language:** Precise
- **Transition language:** Crossfade, Wipe
- **Emotional / brand tone:** Serious, Technical

## Do's and Don'ts

- Do keep the accent (#ff7a1a) for the single most important element in each frame.
- Do use Chivo large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a dark ops dashboard: greyscale scan panes and corner metadata; colour appears only where the false-colour signal is.

## References

- Search: "MRI scan motion graphics"
- Search: "medical imaging UI animation"
- Search: "radiology viewer style video"
