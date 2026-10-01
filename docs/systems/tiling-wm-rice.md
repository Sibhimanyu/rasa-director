---
name: "Tiling window-manager rice"
description: "Gapped tiles on a warm Gruvbox-dark desktop, cream monospace text, mustard and olive accents, a mustard border marking the focused pane."
colors:
  canvas: "#282828"        # page ground
  ink: "#ebdbb2"           # headlines and body text
  accent: "#fabd2f"        # primary accent: the one thing that matters in each frame
  support: "#b8bb26"       # supporting colour, used sparingly
  surface: "#3c3836"       # raised cards and panels
  muted: "#a89984"         # muted captions
typography:
  display:
    fontFamily: JetBrains Mono
    fontWeight: 800
  body:
    fontFamily: JetBrains Mono
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 4px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.accent}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Tiling window-manager rice

A motion-graphics design system from RasanAI's style library (Interface). Also known as unixporn rice, i3 / Hyprland desktop, Gruvbox theme, tiling WM.

## Overview

Gapped tiles on a warm Gruvbox-dark desktop, cream monospace text, mustard and olive accents, a mustard border marking the focused pane.

It feels crafted, nerdy, warm. Use it for open-source launches, developer tooling, dotfiles and setup videos.

## Visual language

- **Type:** JetBrains Mono (display, weight 800, lowercase, tracking -0.02em) with JetBrains Mono for body text.
- **Surfaces:** flat fills, no gradients; corners 4px; outlines 2px solid in accent.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** glyph. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism, Warm Minimalism
- **Era / design-movement influence:** Modern SaaS Design
- **UI treatment:** Terminal / Code UI, Bento UI, Flat UI
- **Composition / layout system:** Modular Grid, Desktop Workspace
- **Color treatment:** Dark UI, Earth Tones
- **Typography:** Monospace
- **Line / stroke language:** Medium
- **Shadow / depth cues:** No Shadow
- **Motion language:** Snappy
- **Transition language:** Hard Cut, Push

## Do's and Don'ts

- Do keep the accent (#fabd2f) for the single most important element in each frame.
- Do use JetBrains Mono large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not dark dev-tool SaaS: warm retro-toned terminal tiles in Gruvbox cream and mustard, mono everywhere, not cool near-black with one indigo accent.

## References

- Search: "tiling window manager rice"
- Search: "gruvbox desktop aesthetic"
- Search: "hyprland unixporn setup"
