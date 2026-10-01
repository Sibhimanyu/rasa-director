---
name: "Perfume-ad noir"
description: "Aubergine darkness, a rose-gold glint, soft-lit italic serif and one slow drifting glow, like a fragrance commercial end card."
colors:
  canvas: "#140a10"        # page ground
  ink: "#f6e9ee"           # headlines and body text
  accent: "#d8a0a0"        # primary accent: the one thing that matters in each frame
  support: "#6b2f45"       # supporting colour, used sparingly
  surface: "#24121b"       # raised cards and panels
  muted: "#9c8490"         # muted captions
typography:
  display:
    fontFamily: Playfair Display
    fontWeight: 400
  body:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 0 24px #d8a0a0"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Perfume-ad noir

A motion-graphics design system from RasanAI's style library (Luxury & restrained). Also known as fragrance ad, parfum noir, dark beauty luxe, scent film.

## Overview

Aubergine darkness, a rose-gold glint, soft-lit italic serif and one slow drifting glow, like a fragrance commercial end card.

It feels sensual, mysterious, intimate. Use it for fragrance and beauty ads, luxury end cards, holiday gifting campaigns, nightlife brands.

## Visual language

- **Type:** Playfair Display (display, weight 400, tracking 0.01em) with Cormorant Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** glow shadows (`0 0 24px #d8a0a0`).
- **Texture:** noise. **Icons:** emoji3d. **Decoration:** orbits.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: drift.

## The terms that define it

- **Visual style / art direction:** Luxury, Cinematic
- **Color treatment:** Dark UI, Warm Palette
- **Typography:** High-Contrast Serif
- **VFX / compositing treatment:** Glow, Bloom
- **Composition / layout system:** Centered Hero Composition, Negative-Space Composition
- **Emotional / brand tone:** Mysterious, Luxurious
- **Motion language:** Luxurious / Slow
- **Transition language:** Dissolve, Light Wipe

## Do's and Don'ts

- Do keep the accent (#d8a0a0) for the single most important element in each frame.
- Do use Playfair Display large and confident; one idea per frame.
- Do keep every shadow the same glow style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not black and gold: warmer and more sensual, lit by a rose glow and italics rather than engraved capitals and gold frames.

## References

- Search: "perfume commercial end card"
- Search: "fragrance ad typography"
- Search: "dark luxury beauty motion"
