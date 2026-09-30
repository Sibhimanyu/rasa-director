#!/usr/bin/env node
// Self-test: the checks that keep Rasa Director honest. Needs Node >= 20 and Chrome
// (npx hyperframes browser ensure, or RASA_DIRECTOR_CHROME). No network needed.
//   node selftest.mjs [--quick]
// 1. every personality's own tasting animation passes obey against its own motion.md
// 2. planted bad motion is caught (fade-up-slide via autoAlpha / css / keyframes, custom ease)
// 3. a broken composition is "could not run" (exit 1), never "clean"
// 4. the keyframe board flags a banned pose pair
// 5. pick keeps its guarantees (2 tail candidates; "you decide" never the remembered pick)
// 6. the console serves, accepts a token-authenticated action, and wait returns it
// 7. entire videos: multi-scene tasting obeys, scenes.mjs writes a parseable plan and rejects
//    bad input, the contract upsert is idempotent, inject + audio-lock work, the transitions menu renders
// 8. footage reels: scan reads rotation and sound, build conforms segments, sizes cards, times the cut, obeys;
//    Claude-authored cards are mounted and checked, missing ones refused
// 9. direction: the taxonomy validates, every motion-language swatch obeys its own contract, DESIGN.md shapes
//    are read into roles and fonts and converted to a frame.md that reads back, the direction compiles and
//    rejects unknown terms, design directions are distinct and brand-locked on request, the console page parses
// 10. setup and updates: Node discovery, VERSION matches the plugin, newer releases reported
// 11. story: the device catalog validates, pick is distinct and deterministic, the rubric ships a good pitch and rejects the cliché
// 12. anti-slop: a project full of AI-video tells fails with fixes; a clean one passes
// 13. sound: analyze/fit/render/check on a synthetic 120 BPM track, needs_longer, loop detection, SFX rules
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), "rasa-selftest-"));
const env = { ...process.env, RASA_DIRECTOR_HOME: path.join(TMP, "home") };
const quick = process.argv.includes("--quick");
let failed = 0;
const node = (script, args, opts = {}) => spawnSync(process.execPath, [path.join(HERE, script), ...args], { encoding: "utf8", env, cwd: opts.cwd || TMP, timeout: 180000 });
const ok = (name, cond, detail = "") => {
  console.log(`${cond ? "ok  " : "FAIL"}  ${name}${!cond && detail ? `\n      ${detail}` : ""}`);
  if (!cond) failed++;
};

// 1
const ids = fs.readdirSync(path.join(HERE, "..", "personalities")).map((f) => f.replace(".json", "")).sort();
for (const id of quick ? ids.slice(0, 3) : ids) {
  const d = path.join(TMP, "self", id);
  const t = node("tasting.mjs", ["--content", "Ship it in an afternoon", "--sub", "a second line", "--personalities", `${id},${id}`, "--out", d]);
  node("motion-md.mjs", ["write", "--personality", id, "--out", path.join(d, "motion.md")]);
  const o = node("obey.mjs", ["--project", d]);
  ok(`personality ${id} obeys its own motion.md`, t.status === 0 && o.status === 0 && /0 error\(s\), 0 warning\(s\)/.test(o.stdout), (t.stderr || "") + o.stdout.split("\n")[0]);
}

// 2 + 3
const mk = (name, body, head = "") => {
  const d = path.join(TMP, name);
  fs.mkdirSync(d, { recursive: true });
  node("motion-md.mjs", ["write", "--personality", "editorial-mask", "--out", path.join(d, "motion.md")]);
  fs.writeFileSync(path.join(d, "index.html"), `<html><head>${head}</head><body><div id="root" data-composition-id="m"><h1 id="a">A</h1><h2 id="b">B</h2><h3 id="c">C</h3><h4 id="k">K</h4></div><script>${body}</script></body></html>`);
  return d;
};
const gsap = `<script src="file://${path.join(HERE, "vendor", "gsap.min.js")}"></script>`;
const bad = mk("bad", `const tl=gsap.timeline({paused:true});
tl.from("#a",{y:150,autoAlpha:0,duration:0.7,ease:"expo.out"},0);
tl.fromTo("#b",{css:{opacity:0,x:-40}},{css:{opacity:1,x:0},duration:0.7,ease:"expo.out"},0.5);
tl.to("#c",{x:30,duration:0.7,ease:function(p){return p}},1);
tl.to("#k",{keyframes:[{opacity:0,y:40,duration:0},{opacity:1,y:0,duration:0.7}],ease:"expo.out"},2);
window.__timelines["m"]=tl;tl.seek(0);`, gsap);
const ob = node("obey.mjs", ["--project", bad, "--json"]);
let rep = {};
try {
  rep = JSON.parse(ob.stdout);
} catch {}
const rules = (rep.findings || []).map((f) => `${f.rule}@${f.target}`);
ok("autoAlpha fade-up-slide caught", rules.includes("banned:fade-up-slide@#a"), rules.join(", "));
ok("css-wrapped fade-slide caught", rules.includes("banned:fade-slide@#b"), rules.join(", "));
ok("custom function ease caught", rules.includes("custom-ease@#c"), rules.join(", "));
ok("keyframes-array fade-up-slide caught", rules.includes("banned:fade-up-slide@#k"), rules.join(", "));
ok("violations exit 2", ob.status === 2, `exit ${ob.status}`);
const broken = mk("broken", `throw new Error("boom"); const tl=gsap.timeline({paused:true}); tl.to("#a",{x:1,duration:0.7,ease:"expo.out"}); window.__timelines["m"]=tl;`, gsap);
const ob2 = node("obey.mjs", ["--project", broken]);
ok("broken composition is could-not-run (exit 1), never clean", ob2.status === 1 && /could-not-run/.test(ob2.stdout), `exit ${ob2.status}: ${ob2.stdout.split("\n")[0]}`);

// 4
const bd = path.join(TMP, "board");
fs.mkdirSync(bd, { recursive: true });
node("motion-md.mjs", ["write", "--personality", "soft-drift", "--out", path.join(bd, "motion.md")]);
fs.writeFileSync(path.join(bd, "kf.json"), JSON.stringify({ aspect: "9:16", shots: [{ id: "s1", elements: [{ id: "t", role: "headline", text: "Hi" }, { id: "u", role: "label", text: "x" }], poses: [{ t: 0, state: { t: { opacity: 0 }, u: { opacity: 0, y: 3 } } }, { t: 1.2, state: { t: { opacity: 1 } } }, { t: 2.4, state: { u: { opacity: 1, y: 0 } } }, { t: 4.2, state: {} }] }] }));
const bv = node("board.mjs", ["--poses", path.join(bd, "kf.json"), "--motion", path.join(bd, "motion.md"), "--validate"]);
ok("board flags a banned pose pair (exit 3)", bv.status === 3 && /fade-up-slide/.test(bv.stdout), `exit ${bv.status}`);

// 5
node("memory.mjs", ["record", "--step", "motion", "--value", "retro-terminal", "--mode", "confirmed"]);
for (const count of ["3", "6"]) {
  const p = node("pick.mjs", ["motion", "--count", count, "--seed", "x"]);
  let r = {};
  try {
    r = JSON.parse(p.stdout);
  } catch {}
  ok(`pick --count ${count}: 2+ tail candidates, auto never the remembered pick`, r.tail_count >= 2 && r.auto && r.auto.pick !== "retro-terminal", p.stdout.slice(0, 200));
}

// 6
const run = path.join(TMP, "console-run");
const sv = node("console.mjs", ["serve", "--run", run, "--root", TMP]);
let url = "";
try {
  url = JSON.parse(sv.stdout).url;
} catch {}
ok("console serves", /^http:\/\/127\.0\.0\.1:\d+\/\?t=/.test(url), sv.stdout + sv.stderr);
if (url) {
  const u = new URL(url);
  node("console.mjs", ["push", "--run", run, "--step", "concept", "--data", '{"question":"q","options":[{"id":"c1","title":"One"}]}']);
  const pageRes = await fetch(url).catch(() => null);
  const page = pageRes ? pageRes.status : 0;
  const cookie = pageRes ? (pageRes.headers.get("set-cookie") || "").split(";")[0] : "";
  const noTok = await fetch(`${u.origin}/`).then((r) => r.status).catch(() => 0);
  ok("console page needs the token", page === 200 && noTok === 403, `with ${page}, without ${noTok}`);
  const stateNoCookie = await fetch(`${u.origin}/api/state`).then((r) => r.status).catch(() => 0);
  ok("console state and files need the session cookie", stateNoCookie === 403 && !!cookie, `state without cookie: ${stateNoCookie}`);
  const post = await fetch(`${u.origin}/api/action`, { method: "POST", headers: { "content-type": "application/json", "x-rasa-token": u.searchParams.get("t"), cookie }, body: JSON.stringify({ step: "concept", type: "choose", value: "c1" }) }).then((r) => r.status).catch(() => 0);
  const w = node("console.mjs", ["wait", "--run", run, "--step", "concept", "--timeout", "10"]);
  let a = {};
  try {
    a = JSON.parse(w.stdout);
  } catch {}
  ok("console action reaches wait", post === 200 && a.type === "choose" && a.value === "c1", w.stdout);
  const esc = await fetch(`${u.origin}/fs/abs/etc/passwd`, { headers: { cookie } }).then((r) => r.status).catch(() => 0);
  ok("console refuses files outside allowed roots", esc === 403, `got ${esc}`);
  const tokFile = await fetch(`${u.origin}/fs/abs${run}/console.json`, { headers: { cookie } }).then((r) => r.status).catch(() => 0);
  ok("console never serves its own token file", tokFile === 403, `got ${tokFile}`);
  // a range request on an empty file and a null body must not take the server down
  fs.mkdirSync(path.join(TMP, "media"), { recursive: true });
  fs.writeFileSync(path.join(TMP, "media", "empty.mp4"), "");
  const rng = await fetch(`${u.origin}/fs/rel/media/empty.mp4`, { headers: { cookie, range: "bytes=0-" } }).then((r) => r.status).catch(() => 0);
  const nul = await fetch(`${u.origin}/api/action`, { method: "POST", headers: { "content-type": "application/json", "x-rasa-token": u.searchParams.get("t"), cookie }, body: "null" }).then((r) => r.status).catch(() => 0);
  const alive = await fetch(`${u.origin}/api/state`, { headers: { cookie } }).then((r) => r.status).catch(() => 0);
  ok("console survives a range on an empty file and a null body", rng === 416 && nul === 400 && alive === 200, `range ${rng}, null ${nul}, alive ${alive}`);
  const rebind = await new Promise((resolve) => {
    import("node:http").then(({ default: http }) => {
      const r = http.get({ host: "127.0.0.1", port: u.port, path: "/api/state", headers: { host: `evil.example:${u.port}`, cookie } }, (res) => resolve(res.statusCode));
      r.on("error", () => resolve(0));
    });
  });
  ok("console rejects foreign Host headers (DNS rebinding)", rebind === 421, `got ${rebind}`);
  // the live feed: pushes, Claude's activity and the user's answers (by name) all show, and the status knows who's up
  node("console.mjs", ["activity", "--run", run, "--message", "Drawing style frame 2 of 3"]);
  let st = {};
  try {
    st = JSON.parse(fs.readFileSync(path.join(run, "session.json"), "utf8"));
  } catch {}
  const msgs = (st.activity || []).map((x) => x.msg);
  ok("console feed: questions, your answers by name, and what Claude is doing", msgs.includes("Ready for you: the story") && msgs.includes("You: picked the story: One") && st.working && st.working.msg === "Drawing style frame 2 of 3", JSON.stringify(msgs));
  // a console that stops comes back on the same address with the next push (the open tab reconnects by itself)
  {
    const c0 = JSON.parse(fs.readFileSync(path.join(run, "console.json"), "utf8"));
    try { process.kill(c0.pid); } catch {}
    await new Promise((r) => setTimeout(r, 600));
    node("console.mjs", ["push", "--run", run, "--step", "concept", "--data", '{"question":"again","options":[{"id":"c1","title":"One"}]}']);
    let c1 = {};
    try { c1 = JSON.parse(fs.readFileSync(path.join(run, "console.json"), "utf8")); } catch {}
    const back = await fetch(`${new URL(c0.url).origin}/api/state`, { headers: { cookie } }).then((r) => r.status).catch(() => 0);
    ok("console that stops is restarted on the same address by the next push", c1.url === c0.url && c1.pid !== c0.pid && back === 200, `before ${c0.url}, after ${c1.url}, state ${back}`);
  }
  // scripts and the plugin hook report into the current run's feed; console plumbing stays out of it
  {
    fs.mkdirSync(path.join(TMP, ".rasa-director"), { recursive: true });
    fs.writeFileSync(path.join(TMP, ".rasa-director", "current"), path.relative(TMP, run));
    const hook = (j) => spawnSync(process.execPath, [path.join(HERE, "hook-activity.mjs")], { input: JSON.stringify({ cwd: TMP, ...j }), encoding: "utf8", env, timeout: 10000 });
    hook({ tool_name: "Bash", tool_input: { command: "node build.mjs", description: "Rendering the preview" } });
    hook({ tool_name: "Bash", tool_input: { command: "node console.mjs wait --run x", description: "Wait for the user" } });
    hook({ tool_name: "Write", tool_input: { file_path: "videos/a/compositions/scene-03.html" } });
    node("motion-md.mjs", ["write", "--personality", "swiss-precise", "--out", path.join(TMP, "motion-feed.md")]);
    const feed = JSON.parse(fs.readFileSync(path.join(run, "session.json"), "utf8")).activity.map((x) => x.msg);
    ok("live feed: scripts and Claude's actions show up, console plumbing doesn't", feed.includes("Rendering the preview") && feed.includes("Writing scene-03.html") && feed.includes("Motion rules written") && !feed.includes("Wait for the user"), JSON.stringify(feed.slice(-6)));
    fs.rmSync(path.join(TMP, ".rasa-director"), { recursive: true, force: true });
  }
  // a question outside the steps goes on the page as its own card, and the answer comes back through wait
  {
    node("console.mjs", ["ask", "--run", run, "--question", "The capture is thin. Go on?", "--options", '[{"id":"a","label":"Send material"},{"id":"b","label":"Go with what is visible"}]', "--recommended", "b"]);
    const st0 = JSON.parse(fs.readFileSync(path.join(run, "session.json"), "utf8"));
    const posted = await fetch(`${u.origin}/api/action`, { method: "POST", headers: { "content-type": "application/json", "x-rasa-token": u.searchParams.get("t"), cookie }, body: JSON.stringify({ step: st0.ask.step, type: "answer", value: { ask: st0.ask.id, choice: "a", text: "https://example.com/notes" } }) }).then((r) => r.status).catch(() => 0);
    const w2 = node("console.mjs", ["wait", "--run", run, "--timeout", "10"]);
    let a2 = {};
    try { a2 = JSON.parse(w2.stdout); } catch {}
    const st1 = JSON.parse(fs.readFileSync(path.join(run, "session.json"), "utf8"));
    ok("console ask: a question card, answered on the page, back through wait, flow unmoved", posted === 200 && a2.type === "answer" && a2.value.choice === "a" && st1.ask.answered && st1.current === st0.current, w2.stdout);
  }
  // a console started by an older version is replaced, never reused (it would serve the old page)
  const cj = path.join(run, "console.json");
  const old = JSON.parse(fs.readFileSync(cj, "utf8"));
  fs.writeFileSync(cj, JSON.stringify({ ...old, version: "0.0.1" }));
  let again = {};
  try {
    again = JSON.parse(node("console.mjs", ["serve", "--run", run, "--root", TMP]).stdout);
  } catch {}
  ok("console from an older version is replaced (a new server, same address), not reused", !!again.url && !again.reused && again.pid !== old.pid && again.url === old.url, JSON.stringify(again));
  node("console.mjs", ["stop", "--run", run]);
}

// 7
{
  const d = path.join(TMP, "multi");
  const t = node("tasting.mjs", ["--scenes", "Tax season. Again.::the shoebox wins || One tap. Done. || tally.app", "--personalities", "swiss-precise,swiss-precise", "--out", d]);
  node("motion-md.mjs", ["write", "--personality", "swiss-precise", "--out", path.join(d, "motion.md")]);
  const o = node("obey.mjs", ["--project", d]);
  ok("multi-scene tasting cell obeys its motion.md", t.status === 0 && o.status === 0, (t.stderr || "") + o.stdout.split("\n")[0]);

  const sj = path.join(TMP, "scenes.json");
  const S = { title: "T", message: "One tap books", aspect: "16:9", narration: true, transition_default: "blur-crossfade", scenes: [
    { title: "Hook", on_screen: "Tax season. Again.", voiceover: "Every spring, the shoebox wins.", duration: 4, type: "hook", intensity: "high" },
    { title: "Turn", on_screen: "One tap.", voiceover: "Snap it once.", duration: 3, transition_in: "push-slide LEFT" },
    { title: "Close", on_screen: "tally.app", voiceover: "Tally.", duration: 3, type: "cta" }] };
  fs.writeFileSync(sj, JSON.stringify(S));
  const sc = node("scenes.mjs", ["--scenes", sj, "--route", "product-launch-video", "--out", path.join(TMP, "plan")]);
  const sb = fs.existsSync(path.join(TMP, "plan", "STORYBOARD.md")) ? fs.readFileSync(path.join(TMP, "plan", "STORYBOARD.md"), "utf8") : "";
  ok("scenes.mjs writes a 3-frame storyboard + script", sc.status === 0 && (sb.match(/^## Frame \d+ — /gm) || []).length === 3 && /transition_in: push-slide LEFT/.test(sb) && fs.existsSync(path.join(TMP, "plan", "SCRIPT.md")), sc.stderr || sc.stdout.slice(0, 200));
  fs.writeFileSync(sj, JSON.stringify({ ...S, scenes: S.scenes.map((x, i) => (i === 1 ? { ...x, transition_in: "spin-wildly", duration: 0 } : x)) }));
  const bad2 = node("scenes.mjs", ["--scenes", sj, "--route", "product-launch-video", "--out", path.join(TMP, "plan-bad")]);
  ok("scenes.mjs rejects an unknown transition and a zero duration", bad2.status === 1 && /spin-wildly/.test(bad2.stderr) && /positive/.test(bad2.stderr), bad2.stderr);

  const { contractText, upsertContract } = await import(path.join(HERE, "lib", "contract.mjs"));
  const md = fs.readFileSync(path.join(d, "motion.md"), "utf8");
  const { readFrontmatterDoc } = await import(path.join(HERE, "lib", "common.mjs"));
  const M = readFrontmatterDoc(md).fields;
  const once = upsertContract("# Frame\n\nbody\n", contractText(M, { video: true }));
  ok("contract upsert is idempotent", upsertContract(once, contractText(M, { video: true })) === once && once.split("rasa-director:motion-contract").length === 2);

  const pd = path.join(TMP, "proj");
  fs.mkdirSync(path.join(pd, ".hyperframes", "frame-packets"), { recursive: true });
  fs.copyFileSync(path.join(d, "motion.md"), path.join(pd, "motion.md"));
  fs.writeFileSync(path.join(pd, ".hyperframes", "frame-packets", "01.md"), "# Frame 1\n\npacket\n");
  fs.writeFileSync(path.join(pd, ".hyperframes", "frame-packets", "_index.md"), "index\n");
  node("video.mjs", ["inject", "--project-dir", pd]);
  const inj = node("video.mjs", ["inject", "--project-dir", pd]);
  const p1 = fs.readFileSync(path.join(pd, ".hyperframes", "frame-packets", "01.md"), "utf8");
  ok("inject adds the contract to frame packets once, skips _ files", inj.status === 0 && p1.split("rasa-director:motion-contract").length === 2 && fs.readFileSync(path.join(pd, ".hyperframes", "frame-packets", "_index.md"), "utf8") === "index\n", inj.stderr);
  fs.writeFileSync(path.join(pd, "audio_meta.json"), JSON.stringify({ voices: [{ id: 1 }], bgm_pending: true }));
  fs.writeFileSync(path.join(TMP, "bed.wav"), "RIFF");
  const al = node("video.mjs", ["audio-lock", "--project-dir", pd, "--music", path.join(TMP, "bed.wav")]);
  const meta = JSON.parse(fs.readFileSync(path.join(pd, "audio_meta.json"), "utf8"));
  ok("audio-lock points bgm at the chosen track (ducked under narration)", al.status === 0 && meta.bgm.path === "assets/music-bed.wav" && meta.bgm.volume === 0.12 && !("bgm_pending" in meta), al.stderr);

  const { findSkill } = await import(path.join(HERE, "lib", "hyperframes.mjs"));
  if (["product-launch-video", "faceless-explainer", "pr-to-video"].some((r) => findSkill(r))) {
    const tm = node("transition-menu.mjs", ["--from", "Tax season. Again.", "--to", "One tap.", "--out", path.join(TMP, "tmenu")]);
    let tj = {};
    try {
      tj = JSON.parse(tm.stdout);
    } catch {}
    ok("transitions menu renders every registry transition", tm.status === 0 && (tj.cells || []).length >= 6, tm.stderr || tm.stdout.slice(0, 200));
  } else console.log("skip  transitions menu (no HyperFrames launch/explainer workflow installed)");
}

// 8
if (spawnSync("ffmpeg", ["-version"]).status === 0) {
  const raw = path.join(TMP, "raw");
  fs.mkdirSync(raw, { recursive: true });
  const ff = (a) => spawnSync("ffmpeg", ["-y", "-loglevel", "error", ...a], { encoding: "utf8" });
  ff(["-f", "lavfi", "-i", "testsrc2=size=640x360:rate=25", "-f", "lavfi", "-i", "sine=f=440", "-t", "4", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-c:a", "aac", path.join(raw, "a.mp4")]);
  ff(["-f", "lavfi", "-i", "smptebars=size=640x360:rate=30", "-t", "4", "-c:v", "libx264", "-pix_fmt", "yuv420p", path.join(raw, "b0.mp4")]);
  ff(["-display_rotation:v:0", "90", "-i", path.join(raw, "b0.mp4"), "-c", "copy", path.join(raw, "b rot.mp4")]);
  fs.rmSync(path.join(raw, "b0.mp4"));
  const sc = node("reel.mjs", ["scan", "--footage", raw, "--run", path.join(TMP, "rrun"), "--no-transcribe"]);
  let fj = {};
  try {
    fj = JSON.parse(fs.readFileSync(path.join(TMP, "rrun", "footage", "footage.json"), "utf8"));
  } catch {}
  const rot = (fj.clips || []).find((c) => c.name === "b rot.mp4") || {};
  const snd = (fj.clips || []).find((c) => c.name === "a.mp4") || {};
  ok("reel scan reads rotation, sound and draws contact sheets", sc.status === 0 && rot.width === 360 && rot.height === 640 && rot.has_audio === false && snd.has_audio === true && fs.existsSync(path.join(TMP, snd.sheet || "none")), sc.stderr || JSON.stringify(rot));
  const proj = path.join(TMP, "videos", "reel");
  fs.mkdirSync(proj, { recursive: true });
  fs.writeFileSync(path.join(proj, "hyperframes.json"), "{}\n");
  node("motion-md.mjs", ["write", "--personality", "editorial-mask", "--out", path.join(TMP, "rrun", "motion.md")]);
  fs.writeFileSync(path.join(TMP, "rrun", "reel.json"), JSON.stringify({ title: "t", aspect: "9:16", fps: 30, footage_dir: raw, motion: path.join(TMP, "rrun", "motion.md"), cards_by: "swatch", timeline: [{ type: "card", text: "Opening", duration: 5 }, { type: "clip", clip: "a.mp4", in: 0.5, out: 3.5, transition_in: "cut" }, { type: "clip", clip: "b rot.mp4", in: 0, out: 3, transition_in: "wipe" }], overlays: [{ text: "Name", sub: "Role", start: 6, duration: 3 }] }));
  const bd = node("reel.mjs", ["build", "--reel", path.join(TMP, "rrun", "reel.json"), "--project-dir", proj, "--no-lint"]);
  let bj = {};
  try {
    bj = JSON.parse(bd.stdout);
  } catch {}
  const idx = fs.existsSync(path.join(proj, "index.html")) ? fs.readFileSync(path.join(proj, "index.html"), "utf8") : "";
  // 5s card + 3s + 3s, minus one editorial-mask scale step (450ms) for the wipe
  ok("reel build times the cut (card sized to 5s, wipe overlaps one scale step)", bd.status === 0 && Math.abs(bj.total_s - 10.55) < 0.06, bd.stderr || JSON.stringify({ total: bj.total_s, warnings: bj.warnings }));
  const staged = fs.existsSync(path.join(proj, "assets", "footage")) ? fs.readdirSync(path.join(proj, "assets", "footage")) : [];
  const dims = staged.map((f) => spawnSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height,avg_frame_rate", "-of", "csv=p=0", path.join(proj, "assets", "footage", f)], { encoding: "utf8" }).stdout.trim());
  ok("reel segments conformed to 1080x1920 at 30fps; one audio track per sounding clip", staged.length === 2 && dims.every((d) => d === "1080,1920,30/1") && (idx.match(/<audio /g) || []).length === 1 && (idx.match(/<video /g) || []).length === 2, JSON.stringify(dims));
  ok("reel cards, overlays and the wipe obey motion.md", bj.checks && bj.checks.obey && bj.checks.obey.status === "clean" && fs.existsSync(path.join(proj, "compositions", "reel-card-01.html")) && fs.existsSync(path.join(proj, "compositions", "reel-overlay-01.html")), JSON.stringify(bj.checks && bj.checks.obey));
  fs.writeFileSync(path.join(TMP, "rrun", "bad.json"), JSON.stringify({ footage_dir: raw, timeline: [{ type: "clip", clip: "a.mp4", in: 3, out: 9 }, { type: "clip", clip: "missing.mov" }] }));
  const bad3 = node("reel.mjs", ["build", "--reel", path.join(TMP, "rrun", "bad.json"), "--project-dir", path.join(TMP, "videos", "bad"), "--no-lint"]);
  ok("reel build lists every problem before touching anything", bad3.status === 1 && /past the clip's end/.test(bad3.stderr) && /missing\.mov/.test(bad3.stderr) && !fs.existsSync(path.join(TMP, "videos", "bad")), bad3.stderr);
  // Claude-authored card: refused while missing, mounted and obey-checked once written
  const proj2 = path.join(TMP, "videos", "reel2");
  fs.mkdirSync(proj2, { recursive: true });
  fs.writeFileSync(path.join(proj2, "hyperframes.json"), "{}\n");
  fs.writeFileSync(path.join(TMP, "rrun", "reel2.json"), JSON.stringify({ title: "t2", aspect: "9:16", fps: 30, footage_dir: raw, motion: path.join(TMP, "rrun", "motion.md"), timeline: [{ type: "card", text: "Hello", duration: 3 }, { type: "clip", clip: "a.mp4", in: 0, out: 2 }] }));
  const miss = node("reel.mjs", ["build", "--reel", path.join(TMP, "rrun", "reel2.json"), "--project-dir", proj2, "--no-lint"]);
  const br = node("reel.mjs", ["briefs", "--reel", path.join(TMP, "rrun", "reel2.json"), "--project-dir", proj2]);
  const brief = path.join(proj2, "compositions", "cards", "card-01.brief.md");
  ok("reel refuses a missing Claude card and writes its brief", miss.status === 1 && /card-01/.test(miss.stderr) && br.status === 0 && fs.existsSync(brief) && /Motion contract/.test(fs.readFileSync(brief, "utf8")), miss.stderr + br.stderr);
  fs.writeFileSync(path.join(proj2, "compositions", "cards", "card-01.html"), `<!doctype html><html><head><meta charset="UTF-8"></head><body><template><style>#root{position:absolute;inset:0;width:1080px;height:1920px;background:#f4f1ea}#root h1{position:absolute;left:120px;top:800px;font:700 120px/1 Inter,sans-serif;color:#111}</style><div id="root" data-composition-id="card-01" data-width="1080" data-height="1920"><h1>Hello</h1></div><script>(function(){var r=document.querySelector('[data-composition-id="card-01"]');var tl=gsap.timeline({paused:true});tl.fromTo(r.querySelector("h1"),{clipPath:"inset(0% 0% 100% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:0.7,ease:"expo.out"},0.2);window.__timelines=window.__timelines||{};window.__timelines["card-01"]=tl;})();</script></template></body></html>`);
  const bd2 = node("reel.mjs", ["build", "--reel", path.join(TMP, "rrun", "reel2.json"), "--project-dir", proj2, "--no-lint"]);
  let bj2 = {};
  try {
    bj2 = JSON.parse(bd2.stdout);
  } catch {}
  ok("reel mounts Claude's card and obey checks it", bd2.status === 0 && bj2.checks && bj2.checks.obey.status === "clean" && /compositions\/cards\/card-01\.html/.test(fs.readFileSync(path.join(proj2, "index.html"), "utf8")), bd2.stderr || JSON.stringify(bj2.checks));
} else console.log("skip  footage reels (no ffmpeg)");

// 9
{
  const tv = node("taxonomy.mjs", ["validate"]);
  let tj = {};
  try {
    tj = JSON.parse(tv.stdout);
  } catch {}
  ok("taxonomy validates (32 dimensions, 900+ terms, combinations resolve)", tv.status === 0 && tj.dimensions >= 32 && tj.options >= 900 && tj.combinations >= 30, (tj.problems || []).slice(0, 5).join("; ") || tv.stderr);
  const langs = JSON.parse(fs.readFileSync(path.join(HERE, "..", "taxonomy", "dimensions", "motion-language.json"), "utf8")).options.map((o) => o.id);
  const bad = [];
  for (const id of quick ? langs.slice(0, 4) : langs) {
    const d = path.join(TMP, "lang", id);
    const t = node("tasting.mjs", ["--scenes", "Tax season. Again.::the shoebox wins || One tap. Done.", "--personalities", `lang-${id},lang-${id}`, "--out", d]);
    node("motion-md.mjs", ["write", "--language", id, "--out", path.join(d, "motion.md")]);
    const o = node("obey.mjs", ["--project", d]);
    if (t.status !== 0 || o.status !== 0 || !/0 error\(s\), 0 warning\(s\)/.test(o.stdout)) bad.push(`${id}: ${(t.stderr || o.stdout.split("\n")[0]).slice(0, 120)}`);
  }
  ok(`every motion-language swatch obeys its own contract (${quick ? 4 : langs.length})`, !bad.length, bad.join(" | "));

  const { readDesignMd, toFrameMd } = await import(path.join(HERE, "lib", "design-md.mjs"));
  const { readLook } = await import(path.join(HERE, "lib", "common.mjs"));
  const fx = path.join(TMP, "brands");
  fs.mkdirSync(fx, { recursive: true });
  fs.writeFileSync(path.join(fx, "spec.md"), `---\nname: Kinpaku\ncolors:\n  # anchors\n  gold: "oklch(84% 0.19 80.46)"   # primary accent\n\n  lacquer: "oklch(7% 0.006 95)"   # page ground\n  champagne: "oklch(91% 0 0)"     # headlines\n  success: "#22C55E"\ntypography:\n  display:\n    fontFamily: Alumni Sans\n    fontWeight: 600\n  body:\n    fontFamily: Albert Sans\n  mono:\n    fontFamily: SFMono-Regular\nrounded:\n  md: 6px\n---\n\n## Overview\n\nGold on lacquer.\n\n## Do and Do Not\n\n### Do\n- Use gold once per frame.\n\n### Do Not\n- Never use pure white.\n`);
  fs.writeFileSync(path.join(fx, "stitch.md"), `# Design System: Calm\n\n## 2. Color Palette & Roles\n- **Canvas White** (#F9FAFB) — Primary background surface\n- **Charcoal Ink** (#18181B) — Primary text\n- **Emerald Signal** (#10B981) — accent for growth\n\n## 3. Typography Rules\n- **Display:** \`Geist\`, \`Satoshi\` — tight tracking. \`Inter\` is BANNED for premium contexts\n- **Body:** Same family at weight 400\n\n### Banned Fonts\n- \`Inter\` — banned\n`);
  fs.writeFileSync(path.join(fx, "table.md"), `# Deck\n\n## Color\n\n| Token | Hex | Meaning |\n|---|---|---|\n| \`INK\` | \`1A1A1A\` | the answer |\n| \`INK_SOFT\` | \`333333\` | support |\n| \`CARD_TINT\` | \`F5F5F5\` | containment |\n| \`WHITE\` | \`FFFFFF\` | Background |\n\n## Typography\n\n- **Headlines:** Cambria bold\n- **Body:** Calibri\n`);
  const A = readDesignMd(path.join(fx, "spec.md")), B = readDesignMd(path.join(fx, "stitch.md")), C = readDesignMd(path.join(fx, "table.md"));
  ok("DESIGN.md spec: oklch colors, comment roles, nested fonts, platform-font mapping, rules", A.roles.accent === A.colors.find((c) => c.name === "gold").hex && A.roles.canvas === A.colors.find((c) => c.name === "lacquer").hex && A.fonts.display.family === "Alumni Sans" && A.fonts.mono.family === "JetBrains Mono" && A.radii.md === 6 && A.dos.length === 1 && A.donts.length === 1 && !A.roles.status.includes(A.roles.accent) === true, JSON.stringify({ roles: A.role_names, fonts: A.fonts }));
  ok("DESIGN.md prose: roles from descriptions, banned fonts skipped, 'same family' body", B.roles.canvas === "#f9fafb" && B.roles.ink === "#18181b" && B.roles.accent === "#10b981" && B.fonts.display.family === "Geist" && B.fonts.body.family === "Geist", JSON.stringify({ roles: B.roles, fonts: B.fonts }));
  ok("DESIGN.md table: bare hex, monochrome accent, deck fonts mapped", C.roles.canvas === "#ffffff" && C.roles.ink === "#1a1a1a" && C.roles.accent === "#333333" && C.fonts.display.family === "Caladea" && C.fonts.body.family === "Carlito", JSON.stringify({ roles: C.roles, fonts: C.fonts }));
  fs.writeFileSync(path.join(fx, "frame.md"), toFrameMd(A));
  const L = readLook(path.join(fx, "frame.md"));
  ok("brand frame.md reads back (canvas, ink, accent, display face)", L.bg === A.roles.canvas && L.ink === A.roles.ink && L.accent === A.roles.accent && L.font === "Alumni Sans", JSON.stringify(L));

  fs.writeFileSync(path.join(TMP, "dec.json"), JSON.stringify({ subject: "Tally", picks: { format: "product-launch-film", "ui-treatment": ["simplified-ui"], "ui-treatment:radius": "medium", "visual-style": "swiss-international", "motion-language": "precise" }, decided_by: { "visual-style": "agent" } }));
  const dc = node("direction.mjs", ["compile", "--decisions", path.join(TMP, "dec.json"), "--out", path.join(TMP, "direction")]);
  const dmd = fs.existsSync(path.join(TMP, "direction", "DIRECTION.md")) ? fs.readFileSync(path.join(TMP, "direction", "DIRECTION.md"), "utf8") : "";
  ok("direction compiles: style name, formula, Do and Not lines, receipts", dc.status === 0 && /^# Direction: Swiss \/ International Typographic Style, simplified-UI product launch film, precise motion/m.test(dmd) && /\*\*Do:\*\*/.test(dmd) && /Not to be confused with/.test(dmd) && /decided by Claude/.test(dmd), dc.stderr || dmd.slice(0, 200));
  fs.writeFileSync(path.join(TMP, "dec-bad.json"), JSON.stringify({ picks: { "visual-style": "swiss-internationale", colour: "neon" } }));
  const dbad = node("direction.mjs", ["compile", "--decisions", path.join(TMP, "dec-bad.json"), "--out", path.join(TMP, "direction-bad")]);
  ok("direction rejects unknown terms with the closest valid ones", dbad.status === 1 && /swiss-international/.test(dbad.stderr) && /color/.test(dbad.stderr), dbad.stderr);

  const lk = node("design.mjs", ["looks", "--decisions", path.join(TMP, "dec0.json").replace("dec0", "dec"), "--out", path.join(TMP, "looks"), "--count", "6"]);
  let lj = {};
  try {
    lj = JSON.parse(fs.readFileSync(path.join(TMP, "looks", "looks.json"), "utf8"));
  } catch {}
  const styles = new Set((lj.looks || []).map((x) => x.visual_style.id + "|" + x.type.pairing + "|" + x.palette.canvas));
  const allRead = (lj.looks || []).every((x) => !(readLook(path.join(TMP, "looks", x.id, "frame.md")).defaulted || []).length);
  ok("design directions: 6 distinct looks, each with a frame.md that reads back", lk.status === 0 && (lj.looks || []).length === 6 && styles.size === 6 && allRead, lk.stderr || [...styles].join(" ; "));
  fs.writeFileSync(path.join(TMP, "dec0.json"), JSON.stringify({ picks: {} }));
  const lb = node("design.mjs", ["looks", "--decisions", path.join(TMP, "dec0.json"), "--out", path.join(TMP, "looks-brand"), "--count", "4", "--brand", path.join(fx, "stitch.md")]);
  let lbj = {};
  try {
    lbj = JSON.parse(fs.readFileSync(path.join(TMP, "looks-brand", "looks.json"), "utf8"));
  } catch {}
  const brandColors = new Set([B.roles.canvas, B.roles.ink, B.roles.accent, B.roles.surface].filter(Boolean));
  ok("brand-locked looks keep the brand's colors and fonts", lb.status === 0 && (lbj.looks || []).length === 4 && lbj.looks.every((x) => brandColors.has(x.palette.canvas) && x.type.display.family === "Geist"), lb.stderr || JSON.stringify((lbj.looks || []).map((x) => x.palette.canvas)));

  // complete directions: fitting, distinct visual styles, never the generic default, each with a board; picking one merges its stack
  fs.writeFileSync(path.join(TMP, "decd.json"), JSON.stringify({ subject: "Tally", picks: { format: "product-launch-film" } }));
  const dr = node("direction.mjs", ["directions", "--decisions", path.join(TMP, "decd.json"), "--out", path.join(TMP, "dirs"), "--headline", "Tax season. Again."]);
  let dj = {};
  try {
    dj = JSON.parse(fs.readFileSync(path.join(TMP, "dirs", "directions.json"), "utf8"));
  } catch {}
  const ds = dj.directions || [];
  const vstyles = new Set(ds.map((x) => [].concat(x.picks["visual-style"] || [x.id])[0]));
  ok("directions: three distinct, fitting, never generic, each with a board image", dr.status === 0 && ds.length === 3 && vstyles.size === 3 && ds.every((x) => x.picks.format && x.picks.format[0] === "product-launch-film" && x.image && fs.existsSync(path.join(TMP, x.image)) && !["saas-minimal", "corporate-flat", "clean-minimal"].includes([].concat(x.picks["visual-style"] || [])[0])) && !!dj.passed_over, dr.stderr || JSON.stringify(ds.map((x) => [x.id, x.image])));
  const more = node("direction.mjs", ["directions", "--decisions", path.join(TMP, "decd.json"), "--out", path.join(TMP, "dirs2"), "--no-images", "--exclude", ds.map((x) => x.id).join(",")]);
  let mj = {};
  try {
    mj = JSON.parse(more.stdout);
  } catch {}
  ok("directions: \"show 3 more\" never repeats one", (mj.directions || []).length === 3 && mj.directions.every((x) => !ds.some((y) => y.id === x.id)), more.stderr);
  if (ds[0]) {
    node("direction.mjs", ["pick-direction", "--directions", path.join(TMP, "dirs", "directions.json"), "--id", ds[0].id, "--decisions", path.join(TMP, "decd.json")]);
    const after = JSON.parse(fs.readFileSync(path.join(TMP, "decd.json"), "utf8"));
    ok("pick-direction merges the direction's stack and keeps the user's picks", [].concat(after.picks.format)[0] === "product-launch-film" && Object.keys(after.picks).length > 5 && after.direction_card.id === ds[0].id, JSON.stringify(after.picks));
  }

  // the style library: hundreds of complete styles that validate; suggestions are distinct; picking one writes a look
  {
    const v = node("presets.mjs", ["validate"]);
    let vj = {};
    try { vj = JSON.parse(v.stdout); } catch {}
    ok("style library validates (terms, recipe vocabulary, contrast, no look-alikes) with 200+ styles", v.status === 0 && vj.presets >= 200 && vj.families >= 10, (vj.problems || []).slice(0, 5).join("; ") || v.stderr);
    fs.writeFileSync(path.join(TMP, "decp.json"), JSON.stringify({ subject: "Tally", picks: { format: "product-launch-film" } }));
    const sg = node("presets.mjs", ["suggest", "--decisions", path.join(TMP, "decp.json"), "--count", "3"]);
    let sj = {};
    try { sj = JSON.parse(sg.stdout); } catch {}
    const ss = sj.suggestions || [];
    ok("style suggestions: three from different families, one unusual", ss.length === 3 && new Set(ss.map((x) => x.family)).size === 3 && ss.some((x) => x.rare), sg.stdout.slice(0, 300));
    if (ss[0]) {
      const pk = node("presets.mjs", ["pick", "--id", ss[0].id, "--decisions", path.join(TMP, "decp.json"), "--out", path.join(TMP, "preset")]);
      const dd = JSON.parse(fs.readFileSync(path.join(TMP, "decp.json"), "utf8"));
      const lk = readLook(path.join(TMP, "preset", "frame.md"));
      ok("picking a style merges its terms and writes a frame.md that reads back", pk.status === 0 && dd.style_preset.id === ss[0].id && dd.picks["visual-style"] && !(lk.defaulted || []).length, pk.stderr);
    }
    // every style exports as a DESIGN.md design system that reads back as a brand (colors by role, display face)
    const ex = node("design-system.mjs", ["export-all", "--out", path.join(TMP, "systems")]);
    const idx = JSON.parse(fs.readFileSync(path.join(TMP, "systems", "index.json"), "utf8"));
    const pdir = path.join(HERE, "..", "taxonomy", "presets");
    const lib = Object.fromEntries(fs.readdirSync(pdir).filter((f) => f.endsWith(".json") && !f.startsWith("_")).flatMap((f) => JSON.parse(fs.readFileSync(path.join(pdir, f), "utf8")).presets.map((p) => [p.id, p])));
    const { readDesignMd } = await import("./lib/design-md.mjs");
    const off = [];
    for (const s0 of idx) {
      const B = readDesignMd(path.join(TMP, "systems", s0.file));
      const P = lib[s0.id].recipe;
      if (B.roles.canvas.toLowerCase() !== P.palette.canvas.toLowerCase() || B.roles.ink.toLowerCase() !== P.palette.ink.toLowerCase() || (B.roles.accent || "").toLowerCase() !== P.palette.accent.toLowerCase() || (B.fonts.display || {}).family !== P.fonts.display) off.push(s0.id);
      if (off.length > 5) break;
    }
    ok("every style exports as a DESIGN.md that reads back exactly (canvas, ink, accent, display face)", ex.status === 0 && idx.length === Object.keys(lib).length && !off.length, off.join(", ") || ex.stderr);
    const docs = path.join(HERE, "..", "..", "..", "docs", "assets");
    if (fs.existsSync(path.join(docs, "presets.js"))) {
      const same = fs.readFileSync(path.join(docs, "presets.js"), "utf8") === fs.readFileSync(path.join(HERE, "..", "console", "presets.js"), "utf8");
      const n = JSON.parse(fs.readFileSync(path.join(docs, "presets.json"), "utf8")).presets.length;
      ok("the website's style library matches the skill's (run presets.mjs site --out docs/assets)", same && n === vj.presets, `renderer same: ${same}, site ${n} vs library ${vj.presets}`);
    }
  }

  const page = fs.readFileSync(path.join(HERE, "..", "console", "index.html"), "utf8");
  let parses = true;
  try {
    new Function(page.match(/<script>([\s\S]*)<\/script>\s*<\/body>/)[1]);
  } catch {
    parses = false;
  }
  ok("console page script parses (every panel)", parses && /direction: function/.test(page) && /choiceCards\(/.test(page) && /d\.directions/.test(page) && /brand: function/.test(page) && /styleframes: function/.test(page));
}

// 10. setup and updates: setup.sh finds Node or says how to get it; the skill's VERSION matches the plugin manifest; a newer release is reported with how
//     to update; offline or disabled the check is silent and never fails the run
{
  const ver = fs.readFileSync(path.join(HERE, "..", "VERSION"), "utf8").trim();
  const manifest = path.join(HERE, "..", "..", "..", ".claude-plugin", "plugin.json");
  const pv = fs.existsSync(manifest) ? JSON.parse(fs.readFileSync(manifest, "utf8")).version : ver;
  ok("VERSION matches .claude-plugin/plugin.json", ver === pv, `${ver} vs ${pv}`);
  const uenv = { ...env, RASA_DIRECTOR_UPDATE_BASE: "http://127.0.0.1:9", RASA_DIRECTOR_AUTO_UPDATE: "" };
  const u = (args, extra = {}) => spawnSync(process.execPath, [path.join(HERE, "update.mjs"), ...args], { encoding: "utf8", env: { ...uenv, ...extra }, cwd: TMP, timeout: 20000 });
  const j = (r) => { try { return JSON.parse(r.stdout); } catch { return {}; } };
  const sim = j(u(["check", "--latest", "99.0.0"]));
  ok("update check: a newer release is reported with the way to update", sim.behind === true && sim.current === ver && !!sim.method && !!sim.command && /99\.0\.0/.test(sim.message || ""), JSON.stringify(sim));
  const off = u(["check", "--force"]);
  ok("update check: offline is silent and exits 0", off.status === 0 && j(off).checked === "offline" && j(off).behind === false, off.stderr);
  ok("update check: RASA_DIRECTOR_NO_UPDATE_CHECK=1 skips it", j(u(["check"], { RASA_DIRECTOR_NO_UPDATE_CHECK: "1" })).checked === "skipped");
  // setup.sh finds Node off the PATH, and fails with a fix (not silently) when there is none
  const sh = (extra) => spawnSync("bash", [path.join(HERE, "setup.sh"), "--node-only"], { encoding: "utf8", env: { ...env, PATH: "/usr/bin:/bin", ...extra }, cwd: TMP, timeout: 30000 });
  const nh = path.join(TMP, "nodehome");
  fs.mkdirSync(path.join(nh, "node", "bin"), { recursive: true });
  fs.symlinkSync(process.execPath, path.join(nh, "node", "bin", "node"));
  const found = sh({ RASA_DIRECTOR_HOME: nh });
  ok("setup finds Node off the PATH and prints the PATH prefix", found.status === 0 && found.stdout.includes(`NODE=${path.join(nh, "node", "bin", "node")}`) && /PATH_PREFIX=/.test(found.stdout) && /READY/.test(found.stdout), found.stdout + found.stderr);
  const none = sh({ RASA_DIRECTOR_HOME: path.join(TMP, "nonode"), RASA_DIRECTOR_SKIP_NODE_SEARCH: "1", RASA_DIRECTOR_NO_NODE_DOWNLOAD: "1" });
  ok("setup without Node says how to fix it and fails", none.status === 1 && /PROBLEM: Node >= 20 is required/.test(none.stderr) && /FAILED/.test(none.stdout), none.stdout + none.stderr);
}

// 11. story: the device catalog validates; pick returns three devices that differ (family, protagonist, visual world,
//     >= 5 of 7 axes), deterministically per seed; check ships a concept pitch and rejects the cliche arc
{
  const v = node("story.mjs", ["validate"]);
  let vj = {};
  try { vj = JSON.parse(v.stdout); } catch {}
  ok("story: device catalog validates (60+ narrative devices)", v.status === 0 && vj.devices >= 60, v.stdout.slice(0, 300) + v.stderr);
  const sd = path.join(TMP, "story");
  fs.mkdirSync(sd, { recursive: true });
  const truth = path.join(sd, "truth.json");
  fs.writeFileSync(truth, JSON.stringify({ product: { name: "Lintel" }, tags: ["ai", "devtool"], format: { format: "launch", length: "36" }, tone: ["deadpan"], transformation: "from PRs that wait to PRs already reviewed", emotional_truth: "the guilty LGTM", enemy: ["the review queue"], objects: ["the diff", "the LGTM comment", "the pager alert", "the review badge", "conflict markers", "the CI checkmark", "the nit: prefix", "the blame gutter"], forms: ["pull request", "review thread", "commit log", "incident postmortem", "changelog"], words: ["Lintel", "LGTM", "Apply suggestion"], proof: ["Reviews a 400-line PR in under 90 seconds (brief)"], competitors: ["Rival"], cliche: ["hook", "montage", "introducing", "f1", "f2", "f3"] }));
  const picks = ["a", "b", "c"].map((s) => node("story.mjs", ["pick", "--truth", truth, "--seed", s]));
  const P = picks.map((r) => { try { return JSON.parse(r.stdout); } catch { return { picks: [], distance: { matrix: [] } }; } });
  const differ = P.every((r) => r.picks.length === 3 && ["family", "protagonist", "visual_world"].every((k) => new Set(r.picks.map((p) => p.axes[k])).size === 3) && r.distance.matrix.flat().every((d) => d === null || d >= 5));
  const again = node("story.mjs", ["pick", "--truth", truth, "--seed", "a"]);
  ok("story: pick gives Sure/Bold/Wild that differ (family, protagonist, visual world, >= 5 of 7 axes); same seed, same picks", differ && P[0].picks.map((p) => p.label).join() === "Sure,Bold,Wild" && again.stdout === picks[0].stdout, picks.map((r) => r.stderr).join(" "));
  const beat = (name, on_screen, duration_s, extra = {}) => ({ name, on_screen, visual: `${name}, in the review thread`, duration_s, ...extra });
  const scores = { originality: 4, clarity: 4, fit: 5, memorability: 4, feasibility: 5 };
  const good = { title: "Unmerged", logline: "A 2 am outage rewinds to the one line nobody read.", device: "rewind", beats: [beat("The pager alert", "02:14 · checkout-api down", 4), beat("Rewind the postmortem", "deploy ← merge", 7), beat("The LGTM comment un-types", "LGTM · 11:04 pm", 6), beat("The diff, unread", "one hunk", 6), beat("Lintel reads it", "Apply suggestion", 6, { turn: true }), beat("The pager stays dark", "Lintel reads every line.", 7)], first_4s: "A pager alert that plays backwards", clear_by_s4: true, swap_test: { competitor: "Rival", result: "breaks", why: "the LGTM and the comment label are Lintel's own" }, grounded_claims: [], honest_demo: true, build: { hardest_shot: "the reverse scrub", needs_live_action: false }, scores };
  const bad = { title: "Meet Lintel", logline: "Meet Lintel, the AI reviewer that supercharges your team.", device: "before-after", beats: [beat("Hook", "PRs wait 2 days?", 3), beat("Problem montage", "Code review is broken", 3), beat("Introducing Lintel", "Introducing Lintel", 3), beat("Feature 1", "AI comments", 3), beat("Feature 2", "Suggestions", 3), beat("Feature 3", "Integrations", 3), beat("Social proof", "Trusted by 500 teams", 3), beat("CTA", "Try it free", 3)], first_4s: "a stat", clear_by_s4: true, swap_test: { competitor: "Rival", result: "survives" }, honest_demo: true, scores };
  fs.writeFileSync(path.join(sd, "good.json"), JSON.stringify(good));
  fs.writeFileSync(path.join(sd, "bad.json"), JSON.stringify(bad));
  const cg = node("story.mjs", ["check", "--pitch", path.join(sd, "good.json"), "--truth", truth]);
  const cb = node("story.mjs", ["check", "--pitch", path.join(sd, "bad.json"), "--truth", truth]);
  let rb = { gates: [] };
  try { rb = JSON.parse(cb.stdout); } catch {}
  ok("story: check ships a distinctive pitch (exit 0)", cg.status === 0, cg.stdout.slice(0, 400) + cg.stderr);
  ok("story: check rejects the cliche arc (default beats in order, swap test survives, ungrounded numbers; exit 2)", cb.status === 2 && ["G1", "G2", "G4"].every((g) => rb.gates.some((x) => x.id === g && !x.pass)), cb.stdout.slice(0, 400) + cb.stderr);
}
// 12. anti-slop: a project full of AI-video tells fails with fixes; a clean one passes
{
  const mk = (name, html, scenes, bedSeconds) => {
    const d = path.join(TMP, "slop", name);
    fs.mkdirSync(path.join(d, "compositions"), { recursive: true });
    fs.mkdirSync(path.join(d, "assets"), { recursive: true });
    fs.writeFileSync(path.join(d, "compositions", "s1.html"), html);
    fs.writeFileSync(path.join(d, "scenes.json"), JSON.stringify({ scenes }));
    spawnSync("ffmpeg", ["-loglevel", "error", "-y", "-f", "lavfi", "-i", `sine=frequency=330:duration=${bedSeconds}`, path.join(d, "assets", "music-bed.wav")]);
    return d;
  };
  const badHtml = `<style>.h{text-shadow:0 0 18px #0ff}.k{text-shadow:0 0 12px #f0f}.bg{background:linear-gradient(135deg,#7c3aed,#2563eb)}</style><div class="bg"><h1 class="h">Introducing Tally — seamless bookkeeping!</h1><span>00:12</span><span>120 BPM</span></div><p>It's not just an app, it's your accountant.</p><script>gsap.to(".x",{y:10,repeat:-1,yoyo:true});${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => `tl.from(".e${i}",{opacity:0,y:40,duration:0.6})`).join(";")}</script>`;
  const bad = mk("bad", badHtml, [{ title: "a", duration: 4, on_screen: "Streamline your workflow with our amazing new platform today" }, { title: "b", duration: 4 }, { title: "c", duration: 4 }, { title: "end", duration: 1, on_screen: "Tally" }], 5);
  const good = mk("good", `<style>h1{font-family:"Bricolage Grotesque"}</style><h1>Paper forgets.</h1><p>Tally reads every receipt the moment you get it.</p><script>tl.from(".h",{clipPath:"inset(0 100% 0 0)"});tl.from(".p",{scale:0.9,opacity:0});tl.fromTo(".r",{xPercent:-100},{xPercent:0});tl.from(".n",{y:30,opacity:0});tl.from(".l",{drawSVG:0});tl.from(".c",{x:-60});tl.from(".b",{rotation:-8,scale:0.8});tl.from(".t",{opacity:0})</script>`, [{ title: "Hook", duration: 2.5, on_screen: "Paper forgets." }, { title: "Year", duration: 6, on_screen: "Twelve months of paper." }, { title: "Tap", duration: 4.5, on_screen: "One tap." }, { title: "End", duration: 3, on_screen: "Tally" }], 20);
  const rb = node("slop.mjs", ["--project", bad, "--json"]);
  const rg = node("slop.mjs", ["--project", good, "--json"]);
  let jb = { findings: [] };
  try { jb = JSON.parse(rb.stdout); } catch {}
  const rules = new Set(jb.findings.map((f) => f.rule));
  ok("anti-slop: generic copy, \"not X, it's Y\", neon glow, AI gradient, corner labels, idle loops, everything fading up, unreadable text, no end hold and a looping bed are caught (exit 2)", rb.status === 2 && ["generic-copy", "not-x-its-y", "neon-glow-text", "ai-gradient", "corner-labels", "idle-breathing", "uniform-entrances", "unreadable", "no-end-hold", "music-loop"].every((r) => rules.has(r)), [...rules].join(", ") + rb.stderr);
  ok("anti-slop: a clean project passes", rg.status === 0, rg.stdout.slice(0, 300));
}
// 13. sound: a 120 BPM track with a real ending is read right, fitted without a loop, rendered to -14 LUFS;
//     a too-short track says needs_longer; a looped bed is caught; SFX obey causality and the budget
{
  const d = path.join(TMP, "sound");
  fs.mkdirSync(d, { recursive: true });
  const J = (r) => { try { return JSON.parse(r.stdout); } catch { return {}; } };
  // kick on every beat (accented downbeats), a 17-bar chord cycle (no verbatim repeats), final hit at 40 s ringing out
  const expr = "0.5*(lt(t\\,40)*(sin(2*PI*55*t)*exp(-25*mod(t\\,0.5))*if(lt(mod(t\\,2)\\,0.5)\\,1\\,0.55)+0.12*sin(2*PI*196*pow(2\\,mod(5*floor(t/2)\\,17)/12)*t)+0.08*sin(2*PI*294*pow(2\\,mod(5*floor(t/2)\\,17)/12)*t))+gte(t\\,40)*exp(-2.2*(t-40))*(0.9*sin(2*PI*55*t)+0.3*sin(2*PI*220*t)))";
  const track = path.join(d, "track.wav");
  spawnSync("ffmpeg", ["-loglevel", "error", "-y", "-f", "lavfi", "-i", `aevalsrc='${expr}':s=44100:d=45`, track]);
  const a = J(node("sound.mjs", ["analyze", "--track", track]));
  ok("sound: analyze reads 120 BPM, bars on the beat and the real ending at 40 s", Math.abs(a.bpm - 120) < 1 && Math.abs(a.bars?.[1] - 2) < 0.03 && a.ending?.natural && Math.abs(a.ending.hit - 40) < 0.05, JSON.stringify({ bpm: a.bpm, bars: a.bars?.slice(0, 2), ending: a.ending }));
  const f = node("sound.mjs", ["fit", "--track", track, "--film", "30", "--out", path.join(d, "plan.json")]);
  const p = J(f);
  ok("sound: fit plans 30 s within +/-1 s on bar lines, no repeat", f.status === 0 && Math.abs(p.film_duration - 30) <= 1 && !p.needs_longer && p.shape !== "repeat" && p.grid?.downbeats?.length > 10, f.stderr || JSON.stringify({ shape: p.shape, film: p.film_duration }));
  const r = J(node("sound.mjs", ["render", "--plan", path.join(d, "plan.json"), "--out", path.join(d, "bed.wav")]));
  ok("sound: render masters the bed to -14 LUFS, true peak <= -1 dBTP", Math.abs(r.lufs + 14) <= 1 && r.true_peak <= -1, JSON.stringify(r).slice(0, 200));
  const c = node("sound.mjs", ["check", "--audio", path.join(d, "bed.wav")]);
  ok("sound: check passes the fitted bed", c.status === 0, c.stdout.slice(0, 300));
  const long = J(node("sound.mjs", ["fit", "--track", track, "--film", "70"]));
  ok("sound: a 45 s track for a 70 s film says needs_longer", long.needs_longer === true, JSON.stringify({ shape: long.shape, needs_longer: long.needs_longer }));
  spawnSync("ffmpeg", ["-loglevel", "error", "-y", "-stream_loop", "2", "-i", track, "-t", "100", path.join(d, "looped.wav")]);
  const cl = node("sound.mjs", ["check", "--audio", path.join(d, "looped.wav")]);
  ok("sound: check catches a looped bed (exit 2, audible loop)", cl.status === 2 && /audible loop/.test(cl.stdout), `exit ${cl.status}`);
  fs.writeFileSync(path.join(d, "scenes.json"), JSON.stringify({ narration: true, scenes: [{ title: "a", duration: 10, voiceover: "x" }, { title: "b", duration: 10, voiceover: "y" }, { title: "c", duration: 10 }] }));
  fs.writeFileSync(path.join(d, "events.json"), JSON.stringify({ events: [{ id: "fade", t: 1, kind: "fade" }, { id: "cut", t: 10, kind: "whoosh" }, { id: "l1", t: 12, kind: "land", group: "g" }, { id: "l2", t: 12.3, kind: "land", group: "g" }, { id: "l3", t: 12.6, kind: "land", group: "g" }, ...[0, 0.2, 0.4, 0.6].map((x, i) => ({ id: `c${i}`, t: 20 + x, kind: "click" }))] }));
  const sx = J(node("sound.mjs", ["sfx-plan", "--scenes", path.join(d, "scenes.json"), "--events", path.join(d, "events.json")]));
  const why = (id) => (sx.skipped || []).find((s) => s.event === id)?.why || "";
  const inWin = (sx.cues || []).filter((q) => q.t >= 20 && q.t < 21).length;
  ok("sfx-plan: no sound for a fade, no whoosh on an ordinary cut, stagger keeps first+last, <= 3 per second, never ahead of the picture", /not a causal/.test(why("fade")) && /ordinary transition/.test(why("cut")) && /stagger/.test(why("l2")) && inWin <= 3 && (sx.cues || []).every((q) => q.start + (q.sync_point || 0) >= q.t - 0.001 && q.start + (q.sync_point || 0) <= q.t + 0.034), JSON.stringify(sx.skipped).slice(0, 400));
}

fs.rmSync(TMP, { recursive: true, force: true });
console.log(failed ? `\n${failed} check(s) failed` : "\nall checks passed");
process.exit(failed ? 1 : 0);
