export function vecCreate(x = 0, y = 0) {
  return { x, y };
}
export function vecAdd(v1, v2) {
  return { x: v1.x + v2.x, y: v1.y + v2.y };
}
