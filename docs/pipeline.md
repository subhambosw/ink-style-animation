# Rendering Pipeline

## Stage 1: Input Collection
Captures pointer events (mouse, touch, stylus pen pressure).
Normalizes coordinates to high-DPI device pixel ratios.
## Stage 2: Physics Step
Computes particle dispersion vectors and fluid resistance.
Updates alpha decay based on particle lifespan.
## Stage 3: Canvas Paint
Interpolates Bezier curves between previous and current pointer positions.
Draws radial gradients to simulate ink absorption.
