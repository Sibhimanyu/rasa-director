---
name: "Screen print"
description: "Three flat opaque inks on kraft stock, heavy slab display type, halftone shading and bold sunburst rays."
colors:
  canvas: "#dcc49a"        # page ground
  ink: "#1c1a17"           # headlines and body text
  accent: "#c8341f"        # primary accent: the one thing that matters in each frame
  support: "#1f5f7a"       # supporting colour, used sparingly
  surface: "#efe0c2"       # raised cards and panels
  muted: "#6e5c40"         # muted captions
typography:
  display:
    fontFamily: Alfa Slab One
    fontWeight: 400
  body:
    fontFamily: Oswald
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #1c1a17"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Screen print

A motion-graphics design system from RasanAI's style library (Handmade & printed). Also known as silkscreen, gig poster, serigraph, rock poster print.

## Overview

Three flat opaque inks on kraft stock, heavy slab display type, halftone shading and bold sunburst rays.

It feels bold, crafted, loud. Use it for concert and event promos, craft beer and food, sports teams, merch drops.

## Visual language

- **Type:** Alfa Slab One (display, weight 400, uppercase, tracking 0.01em) with Oswald for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines none.
- **Depth:** hard shadows (`10px 10px 0 #1c1a17`).
- **Texture:** halftone. **Icons:** filled. **Decoration:** rays.

## Motion

Motion language: **Heavy**. Motion that communicates large mass: slow to start, accelerating under gravity, landing with impact and minimal rebound.
- Enter `power4.in`, exit `power3.in`, move `power3.inOut`; durations 120 / 250 / 450 / 800 / 1200 ms; stagger 120 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Screen Print, Halftone
- **Material / surface language:** Screen Print
- **Texture:** Halftone, Distressed Edges
- **Color treatment:** Limited Palette, Warm Palette
- **Typography:** Slab Serif, Condensed
- **Composition / layout system:** Poster Composition
- **Motion language:** Heavy
- **Transition language:** Hard Cut, Wipe

## Do's and Don'ts

- Do keep the accent (#c8341f) for the single most important element in each frame.
- Do use Alfa Slab One large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not risograph: screen print is dense, opaque and poster-sized, not grainy translucent overprint.

## References

- Search: "screen print poster animation"
- Search: "gig poster motion graphics"
- Search: "silkscreen style title"
