class Hiker {
  constructor(itinerary) {
    this.itinerary = itinerary
    this.currentMountain = itinerary.mountains[0];
    this.previousMountain = null;
  }

  goHiking() {
    const itinerary = this.itinerary;
    const currentMountainIndex = itinerary.mountains.indexOf(this.currentMountain);

    if(currentMountainIndex === (itinerary.mountains.length - 1)) {
      throw new Error("End of itinerary reached");
    }

    this.previousMountain = this.currentMountain;
    this.currentMountain = null;
  }

  reachPeak() {
    const itinerary = this.itinerary;
    const previousMountainIndex = itinerary.mountains.indexOf(this.previousMountain);
    this.currentMountain = itinerary.mountains[previousMountainIndex + 1];
  }
}

module.exports = Hiker;