const { Player } = require("./Player");
const { Board } = require("./Board");
const { Cell } = require("./Cell");
class Game {
  constructor(nameofplayer1, nameofplayer2) {
    this.player1 = Player.createPlayer(nameofplayer1, "x");
    this.player2 = Player.createPlayer(nameofplayer2, "o");
    this.turn = 0;
    this.board = new Board();
    this.board.createCells();
  }
  play(cellIndex) {
    this.board.displayBoard();
    console.log("-----------------------");
    if (!(cellIndex >= 0 && cellIndex <= 8)) {
      console.log("enter cell index between 0-8");
      return;
    }

    if (this.turn % 2 == 0) {
      if (this.board.cells[cellIndex].mark(this.player1)) {
        this.turn++;
      }

      if (this.board.findWinner(this.player1)) {
        this.board.displayBoard();
        console.log(`${this.player1.name} won the match`);

        console.log(`board set to empty play new match`);
        this.board = new Board();
        this.board.createCells();
        this.turn = 0;
      }
    } else {
      if (this.board.cells[cellIndex].mark(this.player2)) {
        this.turn++;
      }

      if (this.board.findWinner(this.player2)) {
        this.board.displayBoard();
        console.log(
          `${this.player1.name} won the match you can play new match`
        );

        console.log(`board set to empty play new match`);
        this.board = new Board();
        this.board.createCells();
        this.turn = 0;
      }
    }
  }
}
module.exports = { Game };
