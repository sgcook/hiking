const Hiker = require("../src/Hiker.js");

describe("Hiker", () => {
  describe("with mountains and an itinerary", () => {
    let benNevis;
    let scafellPike;
    let itinerary;
    let hiker;
    
    beforeEach(() => {
      benNevis = {
        addHiker: jest.fn(),
        removeHiker: jest.fn(),
        name: "Ben Nevis",
        mountains: []
      };

      scafellPike = {
        addHiker: jest.fn(),
        removeHiker: jest.fn(),
        name: "Scafell Pike",
        mountains: []
      };

      itinerary = {
        mountains: [benNevis, scafellPike]
      };

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
      expect(benNevis.removeHiker).toHaveBeenCalledWith(hiker);
    });
  
    it("can reach a different peak", () => {
      hiker.goHiking();
      hiker.reachPeak();
  
      expect(hiker.currentMountain).toBe(scafellPike);
      expect(scafellPike.addHiker).toHaveBeenCalledWith(hiker);
    });
  
    it("can't sail further than its itinerary", () => {
      hiker.goHiking();
      hiker.reachPeak();
  
      expect(() => hiker.goHiking()).toThrowError("End of itinerary reached");
    });
  
    it("gets added to Mountain on instantiation", () => {
      expect(benNevis.addHiker).toHaveBeenCalledWith(hiker);
    });
  })
})