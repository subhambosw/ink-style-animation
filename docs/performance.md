# Performance Optimization

## Offscreen Canvas Buffering
For heavy particle systems, use an offscreen canvas to avoid redraw bottlenecks.
Only blit the final composite to the visible canvas.
## Memory Management
Object pooling is used for particle allocation to avoid garbage collection spikes.
Recycle particles rather than creating new objects each frame.
