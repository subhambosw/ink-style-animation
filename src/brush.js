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
export function getBrushSpeed(brush) {
  return Math.hypot(brush.x - brush.px, brush.y - brush.py);
}
export function getDynamicSize(brush, minScale = 0.4) {
  const speed = getBrushSpeed(brush);
  const speedDamp = Math.max(minScale, 1 - speed / 50);
  return brush.size * brush.pressure * speedDamp;
}
export function renderStroke(ctx, brush, color = '#090a10') {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = getDynamicSize(brush);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(brush.px, brush.py);
  ctx.lineTo(brush.x, brush.y);
  ctx.stroke();
  ctx.restore();
}
export function setBrushSize(brush, size) {
  brush.size = Math.max(1, size);
}
export function getBrushHeading(brush) {
  return Math.atan2(brush.y - brush.py, brush.x - brush.px);
}
export function isBrushMoving(brush, threshold = 0.5) {
  return getBrushSpeed(brush) > threshold;
}
export function resetBrushHistory(brush) {
  brush.px = brush.x;
  brush.py = brush.y;
}
