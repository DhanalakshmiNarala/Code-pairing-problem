const { Player, getRandomNumber } = require('../src/player');

class Cricket {
  players = [];
  oversRemaining;
  runsNeeded;
  currentStriker;

  setOversRemaining(overs) {
    this.oversRemaining = overs;
  }

  setRunsNeeded(runs) {
    this.runsNeeded = runs;
  }

  setPlayersRemaining(players) {
    for (let player of players) {
      this.insertPlayer(player);
    }
  }

  insertPlayer(player) {
    let newPlayer = new Player(player.name, player.scoresProbability);
    this.players.push(newPlayer);
  }

  changeStriker(isOverCompleted = false, score) {
    if (isOverCompleted || score === 1 || score === 3 || score === 5) {
      let playerIndex = getRandomNumber(0, this.players.length);
      this.currentStriker = this.players[playerIndex];
    }
  }

  getMatchCommentary() {
    console.log('Sample commetary');
    let runs = null;
    for (let overs = 0; overs < this.oversRemaining; overs++) {
      console.log(
        `\n${this.oversRemaining - overs} overs left. ${
          this.runsNeeded
        } runs to win\n`
      );

      this.changeStriker(true, runs);
      for (let balls = 1; balls <= 6; balls++) {
        this.changeStriker(balls === 6, runs);
        runs = this.currentStriker.play();
        if (runs !== 7) {
          console.log(
            `${overs}.${balls}\t${this.currentStriker.name} scores ${runs} runs`
          );
        }
      }
    }
  }

  getMatchResult() {
    this.getMatchCommentary();
    console.log('------------------ Final Match results ---------');
    for (let player of this.players) {
      console.log(
        `${player.name} - ${player.totalRuns}(${player.totalBalls} balls)`
      );
    }
  }

  main() {
    this.setOversRemaining(4);
    this.setRunsNeeded(40);
    this.setPlayersRemaining([
      { name: 'Kirat boli', scoresProbability: [5, 30, 25, 10, 15, 1, 9, 5] },
      { name: 'N.S Nodhi', scoresProbability: [10, 40, 20, 5, 10, 1, 4, 10] },
      { name: 'R Rumrah', scoresProbability: [20, 30, 15, 5, 5, 1, 4, 20] },
      { name: 'Shashi Henra', scoresProbability: [30, 25, 5, 0, 5, 1, 4, 30] }
    ]);
    this.getMatchResult();
  }
}

let cricket = new Cricket();
cricket.main();

module.exports = Cricket;
