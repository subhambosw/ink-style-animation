export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}
export function dist(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}
export function angleBetween(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1);
}
export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
export function radToDeg(radians) {
  return (radians * 180) / Math.PI;
}
export function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);
}
export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}
export function inverseLerp(a, b, val) {
  return (val - a) / (b - a);
}
export function normalizeAngle(angle) {
  return (angle + Math.PI * 2) % (Math.PI * 2);
}
export function almostEqual(a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon;
}
export function roundTo(val, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(val * factor) / factor;
}
export function fract(val) {
  return val - Math.floor(val);
}
export function sign(val) {
  return val > 0 ? 1 : val < 0 ? -1 : 0;
}
export function step(edge, x) {
  return x < edge ? 0 : 1;
}
