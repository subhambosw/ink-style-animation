export class ParticleEmitter {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.particles = [];
  }
}
export function createParticle(x, y, vx = 0, vy = 0, radius = 4) {
  return { x, y, vx, vy, radius, alpha: 1, age: 0, maxAge: 120 };
}
export function updateParticlePhysics(p, friction = 0.96) {
  p.x += p.vx;
  p.y += p.vy;
  p.vx *= friction;
  p.vy *= friction;
  p.age++;
  p.alpha = Math.max(0, 1 - p.age / p.maxAge);
  return p.age < p.maxAge;
}
export function applyParticleForce(p, fx, fy) {
  p.vx += fx;
  p.vy += fy;
}
export function renderParticle(ctx, p, color = '#1a1a24') {
  ctx.save();
  ctx.globalAlpha = p.alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
export function diffuseParticle(p, spreadRate = 0.05) {
  p.radius += spreadRate;
}
export function isParticleAlive(p) {
  return p.alpha > 0.01 && p.age < p.maxAge;
}
export function resetParticle(p, x, y) {
  p.x = x;
  p.y = y;
  p.vx = 0;
  p.vy = 0;
  p.alpha = 1;
  p.age = 0;
}
export function jitterParticle(p, amount = 0.2) {
  p.vx += (Math.random() - 0.5) * amount;
  p.vy += (Math.random() - 0.5) * amount;
}
export function dampParticleRadius(p, minRadius = 1) {
  p.radius = Math.max(minRadius, p.radius * 0.99);
}
export function countActiveParticles(list) {
  return list.filter(isParticleAlive).length;
}
export function pruneDeadParticles(list) {
  return list.filter(isParticleAlive);
}
export function setParticleMaxAge(p, maxAge) {
  p.maxAge = Math.max(1, maxAge);
}
export function setParticleRadius(p, radius) {
  p.radius = Math.max(0.1, radius);
}
