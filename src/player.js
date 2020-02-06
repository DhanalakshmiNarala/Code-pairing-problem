class Player {
  constructor(name, probArr) {
    this.name = name;
    this.scoresProbability = probArr;
    this.totalBalls = 0;
    this.totalRuns = 0;
    this.isEliminated = false;
  }

  getScore() {
    let cumulativeSumArr = [];
    for (let i = 0; i < this.scoresProbability.length; i++) {
      if (i === 0) {
        cumulativeSumArr[i] = this.scoresProbability[i];
      } else {
        cumulativeSumArr[i] =
          cumulativeSumArr[i - 1] + this.scoresProbability[i];
      }
    }
    let randomScore = getRandomNumber(0, 100);
    for (let index = 0; index < cumulativeSumArr.length; index++) {
      if (randomScore < cumulativeSumArr[index]) {
        return index;
      }
    }
    throw 'Error in calculating player score';
  }

  play() {
    this.totalBalls += 1;
    let runs = this.getScore();
    if (runs === 7) {
      this.isEliminated = true;
    } else {
      this.totalRuns += runs;
    }
    return runs;
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { Player, getRandomNumber };
