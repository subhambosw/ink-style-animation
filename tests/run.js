import { clamp, lerp } from '../src/math.js';

if (clamp(5, 0, 10) !== 5) process.exit(1);
if (lerp(0, 10, 0.5) !== 5) process.exit(1);
console.log('All tests passed.');

import { hexToRgb, rgbToHex } from '../src/color.js';
if (rgbToHex(255, 255, 255) !== '#ffffff') process.exit(1);
