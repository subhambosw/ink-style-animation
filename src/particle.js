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
