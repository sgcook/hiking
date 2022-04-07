const Hiker = require("../src/Hiker.js");
const Mountain = require("../src/Mountain.js");
const Itinerary = require("../src/Itinerary.js");

describe("Hiker", () => {
  it("can be instantiated", () => {
    const mountain = new Mountain("Ben Nevis");
    const itinerary = new Itinerary([mountain]);
    const hiker = new Hiker(itinerary);
    expect(hiker).toBeInstanceOf(Object);
  });

  it("has a starting mountain", () => {
    const mountain = new Mountain("Ben Nevis");
    const itinerary = new Itinerary([mountain]);
    const hiker = new Hiker(itinerary);

    console.log(hiker.currentMountain);
    expect(hiker.currentMountain).toBe(mountain);
  });

  it("can go hiking", () => {
    const benNevis = new Mountain("Ben Nevis");
    const scafellPike = new Mountain("Scafell Pike");
    const itinerary = new Itinerary([benNevis, scafellPike]);
    const hiker = new Hiker(itinerary);

    hiker.goHiking();

    expect(hiker.currentMountain).toBeFalsy();
  });

  it("can reach a different peak", () => {
    const benNevis = new Mountain("Ben Nevis");
    const scafellPike = new Mountain("Scafell Pike");
    const itinerary = new Itinerary([benNevis, scafellPike]);
    const hiker = new Hiker(itinerary);

    hiker.goHiking();
    hiker.reachPeak();

    expect(hiker.currentMountain).toBe(scafellPike);
  });

  it("can't sail further than its itinerary", () => {
    const benNevis = new Mountain("Ben Nevis");
    const scafellPike = new Mountain("Scafell Pike");
    const itinerary = new Itinerary([benNevis, scafellPike]);
    const hiker = new Hiker(itinerary);

    hiker.goHiking();
    hiker.reachPeak();

    expect(() => hiker.goHiking()).toThrowError("End of itinerary reached");
  })
})