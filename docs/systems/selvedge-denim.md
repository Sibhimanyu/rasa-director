---
name: "Selvedge denim"
description: "Raw indigo twill tiles topstitched in copper thread, a red selvedge line, rivet-tough Barlow Condensed capitals."
colors:
  canvas: "#1c2944"        # page ground
  ink: "#eef0f3"           # headlines and body text
  accent: "#d9893a"        # primary accent: the one thing that matters in each frame
  support: "#b8322e"       # supporting colour, used sparingly
  surface: "#26365a"       # raised cards and panels
  muted: "#9aa6bd"         # muted captions
typography:
  display:
    fontFamily: Barlow Condensed
    fontWeight: 700
  body:
    fontFamily: Barlow
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px dashed {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Selvedge denim

A motion-graphics design system from Rasa Director's style library (Nature & material). Also known as raw denim, indigo twill, workwear denim, copper stitch.

## Overview

Raw indigo twill tiles topstitched in copper thread, a red selvedge line, rivet-tough Barlow Condensed capitals.

It feels tough, authentic, street. Use it for fashion and workwear, streetwear drops, craft brewing and barbers, music and tour visuals.

## Visual language

- **Type:** Barlow Condensed (display, weight 700, uppercase, tracking 0.01em) with Barlow for body text.
- **Surfaces:** flat fills, no gradients; corners 6px; outlines 2px dashed in accent.
- **Depth:** no shadows.
- **Texture:** weave. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Handmade / Craft, Editorial
- **Typography:** Condensed
- **Composition / layout system:** Bento Grid
- **Color treatment:** Complementary, Dark UI
- **Texture:** Print Grain
- **Material / surface language:** Fabric
- **Line / stroke language:** Thin
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Slide
- **Emotional / brand tone:** Bold, Confident

## Do's and Don'ts

- Do keep the accent (#d9893a) for the single most important element in each frame.
- Do use Barlow Condensed large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not indigo shibori: dark rigid twill with orange topstitching and condensed caps, not soft resist-dyed cloth.

## References

- Search: "denim texture animation"
- Search: "raw denim brand video"
- Search: "workwear denim motion graphics"
