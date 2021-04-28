export default class Triangle {
  constructor(verticies) {
    this.verticies = verticies;
  }

  static totalTriangles = [];

  static addTriangle(triangle) {
    this.totalTriangles.push(triangle);
  }

  static calculateTotalSurfaceArea() {
    const total = this.totalTriangles.reduce((total, triangle) => {
      total += triangle.calculateSurfaceArea();
      return total;
    }, 0);

    return total.toFixed(4);
  }

  calculateSurfaceArea = () => {
    // Formula adapted from https://stackoverflow.com/questions/26312570/calculate-surface-area-of-a-3d-mesh
    const [p1, p2, p3] = this.verticies;
    const ax = p2[0] - p1[0];
    const ay = p2[1] - p1[1];
    const az = p2[2] - p1[2];
    const bx = p3[0] - p1[0];
    const by = p3[1] - p1[1];
    const bz = p3[2] - p1[2];
    const cx = ay * bz - az * by;
    const cy = az * bx - ax * bz;
    const cz = ax * by - ay * bx;

    return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
  };
}
