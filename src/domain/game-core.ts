import { BoardFactory } from './internal/board-factory';
import { BoardPrinter } from './internal/board-printer';
import { BoardRotator } from './internal/board-rotator';
import { WinChecker } from './internal/win-checker';
import { Board, Player } from './types';

export class GameCore4x4 {
  private board: Board;
  private currentPlayer: Player;

  constructor(firstPlayer: Player) {
    this.board = BoardFactory.createEmptyBoard();
    this.currentPlayer = firstPlayer;
  }

  placeFlag(row: number, col: number): boolean {
    if (this.isCellEmpty(row, col)) {
      this.setCell(row, col, this.currentPlayer);
      BoardPrinter.print(this.board);
      this.rotateBoard();
      this.switchPlayer();
      BoardPrinter.print(this.board);
      return WinChecker.check(this.board);
    }
    return false;
  }

  private isCellEmpty(row: number, col: number): boolean {
    return this.board[row][col] === null;
  }

  private setCell(row: number, col: number, player: Player): void {
    this.board[row][col] = player;
  }

  private rotateBoard(): void {
    this.board = BoardRotator.rotate(this.board);
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }
}
