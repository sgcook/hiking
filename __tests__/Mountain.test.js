const Hiker = require("../src/Hiker.js");
const Mountain = require("../src/Mountain.js");

describe("Mountain", () => {
  it("can be instantiated", () => {
    expect(new Mountain()).toBeInstanceOf(Object);
  });

  it("has a name property", () => {
    const benNevis = new Mountain("Ben Nevis");
    expect(benNevis.name).toBe("Ben Nevis");
  });

  it("can add a hiker", () => {
    const mountain = new Mountain("Ben Nevis");
    const hiker = {};

    mountain.addHiker(hiker);
    
    expect(mountain.hikers).toContain(hiker);
  });

  it("can remove a hiker", () => {
    const mountain = new Mountain("Ben Nevis");
    const johnMuir = {};
    const nanShepherd = {};

    mountain.addHiker(johnMuir);
    mountain.addHiker(nanShepherd);
    mountain.removeHiker(nanShepherd);

    expect(mountain.hikers).toEqual([johnMuir]);
  });
})