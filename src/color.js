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
