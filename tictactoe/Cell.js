class Cell {
  constructor(symbol) {
    this.symbol = symbol;
  }
  mark(player) {
    if (this.symbol != " ") {
      console.log("cell already marked please enter another cell number");
      return false;
    }

    this.symbol = player.symbol;
    return true;
  }
}
module.exports = { Cell };
