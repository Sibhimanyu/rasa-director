---
id: "cuban-ospaal-poster"
name: "Cuban revolutionary poster: OSPAAAL, ICAIC and Tricontinental"
kind: "movement"
era: "1960s-1980s, Havana"
origin: ["Alfredo Rostgaard", "Elena Serrano", "Olivio Martinez", "Eduardo Munoz Bachs", "Raul Martinez", "Felix Beltran", "OSPAAAL (founded 3 Jan 1966)", "ICAIC film institute"]
palette: {"roles":{"paper":"#f2ead6","black":"#111111","red":"#d9262b","orange":"#f08a24","blue":"#1c4fa0","green":"#2e8f4e","yellow":"#f6c928","magenta":"#c4237f"},"logic":"few flat silkscreen inks per sheet (3-5) overprinting to make new colours, strong complementary pairs (red/green, blue/orange), black as a graphic shape. Hex values approximate and unverified."}
type: {"display":{"family":"Hand-drawn and cut-out letters, geometric display faces, stencil-like forms, occasional Futura-type sans","free_alternative":"Bowlby One, Rubik Mono One, Alfa Slab One, Jost (all OFL on Google Fonts)","weights":[700,900],"case":"upper","tracking":0},"body":{"family":"Neutral grotesque for the credit line","free_alternative":"Archivo or Inter Tight (OFL)","weights":[400,700]},"rules":["lettering integrated into the image, often part of the drawing","text in Spanish, English, French and Arabic for the OSPAAAL series","one short slogan, never a paragraph"]}
grid: {"columns":"none; image first","baseline_px":null,"margins":"minimal; full bleed with credit strip at the foot","rules":["one iconic image occupying 70-90% of the sheet","vertical poster format, folded into magazine for OSPAAAL","symmetry or radial composition for emblem-like images"]}
shape: {"radius":0,"stroke":"none or thick brush line","shadow":"none; overprint and flat colour","imagery":"machete, fist, dollar sign, stylised flag, guerrilla portrait, dove, cut-and-reassembled photograph, op-art rings"}
texture: "silkscreen ink with slight misregistration, paper grain, halftone, torn paper edges in origami-style photo work"
motion: {"language":"emblematic, punchy, witty","timing_ms":[200,400,800],"eases":{"enter":"power4.out","move":"power2.inOut","exit":"power3.in"},"entrances":["ink layers overprint one at a time","shape morph from one icon to a second (machete to wing)","photograph torn into strips that rearrange"],"camera":"static poster with a single push of 5-8%","signature":"two flat colours overprint to make a third on the beat, and the image resolves into a symbol with a one-word slogan"}
space: {"2d":"native","3d":"flat card in depth with overprint via multiply layers; 85 mm ortho feel; unlit"}
good_for: ["campaigns, causes, solidarity, politics, cinema and culture programmes", "short punchy brand statements", "a single big symbol per scene"]
not_for: ["dense data, SaaS dashboards", "luxury tone"]
blends_with: ["polish-poster-school", "japanese-sixties-graphic-yokoo-poster", "constructivism", "risograph-culture"]
clashes_with: ["scandinavian-modern-design"]
cheap_tells: ["Che-style red/black stencil used decoratively with no message", "adding a star and hammer icons as shorthand", "all colours at once with no overprint logic", "digital gradients and drop shadows", "glorifying imagery used without a context line"]
sources: ["https://en.wikipedia.org/wiki/OSPAAAL", "https://www.bidoun.org/articles/revolution-by-design", "https://cuba50.org/2019/11/13/poster-art-a-visual-chronicle-of-the-revolution/"]
---
## What it is
After the 1959 revolution, Cuban state agencies became prolific poster publishers. OSPAAAL, founded in Havana on 3 January 1966 after the Tricontinental Conference, printed posters in four languages and folded them into the magazine Tricontinental for worldwide distribution; about 326 were made through 2003 (Wikipedia). The ICAIC film institute ran a separate poster department treating the poster as part of the film's artistry (cuba50). The shared look is spare, colourful and witty, mixing pop art, psychedelia, op art, constructivism and collage.

## The rules that make it this and not something else
- One image, one idea, one short slogan.
- Rostgaard called the approach the "anti-ad": using advertising language against itself, a Situationist detournement (Bidoun).
- Humour and irony lighten ideological message; Bidoun contrasts this with drab Soviet posters.
- Production constraint shaped style: silkscreen for short runs of roughly 500 to 2,000 (search snippet, unverified in a fetched page), offset lithography for OSPAAAL international runs (cuba50).
- Ink shortages from the embargo forced inventive colour results (Wikipedia).
- Recurrent iconography: dollar signs, machetes, stylised flags.
- Photographic techniques such as the "Cartel Maqueta" (arranged allegorical objects photographed) and "Origami" (one photo folded or torn across pages) (Bidoun).

## Tokens decoded
- Ground `#f2ead6` paper or a single flat ink; inks `#d9262b`, `#f08a24`, `#1c4fa0`, `#2e8f4e`, `#f6c928`; black `#111111` as a shape.
- Overprint: use `mix-blend-mode: multiply` so red over yellow gives orange, blue over yellow gives green.
- Type: Bowlby One or Alfa Slab One for slogans; Jost for geometric credit lines; all OFL.
- Image scale: the symbol covers 70-90% of the frame height at 1080 p, slogan 120-180 px tall in one line max.
- Credit strip 48 px tall at the foot in the neutral grotesque, uppercase 24 px, tracking 0.08em.

## Motion and camera
2D: each ink arrives as its own layer: background colour (200 ms `power4.out`), second ink (clip-path wipe 300 ms), black key shape last (stamp with `back.out(1.4)`, 250 ms). A symbol-to-symbol morph (two SVG paths via GSAP MorphSVG or manual interpolation) takes 600 ms `power2.inOut`. Photographs torn into 6-9 vertical strips that slide to reassemble over 700 ms staggered 40 ms. Hold the finished poster 1.2 s minimum. Static camera with one 6% scale push over 4 s `sine.inOut`. Cuts are hard.
3D: poster as a flat card hung in a studio, camera 85 mm, slow 8 degree yaw; the ink layers as separate planes 0.02 units apart with multiply blending; no gloss.

## How to instruct a model to build it
"Design a Cuban silkscreen poster sequence. Paper #f2ead6. Maximum four flat inks: #d9262b, #1c4fa0, #f6c928, #111111, overprinted with multiply so mixed colours appear where shapes overlap. One central symbol covering 80% of the frame, built from simple geometric shapes, a one-line slogan in Bowlby One uppercase. Allow 1-2 px misregistration. Animate ink layers arriving one by one (200-300 ms, power4.out), then the black key shape stamps. No gradients, no shadows, no glow." Claude tends to add secondary text and decorative detail; require one slogan. GPT models like to default to red/black Che-style stencil; prescribe the multi-ink palette.

## Blending notes
- Carries: the single emblem, overprint, wit, hard cuts.
- With Polish poster school: strong; both are idea-first.
- With Swiss: use the Swiss grid only for the credit strip.
- Breaks: realistic photography, soft lighting, long text.
Also clashes with (not library entries): glass UI; corporate minimalism.

## Sources
- https://en.wikipedia.org/wiki/OSPAAAL: founding, languages, 326 posters, artists, ink shortages.
- https://www.bidoun.org/articles/revolution-by-design: anti-ad, detournement, Cartel Maqueta, Origami, humour.
- https://cuba50.org/2019/11/13/poster-art-a-visual-chronicle-of-the-revolution/: ICAIC vs OSPAAAL, printing, influences, artist list.
- Unverified: ink hex values, run sizes (search snippet), slogan sizing (RasanAI proposals). retroavangarda.com returned only a loading page, and the Rostgaard Wikipedia page was a 404.
