# Overview

The ink style animation simulates liquid watercolor and ink spread on paper textures.
## Architecture Summary
The core architecture separates mathematical modeling, particle physics, and canvas rendering.

## Module Structure
- `math.js`: Clamping, interpolation, geometry
- `color.js`: Palettes and blending
- `particle.js`: Physics and dispersion
- `brush.js`: Pressure sensitivity
## Rendering Loop
The animation runs on a 60 FPS requestAnimationFrame scheduler.
Each frame steps particle velocity, applies friction, and draws to the buffer canvas.
