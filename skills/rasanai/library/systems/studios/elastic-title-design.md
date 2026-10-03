---
id: "elastic-title-design"
name: "Elastic (prestige-TV main titles: built worlds, double exposure, mechanical craft)"
kind: "studio"
era: "2008 to present, Santa Monica / Los Angeles (now trading under MakeMake per the elastic.tv redirect)"
origin: ["Angus Wall", "Patrick Clair", "Andy Hall", "Melissa Eccles", "Hameed Shaukat", "Raoul Marks (True Detective)"]
palette: {"roles":{"canvas":"#13161b","got_dark":"#2e170e","got_wood":"#64341f","got_leather":"#9d6d3f","got_brass":"#ccb16b","got_parchment":"#e7e8a8","got_sun":"#f1f8e5","td_rust":"#72392d","td_ink":"#18181d","ww_grey":"#909f96","ww_light":"#dfe4e1"},"logic":"each title gets one material world and a palette from it: warm wood, brass, parchment and a hot central sun (Game of Thrones), near-black with a rust accent (True Detective), a stark pale mechanical grey (Westworld). Colour is a consequence of the built material","evidence":"measured from the Art of the Title thumbnails (urls in verified.colour_images), k-means 6, 2026-10-03: GoT thumbnail clusters #2e170e 29%, #f1f8e5 18%, #64341f 18%, #e7e8a8 13%, #ccb16b 12%, #9d6d3f 10%; True Detective #13161b 42%, #18181d 39%, #72392d 2%; Westworld #a8b5ad 24%, #909f96 22%, #dfe4e1 5%. One frame per title, small JPEGs, so treat as a single-frame reading, not the film's whole palette."}
type: {"display":{"family":"per-title, usually small credits in a serif or restrained sans; the images carry the title","free_alternative":"Cinzel / Cormorant Garamond","weights":[400,600],"case":"upper","tracking":0.08,"note":"Cinzel is variable wght 400-900 (engraved Roman caps, closest to GoT-like credits); Cormorant Garamond for a quieter serif. Exact credit faces were not verified."},"body":{"family":"none","free_alternative":"Inter Tight","weights":[400],"case":"upper","tracking":0.08},"rules":["type is secondary to the built world","credits sit in negative space, no motion graphics type effects","type enters and leaves with the camera, not on its own"]}
grid: {"columns":"none; cinematic frame, centred or rule-of-thirds composition","baseline_px":0,"margins":"credits bottom-left or centre, 7 to 9 percent safe margin","rules":["symmetric and balanced compositions in mechanical work (Westworld: circles, squares, symmetry)","a clear single hero object per shot"]}
shape: {"radius":0,"stroke":"none","shadow":"physically lit","imagery":"rendered mechanical objects (astrolabe, map sphere, skeletal horse), double-exposed figures and landscape"}
texture: "dirt and marks, optical flares, film artefacts (True Detective); macro material detail wood, metal, leather (GoT)"
motion: {"language":"slow, continuous, camera-driven; music-structured","timing_ms":[600,1200,2400,4000],"eases":{"enter":"power2.out","move":"sine.inOut","exit":"power2.in"},"entrances":["camera glides through a built set","double exposure dissolve between figure and landscape","mechanical assembly in time to the music"],"camera":"slow gliding camera, macro to wide, often a single continuous move through a world","signature":"a title that works as an orientation tool or thesis for the show, structured to the theme music's build"}
space: {"2d":"double-exposure compositing is 2D-native","3d":"native: sphere maps, mechanical rigs, macro, lit materials"}
good_for: ["series and film main titles", "worldbuilding and fantasy", "dark prestige drama", "brand origin stories where objects are built"]
not_for: ["quick social overlays", "flat infographics"]
blends_with: ["kyle-cooper-imaginary-forces", "territory-studio-fui", "manvsmachine", "engraving-etching"]
clashes_with: []
cheap_tells: ["a pretty dark gradient with floating particles instead of a built object", "a map that is a flat texture with no sphere or lighting logic", "double exposure done as an opacity blend of two clips with no relationship between figure and landscape", "orbiting camera at constant speed", "lens flare overlay stock"]
verified: {"sources_fetched": 4, "non_wikipedia": 4, "colours": "measured", "colour_images": ["https://www.artofthetitle.com/assets/sm/upload/cb/2i/6m/47/game_of_thrones_t.jpg", "https://www.artofthetitle.com/assets/sm/upload/hd/cr/sh/co/td_t.jpg", "https://www.artofthetitle.com/assets/sm/upload/uu/l9/nt/3h/ww_t.jpg"], "grid": "proposed", "timings": "proposed", "recipes": "aligned", "edited": "2026-10-03"}
sources: ["https://www.artofthetitle.com/title/true-detective/", "https://www.artofthetitle.com/title/game-of-thrones/", "https://www.artofthetitle.com/title/westworld/", "https://blog.pond5.com/30891-the-game-changing-title-work-of-elastic/"]
---
## What it is
Elastic is a Los Angeles-area collective founded in 2008 (per a search result summary; the studio site elastic.tv now redirects to makemake.com, so naming and ownership are unverified beyond that) led, per the Pond5/RocketStock profile, by Angus Wall, Patrick Clair, Andy Hall and Melissa Eccles. Its main titles for Game of Thrones (2011, Emmy), True Detective (2014), Westworld (2016) and others are the template for the "prestige TV title": a short film that explains the show's world with one coherent made object or technique.

## The rules that make it this and not something else
- Treat the title as a physical object. GoT: Wall says the world had to exist on the inside of a sphere so the camera could move anywhere without revealing an edge, lit by a central sun inside an armillary sphere; materials are wood, metal, leather and fabric, so it looks like human hands could have made it (Art of the Title; Wikipedia).
- A title with function. GoT works as a legend "the way the map at the beginning of a fantasy book orients you"; it varies per episode with the locations used, while King's Landing, Winterfell, the Wall and Daenerys's location always appear (Wikipedia).
- One technique, pursued to the end. True Detective: double exposures where human figures are windows into partial landscapes, "a graphic way of doing what the show does in the drama: reveal character through location" (Clair). Built from 3D-projected scenes (truck stops, refineries) with landscape photography projected over low-poly geometry; footage digitally slowed to extremes; light and dark dirt, flares; structure "from lightness into darkness, and then burn the whole thing down" to "Far From Any Road" by The Handsome Family. Influence cited: photographer Richard Misrach.
- Design as simple geometry. Westworld: "circles and squares and symmetry and balance"; robotic assembly of a skeletal horse; skeletal hands on a real player piano matched to video of Ramin Djawadi's team; modelled in ZBrush, prepped in Maya, composed in Cinema 4D, rendered with Octane; Chris Cunningham cited as influence.
- Music first. Djawadi wrote the GoT theme after seeing the sequence (about three days, per Wikipedia); Clair stresses the closeness of music pacing and title story.
- Scale and time: GoT roughly 20 to 25 people over five to six months (Art of the Title); about three months per variation (Wikipedia).

## Tokens decoded
- Hexes as measured in the palette evidence (single thumbnail frames): GoT-like world #2e170e, #64341f, #9d6d3f, #ccb16b, parchment #e7e8a8, sun #f1f8e5; True Detective-like #13161b with a rust #72392d accent (the written palette also mentions pale yellows, greens and dark blues, which this frame did not show); Westworld-like #909f96 and #dfe4e1.
- Credits: Cinzel 400 or Cormorant Garamond 500, 3 to 3.5 percent of short side, tracking 0.08em, uppercase, 7 to 9 percent margin, 400 ms fade-and-hold on `power2.out`.
- Materials: wood, brass, leather, bone as textures; roughness 0.4 to 0.7, no chrome.

## Motion and camera
Camera and timing values below are proposed; the sources give process, not numbers.

2D (HyperFrames, craft.md vocabulary), double exposure:
- Two layers: the figure's silhouette as a mask (`mask-image` or a pre-cut alpha clip), the landscape inside it. True Detective slowed footage to extremes and used shallow-focus plates; do the same by playing the landscape clip at 25 to 40 percent speed.
- Landscape inside the mask pushes 2 to 4 percent over 6 to 10 s on `sine.inOut`; the silhouette layer pushes 1 percent so the two slide against each other (parallax factor d 1.0 vs 1.5).
- Dust, light leaks and flares: seeded overlays, `mix-blend-mode: screen`, 20 to 35 percent opacity, per-frame grain 4 percent. Dissolves between portraits 1.2 to 1.6 s `sine.inOut`, never a fast cross-fade.
- Grade: lift blacks 3 to 5 percent toward #13161b, saturation 0.8, one rust highlight. Structure: lightness to darkness over the track, per Clair.
3D (Rasan3D, 3d.md sections 3, 5, 12, 18), the world inside a sphere:
- Build: a `SphereGeometry(20, 96, 64)` with `side: BackSide` (via `k.THREE`) textured with a painted map (`k.image(url)`), `k.material("matte")` for wood and `brushed-metal` tinted `#ccb16b` for brass rings, one `PointLight` at the centre with a warm `#f1f8e5` sun (a small `k.material("emissive", { color: "#f1f8e5" })` sphere at intensity 3 to bloom), `environment: "none"`, `fog: { color: "#2e170e", near: 8, far: 40 }`, `post: { bloom: { strength: 0.5, threshold: 1.15 }, grain: 0.03, vignette: 0.3 }`.
- Camera keys: `lens: [[0, 28], [6, 85, "power2.inOut"]]` (travel then macro), `pos` along a path inside the sphere with `sine.inOut`, `target` leading the position by about 1.5 s, `fstop: 2.8` with `focus: [[0, "target"]]` for a real depth-of-field rack from a foreground ring to a distant building. Never an orbit at constant speed: if you use `k.orbit`, set `ease: "sine.inOut"`.
- Westworld-like assembly: primitives in `pose`, each part flies in with `k.prog(t, a, a + 0.8, "expo.out")` on a beat from the music, centre-framed, 50 mm, `k.rig("top-soft")`, `ceramic` or `brushed-metal` in #909f96 on a #dfe4e1 ground; symmetric about x = 0.
- Union of 2D and 3D: keep credits in the 2D layer (`#r3-<frame>-ui`).

## How to instruct a model to build it
"Elastic prestige-title language. First choose one built world or one technique for the whole title and write its rule in one sentence (for example: the map lives on the inside of a sphere lit from its centre). Materials are real: wood, brass, leather or bone, roughness 0.4 to 0.7, no chrome. The camera glides continuously, one long move per location on sine.inOut; never a constant-speed orbit. Compose symmetrically with a single hero object per shot. Structure the piece to the music's build: lightness to darkness, or order to collapse. Credits small, uppercase, in negative space. For double exposure, use the figure's silhouette as a mask for a slowed landscape clip and relate the landscape to the character." Claude plans camera moves well but under-lights: require an explicit key, fill and rim. GPT variants often produce flat 2D parallax maps: demand the sphere geometry. (Carried from the earlier pass, not re-tested.)

## Blending notes
Carries: one made world, music-structured arcs, slow camera, material-derived palette. Mixes with `territory-studio-fui` (the fictional interface layer), `manvsmachine` (product-CGI polish) and `engraving-etching` (map and credit art). Breaks against comedic or bouncy language and against saturated brand colour; a brand accent works only as the one hot light source (the sun).

## Sources
- https://www.artofthetitle.com/title/true-detective/ — Clair: double exposure, figures as windows onto landscapes, Misrach, 3D-projected low-poly scenes, slowed footage, "Far From Any Road" (fetched).
- https://www.artofthetitle.com/title/game-of-thrones/ — Wall: world on the inside of a sphere, lit by a central sun, shot as if with a motion-controlled camera, not a "magic camera" (fetched).
- https://www.artofthetitle.com/title/westworld/ — Clair: "circles and squares and symmetry and balance", ZBrush, Maya, Cinema 4D, Octane, After Effects (fetched).
- https://blog.pond5.com/30891-the-game-changing-title-work-of-elastic/ — leadership: Clair, Eccles, Hall, Wall; Wall's Se7en edit (fetched).
- Colour images (measured): the three Art of the Title thumbnails listed in `verified.colour_images`.
- Unverified: Elastic's founding year and current trade name (elastic.tv redirects to makemake.com).
