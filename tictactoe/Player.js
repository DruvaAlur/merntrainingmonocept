class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
  static createPlayer(name, symbol) {
    let newPlayer = new Player(name, symbol);
    return newPlayer;
  }
}
module.exports = { Player };
