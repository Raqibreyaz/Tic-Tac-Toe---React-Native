type Player = "X" | "O" | null;

const checkWinner = (
  updatedBoard: Player[][],
  length: number,
  row: number,
  col: number,
  player: Player
): boolean => {
  if (!player) return false;

  // Check Row
  const rowCheck = updatedBoard[row].every((cell) => cell === player);
  if (rowCheck) return true;

  // Check Column
  const columnCheck = updatedBoard.every((r) => r[col] === player);
  if (columnCheck) return true;

  // Check Primary Diagonal
  const primaryDiagCheck =
    row === col &&
    updatedBoard.every((_, idx) => updatedBoard[idx][idx] === player);
  if (primaryDiagCheck) return true;

  // Check Secondary Diagonal
  const secDiagCheck =
    row + col === length - 1 &&
    updatedBoard.every(
      (_, idx) => updatedBoard[idx][length - 1 - idx] === player
    );
  if (secDiagCheck) return true;

  return false;
};

// Cell press handler
export const HandleCellPressAndCheckWinner = (
  board: any[][],
  currentPlayer: Player,
  winner: Player,
  row: number,
  col: number
) => {
  // Ignore if or game over
  if (winner) return;

  // Check for winner
  const isWon = checkWinner(board, board.length, row, col, currentPlayer);
  return isWon;
};
