---
id: "banknote-guilloche"
name: "Banknote and guilloche (security print, intaglio, rainbow printing)"
kind: "material"
domain: "material"
era: "Engine-turning machines from the 1500s-1600s; applied to banknote and certificate security through the 19th and 20th centuries; Faberge enamel over guilloche from the 1880s"
origin: ["rose engine and geometric lathes", "central-bank and security printers (De La Rue, American Bank Note Company are named in a secondary source, not verified here)", "Faberge (enamel over guilloche)"]
palette: {"roles":{"paper":"#e3e8e2","ink":"#385447","ink_light":"#6e9984","black":"#0b0b08","accent":"#a8322d","tint":"#aab4ae"},"logic":"two or three inks on pale rag paper, overlapping fine lines in related hues; the classic US reading is green-black intaglio over a grey-green tint. Rainbow printing blends several background colours smoothly along the sheet","evidence":"paper, ink, ink_light, black, tint measured, k-means 7, 2026-10-03, from a scan of a US 1896 $2 Silver Certificate on Commons https://commons.wikimedia.org/wiki/Special:FilePath/US-%242-SC-1896-Fr.247.jpg?width=600: #537464 27.8%, #aab4ae 19.9%, #858380 16.2%, #e3e8e2 10.6%, #385447 9.5%, #6e9984 9.5%, #0b0b08 6.4%; a $5 1896 certificate gave #7f8f84 21.3%, #637a6c 19.4%, #4a6556 16.8%, #d9ded3 13.6%, #020000 6.2%. This is a design to study, not to copy: invent the denomination, the institution and the vignette. accent #a8322d is proposed (a typical seal red, not measured). The pdoom treatise banknote plate used ink #0a0a0b on bone #eee9df with orange #ff4d12 (local TREATMENT.md)"}
type: {"display":{"family":"Cormorant Garamond","free_alternative":"Cormorant Garamond / Playfair Display / Pinyon Script","weights":[500,700],"case":"upper for denominations, small caps for text","tracking":0.06,"note":"Cormorant Garamond wght 300 to 700; Playfair Display wght 400 to 900 (high contrast, closest to engraved Didone numerals); Pinyon Script (400 only) for the signature line"},"body":{"family":"IBM Plex Mono","free_alternative":"IBM Plex Mono / Share Tech Mono","weights":[400,500],"case":"upper","tracking":0.12,"note":"IBM Plex Mono is static weights 100 to 700; Share Tech Mono is 400 only"},"rules":["denomination numerals large, in the corners, often inside rosettes","a serial number in a fixed mono, bright against the tint","title lettering in engraved capitals; add microprint as a line of tiny repeated text"]}
grid: {"columns":12,"baseline_px":8,"margins":"a guilloche border frames the note; 5-6% border band","rules":["symmetry: left and right corners mirror (numerals) and a centred portrait/oval","rosettes at corners and centre","frame lines are guilloche bands, not rules"]}
shape: {"radius":"rosettes are circles; frames are rounded-rectangle bands","stroke":"hairline 0.3-0.8 px per line, many lines (30-120) overlapped","shadow":"none","imagery":"portrait in engraved stipple/hatching, architectural vignette, allegory"}
texture: "fine line patterns, thick raised intaglio ink on the portrait, microprint, a smooth rainbow tint under everything; no soft shading"
motion: {"language":"mechanical, geometrically exact","timing_ms":[400,800,1600,3200],"eases":{"enter":"power2.inOut","move":"sine.inOut","exit":"power2.in"},"entrances":["the rosette is drawn by a rolling-circle point, the parameter t advancing while the line lays down","bands unspool along their length","hue of the rainbow tint slides slowly under fixed lines"],"camera":"slow push on a rosette so the interference pattern (moire) builds; macro move to reveal microprint","signature":"a curve drawn by a rolling-circle machine: the viewer watches a hypotrochoid being traced, not a finished pattern appearing"}
space: {"2d":"native (SVG paths)","3d":"possible: a note as a physical sheet with raised intaglio ink (bump), the guilloche as a thin layer above a rainbow tint; macro lens, raking light"}
good_for: ["money, trust, finance, certificates, authenticity, anti-counterfeit and verification stories", "formal documents, diplomas, share certificates, seals", "ornamental geometry as a motion device (the machine draws it)"]
not_for: ["casual, playful, startup consumer", "photography-led stories"]
blends_with: ["engraving-etching", "blueprint-technical-drawing", "cyanotype"]
clashes_with: ["risograph-print", "gummy-inflatable-and-plastic-toy-3d"]
cheap_tells: ["an unconstructed 'swirl' PNG instead of a real hypotrochoid/epitrochoid family, with lines that do not close or mesh", "a single line rather than 30-120 overlapped, phase-shifted lines", "line widths above 1 px at 1920 (it should read as fine at normal size and as moire at the edges)", "flat grey/green fill with no rainbow tint", "a $ and a famous portrait lifted from a real note (do not use real currency designs)", "glow and neon on the rosette"]
verified: {"sources_fetched":4,"non_wikipedia":1,"colours":"partial","colour_images":["https://commons.wikimedia.org/wiki/Special:FilePath/US-%242-SC-1896-Fr.247.jpg?width=600","https://commons.wikimedia.org/wiki/Special:FilePath/US-%245-SC-1896-Fr.270.jpg?width=600"],"grid":"proposed","timings":"proposed","recipes":"aligned","edited":"2026-10-03"}
sources: ["https://en.wikipedia.org/wiki/Guilloch%C3%A9", "https://en.wikipedia.org/wiki/Hypotrochoid", "https://worldbanknotes.eu/collector-guide/authentication/banknote-security-features/", "https://commons.wikimedia.org/wiki/Special:FilePath/US-%242-SC-1896-Fr.247.jpg"]
tags: ["print", "guilloche", "banknote", "security-print", "intaglio", "microprint", "rainbow-print", "geometry", "ornament"]
---
## What it is
Guilloche is a precise, intricate, repetitive pattern mechanically engraved into a material. Engine-turning machines arrived in the 1500s-1600s for soft materials and spread to gold and silver by the 18th century; the rose engine lathe and the straight-line engine are the main machines. On banknotes and certificates the patterns are hypotrochoids and epitrochoids, the same curves a Spirograph draws, which are hard to forge because each line depends on a precise mechanical relationship. Around them sit other security features: intaglio (an engraving process producing sharp images and ink in thick relief, with latent images visible at a shallow angle), microprinting (text too small to read without magnification), fine-line patterns that disappear when copied, fluorescent dyes, optically variable ink, and rainbow printing (prismatic blends of several background colours that copy poorly). The look is dense geometry, thick and thin lines, formal engraved lettering and a smooth tint underneath.

## The rules that make it this and not something else
- **A rosette is a family of curves, not one.** A guilloche band is 30-120 curves from one generator with a small phase shift or parameter step, so they interleave to form the woven look. One line is a Spirograph doodle.
- **The mathematics is exact.**
  - Hypotrochoid, circle r rolling inside fixed circle R, point at distance d from the rolling centre: `x(t) = (R - r) cos t + d cos(((R - r)/r) t)`, `y(t) = (R - r) sin t - d sin(((R - r)/r) t)`. It closes after t reaches `2*pi*lcm(r, R)/R`. With d = r you get a hypocycloid with cusps; R = 2r gives an ellipse.
  - Epitrochoid (rolling on the outside): `x(t) = (R + r) cos t - d cos(((R + r)/r) t)`, `y(t) = (R + r) sin t - d sin(((R + r)/r) t)`. It closes when R/r is rational: with R/r = p/q in lowest terms it completes after t reaches `2*pi*p`. R = r gives a limacon; d = r an epicycloid.
  - For rosettes use integer R and r (for example R = 120, r = 47 or R = 96, r = 40 and d between 0.4 r and 1.5 r); the lobes of a hypotrochoid number `R / gcd(R, r)` (follows from the closure condition above).
  - A band is the sum of a path and a sinusoidal wave: the wave frequency sets how many interleaved lobes (a standard construction; implementation proposed).
- **Interference is the point.** Overlapping 30-120 thin lines at slightly different phases produce moire; this is the visual signature.
- **Intaglio relief and tactile ink.** Printed ink sits thick on the paper; a portrait is stipple and hatching (see engraving-etching), shown with a slightly raised highlight.
- **Rainbow printing.** A smooth multi-colour tint underneath, where one background colour blends into the next across the sheet. Do not use one flat fill.
- **Microprint.** A line of text 3-5 px tall repeated along a band; it reads as a line from afar and as words under a push-in.
- **Symmetry and framing.** Rosettes at corners, denomination numerals in the corners, a central oval; borders are guilloche bands.
- **Never copy real notes.** Make an invented denomination and an invented institution.

## Tokens decoded
- Paper `#e3e8e2`, ink green `#385447`, lighter ink `#6e9984`, black `#0b0b08`, tint `#aab4ae` (measured from a US 1896 silver certificate scan); accent red `#a8322d` proposed. Rainbow tint (proposed stops): 3-4 stops along the sheet, for example `#cfd9c4 -> #e6d9b5 -> #e0c4c4 -> #c4d0e0` at 40% opacity under the lines.
- Line widths: 0.4-0.8 px (at 1920 wide, with `shape-rendering: geometricPrecision`); 60 curves per band; stagger phase `2*pi/60`.
- Type: Cormorant Garamond 700 or Playfair Display 700 numerals; Pinyon Script for a signature; IBM Plex Mono 400-500 serial `AB 1234567 C` with 0.12em tracking; microprint font size 3.5 px, letter-spacing 0.02em.
- The pdoom treatise film's banknote plate (ink on bone with the orange signal) is a studied reading: a guilloche engraved moon, banknote lettering for the lyric.

## Motion and camera
2D (SVG path from the formulas, GSAP):
- Draw a rosette by animating `t` in a rolling-circle function: `const obj={t:0}; tl.to(obj,{t:T, duration:2.4, ease:'power2.inOut', onUpdate:()=>path.setAttribute('d', buildPath(obj.t))}, 0)` where `buildPath` samples the formula at 800 points for each of N curves. With seek-safe determinism the update is a function of `obj.t`, which GSAP drives from the timeline.
- Bands: `strokeDashoffset` to 0 over 1600 ms, `sine.inOut`, 40 ms stagger per curve so the curves weave in.
- Moire: rotate one layer of curves by 0.5-2 degrees over 3200 ms (`sine.inOut`) so the interference pattern drifts; keep within 2 degrees.
- Rainbow tint slide: `backgroundPositionX` over 6000 ms `none` ease is acceptable here (declare it intentional); otherwise `sine.inOut` back and forth.
- Camera: a slow push of 4-8 percent into the rosette and a macro move over microprint at the end (2.4 s, `power3.inOut`).

3D reading (Rasan3D): the note is an object; the guilloche is generated in `build` from the formula into a canvas texture (deterministic: no clock, no random), and the same canvas drives a bump map so the ink reads as raised intaglio under a raking key.
```js
Rasan3D.stage({ id, canvas, timeline: tl, duration: 6,
  background: "#2a2f2c", environment: { preset: "soft", intensity: 0.25 }, toneMapping: "neutral",
  post: { grain: 0.015 },
  camera: { pos: [[0, [0, 0.19, 0.14]], [3.2, [-0.038, 0.034, 0.03], "power3.inOut"]], target: [[0, [0, 0, 0]], [3.2, [-0.038, 0, -0.004], "power3.inOut"]], lens: [[0, 100]], fstop: [[0, 5.6], [3.2, 2.8]], focus: [[0, "target"]] },   // whole note to a macro of the left rosette
  async build(k) {
    const T = k.THREE, W = 2048, H = 864, cv = document.createElement("canvas"), bu = document.createElement("canvas");
    cv.width = bu.width = W; cv.height = bu.height = H;
    const c = cv.getContext("2d"), b = bu.getContext("2d");
    c.fillStyle = "#e3e8e2"; c.fillRect(0, 0, W, H); b.fillStyle = "#000"; b.fillRect(0, 0, W, H);
    const gcd = (a, z) => z ? gcd(z, a % z) : a;
    const rosette = (cx, cy, R, r, d0, n, scale, col) => {                       // a family of n hypotrochoids, d stepped, rotated: the interleaved look
      const T2 = 2 * Math.PI * r / gcd(R, r);
      for (let m = 0; m < n; m++) {
        const d = d0 + m * 0.5, rot = m * (2 * Math.PI / n);
        for (const [ctx, st, lw] of [[c, col, 0.8], [b, "#fff", 1.4]]) {
          ctx.strokeStyle = st; ctx.lineWidth = lw; ctx.beginPath();
          for (let i = 0; i <= 900; i++) { const t = T2 * i / 900;
            const x = (R - r) * Math.cos(t) + d * Math.cos((R - r) / r * t), y = (R - r) * Math.sin(t) - d * Math.sin((R - r) / r * t);
            const X = cx + scale * (x * Math.cos(rot) - y * Math.sin(rot)), Y = cy + scale * (x * Math.sin(rot) + y * Math.cos(rot));
            i ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y); }
          ctx.stroke(); }
      } };
    rosette(300, 432, 96, 40, 30, 60, 1.2, "#385447"); rosette(1748, 432, 96, 40, 30, 60, 1.2, "#385447");   // R=96, r=40, d from 30 up: 12 lobes (96/gcd(96,40)=12)
    const map = new T.CanvasTexture(cv), bump = new T.CanvasTexture(bu); map.colorSpace = T.SRGBColorSpace; map.anisotropy = 8;
    k.rig("window", { key: "#fff4e4", dir: [-1, 0.25, 0.3], shadows: true, shadowSoftness: 3 });          // raking: shows the relief
    const note = new T.Mesh(new T.PlaneGeometry(0.156, 0.066), k.material("paper", { color: "#ffffff", map, bumpMap: bump, bumpScale: 1.5 }));
    note.rotation.x = -Math.PI / 2; note.receiveShadow = true; k.scene.add(note);
    return { note };
  } });
```
The note is 0.156 x 0.066 m (a banknote-like size, proposed). Microprint: draw a text line at 7 px in the canvas (it reads as a line from afar, as letters in the macro). An optically variable patch: a thin `k.material("chrome", { color: "#a8c8b0" })` strip. Do not bloom the OVI except one frame under the 1.15 threshold. Render-graph variant (a `k.pass` evaluating trochoid distance per pixel) is expensive; prefer the canvas texture, or `k.tube` for a physically raised thread.

## How to instruct a model to build it
Paste-ready (HyperFrames HTML/CSS/GSAP):

```html
<svg id="rosette" viewBox="-300 -300 600 600" style="width:900px;height:900px">
  <g id="curves" fill="none" stroke="#1d3b2f" stroke-width="0.5"></g>
</svg>
<script>
function hypo(R,r,d,n=900){ const T=2*Math.PI*r/gcd(R,r); const pts=[];
  for(let i=0;i<=n;i++){ const t=T*i/n; pts.push([ (R-r)*Math.cos(t)+d*Math.cos((R-r)/r*t), (R-r)*Math.sin(t)-d*Math.sin((R-r)/r*t) ]); } return pts; }
// 60 curves: loop k=0..59 with d = 30 + k*0.4 and rotate(k*6)
</script>
```
Note: the full closure for a hypotrochoid is `t` from 0 to `2*pi*r/gcd(R,r)` in the standard form with integer radii (the Wikipedia statement `2*pi*lcm(r,R)/R` is the same). Build the path, then stroke it at 0.5 px with an overall multiply of two inks. GSAP: draw-on with `strokeDashoffset` and 40 ms stagger per curve. Add microprint as `<textPath>` along a band at 3.5 px.

Claude vs GPT: models love a hand-drawn swirl; require the formulas and a count of 40-80 curves and insist the model print the generator parameters (R, r, d) in a comment so the critic can check them.

## Blending notes
Carries: the mathematical rosette, thin lines, tint, formal numerals. Blend with engraving-etching (shared intaglio family; the portrait) and newspaper-broadsheet (authority) or museum-label-and-specimen (the certificate register). Breaks: any thick stroke, glow, rounded friendly type, gradient fills that are not a rainbow tint.

## Sources
- https://en.wikipedia.org/wiki/Guilloch%C3%A9 — precise, repetitive pattern mechanically engraved; engine turning from the 1500s-1600s on soft materials, gold and silver by the 18th century; rose engine lathe, straight-line engine; used on banknotes and passports following spirograph-like mathematical designs (fetched).
- https://en.wikipedia.org/wiki/Hypotrochoid — rolling-circle definition, hypocycloid when d = r, ellipse when R = 2r, parameter range 0 to 2 pi lcm(r,R)/R (fetched; the explicit parametric equations in this entry are the standard form and are not restated by the fetched summary).
- https://worldbanknotes.eu/collector-guide/authentication/banknote-security-features/ — intaglio is ink from engraved recesses under high pressure giving raised relief; microprint is tiny legible text; guilloche shows sharp intersections and regular spacing, counterfeits show merged lines (fetched).
- https://commons.wikimedia.org/wiki/Special:FilePath/US-%242-SC-1896-Fr.247.jpg — US 1896 silver certificate scan, sampled for colour with the $5 (image fetched).
- Carried from the earlier draft, not re-fetched: Epitrochoid, Security printing and Intaglio Wikipedia pages (rainbow printing, optically variable ink, fluorescent dyes).
