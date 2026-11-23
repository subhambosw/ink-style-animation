export function createBrush(size = 12, pressure = 0.5) {
  return { size, pressure, x: 0, y: 0, px: 0, py: 0, isDown: false };
}
