const Cricket = require('../src/cricket');
const should = require('chai').should();

describe('Unit tests', () => {
  let cricket = new Cricket();

  before(() => {
    cricket.setOversReaming(4);
    cricket.setRunsNeeded(40);
    cricket.setPlayersRemaining([
      { name: 'Kirat boli', probability: [5, 30, 25, 10, 15, 1, 9, 5] },
      { name: 'N.S Nodhi', probability: [10, 40, 20, 5, 10, 1, 4, 10] },
      { name: 'R Rumrah', probability: [20, 30, 15, 5, 5, 1, 4, 20] },
      { name: 'Shashi Henra', probability: [30, 25, 5, 0, 5, 1, 4, 30] }
    ]);

    it('should return commentry for the cricket', () => {
      let expectedResult =
        'Bengaluru won by 1 wicket and 2 balls remaining\n\nKirat Boli - 12 (6 balls)\nNS Nodhi - 25 (11 balls)\nR Rumrah - 2* (3 balls)\nShashi Henra - 2* (2 balls)';
      cricket.getMatchResult().should.equal(expectedResult);
    });
  });
});
