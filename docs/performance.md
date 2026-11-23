# Performance Optimization

## Offscreen Canvas Buffering
For heavy particle systems, use an offscreen canvas to avoid redraw bottlenecks.
Only blit the final composite to the visible canvas.
