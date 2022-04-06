const Hiker = require("../src/Hiker.js");
const Mountain = require("../src/Mountain.js");
const Itinerary = require("../src/Itinerary.js");

describe("Hiker", () => {
  it("can be instantiated", () => {
    expect(new Hiker()).toBeInstanceOf(Object);
  });

  it("has a starting mountain", () => {
    const mountain = new Mountain("Ben Nevis");
    const itinerary = new Itinerary([mountain]);
    const hiker = new Hiker(itinerary);

    console.log(hiker.currentMountain);
    expect(hiker.currentMountain).toBe(mountain);
  });

  it("can go hiking", () => {
    const mountain = new Mountain("Ben Nevis");
    const itinerary = new Itinerary([mountain]);
    const hiker = new Hiker(itinerary);

    hiker.goHiking();

    expect(hiker.currentMountain).toBeFalsy();
    expect(hiker.previousMountain).toBe(mountain);
  });

  it("can reach a different peak", () => {
    const benNevis = new Mountain("Ben Nevis");
    const hiker = new Hiker(benNevis);

    const scafellPike = new Mountain("Scafell Pike");

    hiker.reachPeak(scafellPike);


    expect(hiker.currentMountain).toBe(scafellPike);
  })
})