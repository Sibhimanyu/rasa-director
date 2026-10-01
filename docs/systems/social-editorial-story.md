---
name: "Social-first editorial"
description: "A magazine told in vertical stories: huge serif cover lines on a black phone, film-grain photo panels and one coral highlight."
colors:
  canvas: "#121110"        # page ground
  ink: "#f5f1ea"           # headlines and body text
  accent: "#e25c3b"        # primary accent: the one thing that matters in each frame
  support: "#d8c7b0"       # supporting colour, used sparingly
  surface: "#1e1c1a"       # raised cards and panels
  muted: "#9c958a"         # muted captions
typography:
  display:
    fontFamily: Playfair Display
    fontWeight: 700
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 12px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Social-first editorial

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as magazine stories, vertical editorial, Instagram editorial, digital cover story.

## Overview

A magazine told in vertical stories: huge serif cover lines on a black phone, film-grain photo panels and one coral highlight.

It feels stylish, immediate, media-savvy. Use it for social teasers, media and publishing, fashion and beauty, creator launches.

## Visual language

- **Type:** Playfair Display (display, weight 700, tracking -0.03em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 12px; outlines none.
- **Depth:** no shadows.
- **Texture:** grain. **Icons:** none. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: slide.

## The terms that define it

- **Visual style / art direction:** Editorial, Fashion Editorial
- **Format / purpose:** Brand Social Content, Short-Form Promotional Motion
- **Typography:** High-Contrast Serif, Neutral Sans Serif
- **Composition / layout system:** Phone Composition, Typography-Led Composition
- **Color treatment:** Dark UI, Accent-Color System
- **Photo / video integration:** Footage Inside Frames, Photo + Typography
- **Texture:** Film Grain
- **Motion language:** Snappy
- **Transition language:** Push, Hard Cut

## Do's and Don'ts

- Do keep the accent (#e25c3b) for the single most important element in each frame.
- Do use Playfair Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not scrollytelling: tap-through story frames with cover-line type, not a long read with charts.

## References

- Search: "editorial instagram stories animation"
- Search: "vertical magazine story design"
- Search: "social editorial motion template"
