export function createBrush(size = 12, pressure = 0.5) {
  return { size, pressure, x: 0, y: 0, px: 0, py: 0, isDown: false };
}
export function setBrushPosition(brush, x, y) {
  brush.px = brush.x;
  brush.py = brush.y;
  brush.x = x;
  brush.y = y;
}
export function setBrushPressure(brush, pressure) {
  brush.pressure = Math.max(0, Math.min(1, pressure));
}
export function setBrushDown(brush, isDown) {
  brush.isDown = Boolean(isDown);
}
