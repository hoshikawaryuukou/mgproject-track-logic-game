import { Board } from '../types';

export class WinChecker {
  static check(board: Board): boolean {
    for (let i = 0; i < 4; i++) {
      if (this.checkLine(board, i, 0, 0, 1) || this.checkLine(board, 0, i, 1, 0)) {
        return true;
      }
    }
    if (this.checkLine(board, 0, 0, 1, 1) || this.checkLine(board, 0, 3, 1, -1)) {
      return true;
    }
    return false;
  }

  private static checkLine(board: Board, row: number, col: number, rowDir: number, colDir: number): boolean {
    const player = board[row][col];
    if (player === null) return false;
    for (let i = 1; i < 4; i++) {
      if (board[row + i * rowDir][col + i * colDir] !== player) {
        return false;
      }
    }
    return true;
  }
}
