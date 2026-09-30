# Taxonomy schema

The motion-design taxonomy Rasa Director uses to put every creative decision in proper terms. A motion graphic is never one style: it is a **stack of design decisions**, one per dimension. Each dimension is one JSON file in `taxonomy/dimensions/<id>.json`; `node scripts/taxonomy.mjs validate` checks every file against this schema.

## Dimension file

```json
{
  "id": "ui-treatment",
  "name": "UI treatment",
  "group": "subject",
  "controls": "How the product interface itself is represented inside the motion graphic.",
  "question": "How should the product's interface appear on screen?",
  "pick": { "min": 0, "max": 2 },
  "notes": "Overlaps and terminology caveats for the whole dimension (industry usage varies, which terms are informal).",
  "families": [{ "id": "fidelity", "name": "Fidelity" }],
  "facets": [
    { "id": "border", "name": "Border treatment", "options": [ { "id": "hairline", "term": "Hairline borders", "what": "...", "prompt": "..." } ] }
  ],
  "options": [ { "...option..." } ]
}
```

- `group`: one of `format`, `subject`, `look`, `motion`, `story`.
- `question`: the one question the console asks for this dimension (plain words).
- `pick`: how many options a direction may hold (`max` 1 for exclusive dimensions such as pacing).
- `families`: optional sub-grouping shown as headings; every option then has `family`.
- `facets`: optional secondary attributes of the same dimension (e.g. UI border treatment, corner radius, density). Facet options use the short option form (`id`, `term`, `what`, `prompt`, optional `aka`).

## Option

```json
{
  "id": "simplified-ui",
  "term": "Simplified UI",
  "aka": ["reduced UI"],
  "family": "fidelity",
  "what": "The real interface with non-essential detail removed.",
  "looks": "Real layout and hierarchy kept; secondary controls, dense tables and placeholder copy stripped; generous spacing.",
  "motion": "Clean UI transitions: panels slide and resize, cursor-led focus, content swaps inside stable frames.",
  "use": "SaaS launch films, feature reveals, landing-page heroes.",
  "conveys": "Clarity and confidence; the product feels easy.",
  "vs": "Abstracted UI keeps only the one control that matters; simplified UI keeps the whole screen, just cleaner.",
  "search": ["simplified UI animation", "clean SaaS UI motion"],
  "refs": ["Linear launch films", "Stripe product pages"],
  "prompt": "Represent the product UI as a simplified version of the real interface: keep its true layout, hierarchy and brand components; remove secondary controls, dense data and placeholder text; enlarge the elements that carry the story."
}
```

Required: `id` (kebab-case, unique in its dimension), `term` (the proper industry term, Title Case), `what` (one sentence definition), `prompt` (precise, imperative instruction a designer or a model can execute: concrete visual/motion properties, not adjectives alone).

Recommended for every main option: `looks`, `motion`, `use`, `conveys`, `vs` (the term it is most often confused with and the difference), `search` (2-4 reference search phrases). `refs` only when certain (well-known, verifiable products, studios, films, campaigns); omit rather than guess.

Dimension-specific extras (optional):
- motion-language options: `contract` with `enter`, `exit`, `move` (GSAP ease names), `scale_ms` (5 ascending durations), `stagger_ms`, `hold_ms`, `banned` (from: fade-up-slide, fade-slide, bounce, overshoot, scale-pop, blur-in, linear-entrance, opacity-only-entrance).
- transitions options: `feel` (array from: professional, playful, cinematic, experimental, technical, luxurious, social).
- color options: `palette` (array of 3-6 hex values) when the option is a concrete scheme.

## Writing standard

- Use the terms working motion designers and art directors use; when a term is informal or usage varies, say so in `vs` or the dimension `notes`.
- `prompt` must be specific enough to change the output: name shapes, weights, radii, easing behaviour, durations, densities, materials. Never "make it look modern".
- British or American spelling consistently per file (American preferred: color, gray).
- No marketing voice. Short, dense sentences.
