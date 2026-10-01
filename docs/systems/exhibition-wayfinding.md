---
name: "Exhibition & wayfinding"
description: "Museum signage in motion: dark gallery-green walls, rounded sign panels, clean neo-grotesk labels and arrow pictograms."
colors:
  canvas: "#1f3a33"        # page ground
  ink: "#f4f1e8"           # headlines and body text
  accent: "#e9b949"        # primary accent: the one thing that matters in each frame
  support: "#f4f1e8"       # supporting colour, used sparingly
  surface: "#2c4c43"       # raised cards and panels
  muted: "#9fb4ab"         # muted captions
typography:
  display:
    fontFamily: Schibsted Grotesk
    fontWeight: 700
  body:
    fontFamily: Schibsted Grotesk
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Exhibition & wayfinding

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as museum graphics, signage system, environmental graphics, gallery wayfinding.

## Overview

Museum signage in motion: dark gallery-green walls, rounded sign panels, clean neo-grotesk labels and arrow pictograms.

It feels civic, calm, orienting. Use it for museum and exhibition films, event openers, venue guides, product walkthroughs.

## Visual language

- **Type:** Schibsted Grotesk (display, weight 700, tracking -0.01em) with Schibsted Grotesk for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Modernist, Clean Minimalism
- **Typography:** Neo-Grotesk
- **Iconography:** Pictograms
- **Composition / layout system:** Stacked Cards, Negative-Space Composition
- **Color treatment:** Limited Palette, Dark UI
- **Shape language:** Pill-Shaped, Rounded
- **Motion language:** Smooth
- **Transition language:** Slide, Wipe
- **Pacing / rhythm:** Pause-Heavy

## Do's and Don'ts

- Do keep the accent (#e9b949) for the single most important element in each frame.
- Do use Schibsted Grotesk large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a UI: the panels are signs, read at distance, with pictograms instead of controls.

## References

- Search: "museum exhibition graphics motion"
- Search: "wayfinding signage animation"
- Search: "exhibition identity motion design"
