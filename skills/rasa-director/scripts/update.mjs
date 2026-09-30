#!/usr/bin/env node
// Update check: is a newer Rasa Director out, how was this copy installed, and how to update it.
//   node update.mjs check [--force]      compare with GitHub (at most once a day; silent offline)
//   node update.mjs apply                update this copy the way it was installed
//   node update.mjs version              this copy's version and install method, no network
// Prints JSON; always exits 0 from check, so a failed check never blocks a run.
// Env: RASA_DIRECTOR_NO_UPDATE_CHECK=1 skips the check; RASA_DIRECTOR_AUTO_UPDATE=1 lets check apply
// the update itself; RASA_DIRECTOR_UPDATE_BASE points at another raw base (tests, forks).
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { SKILL_DIR, STATE_DIR, parseArgs, die } from "./lib/common.mjs";

const REPO = "Sibhimanyu/rasa-director";
const BASE = (process.env.RASA_DIRECTOR_UPDATE_BASE || `https://raw.githubusercontent.com/${REPO}/master`).replace(/\/$/, "");
const DAY_MS = 24 * 60 * 60 * 1000;
const CACHE = path.join(STATE_DIR, "update-check.json");

const current = () => fs.readFileSync(path.join(SKILL_DIR, "VERSION"), "utf8").trim();

function cmp(a, b) {
  const pa = String(a).split(/[.-]/).map((x) => parseInt(x, 10) || 0);
  const pb = String(b).split(/[.-]/).map((x) => parseInt(x, 10) || 0);
  for (let i = 0; i < 3; i++) if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) > (pb[i] || 0) ? 1 : -1;
  return 0;
}

const run = (cmd, args, opts = {}) => spawnSync(cmd, args, { encoding: "utf8", timeout: opts.timeout || 120000, cwd: opts.cwd, stdio: opts.inherit ? "inherit" : "pipe" });
const has = (cmd) => run(process.platform === "win32" ? "where" : "which", [cmd], { timeout: 5000 }).status === 0;

// How this copy got here decides how it updates.
function method() {
  const real = fs.realpathSync(SKILL_DIR);
  if (real.includes(`${path.sep}.claude${path.sep}plugins${path.sep}`)) {
    return { method: "plugin", command: "claude plugin marketplace update rasa-director && claude plugin update rasa-director@rasa-director", chat: "/plugin marketplace update rasa-director, then /plugin update rasa-director@rasa-director", restart: true };
  }
  let src = path.join(STATE_DIR, "src");
  try { src = fs.realpathSync(src); } catch {}
  if (real.startsWith(src + path.sep)) {
    return { method: "installer", command: `curl -fsSL https://raw.githubusercontent.com/${REPO}/master/install.sh | bash`, restart: false };
  }
  const top = run("git", ["-C", real, "rev-parse", "--show-toplevel"], { timeout: 5000 });
  if (top.status === 0) {
    const root = top.stdout.trim();
    return { method: "git", root, command: `git -C "${root}" pull --ff-only`, restart: false };
  }
  const home = process.env.HOME || "";
  const global = [path.join(home, ".claude", "skills"), path.join(home, ".agents", "skills")].some((d) => real.startsWith(d + path.sep));
  return { method: "skills-cli", command: `npx --yes skills add ${REPO} --skill rasa-director --yes${global ? " --global" : ""}`, restart: false };
}

async function fetchText(url, ms) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctl.signal, headers: { "cache-control": "no-cache" } });
    return r.ok ? await r.text() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

// The changelog's release headings newer than this copy, with their bold lead phrases.
function whatsNew(changelog, from, to) {
  if (!changelog) return [];
  const out = [];
  for (const sec of changelog.split(/^## /m).slice(1)) {
    const m = sec.match(/^(\d+\.\d+\.\d+)/);
    if (!m || cmp(m[1], from) <= 0 || cmp(m[1], to) > 0) continue;
    const highlights = [...sec.matchAll(/^- \*\*([^*]+)\*\*/gm)].map((x) => x[1].replace(/[:.]$/, ""));
    out.push({ version: m[1], highlights });
  }
  return out;
}

function readCache() {
  try { return JSON.parse(fs.readFileSync(CACHE, "utf8")); } catch { return null; }
}

function apply(how) {
  if (how.method === "git") {
    const dirty = run("git", ["-C", how.root, "status", "--porcelain"], { timeout: 10000 });
    if (dirty.stdout.trim()) return { ok: false, error: `${how.root} has uncommitted changes; commit or stash them, then run: ${how.command}` };
    const r = run("git", ["-C", how.root, "pull", "--ff-only", "--quiet"]);
    return r.status === 0 ? { ok: true } : { ok: false, error: (r.stderr || r.stdout).trim() };
  }
  if (how.method === "plugin") {
    if (!has("claude")) return { ok: false, error: `the claude CLI is not on PATH; in Claude Code run ${how.chat}` };
    const a = run("claude", ["plugin", "marketplace", "update", "rasa-director"]);
    if (a.status !== 0) return { ok: false, error: (a.stderr || a.stdout).trim() };
    const b = run("claude", ["plugin", "update", "rasa-director@rasa-director"]);
    return b.status === 0 ? { ok: true } : { ok: false, error: (b.stderr || b.stdout).trim() };
  }
  const r = run("bash", ["-c", how.command], { timeout: 300000 });
  return r.status === 0 ? { ok: true } : { ok: false, error: (r.stderr || r.stdout).trim().split("\n").slice(-3).join(" ") };
}

const args = parseArgs();
const cmd = args._[0] || "check";
const how = method();

if (cmd === "version") {
  console.log(JSON.stringify({ version: current(), ...how }, null, 2));
} else if (cmd === "check") {
  const now = current();
  const out = { current: now, latest: now, behind: false, checked: "network", ...how };
  if (process.env.RASA_DIRECTOR_NO_UPDATE_CHECK === "1") {
    out.checked = "skipped";
  } else {
    const cache = readCache();
    let latest = args.latest || null; // --latest simulates a release (tests)
    let changelog = null;
    if (latest) out.checked = "simulated";
    else if (!args.force && cache && Date.now() - cache.at < DAY_MS && cache.base === BASE) {
      latest = cache.latest;
      out.whats_new = cache.whats_new || [];
      out.checked = "cache";
    } else {
      const v = await fetchText(`${BASE}/skills/rasa-director/VERSION`, 2000);
      latest = v && /^\d+\.\d+\.\d+/.test(v.trim()) ? v.trim() : null;
      if (!latest) out.checked = "offline";
      else if (cmp(latest, now) > 0) changelog = await fetchText(`${BASE}/CHANGELOG.md`, 2000);
    }
    if (latest) {
      out.latest = latest;
      out.behind = cmp(latest, now) > 0;
      if (out.checked !== "cache") out.whats_new = out.behind ? whatsNew(changelog, now, latest) : [];
      if (out.checked === "network") {
        fs.mkdirSync(STATE_DIR, { recursive: true });
        fs.writeFileSync(CACHE, JSON.stringify({ at: Date.now(), base: BASE, latest, whats_new: out.whats_new }));
      }
    }
    if (out.behind && process.env.RASA_DIRECTOR_AUTO_UPDATE === "1" && out.checked !== "simulated") {
      const r = apply(how);
      out.auto_updated = r.ok;
      if (!r.ok) out.error = r.error;
      if (r.ok) try { fs.rmSync(CACHE); } catch {}
    }
  }
  if (out.behind && !out.auto_updated) {
    out.message = `Rasa Director ${out.latest} is out (you have ${now}).`;
  } else if (out.auto_updated) {
    out.message = how.restart ? `Updated Rasa Director to ${out.latest}; it takes effect in your next Claude Code session.` : `Updated Rasa Director to ${out.latest}.`;
  }
  console.log(JSON.stringify(out, null, 2));
} else if (cmd === "apply") {
  const before = current();
  const r = apply(how);
  if (!r.ok) die(`update failed (${how.method}): ${r.error}`);
  try { fs.rmSync(CACHE); } catch {}
  let after = before;
  try { after = current(); } catch {}
  console.log(JSON.stringify({ updated: true, method: how.method, from: before, to: how.method === "plugin" ? "latest (after restart)" : after, restart: how.restart }, null, 2));
} else {
  die("usage: update.mjs check [--force] | apply | version");
}
