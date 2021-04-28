import { createVertexFromLine } from '../lib/utils';

describe('Utility Function Tests', () => {
  describe('createVertexFromLine', () => {
    it('should return the correct result', () => {
      const line = 'vertex 1 0 1';
      expect(createVertexFromLine(line)).toEqual([1, 0, 1]);
    });
  });
});
