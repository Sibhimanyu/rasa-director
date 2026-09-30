---
name: "Editorial couture"
description: "Tilted oxblood and blush fashion-plate panels on off-white, an italic Didone headline, film grain, cuts timed like a lookbook."
colors:
  canvas: "#f1ece5"        # page ground
  ink: "#131111"           # headlines and body text
  accent: "#7a1f2b"        # primary accent: the one thing that matters in each frame
  support: "#e6c4bd"       # supporting colour, used sparingly
  surface: "#fbf8f4"       # raised cards and panels
  muted: "#8a817a"         # muted captions
typography:
  display:
    fontFamily: Playfair Display
    fontWeight: 700
  body:
    fontFamily: Tenor Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Editorial couture

A motion-graphics design system from Rasa Director's style library (Luxury & restrained). Also known as Vogue editorial, couture magazine, fashion editorial collage, haute editorial.

## Overview

Tilted oxblood and blush fashion-plate panels on off-white, an italic Didone headline, film grain, cuts timed like a lookbook.

It feels daring, cultured, chic. Use it for fashion campaigns, magazine and publisher promos, designer collaborations, gallery openings.

## Visual language

- **Type:** Playfair Display (display, weight 700, tracking -0.03em) with Tenor Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Cinematic**. Film-grammar motion: slow push-ins, focus pulls, long eased camera moves and breathing holds under which the frame never fully stops.
- Enter `power2.out`, exit `power2.inOut`, move `sine.inOut`; durations 400 / 700 / 1100 / 1600 / 2400 ms; stagger 160 ms; hold at least 1400 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: step.

## The terms that define it

- **Visual style / art direction:** Fashion Editorial, Mixed-Media Collage
- **Composition / layout system:** Collage Composition, Asymmetric Composition
- **Typography:** High-Contrast Serif
- **Photo / video integration:** Masked Photography, Photo Cutout
- **Texture:** Film Grain
- **Color treatment:** Limited Palette
- **Motion language:** Cinematic
- **Transition language:** Hard Cut, Mask Reveal

## Do's and Don'ts

- Do keep the accent (#7a1f2b) for the single most important element in each frame.
- Do use Playfair Display large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not fashion minimal: layered and image-led, with overlapping panels and tape, rather than a single word on white.

## References

- Search: "fashion editorial motion graphics"
- Search: "vogue style collage animation"
- Search: "couture magazine title sequence"
