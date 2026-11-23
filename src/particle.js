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
