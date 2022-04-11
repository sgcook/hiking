const Mountain = require("../src/Mountain.js");

describe("Mountain", () => {
  describe("with mountain", () => {
    let benNevis;
    let hiker;
    let johnMuir;
    let nanShepherd;

    beforeEach(() => {
      benNevis = new Mountain("Ben Nevis");
      hiker = jest.fn();
      johnMuir = jest.fn();
      nanShepherd = jest.fn();
    });

    it("can be instantiated", () => {
      expect(benNevis).toBeInstanceOf(Object);
    });
  
    it("has a name property", () => {
      expect(benNevis.name).toBe("Ben Nevis");
    });
  
    it("can add a hiker", () => {  
      benNevis.addHiker(hiker);
      
      expect(benNevis.hikers).toContain(hiker);
    });
  
    it("can remove a hiker", () => {
      benNevis.addHiker(johnMuir);
      benNevis.addHiker(nanShepherd);
      benNevis.removeHiker(nanShepherd);
  
      expect(benNevis.hikers).toEqual([johnMuir]);
    });
  })
})