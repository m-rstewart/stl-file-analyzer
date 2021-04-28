export function createVertexFromLine(line) {
  return line
    .trim()
    .split(' ')
    .slice(1)
    .map(point => parseFloat(point));
}
