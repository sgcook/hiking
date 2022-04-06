const Mountain = require("../src/Mountain.js");

describe("Mountain", () => {
  it("can be instantiated", () => {
    expect(new Mountain()).toBeInstanceOf(Object);
  });

  it("has a name property", () => {
    const benNevis = new Mountain("Ben Nevis")
    expect(benNevis.name).toBe("Ben Nevis");
  })
})