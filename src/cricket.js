const { Player, getRandomNumber } = require('../src/player');

class Cricket {
  players = [];
  oversRemaining;
  runsNeeded;
  currentStriker;
  commetary = [];

  constructor(oversRemaining, runsNeeded, players) {
    this.oversRemaining = oversRemaining;
    this.runsNeeded = runsNeeded;
    this.setPlayersRemaining(players);
  }

  setPlayersRemaining(players) {
    this.players = players.map(player => {
      return new Player(player.name, player.scoresProbability);
    });
  }

  changeStriker() {
    let playersLeft = this.players.filter(player => {
      if (!player.isEliminated) return player;
    });
    if (playersLeft.length === 0) {
      throw 'No players left and Match over';
    }
    let playerIndex = getRandomNumber(0, playersLeft.length);
    this.currentStriker = playersLeft[playerIndex];
  }

  canChangeStriker(prevRuns) {
    return prevRuns === 1 || prevRuns === 3 || prevRuns === 5;
  }

  playInnings() {
    let commetary = [];
    this.changeStriker();
    for (let overs = 0; overs < this.oversRemaining; overs++) {
      commetary.push(
        `\n${this.oversRemaining - overs} overs left. ${
          this.runsNeeded
        } runs to win\n`
      );
      this.playSingleOver(overs);
      this.changeStriker();
    }
    this.commetary.push('You loose the match');
    return;
  }

  playSingleOver(over) {
    let prevRuns = null;
    for (let balls = 1; balls <= 6; balls++) {
      if (this.canChangeStriker(prevRuns)) {
        this.changeStriker();
      }
      let runs = this.currentStriker.play();
      if (this.currentStriker.isEliminated) {
        this.commetary.push(
          `${over}.${balls}\t${this.currentStriker.name} out`
        );
        this.changeStriker();
      } else {
        this.commetary.push(
          `${over}.${balls}\t${this.currentStriker.name} scores ${runs} runs`
        );
        this.runsNeeded -= runs;
        prevRuns = runs;
      }
      if (this.runsNeeded <= 0) {
        this.commetary.push('Match over banglore own the match');
        return;
      }
    }
  }

  getMatchCommentary() {
    this.playInnings();
    console.log('Sample commetary');
    return this.commetary.join('\n');
  }

  getMatchResult() {
    let result = this.players.map(player => {
      return `${player.name} - ${player.totalRuns}(${player.totalBalls} balls)`;
    });
    return result.join('\n');
  }

  main() {
    try {
      console.log(this.getMatchCommentary());
    } catch (error) {
      console.error(error);
    }
    console.log('\nMatch result\n');
    console.log(this.getMatchResult());
  }
}

let players = [
  { name: 'Kirat boli', scoresProbability: [5, 30, 25, 10, 15, 1, 9, 5] },
  { name: 'N.S Nodhi', scoresProbability: [10, 40, 20, 5, 10, 1, 4, 10] },
  { name: 'R Rumrah', scoresProbability: [20, 30, 15, 5, 5, 1, 4, 20] },
  { name: 'Shashi Henra', scoresProbability: [30, 25, 5, 0, 5, 1, 4, 30] }
];
let cricket = new Cricket(4, 40, players);
cricket.main();

module.exports = Cricket;
