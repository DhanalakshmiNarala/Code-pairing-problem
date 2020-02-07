const Player = require('../src/player');
const should = require('chai').should();

describe('Player - Unit tests', () => {
  describe('getScore for player', () => {
    let player1 = new Player('Kirat boli', [5, 30, 25, 10, 15, 1, 9, 5]);
    let player2 = new Player('Shashi Henra', [30, 25, 5, 0, 5, 1, 4, 30]);

    it('should return score (2) for player1', () => {
      player1.getScore().should.equal(2);
    });

    it('should return score (1) for player1', () => {
      player1.getScore().should.equal(1);
    });

    it('should return score (4) for player2', () => {
      player2.getScore().should.equal(4);
    });

    it('should return score (7) for player2', () => {
      player2.getScore().should.equal(7);
    });
  });
});
