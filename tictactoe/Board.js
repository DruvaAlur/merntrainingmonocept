const { Cell } = require("./Cell");

class Board {
  constructor() {
    this.cells = [];
  }
  createCells() {
    for (let i = 0; i < 9; i++) {
      this.cells.push(new Cell(" "));
      // console.log(this.cells);
    }
    // console.log(this.cells);
    // return this.cells;
  }
  findWinner(player) {
    return this.horizontal() || this.vertical() || this.diagonal();
  }

  static createBoard() {
    return new Board();
  }
  horizontal() {
    if (
      this.cells[0].symbol === this.cells[1].symbol &&
      this.cells[1].symbol === this.cells[2].symbol &&
      this.cells[0].symbol != " "
    ) {
      return true;
    }
    if (
      this.cells[3].symbol === this.cells[4].symbol &&
      this.cells[4].symbol === this.cells[5].symbol &&
      this.cells[3].symbol != " "
    ) {
      return true;
    }
    if (
      this.cells[6].symbol === this.cells[7].symbol &&
      this.cells[7].symbol === this.cells[8].symbol &&
      this.cells[6].symbol != " "
    ) {
      return true;
    }
    return false;
  }
  vertical() {
    if (
      this.cells[0].symbol === this.cells[3].symbol &&
      this.cells[3].symbol === this.cells[6].symbol &&
      this.cells[0].symbol != " "
    ) {
      return true;
    }
    if (
      this.cells[1].symbol === this.cells[4].symbol &&
      this.cells[4].symbol === this.cells[7].symbol &&
      this.cells[1].symbol != " "
    ) {
      return true;
    }
    if (
      this.cells[2].symbol === this.cells[5].symbol &&
      this.cells[5].symbol === this.cells[8].symbol &&
      this.cells[2].symbol != " "
    ) {
      return true;
    }
    return false;
  }
  diagonal() {
    if (
      this.cells[0].symbol === this.cells[4].symbol &&
      this.cells[4].symbol === this.cells[8].symbol &&
      this.cells[0].symbol != " "
    ) {
      return true;
    }
    if (
      this.cells[2].symbol === this.cells[4].symbol &&
      this.cells[4].symbol === this.cells[6].symbol &&
      this.cells[2].symbol != " "
    ) {
      return true;
    }
    return false;
  }

  // markCell(cellIndex, player) {
  //   if (this.cells[cellIndex].symbol == "") {
  //     console.log("cell already marked please enter another cell number");
  //     return;
  //   }

  //     this.cells[cellIndex].mark(symbol);
  //   }
  displayBoard() {
    // console.log(this.cells[3]);
    for (let i = 0; i < 9; i = i + 3) {
      console.log(
        this.cells[i].symbol +
          "|" +
          this.cells[i + 1].symbol +
          "|" +
          this.cells[i + 2].symbol
      );
    }
  }
}
module.exports = { Board };
