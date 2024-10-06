import { Board } from '../types';

export class BoardRotator {
  static rotate(board: Board): Board {
    const N = board.length;
    const newBoard: Board = board.map((row) => row.slice());

    for (let layer = 0; layer < Math.floor(N / 2); layer++) {
      const first = layer;
      const last = N - layer - 1;

      for (let i = first; i < last; i++) {
        newBoard[first][i] = board[first][i + 1];
      }

      for (let i = first; i < last; i++) {
        newBoard[i][last] = board[i + 1][last];
      }

      for (let i = last; i > first; i--) {
        newBoard[last][i] = board[last][i - 1];
      }

      for (let i = last; i > first; i--) {
        newBoard[i][first] = board[i - 1][first];
      }
    }

    return newBoard;
  }
}
