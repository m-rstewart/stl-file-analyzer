import readline from 'readline';
import fs from 'fs';

import Triangle from './Triangle.js';
import { createVertexFromLine } from './utils.js';

export default class STLFileAnalyzer {
  constructor(filePath) {
    if (!filePath) {
      throw 'Please specify the path to the stl file to parse';
    }

    this.filePath = filePath;
  }

  performAnalysis = callback => {
    const readInterface = readline.createInterface({
      input: fs.createReadStream(this.filePath),
    });
    let currentTriangle = [];

    readInterface.on('line', line => {
      if (currentTriangle.length === 3) {
        const newTriangle = new Triangle(currentTriangle);

        Triangle.addTriangle(newTriangle);
        currentTriangle = [];
      }
      if (line.includes('vertex')) {
        const vertex = createVertexFromLine(line);
        currentTriangle.push(vertex);
      }
    });

    readInterface.on('close', () => {
      const totalSurfaceArea = Triangle.calculateTotalSurfaceArea();
      const count = Triangle.totalTriangles.length;
      const results = { totalSurfaceArea, count };

      callback(results);
    });
  };
}
