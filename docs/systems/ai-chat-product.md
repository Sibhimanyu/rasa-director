---
name: "AI chat product"
description: "Prompt bars and answer bubbles on a warm off-white page, text streaming in, a violet-to-cyan sparkle marking the AI."
colors:
  canvas: "#faf9f6"        # page ground
  ink: "#1a1a19"           # headlines and body text
  accent: "#7c5cff"        # primary accent: the one thing that matters in each frame
  support: "#22d3ee"       # supporting colour, used sparingly
  surface: "#ffffff"       # raised cards and panels
  muted: "#8a877f"         # muted captions
typography:
  display:
    fontFamily: Onest
    fontWeight: 600
  body:
    fontFamily: Onest
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 999px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "1px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# AI chat product

A motion-graphics design system from RasanAI's style library (Product & UI). Also known as chatbot UI demo, assistant interface, prompt-to-answer.

## Overview

Prompt bars and answer bubbles on a warm off-white page, text streaming in, a violet-to-cyan sparkle marking the AI.

It feels helpful, smart, approachable. Use it for AI assistant launches, copilot features, agent demos.

## Visual language

- **Type:** Onest (display, weight 600, tracking -0.02em) with Onest for body text.
- **Surfaces:** soft gradient washes from the surface toward the accent; corners fully rounded (pills); outlines 1px solid in #e6e3dc.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** duotone. **Decoration:** stars.

## Motion

Motion language: **Fluid**. Uninterrupted flow in which every state change hands off into the next, with no visible stops or cuts between elements.
- Enter `power3.inOut`, exit `power3.inOut`, move `sine.inOut`; durations 300 / 500 / 800 / 1200 / 1800 ms; stagger 40 ms; hold at least 900 ms.
- Never: fade-up-slide, bounce, scale-pop, linear-entrance, opacity-only-entrance.
- Preview entrance: type.

## The terms that define it

- **Visual style / art direction:** Clean Minimalism, Gradient-Heavy
- **UI treatment:** Chat UI, Simplified UI
- **UI interaction motion:** Typing, Streaming Text, AI Generation, Agent Step Sequence
- **Product demonstration language:** Input to Output
- **Color treatment:** Light UI, Gradient
- **Motion language:** Fluid
- **Transition language:** Crossfade, UI Morph

## Do's and Don'ts

- Do keep the accent (#7c5cff) for the single most important element in each frame.
- Do use Onest large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is gradient.

## References

- Search: "ai chat interface animation"
- Search: "chatbot product demo video"
- Search: "streaming text ui motion"
