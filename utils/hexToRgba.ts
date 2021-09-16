export default function hexToRgb(hex: string, opacity: number) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) ?? ['0', '0', '0'];

  return `rgba( ${parseInt(result[1], 16)}, ${parseInt(
    result[2],
    16,
  )}, ${parseInt(result[3], 16)}, ${opacity} )`;
}
