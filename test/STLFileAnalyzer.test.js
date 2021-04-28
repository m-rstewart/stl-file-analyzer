import STLFileAnalyzer from '../lib/STLFileAnalyzer';
import path from 'path';

const filePath = path.join(__dirname, '../stl-files/file.txt');

describe('STLFileAnalyzer', () => {
  it('should analyze the given file', done => {
    const analyzer = new STLFileAnalyzer(filePath);
    const mockCallback = jest.fn(() => {
      expect(mockCallback).toBeCalledWith(
        expect.objectContaining({
          totalSurfaceArea: '1.4142',
          count: 2,
        })
      );

      done();
    });
    analyzer.performAnalysis(mockCallback);
  });
});
