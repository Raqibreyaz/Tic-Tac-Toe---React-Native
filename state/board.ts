import { HandleCellPressAndCheckWinner } from "@/utils/game-utils";
import { create } from "zustand";

type Player = "X" | "O" | null;

type BoardTypes = {
  board: any[][];
  currentPlayer: Player;
  winner: Player;
  length: number;
  isEmpty: boolean;
  setBoard: (row: number, col: number, currentPlayer: Player) => void;
  resetBoard: (length?: number) => void;
};

export const useBoard = create<BoardTypes>()((set) => {
  return {
    board: Array.from({ length: 3 }, () => Array(3).fill(null)),
    length: 3,
    isEmpty: true,
    currentPlayer: "X",
    winner: null,
    setBoard: (row, col) =>
      set((state) => {
        // when user won then just return
        if (state.winner) return state;

        const winner = state.winner;
        const currentPlayer = state.currentPlayer;

        // putting player at that point
        state.board[row][col] = currentPlayer;
        // check if the player won
        const isWon = HandleCellPressAndCheckWinner(
          state.board,
          currentPlayer,
          winner,
          row,
          col
        );
        // updating to new state
        return {
          board:[...state.board],
          currentPlayer: currentPlayer === "X" ? "O" : "X",
          winner: isWon ? currentPlayer : winner,
          isEmpty: state.isEmpty ? false : state.isEmpty,
        };
      }),
    // will reset the board and the player state
    resetBoard: (length) => {
      set((state) => {
        // no need to reset when the grid is empty and of same previous length or no length given
        if (state.isEmpty && (length === state.length || !length)) return state;
        // caching the length so that next time when reset it starts from that length
        if (length) state.length = length;
        else {
          length = state.length;
        }

        return {
          board: Array.from({ length }, () => Array(length).fill(null)),
          currentPlayer: "X",
          winner: null,
          isEmpty: true,
        };
      });
    },
  };
});
