---
name: "Chrome liquid metal"
description: "Mirror-chrome pills with banded highlights on cool silver-white, steel sparkles and wide caps; surfaces feel poured and molten."
colors:
  canvas: "#e6e9ed"        # page ground
  ink: "#0c0d10"           # headlines and body text
  accent: "#3d4654"        # primary accent: the one thing that matters in each frame
  support: "#8793a3"       # supporting colour, used sparingly
  surface: "#aeb5bf"       # raised cards and panels
  muted: "#4f5866"         # muted captions
typography:
  display:
    fontFamily: Syne
    fontWeight: 800
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Chrome liquid metal

A motion-graphics design system from Rasa Director's style library (3D & materials). Also known as chrome, liquid chrome, Y2K chrome, mercury, polished metal.

## Overview

Mirror-chrome pills with banded highlights on cool silver-white, steel sparkles and wide caps; surfaces feel poured and molten.

It feels sleek, futuristic, flashy. Use it for music and fashion drops, tech hardware teasers, brand idents, event openers.

## Visual language

- **Type:** Syne (display, weight 800, uppercase, tracking 0.04em) with Manrope for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners fully rounded (pills); outlines 1px solid in #ffffff.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** stars.

## Motion

Motion language: **Liquid**. Graphics behave like a liquid material: they pour, pool, ripple, merge into blobs and drain away.
- Enter `power4.inOut`, exit `power4.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 30 ms; hold at least 800 ms.
- Never: fade-up-slide, linear-entrance, bounce, blur-in.
- Preview entrance: spring.

## The terms that define it

- **Visual style / art direction:** Chrome, Metallic
- **Material / surface language:** Chrome, Liquid
- **Typography:** Chrome Type, Extended
- **Shape language:** Pill-Shaped, Organic
- **VFX / compositing treatment:** Reflections, Bloom
- **Color treatment:** Monochrome, High Contrast
- **Motion language:** Liquid
- **Transition language:** Liquid Transition, Morph Transition
- **Emotional / brand tone:** Futuristic, Bold

## Do's and Don'ts

- Do keep the accent (#3d4654) for the single most important element in each frame.
- Do use Syne large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not Y2K chrome: no pink-cyan candy or retro techno; this is monochrome liquid metal, cool and molten.

## References

- Search: "liquid chrome 3D animation"
- Search: "chrome type motion design"
- Search: "Y2K chrome brand intro"
