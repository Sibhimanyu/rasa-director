/*
 * RasanMusic: lyrics and music hooks for HyperFrames compositions (2D GSAP and Rasan3D pose functions).
 *
 *   <script src="assets/three/rasan-music.js"></script>
 *   <script>
 *     // data produced by `node scripts/lyrics.mjs align|audio`, inlined or fetched BEFORE the timeline is built
 *     RasanMusic.load(LYRICS_JSON, AUDIO_JSON);
 *     const line = RasanMusic.lyrics.get("sudden drop");            // by content, never by time
 *     RasanMusic.gsapWords(tl, line, document.querySelectorAll("#l1 .w"), {
 *       from: { autoAlpha: 0, y: 24 }, to: { autoAlpha: 1, y: 0 }, ease: "power3.out" });
 *     // 3D pose functions and per-frame effects read the same data as pure functions of time t (seconds):
 *     const k = RasanMusic.audio.hit("kick", t, 0.12);               // 1 on the kick, decays
 *     const sung = RasanMusic.wordProgress(line.words[2], t);        // 0..1
 *   </script>
 *
 * Everything here is a pure function of time: no clock, no randomness, no DOM reads at render time.
 * The only effect of gsapWords is to add tweens to the timeline you pass in. API: references/lyrics.md.
 */
(function () {
  "use strict";
  if (window.RasanMusic) return;

  var VERSION = "1.0.0";

  // ------------------------------------------------------------------ text
  function fold(s) { return String(s).toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"'); }
  function norm(s) { return String(s).toLowerCase().replace(/[\u2018\u2019']/g, "").replace(/[^a-z0-9\u00c0-\uffff]/g, ""); }
  function bsearch(arr, t, key) { // last index with arr[i] <= t (-1 if none)
    var lo = 0, hi = arr.length;
    while (lo < hi) { var m = (lo + hi) >> 1; if ((key ? key(arr[m]) : arr[m]) <= t) lo = m + 1; else hi = m; }
    return lo - 1;
  }
  function clamp(x, a, b) { return x < a ? a : x > b ? b : x; }

  // ------------------------------------------------------------------ lyrics
  function Lyrics(j) {
    var self = this;
    this.lines = (j.lines || []).map(function (l, li) {
      var line = { i: li, text: l.text, start: l.start, end: l.end, words: [] };
      line.words = (l.words || []).map(function (w, wi) {
        var o = { w: w.w, start: w.start, end: w.end, conf: w.conf, line: li, index: wi, gi: 0 };
        if (w.syl) o.syl = w.syl;
        if (w.interpolated) o.interpolated = true;
        return o;
      });
      if (line.words.length) { line.start = line.start != null ? line.start : line.words[0].start; line.end = line.end != null ? line.end : line.words[line.words.length - 1].end; }
      return line;
    });
    this.words = [];
    this.lines.forEach(function (l) { l.words.forEach(function (w) { w.gi = self.words.length; self.words.push(w); }); });
    this.meta = { source: j.source, method: j.method, stats: j.stats };
  }
  /** Lines whose text includes `s` (case-insensitive; straight or curly quotes alike). */
  Lyrics.prototype.find = function (s) {
    var q = fold(s);
    return this.lines.filter(function (l) { return fold(l.text).indexOf(q) >= 0; });
  };
  /** The nth line (default the first) containing `s`; throws when missing, so authoring fails loudly. */
  Lyrics.prototype.get = function (s, nth) {
    var l = this.find(s)[nth || 0];
    if (!l) throw new Error("RasanMusic: lyric not found: " + s + (nth ? " (#" + nth + ")" : ""));
    return l;
  };
  /** Words whose normalised text equals `s` (e.g. "p(doom)" finds "P(doom)," too). */
  Lyrics.prototype.findWords = function (s) {
    var q = norm(s);
    return this.words.filter(function (w) { return norm(w.w) === q; });
  };
  Lyrics.prototype.lineAt = function (t) { for (var i = 0; i < this.lines.length; i++) { var l = this.lines[i]; if (t >= l.start && t < l.end) return l; } return null; };
  Lyrics.prototype.lastLine = function (t) { var b = null; for (var i = 0; i < this.lines.length; i++) if (this.lines[i].start <= t) b = this.lines[i]; return b; };
  Lyrics.prototype.nextLine = function (t) { for (var i = 0; i < this.lines.length; i++) if (this.lines[i].start > t) return this.lines[i]; return null; };
  Lyrics.prototype.linesIn = function (t0, t1) { return this.lines.filter(function (l) { return l.end > t0 && l.start < t1; }); };
  Lyrics.prototype.wordAt = function (t) { for (var i = 0; i < this.words.length; i++) { var w = this.words[i]; if (t >= w.start && t < w.end) return w; } return null; };
  Lyrics.prototype.lastWord = function (t) { var b = null; for (var i = 0; i < this.words.length; i++) if (this.words[i].start <= t) b = this.words[i]; return b; };

  /** Sung progress of a word at time t: 0 before its start, 1 from its end, linear between (piecewise over `syl` when present). */
  function wordProgress(w, t) {
    if (t <= w.start) return 0;
    if (t >= w.end) return 1;
    if (w.syl && w.syl.length > 1) {
      var n = w.syl.length;
      for (var i = 0; i < n; i++) {
        var a = w.syl[i][0], b = w.syl[i][1];
        if (t < a) return i / n;
        if (t < b) return (i + (t - a) / Math.max(1e-3, b - a)) / n;
      }
      return 1;
    }
    return (t - w.start) / Math.max(1e-3, w.end - w.start);
  }
  /** Characters of the line sung by time t (0..text.length), for per-glyph wipes. */
  function lineCharProgress(l, t) {
    var chars = 0;
    for (var i = 0; i < l.words.length; i++) {
      var w = l.words[i], p = wordProgress(w, t);
      chars += p * w.w.length;
      if (p < 1) break;
      chars += 1;
    }
    return Math.min(chars, l.text.length);
  }

  // ------------------------------------------------------------------ audio
  var FEATURES = ["rms", "low", "mid", "high", "vocal", "drums", "bass", "other"];
  function Audio(j) {
    this.duration = j.duration;
    this.bpm = j.bpm;
    this.beatPeriod = j.beat_period || (j.bpm ? 60 / j.bpm : 0.5);
    this.beats = j.beats || [];
    this.downbeats = j.downbeats || [];
    this.sections = j.sections || [];
    this.fps = j.fps || 100;
    this.feat = {};
    for (var i = 0; i < FEATURES.length; i++) {
      var k = FEATURES[i], a = (j.features && j.features[k]) || j[k];
      if (a && a.length) this.feat[k] = a;
    }
    this.onsets = j.onsets || {};
  }
  /** Envelope value 0..1 at time t (rms | low | mid | high | vocal | drums | bass | other), linearly interpolated. */
  Audio.prototype.env = function (name, t) {
    var a = this.feat[name];
    if (!a) return 0;
    var x = t * this.fps, i = Math.floor(x);
    if (i < 0) return a[0];
    if (i >= a.length - 1) return a[a.length - 1];
    var f = x - i;
    return a[i] * (1 - f) + a[i + 1] * f;
  };
  /** Peak of an envelope over the last w seconds: punchy reactions. */
  Audio.prototype.envPeak = function (name, t, w) {
    var m = 0, step = 1 / this.fps;
    for (var s = t - (w == null ? 0.08 : w); s <= t + 1e-9; s += step) m = Math.max(m, this.env(name, s));
    return m;
  };
  /** Decaying pulse of an onset kind (kick | snare | hat | vocal): strength at the hit, halving every halfLife seconds. */
  Audio.prototype.hit = function (kind, t, halfLife) {
    var list = this.onsets[kind];
    if (!list || !list.length) return 0;
    var hl = halfLife || 0.11;
    var lo = bsearch(list, t, function (e) { return e[0]; });
    var v = 0;
    for (var i = lo; i >= 0 && i >= lo - 6; i--) {
      var dt = t - list[i][0];
      if (dt > hl * 8) break;
      v = Math.max(v, list[i][1] * Math.pow(0.5, dt / hl));
    }
    return v;
  };
  /** Onsets of a kind in [t0, t1): [[time, strength], ...]. */
  Audio.prototype.events = function (kind, t0, t1) {
    return (this.onsets[kind] || []).filter(function (e) { return e[0] >= t0 && e[0] < t1; });
  };
  /** Continuous beat index: 0 at the first beat, fractional between beats (extrapolated outside the grid). */
  Audio.prototype.beatAt = function (t) {
    var b = this.beats, n = b.length;
    if (n < 2) return t / this.beatPeriod;
    if (t <= b[0]) return (t - b[0]) / (b[1] - b[0]);
    if (t >= b[n - 1]) return n - 1 + (t - b[n - 1]) / (b[n - 1] - b[n - 2]);
    var lo = bsearch(b, t);
    return lo + (t - b[lo]) / (b[lo + 1] - b[lo]);
  };
  /** Time of a (fractional) beat index. */
  Audio.prototype.timeOfBeat = function (i) {
    var b = this.beats, n = b.length;
    if (n < 2) return i * this.beatPeriod;
    var period = (b[n - 1] - b[0]) / (n - 1);
    if (i <= 0) return b[0] + i * period;
    if (i >= n - 1) return b[n - 1] + (i - (n - 1)) * period;
    var k = Math.floor(i);
    return b[k] + (b[k + 1] - b[k]) * (i - k);
  };
  /** The beat time closest to t. */
  Audio.prototype.nearestBeat = function (t) { return this.timeOfBeat(Math.round(this.beatAt(t))); };
  /** Time of the last beat at or before t (cut on this, not on the next one: the cut lands with the music). */
  Audio.prototype.lastBeatBefore = function (t) { return this.timeOfBeat(Math.floor(this.beatAt(t) + 1e-6)); };
  /** Phase inside the current beat, 0..1. */
  Audio.prototype.beatPhase = function (t) { var x = this.beatAt(t); return x - Math.floor(x); };
  /** Continuous bar index from the downbeats (0 at the first downbeat). */
  Audio.prototype.barAt = function (t) {
    var d = this.downbeats, n = d.length;
    if (n < 2) return this.beatAt(t) / 4;
    if (t <= d[0]) return (t - d[0]) / (d[1] - d[0]);
    if (t >= d[n - 1]) return n - 1 + (t - d[n - 1]) / (d[n - 1] - d[n - 2]);
    var lo = bsearch(d, t);
    return lo + (t - d[lo]) / (d[lo + 1] - d[lo]);
  };
  Audio.prototype.barPhase = function (t) { var x = this.barAt(t); return x - Math.floor(x); };
  /** Time of a (fractional) bar index. */
  Audio.prototype.timeOfBar = function (i) {
    var d = this.downbeats, n = d.length;
    if (n < 2) return this.timeOfBeat(i * 4);
    var period = (d[n - 1] - d[0]) / (n - 1);
    if (i <= 0) return d[0] + i * period;
    if (i >= n - 1) return d[n - 1] + (i - (n - 1)) * period;
    var k = Math.floor(i);
    return d[k] + (d[k + 1] - d[k]) * (i - k);
  };
  /** The downbeat at or before t. */
  Audio.prototype.lastDownbeatBefore = function (t) { return this.timeOfBar(Math.floor(this.barAt(t) + 1e-6)); };
  /** The section containing t ({name, start, end}). */
  Audio.prototype.section = function (t) {
    var s = this.sections;
    for (var i = 0; i < s.length; i++) if (t >= s[i].start && t < s[i].end) return s[i];
    return s[s.length - 1] || null;
  };
  /** Everything at once: envelopes, pulses and beat/bar position at t. */
  Audio.prototype.sample = function (t) {
    var o = {};
    for (var k in this.feat) o[k] = this.env(k, t);
    o.kick = this.hit("kick", t, 0.12); o.snare = this.hit("snare", t, 0.14); o.hat = this.hit("hat", t, 0.06); o.vonset = this.hit("vocal", t, 0.15);
    o.beat = this.beatAt(t); o.beatPhase = o.beat - Math.floor(o.beat); o.bar = this.barAt(t); o.barPhase = o.bar - Math.floor(o.bar);
    return o;
  };

  // ------------------------------------------------------------------ gsap
  function toList(els) {
    if (!els) return [];
    if (typeof els === "string") return Array.prototype.slice.call(document.querySelectorAll(els));
    if (els.length != null && typeof els !== "function" && !els.nodeType) return Array.prototype.slice.call(els);
    return [els];
  }
  /**
   * One GSAP tween per word, starting at the word's exact sung start and (by default) finishing by its end.
   *   tl        the composition's paused gsap timeline (times are in the timeline's own clock)
   *   line      a line from lyrics.get(...), or an array of words
   *   elements  one element per word (array, NodeList or selector), in word order
   *   opts      { from, to, ease, duration, offset, minDuration, maxDuration, position }
   *     duration     "word" (default: the word's length, clamped to [minDuration 0.12, maxDuration 0.5])
   *                  or a number in seconds: use a value from the motion contract's scale when it applies
   *     offset       seconds added to every word start; keep it 0 unless the look needs a deliberate lead
   *     position     seconds to subtract from word starts when the timeline is a scene-local clock
   * The tweens are fromTo tweens, so the elements sit in their `from` state until their word begins.
   */
  function gsapWords(tl, line, elements, opts) {
    opts = opts || {};
    var words = Array.isArray(line) ? line : line.words;
    var els = toList(elements);
    if (els.length !== words.length) throw new Error("RasanMusic.gsapWords: " + els.length + " elements for " + words.length + " words (" + (Array.isArray(line) ? "" : line.text) + ")");
    var from = opts.from || { autoAlpha: 0 }, to = opts.to || { autoAlpha: 1 };
    var minD = opts.minDuration != null ? opts.minDuration : 0.12, maxD = opts.maxDuration != null ? opts.maxDuration : 0.5;
    var shift = (opts.offset || 0) - (opts.position || 0);
    var tweens = [];
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      var d = typeof opts.duration === "number" ? opts.duration : clamp(w.end - w.start, minD, maxD);
      var vars = {};
      for (var k in to) vars[k] = to[k];
      vars.duration = d;
      vars.ease = opts.ease || to.ease || "power3.out";
      tl.fromTo(els[i], from, vars, w.start + shift);
      tweens.push(w.start + shift);
    }
    return tweens;
  }

  // ------------------------------------------------------------------ public object
  var RM = {
    version: VERSION,
    lyrics: null,
    audio: null,
    /** Load the data synchronously: objects, or JSON strings. Call before building the timeline. */
    load: function (lyricsJson, audioJson) {
      var parse = function (x) { return typeof x === "string" ? JSON.parse(x) : x; };
      if (lyricsJson) RM.lyrics = new Lyrics(parse(lyricsJson));
      if (audioJson) RM.audio = new Audio(parse(audioJson));
      return RM;
    },
    /** Fetch both JSON files, then load them (use inside an async build, before the timeline is made). */
    fetchAndLoad: function (lyricsUrl, audioUrl) {
      return Promise.all([lyricsUrl ? fetch(lyricsUrl).then(function (r) { return r.json(); }) : null, audioUrl ? fetch(audioUrl).then(function (r) { return r.json(); }) : null])
        .then(function (a) { return RM.load(a[0], a[1]); });
    },
    wordProgress: wordProgress,
    lineCharProgress: lineCharProgress,
    gsapWords: gsapWords,
    norm: norm,
  };
  // delegate so call sites read RasanMusic.audio.beatAt(t) even if load() runs later
  window.RasanMusic = RM;
})();
