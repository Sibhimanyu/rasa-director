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
  node("console.mjs", ["stop", "--run", run]);
}

fs.rmSync(TMP, { recursive: true, force: true });
console.log(failed ? `\n${failed} check(s) failed` : "\nall checks passed");
process.exit(failed ? 1 : 0);
