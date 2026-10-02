/*
 * Rasan3D: real-time 3D for HyperFrames scenes, built for film quality.
 *
 *   <canvas id="gl-04" class="r3-canvas"></canvas>
 *   <script src="assets/three/rasan3d.js"></script>
 *   <script>
 *     const tl = gsap.timeline({ paused: true });            // the scene's clock (and its 2D tweens)
 *     window.__timelines["frame-04"] = tl;
 *     Rasan3D.stage({ id: "frame-04", canvas: "#gl-04", timeline: tl, duration: 6, camera: {...},
 *       async build(k) { ...make meshes, return them... }, pose(t, k) { ...place them at time t... } });
 *   </script>
 *
 * Every frame is a pure function of the scene's local time: the GSAP timeline is the clock (so 3D stays
 * locked to the 2D tweens and to HyperFrames' seeks), nothing reads the wall clock, randomness is seeded.
 * Each output frame averages sub-frames across a shutter (true motion blur), jittered across the pixel
 * (anti-aliasing) and across a lens aperture (true depth of field). All stages share one WebGL renderer,
 * and each copies its frame into its own 2D canvas, so a film with ten 3D scenes holds one GL context.
 *
 * Paths: load this file project-root relative (assets/three/rasan3d.js); three.js sits next to it.
 * API reference: references/3d.md in the RasanAI skill.
 */
(function () {
  "use strict";
  if (window.Rasan3D) return;

  var VERSION = "1.0.0";
  var THREE_VERSION = "0.181.2";
  var script = document.currentScript;
  var BASE = (function () {
    var src = script && script.src ? script.src : new URL("assets/three/rasan3d.js", document.baseURI).href;
    return src.replace(/[^/]*$/, "");
  })();
  var QUALITY = { final: { maxSamples: 24, dofSamples: 16 }, draft: { maxSamples: 4, dofSamples: 4 }, check: { maxSamples: 2, dofSamples: 2 } };
  function quality() {
    var q = window.__rasan3dQuality || "final";
    return QUALITY[q] ? q : "final";
  }

  // ------------------------------------------------------------------ three.js, loaded once
  var threeP = null;
  function loadThree() {
    if (!threeP) {
      threeP = import(BASE + "three.module.min.js").then(function (T) {
        // HyperFrames' three adapter waits on THREE.DefaultLoadingManager before it calls a frame ready
        if (!window.THREE) window.THREE = T;
        return T;
      });
    }
    return threeP;
  }
  var addonCache = {};
  function addon(rel) {
    if (!addonCache[rel]) addonCache[rel] = import(BASE + "addons/" + rel);
    return addonCache[rel];
  }

  // ------------------------------------------------------------------ time, eases, keys
  var EASES = {
    none: function (x) { return x; }, linear: function (x) { return x; },
  };
  function ease(name) {
    if (typeof name === "function") return name;
    var n = name || "power2.inOut";
    if (window.gsap && gsap.parseEase) {
      var f = gsap.parseEase(n);
      if (f) return f;
    }
    if (EASES[n]) return EASES[n];
    // fallback without GSAP: the power family
    var m = /^power(\d)\.(in|out|inOut)$/.exec(n) || /^(cubic|quad|quart|quint)\.?(in|out|inOut)?/.exec(n);
    var p = m ? ({ cubic: 3, quad: 2, quart: 4, quint: 5 }[m[1]] || Number(m[1]) + 1) : 3;
    var dir = m && m[2] ? m[2] : "inOut";
    return dir === "in" ? function (x) { return Math.pow(x, p); } : dir === "out" ? function (x) { return 1 - Math.pow(1 - x, p); } : function (x) { return x < 0.5 ? Math.pow(2 * x, p) / 2 : 1 - Math.pow(2 - 2 * x, p) / 2; };
  }
  function lerpV(a, b, u) {
    if (typeof a === "number") return a + (b - a) * u;
    var o = new Array(a.length);
    for (var i = 0; i < a.length; i++) o[i] = a[i] + (b[i] - a[i]) * u;
    return o;
  }
  // keys: [[t, value, ease?], ...] sorted by t; the ease on a key is the ease arriving AT that key (like a
  // GSAP .to). Before the first key it holds the first value; after the last, the last.
  function at(t, keys) {
    if (typeof keys === "function") return keys(t);
    if (!Array.isArray(keys) || !keys.length) return undefined;
    if (!Array.isArray(keys[0]) || typeof keys[0][0] !== "number") return keys; // a constant
    if (t <= keys[0][0]) return keys[0][1];
    for (var i = 1; i < keys.length; i++) {
      var k = keys[i];
      if (t < k[0]) {
        var p = keys[i - 1];
        var span = k[0] - p[0];
        var u = span > 0 ? (t - p[0]) / span : 1;
        return lerpV(p[1], k[1], ease(k[2])(u));
      }
    }
    return keys[keys.length - 1][1];
  }
  // 0..1 progress of [a, b] with an ease (a window: before a = 0, after b = 1)
  function prog(t, a, b, e) {
    if (t <= a) return 0;
    if (t >= b) return 1;
    return ease(e)((t - a) / (b - a));
  }
  function frameIdx(t, fps) { return Math.floor(t * (fps || 30) + 1e-6); }
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function halton(i, b) {
    var f = 1, r = 0;
    while (i > 0) { f /= b; r += f * (i % b); i = Math.floor(i / b); }
    return r;
  }
  // full-frame lens: focal length (mm) → vertical field of view (degrees) for this frame's aspect;
  // the 36 mm sensor width maps to the frame's long side
  function lens(mm, aspect) {
    var a = aspect || 16 / 9;
    var vert = a >= 1 ? 36 / a : 36;
    return (2 * Math.atan(vert / (2 * mm)) * 180) / Math.PI;
  }
  function orbit(o) {
    // o: {center:[x,y,z], radius, height, from (deg), to (deg), t0, t1, ease}; returns t → [x,y,z]
    var c = o.center || [0, 0, 0];
    return function (t) {
      var u = prog(t, o.t0 || 0, o.t1 == null ? 1 : o.t1, o.ease || "power2.inOut");
      var a = (((o.from || 0) + ((o.to || 0) - (o.from || 0)) * u) * Math.PI) / 180;
      var r = typeof o.radius === "number" ? o.radius : at(t, o.radius);
      var h = typeof o.height === "number" ? o.height : o.height ? at(t, o.height) : 0;
      return [c[0] + Math.sin(a) * r, c[1] + h, c[2] + Math.cos(a) * r];
    };
  }

  // ------------------------------------------------------------------ the shared renderer
  var shared = null; // { T, renderer, canvas, size, rts, post, envs }
  function getShared(T) {
    if (shared) return shared;
    var canvas = document.createElement("canvas");
    var renderer = new T.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true, premultipliedAlpha: true, preserveDrawingBuffer: true, powerPreference: "high-performance" });
    renderer.outputColorSpace = T.LinearSRGBColorSpace;
    renderer.toneMapping = T.NoToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.setPixelRatio(1);
    renderer.autoClear = false;
    shared = { T: T, renderer: renderer, canvas: canvas, w: 0, h: 0, rts: null, post: makePost(T), envs: {} };
    return shared;
  }
  function ensureSize(S, w, h) {
    if (S.w === w && S.h === h && S.rts) return S.rts;
    var T = S.T;
    if (S.rts) Object.keys(S.rts).forEach(function (k) { var r = S.rts[k]; if (Array.isArray(r)) r.forEach(function (x) { x.dispose(); }); else r.dispose(); });
    S.renderer.setSize(w, h, false);
    var opt = { type: T.HalfFloatType, format: T.RGBAFormat, colorSpace: T.LinearSRGBColorSpace, depthBuffer: true };
    var sample = new T.WebGLRenderTarget(w, h, Object.assign({}, opt, { samples: 4 }));
    var sample1 = new T.WebGLRenderTarget(w, h, opt);
    var accum = new T.WebGLRenderTarget(w, h, Object.assign({}, opt, { depthBuffer: false }));
    var chain = [];
    var cw = w, ch = h;
    for (var i = 0; i < 4; i++) {
      cw = Math.max(1, Math.round(cw / 2)); ch = Math.max(1, Math.round(ch / 2));
      chain.push([new T.WebGLRenderTarget(cw, ch, Object.assign({}, opt, { depthBuffer: false })), new T.WebGLRenderTarget(cw, ch, Object.assign({}, opt, { depthBuffer: false }))]);
    }
    S.w = w; S.h = h;
    S.rts = { sample: sample, sample1: sample1, accum: accum, chain: chain };
    return S.rts;
  }

  // fullscreen passes: copy-with-weight, bright extract, blur, the final grade
  function makePost(T) {
    var cam = new T.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    var geo = new T.PlaneGeometry(2, 2);
    var quad = new T.Mesh(geo);
    var scene = new T.Scene();
    scene.add(quad);
    var V = "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";
    function mat(frag, uniforms, extra) {
      return new T.ShaderMaterial(Object.assign({ vertexShader: V, fragmentShader: frag, uniforms: uniforms, depthTest: false, depthWrite: false, toneMapped: false }, extra || {}));
    }
    var weigh = mat("uniform sampler2D tSrc; uniform float weight; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tSrc, vUv) * weight; }", { tSrc: { value: null }, weight: { value: 1 } }, { blending: T.CustomBlending, blendEquation: T.AddEquation, blendSrc: T.OneFactor, blendDst: T.OneFactor, blendSrcAlpha: T.OneFactor, blendDstAlpha: T.OneFactor, transparent: true });
    var bright = mat(
      "uniform sampler2D tSrc; uniform float threshold; uniform float knee; varying vec2 vUv;" +
        "void main(){ vec4 c = texture2D(tSrc, vUv); vec3 rgb = c.a > 0.0 ? c.rgb : vec3(0.0); float l = max(rgb.r, max(rgb.g, rgb.b));" +
        " float w = smoothstep(threshold - knee, threshold + knee, l); gl_FragColor = vec4(rgb * w, 1.0); }",
      { tSrc: { value: null }, threshold: { value: 1 }, knee: { value: 0.25 } }
    );
    var blur = mat(
      "uniform sampler2D tSrc; uniform vec2 dir; varying vec2 vUv;" +
        "void main(){ vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;" +
        " s += texture2D(tSrc, vUv + dir * 1.3846153846).rgb * 0.3162162162; s += texture2D(tSrc, vUv - dir * 1.3846153846).rgb * 0.3162162162;" +
        " s += texture2D(tSrc, vUv + dir * 3.2307692308).rgb * 0.0702702703; s += texture2D(tSrc, vUv - dir * 3.2307692308).rgb * 0.0702702703;" +
        " gl_FragColor = vec4(s, 1.0); }",
      { tSrc: { value: null }, dir: { value: new T.Vector2() } }
    );
    var finalFrag =
      "uniform sampler2D tSrc; uniform sampler2D tB0; uniform sampler2D tB1; uniform sampler2D tB2; uniform sampler2D tB3;" +
      "uniform float bloom; uniform float bloomRadius; uniform float halation; uniform float grain; uniform float vignette; uniform float ca;" +
      "uniform float seed; uniform vec2 res; uniform float saturation; uniform vec3 lift; uniform vec3 gain; varying vec2 vUv;\n" +
      "float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }" +
      "vec3 toSRGB(vec3 c){ c = clamp(c, 0.0, 1.0); return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }" +
      "void main(){" +
      " vec2 uv = vUv; vec4 c = texture2D(tSrc, uv);" +
      " if (ca > 0.0) { vec2 d = (uv - 0.5) * ca / res * 2.0; c.r = texture2D(tSrc, uv + d).r; c.b = texture2D(tSrc, uv - d).b; }" +
      " float a = c.a; vec3 col = a > 0.0001 ? c.rgb / a : vec3(0.0);" +
      " vec3 b = vec3(0.0);" +
      " if (bloom > 0.0 || halation > 0.0) { float w0 = 1.0 - bloomRadius * 0.5, w2 = 0.5 + bloomRadius, w3 = bloomRadius * 1.5; b = (texture2D(tB0, uv).rgb * w0 + texture2D(tB1, uv).rgb + texture2D(tB2, uv).rgb * w2 + texture2D(tB3, uv).rgb * w3) / (w0 + 1.0 + w2 + w3); }" +
      " vec3 add = b * bloom + vec3(1.0, 0.32, 0.12) * dot(b, vec3(0.299, 0.587, 0.114)) * halation;" +
      " float addA = clamp(max(add.r, max(add.g, add.b)), 0.0, 1.0);" +
      " col = col * a + add; a = max(a, addA); col = a > 0.0001 ? col / a : col;" +
      " float l = dot(col, vec3(0.2126, 0.7152, 0.0722)); col = mix(vec3(l), col, saturation);" +
      " col = lift + col * (gain - lift);" +
      " if (vignette > 0.0) { vec2 q = uv - 0.5; q.x *= res.x / res.y; col *= 1.0 - vignette * smoothstep(0.35, 1.05, length(q)); }" +
      " vec3 s = toSRGB(col);" +
      " if (grain > 0.0) { float g = h12(floor(uv * res) + seed * 37.0) - 0.5; float g2 = h12(floor(uv * res * 0.5) + seed * 91.0) - 0.5; float lm = dot(s, vec3(0.333)); s += (g * 0.7 + g2 * 0.5) * grain * (0.5 + 1.4 * lm * (1.0 - lm)); }" +
      " if (grain > 0.0) s += (h12(floor(uv * res) + 0.5 * seed) - 0.5) / 255.0;" + // dither: no banding in dark gradients
      " gl_FragColor = vec4(clamp(s, 0.0, 1.0) * a, a); }";
    var fin = mat(finalFrag, {
      tSrc: { value: null }, tB0: { value: null }, tB1: { value: null }, tB2: { value: null }, tB3: { value: null },
      bloom: { value: 0 }, bloomRadius: { value: 0.5 }, halation: { value: 0 }, grain: { value: 0 }, vignette: { value: 0 }, ca: { value: 0 },
      seed: { value: 0 }, res: { value: new T.Vector2(1, 1) }, saturation: { value: 1 }, lift: { value: new T.Vector3(0, 0, 0) }, gain: { value: new T.Vector3(1, 1, 1) },
    });
    return { cam: cam, scene: scene, quad: quad, weigh: weigh, bright: bright, blur: blur, fin: fin };
  }
  function pass(S, material, target, clear) {
    var r = S.renderer;
    S.post.quad.material = material;
    r.setRenderTarget(target);
    if (clear) { r.setClearColor(0x000000, 0); r.clear(true, false, false); }
    r.render(S.post.scene, S.post.cam);
  }

  // Tone mapping happens inside each lit material (as three.js does on screen), not over the finished frame:
  // unlit UI faces and screenshots (toneMapped: false) keep their exact colours, so a flat 3D frame can match the
  // 2D scene it continues, and emissive accents keep their HDR value, which is what lets only them bloom.
  var TONE_FN = { neutral: "NeutralToneMapping", agx: "AgXToneMapping", aces: "ACESFilmicToneMapping", none: "" };
  function toneMapMaterials(T, scene, tone, exposure) {
    var fn = TONE_FN[tone] == null ? TONE_FN.neutral : TONE_FN[tone];
    var key = tone + ":" + exposure;
    var pars = T.ShaderChunk.tonemapping_pars_fragment.replace(/#ifndef saturate[\s\S]*?#endif/, "").replace(/uniform float toneMappingExposure;/, "const float toneMappingExposure = 1.0;");
    scene.traverse(function (o) {
      var ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
      ms.forEach(function (m) {
        if (m.toneMapped === false || m.isShaderMaterial || m.isRawShaderMaterial || m.isShadowMaterial) return;
        if (m.userData.r3tone === key) return;
        m.userData.r3tone = key;
        var prev = m.userData.r3prevCompile || m.onBeforeCompile;
        m.userData.r3prevCompile = prev;
        m.onBeforeCompile = function (sh, r) {
          if (prev && prev !== m.onBeforeCompile) prev.call(m, sh, r);
          sh.fragmentShader = sh.fragmentShader
            .replace("#include <common>", "#include <common>\n" + pars + "\nvec3 r3Tone(vec3 c){ c *= " + Number(exposure).toFixed(4) + "; " + (fn ? "return " + fn + "(c);" : "return c;") + " }")
            .replace("#include <tonemapping_fragment>", "gl_FragColor.rgb = r3Tone(gl_FragColor.rgb);");
        };
        m.customProgramCacheKey = function () { return "r3tone:" + key; };
        m.needsUpdate = true;
      });
    });
  }

  // ------------------------------------------------------------------ helpers for building scenes
  function color(T, c) { return c instanceof T.Color ? c : new T.Color(c); }
  // material presets named after the 3D styles in the library; every one takes {color, ...overrides}
  function material(T, kind, o) {
    o = o || {};
    var c = o.color != null ? color(T, o.color) : new T.Color(0xffffff);
    var base = { color: c };
    var M;
    switch (kind) {
      case "glass":
        M = new T.MeshPhysicalMaterial(Object.assign(base, { metalness: 0, roughness: 0.04, transmission: 1, thickness: 0.6, ior: 1.5, envMapIntensity: 1.2, specularIntensity: 1, attenuationColor: c.clone(), attenuationDistance: 2.5 }));
        break;
      case "frosted-glass":
        M = new T.MeshPhysicalMaterial(Object.assign(base, { metalness: 0, roughness: 0.42, transmission: 1, thickness: 0.8, ior: 1.45, envMapIntensity: 1 }));
        break;
      case "chrome":
        M = new T.MeshPhysicalMaterial(Object.assign(base, { metalness: 1, roughness: 0.06, envMapIntensity: 1.4, clearcoat: 0.3 }));
        break;
      case "brushed-metal":
        M = new T.MeshPhysicalMaterial(Object.assign(base, { metalness: 1, roughness: 0.32, anisotropy: 0.8, envMapIntensity: 1.1 }));
        break;
      case "clay":
        M = new T.MeshPhysicalMaterial(Object.assign(base, { metalness: 0, roughness: 0.82, sheen: 0.35, sheenRoughness: 0.8, sheenColor: new T.Color(0xffffff) }));
        break;
      case "ceramic":
        M = new T.MeshPhysicalMaterial(Object.assign(base, { metalness: 0, roughness: 0.5, clearcoat: 1, clearcoatRoughness: 0.08 }));
        break;
      case "gummy":
        M = new T.MeshPhysicalMaterial(Object.assign(base, { metalness: 0, roughness: 0.18, transmission: 0.75, thickness: 1.4, ior: 1.38, attenuationColor: c.clone(), attenuationDistance: 0.5, clearcoat: 1, clearcoatRoughness: 0.05 }));
        break;
      case "plastic":
        M = new T.MeshPhysicalMaterial(Object.assign(base, { metalness: 0, roughness: 0.34, clearcoat: 0.4, clearcoatRoughness: 0.2 }));
        break;
      case "concrete":
        M = new T.MeshStandardMaterial(Object.assign(base, { metalness: 0, roughness: 0.96, roughnessMap: noiseTexture(T, o.seed || 7, 512, 0.55, 1), bumpMap: noiseTexture(T, (o.seed || 7) + 1, 512, 0.5, 0.9), bumpScale: o.bumpScale || 0.6 }));
        break;
      case "paper":
        M = new T.MeshStandardMaterial(Object.assign(base, { metalness: 0, roughness: 1, bumpMap: noiseTexture(T, o.seed || 3, 512, 0.5, 0.25), bumpScale: o.bumpScale || 0.15, side: T.DoubleSide }));
        break;
      case "emissive":
        // the one thing allowed to bloom: intensity > 1 pushes it past the bloom threshold
        M = new T.MeshStandardMaterial({ color: new T.Color(0x000000), emissive: c, emissiveIntensity: o.intensity == null ? 2.5 : o.intensity, roughness: 1, toneMapped: false });
        break;
      case "unlit":
        M = new T.MeshBasicMaterial(Object.assign(base, { toneMapped: false }));
        break;
      case "matte":
      default:
        M = new T.MeshStandardMaterial(Object.assign(base, { metalness: 0, roughness: 0.9 }));
    }
    for (var k in o) if (k !== "color" && k !== "seed" && k !== "bumpScale" && k !== "intensity" && k in M) M[k] = o[k];
    return M;
  }
  var noiseCache = {};
  function noiseTexture(T, seed, size, mid, amp) {
    var key = [seed, size, mid, amp].join(",");
    if (noiseCache[key]) return noiseCache[key];
    var cv = document.createElement("canvas");
    cv.width = cv.height = size;
    var x = cv.getContext("2d");
    var img = x.createImageData(size, size);
    var rnd = mulberry32(seed);
    // value noise, 4 octaves, tileable by wrapping the lattice
    function lattice(n) { var a = new Float32Array(n * n); for (var i = 0; i < a.length; i++) a[i] = rnd(); return a; }
    var oct = [8, 16, 48, 128].map(function (n) { return { n: n, v: lattice(n) }; });
    for (var py = 0; py < size; py++) for (var px = 0; px < size; px++) {
      var s = 0, wsum = 0, w = 1;
      for (var o = 0; o < oct.length; o++) {
        var n = oct[o].n, v = oct[o].v, fx = (px / size) * n, fy = (py / size) * n, ix = Math.floor(fx), iy = Math.floor(fy), ux = fx - ix, uy = fy - iy;
        ux = ux * ux * (3 - 2 * ux); uy = uy * uy * (3 - 2 * uy);
        var a = v[(iy % n) * n + (ix % n)], b = v[(iy % n) * n + ((ix + 1) % n)], c = v[((iy + 1) % n) * n + (ix % n)], d = v[((iy + 1) % n) * n + ((ix + 1) % n)];
        s += w * (a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy); wsum += w; w *= 0.55;
      }
      var val = Math.max(0, Math.min(255, Math.round((mid + (s / wsum - 0.5) * amp) * 255)));
      var i4 = (py * size + px) * 4;
      img.data[i4] = img.data[i4 + 1] = img.data[i4 + 2] = val; img.data[i4 + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    var t = new T.CanvasTexture(cv);
    t.wrapS = t.wrapT = T.RepeatWrapping;
    t.colorSpace = T.NoColorSpace;
    noiseCache[key] = t;
    return t;
  }
  function environment(S, preset) {
    var T = S.T;
    if (S.envs[preset]) return Promise.resolve(S.envs[preset]);
    return addon("environments/RoomEnvironment.js").then(function (m) {
      var pm = new T.PMREMGenerator(S.renderer);
      var room = new m.RoomEnvironment();
      if (preset === "soft") room.traverse(function (o) { if (o.material && o.material.color) o.material.color.multiplyScalar(0.85); });
      var tex = pm.fromScene(room, preset === "soft" ? 0.045 : 0.035).texture; // blur radius in radians; three.js warns above ~0.05
      pm.dispose();
      S.envs[preset] = tex;
      return tex;
    });
  }
  // lighting rigs: one motivated key, everything agrees with it
  function rig(T, scene, kind, o) {
    o = o || {};
    var g = new T.Group();
    g.name = "rig:" + kind;
    var key = color(T, o.key || "#fff4e6"), fill = color(T, o.fill || "#dfe8ff"), rimC = color(T, o.rim || "#ffffff");
    var dir = o.dir || [-0.6, 0.9, 0.7];
    var k = (o.intensity == null ? 1 : o.intensity) * 0.75;
    function dl(c, i, p, shadow) {
      var l = new T.DirectionalLight(c, i * k);
      l.position.set(p[0] * 10, p[1] * 10, p[2] * 10);
      if (shadow) {
        l.castShadow = true;
        l.shadow.mapSize.set(2048, 2048);
        var s = o.shadowSize || 6;
        l.shadow.camera.left = -s; l.shadow.camera.right = s; l.shadow.camera.top = s; l.shadow.camera.bottom = -s;
        l.shadow.camera.near = 0.5; l.shadow.camera.far = 40;
        l.shadow.bias = -0.0004; l.shadow.normalBias = 0.02; l.shadow.radius = o.shadowSoftness || 6;
      }
      g.add(l);
      return l;
    }
    switch (kind) {
      case "rim": // dark, sculpted: a strong back rim and a dim key
        dl(key, 0.6, dir, o.shadows !== false); dl(rimC, 3.2, [-dir[0] * 0.8, 0.4, -1]); dl(rimC, 2.2, [dir[0] * 1.1, 0.3, -0.9]);
        g.add(new T.HemisphereLight(fill, 0x000000, 0.08 * k));
        break;
      case "top-soft": // product on a sweep: big soft top light, gentle fill
        dl(key, 2.2, [0.1, 1, 0.25], o.shadows !== false); dl(fill, 0.5, [0.8, 0.3, 0.8]);
        g.add(new T.HemisphereLight(0xffffff, 0x444444, 0.45 * k));
        break;
      case "low-key": // one hard key, deep shadows
        dl(key, 3, dir, o.shadows !== false);
        g.add(new T.HemisphereLight(fill, 0x000000, 0.04 * k));
        break;
      case "window": // a broad side source, a soft wrap
        dl(key, 2.6, [-1, 0.5, 0.35], o.shadows !== false); dl(fill, 0.35, [1, 0.2, 0.6]);
        g.add(new T.HemisphereLight(0xffffff, 0x222222, 0.25 * k));
        break;
      case "three-point":
      default:
        dl(key, 2.4, dir, o.shadows !== false); dl(fill, 0.7, [-dir[0], 0.35, 0.8]); dl(rimC, 1.8, [dir[0] * 0.5, 0.6, -1]);
        g.add(new T.HemisphereLight(0xffffff, 0x303030, 0.2 * k));
    }
    scene.add(g);
    return g;
  }
  function ground(T, scene, o) {
    o = o || {};
    var size = o.size || 60;
    var mesh;
    if (o.color) {
      mesh = new T.Mesh(new T.PlaneGeometry(size, size), material(T, o.material || "matte", { color: o.color, roughness: o.roughness == null ? 0.85 : o.roughness }));
    } else {
      mesh = new T.Mesh(new T.PlaneGeometry(size, size), new T.ShadowMaterial({ opacity: o.shadowOpacity == null ? 0.28 : o.shadowOpacity }));
    }
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = o.y || 0;
    mesh.receiveShadow = true;
    mesh.name = "ground";
    scene.add(mesh);
    return mesh;
  }
  // a texture of type set with the document's own fonts (load them with @font-face first)
  function textTexture(T, o) {
    var scale = o.scale || 2;
    var font = (o.style || "") + " " + (o.weight || 700) + " " + o.size + "px " + (o.font || "sans-serif");
    var lines = String(o.text).split("\n");
    var lh = (o.lineHeight || 1.1) * o.size;
    var probe = document.createElement("canvas").getContext("2d");
    probe.font = font;
    if (o.letterSpacing != null) probe.letterSpacing = o.letterSpacing + "px";
    var w = o.width || Math.ceil(Math.max.apply(null, lines.map(function (l) { return probe.measureText(l).width; })) + o.size * 0.2);
    var h = o.height || Math.ceil(lh * lines.length + o.size * 0.3);
    var cv = document.createElement("canvas");
    cv.width = Math.ceil(w * scale); cv.height = Math.ceil(h * scale);
    var x = cv.getContext("2d");
    x.scale(scale, scale);
    if (o.background) { x.fillStyle = o.background; x.fillRect(0, 0, w, h); }
    x.font = font;
    if (o.letterSpacing != null) x.letterSpacing = o.letterSpacing + "px";
    x.fillStyle = o.color || "#ffffff";
    x.textBaseline = "alphabetic";
    x.textAlign = o.align || "left";
    var ax = o.align === "center" ? w / 2 : o.align === "right" ? w : 0;
    var block = lh * (lines.length - 1) + o.size;
    var top = o.valign === "middle" ? (h - block) / 2 : o.valign === "bottom" ? h - block - o.size * 0.15 : o.size * 0.05;
    lines.forEach(function (l, i) { x.fillText(l, ax, top + o.size * 0.9 + i * lh); });
    var t = new T.CanvasTexture(cv);
    t.colorSpace = T.SRGBColorSpace;
    t.anisotropy = 8;
    t.userData = { w: w, h: h };
    return t;
  }
  function imageTexture(T, url) {
    return new Promise(function (res, rej) {
      new T.TextureLoader().load(url, function (t) { t.colorSpace = T.SRGBColorSpace; t.anisotropy = 8; t.userData = { w: t.image.width, h: t.image.height }; res(t); }, undefined, function () { rej(new Error("could not load " + url)); });
    });
  }
  function roundedRectShape(T, w, h, r) {
    var s = new T.Shape(), x = -w / 2, y = -h / 2;
    r = Math.min(r, w / 2, h / 2);
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r);
    s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
    return s;
  }
  // a product screen as a physical slab: rounded, with depth, the real screenshot on its face
  function panel(T, o) {
    var w = o.width, h = o.height, d = o.depth == null ? w * 0.02 : o.depth, r = o.radius == null ? w * 0.03 : o.radius;
    var g = new T.Group();
    var body = new T.Mesh(new T.ExtrudeGeometry(roundedRectShape(T, w, h, r), { depth: d, bevelEnabled: true, bevelThickness: d * 0.25, bevelSize: Math.min(r * 0.3, d * 0.4), bevelSegments: 4, curveSegments: 12 }), o.body || material(T, "plastic", { color: o.bodyColor || "#16181d" }));
    body.position.z = -d;
    body.castShadow = true; body.receiveShadow = true;
    g.add(body);
    if (o.texture) {
      var faceGeo = new T.ShapeGeometry(roundedRectShape(T, w * (1 - (o.inset || 0)), h - w * (o.inset || 0), Math.max(0, r - w * (o.inset || 0) * 0.5)), 12);
      // ShapeGeometry UVs are in shape units: map them to 0..1
      var pos = faceGeo.attributes.position, uv = faceGeo.attributes.uv, fw = w * (1 - (o.inset || 0)), fh = h - w * (o.inset || 0);
      for (var i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i) / fw + 0.5, pos.getY(i) / fh + 0.5);
      var face = new T.Mesh(faceGeo, o.face || new T.MeshBasicMaterial({ map: o.texture, toneMapped: false }));
      face.position.z = d * 0.26;
      face.name = "face";
      g.add(face);
    }
    return g;
  }
  function svgExtrude(T, svgText, o) {
    o = o || {};
    return addon("loaders/SVGLoader.js").then(function (m) {
      var data = new m.SVGLoader().parse(svgText);
      var g = new T.Group();
      var box = new T.Box3();
      data.paths.forEach(function (p) {
        var fill = p.userData && p.userData.style ? p.userData.style.fill : null;
        if (fill === "none") return;
        m.SVGLoader.createShapes(p).forEach(function (shape) {
          var geo = new T.ExtrudeGeometry(shape, { depth: o.depth == null ? 20 : o.depth, bevelEnabled: o.bevel !== false, bevelThickness: o.bevelThickness || 2, bevelSize: o.bevelSize || 1.2, bevelSegments: 5, curveSegments: 24 });
          var mat = o.material ? (typeof o.material === "function" ? o.material(p.color) : o.material) : material(T, "matte", { color: p.color });
          var mesh = new T.Mesh(geo, mat);
          mesh.castShadow = true; mesh.receiveShadow = true;
          g.add(mesh);
        });
      });
      // SVG y runs down: flip, centre, scale to the requested width (world units)
      g.scale.y = -1;
      box.setFromObject(g);
      var size = new T.Vector3(), c = new T.Vector3();
      box.getSize(size); box.getCenter(c);
      var k = o.width ? o.width / size.x : 1;
      var outer = new T.Group();
      g.position.set(-c.x, -c.y, -c.z);
      outer.add(g);
      outer.scale.setScalar(k);
      return outer;
    });
  }
  function extrudeText(T, text, o) {
    o = o || {};
    return Promise.all([addon("loaders/TTFLoader.js"), addon("loaders/FontLoader.js"), addon("geometries/TextGeometry.js")]).then(function (ms) {
      return new Promise(function (res, rej) {
        new ms[0].TTFLoader().load(o.font, function (json) {
          var font = new ms[1].Font(json);
          var geo = new ms[2].TextGeometry(text, { font: font, size: o.size || 1, depth: o.depth == null ? (o.size || 1) * 0.25 : o.depth, curveSegments: 10, bevelEnabled: o.bevel !== false, bevelThickness: (o.size || 1) * 0.03, bevelSize: (o.size || 1) * 0.018, bevelSegments: 4 });
          geo.computeBoundingBox();
          var bb = geo.boundingBox;
          var ax = o.align === "left" ? -bb.min.x : o.align === "right" ? -bb.max.x : -(bb.min.x + bb.max.x) / 2;
          geo.translate(ax, -(bb.min.y + bb.max.y) / 2 * (o.middle === false ? 0 : 1), -(bb.max.z - bb.min.z) / 2);
          var mesh = new T.Mesh(geo, o.material || material(T, "matte", { color: o.color || "#ffffff" }));
          mesh.castShadow = true; mesh.receiveShadow = true;
          res(mesh);
        }, undefined, function () { rej(new Error("could not load font " + o.font + " (TTF or OTF; not WOFF2)")); });
      });
    });
  }
  // seeded points sampled on a mesh's surface (point clouds, assembly from particles)
  function surfacePoints(T, mesh, count, seed) {
    return addon("math/MeshSurfaceSampler.js").then(function (m) {
      var s = new m.MeshSurfaceSampler(mesh).setRandomGenerator(mulberry32(seed || 1)).build();
      var out = new Float32Array(count * 3), v = new T.Vector3();
      for (var i = 0; i < count; i++) { s.sample(v); out[i * 3] = v.x; out[i * 3 + 1] = v.y; out[i * 3 + 2] = v.z; }
      return out;
    });
  }

  // ------------------------------------------------------------------ the stage
  var registry = (window.__rasan3d = window.__rasan3d || { version: VERSION, stages: {}, errors: [] });
  function resolveEl(c) { return typeof c === "string" ? document.querySelector(c) : c; }

  function Stage(opts) {
    var self = this;
    if (!opts || !opts.id) throw new Error("Rasan3D.stage needs an id (the composition id)");
    if (!opts.timeline) throw new Error("Rasan3D.stage needs the scene's paused GSAP timeline as its clock");
    this.opts = opts;
    this.id = opts.id;
    this.tl = opts.timeline;
    this.duration = opts.duration || (opts.timeline.duration ? opts.timeline.duration() : 0);
    this.fps = opts.fps || 30;
    this.width = opts.width || 1920;
    this.height = opts.height || 1080;
    this.aspect = this.width / this.height;
    this.tracks = [];
    this.lastT = null;
    this.ready = false;
    this.error = null;
    this.stats = { draws: 0, lastMs: 0, lastSamples: 0, maxSamples: 0 };
    this.pendingT = null;
    this.k = null; // the build kit, handed to build() and pose()
    registry.stages[this.id] = this;

    // the clock: one tween that spans the scene and draws on every seek; it targets a plain object
    // (no element), so the motion contract treats it as exempt
    var clock = { t: 0 };
    if (this.duration > 0) {
      this.tl.to(clock, { t: this.duration, duration: this.duration, ease: "none", onUpdate: function () { self.draw(this.time()); } }, 0);
    }
    // HyperFrames' three adapter dispatches hf-seek with the root time; a scene's own clock is its
    // timeline's local time, so the event only triggers a redraw of whatever the timeline says
    window.addEventListener("hf-seek", function () { self.draw(self.tl.time()); });

    // hold the render until the scene is drawable (the runtime waits on this)
    window.__hf = window.__hf || {};
    window.__hf.buildReady = window.__hf.buildReady || {};
    this.readyPromise = this._init().then(
      function () { self.ready = true; self.draw(self.pendingT != null ? self.pendingT : self.tl.time(), true); },
      function (e) { self.error = String((e && e.message) || e); registry.errors.push(self.id + ": " + self.error); console.error("[Rasan3D] " + self.id + ": " + self.error); }
    );
    window.__hf.buildReady["rasan3d:" + this.id] = this.readyPromise;
  }

  Stage.prototype._init = function () {
    var self = this, o = this.opts;
    return loadThree().then(function (T) {
      var S = getShared(T);
      self.T = T;
      self.S = S;
      self.canvas = resolveEl(o.canvas);
      if (!self.canvas) throw new Error("canvas " + o.canvas + " not found");
      self.ctx2d = self.canvas.getContext("2d");
      // pixelRatio: small previews (a gallery tile) render below the composition's size; films never set it
      self.dpr = o.pixelRatio || Math.min(2, window.__rasan3dScale || window.devicePixelRatio || 1);
      if (quality() === "check") self.dpr = Math.min(self.dpr, 1);
      self.canvas.width = Math.round(self.width * self.dpr);
      self.canvas.height = Math.round(self.height * self.dpr);
      self.scene = new T.Scene();
      self.camera = new T.PerspectiveCamera(lens(50, self.aspect), self.aspect, o.near || 0.05, o.far || 400);
      self.scene.add(self.camera);
      if (o.background) self.scene.background = color(T, o.background);
      if (o.fog) self.scene.fog = new T.Fog(color(T, o.fog.color || o.background || "#000000"), o.fog.near || 10, o.fog.far || 60);
      var kit = (self.k = {
        THREE: T, T: T, stage: self, scene: self.scene, camera: self.camera, R3: api,
        material: function (kind, mo) { return material(T, kind, mo); },
        rig: function (kind, ro) { return rig(T, self.scene, kind, ro); },
        ground: function (go) { return ground(T, self.scene, go); },
        text: function (to) { return textTexture(T, to); },
        image: function (url) { return imageTexture(T, url); },
        panel: function (po) { return panel(T, po); },
        svg: function (svg, so) { return svgExtrude(T, svg, so); },
        svgUrl: function (url, so) { return fetch(url).then(function (r) { return r.text(); }).then(function (t) { return svgExtrude(T, t, so); }); },
        extrudeText: function (text, eo) { return extrudeText(T, text, eo); },
        surfacePoints: function (mesh, n, seed) { return surfacePoints(T, mesh, n, seed); },
        addon: addon, rng: mulberry32, ease: ease, orbit: orbit, lens: function (mm) { return lens(mm, self.aspect); },
        // at/prog record the keys and eases pose() uses, so the gate checks them against motion.md too
        at: function (t, keys) { self._seen(keys, "pose.at"); return at(t, keys); },
        prog: function (t, a, b, e) { self._seenEase(e, "pose.prog"); return prog(t, a, b, e); },
        layout: function (lo) { return self.layout(lo); },
        pxPlane: function (group, po) { return self.pxPlane(group, po); },
        toScreen: function (v) { return self.toScreen(v); },
        track: function (name, keys) { return self.track(name, keys); },
        objects: null,
      });
      var envP = o.environment === false || o.environment === "none" ? Promise.resolve(null) : environment(S, (o.environment && o.environment.preset) || o.environment || "studio");
      return envP.then(function (env) {
        if (env) {
          self.scene.environment = env;
          // the studio room is bright: half strength leaves the key light in charge
          self.scene.environmentIntensity = o.environment && o.environment.intensity != null ? o.environment.intensity : 0.5;
        }
        self._readCamera();
        return Promise.resolve(o.build ? o.build(kit) : null);
      }).then(function (objects) {
        kit.objects = objects || {};
        return document.fonts && document.fonts.ready ? document.fonts.ready : null;
      }).then(function () {
        // textures queued through three's loaders must finish before the first frame
        return new Promise(function (res) {
          var m = T.DefaultLoadingManager;
          if (!m || m.itemsTotal === undefined) return res();
          (function wait(n) { if (m.itemsLoaded >= m.itemsTotal || n > 400) res(); else setTimeout(function () { wait(n + 1); }, 10); })(0);
        });
      }).then(function () {
        self._pose(0);
        toneMapMaterials(T, self.scene, o.toneMapping || "neutral", o.exposure == null ? 1 : o.exposure);
        S.renderer.compile(self.scene, self.camera);
      });
    });
  };

  // declarative camera: {pos, target, lens (mm), roll (deg), focus (distance | "target"), fstop, aperture}
  Stage.prototype._readCamera = function () {
    var c = this.opts.camera || {};
    this.camKeys = c;
    var self = this;
    ["pos", "target", "lens", "roll", "focus"].forEach(function (k) { if (c[k] != null) self.track("camera." + k, c[k]); });
  };
  Stage.prototype._applyCamera = function (t) {
    var T = this.T, c = this.camKeys || {}, cam = this.camera;
    var p = at(t, c.pos) || [0, 0, 10];
    var q = at(t, c.target) || [0, 0, 0];
    cam.position.set(p[0], p[1], p[2]);
    cam.up.set(0, 1, 0);
    cam.lookAt(q[0], q[1], q[2]);
    var roll = at(t, c.roll);
    if (roll) cam.rotateZ((roll * Math.PI) / 180);
    var mm = at(t, c.lens);
    cam.fov = lens(mm || 50, this.aspect);
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld(true);
    var f = at(t, c.focus);
    this._focus = f === "target" || f == null ? cam.position.distanceTo(new T.Vector3(q[0], q[1], q[2])) : Number(f);
    this._mm = mm || 50;
  };
  Stage.prototype._pose = function (t) {
    this._applyCamera(t);
    if (this.opts.pose) this.opts.pose(t, this.k);
    this.scene.updateMatrixWorld(true);
    this.camera.updateMatrixWorld(true);
  };
  Stage.prototype.track = function (name, keys) {
    var eases = [];
    var same = function (a, b) { return JSON.stringify(a) === JSON.stringify(b); };
    // a key that holds the previous value is a hold, not a move: its ease doesn't matter
    if (Array.isArray(keys) && Array.isArray(keys[0])) keys.forEach(function (k, i) { if (i > 0 && !same(k[1], keys[i - 1][1])) eases.push(k[2] == null ? "(implicit)" : typeof k[2] === "function" ? "(function)" : String(k[2])); });
    var times = Array.isArray(keys) && Array.isArray(keys[0]) ? keys.map(function (k) { return k[0]; }) : null;
    this.tracks.push({ name: name, eases: eases, times: times, fn: typeof keys === "function" });
    return function (t) { return at(t, keys); };
  };
  Stage.prototype._seen = function (keys, name) {
    if (!Array.isArray(keys) || !Array.isArray(keys[0])) return;
    // pose() builds its key arrays inline (a new array every call): dedupe by what they say, not identity
    this._seenSet = this._seenSet || new WeakSet();
    if (this._seenSet.has(keys)) return;
    this._seenSet.add(keys);
    var sig = JSON.stringify(keys.map(function (k) { return [k[0], k[1], typeof k[2] === "function" ? "(f)" : k[2]]; }));
    this._seenSigs = this._seenSigs || {};
    if (this._seenSigs[sig] || this.tracks.length > 120) return;
    this._seenSigs[sig] = 1;
    this.track(name + "#" + this.tracks.length, keys);
  };
  Stage.prototype._seenEase = function (e, name) {
    this._seenEases = this._seenEases || {};
    var k = e == null ? "(implicit)" : typeof e === "function" ? "(function)" : String(e);
    if (this._seenEases[k]) return;
    this._seenEases[k] = 1;
    this.tracks.push({ name: name + "#" + this.tracks.length, eases: [k], times: null, fn: false });
  };
  // a group whose units are composition pixels (x right from the left edge, y down from the top) on the
  // plane `distance` in front of the camera as it stands at time `at`: content laid out here lands on
  // exactly those pixels when the camera is at that pose. This is the 2D ↔ 3D seam.
  Stage.prototype.layout = function (o) {
    o = o || {};
    var T = this.T;
    var tt = o.at || 0;
    this._applyCamera(tt);
    var d = o.distance || this._focus || 10;
    var k = (2 * d * Math.tan(((this.camera.fov / 2) * Math.PI) / 180)) / this.height;
    var g = new T.Group();
    var m = new T.Matrix4().copy(this.camera.matrixWorld);
    m.multiply(new T.Matrix4().makeTranslation(0, 0, -d));
    m.multiply(new T.Matrix4().makeScale(k, -k, k));
    m.multiply(new T.Matrix4().makeTranslation(-this.width / 2, -this.height / 2, 0));
    m.decompose(g.position, g.quaternion, g.scale);
    g.userData.pxPerUnit = 1 / k;
    g.userData.distance = d;
    this.scene.add(g);
    return g;
  };
  // a plane w×h px at (x, y) inside a layout() group, carrying a texture (a screenshot, a text texture)
  Stage.prototype.pxPlane = function (group, o) {
    var T = this.T;
    var geo = new T.PlaneGeometry(o.w, o.h);
    var mat = o.material || new T.MeshBasicMaterial({ map: o.texture || null, color: o.color != null ? color(T, o.color) : 0xffffff, transparent: o.transparent !== false, toneMapped: false, side: T.DoubleSide });
    var mesh = new T.Mesh(geo, mat);
    // the group's y axis points down: flip the plane so its texture reads upright
    mesh.scale.y = -1;
    mesh.position.set(o.x + o.w / 2, o.y + o.h / 2, o.z || 0);
    group.add(mesh);
    return mesh;
  };
  // world point → composition pixels, at the current pose (pin DOM labels and leader lines to 3D)
  Stage.prototype.toScreen = function (v) {
    var T = this.T;
    var p = (v instanceof T.Vector3 ? v.clone() : new T.Vector3(v[0], v[1], v[2])).project(this.camera);
    return { x: ((p.x + 1) / 2) * this.width, y: ((1 - p.y) / 2) * this.height, z: p.z, visible: p.z > -1 && p.z < 1 };
  };

  // screen-space travel of the scene across the shutter, from bounding-box corners of what's visible
  Stage.prototype._travel = function (t, half) {
    var T = this.T, self = this;
    var meshes = [];
    this.scene.traverseVisible(function (o) { if (o.isMesh && o.geometry && meshes.length < 64 && o.name !== "ground") meshes.push(o); });
    var corners = function () {
      var out = [];
      meshes.forEach(function (m) {
        if (!m.geometry.boundingBox) m.geometry.computeBoundingBox();
        var b = m.geometry.boundingBox;
        for (var i = 0; i < 8; i++) {
          var v = new T.Vector3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(m.matrixWorld).project(self.camera);
          out.push(v);
        }
      });
      return out;
    };
    this._pose(t - half);
    var a = corners();
    this._pose(t + half);
    var b = corners();
    var d = 0;
    for (var i = 0; i < a.length; i++) {
      if (Math.abs(a[i].z) > 1 || Math.abs(b[i].z) > 1) continue;
      var dx = ((b[i].x - a[i].x) / 2) * this.width, dy = ((b[i].y - a[i].y) / 2) * this.height;
      d = Math.max(d, Math.sqrt(dx * dx + dy * dy));
    }
    return d;
  };

  Stage.prototype.samplesFor = function (t) {
    var q = QUALITY[quality()];
    var mb = this.opts.motionBlur === false ? null : this.opts.motionBlur || { shutter: 0.5 };
    var dof = this.camKeys && (this.camKeys.fstop || this.camKeys.aperture);
    var n = 1;
    if (mb) {
      var half = (mb.shutter == null ? 0.5 : mb.shutter) / this.fps / 2;
      var travel = this._travel(t, half);
      n = typeof mb.samples === "number" ? mb.samples : Math.ceil(travel / 1.5);
    }
    if (dof) n = Math.max(n, q.dofSamples);
    if (this.opts.antialias !== false) n = Math.max(n, quality() === "final" ? 4 : 1);
    return Math.max(1, Math.min(q.maxSamples, n));
  };

  // draw the frame at local time t into this stage's canvas
  Stage.prototype.draw = function (t, force) {
    if (!this.ready) { this.pendingT = t; return; }
    if (!force && this.lastT === t) return;
    if (this.error) return;
    var self = this, T = this.T, S = this.S, r = S.renderer, o = this.opts;
    var clock = window["perf" + "ormance"]; // timing only, for the frame budget report; never drives motion
    var t0 = clock ? clock.now() : 0;
    try {
      var W = Math.round(this.width * this.dpr), H = Math.round(this.height * this.dpr);
      var rts = ensureSize(S, W, H);
      toneMapMaterials(T, this.scene, o.toneMapping || "neutral", o.exposure == null ? 1 : o.exposure);
      var n = this.samplesFor(t);
      var mb = o.motionBlur === false ? null : o.motionBlur || { shutter: 0.5 };
      var shutter = mb ? (mb.shutter == null ? 0.5 : mb.shutter) / this.fps : 0;
      var c = this.camKeys || {};
      var fstop = c.fstop, apertureR = c.aperture;
      r.setRenderTarget(rts.accum);
      r.setClearColor(0x000000, 0);
      r.clear(true, true, true);
      var bg = this.scene.background;
      for (var i = 0; i < n; i++) {
        var ti = n > 1 && shutter > 0 ? t + shutter * ((i + 0.5) / n - 0.5) : t;
        this._pose(ti);
        var cam = this.camera;
        if (n > 1) {
          // aperture: shift the eye on a disc and shear the frustum so the focus plane stays put
          var ndcX = 0, ndcY = 0;
          if (fstop || apertureR) {
            var R = apertureR != null ? apertureR : ((this._mm / 1000) / (2 * fstop)) * (o.unitsPerMeter || 1);
            var u1 = halton(i + 1, 5), u2 = halton(i + 1, 7);
            var rr = Math.sqrt(u1) * R, th = u2 * Math.PI * 2;
            var dx = Math.cos(th) * rr, dy = Math.sin(th) * rr;
            cam.translateX(dx); cam.translateY(dy);
            cam.updateMatrixWorld(true);
            var P0 = cam.projectionMatrix.elements;
            ndcX += (P0[0] * dx) / this._focus;
            ndcY += (P0[5] * dy) / this._focus;
          }
          // sub-pixel jitter: anti-aliasing for free across the samples
          ndcX += ((halton(i + 1, 2) - 0.5) * 2) / W;
          ndcY += ((halton(i + 1, 3) - 0.5) * 2) / H;
          var P = cam.projectionMatrix.elements;
          P[8] -= ndcX; P[9] -= ndcY;
          cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
        }
        var srt = n > 1 ? rts.sample1 : rts.sample;
        r.setRenderTarget(srt);
        var bgc = bg && bg.isColor ? bg : null;
        r.setClearColor(bgc || 0x000000, bgc ? 1 : 0);
        r.clear(true, true, true);
        r.render(this.scene, cam);
        S.post.weigh.uniforms.tSrc.value = srt.texture;
        S.post.weigh.uniforms.weight.value = 1 / n;
        pass(S, S.post.weigh, rts.accum, false);
      }
      // restore the exact pose at t (DOM sync and toScreen read it)
      this._pose(t);
      this.camera.updateProjectionMatrix();
      // post
      var P2 = o.post || {};
      var bloom = P2.bloom ? (typeof P2.bloom === "number" ? { strength: P2.bloom } : P2.bloom) : null;
      var halation = P2.halation || 0;
      var fin = S.post.fin.uniforms;
      if (bloom || halation) {
        S.post.bright.uniforms.tSrc.value = rts.accum.texture;
        S.post.bright.uniforms.threshold.value = bloom && bloom.threshold != null ? bloom.threshold : 1.15;
        S.post.bright.uniforms.knee.value = bloom && bloom.knee != null ? bloom.knee : 0.1;
        var src = rts.accum.texture;
        for (var lv = 0; lv < rts.chain.length; lv++) {
          var pair = rts.chain[lv];
          if (lv === 0) pass(S, S.post.bright, pair[0], true);
          else { S.post.weigh.uniforms.tSrc.value = src; S.post.weigh.uniforms.weight.value = 1; pass(S, S.post.weigh, pair[0], true); }
          S.post.blur.uniforms.tSrc.value = pair[0].texture; S.post.blur.uniforms.dir.value.set(1 / pair[0].width, 0); pass(S, S.post.blur, pair[1], true);
          S.post.blur.uniforms.tSrc.value = pair[1].texture; S.post.blur.uniforms.dir.value.set(0, 1 / pair[0].height); pass(S, S.post.blur, pair[0], true);
          src = pair[0].texture;
        }
      }
      fin.tSrc.value = rts.accum.texture;
      fin.tB0.value = rts.chain[0][0].texture; fin.tB1.value = rts.chain[1][0].texture; fin.tB2.value = rts.chain[2][0].texture; fin.tB3.value = rts.chain[3][0].texture;
      fin.bloom.value = bloom ? (bloom.strength == null ? 0.6 : bloom.strength) : 0;
      fin.bloomRadius.value = bloom && bloom.radius != null ? bloom.radius : 0.5;
      fin.halation.value = halation;
      fin.grain.value = P2.grain || 0;
      fin.vignette.value = P2.vignette || 0;
      fin.ca.value = P2.ca || 0;
      fin.seed.value = frameIdx(t, this.fps) % 997; // grain re-rolls per frame, constant across a frame's samples
      fin.res.value.set(W, H);
      fin.saturation.value = P2.saturation == null ? 1 : P2.saturation;
      var lift = P2.lift || [0, 0, 0], gain = P2.gain || [1, 1, 1];
      fin.lift.value.set(lift[0], lift[1], lift[2]);
      fin.gain.value.set(gain[0], gain[1], gain[2]);
      pass(S, S.post.fin, null, true);
      // into this scene's own canvas
      var x = this.ctx2d;
      x.setTransform(1, 0, 0, 1, 0, 0);
      x.clearRect(0, 0, this.canvas.width, this.canvas.height);
      x.drawImage(S.canvas, 0, 0, W, H, 0, 0, this.canvas.width, this.canvas.height);
      if (o.onDraw) o.onDraw(t, this.k);
      this.lastT = t;
      this.stats.draws++;
      this.stats.lastSamples = n;
      this.stats.maxSamples = Math.max(this.stats.maxSamples, n);
      this.stats.lastMs = clock ? clock.now() - t0 : 0;
    } catch (e) {
      this.error = String((e && e.message) || e);
      registry.errors.push(this.id + ": " + this.error);
      console.error("[Rasan3D] " + this.id + ": " + this.error);
    }
  };
  Stage.prototype.manifest = function () {
    var o = this.opts;
    return {
      id: this.id, duration: this.duration, fps: this.fps, width: this.width, height: this.height,
      tracks: this.tracks, camera: !!o.camera, motionBlur: o.motionBlur === false ? false : o.motionBlur || { shutter: 0.5 },
      dof: !!(o.camera && (o.camera.fstop || o.camera.aperture)), post: o.post || {}, toneMapping: o.toneMapping || "neutral",
      environment: o.environment === false ? "none" : (o.environment && o.environment.preset) || o.environment || "studio",
      background: o.background || "transparent", stats: this.stats, error: this.error, declared: o.declare || null,
    };
  };

  var api = {
    version: VERSION, three: THREE_VERSION, base: BASE,
    stage: function (opts) { return new Stage(opts); },
    loadThree: loadThree, addon: addon,
    at: at, keys: at, prog: prog, ease: ease, lens: lens, orbit: orbit, rng: mulberry32, frameIdx: frameIdx, halton: halton,
  };
  window.Rasan3D = api;
})();
