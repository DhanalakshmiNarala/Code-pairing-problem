const Cricket = require('../src/cricket');
const should = require('chai').should();

describe('Unit tests', () => {
  describe('get new striker', () => {
    let players = [
      { name: 'Kirat boli', scoresProbability: [5, 30, 25, 10, 15, 1, 9, 5] },
      { name: 'N.S Nodhi', scoresProbability: [10, 40, 20, 5, 10, 1, 4, 10] },
      { name: 'R Rumrah', scoresProbability: [20, 30, 15, 5, 5, 1, 4, 20] },
      { name: 'Shashi Henra', scoresProbability: [30, 25, 5, 0, 5, 1, 4, 30] }
    ];
    let cricket = new Cricket(4, 40, players);

    it('should return new striker (R Rurah)', () => {
      let expectedResult = {
        name: 'R Rumrah',
        scoresProbability: [20, 30, 15, 5, 5, 1, 4, 20],
        totalBalls: 0,
        totalRuns: 0,
        isEliminated: false
      };
      cricket.getNewStriker().should.deep.equal(expectedResult);
    });

    it('should return new striker (N.S Nodhi)', () => {
      let expectedResult = {
        name: 'N.S Nodhi',
        scoresProbability: [10, 40, 20, 5, 10, 1, 4, 10],
        totalBalls: 0,
        totalRuns: 0,
        isEliminated: false
      };
      cricket.getNewStriker().should.deep.equal(expectedResult);
    });
  });
});
