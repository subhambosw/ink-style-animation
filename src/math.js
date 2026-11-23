export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}
export function dist(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}
