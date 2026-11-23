import { clamp, lerp } from './src/math.js';
import { createPalette } from './src/color.js';
import { ParticleEmitter } from './src/particle.js';

const canvas = document.getElementById('ink-canvas');
const ctx = canvas.getContext('2d');

export function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', initCanvas);
initCanvas();
