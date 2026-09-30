// Live feed: Rasa's own scripts tell the Director's Console what they're doing, so the user sees progress
// even when Claude doesn't narrate. Writes to the run named in <workspace>/.rasa-director/current (setup
// writes it); does nothing when there's no run or no console. Never throws: reporting must not break work.
import fs from "node:fs";
import path from "node:path";

function currentRun(cwd = process.cwd()) {
  try {
    const run = fs.readFileSync(path.join(cwd, ".rasa-director", "current"), "utf8").trim();
    const dir = path.resolve(cwd, run);
    return fs.existsSync(path.join(dir, "session.json")) ? dir : null;
  } catch {
    return null;
  }
}

// report("Composing three directions") shows Claude as working on it; report("Three directions ready", { done: true }) logs it done
export function report(msg, { done = false, level, cwd } = {}) {
  try {
    // a script run by another Rasa script stays quiet: the outer one already says what's happening
    if (process.env.RASA_DIRECTOR_QUIET === "1") return;
    const run = currentRun(cwd);
    if (!run || !msg) return;
    const f = path.join(run, "session.json");
    const s = JSON.parse(fs.readFileSync(f, "utf8"));
    const t = new Date().toISOString();
    const last = (s.activity || [])[(s.activity || []).length - 1];
    if (!(last && last.msg === msg)) s.activity = (s.activity || []).concat({ t, msg: String(msg).slice(0, 300), level: level || (done ? "ok" : "info") }).slice(-200);
    // while the user is being asked something, script output is background work: don't claim Claude is busy
    const cur = (s.steps || {})[s.current] || {};
    const asking = cur.status === "awaiting" && !cur.sent;
    if (!asking) s.working = done ? s.working : { msg: String(msg).slice(0, 300), t };
    s.updated = t;
    const tmp = `${f}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(s, null, 2));
    fs.renameSync(tmp, f);
  } catch {}
}

// one line per script: say what's starting, and what finished when it exits cleanly
export function track(start, done) {
  if (start) report(start);
  if (done) process.on("exit", (code) => { if (code === 0) report(typeof done === "function" ? done() : done, { done: true }); });
}
