---
name: "Felt & stitch"
description: "Soft puffy felt patches with dashed running-stitch edges, woolly texture, warm crafty colours and rounded chunky type."
colors:
  canvas: "#e9dcc9"        # page ground
  ink: "#3a2418"           # headlines and body text
  accent: "#d9534f"        # primary accent: the one thing that matters in each frame
  support: "#6aa06a"       # supporting colour, used sparingly
  surface: "#f6c96b"       # raised cards and panels
  muted: "#8a6d58"         # muted captions
typography:
  display:
    fontFamily: Sniglet
    fontWeight: 800
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "4px dashed {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Felt & stitch

A motion-graphics design system from Rasa Director's style library (Handmade & printed). Also known as felt craft, embroidered patch, stitched fabric, needlework style.

## Overview

Soft puffy felt patches with dashed running-stitch edges, woolly texture, warm crafty colours and rounded chunky type.

It feels cosy, tactile, wholesome. Use it for kids' products, home and knitwear brands, holiday campaigns, cosy app onboarding.

## Visual language

- **Type:** Sniglet (display, weight 800, tracking 0em) with Nunito for body text.
- **Surfaces:** inflated, soft-lit clay surfaces with inner highlights; corners fully rounded (pills); outlines 4px dashed in #7a4a22.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** noise. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Clay / Claymation
- **Material / surface language:** Felt, Fabric
- **Line / stroke language:** Offset-Line
- **Texture:** Fibers
- **Shape language:** Soft, Rounded
- **Production technique:** Stop Motion
- **Motion language:** Stop-Motion-Like
- **Transition language:** Scale Transition, Slide

## Do's and Don'ts

- Do keep the accent (#d9534f) for the single most important element in each frame.
- Do use Sniglet large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is clay.
- Don't confuse it: Not claymorphism: the texture is fibrous fabric and the edges are stitched, not smooth plastic clay.

## References

- Search: "felt craft animation"
- Search: "stitched patch motion graphics"
- Search: "embroidery style animation"
