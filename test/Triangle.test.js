import Triangle from '../lib/Triangle';

const sampleTriangle1 = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 1, 1],
];

const sampleTriangle2 = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 1],
];

beforeAll(() => {
  const triangle1 = new Triangle(sampleTriangle1);
  Triangle.addTriangle(triangle1);
});

afterAll(() => {
  Triangle.totalTriangles = [];
});

describe('Triangle', () => {
  describe('static methods', () => {
    it('should be able to add a new triangle', () => {
      expect(Triangle.totalTriangles.length).toEqual(1);
    });

    it('should be able to calculate total surface area of triangles', () => {
      const triangle2 = new Triangle(sampleTriangle2);
      Triangle.addTriangle(triangle2);
      const area = Triangle.calculateTotalSurfaceArea();
      expect(area).toEqual('1.4142');
    });
  });

  describe('instance methods', () => {
    it('should be able to calculate the surface area of itself', () => {
      const triangle = Triangle.totalTriangles[0];
      // Surface Area value is truncated for the sake of test brevity
      const surfaceArea = triangle.calculateSurfaceArea().toFixed(4);

      expect(surfaceArea).toEqual('0.7071');
    });
  });
});
