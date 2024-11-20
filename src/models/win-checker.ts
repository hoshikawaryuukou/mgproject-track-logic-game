import { Player } from './player'
import { Board } from './board'

export class WinChecker {
  private boardSize: number

  constructor(boardSize: number) {
    this.boardSize = boardSize
  }

  checkWin(board: Board, player: Player): boolean {
    const winCondition = (line: any[]) => line.every((cell) => cell === player)

    // Check rows
    for (let row of board.getBoard()) {
      if (winCondition(row)) return true
    }

    // Check columns
    for (let col = 0; col < this.boardSize; col++) {
      if (winCondition(board.getBoard().map((row) => row[col]))) return true
    }

    // Check diagonals
    if (winCondition(board.getBoard().map((row, idx) => row[idx]))) return true
    if (winCondition(board.getBoard().map((row, idx) => row[this.boardSize - 1 - idx]))) return true

    return false
  }
}
