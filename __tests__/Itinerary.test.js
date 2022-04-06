const Itinerary = require("../src/Itinerary.js");
const Mountain = require("../src/Mountain.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("has a mountains property", () => {
    const benNevis = new Mountain("Ben Nevis");
    const scafellPike = new Mountain("Scafell Pike");

    const itinerary = new Itinerary([benNevis, scafellPike]);

    expect(itinerary.mountains).toEqual([benNevis, scafellPike]);
  })
})