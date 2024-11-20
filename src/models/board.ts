import { Player } from './player'

export class Board {
  private cells: (Player | null)[][]
  private boardSize: number

  constructor(boardSize: number) {
    this.boardSize = boardSize
    this.cells = Array.from({ length: this.boardSize }, () => Array(this.boardSize).fill(null))
  }

  setBoard(newBoard: (Player | null)[][]): void {
    this.cells = newBoard.map((row) => [...row])
  }

  getBoard(): (Player | null)[][] {
    return this.cells.map((row) => [...row])
  }

  getCell(rowIndex: number, cellIndex: number): Player | null {
    return this.cells[rowIndex][cellIndex]
  }

  setCell(rowIndex: number, cellIndex: number, player: Player | null): void {
    this.cells[rowIndex][cellIndex] = player
  }

  isCellEmpty(rowIndex: number, cellIndex: number): boolean {
    return this.cells[rowIndex][cellIndex] === null
  }

  isFull(): boolean {
    return this.cells.flat().every((cell) => cell !== null)
  }
}
