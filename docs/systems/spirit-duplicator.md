---
name: "Spirit duplicator ditto"
description: "A school handout run off in fuzzy violet ditto ink: hand-lettered title, typed questions, Name and Date blanks, soft bleeding lines."
colors:
  canvas: "#f7f5f1"        # page ground
  ink: "#56308a"           # headlines and body text
  accent: "#b89ad9"        # primary accent: the one thing that matters in each frame
  support: "#7b4bb3"       # supporting colour, used sparingly
  surface: "#fbfaf7"       # raised cards and panels
  muted: "#8a70ab"         # muted captions
typography:
  display:
    fontFamily: Patrick Hand
    fontWeight: 400
  body:
    fontFamily: Cutive Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Spirit duplicator ditto

A motion-graphics design system from Rasa Director's style library (Print). Also known as ditto sheet, spirit duplicator, mimeograph, school worksheet, purple ditto.

## Overview

A school handout run off in fuzzy violet ditto ink: hand-lettered title, typed questions, Name and Date blanks, soft bleeding lines.

It feels nostalgic, homely, earnest. Use it for education and edtech, back-to-school campaigns, nostalgic brand stories, quizzes and explainers.

## Visual language

- **Type:** Patrick Hand (display, weight 400, tracking 0em) with Cutive Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 1px solid in ink.
- **Depth:** no shadows.
- **Texture:** noise. **Icons:** doodle. **Decoration:** rules.

## Motion

Motion language: **Handmade / Imperfect**. Deliberately imperfect motion with frame-to-frame jitter (line boil), uneven spacing and slightly irregular timing, as if drawn by hand.
- Enter `power2.out`, exit `power2.in`, move `steps(3)`; durations 160 / 280 / 450 / 700 / 1000 ms; stagger 90 ms; hold at least 800 ms.
- Never: fade-up-slide, blur-in, linear-entrance, opacity-only-entrance.
- Preview entrance: fade.

## The terms that define it

- **Visual style / art direction:** Print-Editorial, Handmade / Craft
- **Era / design-movement influence:** Mid-Century Modern, 1970s
- **Color treatment:** Monochrome, Cool Palette
- **Typography:** Handwritten / Script, Monospace
- **Texture:** Ink Bleed, Photocopy Noise
- **Material / surface language:** Paper
- **Composition / layout system:** Editorial Grid
- **Motion language:** Handmade / Imperfect
- **Transition language:** Fade, Page Flip
- **Emotional / brand tone:** Nostalgic, Friendly

## Do's and Don'ts

- Do keep the accent (#b89ad9) for the single most important element in each frame.
- Do use Patrick Hand large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not a notebook doodle: everything is one smudgy duplicated purple, typed and ruled like an official classroom sheet.

## References

- Search: "ditto sheet purple ink style"
- Search: "mimeograph worksheet animation"
- Search: "retro school worksheet motion graphics"
