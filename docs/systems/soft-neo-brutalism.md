---
name: "Soft neo-brutalism"
description: "Chunky black outlines and solid offset shadows on rounded pills over cream paper, with hand-drawn doodle icons."
colors:
  canvas: "#ece8dc"        # page ground
  ink: "#161616"           # headlines and body text
  accent: "#e07a5f"        # primary accent: the one thing that matters in each frame
  support: "#f2c14e"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#9a968c"         # muted captions
typography:
  display:
    fontFamily: Inter Tight
    fontWeight: 800
  body:
    fontFamily: Inter Tight
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "10px 10px 0 #161616"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "5px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Soft neo-brutalism

A motion-graphics design system from RasanAI's style library (Bold & graphic). Also known as neubrutalism, playful brutalism, hard-shadow UI, Gumroad style.

## Overview

Chunky black outlines and solid offset shadows on rounded pills over cream paper, with hand-drawn doodle icons.

It feels playful, confident, handmade. Use it for SaaS launch films, creator tools, social teasers, AI product announcements.

## Visual language

- **Type:** Inter Tight (display, weight 800, tracking -0.02em) with Inter Tight for body text.
- **Surfaces:** flat fills, no gradients; corners fully rounded (pills); outlines 5px solid in ink.
- **Depth:** hard shadows (`10px 10px 0 #161616`).
- **Texture:** none; clean fills. **Icons:** doodle. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Neo-Brutalism, Doodle
- **UI treatment:** Neo-Brutalist UI, Isolated-Component UI
- **Illustration style:** Doodle, Thick-Outline Illustration
- **Iconography:** Hand-Drawn Icons
- **Line / stroke language:** Chunky, Offset-Line
- **Shadow / depth cues:** Hard Shadow
- **Motion language:** Snappy
- **Transition language:** Hard Cut

## Do's and Don'ts

- Do keep the accent (#e07a5f) for the single most important element in each frame.
- Do use Inter Tight large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not skeuomorphism: nothing imitates a real material; the depth is a flat block shadow.

## References

- Search: "neubrutalism UI animation"
- Search: "hard shadow pill UI motion"
- Search: "neo brutalist product video"
