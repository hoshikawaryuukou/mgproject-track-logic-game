import type { Cell, Player, WinLine } from './types'

export enum Direction {
  Clockwise = 'Clockwise',
  CounterClockwise = 'CounterClockwise',
}

export class Board {
  private counterClockwiseMap: number[] = [4, 0, 1, 2, 8, 9, 5, 3, 12, 10, 6, 7, 13, 14, 15, 11]
  private clockwiseMap: number[] = [1, 2, 3, 7, 0, 6, 10, 11, 4, 5, 9, 15, 8, 12, 13, 14]
  private winLines: WinLine[] = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ]
  private stones: Cell[]

  constructor() {
    this.stones = Array(16).fill(null)
  }

  placeStone(index: number, player: Player) {
    this.stones[index] = player
  }

  moveStones(direction: Direction) {
    const moveMap = direction === Direction.Clockwise ? this.clockwiseMap : this.counterClockwiseMap

    const newBoard: Cell[] = []
    for (let i = 0; i < this.stones.length; i++) {
      newBoard[i] = this.stones[moveMap[i]]
    }

    this.stones = newBoard
  }

  checkWin(player: Player): boolean {
    for (const line of this.winLines) {
      if (line.every((cellIndex) => this.stones[cellIndex] === player)) {
        return true
      }
    }
    return false
  }

  isEmpty(index: number): boolean {
    return this.stones[index] === null
  }

  isFull(): boolean {
    return this.stones.every((stone) => stone !== null)
  }

  getStones(): Cell[] {
    return [...this.stones]
  }
}
