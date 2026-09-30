---
name: "Champagne"
description: "Pale champagne ground, cards washed in ivory-to-gold gradient, a soft-lit phone, fine sparkles, elegant serif, gentle rising motion."
colors:
  canvas: "#f5ecdc"        # page ground
  ink: "#3a2e20"           # headlines and body text
  accent: "#d8b374"        # primary accent: the one thing that matters in each frame
  support: "#ecd9b4"       # supporting colour, used sparingly
  surface: "#fff9ef"       # raised cards and panels
  muted: "#9a8a72"         # muted captions
typography:
  display:
    fontFamily: DM Serif Display
    fontWeight: 400
  body:
    fontFamily: Figtree
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 22px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Champagne

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as champagne gold, blush gold, celebration luxe, sparkling ivory.

## Overview

Pale champagne ground, cards washed in ivory-to-gold gradient, a soft-lit phone, fine sparkles, elegant serif, gentle rising motion.

It feels celebratory, elegant, light. Use it for weddings and events, premium app launches, hospitality and bookings, holiday campaigns.

## Visual language

- **Type:** DM Serif Display (display, weight 400, tracking -0.01em) with Figtree for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners 22px; outlines none.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** stars.

## Motion

Motion language: **Floating**. Elements hover and bob gently around a rest point, as if suspended in water or air.
- Enter `sine.out`, exit `sine.in`, move `sine.inOut`; durations 500 / 800 / 1200 / 1800 / 2600 ms; stagger 70 ms; hold at least 1500 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Luxury, Gradient-Heavy
- **Color treatment:** Warm Palette, Gradient
- **UI treatment:** Device-Bound UI, Floating-Card UI
- **Composition / layout system:** Phone Composition
- **Typography:** High-Contrast Serif
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Emotional / brand tone:** Luxurious, Optimistic
- **Motion language:** Floating
- **Transition language:** Dissolve, Light Wipe

## Do's and Don'ts

- Do keep the accent (#d8b374) for the single most important element in each frame.
- Do use DM Serif Display large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is gradient.
- Don't confuse it: Not black and gold: light and bubbly, a pale gold gradient on ivory rather than gold on darkness.

## References

- Search: "champagne gold motion graphics"
- Search: "elegant gold gradient app promo"
- Search: "wedding luxury animation"
