---
name: "Velvet jewel-tone"
description: "Deep burgundy velvet ground, a heavy Playfair headline in cream, a gold panel and fine column rules, like an opera programme."
colors:
  canvas: "#3a0f1d"        # page ground
  ink: "#f5e6cf"           # headlines and body text
  accent: "#caa25f"        # primary accent: the one thing that matters in each frame
  support: "#6b1e33"       # supporting colour, used sparingly
  surface: "#4a1627"       # raised cards and panels
  muted: "#b99a8c"         # muted captions
typography:
  display:
    fontFamily: Playfair Display
    fontWeight: 800
  body:
    fontFamily: Cormorant Garamond
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Velvet jewel-tone

A motion-graphics design system from RasanAI's style library (Luxury & restrained). Also known as burgundy velvet, jewel tones, opera luxury, oxblood and gold.

## Overview

Deep burgundy velvet ground, a heavy Playfair headline in cream, a gold panel and fine column rules, like an opera programme.

It feels rich, theatrical, intimate. Use it for theatre and opera seasons, wine and spirits, holiday luxury, private members' clubs.

## Visual language

- **Type:** Playfair Display (display, weight 800, tracking -0.02em) with Cormorant Garamond for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Luxurious / Slow**. Very slow, circular deceleration, long holds and stillness, where restraint itself is the signal of value.
- Enter `circ.out`, exit `circ.in`, move `power1.inOut`; durations 600 / 900 / 1400 / 2000 / 2800 ms; stagger 200 ms; hold at least 1800 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, linear-entrance, blur-in.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Luxury, Print-Editorial
- **Color treatment:** Warm Palette, Limited Palette
- **Typography:** High-Contrast Serif, Editorial Serif
- **Material / surface language:** Fabric
- **Composition / layout system:** Editorial Grid
- **Texture:** Film Grain
- **Motion language:** Luxurious / Slow
- **Transition language:** Wipe, Fade

## Do's and Don'ts

- Do keep the accent (#caa25f) for the single most important element in each frame.
- Do use Playfair Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not perfume noir: this is printed and structured, columns and rules in jewel tones, not a single glowing end card.

## References

- Search: "burgundy luxury editorial motion"
- Search: "opera season trailer graphics"
- Search: "jewel tone luxury typography animation"
