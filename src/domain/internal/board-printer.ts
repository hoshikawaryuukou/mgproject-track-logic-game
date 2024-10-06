import { Board } from '../types';

export class BoardPrinter {
  static print(board: Board): void {
    console.log(board.map((row) => row.map((cell) => cell || '.').join(' ')).join('\n'));
  }
}
