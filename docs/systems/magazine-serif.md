---
name: "Magazine serif editorial"
description: "A feature spread in motion: masthead rule, high-contrast display serif headline, two justified columns and a photo well on warm paper."
colors:
  canvas: "#f6f1e7"        # page ground
  ink: "#1a1714"           # headlines and body text
  accent: "#b23a2a"        # primary accent: the one thing that matters in each frame
  support: "#d8c8ad"       # supporting colour, used sparingly
  surface: "#fffaf0"       # raised cards and panels
  muted: "#8d8274"         # muted captions
typography:
  display:
    fontFamily: DM Serif Display
    fontWeight: 400
  body:
    fontFamily: Newsreader
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Magazine serif editorial

A motion-graphics design system from RasanAI's style library (Editorial & print). Also known as print editorial, magazine layout, feature spread, editorial serif.

## Overview

A feature spread in motion: masthead rule, high-contrast display serif headline, two justified columns and a photo well on warm paper.

It feels literate, considered, premium. Use it for brand films, manifesto films, publishing and media, long-read teasers.

## Visual language

- **Type:** DM Serif Display (display, weight 400, tracking -0.02em) with Newsreader for body text.
- **Surfaces:** off-white paper with visible fibre; corners 0px; outlines none.
- **Depth:** no shadows.
- **Texture:** paper. **Icons:** none. **Decoration:** rules.

## Motion

Motion language: **Smooth**. Continuous, gentle acceleration and deceleration with no visible snap, overshoot or stop.
- Enter `power2.out`, exit `power2.in`, move `power2.inOut`; durations 240 / 400 / 600 / 900 / 1300 ms; stagger 80 ms; hold at least 1000 ms.
- Never: fade-up-slide, bounce, overshoot, scale-pop, linear-entrance.
- Preview entrance: mask.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Editorial
- **Typography:** High-Contrast Serif, Editorial Serif
- **Composition / layout system:** Editorial Grid, Typography-Led Composition
- **Color treatment:** Limited Palette, Warm Palette
- **Texture:** Paper Grain
- **Material / surface language:** Paper
- **Motion language:** Smooth
- **Transition language:** Mask Reveal, Page Flip
- **Emotional / brand tone:** Editorial, Premium

## Do's and Don'ts

- Do keep the accent (#b23a2a) for the single most important element in each frame.
- Do use DM Serif Display large and confident; one idea per frame.
- Don't add drop shadows.
- Don't mix surface treatments; everything is paper.
- Don't confuse it: Not newspaper broadsheet: fewer columns, bigger serif, more air and one image carrying the page.

## References

- Search: "magazine editorial motion design"
- Search: "editorial serif kinetic typography"
- Search: "animated magazine spread"
