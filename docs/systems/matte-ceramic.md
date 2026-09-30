---
name: "Matte ceramic"
description: "Bone and sage stoneware pills with a soft glazed highlight and short shadow, solid kiln-coloured icons, calm unfussy type."
colors:
  canvas: "#e6e1d8"        # page ground
  ink: "#2a2823"           # headlines and body text
  accent: "#8ea08a"        # primary accent: the one thing that matters in each frame
  support: "#c98f6b"       # supporting colour, used sparingly
  surface: "#f3efe7"       # raised cards and panels
  muted: "#827c71"         # muted captions
typography:
  display:
    fontFamily: Manrope
    fontWeight: 700
  body:
    fontFamily: Manrope
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

# Matte ceramic

A motion-graphics design system from Rasa Director's style library (Soft & tactile). Also known as soft-touch ceramic, stoneware UI, matte clay objects, bisque.

## Overview

Bone and sage stoneware pills with a soft glazed highlight and short shadow, solid kiln-coloured icons, calm unfussy type.

It feels grounded, crafted, serene. Use it for homeware and kitchen brands, skincare with natural positioning, smart-home controls, wellness hardware.

## Visual language

- **Type:** Manrope (display, weight 700, tracking -0.02em) with Manrope for body text.
- **Surfaces:** inflated, soft-lit clay surfaces with inner highlights; corners fully rounded (pills); outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Soft 3D, Warm Minimalism
- **Material / surface language:** Ceramic, Matte Product Surface
- **Shape language:** Pill-Shaped, Soft
- **Color treatment:** Earth Tones, Muted
- **Iconography:** Filled Icons
- **Shadow / depth cues:** Soft Diffuse Shadow
- **UI treatment:** Neo-Skeuomorphic UI, Isolated-Component UI
- **Motion language:** Heavy
- **Transition language:** Scale Transition, Crossfade

## Do's and Don'ts

- Do keep the accent (#8ea08a) for the single most important element in each frame.
- Do use Manrope large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is clay.
- Don't confuse it: Not claymorphism: muted, earthy and heavy like fired stoneware, not candy-coloured and bouncy.

## References

- Search: "matte ceramic 3D motion"
- Search: "stoneware UI design animation"
- Search: "soft ceramic product render motion"
