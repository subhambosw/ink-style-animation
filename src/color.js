export function createPalette(name = 'default') {
  return {
    primary: '#11131a',
    secondary: '#1c2030',
    accent: '#394867'
  };
}
export function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}
export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => Math.round(x).toString(16).padStart(2, '0')).join('');
}
export function rgba(r, g, b, a = 1) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
export function hsl(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}
export function hsla(h, s, l, a = 1) {
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}
export function blend(c1, c2, factor = 0.5) {
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * factor),
    Math.round(c1[1] + (c2[1] - c1[1]) * factor),
    Math.round(c1[2] + (c2[2] - c1[2]) * factor)
  ];
}
export function darken(rgb, amount = 0.2) {
  return rgb.map(channel => Math.max(0, Math.round(channel * (1 - amount))));
}
export function lighten(rgb, amount = 0.2) {
  return rgb.map(channel => Math.min(255, Math.round(channel + (255 - channel) * amount)));
}
export function getLuminance(r, g, b) {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}
export function isDark(r, g, b) {
  return getLuminance(r, g, b) < 0.5;
}
