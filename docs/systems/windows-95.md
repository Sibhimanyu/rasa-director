---
name: "Windows 95"
description: "Grey beveled windows with navy title bars and square _ □ × buttons on a teal desktop, pixel type and chunky pixel icons."
colors:
  canvas: "#008c8c"        # page ground
  ink: "#000000"           # headlines and body text
  accent: "#000080"        # primary accent: the one thing that matters in each frame
  support: "#808080"       # supporting colour, used sparingly
  surface: "#c0c0c0"       # raised cards and panels
  muted: "#404040"         # muted captions
typography:
  display:
    fontFamily: Pixelify Sans
    fontWeight: 700
  body:
    fontFamily: Pixelify Sans
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "inset 0 5px 12px rgba(0,0,0,0.22)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "3px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Windows 95

A motion-graphics design system from RasanAI's style library (Retro & eras). Also known as classic Windows UI, Win95 aesthetic, retro OS, beveled grey UI.

## Overview

Grey beveled windows with navy title bars and square _ □ × buttons on a teal desktop, pixel type and chunky pixel icons.

It feels nostalgic, playful, nerdy. Use it for dev-tool launches, retro product teasers, meme-literate social ads, changelog films.

## Visual language

- **Type:** Pixelify Sans (display, weight 700, tracking 0em) with Pixelify Sans for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 3px solid in ink.
- **Depth:** inset shadows (`inset 0 5px 12px rgba(0,0,0,0.22)`).
- **Texture:** none; clean fills. **Icons:** pixel. **Decoration:** none.

## Motion

Motion language: **Choppy / Stepped**. No interpolation as an aesthetic: elements jump between a few discrete positions or cut instantly.
- Enter `steps(4)`, exit `steps(3)`, move `steps(6)`; durations 100 / 160 / 250 / 400 / 600 ms; stagger 60 ms; hold at least 500 ms.
- Never: fade-up-slide, fade-slide, blur-in, bounce, overshoot, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Web 1.0
- **Era / design-movement influence:** Retro Operating Systems, Early Desktop Computing
- **UI treatment:** Retro UI, Windowed UI
- **Iconography:** System Icons
- **Typography:** Pixel Type
- **Line / stroke language:** Medium
- **Shadow / depth cues:** Inner Shadow
- **Motion language:** Choppy / Stepped
- **Transition language:** Hard Cut

## Do's and Don'ts

- Do keep the accent (#000080) for the single most important element in each frame.
- Do use Pixelify Sans large and confident; one idea per frame.
- Do keep every shadow the same inset style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not vaporwave: the OS here is played straight, no pink gradients, busts or irony.

## References

- Search: "windows 95 UI animation"
- Search: "retro OS motion graphics"
- Search: "win95 aesthetic explainer"
