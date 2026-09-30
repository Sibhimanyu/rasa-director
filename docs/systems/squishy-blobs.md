---
name: "Squishy blobs"
description: "Wobbly gradient blobs drifting behind soft gradient pills in tangerine and violet, gooey rounded type, elastic squash on entry."
colors:
  canvas: "#fff1e6"        # page ground
  ink: "#2b1633"           # headlines and body text
  accent: "#ff8a3d"        # primary accent: the one thing that matters in each frame
  support: "#9b6bff"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#9b8190"         # muted captions
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 800
  body:
    fontFamily: Outfit
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Squishy blobs

A motion-graphics design system from Rasa Director's style library (Playful & pop). Also known as blobby shapes, organic pop, jelly blobs, gooey UI.

## Overview

Wobbly gradient blobs drifting behind soft gradient pills in tangerine and violet, gooey rounded type, elastic squash on entry.

It feels gooey, friendly, relaxed, modern-fun. Use it for wellness and lifestyle apps, creative tools, social promos, brand loops.

## Visual language

- **Type:** Bricolage Grotesque (display, weight 800, lowercase, tracking -0.04em) with Outfit for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners fully rounded (pills); outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** grain. **Icons:** duotone. **Decoration:** blobs.

## Motion

Motion language: **Elastic**. Objects overshoot past their target and oscillate back and forth several times before settling, as if attached by a rubber band.
- Enter `elastic.out(1,0.4)`, exit `back.in(1.4)`, move `elastic.out(1,0.5)`; durations 200 / 350 / 550 / 850 / 1300 ms; stagger 45 ms; hold at least 700 ms.
- Never: fade-up-slide, linear-entrance, blur-in, opacity-only-entrance.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Organic / Biomorphic, Gradient-Heavy
- **Shape language:** Blob-Like, Organic
- **Illustration style:** 3D Soft Forms
- **Color treatment:** Gradient, Warm Palette
- **Line / stroke language:** No Outlines
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Motion language:** Elastic
- **Transition language:** Liquid Transition, Morph Transition

## Do's and Don'ts

- Do keep the accent (#ff8a3d) for the single most important element in each frame.
- Do use Bricolage Grotesque large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not inflated balloon: blobs are free-form and fluid, not puffy air-filled pills.

## References

- Search: "blob animation motion graphics"
- Search: "gooey blob UI motion"
- Search: "organic shapes playful animation"
