const Hiker = require("../src/Hiker.js");

describe("Hiker", () => {
  it("can be instantiated", () => {
    expect(new Hiker()).toBeInstanceOf(Object);
  });

  it("has a starting mountain", () => {
    const hiker = new Hiker("Ben Nevis");

    expect(hiker.startingMountain).toBe("Ben Nevis");
  })
})