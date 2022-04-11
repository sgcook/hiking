const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("has a mountains property", () => {
    const benNevis = jest.fn();
    const scafellPike = jest.fn();

    const itinerary = new Itinerary([benNevis, scafellPike]);

    expect(itinerary.mountains).toEqual([benNevis, scafellPike]);
  })
})