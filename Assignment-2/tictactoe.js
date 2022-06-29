board = [null, null, null, null, null, null, null, null, null];
let currentplayer = 0;
let symbol = "X";
let i = 0;
let mark = (cellvalue) => {
  if (currentplayer === 0) {
    if (board[cellvalue] == null) {
      board[cellvalue] = "X";
      symbol = "X";
      i++;
      currentplayer = 1;
    } else {
      console.log("cell already filled");
    }
  } else {
    if (board[cellvalue] == null) {
      board[cellvalue] = "O";
      symbol = "O";
      i++;
      currentplayer = 0;
    } else {
      console.log("cell already filled");
    }
  }
  for (j = 0; j < board.length; j++) {
    console.log(`${board[0]} ${board[1]} ${board[2]}
${board[3]} ${board[4]} ${board[5]}
${board[6]} ${board[7]} ${board[8]}`);
  }

  if (
    ((board[0] != null || board[1] != null || board[2] != null) &&
      board[0] === board[1] &&
      board[1] === board[2]) ||
    ((board[3] != null || board[4] != null || board[5] != null) &&
      board[3] === board[4] &&
      board[4] === board[5]) ||
    ((board[6] != null || board[7] != null || board[8] != null) &&
      board[6] === board[7] &&
      board[7] === board[8]) ||
    ((board[0] != null || board[4] != null || board[8] != null) &&
      board[0] === board[4] &&
      board[4] === board[8]) ||
    ((board[2] != null || board[4] != null || board[6] != null) &&
      board[2] === board[4] &&
      board[4] === board[6]) ||
    ((board[0] != null || board[3] != null || board[6] != null) &&
      board[0] === board[3] &&
      board[3] === board[6]) ||
    ((board[1] != null || board[4] != null || board[7] != null) &&
      board[1] === board[4] &&
      board[4] === board[7]) ||
    ((board[2] != null || board[5] != null || board[8] != null) &&
      board[2] === board[5] &&
      board[5] === board[8])
  ) {
    console.log(`${symbol} is winner`);
    board = [null, null, null, null, null, null, null, null, null];
    console.log("Game has been reset");
  }
  if (i == 9) {
    console.log("Its a tie");
    board = [null, null, null, null, null, null, null, null, null];
    console.log("Game has been reset");
  }
};
