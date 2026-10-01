#!/usr/bin/env node
// The crew: RasanAI's agents. The Director (the main session) plans who works on a film, hands each member a
// self-contained brief (its role file + a Dispatch context naming every input and output on disk), and accepts
// the work only when its artifact checks out. Roles: agents/*.md. The system: references/crew.md.
//
//   node crew.mjs plan --run <run> --route <route> --subject "<name>" [--mode product|topic] [--url <url>] [--public]
//        [--local "<dir>,<dir>"] [--may-run] [--scenes N] [--length s] [--project videos/<name>] [--lean]
//        -> <run>/crew/plan.json: every phase, who's dispatched in it (role, key, model tier, description)
//   node crew.mjs brief --run <run> --role <role> [--key <k>] [--project <dir>] [--set k=v,...]
//        -> <run>/crew/prompts/<role>[-<key>].md, the whole prompt (dispatch it as "Read <file> and do the job")
//   node crew.mjs check --run <run> --role <role> [--key <k>] [--project <dir>]
//        -> exit 0 accepted · 2 problems (listed) · 1 could not check
//   node crew.mjs status --run <run>          -> every planned dispatch and where it stands (resume after compaction)
//   node crew.mjs pitches --run <run>         -> merges story/pitch-*.json into story/pitches.json (Sure, Bold, Wild)
//   node crew.mjs storyboard --run <run> --project <dir> [--score <score.json>]
//        -> writes the Motion Director's score into the project's STORYBOARD.md as the workflow's visual design
//           (## Video direction, per frame: shot sequence, blueprint, focal, roles, sfx, handoffs, transition_in)
//   node crew.mjs strip (--file <composition.html | video.mp4> | --project <dir>) (--at t1,t2 | --from a --to b --fps n)
//        --out <sheet.png> [--cols 6]
//        -> a labelled contact strip of the motion at those times (+ the frames in <sheet>/), to look at
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync, execFileSync } from "node:child_process";
import { parseArgs, die, readJSON, writeFile, chromeScreenshot, esc, GSAP_PATH, SKILL_DIR } from "./lib/common.mjs";
import { readDesignMd } from "./lib/design-md.mjs";
import { findSkill } from "./lib/hyperframes.mjs";
import { upsertMarked } from "./lib/install.mjs";
import { track } from "./lib/report.mjs";

const args = parseArgs();
const cmd = args._[0];
track(
  { plan: "Planning the crew for this film", strip: "Rendering a motion strip to look at", storyboard: "Writing the motion score into the storyboard" }[cmd],
  { plan: "Crew planned", strip: "Motion strip ready", storyboard: "Score written into the storyboard" }[cmd]
);
const AGENTS = path.join(SKILL_DIR, "agents");
const WS = process.cwd();
// paths are shown relative to the workspace; real paths, so /var and /private/var (or any symlink) agree
const real = (p) => {
  let q = path.resolve(p), tail = [];
  while (!fs.existsSync(q) && path.dirname(q) !== q) { tail.unshift(path.basename(q)); q = path.dirname(q); }
  try { q = fs.realpathSync(q); } catch {}
  return path.join(q, ...tail);
};
const str = (v) => (v == null || v === true ? "" : String(v));
const out = (o, code = 0) => {
  console.log(JSON.stringify(o, null, 2));
  process.exit(code);
};
const rel = (p) => path.relative(real(WS), real(p)) || ".";
const exists = (p) => !!p && fs.existsSync(p);
const readMaybe = (p) => (exists(p) ? fs.readFileSync(p, "utf8") : "");
const jsonMaybe = (p) => {
  try {
    return exists(p) ? readJSON(p) : null;
  } catch {
    return undefined; // present but malformed
  }
};

function runDir() {
  if (!args.run || args.run === true) die("--run <run dir> required");
  const d = path.resolve(String(args.run));
  if (!fs.existsSync(d)) die(`run dir not found: ${d}`);
  return d;
}
const R = (run, ...p) => path.join(run, ...p);

// ---------------------------------------------------------------- roles
// tier: "inherit" = the session's own model (creative and judging work: never downgrade);
//       "fast" = a faster model is fine (gathering), when the harness lets you choose.
const ROLES = {
  "product-researcher": { desk: "research", tier: "fast", desc: (p) => `Researching ${p.subject || "the product"}: features, releases, real numbers` },
  "brand-researcher": { desk: "research", tier: "fast", desc: (p) => `Finding ${p.subject || "the brand"}'s real logo, colours, type and motion` },
  "screens-researcher": { desk: "research", tier: "fast", desc: (p) => `Collecting real screens of ${p.subject || "the product"}` },
  "precedent-researcher": { desk: "research", tier: "inherit", desc: (p) => `Studying ${p.subject || "the brand"}'s past launch films shot by shot` },
  "local-scout": { desk: "research", tier: "fast", desc: (p, k) => `Reading the local project${k ? ` ${k}` : ""} you approved` },
  "research-lead": { desk: "research", tier: "inherit", desc: () => "Merging the research into one truth sheet" },
  "script-writer": { desk: "story", tier: "inherit", desc: (p, k) => `Writing the ${k || ""} script`.replace("  ", " ") },
  "script-editor": { desk: "story", tier: "inherit", desc: () => "Editing the three scripts like a hostile reader" },
  "motion-director": { desk: "motion", tier: "inherit", desc: (p, k) => (k === "seams" ? "Checking every cut and building the signature transition" : "Scoring how the whole film moves") },
  "frame-designer": { desk: "art", tier: "inherit", desc: (p, k) => `Designing key frames ${k || ""}`.trim() },
  "scene-animator": { desk: "animation", tier: "inherit", desc: (p, k) => `Animating scene ${k}` },
  critic: { desk: "review", tier: "inherit", desc: (p, k) => `Reviewing the ${String(k || "film").split("-")[0]} with fresh eyes` },
};

// ---------------------------------------------------------------- plan
const STORY_ROUTES = new Set(["product-launch-video", "faceless-explainer", "pr-to-video", "general-video", "reel", "music-to-video"]);
const SCENE_ROUTES = new Set(["product-launch-video", "faceless-explainer", "pr-to-video", "general-video"]);

function planCrew(p) {
  const d = (role, key = null, extra = {}) => ({ role, key, tier: ROLES[role].tier, background: true, description: ROLES[role].desc(p, key), ...extra });
  const phases = [];
  const lean = !!p.lean;
  const N = p.scenes || null;
  const research = [];
  if (["product-launch-video", "general-video", "motion-graphics"].includes(p.route) && p.mode !== "topic") {
    research.push(d("product-researcher"), d("brand-researcher"), d("screens-researcher"));
    if (p.public && !lean) research.push(d("precedent-researcher"));
  } else if (p.route === "faceless-explainer" || p.mode === "topic") {
    research.push(d("product-researcher", null, { mode: "topic" }));
    if (!lean) research.push(d("precedent-researcher"));
  } else if (p.route === "pr-to-video") {
    research.push(d("product-researcher"));
  } else if (p.subject && ["reel", "music-to-video", "talking-head-recut", "embedded-captions"].includes(p.route) && p.public) {
    research.push(d("brand-researcher"));
  }
  for (const dir of p.local) research.push(d("local-scout", path.basename(dir), { approved_paths: [dir], may_run: !!p.may_run }));
  if (research.length) {
    phases.push({ phase: "research", when: "right after the brief is pushed, while the user reads it", dispatch: research, then: "research-lead once every member above is accepted" });
    phases.push({ phase: "research-lead", when: "after the research desk", dispatch: [d("research-lead")], then: "story.mjs pick on the truth sheet" });
  }
  if (STORY_ROUTES.has(p.route) && !lean) {
    phases.push({ phase: "story", when: "after story.mjs pick", dispatch: ["Sure", "Bold", "Wild"].map((k) => d("script-writer", k)), then: "crew.mjs pitches, story.mjs check, then the editor" });
    phases.push({ phase: "story-edit", when: "after the three pitches pass story.mjs check", dispatch: [d("script-editor")], then: "route its notes back to the writers (one round), then push story" });
  }
  if (SCENE_ROUTES.has(p.route) || p.route === "motion-graphics") {
    phases.push({ phase: "score", when: "after the look is picked and the music is fitted (scenes.json has final durations)", dispatch: [d("motion-director", "score")], then: "crew.mjs check, then the frame designers" });
    const groups = [];
    if (N) {
      const per = lean ? N : Math.max(2, Math.ceil(N / 5));
      for (let i = 1; i <= N; i += per) groups.push(`${i}-${Math.min(N, i + per - 1)}`);
    } else groups.push("1-N");
    phases.push({ phase: "keyframes", when: "after the score is accepted", dispatch: groups.map((g) => d("frame-designer", g)), then: lean ? "push the animatic" : "the frames critic, then push the animatic" });
    if (!lean) phases.push({ phase: "keyframes-review", when: "after every key frame is rendered", dispatch: [d("critic", "frames-1")], then: "fix the high findings (re-dispatch the designer), then push the animatic" });
    const scenes = N ? Array.from({ length: N }, (_, i) => String(i + 1)) : ["<n>"];
    phases.push({ phase: "animate", when: "after the workflow's frame-packets.mjs and video.mjs inject", dispatch: scenes.map((k) => d("scene-animator", k)), then: "assemble, then the seam pass" });
    phases.push({ phase: "seams", when: "after every scene is accepted and the index is assembled", dispatch: [d("motion-director", "seams")], then: lean ? "the film critic" : "the motion critic" });
    const review = lean ? [d("critic", "film-1")] : [d("critic", "motion-1"), d("critic", "grounding-1")];
    phases.push({ phase: "review", when: "after the seam pass (motion, grounding) and the draft render (film)", dispatch: review, then: "route each finding to its scene's animator (2 rounds at most); film critic on the draft" });
    if (!lean) phases.push({ phase: "review-film", when: "after the draft render", dispatch: [d("critic", "film-1")], then: "fix or waive at the Final" });
  }
  return phases;
}

// ---------------------------------------------------------------- ledger
function ledger(run, row) {
  fs.mkdirSync(R(run, "crew"), { recursive: true });
  fs.appendFileSync(R(run, "crew", "ledger.jsonl"), JSON.stringify({ t: new Date().toISOString(), ...row }) + "\n");
}
function readLedger(run) {
  const f = R(run, "crew", "ledger.jsonl");
  if (!exists(f)) return [];
  return fs.readFileSync(f, "utf8").split("\n").filter(Boolean).map((l) => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);
}

// ---------------------------------------------------------------- dispatch contexts
function projectDir(run) {
  if (args.project && args.project !== true) return path.resolve(String(args.project));
  const plan = jsonMaybe(R(run, "crew", "plan.json"));
  if (plan && plan.project) return path.resolve(plan.project);
  const vd = jsonMaybe(R(run, "video-decisions.json"));
  if (vd && vd.project) return path.resolve(vd.project);
  return null;
}
function lookFrame(run) {
  const dec = jsonMaybe(R(run, "decisions.json")) || {};
  const lk = dec.look || {};
  for (const c of [lk.frame, R(run, "preset", "frame.md"), R(run, "look", "frame.md")]) if (c && exists(path.resolve(c))) return path.resolve(c);
  return null;
}
function brief(run) {
  const b = jsonMaybe(R(run, "brief.json")) || {};
  const f = b.fields || b;
  return { length_s: f.length_s, kind: f.kind, aspect: f.aspect, narrated: f.narration !== false, destination: f.destination, subject: f.subject };
}
const scenesOf = (run) => {
  const s = jsonMaybe(R(run, "scenes.json"));
  return s && Array.isArray(s.scenes) ? s.scenes : [];
};

// inputs: [label, path]; a missing input is listed as missing (the member works without it), never silently dropped
function contextFor(run, role, key, plan) {
  const pj = projectDir(run);
  const P = plan || {};
  const ctx = { RUN: rel(run), SKILL_DIR, WORKSPACE: WS, node: process.execPath, role, key, scratch: rel(R(run, "crew", "scratch", key ? `${role}-${key}` : role)) };
  const inputs = [];
  const outputs = [];
  const I = (label, p) => inputs.push([label, p]);
  const O = (p) => outputs.push(p);
  const research = (f) => R(run, "research", f);
  const capture = pj ? path.join(pj, "capture") : null;
  const B = brief(run);
  const dsn = (() => {
    try {
      const r = spawnSync(process.execPath, [path.join(SKILL_DIR, "scripts", "brand.mjs"), "detect"], { encoding: "utf8", env: { ...process.env, RASANAI_QUIET: "1" } });
      const j = JSON.parse(r.stdout || "{}");
      return j.found ? j.source || j.file || null : null;
    } catch {
      return null;
    }
  })();
  switch (role) {
    case "product-researcher":
      Object.assign(ctx, { subject: P.subject, url: P.url || null, kind: B.kind, focus: P.focus || null, mode: P.mode === "topic" || str(args.set).includes("mode=topic") ? "topic" : "product" });
      I("capture", capture);
      O(research("product.md")); O(research("product.claims.json"));
      break;
    case "brand-researcher":
      Object.assign(ctx, { subject: P.subject, url: P.url || null });
      I("capture", capture); I("workspace_design_md", dsn ? path.resolve(dsn) : null); I("local_notes", research("local.md"));
      O(research("brand", "DESIGN.md")); O(research("brand", "assets") + "/"); O(research("brand.md"));
      break;
    case "screens-researcher":
      Object.assign(ctx, { subject: P.subject, url: P.url || null, features: P.features || null });
      I("capture", capture); I("local_screens", research("local", "assets"));
      O(research("screens") + "/"); O(research("screens.json")); O(research("screens.md"));
      break;
    case "precedent-researcher":
      Object.assign(ctx, { subject: P.subject, kind: B.kind, brand_known: !!P.public, length_s: B.length_s });
      O(research("films") + "/"); O(research("precedent.md"));
      break;
    case "local-scout": {
      const entry = ((P.phases || []).flatMap((ph) => ph.dispatch).find((x) => x.role === "local-scout" && x.key === key)) || {};
      const approved = entry.approved_paths || str(args.set).split(",").filter((s) => s.startsWith("path=")).map((s) => s.slice(5));
      Object.assign(ctx, { subject: P.subject, approved_paths: approved, may_run: !!entry.may_run });
      if (!approved.length) die("local-scout needs approved_paths (plan --local, after the user said yes in the console)");
      O(research("local.md")); O(research("local.claims.json")); O(research("local", "assets") + "/");
      break;
    }
    case "research-lead":
      Object.assign(ctx, { subject: P.subject, brief: B });
      for (const f of ["product.md", "product.claims.json", "brand.md", "brand/DESIGN.md", "screens.md", "screens.json", "precedent.md", "local.md", "local.claims.json"]) I(f, research(f));
      I("capture", capture); I("truth_template", R(run, "story", "truth.md")); I("workspace_design_md", dsn ? path.resolve(dsn) : null);
      O(R(run, "story", "truth.md")); O(research("claims.json")); O(research("assets.json")); O(research("BRIEFING.md"));
      break;
    case "script-writer": {
      const picks = jsonMaybe(R(run, "story", "picks.json"));
      const list = picks ? picks.picks || picks.devices || picks : [];
      const dev = Array.isArray(list) ? list.find((x) => String(x.label || x.angle || "").toLowerCase() === String(key).toLowerCase()) : null;
      Object.assign(ctx, { label: key, device: dev || "(see story/picks.json for this label)", brief: B });
      for (const [l, p] of [["truth", R(run, "story", "truth.md")], ["claims", research("claims.json")], ["briefing", research("BRIEFING.md")], ["screens", research("screens.md")], ["precedent", research("precedent.md")], ["picks", R(run, "story", "picks.json")], ["writer's brief", path.join(SKILL_DIR, "references", "script.md")], ["pitch format", path.join(SKILL_DIR, "references", "story.md")]]) I(l, p);
      O(R(run, "story", `pitch-${key}.json`));
      break;
    }
    case "script-editor":
      for (const [l, p] of [["pitches", R(run, "story", "pitches.json")], ["check", R(run, "story", "check.json")], ["truth", R(run, "story", "truth.md")], ["claims", research("claims.json")], ["briefing", research("BRIEFING.md")], ["precedent", research("precedent.md")], ["rubric", path.join(SKILL_DIR, "references", "script.md")], ["story rules", path.join(SKILL_DIR, "references", "story.md")], ["craft", path.join(SKILL_DIR, "references", "craft.md")]]) I(l, p);
      O(R(run, "story", "edit-notes.json"));
      break;
    case "motion-director":
      Object.assign(ctx, { pass: key === "seams" ? "seams" : "score", length_s: B.length_s, aspect: B.aspect });
      for (const [l, p] of [["script", R(run, "story", "chosen.json")], ["scenes", R(run, "scenes.json")], ["frame.md", lookFrame(run)], ["direction", R(run, "direction", "DIRECTION.md")], ["motion.md", R(run, "motion.md")], ["music plan", R(run, "music", "plan.json")], ["screens", research("screens.md")], ["assets", research("assets.json")], ["brand", research("brand.md")], ["precedent", research("precedent.md")], ["craft", path.join(SKILL_DIR, "references", "craft.md")], ["vocabulary", path.join(SKILL_DIR, "references", "vocabulary.md")]]) I(l, p);
      if (key === "seams") {
        if (!pj) die("the seam pass needs --project <videos/name>");
        Object.assign(ctx, { project: rel(pj) });
        I("score", R(run, "motion", "score.json")); I("storyboard", path.join(pj, "STORYBOARD.md"));
        O(R(run, "crew", "seams-report.md")); O(rel(path.join(pj, "compositions", "frames")) + "/ (seam regions only)");
      } else {
        O(R(run, "motion", "score.json")); O(R(run, "motion", "score.md"));
      }
      break;
    case "frame-designer": {
      const [a, b] = String(key || "").split("-").map(Number);
      Object.assign(ctx, { scenes: a && b ? Array.from({ length: b - a + 1 }, (_, i) => a + i) : key, aspect: B.aspect });
      for (const [l, p] of [["score", R(run, "motion", "score.json")], ["score.md", R(run, "motion", "score.md")], ["frame.md", lookFrame(run)], ["direction", R(run, "direction", "DIRECTION.md")], ["scenes", R(run, "scenes.json")], ["screens", research("screens.json")], ["ui kit", research("screens.md")], ["assets", research("assets.json")], ["logo", research("brand", "assets")], ["craft", path.join(SKILL_DIR, "references", "craft.md")]]) I(l, p);
      for (const n of ctx.scenes || []) { O(R(run, "frames", `${n}.html`)); O(R(run, "frames", `${n}.png`)); O(R(run, "frames", `${n}.md`)); }
      break;
    }
    case "scene-animator": {
      if (!pj) die("scene-animator needs --project <videos/name>");
      const n = Number(key);
      const packets = path.join(pj, ".hyperframes", "frame-packets");
      const packet = exists(packets) ? fs.readdirSync(packets).find((f) => new RegExp(`^0*${n}[-_.]`).test(f) && f.endsWith(".md")) : null;
      Object.assign(ctx, { scene: n, project: rel(pj) });
      for (const [l, p] of [["technical role", path.join(packets, "_role.md")], ["frame packet", packet ? path.join(packets, packet) : null], ["DISPATCH.md", path.join(pj, "DISPATCH.md")], ["frame.md", path.join(pj, "frame.md")], ["motion.md", path.join(pj, "motion.md")], ["key frame", path.join(pj, "assets", "keyframes", `${n}.png`)], ["key frame note", R(run, "frames", `${n}.md`)], ["score", R(run, "motion", "score.json")], ["ui kit", research("screens.md")], ["brand motion", research("brand.md")], ["assets", research("assets.json")]]) I(l, p);
      O(`${rel(path.join(pj, "compositions", "frames"))}/${packet ? packet.replace(/\.md$/, ".html") : `${String(n).padStart(2, "0")}-*.html`}`);
      O(R(run, "crew", "animators", `${n}.md`)); O(R(run, "crew", "animators", `${n}-overview.png`)); O(R(run, "crew", "animators", `${n}-move.png`));
      break;
    }
    case "critic": {
      const [lens, round] = String(key || "film-1").split("-");
      Object.assign(ctx, { lens, round: Number(round) || 1 });
      if (pj) ctx.project = rel(pj);
      const common = [["craft", path.join(SKILL_DIR, "references", "craft.md")], ["precedent", research("precedent.md")], ["direction", R(run, "direction", "DIRECTION.md")]];
      const byLens = {
        frames: [["key frames", R(run, "frames")], ["scenes", R(run, "scenes.json")], ["score", R(run, "motion", "score.md")], ["screens", research("screens.json")]],
        motion: [["score", R(run, "motion", "score.json")], ["project", pj], ["motion.md", pj && path.join(pj, "motion.md")]],
        film: [["project", pj], ["renders", pj && path.join(pj, "renders")], ["snapshots", pj && path.join(pj, "snapshots")], ["decisions", R(run, "video-decisions.json")]],
        grounding: [["project", pj], ["claims", research("claims.json")], ["truth", R(run, "story", "truth.md")], ["screens", research("screens.json")]],
      }[lens];
      if (!byLens) die(`unknown critic lens "${lens}" (frames, motion, film, grounding)`);
      for (const [l, p] of [...byLens, ...common]) I(l, p);
      O(R(run, "crew", `critic-${lens}-${Number(round) || 1}.json`));
      break;
    }
    default:
      die(`unknown role "${role}". Roles: ${Object.keys(ROLES).join(", ")}`);
  }
  for (const kv of str(args.set).split(",").filter(Boolean)) {
    const i = kv.indexOf("=");
    if (i > 0 && !kv.startsWith("path=")) ctx[kv.slice(0, i)] = kv.slice(i + 1);
  }
  return { ctx, inputs: inputs.map(([l, p]) => ({ label: l, path: p ? rel(p) : null, exists: exists(p) })), outputs: outputs.map((p) => (path.isAbsolute(p) ? rel(p) : p)) };
}

// the vocabulary rows a scene's score names, plus the animation principles, inlined for the animator
function vocabularyFor(terms) {
  const v = readMaybe(path.join(SKILL_DIR, "references", "vocabulary.md"));
  if (!v) return "";
  const norm = (s) => String(s).toLowerCase().replace(/[^a-z]/g, "");
  // "cut", "cut-in", "push" and "slide" are baselines, not techniques: they'd match half the vocabulary
  const want = [...new Set(terms.map(norm).filter((t) => t.length >= 4 && !["cutin", "push", "slide"].includes(t)))];
  const rows = [];
  for (const line of v.split("\n")) {
    const m = line.match(/^\|\s*([^|]+?)\s*\|/);
    if (!m || /^-+$/.test(m[1].replace(/\s/g, "")) || m[1] === "Term") continue;
    const t = norm(m[1].split("(")[0]);
    if (t.length >= 4 && want.some((w) => t === w || (Math.min(t.length, w.length) >= 5 && (t.startsWith(w) || w.startsWith(t))))) rows.push(line);
  }
  const principles = (v.match(/## 6\. Animation principles[\s\S]*?(?=\n## 7\.)/) || [""])[0].trim();
  return [rows.length ? `### The techniques your score names\n\n| Term | What it is | Recipe |\n|---|---|---|\n${[...new Set(rows)].join("\n")}` : "", principles ? `### ${principles.replace(/^## /, "")}` : ""].filter(Boolean).join("\n\n");
}

// Claude does its best motion work when it's told to show off. Every creative prompt ends on that ask: the last
// thing a member reads, after the inputs, so it isn't lost under them.
const DARES = {
  "motion-director": "Show off. Don't score the safe film you'd make by default: score the one a top studio would put on its reel, with 2 to 4 moments people rewind to see how they were done, landed by choreography and continuity, not by effects. The critics will reject a competent score that nobody would remember.",
  seams: "Show off at the seams. A cut that merely doesn't pop is the minimum. Make the signature transition the best two seconds of the film, and make the continuity seams so clean the viewer only notices them on the second watch.",
  "scene-animator": "Show off. This scene is going on your reel. Your first version will be the safe one (things fade and slide in, the UI appears, the text types): throw that instinct out and build the shot another motion designer would freeze-frame to work out how you did it, inside motion.md and the anti-slop rules. Then look at your strips and ask whether it's reel-worthy. If it's only fine, it isn't done.",
  "frame-designer": "Show off. Each still should be good enough to be the poster for the film. Competent and centred is the default you're here to beat.",
  "script-writer": "Show off. Two other writers are pitching against you. Write the script that wins the room, with at least one moment only motion could tell, not the one that merely passes the checks.",
  critic: "Be the push. Competent is a fail: Claude's unpushed default is clean, tidy and forgettable, and you are the reason it doesn't ship. Score ambition honestly and, wherever the work played it safe, say exactly how it could have shown off.",
};

function promptFor(run, role, key, plan) {
  const { ctx, inputs, outputs } = contextFor(run, role, key, plan);
  const shared = fs.readFileSync(path.join(AGENTS, "_crew.md"), "utf8").trim();
  const roleText = fs.readFileSync(path.join(AGENTS, `${role}.md`), "utf8").trim();
  const checkCmd = `node "${path.join(SKILL_DIR, "scripts", "crew.mjs")}" check --run "${ctx.RUN}" --role ${role}${key ? ` --key ${key}` : ""}${ctx.project ? ` --project "${ctx.project}"` : ""}`;
  const fmtVal = (v) => (typeof v === "object" ? "`" + JSON.stringify(v) + "`" : String(v));
  const lines = [
    "## Dispatch context",
    "",
    "Paths are relative to WORKSPACE (run every command from there). `$RUN` and `$SKILL_DIR` below mean these exact values; shell variables do not carry over between your commands, so write them out.",
    "",
    ...Object.entries(ctx).filter(([, v]) => v != null && v !== "").map(([k, v]) => `- **${k}**: ${fmtVal(v)}`),
    "",
    "**Inputs**",
    "",
    ...inputs.map((i) => `- ${i.label}: ${i.path ? "`" + i.path + "`" : "(none)"}${i.exists ? "" : " (not there: work without it)"}`),
    "",
    "**Your outputs** (write only these)",
    "",
    ...outputs.map((o) => `- \`${o}\``),
    "",
    `**Check** (must exit 0 before you finish): \`${checkCmd}\``,
  ];
  let extra = "";
  if (role === "scene-animator") {
    const score = jsonMaybe(R(run, "motion", "score.json"));
    const n = Number(key);
    if (score && Array.isArray(score.scenes)) {
      const sc = score.scenes.find((s) => Number(s.n) === n);
      const seams = (score.seams || []).filter((s) => Number(s.from) === n || Number(s.to) === n);
      if (sc) extra += `\n\n## Your scene in the score\n\n\`\`\`json\n${JSON.stringify({ scene: sc, seams, spine: score.spine, motif: score.motif, signature: score.signature, video_direction: score.video_direction }, null, 2)}\n\`\`\``;
      const terms = [...(sc ? sc.techniques || [] : []), ...seams.map((s) => s.kind), ...((sc && sc.entrances) || []).map((e) => e.type), sc && sc.camera ? String(sc.camera).replace(/^T\d\s*/, "") : ""].filter(Boolean);
      const vocab = vocabularyFor(terms);
      if (vocab) extra += `\n\n## Technique recipes (from references/vocabulary.md)\n\n${vocab}`;
    }
  }
  if (role === "motion-director" && key !== "seams") {
    const vocab = readMaybe(path.join(SKILL_DIR, "references", "vocabulary.md"));
    if (vocab) extra += "\n\n(Read `references/vocabulary.md` in full: it is the motion vocabulary your score names techniques from.)";
  }
  const dare = DARES[role === "motion-director" && key === "seams" ? "seams" : role];
  if (dare) extra += `\n\n## Before you start\n\n${dare}`;
  return { text: `${shared}\n\n---\n\n${roleText}\n\n---\n\n${lines.join("\n")}${extra}\n`, ctx, inputs, outputs };
}

// ---------------------------------------------------------------- checks
const URL_RE = /https?:\/\/[^\s)>\]"']+/g;
function sections(md, names) {
  const missing = [];
  for (const n of names) if (!new RegExp(`^##\\s+${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "mi").test(md)) missing.push(`missing section "## ${n}"`);
  return missing;
}
function claimsProblems(file, min, label) {
  const p = [];
  const c = jsonMaybe(file);
  if (c === null) return [`${rel(file)} is missing`];
  if (c === undefined) return [`${rel(file)} is not valid JSON`];
  const list = Array.isArray(c) ? c : c.claims || [];
  if (list.length < min) p.push(`${label}: ${list.length} claims, need at least ${min}`);
  const unsourced = list.filter((x) => !x || !String(x.source || "").trim());
  if (unsourced.length) p.push(`${label}: ${unsourced.length} claims without a source (first: ${JSON.stringify((unsourced[0] || {}).claim || unsourced[0]).slice(0, 80)})`);
  const noText = list.filter((x) => x && !String(x.claim || "").trim());
  if (noText.length) p.push(`${label}: ${noText.length} claims with no "claim" text`);
  return p;
}
const ENTRANCES = ["mask-rise", "scale-from-origin", "draw-on", "clip-reveal", "cut-in", "type-on", "count-up", "morph", "stream", "slide", "push"];
const SEAM_KINDS = ["cut", "match-cut", "shared-element", "carried-object", "flood", "iris", "mask", "push-through", "mask-line", "signature", "whip", "zoom-through", "smash-cut", "dissolve"];
const CONTINUITY = new Set(["match-cut", "shared-element", "carried-object", "flood", "iris", "mask", "push-through", "mask-line"]);
const HANDOFF = ["x", "y", "scale", "opacity", "direction", "speed"];

function checkScore(run) {
  const P = [], W = [];
  const score = jsonMaybe(R(run, "motion", "score.json"));
  if (score === null) return { P: ["motion/score.json is missing"], W };
  if (score === undefined) return { P: ["motion/score.json is not valid JSON"], W };
  if (!readMaybe(R(run, "motion", "score.md")).trim()) P.push("motion/score.md is missing (the score in words)");
  const scenes = scenesOf(run);
  const N = scenes.length || (score.scenes || []).length;
  const S = Array.isArray(score.scenes) ? score.scenes : [];
  if (!String(score.spine || "").trim()) P.push("no spine: name the one device that threads the film");
  const reel = Array.isArray(score.showreel) ? score.showreel.filter((m) => m && String(m.what || "").trim() && Number(m.scene) >= 1) : [];
  if (reel.length < Math.min(2, N || 2)) P.push(`showreel names ${reel.length} moments: name 2 to 4 a motion designer would cut into their reel (if you can't, the score isn't ambitious enough yet)`);
  if (!score.video_direction || ["palette", "motion_grammar", "holds", "negative"].some((k) => !score.video_direction[k])) P.push("video_direction needs palette, motion_grammar, holds and negative");
  if (S.length !== N) P.push(`the score has ${S.length} scenes; scenes.json has ${N}`);
  const length = S.reduce((a, s) => a + (Number(s.duration) || 0), 0);
  const entr = [];
  let t3 = 0;
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    const n = i + 1;
    if (Number(s.n) !== n) P.push(`scene at position ${n} has n=${s.n} (number scenes 1..${N} in order)`);
    const want = scenes[i] ? Number(scenes[i].duration) : null;
    const dur = Number(s.duration);
    if (!(dur > 0)) P.push(`scene ${n}: no duration`);
    else if (want && Math.abs(dur - want) > Math.max(0.15, want * 0.03)) P.push(`scene ${n}: duration ${dur}s but scenes.json says ${want}s (durations are approved: score inside them)`);
    const shots = Array.isArray(s.shots) ? s.shots : [];
    if (!shots.length) P.push(`scene ${n}: no shots (a time-coded sequence across the whole scene)`);
    else {
      if (Math.abs(Number(shots[0].t0)) > 0.05) P.push(`scene ${n}: the first shot starts at ${shots[0].t0}s, not 0`);
      const last = Number(shots[shots.length - 1].t1);
      if (dur > 0 && Math.abs(last - dur) > 0.15) P.push(`scene ${n}: the last shot ends at ${last}s; the scene is ${dur}s`);
      for (let j = 1; j < shots.length; j++) if (Math.abs(Number(shots[j].t0) - Number(shots[j - 1].t1)) > 0.05) P.push(`scene ${n}: a gap or overlap between shots ${j} and ${j + 1}`);
      shots.forEach((sh, j) => {
        if (!String(sh.on_screen || "").trim() || !String(sh.moves || "").trim()) P.push(`scene ${n} shot ${j + 1}: needs on_screen and moves`);
        if (!String(sh.primary || "").trim()) W.push(`scene ${n} shot ${j + 1}: no primary mover named`);
      });
    }
    if (!String(s.layout || "").trim()) P.push(`scene ${n}: no layout`);
    if (!String(s.camera || "").trim()) P.push(`scene ${n}: no camera tier`);
    if (/^\s*T3/i.test(String(s.camera || ""))) t3++;
    if (!(Number(s.energy) >= 1 && Number(s.energy) <= 5)) P.push(`scene ${n}: energy must be 1-5`);
    for (const e of s.entrances || []) {
      if (!ENTRANCES.includes(e.type)) P.push(`scene ${n}: entrance type "${e.type}" (use one of ${ENTRANCES.join(", ")})`);
      entr.push(e.type);
    }
    for (const ev of s.events || []) if (!(Number(ev.t) >= 0 && (!(dur > 0) || Number(ev.t) <= dur + 0.05))) P.push(`scene ${n}: event "${ev.what}" at ${ev.t}s is outside the scene`);
  }
  if (t3 > 1) P.push(`${t3} crash zooms (T3): at most one per film`);
  const animated = entr.filter((e) => e !== "cut-in");
  if (animated.length >= 6) {
    const counts = {};
    for (const e of animated) counts[e] = (counts[e] || 0) + 1;
    for (const [e, c] of Object.entries(counts)) if (c / animated.length > 0.3) P.push(`"${e}" is ${Math.round((c / animated.length) * 100)}% of the animated entrances (30% at most: entrances by the object's nature)`);
  }
  if (entr.length >= 6 && entr.filter((e) => e === "cut-in").length / entr.length < 0.15) W.push("under 15% of elements are simply there on the cut (aim for 30%)");
  if (N >= 4) {
    const en = S.map((s) => Number(s.energy));
    if (!en.some((e) => e >= 5)) P.push("no peak: one scene at energy 5");
    if (!en.some((e) => e <= 2)) P.push("no calm stretch: one scene at energy 2 or less");
  }
  const lay = S.map((s) => String(s.layout || "").toLowerCase().split(/[,;(]/)[0].trim());
  for (let i = 2; i < lay.length; i++) if (lay[i] && lay[i] === lay[i - 1] && lay[i] === lay[i - 2]) P.push(`scenes ${i - 1}-${i + 1} share the layout "${lay[i]}" (no layout in more than 2 consecutive scenes)`);
  if (N >= 5 && new Set(lay.filter(Boolean)).size < 3) W.push("fewer than 3 different layouts across the film");
  if (N >= 5 && (!score.motif || (score.motif.scenes || []).length < 3)) P.push("the motif must appear in at least 3 scenes (motif.scenes)");
  const seams = Array.isArray(score.seams) ? score.seams : [];
  if (seams.length !== Math.max(0, N - 1)) P.push(`${seams.length} seams for ${N} scenes (need ${Math.max(0, N - 1)}: one per cut)`);
  let sig = 0, plain = 0;
  seams.forEach((s, i) => {
    const id = `seam ${s.from}>${s.to}`;
    if (Number(s.from) !== i + 1 || Number(s.to) !== i + 2) P.push(`${id}: seams go in order, ${i + 1}>${i + 2}`);
    if (!SEAM_KINDS.includes(s.kind)) P.push(`${id}: kind "${s.kind}" (use one of ${SEAM_KINDS.join(", ")})`);
    if (s.kind === "signature") sig++;
    if (s.kind === "cut" || CONTINUITY.has(s.kind)) plain++;
    if (CONTINUITY.has(s.kind) || s.element) {
      for (const side of ["out", "in"]) {
        const h = s[side];
        if (!h) { P.push(`${id}: a continuing element needs "${side}" handoff numbers`); continue; }
        const miss = HANDOFF.filter((k) => h[k] == null || h[k] === "");
        if (miss.length) P.push(`${id} ${side}: missing ${miss.join(", ")} (state every field, even unchanged ones)`);
      }
    }
    if (!String(s.why || "").trim()) W.push(`${id}: no reason given`);
  });
  if (score.signature && score.signature.seam && !seams.some((s) => `${s.from}>${s.to}` === String(score.signature.seam))) P.push(`signature.seam "${score.signature.seam}" is not one of the seams`);
  const sigs = sig || (score.signature && score.signature.seam ? 1 : 0);
  const maxSig = length > 60 ? 2 : 1;
  if (N >= 3 && sigs === 0) W.push("no signature transition named");
  if (sig > maxSig) P.push(`${sig} signature seams (${maxSig} at most for a ${Math.round(length)} s film)`);
  if (seams.length && plain / seams.length < 0.5) P.push(`only ${Math.round((plain / seams.length) * 100)}% of seams are cuts or scene-born continuity (at least 50%)`);
  return { P, W };
}

function checkRole(run, role, key) {
  const P = [], W = [];
  const research = (f) => R(run, "research", f);
  const pj = projectDir(run);
  switch (role) {
    case "product-researcher": {
      const plan = jsonMaybe(R(run, "crew", "plan.json")) || {};
      const topic = plan.mode === "topic";
      const md = readMaybe(research("product.md"));
      if (!md) { P.push("research/product.md is missing"); break; }
      P.push(...sections(md, topic ? ["In one paragraph", "Numbers", "Sources"] : ["In one paragraph", "What's new", "Features", "Numbers", "In users' words", "No longer true", "Sources"]));
      const urls = new Set(md.match(URL_RE) || []);
      if (urls.size < 3) P.push(`only ${urls.size} source URLs in product.md (at least 3)`);
      P.push(...claimsProblems(research("product.claims.json"), topic ? 8 : 12, "product.claims.json"));
      break;
    }
    case "brand-researcher": {
      const f = research("brand/DESIGN.md");
      if (!exists(f)) { P.push("research/brand/DESIGN.md is missing"); break; }
      let B;
      try {
        B = readDesignMd(f);
      } catch (e) {
        P.push(`brand.mjs can't read research/brand/DESIGN.md: ${e.message}`);
        break;
      }
      const roles = B.roles || {};
      for (const r of ["canvas", "ink", "accent"]) if (!roles[r]) P.push(`DESIGN.md has no ${r} colour`);
      if (!(B.fonts && B.fonts.display && B.fonts.display.family)) P.push("DESIGN.md has no display font");
      for (const w of B.warnings || []) W.push(`brand.mjs: ${w}`);
      const notes = readMaybe(research("brand.md"));
      if (!notes) P.push("research/brand.md (where each token came from) is missing");
      else if ((notes.match(URL_RE) || []).length < 2) P.push("research/brand.md cites fewer than 2 sources");
      const assets = research("brand/assets");
      const logo = exists(assets) && fs.readdirSync(assets).some((x) => /\.(svg|png|webp|pdf)$/i.test(x));
      if (!logo && !/logo[^\n]{0,80}(none|not found|couldn'?t|could not|no official)/i.test(notes)) P.push("no logo file in research/brand/assets/ (or say in brand.md why none could be found)");
      if (!/^##\s+Motion/mi.test(readMaybe(f))) W.push("DESIGN.md has no ## Motion section (the brand's own motion signature)");
      break;
    }
    case "screens-researcher": {
      const list = jsonMaybe(research("screens.json"));
      if (!Array.isArray(list)) { P.push(list === undefined ? "research/screens.json is not valid JSON" : "research/screens.json is missing"); break; }
      const real = list.filter((s) => s && s.path && exists(path.resolve(WS, s.path)));
      if (real.length < 4) P.push(`${real.length} screens on disk (at least 4; 6 for a big product)`);
      else if (real.length < 6) W.push(`${real.length} screens: fine for a small product, thin for a big one`);
      const missing = list.filter((s) => s && s.path && !exists(path.resolve(WS, s.path)));
      if (missing.length) P.push(`${missing.length} screens listed but not on disk (first: ${missing[0].path})`);
      const unsourced = list.filter((s) => s && !String(s.source || "").trim());
      if (unsourced.length) P.push(`${unsourced.length} screens without a source`);
      const md = readMaybe(research("screens.md"));
      if (!md) P.push("research/screens.md is missing");
      else {
        if (!/^##\s+UI kit/mi.test(md)) P.push('screens.md needs a "## UI kit" section (measured components)');
        else {
          const kit = (md.split(/^##\s+UI kit/mi)[1] || "").split(/^##\s/m)[0];
          const comps = (kit.match(/^###\s+/gm) || []).length;
          if (comps < 3) P.push(`the UI kit measures ${comps} components (at least 3, one ### heading each)`);
        }
        if (!/^##\s+Flows/mi.test(md)) W.push('screens.md has no "## Flows" section');
      }
      break;
    }
    case "precedent-researcher": {
      const md = readMaybe(research("precedent.md"));
      if (!md) { P.push("research/precedent.md is missing"); break; }
      P.push(...sections(md, ["Films", "House grammar", "Category clichés", "Moves worth stealing"]));
      const films = exists(research("films")) ? fs.readdirSync(research("films")).filter((d) => exists(research(path.join("films", d, "film.json")))) : [];
      if (films.length < 2 && !/(could ?n.t|could not|unable|no yt-dlp|blocked|private|unavailable)/i.test(md)) P.push(`${films.length} films analysed (at least 2, or say why not)`);
      break;
    }
    case "local-scout": {
      const md = readMaybe(research("local.md"));
      if (!md) { P.push("research/local.md is missing"); break; }
      P.push(...sections(md, ["What it is", "What's new", "UI words", "Design tokens"]));
      const c = jsonMaybe(research("local.claims.json"));
      if (c === null) P.push("research/local.claims.json is missing");
      else if (c === undefined) P.push("research/local.claims.json is not valid JSON");
      const assets = research("local/assets");
      if (exists(assets)) {
        const bad = [];
        const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (/^\.env|\.(pem|key|p12)$|secret|credential/i.test(e.name)) bad.push(rel(p)); } };
        walk(assets);
        if (bad.length) P.push(`secrets copied into local/assets (delete them): ${bad.slice(0, 3).join(", ")}`);
      }
      break;
    }
    case "research-lead": {
      const truth = R(run, "story", "truth.md");
      if (!readMaybe(truth)) { P.push("story/truth.md is missing"); break; }
      if (/<[a-z][^>]{3,}>/i.test(readMaybe(truth).replace(/<!--[\s\S]*?-->/g, ""))) P.push("story/truth.md still has <placeholders>");
      const r = spawnSync(process.execPath, [path.join(SKILL_DIR, "scripts", "story.mjs"), "pick", "--truth", truth, "--count", "3"], { encoding: "utf8", env: { ...process.env, RASANAI_QUIET: "1" } });
      if (r.status !== 0) P.push(`story.mjs pick refused the truth sheet: ${(r.stderr || "").trim().split("\n").slice(0, 3).join(" ")}`);
      else {
        try {
          const j = JSON.parse(r.stdout);
          if (j.truth_gaps && j.truth_gaps.length) P.push(`truth sheet gaps: ${j.truth_gaps.join("; ")}`);
        } catch {}
      }
      P.push(...claimsProblems(research("claims.json"), 8, "claims.json"));
      const assets = jsonMaybe(research("assets.json"));
      if (!Array.isArray(assets)) P.push("research/assets.json is missing or not a JSON array");
      else {
        const gone = assets.filter((a) => a && a.path && !exists(path.resolve(WS, a.path)));
        if (gone.length) P.push(`${gone.length} assets in assets.json are not on disk (first: ${gone[0].path})`);
        if (!assets.length) W.push("the asset kit is empty");
      }
      const br = readMaybe(research("BRIEFING.md"));
      if (!br) P.push("research/BRIEFING.md is missing");
      else {
        if (br.split("\n").length > 90) P.push(`BRIEFING.md is ${br.split("\n").length} lines (one page: 70 or so)`);
        P.push(...sections(br, ["The product today", "Angles", "Brand verdict", "Asset kit", "Ask the user"]));
      }
      break;
    }
    case "script-writer": {
      const f = R(run, "story", `pitch-${key}.json`);
      const p = jsonMaybe(f);
      if (p === null) { P.push(`story/pitch-${key}.json is missing`); break; }
      if (p === undefined) { P.push(`story/pitch-${key}.json is not valid JSON`); break; }
      const beats = Array.isArray(p.beats) ? p.beats : [];
      if (beats.length < 3) P.push(`${beats.length} beats`);
      beats.forEach((b, i) => {
        for (const k of ["name", "duration_s", "visual"]) if (b[k] == null || b[k] === "") P.push(`beat ${i + 1}: no ${k}`);
        if (b.on_screen == null && b.vo == null) P.push(`beat ${i + 1}: needs on_screen or vo`);
      });
      const B = brief(run);
      const ca = ["check", "--pitch", f, "--truth", R(run, "story", "truth.md")];
      if (B.length_s) ca.push("--length", String(B.length_s));
      if (B.narrated) ca.push("--narrated");
      const r = spawnSync(process.execPath, [path.join(SKILL_DIR, "scripts", "story.mjs"), ...ca], { encoding: "utf8", env: { ...process.env, RASANAI_QUIET: "1" } });
      if (r.status === 2) P.push("story.mjs check says rewrite (run it and fix what it names)");
      else if (r.status !== 0) P.push(`story.mjs check could not read the pitch: ${(r.stderr || "").trim().split("\n")[0]}`);
      break;
    }
    case "script-editor": {
      const n = jsonMaybe(R(run, "story", "edit-notes.json"));
      if (!n || !Array.isArray(n.pitches)) { P.push("story/edit-notes.json is missing or has no pitches[]"); break; }
      for (const p of n.pitches) {
        if (!["ship", "rewrite", "replace"].includes(p.verdict)) P.push(`${p.id || p.label}: verdict must be ship, rewrite or replace`);
        if (p.verdict !== "ship" && !(p.notes || []).length) P.push(`${p.id || p.label}: a ${p.verdict} verdict needs line notes with fixes`);
        for (const x of p.notes || []) if (!String(x.fix || "").trim()) P.push(`${p.id || p.label} beat ${x.beat}: a note without a fix`);
      }
      if (!n.recommended) P.push("no recommended pitch");
      break;
    }
    case "motion-director": {
      if (key === "seams") {
        const md = readMaybe(R(run, "crew", "seams-report.md"));
        if (!md) { P.push("crew/seams-report.md is missing"); break; }
        const score = jsonMaybe(R(run, "motion", "score.json")) || {};
        const missing = (score.seams || []).filter((s) => !md.includes(`${s.from}>${s.to}`)).map((s) => `${s.from}>${s.to}`);
        if (missing.length) P.push(`seams-report.md doesn't cover seams ${missing.join(", ")} (name each as "N>N+1")`);
        if (pj) {
          const r = spawnSync(process.execPath, [path.join(SKILL_DIR, "scripts", "obey.mjs"), "--project", pj], { encoding: "utf8", env: { ...process.env, RASANAI_QUIET: "1" } });
          if (r.status === 2) P.push("obey.mjs reports violations after the seam fixes");
          else if (r.status !== 0) W.push("obey.mjs could not run");
        }
        break;
      }
      const s = checkScore(run);
      P.push(...s.P);
      W.push(...s.W);
      break;
    }
    case "frame-designer": {
      const [a, b] = String(key || "").split("-").map(Number);
      if (!(a && b)) { P.push("--key must be a scene range like 1-3"); break; }
      for (let n = a; n <= b; n++) {
        for (const ext of ["html", "png", "md"]) if (!exists(R(run, "frames", `${n}.${ext}`))) P.push(`frames/${n}.${ext} is missing`);
        const html = readMaybe(R(run, "frames", `${n}.html`));
        if (html && !/data-width/.test(html)) P.push(`frames/${n}.html: the root needs data-width / data-height`);
        if (html && /lorem ipsum|john doe|acme/i.test(html)) P.push(`frames/${n}.html has placeholder content`);
      }
      break;
    }
    case "scene-animator": {
      if (!pj) { P.push("--project <videos/name> required"); break; }
      const n = Number(key);
      const dir = path.join(pj, "compositions", "frames");
      const file = exists(dir) ? fs.readdirSync(dir).find((f) => new RegExp(`^0*${n}[-_.]`).test(f) && f.endsWith(".html")) : null;
      if (!file) { P.push(`no compositions/frames/${String(n).padStart(2, "0")}-*.html`); break; }
      const report = readMaybe(R(run, "crew", "animators", `${n}.md`));
      if (!report) P.push(`crew/animators/${n}.md is missing`);
      else {
        if (!/^##\s+Events/mi.test(report)) P.push(`crew/animators/${n}.md needs a "## Events" section`);
        const so = (report.split(/^##\s+Showing off/mi)[1] || "").split(/^##\s/m)[0].trim();
        if (so.length < 40) P.push(`crew/animators/${n}.md needs "## Showing off": the moment in this scene that would make your reel, and what you did to earn it`);
      }
      for (const s of ["overview", "move"]) if (!exists(R(run, "crew", "animators", `${n}-${s}.png`))) P.push(`no ${s} strip (crew/animators/${n}-${s}.png): look at your motion`);
      const r = spawnSync(process.execPath, [path.join(SKILL_DIR, "scripts", "obey.mjs"), "--project", pj, "--json"], { encoding: "utf8", env: { ...process.env, RASANAI_QUIET: "1" } });
      let j = null;
      try { j = JSON.parse(r.stdout); } catch {}
      if (!j) { W.push("obey.mjs could not run"); break; }
      const relFile = path.join("compositions", "frames", file);
      const errs = (j.findings || []).filter((x) => x.file === relFile && x.severity === "error");
      if (errs.length) P.push(`obey.mjs: ${errs.length} violations in ${file} (first: ${errs[0].rule}${errs[0].target ? " on " + errs[0].target : ""})`);
      if ((j.could_not_run || []).some((x) => String(x).includes(file))) P.push(`obey.mjs could not check ${file} (a script error, or the timeline isn't registered on window.__timelines)`);
      break;
    }
    case "critic": {
      const [lens, round] = String(key || "").split("-");
      const f = R(run, "crew", `critic-${lens}-${Number(round) || 1}.json`);
      const c = jsonMaybe(f);
      if (!c) { P.push(`${rel(f)} is ${c === undefined ? "not valid JSON" : "missing"}`); break; }
      if (!["ship", "fix"].includes(c.verdict)) P.push('verdict must be "ship" or "fix"');
      if (!c.scores || !Object.keys(c.scores).length) P.push("no scores");
      else if (["frames", "motion", "film"].includes(lens) && !(Number(c.scores.ambition) >= 1)) P.push('scores need "ambition" (1-10): competent-but-safe is a fail, say so');
      const fs_ = Array.isArray(c.findings) ? c.findings : [];
      if (c.verdict === "fix" && !fs_.length) P.push("a fix verdict needs findings");
      fs_.forEach((x, i) => {
        if (!String(x.fix || "").trim()) P.push(`finding ${i + 1}: no exact fix`);
        if (lens !== "grounding" && x.scene == null) W.push(`finding ${i + 1}: no scene`);
      });
      const low = Object.entries(c.scores || {}).filter(([, v]) => Number(v) < 8);
      if (c.verdict === "ship" && (low.length || fs_.some((x) => x.severity === "high"))) P.push("ship needs every score ≥ 8 and no high finding");
      break;
    }
    default:
      die(`unknown role "${role}"`);
  }
  return { P, W };
}

// ---------------------------------------------------------------- storyboard (the score → the workflow's visual design)
const MARK = "<!-- rasanai:score -->", END = "<!-- /rasanai:score -->";
const VD = "<!-- rasanai:video-direction -->", VDEND = "<!-- /rasanai:video-direction -->";
function scoreIntoStoryboard(sbText, score) {
  const fmt = (h) => (h ? `${h.element ? h.element + " · " : ""}x ${h.x} · y ${h.y} · scale ${h.scale} · opacity ${h.opacity} · direction ${h.direction} · speed ${h.speed} px/s` : null);
  const vd = score.video_direction || {};
  const vdBlock = `${VD}\n## Video direction\n\n- palette system: ${vd.palette || ""}\n- motion grammar + reveal model: ${vd.motion_grammar || ""}\n- rhythm / held-frame allocation: ${score.rhythm ? score.rhythm + "; " : ""}${vd.holds || ""}\n- spine: ${score.spine || ""}${score.motif ? `\n- motif: ${score.motif.what} (frames ${(score.motif.scenes || []).join(", ")})` : ""}${score.signature ? `\n- signature: ${score.signature.technique} at ${score.signature.seam} (${score.signature.why || ""})` : ""}${(score.showreel || []).length ? `\n- showreel moments (land these; they are why the film exists): ${score.showreel.map((m) => `frame ${m.scene}${m.t != null ? ` at ${m.t}s` : ""}: ${m.what}`).join("; ")}` : ""}\n- negative list: ${(vd.negative || []).join("; ")}; no slideshow (front-load then freeze), no screensaver (everything floating)\n\nScored by RasanAI's Motion Director (motion/score.json): the shot sequences, handoffs and transitions below are the approved visual design. Do not rewrite them.\n${VDEND}\n`;
  let t = sbText.replace(new RegExp(`${VD}[\\s\\S]*?${VDEND}\\n*`, "g"), "").replace(new RegExp(`\\n?${MARK}[\\s\\S]*?${END}\\n?`, "g"), "\n");
  // the video direction goes right before the first frame
  const first = t.search(/^## Frame 1 — /m);
  if (first < 0) throw new Error("no '## Frame 1 — ' heading in STORYBOARD.md");
  t = t.slice(0, first) + vdBlock + "\n" + t.slice(first);
  const seams = score.seams || [];
  for (const s of score.scenes || []) {
    const n = Number(s.n);
    const re = new RegExp(`(^## Frame ${n} — [^\\n]*\\n)([\\s\\S]*?)(?=^## Frame ${n + 1} — |(?![\\s\\S]))`, "m");
    const m = t.match(re);
    if (!m) throw new Error(`no '## Frame ${n} — ' block in STORYBOARD.md`);
    let body = m[2];
    const sin = seams.find((x) => Number(x.to) === n);
    const sout = seams.find((x) => Number(x.from) === n);
    // transition_in on the incoming frame: the assembler builds only registry seams; cuts and continuity live in the frames
    if (n > 1) {
      const tin = sin && sin.registry ? String(sin.registry) : "cut";
      body = /^- transition_in: .*$/m.test(body) ? body.replace(/^- transition_in: .*$/m, `- transition_in: ${tin}`) : body.replace(/^(- duration: .*)$/m, `$1\n- transition_in: ${tin}`);
    }
    const sfx = (s.events || []).filter((e) => e.sound).map((e) => e.sound);
    const lines = [
      MARK,
      `- blueprint: ${s.blueprint || "compose"}`,
      s.focal ? `- focal: ${s.focal}` : null,
      s.roles ? `- roles: ${s.roles}` : null,
      sfx.length ? `- sfx: ${[...new Set(sfx)].join(", ")}` : null,
      sin && (sin.element || CONTINUITY.has(sin.kind)) ? `- handoff_in: ${fmt({ element: sin.element, ...(sin.in || {}) })} (${sin.kind} from frame ${n - 1})` : null,
      sout && (sout.element || CONTINUITY.has(sout.kind)) ? `- handoff_out: ${fmt({ element: sout.element, ...(sout.out || {}) })} (${sout.kind} into frame ${n + 1})` : null,
      `- camera: ${s.camera}`,
      `- energy: ${s.energy}/5`,
      "",
      ...(s.shots || []).map((sh, j) => `Scene ${j + 1} (${Number(sh.t0).toFixed(1)}–${Number(sh.t1).toFixed(1)}s): ${sh.on_screen}. ${sh.moves}${sh.primary ? ` (primary: ${sh.primary})` : ""}${j === 0 ? ` — ${s.layout}` : ""}`),
      s.techniques && s.techniques.length ? `\nTechniques: ${s.techniques.join(", ")}` : null,
      sin ? `Seam in (${n - 1}>${n}): ${sin.kind}${sin.why ? `: ${sin.why}` : ""}` : null,
      sout ? `Seam out (${n}>${n + 1}): ${sout.kind}${sout.why ? `: ${sout.why}` : ""}` : null,
      s.notes ? `Note: ${s.notes}` : null,
      END,
    ].filter((x) => x != null);
    body = body.replace(/\s*$/, "") + "\n\n" + lines.join("\n") + "\n\n";
    t = t.replace(re, `$1${body}`);
  }
  return t;
}

// ---------------------------------------------------------------- strip (see the motion)
function times() {
  if (args.at && args.at !== true) return String(args.at).split(",").map(Number).filter((x) => x >= 0);
  const a = Number(args.from || 0), b = Number(args.to), fps = Number(args.fps || 10);
  if (!(b > a)) die("--at t1,t2,… or --from a --to b [--fps n]");
  const n = Math.min(60, Math.floor((b - a) * fps) + 1);
  return Array.from({ length: n }, (_, i) => Math.round((a + i / fps) * 1000) / 1000).filter((t) => t <= b + 1e-6);
}
function projectRootOf(file) {
  let d = path.dirname(path.resolve(file));
  for (let i = 0; i < 6; i++) {
    if (exists(path.join(d, "hyperframes.json")) || exists(path.join(d, "index.html")) && exists(path.join(d, "compositions"))) return d;
    const up = path.dirname(d);
    if (up === d) break;
    d = up;
  }
  return path.dirname(path.resolve(file));
}
function renderCompositionAt(file, T, dir) {
  let html = fs.readFileSync(file, "utf8").replace(/<template[^>]*>/gi, "").replace(/<\/template>/gi, "");
  html = html.replace(/<script[^>]+src=["'][^"']*gsap(?:\.min)?\.js["'][^>]*><\/script>/gi, `<script src="file://${GSAP_PATH}"></script>`);
  const W = Number((html.match(/data-width="(\d+)"/) || [])[1] || 1920), H = Number((html.match(/data-height="(\d+)"/) || [])[1] || 1080);
  const root = projectRootOf(file);
  const gsapTag = /gsap(\.min)?\.js/.test(html) ? "" : `<script src="file://${GSAP_PATH}"></script>`;
  const head = `<base href="file://${root}/">${gsapTag}<script>window.__timelines=window.__timelines||{};</script><style>html,body{margin:0;padding:0;background:#000;overflow:hidden;width:${W}px;height:${H}px}</style>`;
  html = /<head[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, (m) => m + head) : head + html;
  const files = [];
  for (const t of T) {
    const seek = `<script>(function(){var T=${t};function go(){var L=window.__timelines||{};Object.keys(L).forEach(function(k){try{L[k].pause();L[k].seek(T,false);}catch(e){}});document.querySelectorAll('[data-start][data-duration]').forEach(function(el){if(el.hasAttribute('data-composition-id'))return;var s=parseFloat(el.getAttribute('data-start')),d=parseFloat(el.getAttribute('data-duration'));if(isFinite(s)&&isFinite(d))el.style.visibility=(T>=s&&T<s+d)?'':'hidden';});}window.addEventListener('load',function(){(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){go();setTimeout(go,30);});});})();</script>`;
    const page = /<\/body>/i.test(html) ? html.replace(/<\/body>/i, seek + "</body>") : html + seek;
    // the temp page sits in the project root so project-relative asset paths resolve
    const tmp = path.join(root, `.rasanai-strip-${process.pid}-${files.length}.html`);
    fs.writeFileSync(tmp, page);
    const png = path.join(dir, `t${t.toFixed(3)}.png`);
    try {
      chromeScreenshot(`file://${tmp}`, png, W, H, 4000);
    } finally {
      fs.rmSync(tmp, { force: true });
    }
    if (!exists(png)) die(`could not render ${path.basename(file)} at ${t}s (a script error before the timeline registered?)`);
    files.push({ t, png });
  }
  return { files, W, H };
}
function videoAt(file, T, dir) {
  const files = [];
  for (const t of T) {
    const png = path.join(dir, `t${t.toFixed(3)}.png`);
    const r = spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", String(t), "-i", file, "-frames:v", "1", png], { encoding: "utf8" });
    if (r.status !== 0 || !exists(png)) die(`ffmpeg could not read ${path.basename(file)} at ${t}s: ${(r.stderr || "").trim().split("\n").pop()}`);
    files.push({ t, png });
  }
  let W = 1920, H = 1080;
  try {
    const j = JSON.parse(execFileSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "json", file], { encoding: "utf8" }));
    W = j.streams[0].width; H = j.streams[0].height;
  } catch {}
  return { files, W, H };
}
function projectAt(dir0, T, dir) {
  const r = spawnSync("npx", ["--yes", "hyperframes", "snapshot", dir0, "--at", T.join(","), "--no-end", "-o", dir, "--describe", "false"], { encoding: "utf8", timeout: 600000 });
  if (r.status !== 0) die(`hyperframes snapshot failed: ${(r.stderr || r.stdout || "").trim().split("\n").slice(-3).join(" ")}`);
  const pngs = fs.readdirSync(dir).filter((f) => /\.png$/i.test(f) && !/contact/.test(f)).sort();
  const files = pngs.map((f, i) => ({ t: T[i] != null ? T[i] : i, png: path.join(dir, f) }));
  const hf = jsonMaybe(path.join(dir0, "hyperframes.json")) || {};
  return { files, W: hf.width || 1920, H: hf.height || 1080 };
}
function sheet(files, W, H, outPng, cols) {
  const tw = 420, th = Math.round((tw * H) / W);
  const c = Math.min(cols, files.length);
  const rows = Math.ceil(files.length / c);
  const html = `<!doctype html><html><head><style>html,body{margin:0;background:#141414;font:500 14px/1 -apple-system,Helvetica,Arial,sans-serif;color:#ddd}.g{display:grid;grid-template-columns:repeat(${c},${tw}px);gap:8px;padding:8px}figure{margin:0}img{width:${tw}px;height:${th}px;object-fit:contain;background:#000;display:block}figcaption{padding:5px 2px 0}</style></head><body><div class="g">${files.map((f) => `<figure><img src="file://${f.png}"><figcaption>${esc(`${f.label || ""}t = ${Number(f.t).toFixed(2)} s`)}</figcaption></figure>`).join("")}</div></body></html>`;
  const tmp = path.join(os.tmpdir(), `rasanai-sheet-${process.pid}.html`);
  fs.writeFileSync(tmp, html);
  try {
    chromeScreenshot(`file://${tmp}`, outPng, c * tw + (c + 1) * 8, rows * (th + 27) + (rows + 1) * 8, 3000);
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

// ---------------------------------------------------------------- commands
if (cmd === "plan") {
  const run = runDir();
  if (!args.route || args.route === true) die("--route required");
  const p = {
    route: String(args.route), subject: str(args.subject), mode: str(args.mode) || (args.route === "faceless-explainer" ? "topic" : "product"),
    url: str(args.url) || null, public: !!args.public, local: str(args.local).split(",").map((s) => s.trim()).filter(Boolean).map((s) => path.resolve(s.replace(/^~(?=\/|$)/, os.homedir()))),
    may_run: !!args["may-run"], scenes: Number(args.scenes) || null, length: Number(args.length) || null, project: args.project && args.project !== true ? rel(String(args.project)) : null, lean: !!args.lean,
    focus: str(args.focus) || null, features: str(args.features) || null,
  };
  for (const d of p.local) if (!exists(d)) die(`approved folder not found: ${d}`);
  const prev = jsonMaybe(R(run, "crew", "plan.json")) || {};
  // re-planning later (scene count known, the project made) keeps what was planned before
  for (const k of ["subject", "url", "project", "focus", "features"]) if (!p[k] && prev[k]) p[k] = prev[k];
  if (!p.local.length && prev.local && prev.local.length) { p.local = prev.local; p.may_run = prev.may_run; }
  if (!args.public && prev.public) p.public = true;
  p.phases = planCrew(p);
  writeFile(R(run, "crew", "plan.json"), JSON.stringify(p, null, 2));
  const count = p.phases.reduce((a, ph) => a + ph.dispatch.length, 0);
  out({ ok: true, plan: rel(R(run, "crew", "plan.json")), dispatches: count, phases: p.phases.map((ph) => ({ phase: ph.phase, when: ph.when, members: ph.dispatch.map((x) => `${x.role}${x.key ? ":" + x.key : ""} (${x.tier})`), then: ph.then })), next: "For each member: crew.mjs brief, then dispatch it in the background with the prompt file; accept it with crew.mjs check." });
} else if (cmd === "brief") {
  const run = runDir();
  const role = str(args.role);
  if (!ROLES[role]) die(`--role must be one of ${Object.keys(ROLES).join(", ")}`);
  const key = args.key && args.key !== true ? String(args.key) : null;
  const plan = jsonMaybe(R(run, "crew", "plan.json")) || {};
  const { text, ctx, inputs, outputs } = promptFor(run, role, key, plan);
  const f = R(run, "crew", "prompts", `${role}${key ? "-" + key : ""}.md`);
  writeFile(f, text);
  fs.mkdirSync(path.resolve(WS, ctx.scratch), { recursive: true });
  ledger(run, { event: "brief", role, key });
  const tier = ROLES[role].tier;
  out({
    ok: true, role, key, prompt: rel(f), bytes: Buffer.byteLength(text),
    description: ROLES[role].desc(plan, key), model: tier === "fast" ? "a faster model is fine (e.g. sonnet)" : "the session's model (don't downgrade)",
    missing_inputs: inputs.filter((i) => i.path && !i.exists).map((i) => i.label), outputs,
    dispatch: `Agent(description: "${ROLES[role].desc(plan, key)}", prompt: "Read ${rel(f)} in full, then do the job it describes. Your Dispatch context is at its end.", run_in_background: true${tier === "fast" ? ', model: "sonnet"' : ""})`,
  });
} else if (cmd === "check") {
  const run = runDir();
  const role = str(args.role);
  if (!ROLES[role]) die(`--role must be one of ${Object.keys(ROLES).join(", ")}`);
  const key = args.key && args.key !== true ? String(args.key) : null;
  const { P, W } = checkRole(run, role, key);
  ledger(run, { event: P.length ? "fail" : "ok", role, key, problems: P.length ? P.slice(0, 20) : undefined });
  out({ ok: !P.length, role, key, problems: P, warnings: W }, P.length ? 2 : 0);
} else if (cmd === "status") {
  const run = runDir();
  const plan = jsonMaybe(R(run, "crew", "plan.json"));
  const L = readLedger(run);
  const last = new Map();
  for (const r of L) last.set(`${r.role}|${r.key || ""}`, r);
  const state = (r) => (!r ? "planned" : r.event === "brief" ? "dispatched" : r.event === "ok" ? "accepted" : "needs work");
  const phases = plan ? plan.phases.map((ph) => ({ phase: ph.phase, members: ph.dispatch.map((x) => { const r = last.get(`${x.role}|${x.key || ""}`); return { role: x.role, key: x.key, state: state(r), problems: r && r.problems }; }) })) : [];
  const extra = [...last.values()].filter((r) => !plan || !plan.phases.some((ph) => ph.dispatch.some((x) => x.role === r.role && String(x.key || "") === String(r.key || "")))).map((r) => ({ role: r.role, key: r.key, state: state(r) }));
  const next = phases.find((ph) => ph.members.some((m) => m.state !== "accepted"));
  out({ ok: true, plan: !!plan, phases, unplanned: extra.length ? extra : undefined, next: next ? next.phase : null });
} else if (cmd === "pitches") {
  const run = runDir();
  const dir = R(run, "story");
  const order = ["sure", "bold", "wild"];
  const files = exists(dir) ? fs.readdirSync(dir).filter((f) => /^pitch-.+\.json$/.test(f)) : [];
  if (!files.length) die("no story/pitch-*.json yet");
  const pitches = files.map((f) => ({ f, p: jsonMaybe(path.join(dir, f)) })).filter((x) => x.p && typeof x.p === "object");
  pitches.sort((a, b) => order.indexOf(a.f.slice(6, -5).toLowerCase()) - order.indexOf(b.f.slice(6, -5).toLowerCase()));
  const merged = pitches.map(({ f, p }) => ({ ...p, label: p.label || f.slice(6, -5) }));
  writeFile(path.join(dir, "pitches.json"), JSON.stringify({ pitches: merged }, null, 2));
  out({ ok: true, pitches: rel(path.join(dir, "pitches.json")), labels: merged.map((p) => p.label), skipped: files.length - merged.length || undefined });
} else if (cmd === "storyboard") {
  const run = runDir();
  const pj = projectDir(run);
  if (!pj) die("--project <videos/name> required");
  const sbf = path.join(pj, "STORYBOARD.md");
  if (!exists(sbf)) die(`no STORYBOARD.md in ${rel(pj)} (run video.mjs write first)`);
  const scoreFile = args.score && args.score !== true ? path.resolve(String(args.score)) : R(run, "motion", "score.json");
  const score = jsonMaybe(scoreFile);
  if (!score) die(`score not found or invalid: ${rel(scoreFile)}`);
  const { P } = checkScore(run);
  if (P.length) out({ ok: false, problems: P, hint: "the score must pass crew.mjs check --role motion-director first" }, 2);
  let text;
  try {
    text = scoreIntoStoryboard(fs.readFileSync(sbf, "utf8"), score);
  } catch (e) {
    die(e.message);
  }
  // the workflow's own parser must still read every frame
  const route = (jsonMaybe(R(run, "video-decisions.json")) || {}).route || "product-launch-video";
  const reg = [route, "product-launch-video", "faceless-explainer", "pr-to-video"].map(findSkill).find((d) => d && exists(path.join(d, "scripts", "lib", "storyboard.mjs")));
  let parsed = null;
  if (reg) {
    const { parseStoryboard } = await import(path.join(reg, "scripts", "lib", "storyboard.mjs"));
    parsed = parseStoryboard(text);
    const want = (score.scenes || []).length;
    if ((parsed.frames || []).length !== want) die(`after writing the score the workflow parser reads ${(parsed.frames || []).length} frames, expected ${want}`);
  }
  fs.writeFileSync(sbf, text);
  writeFile(path.join(pj, "MOTION-SCORE.md"), readMaybe(R(run, "motion", "score.md")) || "");
  // tell the workflow its visual-design step is done, and every frame worker where the whole score lives
  const bm = "<!-- rasanai:score-note -->";
  const briefF = path.join(pj, "BRIEF.md");
  if (exists(briefF)) fs.writeFileSync(briefF, upsertMarked(fs.readFileSync(briefF, "utf8"), bm, `${bm}\n## Visual design (done)\n\n- **The visual-design step is done.** RasanAI's Motion Director scored the whole film: STORYBOARD.md carries every frame's time-coded shot sequence, blueprint, focal, roles, sfx, handoffs and \`transition_in\`, under one \`## Video direction\`. Do not rewrite them; run \`stage-assets.mjs\` and continue with the frames. MOTION-SCORE.md is the score in words.\n`));
  const dispF = path.join(pj, "DISPATCH.md");
  if (exists(dispF)) fs.writeFileSync(dispF, upsertMarked(fs.readFileSync(dispF, "utf8"), bm, `${bm}\n## The motion score\n\nYour frame block in the packet holds your part of the Motion Director's score (shots, primary movers, camera, handoffs); MOTION-SCORE.md is the whole film. Seams are contracts: start and end continuing elements at the exact handoff numbers.\n`));
  out({ ok: true, storyboard: rel(sbf), frames: (score.scenes || []).length, parsed: !!parsed, score_md: rel(path.join(pj, "MOTION-SCORE.md")), next: "The workflow's visual-design step is done: stage assets, then frame-packets.mjs, video.mjs inject, and dispatch the scene animators (crew.mjs brief --role scene-animator --key <n>)." });
} else if (cmd === "strip") {
  const outPng = args.out && args.out !== true ? path.resolve(String(args.out)) : die("--out <sheet.png> required");
  const T = times();
  if (!T.length) die("no times to render");
  const dir = outPng.replace(/\.png$/i, "");
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  let res;
  if (args.project && args.project !== true) res = projectAt(path.resolve(String(args.project)), T, dir);
  else if (args.file && args.file !== true) {
    const f = path.resolve(String(args.file));
    if (!exists(f)) die(`not found: ${f}`);
    res = /\.(mp4|mov|webm|m4v|mkv)$/i.test(f) ? videoAt(f, T, dir) : renderCompositionAt(f, T, dir);
  } else die("--file <composition.html | video> or --project <dir>");
  sheet(res.files, res.W, res.H, outPng, Number(args.cols) || 6);
  if (!exists(outPng)) die("the sheet did not render");
  out({ ok: true, sheet: rel(outPng), frames: res.files.length, dir: rel(dir), times: T, look: "Read the sheet image: spacing between frames shows the ease (wide gaps = fast, tight = slowing into a landing)" });
} else {
  die("usage: crew.mjs plan|brief|check|status|pitches|storyboard|strip … (see the header)");
}
