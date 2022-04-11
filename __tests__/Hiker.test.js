const Hiker = require("../src/Hiker.js");
const Mountain = require("../src/Mountain.js");
const Itinerary = require("../src/Itinerary.js");

describe("Hiker", () => {
  describe("with mountains and an itinerary", () => {
    let benNevis;
    let scafellPike;
    let itinerary;
    let hiker;
    
    beforeEach(() => {
      benNevis = new Mountain("Ben Nevis");
      scafellPike = new Mountain("Scafell Pike");
      itinerary = new Itinerary([benNevis, scafellPike]);
      hiker = new Hiker(itinerary);
    });

    it("can be instantiated", () => {
      expect(hiker).toBeInstanceOf(Object);
    });
  
    it("has a starting mountain", () => {
      expect(hiker.currentMountain).toBe(benNevis);
    });
    it("can go hiking", () => {
      hiker.goHiking();
  
      expect(hiker.currentMountain).toBeFalsy();
      expect(benNevis.hikers).not.toContain(hiker);
    });
  
    it("can reach a different peak", () => {
      hiker.goHiking();
      hiker.reachPeak();
  
      expect(hiker.currentMountain).toBe(scafellPike);
      expect(scafellPike.hikers).toContain(hiker);
    });
  
    it("can't sail further than its itinerary", () => {
      hiker.goHiking();
      hiker.reachPeak();
  
      expect(() => hiker.goHiking()).toThrowError("End of itinerary reached");
    });
  
    it("gets added to Mountain on instantiation", () => {
      expect(benNevis.hikers).toContain(hiker);
    });
  })
})