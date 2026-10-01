---
name: "Claymation 3D"
description: "Hand-squished plasticine shapes in tomato, cobalt and mustard with fingerprint grain, squiggly clay snakes and stepped stop-motion timing."
colors:
  canvas: "#f2b33d"        # page ground
  ink: "#2a1a0e"           # headlines and body text
  accent: "#e2462f"        # primary accent: the one thing that matters in each frame
  support: "#3a6fd8"       # supporting colour, used sparingly
  surface: "#fbe7c6"       # raised cards and panels
  muted: "#6e4a1e"         # muted captions
typography:
  display:
    fontFamily: Baloo 2
    fontWeight: 800
  body:
    fontFamily: Nunito
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 28px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Claymation 3D

A motion-graphics design system from RasanAI's style library (3D & materials). Also known as plasticine 3D, clay stop-motion, Aardman look, sculpted clay render, clay 3D.

## Overview

Hand-squished plasticine shapes in tomato, cobalt and mustard with fingerprint grain, squiggly clay snakes and stepped stop-motion timing.

It feels handmade, charming, funny. Use it for brand stories and mascots, kids and family, food and snacks, quirky explainers.

## Visual language

- **Type:** Baloo 2 (display, weight 800, tracking -0.02em) with Nunito for body text.
- **Surfaces:** inflated, soft-lit clay surfaces with inner highlights; corners 28px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** noise. **Icons:** filled. **Decoration:** squiggles.

## Motion

Motion language: **Stop-Motion-Like**. Motion rendered at a reduced frame rate (12 fps, on twos) so objects jump between held poses like physical stop-motion or hand-drawn animation.
- Enter `steps(6)`, exit `steps(4)`, move `steps(12)`; durations 167 / 250 / 417 / 667 / 1000 ms; stagger 83 ms; hold at least 750 ms.
- Never: fade-up-slide, fade-slide, blur-in, opacity-only-entrance, bounce.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Clay / Claymation, Handmade / Craft
- **Illustration style:** 3D Clay, Character Illustration
- **Material / surface language:** Clay, Matte Product Surface
- **Character / mascot treatment:** Clay Mascot
- **Texture:** Film Grain
- **Shape language:** Organic, Irregular
- **Color treatment:** Primary Colors, Warm Palette
- **Production technique:** Stop Motion, 3D Keyframe Animation
- **Motion language:** Stop-Motion-Like
- **Transition language:** Hard Cut, Object Morph

## Do's and Don'ts

- Do keep the accent (#e2462f) for the single most important element in each frame.
- Do use Baloo 2 large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is clay.
- Don't confuse it: Not claymorphic UI: this is sculpted plasticine with fingerprints and stop-motion steps, not smooth puffy interface cards.

## References

- Search: "claymation 3D animation style"
- Search: "plasticine stop motion motion graphics"
- Search: "clay render brand animation"
