---
name: "Annotated screenshot"
description: "A real screen framed in a window, bold red outlines, arrows and numbered callouts pointing at what matters, zooming into details."
colors:
  canvas: "#dfe3e8"        # page ground
  ink: "#111418"           # headlines and body text
  accent: "#ff3b30"        # primary accent: the one thing that matters in each frame
  support: "#ffcc00"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#5b6472"         # muted captions
typography:
  display:
    fontFamily: Schibsted Grotesk
    fontWeight: 800
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 8px
shadows:
  card: "0 40px 70px -16px rgba(0,0,0,0.3)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Annotated screenshot

A motion-graphics design system from RasanAI's style library (Data & explainers). Also known as callout explainer, screenshot walkthrough, markup explainer.

## Overview

A real screen framed in a window, bold red outlines, arrows and numbered callouts pointing at what matters, zooming into details.

It feels helpful, direct, clear. Use it for tutorials, release notes, support and how-to videos.

## Visual language

- **Type:** Schibsted Grotesk (display, weight 800, tracking -0.02em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 8px; outlines 5px solid in accent.
- **Depth:** float shadows (`0 40px 70px -16px rgba(0,0,0,0.3)`).
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism
- **UI treatment:** Production-Faithful UI, Windowed UI
- **Product demonstration language:** Callout Annotation, Zoomed Detail
- **Photo / video integration:** Floating Screenshot
- **Format / purpose:** Tutorial
- **Motion function:** Direct Attention, Emphasize
- **Motion language:** Snappy
- **Transition language:** Zoom Transition, Mask Reveal

## Do's and Don'ts

- Do keep the accent (#ff3b30) for the single most important element in each frame.
- Do use Schibsted Grotesk large and confident; one idea per frame.
- Do keep every shadow the same float style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not browser-framed UI: the markup is the point; red outlines and callouts sit on top of the product.

## References

- Search: "annotated screenshot animation"
- Search: "callout tutorial video"
- Search: "screenshot markup explainer"
