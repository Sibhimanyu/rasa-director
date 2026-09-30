---
name: "Modular synth patch"
description: "Eurorack rack look: brushed-aluminium modules with tight condensed caps on a black rail, red and yellow modules, patch lines linking VCO, VCF and VCA."
colors:
  canvas: "#1c1c1e"        # page ground
  ink: "#ededed"           # headlines and body text
  accent: "#e63a2e"        # primary accent: the one thing that matters in each frame
  support: "#f2c230"       # supporting colour, used sparingly
  surface: "#b9bcc0"       # raised cards and panels
  muted: "#8e8e93"         # muted captions
typography:
  display:
    fontFamily: Barlow Condensed
    fontWeight: 700
  body:
    fontFamily: Barlow Condensed
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
rounded:
  md: 6px
shadows:
  card: "0 18px 44px rgba(0,0,0,0.16)"
components:
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.md}", border: "2px solid {colors.ink}" }
  button: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", rounded: "{rounded.md}" }
---

# Modular synth patch

A motion-graphics design system from Rasa Director's style library (Music & scene). Also known as Eurorack, patch cable diagram, modular synthesizer panel, synth module layout.

## Overview

Eurorack rack look: brushed-aluminium modules with tight condensed caps on a black rail, red and yellow modules, patch lines linking VCO, VCF and VCA.

It feels tactile, precise, nerdy. Use it for audio hardware and plugin launches, process explainers, music-tech education, creative-tool demos.

## Visual language

- **Type:** Barlow Condensed (display, weight 700, uppercase, tracking 0.03em) with Barlow Condensed for body text.
- **Surfaces:** brushed/chrome metallic gradients; corners 6px; outlines 2px solid in #0a0a0a.
- **Depth:** soft shadows (`0 18px 44px rgba(0,0,0,0.16)`).
- **Texture:** none; clean fills. **Icons:** line. **Decoration:** circuit.

## Motion

Motion language: **Precise**. Designed, exact motion with strong exponential deceleration, grid-locked destinations and zero overshoot.
- Enter `expo.out`, exit `expo.in`, move `expo.inOut`; durations 200 / 300 / 450 / 700 / 1000 ms; stagger 80 ms; hold at least 900 ms.
- Never: fade-up-slide, fade-slide, bounce, overshoot, blur-in, opacity-only-entrance.
- Preview entrance: snap.

## The terms that define it

- **Visual style / art direction:** Technical Minimalism
- **Material / surface language:** Brushed Metal
- **Typography:** Condensed
- **Iconography:** Technical Icons
- **Composition / layout system:** Flowchart, Node Map
- **Information / data visualization:** Flow Diagram
- **Motion language:** Precise
- **Pacing / rhythm:** Medium Explanatory
- **Transition language:** Line-Draw Transition, Wipe
- **Shadow / depth cues:** Soft Diffuse Shadow
- **Shape language:** Technical, Circular
- **Line / stroke language:** Medium
- **Sound + motion relationship:** Synth Effects

## Do's and Don'ts

- Do keep the accent (#e63a2e) for the single most important element in each frame.
- Do use Barlow Condensed large and confident; one idea per frame.
- Do keep every shadow the same soft style.
- Don't mix surface treatments; everything is metal.
- Don't confuse it: Not a systems diagram: the nodes are hardware modules in brushed metal with jacks and signal names, not abstract boxes on white.

## References

- Search: "eurorack modular synth animation"
- Search: "patch cable diagram design"
- Search: "modular synthesizer graphics"
