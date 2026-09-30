#!/usr/bin/env node
// Director's Console: the local HTML page where the user sees and controls every
// Rasa Director step (the full list is STEPS below: brief, brand, route, footage,
// direction, story, scenes, look, motion, style frames, cut, …, build, render). The agent pushes each step's options into session.json; the user's
// clicks land in actions.jsonl; the agent picks them up with `wait`.
// Zero dependencies; binds 127.0.0.1 only; POSTs need the per-session token.
//
//   node console.mjs serve --run <run dir> [--root <workspace>] [--port 0] [--open]   (detaches; prints the URL)
//   node console.mjs push  --run <dir> --step <id> (--data '<json>' | --file f.json) [--status awaiting|working|done|skipped] [--current]
//   node console.mjs log   --run <dir> --message "..." [--level info|ok|warn|error] [--stage <id>] [--stage-status working|done|failed]
//   node console.mjs wait  --run <dir> [--step <id>] [--timeout <sec, default 3000>]   -> prints the next action JSON (exit 2 on timeout)
//   node console.mjs record --run <dir> --step <id> --type <type> [--value '<json>'] [--note "..."]   (a choice made in chat)
//   node console.mjs state --run <dir> | url --run <dir> | stop --run <dir>
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import crypto from "node:crypto";
import os from "node:os";
import { spawn, execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { parseArgs, die, SKILL_DIR } from "./lib/common.mjs";

const args = parseArgs();
const cmd = args._[0];
if (!args.run) die("--run <run dir> is required (the .rasa-director/<run> scratch dir)");
const RUN = path.resolve(String(args.run));
fs.mkdirSync(RUN, { recursive: true });
const F = {
  session: path.join(RUN, "session.json"),
  actions: path.join(RUN, "actions.jsonl"),
  consumed: path.join(RUN, "consumed.json"),
  console: path.join(RUN, "console.json"),
};
export const STEPS = ["brief", "brand", "route", "footage", "direction", "concept", "scenes", "look", "motion", "styleframes", "reel", "transitions", "voice", "music", "keyframes", "storyboard", "plan", "build", "render"];

const readJSON = (p, d) => {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return d;
  }
};
// atomic write so the UI never reads half a file
const writeJSON = (p, v) => {
  const tmp = `${p}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(v, null, 2));
  fs.renameSync(tmp, p);
};
const now = () => new Date().toISOString();
function session() {
  return readJSON(F.session, { title: "Rasa Director", current: "brief", steps: {}, updated: now() });
}
function saveSession(s) {
  s.updated = now();
  writeJSON(F.session, s);
}
function parseData() {
  if (args.file) return readJSON(path.resolve(String(args.file)), null) ?? die(`cannot read JSON from ${args.file}`);
  if (args.data) {
    try {
      return JSON.parse(String(args.data));
    } catch (e) {
      die(`--data is not valid JSON: ${e.message}`);
    }
  }
  return {};
}
function readActions() {
  if (!fs.existsSync(F.actions)) return [];
  return fs
    .readFileSync(F.actions, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((l) => {
      try {
        return JSON.parse(l);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}
function appendAction(a) {
  const action = { id: crypto.randomBytes(5).toString("hex"), ts: now(), ...a };
  fs.appendFileSync(F.actions, JSON.stringify(action) + "\n");
  return action;
}

// ---------------------------------------------------------------------------
if (cmd === "push") {
  if (!args.step || !STEPS.includes(args.step)) die(`--step must be one of ${STEPS.join(", ")}`);
  const s = session();
  const prev = s.steps[args.step] || {};
  const data = parseData();
  if (args.title) s.title = String(args.title);
  // a push REPLACES the step's payload (stale options, issues or a "you sent" banner must
  // not survive a re-push); --merge keeps the previous fields for small incremental updates
  const base = args.merge ? prev : {};
  const next = { ...base, ...data, status: args.status || data.status || (args.step === "build" ? "working" : "awaiting"), updated: now() };
  delete next.sent;
  if (args.step === "build" && !args.merge) {
    next.log = data.log || prev.log || [];
    next.stages = data.stages || prev.stages || {};
  }
  s.steps[args.step] = next;
  if (args.current || next.status === "awaiting") s.current = args.step;
  saveSession(s);
  console.log(JSON.stringify({ ok: true, step: args.step, status: s.steps[args.step].status }));
} else if (cmd === "log") {
  const s = session();
  const b = (s.steps.build = s.steps.build || { status: "working", log: [], stages: {} });
  b.log = b.log || [];
  b.stages = b.stages || {};
  if (args.message) b.log.push({ t: now(), level: args.level || "info", msg: String(args.message) });
  if (args.stage) b.stages[args.stage] = args["stage-status"] || "working";
  if (args.stage === "render-gate" && args["stage-status"] === "done") b.status = "done";
  else if (b.status !== "done") b.status = "working";
  // only pull the page to Build while the build is the thing happening (never away from the render gate)
  if (!s.current || ["plan", "build"].includes(s.current)) s.current = "build";
  saveSession(s);
  console.log(JSON.stringify({ ok: true }));
} else if (cmd === "record") {
  if (!args.step || ![...STEPS, "*"].includes(args.step)) die(`--step must be one of ${STEPS.join(", ")} or *`);
  let value = null;
  if (args.value !== undefined) {
    try {
      value = JSON.parse(String(args.value));
    } catch {
      value = String(args.value);
    }
  }
  const a = appendAction({ step: args.step, type: args.type || "choose", value, note: args.note || "", source: "chat" });
  // chat answers count as consumed: the agent already has them
  const consumed = readJSON(F.consumed, []);
  consumed.push(a.id);
  writeJSON(F.consumed, consumed);
  console.log(JSON.stringify(a));
} else if (cmd === "wait") {
  const timeout = Number(args.timeout || 3000) * 1000;
  const start = Date.now();
  let checks = 0;
  const tick = () => {
    // every ~5s: if the console server died, say so instead of waiting forever
    if (++checks % 12 === 0) {
      const c = readJSON(F.console, null);
      if (c && c.pid && !alive(c.pid)) {
        console.log(JSON.stringify({ console_down: true, hint: "restart it with `console.mjs serve --run <dir>`; answers can also come from chat" }));
        process.exit(3);
      }
    }
    const consumed = new Set(readJSON(F.consumed, []));
    const next = readActions().find((a) => !consumed.has(a.id) && (!args.step || a.step === args.step || a.step === "*"));
    if (next) {
      consumed.add(next.id);
      writeJSON(F.consumed, [...consumed]);
      console.log(JSON.stringify(next));
      process.exit(0);
    }
    if (Date.now() - start > timeout) {
      console.log(JSON.stringify({ timeout: true, step: args.step || null }));
      process.exit(2);
    }
    setTimeout(tick, 400);
  };
  tick();
} else if (cmd === "state") {
  console.log(JSON.stringify(session(), null, 2));
} else if (cmd === "url") {
  const c = readJSON(F.console, null);
  if (!c || !alive(c.pid)) die("console is not running for this run (start it with `serve`)");
  console.log(c.url);
} else if (cmd === "stop") {
  const c = readJSON(F.console, null);
  if (c && c.pid) {
    try {
      process.kill(c.pid);
    } catch {}
  }
  fs.rmSync(F.console, { force: true });
  console.log(JSON.stringify({ stopped: true }));
} else if (cmd === "serve") {
  serve();
} else {
  die("usage: console.mjs serve|push|log|wait|record|state|url|stop --run <dir> ...");
}

// ---------------------------------------------------------------------------
function serve() {
  const root = path.resolve(String(args.root || process.cwd()));
  if (root === os.homedir() || root === "/") die(`refusing to serve ${root} (it would expose every file under it); run from the project folder or pass --root <project>`);
  // detach unless already the background child
  if (!args.foreground) {
    const existing = readJSON(F.console, null);
    if (existing && existing.pid) {
      try {
        if (!alive(existing.pid)) throw new Error("stale");
        console.log(JSON.stringify({ ok: true, url: existing.url, reused: true }));
        if (args.open) openUrl(existing.url);
        return;
      } catch {}
    }
    const child = spawn(process.execPath, [fileURLToPath(import.meta.url), "serve", "--foreground", "--run", RUN, "--root", root, "--port", String(args.port || 0)], {
      detached: true,
      stdio: "ignore",
    });
    child.unref();
    const t0 = Date.now();
    const waitUp = () => {
      const c = readJSON(F.console, null);
      if (c && c.pid === child.pid) {
        console.log(JSON.stringify({ ok: true, url: c.url, pid: c.pid }));
        if (args.open) openUrl(c.url);
        process.exit(0);
      }
      if (Date.now() - t0 > 8000) die("console server did not start");
      setTimeout(waitUp, 150);
    };
    waitUp();
    return;
  }

  const token = crypto.randomBytes(12).toString("hex");
  // files the console may serve: the workspace, installed skills (frame-preset showcases), and this skill
  const allowed = [root, SKILL_DIR, path.join(os.homedir(), ".claude", "skills"), path.join(os.homedir(), ".agents", "skills")]
    .filter((p) => fs.existsSync(p))
    .map((p) => fs.realpathSync(p));
  const UI = path.join(SKILL_DIR, "console", "index.html");
  const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp", ".gif": "image/gif", ".mp4": "video/mp4", ".webm": "video/webm", ".mov": "video/quicktime", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".m4a": "audio/mp4", ".ogg": "audio/ogg", ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf" };
  const clients = new Set();
  let lastState = "";
  const broadcast = () => {
    let txt;
    try {
      txt = fs.readFileSync(F.session, "utf8");
    } catch {
      return;
    }
    if (txt === lastState) return;
    lastState = txt;
    for (const res of clients) res.write(`event: state\ndata: ${txt.replace(/\n/g, "")}\n\n`);
  };
  setInterval(broadcast, 500);

  // files of this session that must never be served (console.json holds the token URL)
  // compared by real path (e.g. macOS /var -> /private/var), resolved per request since the files come and go
  const realOr = (p) => {
    try {
      return fs.realpathSync(p);
    } catch {
      return path.resolve(p);
    }
  };
  const isPrivate = (real) => [F.console, F.actions, F.consumed].some((p) => realOr(p) === real || path.resolve(p) === real);
  const COOKIE = `rasa_${token.slice(0, 6)}`;
  const hasCookie = (req) => (req.headers.cookie || "").split(/;\s*/).includes(`${COOKIE}=${token}`);
  let port = 0;

  const handle = (req, res) => {
    const u = new URL(req.url, "http://127.0.0.1");
    const send = (code, body, type = "application/json", extra = {}) => {
      if (res.headersSent) return res.end();
      res.writeHead(code, { "content-type": type, "cache-control": "no-store", "x-content-type-options": "nosniff", ...extra });
      res.end(typeof body === "string" ? body : JSON.stringify(body));
    };
    // DNS-rebinding guard: only our own host names
    const host = String(req.headers.host || "");
    if (host !== `127.0.0.1:${port}` && host !== `localhost:${port}`) return send(421, "wrong host", "text/plain");

    if (u.pathname === "/" || u.pathname === "/index.html") {
      if (u.searchParams.get("t") !== token && !hasCookie(req)) return send(403, "Open the console with the URL printed by `console.mjs serve` (it carries the session token).", "text/plain");
      // the tokened visit sets an HttpOnly session cookie; every other route requires it
      return send(200, fs.readFileSync(UI, "utf8"), "text/html; charset=utf-8", { "set-cookie": `${COOKIE}=${token}; HttpOnly; SameSite=Strict; Path=/` });
    }
    if (!hasCookie(req)) return send(403, { error: "open the console URL first" });

    if (u.pathname === "/api/state") return send(200, session());
    if (u.pathname === "/api/events") {
      res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-store", connection: "keep-alive" });
      res.write(`event: state\ndata: ${JSON.stringify(session())}\n\n`);
      clients.add(res);
      req.on("close", () => clients.delete(res));
      return;
    }
    if (u.pathname === "/api/action" && req.method === "POST") {
      if (req.headers["x-rasa-token"] !== token) return send(403, { error: "bad token" });
      let body = "";
      let tooBig = false;
      req.on("data", (c) => {
        body += c;
        if (body.length > 1e6) {
          tooBig = true;
          req.destroy();
        }
      });
      req.on("end", () => {
        if (tooBig) return;
        let a;
        try {
          a = JSON.parse(body);
        } catch {
          return send(400, { error: "bad json" });
        }
        if (!a || typeof a !== "object" || Array.isArray(a)) return send(400, { error: "expected an object" });
        const step = String(a.step || "");
        if (![...STEPS, "*"].includes(step) || !/^[a-z-]{2,20}$/.test(String(a.type || ""))) return send(400, { error: "unknown step or type" });
        const action = appendAction({ step, type: String(a.type), value: a.value ?? null, note: String(a.note || "").slice(0, 4000), source: "console" });
        const s = session();
        if (step === "*") s.decide_rest = { ts: action.ts };
        else if (Object.prototype.hasOwnProperty.call(s.steps, step)) s.steps[step].sent = { type: action.type, value: action.value, note: action.note, ts: action.ts };
        saveSession(s);
        send(200, { ok: true, action });
      });
      return;
    }
    // /fs/rel/<workspace-relative path> and /fs/abs/<absolute path>: path-style so a
    // served page's own relative links (fonts, images) keep resolving
    if (u.pathname.startsWith("/fs/rel/") || u.pathname.startsWith("/fs/abs/")) {
      let rest;
      try {
        rest = decodeURIComponent(u.pathname.slice(8));
      } catch {
        return send(400, "bad path", "text/plain");
      }
      const p = u.pathname.startsWith("/fs/abs/") ? path.join("/", rest) : path.join(root, rest);
      let real;
      try {
        real = fs.realpathSync(p);
      } catch {
        return send(404, "not found", "text/plain");
      }
      if (!allowed.some((a) => real === a || real.startsWith(a + path.sep))) return send(403, "outside the allowed roots", "text/plain");
      if (isPrivate(real)) return send(403, "private", "text/plain");
      const st = fs.statSync(real);
      if (!st.isFile()) return send(403, "not a file", "text/plain");
      const type = MIME[path.extname(real).toLowerCase()] || "application/octet-stream";
      const r = req.headers.range && /^bytes=(\d*)-(\d*)$/.exec(String(req.headers.range).trim());
      if (r && st.size > 0) {
        let startB, endB;
        if (r[1] === "" && r[2] !== "") {
          // suffix range: the last N bytes
          startB = Math.max(0, st.size - Number(r[2]));
          endB = st.size - 1;
        } else {
          startB = r[1] ? Number(r[1]) : 0;
          endB = r[2] ? Math.min(Number(r[2]), st.size - 1) : st.size - 1;
        }
        if (startB >= st.size || startB > endB) return send(416, "", "text/plain", { "content-range": `bytes */${st.size}` });
        res.writeHead(206, { "content-type": type, "content-range": `bytes ${startB}-${endB}/${st.size}`, "accept-ranges": "bytes", "content-length": endB - startB + 1, "cache-control": "no-store" });
        return fs.createReadStream(real, { start: startB, end: endB }).on("error", () => res.destroy()).pipe(res);
      }
      if (r && st.size === 0) return send(416, "", "text/plain", { "content-range": "bytes */0" });
      res.writeHead(200, { "content-type": type, "content-length": st.size, "accept-ranges": "bytes", "cache-control": "no-store" });
      return fs.createReadStream(real).on("error", () => res.destroy()).pipe(res);
    }
    send(404, { error: "not found" });
  };
  const server = http.createServer((req, res) => {
    try {
      handle(req, res);
    } catch (e) {
      try {
        if (!res.headersSent) res.writeHead(500, { "content-type": "text/plain" });
        res.end("server error");
      } catch {}
    }
  });
  // a single bad request must never take the console down
  process.on("uncaughtException", () => {});
  server.listen(Number(args.port || 0), "127.0.0.1", () => {
    port = server.address().port;
    const url = `http://127.0.0.1:${port}/?t=${token}`;
    writeJSON(F.console, { url, port, pid: process.pid, root, started: now() });
    if (!fs.existsSync(F.session)) saveSession(session());
  });
  const bye = () => {
    const c = readJSON(F.console, null);
    if (c && c.pid === process.pid) fs.rmSync(F.console, { force: true });
    process.exit(0);
  };
  process.on("SIGTERM", bye);
  process.on("SIGINT", bye);
}

function alive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function openUrl(url) {
  try {
    const opener = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
    execFileSync(opener, [url], { stdio: "ignore" });
  } catch {}
}
