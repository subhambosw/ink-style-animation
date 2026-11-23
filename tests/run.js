import { clamp, lerp } from '../src/math.js';

if (clamp(5, 0, 10) !== 5) process.exit(1);
if (lerp(0, 10, 0.5) !== 5) process.exit(1);
console.log('All tests passed.');

import { hexToRgb, rgbToHex } from '../src/color.js';
if (rgbToHex(255, 255, 255) !== '#ffffff') process.exit(1);

import { vecAdd, vecMag } from '../src/vector.js';
const v = vecAdd({ x: 3, y: 0 }, { x: 0, y: 4 });
if (vecMag(v) !== 5) process.exit(1);

import { easeInQuad, easeLinear } from '../src/easing.js';
if (easeLinear(0.5) !== 0.5) process.exit(1);
if (easeInQuad(0.5) !== 0.25) process.exit(1);
