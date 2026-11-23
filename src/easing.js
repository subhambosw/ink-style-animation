export function easeLinear(t) {
  return t;
}
export function easeInQuad(t) {
  return t * t;
}
export function easeOutQuad(t) {
  return t * (2 - t);
}
export function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
