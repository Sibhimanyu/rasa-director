---
name: "Stealth tech luxe"
description: "Matte graphite windows with hairline aluminium edges floating over black, wide-tracked light capitals, fine line icons, machined precision."
colors:
  canvas: "#0f1011"        # page ground
  ink: "#ececec"           # headlines and body text
  accent: "#b4b8be"        # primary accent: the one thing that matters in each frame
  support: "#55595f"       # supporting colour, used sparingly
  surface: "#232427"       # raised cards and panels
  muted: "#8a8d92"         # muted captions
typography:
  display:
    fontFamily: Manrope
    fontWeight: 300
  body:
    fontFamily: Manrope
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Stealth tech luxe

A motion-graphics design system from RasanAI's style library (Luxury & restrained). Also known as premium hardware, anodised aluminium, Bang & Olufsen style, matte black tech.

## Overview

Matte graphite windows with hairline aluminium edges floating over black, wide-tracked light capitals, fine line icons, machined precision.

It feels engineered, sleek, exclusive. Use it for audio and camera hardware, premium laptops and phones, EV interiors, design-led tech brands.

## Visual language

- **Type:** Manrope (display, weight 300, uppercase, tracking 0.18em) with Manrope for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines 1px solid in #6b6f75.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** noise. **Icons:** line. **Decoration:** none.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Metallic, Technical Minimalism
- **Material / surface language:** Brushed Metal, Matte Product Surface
- **UI treatment:** Windowed UI, Stylized UI
- **Typography:** Extended, Neo-Grotesk
- **Shadow / depth cues:** Floating Shadows
- **Color treatment:** Dark UI, Grayscale
- **Motion language:** Precise
- **Transition language:** Slide, Light Wipe

## Do's and Don'ts

- Do keep the accent (#b4b8be) for the single most important element in each frame.
- Do use Manrope large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a sci-fi interface: no neon or glow, just metal, graphite and restraint, like a product photograph set in motion.

## References

- Search: "premium hardware product film motion"
- Search: "brushed aluminium UI animation"
- Search: "luxury tech product reveal"
