const Player = require('../src/player');
const should = require('chai').should();

describe('Player - Unit tests', () => {
  describe('getScore', () => {
    it('should return score (2) for player1', () => {
      let player1 = new Player('Kirat boli', [5, 30, 25, 10, 15, 1, 9, 5]);
      player1.getScore().should.equal(2);
    });

    it('should return score (1) for player1', () => {
      let player1 = new Player('Kirat boli', [5, 30, 25, 10, 15, 1, 9, 5]);
      player1.getScore().should.equal(1);
    });

    it('should return score (4) for player2', () => {
      let player2 = new Player('Shashi Henra', [30, 25, 5, 0, 5, 1, 4, 30]);
      player2.getScore().should.equal(4);
    });

    it('should return score (7) for player2', () => {
      let player2 = new Player('Shashi Henra', [30, 25, 5, 0, 5, 1, 4, 30]);
      player2.getScore().should.equal(7);
    });
  });

  describe('play', () => {
    it('should return runs (1) for player1', () => {
      let player1 = new Player('Kirat boli', [5, 30, 25, 10, 15, 1, 9, 5]);
      player1.play().should.equal(1);

      let updatedPlayer1 = {
        name: 'Kirat boli',
        scoresProbability: [5, 30, 25, 10, 15, 1, 9, 5],
        totalBalls: 1,
        totalRuns: 1,
        isEliminated: false
      };
      player1.should.deep.equal(updatedPlayer1);
    });

    it('should return runs (4) for player1', () => {
      let player1 = new Player('Kirat boli', [5, 30, 25, 10, 15, 1, 9, 5]);
      player1.play().should.equal(4);

      let updatedPlayer1 = {
        name: 'Kirat boli',
        scoresProbability: [5, 30, 25, 10, 15, 1, 9, 5],
        totalBalls: 1,
        totalRuns: 4,
        isEliminated: false
      };
      player1.should.deep.equal(updatedPlayer1);
    });

    it('should return runs (7) for player2', () => {
      let player2 = new Player('Shashi Henra', [30, 25, 5, 0, 5, 1, 4, 30]);
      player2.play().should.equal(7);

      let updatedPlayer2 = {
        name: 'Shashi Henra',
        scoresProbability: [30, 25, 5, 0, 5, 1, 4, 30],
        totalBalls: 1,
        totalRuns: 0,
        isEliminated: true
      };
      player2.should.deep.equal(updatedPlayer2);
    });

    it('should return runs (2) for player2', () => {
      let player2 = new Player('Shashi Henra', [30, 25, 5, 0, 5, 1, 4, 30]);
      player2.play().should.equal(2);

      let updatedPlayer2 = {
        name: 'Shashi Henra',
        scoresProbability: [30, 25, 5, 0, 5, 1, 4, 30],
        totalBalls: 1,
        totalRuns: 2,
        isEliminated: false
      };
      player2.should.deep.equal(updatedPlayer2);
    });
  });
});
