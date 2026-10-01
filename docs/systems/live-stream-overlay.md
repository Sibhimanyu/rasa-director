---
name: "Live-stream overlay"
description: "Near-black stream UI with charcoal chat rows, the headline as a purple highlighted message, green avatars and fast-scrolling replies."
colors:
  canvas: "#0e0e10"        # page ground
  ink: "#efeff1"           # headlines and body text
  accent: "#9147ff"        # primary accent: the one thing that matters in each frame
  support: "#00d68f"       # supporting colour, used sparingly
  surface: "#1f1f23"       # raised cards and panels
  muted: "#adadb8"         # muted captions
typography:
  display:
    fontFamily: Rubik
    fontWeight: 700
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 10px
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Live-stream overlay

A motion-graphics design system from RasanAI's style library (Broadcast). Also known as Twitch overlay, streamer overlay, stream chat graphics, live stream alerts.

## Overview

Near-black stream UI with charcoal chat rows, the headline as a purple highlighted message, green avatars and fast-scrolling replies.

It feels live, social, playful. Use it for creator and gaming content, community launches, livestream promos, social clips.

## Visual language

- **Type:** Rubik (display, weight 700, tracking -0.02em) with Inter for body text.
- **Surfaces:** flat fills, no gradients; corners 10px; outlines none.
- **Depth:** no shadows.
- **Texture:** none; clean fills. **Icons:** filled. **Decoration:** none.

## Motion

Motion language: **Snappy**. Fast response with a steep initial velocity and a very short settle, like a well-tuned native UI.
- Enter `power4.out`, exit `power3.in`, move `expo.inOut`; durations 120 / 200 / 320 / 480 / 720 ms; stagger 50 ms; hold at least 600 ms.
- Never: fade-up-slide, bounce, overshoot, linear-entrance, blur-in.
- Preview entrance: pop.

## The terms that define it

- **Visual style / art direction:** Playful Tech
- **UI treatment:** Chat UI, Stylized UI
- **Format / purpose:** Brand Social Content, Reel / Short-Form Edit
- **UI interaction motion:** Notification, Streaming Text
- **Color treatment:** Dark UI, Brand Palette
- **Motion language:** Snappy
- **Pacing / rhythm:** Rapid-Fire
- **Transition language:** Slide, Scale Transition
- **Emotional / brand tone:** Playful, Energetic

## Do's and Don'ts

- Do keep the accent (#9147ff) for the single most important element in each frame.
- Do use Rubik large and confident; one idea per frame.
- Don't add drop shadows.
- Don't use gradients or glassy surfaces.
- Don't confuse it: Not an AI chat product: a crowd of viewers reacting live in stream colours, not a calm one-to-one assistant conversation.

## References

- Search: "twitch overlay animation"
- Search: "live stream chat graphics"
- Search: "streamer overlay motion design"
