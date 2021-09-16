function componentToHex(c: string) {
  const hex = c.toString();
  return hex.length == 1 ? '0' + hex : hex;
}

export default function rgbToHex(r: string, g: string, b: string) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
