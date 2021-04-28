import STLFileAnalyzer from './lib/STLFileAnalyzer.js';

const filePath = process.argv[2];
const analyzer = new STLFileAnalyzer(filePath);

analyzer.performAnalysis(({ totalSurfaceArea, count }) => {
  console.log(`Number of triangles: ${count}`);
  console.log(`Surface Area: ${totalSurfaceArea}`);
});
