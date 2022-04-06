class Hiker {
  constructor(currentMountain) {
    this.currentMountain = currentMountain;
    this.previousMountain = null;
  }

  goHiking() {
    this.previousMountain = this.currentMountain;
    this.currentMountain = null;
  }

  reachPeak(mountain) {
    this.currentMountain = mountain;
  }
}

module.exports = Hiker;