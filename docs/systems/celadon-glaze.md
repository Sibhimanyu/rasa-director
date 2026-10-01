---
name: "Celadon glaze"
description: "Jade-green celadon pooling into a glossy rounded tile, iron-brown speckle, a light glint across the glaze and a Gilda Display title."
colors:
  canvas: "#d3dfd1"        # page ground
  ink: "#1c2a24"           # headlines and body text
  accent: "#8fb09c"        # primary accent: the one thing that matters in each frame
  support: "#6a4028"       # supporting colour, used sparingly
  surface: "#e8efe5"       # raised cards and panels
  muted: "#5f7268"         # muted captions
typography:
  display:
    fontFamily: Gilda Display
    fontWeight: 400
  body:
    fontFamily: Mulish
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 48px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Celadon glaze

A motion-graphics design system from RasanAI's style library (Nature & material). Also known as celadon ceramic, glazed stoneware, reactive glaze, pottery glaze.

## Overview

Jade-green celadon pooling into a glossy rounded tile, iron-brown speckle, a light glint across the glaze and a Gilda Display title.

It feels serene, glossy, handmade. Use it for ceramics and tableware, tea and restaurants, skincare, craft studio films.

## Visual language

- **Type:** Gilda Display (display, weight 400, tracking -0.01em) with Mulish for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 48px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Warm Minimalism, Glossy 3D
- **Typography:** High-Contrast Serif
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Color treatment:** Analogous, Muted
- **Material / surface language:** Ceramic, Glossy Product Surface
- **Lighting:** Specular Sweep
- **Shape language:** Rounded
- **Motion language:** Fluid
- **Transition language:** Dissolve, Liquid Transition
- **Emotional / brand tone:** Calm, Premium

## Do's and Don'ts

- Do keep the accent (#8fb09c) for the single most important element in each frame.
- Do use Gilda Display large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not matte ceramic UI: that is chalky clay pills; this is a wet, glossy glaze that pools and catches the light.

## References

- Search: "celadon glaze aesthetic"
- Search: "ceramic glaze animation"
- Search: "pottery brand motion design"
