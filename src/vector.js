export function vecCreate(x = 0, y = 0) {
  return { x, y };
}
export function vecAdd(v1, v2) {
  return { x: v1.x + v2.x, y: v1.y + v2.y };
}
export function vecSub(v1, v2) {
  return { x: v1.x - v2.x, y: v1.y - v2.y };
}
export function vecScale(v, factor) {
  return { x: v.x * factor, y: v.y * factor };
}
export function vecMag(v) {
  return Math.hypot(v.x, v.y);
}
export function vecNormalize(v) {
  const m = vecMag(v);
  return m > 0 ? vecScale(v, 1 / m) : { x: 0, y: 0 };
}
export function vecDot(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y };

export function vecHeading(v) {
  return Math.atan2(v.y, v.x);
}
export function vecRotate(v, rad) {
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return { x: v.x * cos - v.y * sin, y: v.x * sin + v.y * cos };
}
export function vecLimit(v, max) {
  const m = vecMag(v);
  return m > max ? vecScale(vecNormalize(v), max) : { x: v.x, y: v.y };
}
export function vecCopy(v) {
  return { x: v.x, y: v.y };
}
export function vecSet(v, x, y) {
  v.x = x;
  v.y = y;
  return v;
}
