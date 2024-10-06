import { clone } from 'es-toolkit';
import { Board, Player, Result } from './types';

export class Game {
  private board: Board;
  private currentPlayer: Player;
  private result: Result | null = null;

  constructor(firstPlayer: Player) {
    this.board = Array.from({ length: 4 }, () => Array(4).fill(null));
    this.currentPlayer = firstPlayer;
  }

  getBoard(): Board {
    return clone(this.board);
  }

  getCurrentPlayer(): Player {
    return this.currentPlayer;
  }

  getResult(): Result | null {
    return this.result;
  }

  play(row: number, col: number): void {
    if (this.result !== null) {
      throw new Error('Game is over');
    }

    if (this.isCellEmpty(row, col) === false) {
      throw new Error('Cell is not empty');
    }

    this.setCell(row, col, this.currentPlayer);
    this.rotateBoard();
    this.result = this.checkWin();

    if (this.result === null) {
      if (this.checkAnyEmptyCell() === false) {
        this.result = 'tie';
      } else {
        this.switchPlayer();
      }
    }
  }

  rotateBoard(): void {
    const newBoard: Board = Array.from({ length: 4 }, () => Array(4).fill(null));
    newBoard[1][0] = this.board[0][0];
    newBoard[2][0] = this.board[1][0];
    newBoard[3][0] = this.board[2][0];
    newBoard[3][1] = this.board[3][0];
    newBoard[3][2] = this.board[3][1];
    newBoard[3][3] = this.board[3][2];
    newBoard[2][3] = this.board[3][3];
    newBoard[1][3] = this.board[2][3];
    newBoard[0][3] = this.board[1][3];
    newBoard[0][2] = this.board[0][3];
    newBoard[0][1] = this.board[0][2];
    newBoard[0][0] = this.board[0][1];
    newBoard[2][1] = this.board[1][1];
    newBoard[2][2] = this.board[2][1];
    newBoard[1][2] = this.board[2][2];
    newBoard[1][1] = this.board[1][2];

    this.board = newBoard;
  }

  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkAnyEmptyCell(): boolean {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.isCellEmpty(row, col)) {
          return true;
        }
      }
    }
    return false;
  }

  checkWin(): Player | null {
    for (let i = 0; i < 4; i++) {
      if (
        this.board[i][0] !== null &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][2] === this.board[i][3]
      ) {
        return this.board[i][0];
      }
      if (
        this.board[0][i] !== null &&
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i] &&
        this.board[2][i] === this.board[3][i]
      ) {
        return this.board[0][i];
      }
    }
    if (
      this.board[0][0] !== null &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[2][2] === this.board[3][3]
    ) {
      return this.board[0][0];
    }
    if (
      this.board[0][3] !== null &&
      this.board[0][3] === this.board[1][2] &&
      this.board[1][2] === this.board[2][1] &&
      this.board[2][1] === this.board[3][0]
    ) {
      return this.board[0][3];
    }
    return null;
  }

  private setCell(row: number, col: number, player: Player): void {
    this.board[row][col] = player;
  }

  private isCellEmpty(row: number, col: number): boolean {
    return this.board[row][col] === null;
  }
}
