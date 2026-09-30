---
name: "BeOS yellow tab"
description: "Windows crowned by a narrow sunflower-yellow title tab, flat grey panels with crisp black outlines on a steel-blue desktop, tidy Helvetica-style type."
colors:
  canvas: "#336699"        # page ground
  ink: "#ffffff"           # headlines and body text
  accent: "#ffcb00"        # primary accent: the one thing that matters in each frame
  support: "#111111"       # supporting colour, used sparingly
  surface: "#dcdcdc"       # raised cards and panels
  muted: "#c9d8e8"         # muted captions
typography:
  display:
    fontFamily: Arimo
    fontWeight: 700
  body:
    fontFamily: Arimo
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 0px
shadows:
  card: "10px 10px 0 #ffffff"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# BeOS yellow tab

A motion-graphics design system from Rasa Director's style library (Interface). Also known as BeOS, Haiku OS, yellow tab windows, BeOS R5.

## Overview

Windows crowned by a narrow sunflower-yellow title tab, flat grey panels with crisp black outlines on a steel-blue desktop, tidy Helvetica-style type.

It feels quirky, precise, cult. Use it for indie software launches, developer-culture films, alt-computing nostalgia.

## Visual language

- **Type:** Arimo (display, weight 700, tracking -0.01em) with Arimo for body text.
- **Surfaces:** flat fills, no gradients; corners 0px; outlines 2px solid in #111111.
- **Depth:** hard shadows (`10px 10px 0 #ffffff`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Corporate Flat
- **Era / design-movement influence:** Retro Operating Systems, 1990s
- **UI treatment:** Retro UI, Windowed UI, Flat UI
- **Color treatment:** Limited Palette, Cool Palette
- **Typography:** Neo-Grotesk
- **Line / stroke language:** Medium
- **Shadow / depth cues:** Hard Shadow
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Slide

## Do's and Don'ts

- Do keep the accent (#ffcb00) for the single most important element in each frame.
- Do use Arimo large and confident; one idea per frame.
- Do keep every shadow the same hard style.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not Windows 95: the title lives in a small yellow tab, not a full-width navy bar, and the desktop is steel blue, not teal.

## References

- Search: "beos yellow tab interface"
- Search: "haiku os desktop animation"
- Search: "beos window aesthetic"
