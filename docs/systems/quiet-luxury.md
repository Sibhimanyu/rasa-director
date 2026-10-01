---
name: "Quiet luxury"
description: "Camel, oat and cashmere-beige pills with whisper-soft shadows, no logos or gold, a restrained thin serif, barely-there motion."
colors:
  canvas: "#e8dfd1"        # page ground
  ink: "#2a2420"           # headlines and body text
  accent: "#a8906f"        # primary accent: the one thing that matters in each frame
  support: "#6f6152"       # supporting colour, used sparingly
  surface: "#f2ebe0"       # raised cards and panels
  muted: "#8c7f70"         # muted captions
typography:
  display:
    fontFamily: Italiana
    fontWeight: 400
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

# Quiet luxury

A motion-graphics design system from RasanAI's style library (Luxury & restrained). Also known as old money, stealth wealth, beige luxury, understated luxury.

## Overview

Camel, oat and cashmere-beige pills with whisper-soft shadows, no logos or gold, a restrained thin serif, barely-there motion.

It feels understated, assured, soft. Use it for premium fashion basics, private banking apps, members' clubs, luxury home goods.

## Visual language

- **Type:** Italiana (display, weight 400, tracking 0.02em) with Manrope for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Luxury, Warm Minimalism
- **Color treatment:** Muted, Low Contrast
- **Typography:** Editorial Serif
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Shape language:** Pill-Shaped
- **UI treatment:** Minimal UI, Isolated-Component UI
- **Emotional / brand tone:** Premium, Calm
- **Motion language:** Luxurious / Slow
- **Transition language:** Crossfade, Blur Transition

## Do's and Don'ts

- Do keep the accent (#a8906f) for the single most important element in each frame.
- Do use Italiana large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not warm minimalism: no terracotta or craft; it is tonal beige-on-beige that signals wealth by what it leaves out.

## References

- Search: "quiet luxury brand motion"
- Search: "old money aesthetic video"
- Search: "beige luxury UI animation"
