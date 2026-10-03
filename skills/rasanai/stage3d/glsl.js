/* Rasan3D GLSL library + geometry helpers. A classic script: defines window.Rasan3DLib.
 *
 *   Rasan3DLib.glsl        named GLSL (ES 3.00 / WebGL2) source chunks: core noise sdf raymarch npr color post field
 *   Rasan3DLib.tube        (points | fn(t) -> point, { radius, segments, radial, closed }) -> BufferGeometry, uv = (u along, v around)
 *   Rasan3DLib.instanceField({ geometry, material, cell, count, around, wrap, place, seed }) -> InstancedMesh kept tiled around the camera
 *
 * rasan3d.js merges this into Rasan3D.glsl / Rasan3D.tube / Rasan3D.instanceField and k.glsl / k.tube / k.instanceField.
 *
 * Every chunk is self-contained and include-guarded (it carries the chunks it needs), so any combination can be
 * concatenated in any order, in a render-graph pass, a ShaderMaterial or an onBeforeCompile patch:
 *     frag: Rasan3D.glsl.noise + Rasan3D.glsl.npr + "void main(){ ... }"
 *     frag: "#include <r3/noise>\n#include <r3/npr>\n..."  (glsl.resolve(src) expands these; the render graph does it for you)
 * Every function and macro is prefixed r3 / R3_ so it never collides with three.js or your own code.
 * Nothing here reads the clock or Math.random; every function is a pure function of its arguments.
 */
(function () {
  "use strict";
  var Lib = (window.Rasan3DLib = window.Rasan3DLib || {});

  // ---------------------------------------------------------------------------------------------- GLSL
  var chunks = {};
  function chunk(name, deps, body) {
    var pre = deps.map(function (d) { return chunks[d]; }).join("");
    chunks[name] = pre + "#ifndef R3_CHUNK_" + name.toUpperCase() + "\n#define R3_CHUNK_" + name.toUpperCase() + "\n" + body + "\n#endif\n";
  }

  // ---- core: constants, small math, hashes (included by every other chunk)
  chunk("core", [], /* glsl */ `
// ===== r3 core =====
#define R3_PI 3.14159265359
#define R3_TAU 6.28318530718
float r3Sat(float x) { return clamp(x, 0.0, 1.0); }
vec2  r3Sat(vec2 x)  { return clamp(x, 0.0, 1.0); }
vec3  r3Sat(vec3 x)  { return clamp(x, 0.0, 1.0); }
float r3Remap(float x, float a, float b, float c, float d) { return c + (d - c) * r3Sat((x - a) / (b - a)); }  // x in [a,b] -> [c,d], clamped
mat2  r3Rot2(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }                              // p = r3Rot2(a) * p
vec3  r3Rot(vec3 p, vec3 axis, float a) { axis = normalize(axis); float c = cos(a), s = sin(a); return p * c + cross(axis, p) * s + axis * dot(axis, p) * (1.0 - c); }
float r3Luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float r3Smooth(float t) { t = r3Sat(t); return t * t * (3.0 - 2.0 * t); }
// hashes (Dave Hoskins, no sine; stable on every GPU). 1 = float, 2 = vec2, 3 = vec3 in/out: r3Hash<out><in>
float r3Hash11(float p) { p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float r3Hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2  r3Hash22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float r3Hash13(vec3 p3) { p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3  r3Hash33(vec3 p3) { p3 = fract(p3 * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }
vec2  r3Hash23(vec3 p3) { return r3Hash33(p3).xy; }
`);

  // ---- noise
  chunk("noise", ["core"], /* glsl */ `
// ===== r3 noise =====
// r3Value2/3(p)      value noise, 0..1
// r3Simplex2/3(p)    simplex noise, about -1..1 (Ashima / Gustavson, MIT)
// r3Fbm2/3(p, oct)   fractal sum of simplex (oct 1..8), about -1..1
// r3Worley2(p)       vec2(F1, F2) distances to the nearest two feature points (cells of size 1)
// r3Curl2(p, t)      divergence-free 2D flow (use to advect particles / smoke); r3Curl3(p, t) for 3D
float r3Value2(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(r3Hash12(i), r3Hash12(i + vec2(1, 0)), f.x), mix(r3Hash12(i + vec2(0, 1)), r3Hash12(i + vec2(1, 1)), f.x), f.y);
}
float r3Value3(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(r3Hash13(i), r3Hash13(i + vec3(1, 0, 0)), f.x), mix(r3Hash13(i + vec3(0, 1, 0)), r3Hash13(i + vec3(1, 1, 0)), f.x), f.y);
  float b = mix(mix(r3Hash13(i + vec3(0, 0, 1)), r3Hash13(i + vec3(1, 0, 1)), f.x), mix(r3Hash13(i + vec3(0, 1, 1)), r3Hash13(i + vec3(1, 1, 1)), f.x), f.y);
  return mix(a, b, f.z);
}
vec3 _r3Mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 _r3Mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 _r3Permute(vec3 x) { return _r3Mod289(((x * 34.0) + 10.0) * x); }
vec4 _r3Permute(vec4 x) { return _r3Mod289(((x * 34.0) + 10.0) * x); }
float r3Simplex2(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy)); vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = i - floor(i * (1.0 / 289.0)) * 289.0;
  vec3 p = _r3Permute(_r3Permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
float r3Simplex3(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
  i = _r3Mod289(i);
  vec4 p = _r3Permute(_r3Permute(_r3Permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0; vec4 s1 = floor(b1) * 2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0); m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float r3Fbm2(vec2 p, int oct) { float s = 0.0, a = 0.5; for (int i = 0; i < 8; i++) { if (i >= oct) break; s += a * r3Simplex2(p); p = r3Rot2(0.6) * p * 2.03 + 11.7; a *= 0.5; } return s; }
float r3Fbm3(vec3 p, int oct) { float s = 0.0, a = 0.5; for (int i = 0; i < 8; i++) { if (i >= oct) break; s += a * r3Simplex3(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }
vec2 r3Worley2(vec2 p) {
  vec2 i = floor(p), f = fract(p); float d1 = 8.0, d2 = 8.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y)); vec2 o = r3Hash22(i + g);
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return vec2(d1, d2);
}
vec2 r3Curl2(vec2 p, float t) {
  float e = 0.01;
  float n1 = r3Simplex3(vec3(p + vec2(0.0, e), t)), n2 = r3Simplex3(vec3(p - vec2(0.0, e), t));
  float n3 = r3Simplex3(vec3(p + vec2(e, 0.0), t)), n4 = r3Simplex3(vec3(p - vec2(e, 0.0), t));
  return vec2(n1 - n2, -(n3 - n4)) / (2.0 * e);
}
vec3 _r3Pot(vec3 p, float t) { return vec3(r3Simplex3(p + vec3(0.0, 0.0, t)), r3Simplex3(p + vec3(31.4, 17.1, t)), r3Simplex3(p + vec3(-23.7, 49.2, t))); }
vec3 r3Curl3(vec3 p, float t) {
  float e = 0.02; vec2 k = vec2(e, 0.0);
  vec3 dx = _r3Pot(p + k.xyy, t) - _r3Pot(p - k.xyy, t);
  vec3 dy = _r3Pot(p + k.yxy, t) - _r3Pot(p - k.yxy, t);
  vec3 dz = _r3Pot(p + k.yyx, t) - _r3Pot(p - k.yyx, t);
  return vec3(dy.z - dz.y, dz.x - dx.z, dx.y - dy.x) / (2.0 * e);
}
`);

  // ---- sdf
  chunk("sdf", ["core"], /* glsl */ `
// ===== r3 sdf ===== (signed distances: negative inside; unit-less, scale p yourself)
float r3SdSphere(vec3 p, float r) { return length(p) - r; }
float r3SdBox(vec3 p, vec3 b) { vec3 q = abs(p) - b; return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0); }
float r3SdRoundBox(vec3 p, vec3 b, float r) { vec3 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r; }
float r3SdCapsule(vec3 p, vec3 a, vec3 b, float r) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h) - r; }
float r3SdSegment(vec3 p, vec3 a, vec3 b) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h); } // unsigned line distance
float r3SdTorus(vec3 p, vec2 t) { vec2 q = vec2(length(p.xz) - t.x, p.y); return length(q) - t.y; }            // t = (major, minor), around Y
float r3SdCylinder(vec3 p, float h, float r) { vec2 d = abs(vec2(length(p.xz), p.y)) - vec2(r, h); return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)); } // along Y, half height h
float r3SdPlane(vec3 p, vec3 n, float h) { return dot(p, normalize(n)) + h; }
float r3SdOctahedron(vec3 p, float s) { p = abs(p); return (p.x + p.y + p.z - s) * 0.57735027; }
float r3SdEllipsoid(vec3 p, vec3 r) { float k0 = length(p / r), k1 = length(p / (r * r)); return k0 * (k0 - 1.0) / k1; } // bound, not exact
float r3SdCircle(vec2 p, float r) { return length(p) - r; }
float r3SdBox2(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float r3SdSegment2(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h); }
// booleans
float r3Union(float a, float b) { return min(a, b); }
float r3Subtract(float a, float b) { return max(a, -b); }   // a minus b
float r3Intersect(float a, float b) { return max(a, b); }
float r3SMin(float a, float b, float k) { float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0); return mix(b, a, h) - k * h * (1.0 - h); } // smooth union, k = blend width
float r3SMax(float a, float b, float k) { return -r3SMin(-a, -b, k); }
// domain operators: return the point to feed to your sdf
vec3 r3Rep(vec3 p, vec3 c) { return mod(p + 0.5 * c, c) - 0.5 * c; }                                           // endless repetition, cell size c
vec3 r3RepId(vec3 p, vec3 c, out vec3 id) { id = floor(p / c + 0.5); return p - c * id; }                     // + the cell index (hash it for per-cell variation)
vec3 r3RepLim(vec3 p, vec3 c, vec3 lo, vec3 hi) { return p - c * clamp(floor(p / c + 0.5), lo, hi); }       // repeat only for cell indices lo..hi
vec3 r3RepMirror(vec3 p, vec3 c) { return c - abs(mod(p, 2.0 * c) - c) - 0.5 * c; }                          // neighbouring cells mirrored: seamless, kaleidoscopic
vec3 r3RepRot(vec3 p, vec3 c, float amount, out vec3 id) {                                                    // each cell rotated about a hashed axis by up to +-amount radians
  id = floor(p / c + 0.5); vec3 q = p - c * id; vec3 h = r3Hash33(id);
  return r3Rot(q, h * 2.0 - 1.0 + vec3(0.0001), (h.x - 0.5) * 2.0 * amount);                                 // rotation shrinks the distance bound: march with a step factor ~0.7
}
vec3 r3RepRotY(vec3 p, vec3 c, float amount, out vec3 id) {                                                   // same, always about Y (stays upright)
  id = floor(p / c + 0.5); vec3 q = p - c * id; q.xz = r3Rot2((r3Hash13(id) - 0.5) * 2.0 * amount) * q.xz; return q;
}
vec2 r3RepPolar(vec2 p, float n) { float a = R3_TAU / n; float t = mod(atan(p.y, p.x) + 0.5 * a, a) - 0.5 * a; return length(p) * vec2(cos(t), sin(t)); } // n spokes around the origin
vec3 r3Twist(vec3 p, float k) { p.xz = r3Rot2(k * p.y) * p.xz; return p; }                                     // twist about Y, k radians per unit
vec3 r3Bend(vec3 p, float k) { p.xy = r3Rot2(k * p.x) * p.xy; return p; }                                      // bend about Z, k radians per unit x
`);

  // ---- raymarch
  chunk("raymarch", ["core"], /* glsl */ `
// ===== r3 raymarch =====
// Define your distance field BEFORE this chunk:   float map(vec3 p) { ... }
// (or  #define R3_MAP myMap  with  float myMap(vec3 p)  declared above). Optional tuning, define before the chunk:
//   R3_STEPS 96   max march steps          R3_EPS 0.001   hit distance at t = 0
//   R3_CONE 0.0   extra hit slack per unit of t (set to about 1.0 / focal px for a pixel-sized epsilon: no shimmer far away)
//   R3_RELAX 0.9  step multiplier (lower for fields that over-estimate: twisted, rotated, noisy)
#ifndef R3_MAP
#define R3_MAP map
#endif
#ifndef R3_STEPS
#define R3_STEPS 96
#endif
#ifndef R3_EPS
#define R3_EPS 0.001
#endif
#ifndef R3_CONE
#define R3_CONE 0.0
#endif
#ifndef R3_RELAX
#define R3_RELAX 0.9
#endif
struct R3March { float t; float d; float steps; bool hit; };
// march from ro along unit rd between tmin and tmax; .t = distance travelled, .steps/R3_STEPS = a cheap "glow/cost" value
R3March r3March(vec3 ro, vec3 rd, float tmin, float tmax) {
  float t = tmin, d = 1e9; float n = 0.0; bool hit = false;
  for (int i = 0; i < R3_STEPS; i++) {
    d = R3_MAP(ro + rd * t); n = float(i);
    if (d < R3_EPS + R3_CONE * t) { hit = true; break; }
    t += d * R3_RELAX;
    if (t > tmax) break;
  }
  return R3March(t, d, n / float(R3_STEPS), hit);
}
vec3 r3Normal(vec3 p, float e) {                         // tetrahedron gradient, 4 map() calls; e about 0.5 * pixel footprint
  const vec2 k = vec2(1.0, -1.0);
  return normalize(k.xyy * R3_MAP(p + k.xyy * e) + k.yyx * R3_MAP(p + k.yyx * e) + k.yxy * R3_MAP(p + k.yxy * e) + k.xxx * R3_MAP(p + k.xxx * e));
}
float r3SoftShadow(vec3 ro, vec3 rd, float tmin, float tmax, float k) {   // 1 lit .. 0 shadowed, k = hardness (8 soft, 32 crisp)
  float res = 1.0, t = tmin, ph = 1e10;
  for (int i = 0; i < 40; i++) {
    float h = R3_MAP(ro + rd * t);
    float y = h * h / (2.0 * ph); float dd = sqrt(max(h * h - y * y, 0.0));
    res = min(res, k * dd / max(0.0, t - y)); ph = h;
    t += clamp(h, 0.02, 0.5);
    if (res < 0.002 || t > tmax) break;
  }
  res = clamp(res, 0.0, 1.0); return res * res * (3.0 - 2.0 * res);
}
float r3AO(vec3 p, vec3 n, float dist) {                 // ambient occlusion 1 open .. 0 closed; dist = reach in world units
  float occ = 0.0, sca = 1.0;
  for (int i = 0; i < 5; i++) { float h = dist * (0.05 + 0.95 * float(i) / 4.0); occ += (h - R3_MAP(p + n * h)) * sca; sca *= 0.78; }
  return clamp(1.0 - 1.4 * occ / dist, 0.0, 1.0);
}
// pixel footprint for a march hit: how much a surface coordinate u changes across ONE pixel (the fw that r3HatchFW / r3StippleFW want).
//   pxAngle = r3PixelAngle(uProjInv, uRes)   (radians per pixel)    gradU = d u / d worldPosition (a vec3; for u = dot(p, g) it is g)
//   t = hit distance, rd = unit ray, n = surface normal. Grazing surfaces are handled (clamped), so lines thin out instead of aliasing.
float r3PixelAngle(mat4 projInv, vec2 res) { return 2.0 * abs(projInv[1][1]) / res.y; }
float r3FootprintU(vec3 gradU, vec3 n, vec3 rd, float t, float pxAngle) {
  float nd = dot(n, rd); nd = (nd < 0.0 ? -1.0 : 1.0) * max(abs(nd), 0.06);
  vec3 v = gradU - n * (dot(gradU, rd) / nd);
  return t * pxAngle * length(v - rd * dot(v, rd));
}
float r3Footprint(float t, float pxAngle, vec3 n, vec3 rd) { return t * pxAngle / max(abs(dot(n, rd)), 0.06); }   // world size of one pixel on the surface (for normal epsilon etc.)
// world ray for a screen uv (0..1): from render-graph uniforms uProjInv (camera.projectionMatrixInverse), uCamMatrixWorld
vec3 r3RayDir(vec2 uv, mat4 projInv, mat4 camWorld) {
  vec4 v = projInv * vec4(uv * 2.0 - 1.0, 1.0, 1.0); v.xyz /= v.w;
  return normalize((camWorld * vec4(v.xyz, 0.0)).xyz);
}
// depth compositing: write gl_FragDepth = r3FragDepth(worldPoint, projectionMatrix * viewMatrix) in a pass with depth: true
float r3FragDepth(vec3 worldP, mat4 viewProj) { vec4 c = viewProj * vec4(worldP, 1.0); return clamp(0.5 * (c.z / c.w) + 0.5, 0.0, 1.0); }
`);

  // ---- color
  chunk("color", ["core"], /* glsl */ `
// ===== r3 color =====
vec3 r3ToSRGB(vec3 c) { return mix(12.92 * c, 1.055 * pow(max(c, 0.0), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
vec3 r3ToLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 r3Hex(float h) { return r3ToLinear(vec3(floor(h / 65536.0), mod(floor(h / 256.0), 256.0), mod(h, 256.0)) / 255.0); }   // r3Hex(16750848.0) etc: pass the hex as a float, returns LINEAR rgb
// Inigo Quilez cosine palette: a + b * cos(2pi (c t + d))
vec3 r3Palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) { return a + b * cos(R3_TAU * (c * t + d)); }
vec3 r3Ramp3(float t, vec3 c0, vec3 c1, vec3 c2) { t = r3Sat(t); return t < 0.5 ? mix(c0, c1, t * 2.0) : mix(c1, c2, t * 2.0 - 1.0); }
vec3 r3Ramp4(float t, vec3 c0, vec3 c1, vec3 c2, vec3 c3) { t = r3Sat(t) * 3.0; return t < 1.0 ? mix(c0, c1, t) : t < 2.0 ? mix(c1, c2, t - 1.0) : mix(c2, c3, t - 2.0); }
vec3 r3Hsv(vec3 c) { vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0); vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www); return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y); } // hsv -> rgb
// dithering: break banding in dark gradients. Interleaved gradient noise (Jimenez) is the best cheap 8-bit dither.
float r3Ign(vec2 px) { return fract(52.9829189 * fract(dot(px, vec2(0.06711056, 0.00583715)))); }
float r3Bayer4(vec2 px) { ivec2 p = ivec2(mod(px, 4.0)); int i = p.x + p.y * 4; float m[16] = float[16](0.,8.,2.,10.,12.,4.,14.,6.,3.,11.,1.,9.,15.,7.,13.,5.); return (m[i] + 0.5) / 16.0; }
vec3 r3Dither(vec3 c, vec2 fragPx, float levels) { return floor(c * levels + r3Ign(fragPx)) / levels; }   // quantise to \`levels\` steps (255 = hide banding, 4 = posterise)
`);

  // ---- npr
  chunk("npr", ["core", "color"], /* glsl */ `
// ===== r3 npr ===== non-photoreal shading. "Ink" is 0 (paper) .. 1 (full black), "tone" is 1 (lit) .. 0 (dark).
// Line patterns take a coordinate whose integers are the lines, plus fw = how much that coordinate changes per PIXEL
// (fwidth(u) in a mesh shader; in a raymarched pass derive it from the ray footprint). Coverage is the exact
// box-filtered area of the lines over one pixel, so widths are stable in pixels, thin lines fade instead of
// flickering, and lines closer than a pixel average to flat ink (no moire).
//   R3_MINPX 0.85   thinnest drawn line in physical pixels (raise for 4K output)   R3_AAPX 1.15  filter width in pixels
#ifndef R3_MINPX
#define R3_MINPX 0.85
#endif
#ifndef R3_AAPX
#define R3_AAPX 1.15
#endif
float _r3PulseCum(float s, float d) { return floor(s) * d + min(fract(s), d); }          // cumulative area of unit-period pulses of width d
float r3HatchFW(float u, float ink, float fw) {
  ink = r3Sat(ink); if (ink <= 0.0) return 0.0;
  fw = max(fw, 1e-5);
  float w = fw * R3_AAPX;                                                                 // filter width in u
  float dEff = min(1.0, max(ink, fw * R3_MINPX));                                         // never thinner than R3_MINPX px
  float s = u + 0.5 * dEff;
  float cov = (_r3PulseCum(s + 0.5 * w, dEff) - _r3PulseCum(s - 0.5 * w, dEff)) / w;
  cov *= ink / dEff;                                                                      // thin lines keep their ink as a lighter line
  return mix(cov, ink, r3Smooth((fw - 0.35) / 0.55));                                     // sub-pixel spacing: flat tone, no moire
}
float r3Hatch(float u, float ink) { return r3HatchFW(u, ink, fwidth(u)); }                // fwidth form (call in uniform control flow)
float r3HatchDir(vec2 p, float angle, float freq, float ink) {                            // parallel lines at \`angle\` across the plane p, freq lines per unit
  float u = dot(p, vec2(cos(angle), sin(angle))) * freq; return r3Hatch(u, ink);
}
// tone -> ink for line art: lit areas lose their lines entirely, shadows swell to nearly solid
float r3InkFromTone(float tone) { return r3Smooth((0.94 - r3Sat(tone)) / 0.94) * 0.78; }
// engrave: lines at integer values of the surface parameter s*lines. s is uv.y of r3Tube for lines running ALONG a tube.
//   fwS = d s / d pixel (fwidth(s) by default via r3Engrave)
float r3EngraveFW(float s, float tone, float lines, float fwS) { return r3HatchFW(s * lines, r3InkFromTone(tone), fwS * lines); }
float r3Engrave(float s, float tone, float lines) { return r3EngraveFW(s, tone, lines, fwidth(s)); }
// two-direction engraving: main lines on s1, a crossing set on s2 that only appears in the deep shadows
float r3CrossEngraveFW(float s1, float fw1, float s2, float fw2, float tone, float lines1, float lines2) {
  float a = r3HatchFW(s1 * lines1, r3InkFromTone(tone), fw1 * lines1);
  float b = r3HatchFW(s2 * lines2, 0.4 * r3Smooth((0.14 - tone) / 0.14), fw2 * lines2);
  return 1.0 - (1.0 - a) * (1.0 - b);
}
// cross-hatch over a plane (screen or any 2D param): up to 4 line layers at 45 degree steps joining as it gets darker
float r3CrossHatchFW(vec2 p, float darkness, float freq, float angle, float fw) {
  float c = 0.0; darkness = r3Sat(darkness);
  for (int i = 0; i < 4; i++) {
    float a = angle + float(i) * 0.7853982 * (i == 1 ? 2.0 : (i == 2 ? 1.0 : (i == 3 ? 3.0 : 0.0)));
    float lo = float(i) * 0.25;
    float ink = r3Smooth((darkness - lo) / 0.3) * 0.8;
    float u = dot(p, vec2(cos(a), sin(a))) * freq;
    c = max(c, r3HatchFW(u + 0.37 * float(i), ink, fw * freq));
  }
  return c;
}
float r3CrossHatch(vec2 p, float darkness, float freq, float angle) { return r3CrossHatchFW(p, darkness, freq, angle, length(fwidth(p)) * 0.7071); }
// stipple: one jittered dot per unit cell of p; more dots and bigger dots as it darkens. fw = cells per pixel (fwidth(p))
float _r3StippleLayer(vec2 p, float present, float size, float fw) {                      // one jittered lattice of dots
  vec2 i = floor(p), f = fract(p);
  vec3 h = vec3(r3Hash22(i), r3Hash12(i + 7.7));
  float rmax = 0.27, jit = 0.5 - rmax;
  vec2 c = vec2(0.5) + (h.xy - 0.5) * 2.0 * jit;
  float on = step(h.z, r3Sat(present));
  float r = rmax * size;
  float aa = max(fw * R3_AAPX, 1e-4), rr = max(r, fw * R3_MINPX * 0.5);
  return (1.0 - smoothstep(rr - aa * 0.5, rr + aa * 0.5, length(f - c))) * on * min(1.0, (r * r) / (rr * rr));
}
float r3StippleFW(vec2 p, float darkness, float fw) {
  darkness = r3Sat(darkness); if (darkness <= 0.0) return 0.0;
  float size = mix(0.55, 1.0, r3Sat(darkness * 1.3));
  float a = _r3StippleLayer(p, darkness * 1.4, size, fw);
  vec2 p2 = mat2(0.8, -0.6, 0.6, 0.8) * p * 1.19 + vec2(17.3, 5.1);                          // a second lattice at another angle: kills the grid look and adds ink in shadow
  float b = _r3StippleLayer(p2, (darkness - 0.28) * 1.5, size, fw * 1.19);
  float dot_ = 1.0 - (1.0 - a) * (1.0 - b);
  float mean = r3Sat(darkness * 0.5 + darkness * darkness * 0.35);                         // what the dots average to
  return mix(dot_, mean, r3Smooth((fw - 0.3) / 0.45));
}
float r3Stipple(vec2 p, float darkness) { return r3StippleFW(p, darkness, length(fwidth(p)) * 0.7071); }
// stipple on a 3D surface: p = position (object or world space), n = surface normal, 1 unit cells; the dots stay glued to the object.
float r3Stipple3FW(vec3 p, vec3 n, float darkness, float fw) {
  vec3 a = abs(n); vec2 q;
  if (a.x > a.y && a.x > a.z) q = p.yz + 13.1; else if (a.y > a.z) q = p.xz + 29.7; else q = p.xy + 51.3;
  return r3StippleFW(q, darkness, fw);
}
// lighting helpers for line art and flat looks
float r3Lambert(vec3 n, vec3 l) { return max(dot(n, l), 0.0); }
float r3Wrap(vec3 n, vec3 l, float w) { return r3Sat((dot(n, l) + w) / (1.0 + w)); }       // soft terminator
float r3Toon(float x, float steps, float soft) {                                          // quantise 0..1 to \`steps\` bands; soft = edge width in 0..1 units (0.02 crisp)
  float s = x * steps; float f = fract(s); return (floor(s) + smoothstep(0.5 - soft, 0.5 + soft, f)) / steps;
}
vec3 r3ToonRamp(float x, vec3 shadow, vec3 mid, vec3 lit, float soft) {                   // 3-band flat ramp
  vec3 c = mix(shadow, mid, smoothstep(0.33 - soft, 0.33 + soft, x)); return mix(c, lit, smoothstep(0.7 - soft, 0.7 + soft, x));
}
float r3Fresnel(vec3 n, vec3 v, float power) { return pow(1.0 - r3Sat(dot(normalize(n), normalize(v))), power); }    // 0 facing .. 1 grazing; v points to the eye
float r3FresnelF0(vec3 n, vec3 v, float f0) { return f0 + (1.0 - f0) * pow(1.0 - r3Sat(dot(normalize(n), normalize(v))), 5.0); }
float r3Rim(vec3 n, vec3 v, vec3 l, float power) { return r3Fresnel(n, v, power) * r3Sat(dot(n, l) * 0.5 + 0.5); }   // rim light that only shows on the lit side
`);

  // ---- post
  chunk("post", ["core", "color"], /* glsl */ `
// ===== r3 post ===== (bloom-free finishing helpers for a post pass; fragPx = gl_FragCoord.xy, uv = 0..1)
vec3 r3Chroma(sampler2D tex, vec2 uv, float amount) {                                    // radial colour fringing, amount ~0.002
  vec2 d = (uv - 0.5) * amount;
  return vec3(texture(tex, uv + d).r, texture(tex, uv).g, texture(tex, uv - d).b);
}
vec3 r3Scanlines(vec3 c, vec2 fragPx, float strength, float pitchPx) {                  // strength 0..1, pitchPx = pixels per line
  float s = 0.5 + 0.5 * cos(fragPx.y / pitchPx * R3_TAU); return c * (1.0 - strength * s * 0.5);
}
float r3HalftoneFW(vec2 fragPx, float tone, float cellPx, float angle) {                 // ink coverage 0..1 of a rotated dot screen; tone 1 = light
  vec2 p = r3Rot2(angle) * fragPx / cellPx; vec2 f = fract(p) - 0.5;
  float r = sqrt(1.0 - r3Sat(tone)) * 0.7071;                                              // dot radius so area follows ink
  float aa = 0.9 / cellPx; return 1.0 - smoothstep(r - aa, r + aa, length(f));
}
vec3 r3Halftone(vec3 c, vec2 fragPx, float cellPx, vec3 ink, vec3 paper) {               // mono halftone of a colour
  return mix(paper, ink, r3HalftoneFW(fragPx, r3Luma(c), cellPx, 0.5236));
}
vec3 r3Grain(vec3 c, vec2 fragPx, float frame, float amount) {                           // film grain; frame = uFrame so it moves (deterministic)
  float g = r3Hash12(fragPx + frame * 17.31) + r3Hash12(fragPx * 1.37 + frame * 5.9) - 1.0; return c + g * amount * (0.35 + 0.65 * c);
}
vec3 r3Vignette(vec3 c, vec2 uv, float strength) { vec2 q = uv - 0.5; return c * (1.0 - strength * smoothstep(0.25, 0.85, dot(q, q) * 2.0)); }
`);

  // ---- field: for custom vertex shaders that want the same wrapping the JS instanceField uses
  chunk("field", ["core"], /* glsl */ `
// ===== r3 field =====
// r3FieldCell(slot, grid, camCell): the world cell index slot (0..grid-1) shows when the camera is in camCell (all in cell units).
vec2 r3FieldCell(vec2 slot, vec2 grid, vec2 camCell) { return slot + grid * floor((camCell - slot) / grid + 0.5); }
`);

  var glsl = {};
  Object.keys(chunks).forEach(function (k) { glsl[k] = chunks[k]; });
  // expand  #include <r3/name>  (name = a chunk) anywhere in a source string
  Object.defineProperty(glsl, "resolve", {
    enumerable: false,
    value: function (src) {
      return String(src).replace(/^[ \t]*#include\s*<r3\/(\w+)>[ \t]*$/gm, function (m, n) {
        if (!chunks[n]) throw new Error("Rasan3D.glsl: no chunk '" + n + "' (have " + Object.keys(chunks).join(", ") + ")");
        return chunks[n];
      });
    },
  });
  Object.defineProperty(glsl, "all", { enumerable: false, get: function () { return ["core", "noise", "sdf", "raymarch", "color", "npr", "post", "field"].map(function (k) { return chunks[k]; }).join(""); } });
  Lib.glsl = glsl;

  // ---------------------------------------------------------------------------------------------- JS helpers
  function T3(o) {
    var T = (o && o.THREE) || Lib.THREE || window.THREE || (window.__rasan3d && window.__rasan3d.THREE);
    if (!T) throw new Error("Rasan3DLib needs three.js: pass { THREE } or set Rasan3DLib.THREE (rasan3d.js does this) ");
    return T;
  }
  function v3(T, p) { return p && p.isVector3 ? p.clone() : Array.isArray(p) ? new T.Vector3(p[0], p[1], p[2]) : new T.Vector3(p.x, p.y, p.z); }

  /* Rasan3DLib.tube(points | fn, opts) -> BufferGeometry
   *   points: [[x,y,z] | Vector3 ...] (smoothed with a centripetal Catmull-Rom) or fn(t in 0..1) -> point
   *   opts: radius (number | fn(u) -> radius; default 0.05), segments (along; default 160), radial (around; default 16),
   *         closed (default false), tension ("centripetal" | "chordal" | "catmullrom"; points only)
   *   attributes: position, normal, uv = (u, v) with u = normalised ARC LENGTH 0..1 along the tube (even spacing for
   *   engraving) and v = 0..1 around it (seamless: a duplicated seam column, so fract(v * N) lines meet when N is an integer),
   *   aLen = arc length in world units, aTangent = unit tangent.
   *   Lines running ALONG the wire are lines of constant v: hatch(v * N). Rings around it: hatch(u * length / spacing).
   *   geometry.userData.length = total arc length.  Frames are parallel-transported (no twisting at bends). */
  function tube(src, o) {
    o = o || {};
    var T = T3(o);
    var N = Math.max(2, Math.round(o.segments || 160)), R = Math.max(3, Math.round(o.radial || 16)), closed = !!o.closed;
    var pts = [], i, j;
    if (typeof src === "function") {
      var n = closed ? N : N + 1;
      for (i = 0; i < n; i++) pts.push(v3(T, src(closed ? i / N : i / N)));
    } else {
      var curve = new T.CatmullRomCurve3(src.map(function (p) { return v3(T, p); }), closed, o.tension || "centripetal");
      var n2 = closed ? N : N + 1;
      for (i = 0; i < n2; i++) pts.push(curve.getPoint(closed ? i / N : i / N));
    }
    var M = pts.length, nRows = closed ? N + 1 : N + 1;       // rows incl. a duplicate of the first row when closed
    function P(k) { return closed ? pts[((k % M) + M) % M] : pts[Math.max(0, Math.min(M - 1, k))]; }
    // tangents
    var tan = [], arc = [0];
    for (i = 0; i < nRows; i++) {
      var a = closed ? P(i - 1) : P(i - 1), b = closed ? P(i + 1) : P(i + 1);
      var t = b.clone().sub(a); if (t.lengthSq() < 1e-14) t.set(0, 0, 1); tan.push(t.normalize());
      if (i > 0) arc.push(arc[i - 1] + P(i).distanceTo(P(i - 1)));
    }
    var total = arc[nRows - 1] || 1e-6;
    // rotation-minimising frames (double reflection)
    var nor = [], t0 = tan[0];
    var ref = Math.abs(t0.x) < 0.9 ? new T.Vector3(1, 0, 0) : new T.Vector3(0, 1, 0);
    nor.push(ref.clone().sub(t0.clone().multiplyScalar(ref.dot(t0))).normalize());
    for (i = 0; i < nRows - 1; i++) {
      var v1 = P(i + 1).clone().sub(P(i)), c1 = v1.dot(v1);
      if (c1 < 1e-14) { nor.push(nor[i].clone()); continue; }
      var rL = nor[i].clone().sub(v1.clone().multiplyScalar(2 / c1 * v1.dot(nor[i])));
      var tL = tan[i].clone().sub(v1.clone().multiplyScalar(2 / c1 * v1.dot(tan[i])));
      var v2 = tan[i + 1].clone().sub(tL), c2 = v2.dot(v2);
      var nn = c2 < 1e-14 ? rL : rL.sub(v2.multiplyScalar(2 / c2 * v2.dot(rL)));
      nor.push(nn.normalize());
    }
    if (closed) {      // spread the frame mismatch at the seam over the whole loop
      var ang = Math.atan2(new T.Vector3().crossVectors(nor[nRows - 1], nor[0]).dot(tan[0]), nor[nRows - 1].dot(nor[0]));
      for (i = 0; i < nRows; i++) nor[i].applyAxisAngle(tan[i], ang * (i / (nRows - 1)));
    }
    var vc = nRows * (R + 1);
    var pos = new Float32Array(vc * 3), nrm = new Float32Array(vc * 3), uv = new Float32Array(vc * 2), len = new Float32Array(vc), tg = new Float32Array(vc * 3);
    var idx = [];
    var rad = typeof o.radius === "function" ? o.radius : function () { return o.radius == null ? 0.05 : o.radius; };
    var bn = new T.Vector3(), nv = new T.Vector3(), q = 0;
    for (i = 0; i < nRows; i++) {
      var u = arc[i] / total, r = rad(u), c = P(i);
      bn.crossVectors(tan[i], nor[i]).normalize();
      for (j = 0; j <= R; j++, q++) {
        var th = (j / R) * Math.PI * 2, cs = Math.cos(th), sn = Math.sin(th);
        nv.set(0, 0, 0).addScaledVector(nor[i], cs).addScaledVector(bn, sn);
        pos[q * 3] = c.x + nv.x * r; pos[q * 3 + 1] = c.y + nv.y * r; pos[q * 3 + 2] = c.z + nv.z * r;
        nrm[q * 3] = nv.x; nrm[q * 3 + 1] = nv.y; nrm[q * 3 + 2] = nv.z;
        uv[q * 2] = u; uv[q * 2 + 1] = j / R; len[q] = arc[i];
        tg[q * 3] = tan[i].x; tg[q * 3 + 1] = tan[i].y; tg[q * 3 + 2] = tan[i].z;
      }
    }
    for (i = 0; i < nRows - 1; i++) for (j = 0; j < R; j++) {
      var a0 = i * (R + 1) + j, b0 = a0 + R + 1;
      idx.push(a0, a0 + 1, b0, a0 + 1, b0 + 1, b0);
    }
    var g = new T.BufferGeometry();
    g.setAttribute("position", new T.BufferAttribute(pos, 3));
    g.setAttribute("normal", new T.BufferAttribute(nrm, 3));
    g.setAttribute("uv", new T.BufferAttribute(uv, 2));
    g.setAttribute("aLen", new T.BufferAttribute(len, 1));
    g.setAttribute("aTangent", new T.BufferAttribute(tg, 3));
    g.setIndex(idx);
    g.userData.length = total;
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
  Lib.tube = tube;

  /* Rasan3DLib.instanceField({ geometry, material, cell, count, around, wrap, plane, place, seed, y }) -> InstancedMesh
   *   An endless field of anything: a grid of `count` instances re-centred on the camera, so wherever it goes there is
   *   a thing under it. Instance (i, j) always shows the world cell nearest the camera, and everything about a world
   *   cell (offset, yaw, scale, colour, whether it exists) comes from a generator seeded by (seed, cell x, cell z), so
   *   the field looks the same for any camera path and any seek order.
   *   cell:   world size of one cell (number or [sx, sz]; default 2)
   *   count:  instances (number: nearest square grid) or [nx, nz]; the field spans nx*cell by nz*cell around the camera
   *   around: "camera" (default: whichever camera renders), an Object3D / Camera, [x,y,z], or fn() -> [x,y,z]
   *   wrap:   true (default) follow `around`; false = a fixed grid centred at the origin
   *   plane:  "xz" (default, ground) | "xy" (a wall) -- the two axes the grid spans; the third is `y` (default 0)
   *   place:  place(cellX, cellZ, rng, o) fills o: { x, z (offset inside the cell, -0.5..0.5 of a cell), y, yaw, scale (number or [x,y,z]),
   *           color (THREE.Color | hex, needs a material using instance colour), visible (false hides this cell) }
   *           rng() is a seeded 0..1 generator for that cell; read it in a fixed order. Defaults: centred, random yaw, scale 1.
   *   seed:   integer, default 1.
   *   The mesh updates itself before every render and shadow pass (only cells that change owner are rewritten); nothing
   *   depends on history. mesh.field = { update(cameraOrPosition), nx, nz, cell } if you want to call it yourself. */
  function hash2(seed, x, z) {
    var h = (seed | 0) ^ 0x9e3779b9;
    h = Math.imul(h ^ (x | 0), 0x85ebca6b); h ^= h >>> 13;
    h = Math.imul(h ^ (z | 0), 0xc2b2ae35); h ^= h >>> 16;
    h = Math.imul(h ^ ((x | 0) * 31 + (z | 0)), 0x27d4eb2f); h ^= h >>> 15;
    return h >>> 0;
  }
  function rngFrom(seed) { var a = seed >>> 0; return function () { a = (a + 0x6d2b79f5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

  function instanceField(o) {
    o = o || {};
    var T = T3(o);
    var cell = Array.isArray(o.cell) ? o.cell : [o.cell || 2, o.cell || 2];
    var nx, nz;
    if (Array.isArray(o.count)) { nx = o.count[0]; nz = o.count[1]; } else { nx = nz = Math.max(1, Math.ceil(Math.sqrt(o.count || 1024))); }
    var plane = o.plane || "xz", wrap = o.wrap !== false, seed = o.seed == null ? 1 : o.seed, base = o.y || 0;
    var mesh = new T.InstancedMesh(o.geometry || new T.BoxGeometry(1, 1, 1), o.material || new T.MeshStandardMaterial(), nx * nz);
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
    var ownerX = new Int32Array(nx * nz).fill(2147483647), ownerZ = new Int32Array(nx * nz).fill(2147483647);
    var m4 = new T.Matrix4(), q = new T.Quaternion(), pos = new T.Vector3(), scl = new T.Vector3(), eul = new T.Euler(), col = new T.Color(), tmp = new T.Vector3();
    var up = plane === "xz" ? new T.Vector3(0, 1, 0) : new T.Vector3(0, 0, 1);
    var cells = {}, usesColor = false;
    function around(cam) {
      var a = o.around;
      if (!wrap) return [0, 0];
      var p;
      if (a && a.isObject3D) { a.updateWorldMatrix(true, false); p = tmp.setFromMatrixPosition(a.matrixWorld); }
      else if (Array.isArray(a)) p = tmp.set(a[0], a[1], a[2]);
      else if (typeof a === "function") { var r = a(); p = tmp.set(r[0], r[1], r[2]); }
      else if (cam && cam.isVector3) p = cam;
      else if (cam && cam.isObject3D) { cam.updateWorldMatrix(true, false); p = tmp.setFromMatrixPosition(cam.matrixWorld); }
      else return [0, 0];
      return plane === "xz" ? [p.x, p.z] : [p.x, p.y];
    }
    function write(slot, cx, cz) {
      var rng = rngFrom(hash2(seed, cx, cz));
      var d = { x: 0, z: 0, y: 0, yaw: rng() * Math.PI * 2, scale: 1, color: null, visible: true };
      if (o.place) o.place(cx, cz, rng, d);
      var s = typeof d.scale === "number" ? [d.scale, d.scale, d.scale] : d.scale;
      if (!d.visible) s = [0, 0, 0];
      var ox = (cx + 0.5 + d.x) * cell[0], oz = (cz + 0.5 + d.z) * cell[1];
      if (plane === "xz") { pos.set(ox, base + d.y, oz); q.setFromAxisAngle(up, d.yaw); }
      else { pos.set(ox, oz, base + d.y); q.setFromAxisAngle(up, d.yaw); }
      scl.set(s[0], s[1], s[2]);
      m4.compose(pos, q, scl);
      mesh.setMatrixAt(slot, m4);
      if (d.color != null) { usesColor = true; mesh.setColorAt(slot, col.set(d.color)); }
    }
    function update(cam) {
      var c = around(cam), ccx = c[0] / cell[0] - 0.5, ccz = c[1] / cell[1] - 0.5, dirty = false;
      for (var j = 0; j < nz; j++) for (var i = 0; i < nx; i++) {
        var slot = j * nx + i;
        var cx = wrap ? i + nx * Math.floor((ccx - i) / nx + 0.5) : i - Math.floor(nx / 2);
        var cz = wrap ? j + nz * Math.floor((ccz - j) / nz + 0.5) : j - Math.floor(nz / 2);
        if (ownerX[slot] !== cx || ownerZ[slot] !== cz) { ownerX[slot] = cx; ownerZ[slot] = cz; write(slot, cx, cz); dirty = true; }
      }
      if (dirty) { mesh.instanceMatrix.needsUpdate = true; if (usesColor && mesh.instanceColor) mesh.instanceColor.needsUpdate = true; }
    }
    mesh.onBeforeRender = function (r, s, camera) { update(camera); };
    mesh.onBeforeShadow = function (r, obj, camera) { update(camera); };
    mesh.field = { update: update, nx: nx, nz: nz, cell: cell, owner: function (slot) { return [ownerX[slot], ownerZ[slot]]; } };
    update(null);
    return mesh;
  }
  Lib.instanceField = instanceField;
})();
