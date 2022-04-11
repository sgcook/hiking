class Mountain {
  constructor(name) {
    this.name = name;
    this.hikers = [];
  }

  addHiker(hiker) {
    this.hikers.push(hiker);
  }

  removeHiker(hiker) {
    this.hikers = this.hikers.filter(hikerOnMountain => hikerOnMountain !== hiker);
  }

}
module.exports = Mountain;