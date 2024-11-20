import { Board } from './board'

export class BoardTransformer {
  private boardSize: number

  constructor(boardSize: number) {
    this.boardSize = boardSize
  }

  moveCounterClockwise(board: Board) {
    const layers = Math.floor(this.boardSize / 2)
    for (let layer = 0; layer < layers; layer++) {
      this.moveLayerCounterClockwise(board, layer)
    }
  }

  private moveLayerCounterClockwise(board: Board, layer: number) {
    const n = this.boardSize - 1 - layer
    const temp = board.getCell(layer, layer)
    for (let i = layer; i < n; i++) board.setCell(layer, i, board.getCell(layer, i + 1))
    for (let i = layer; i < n; i++) board.setCell(i, n, board.getCell(i + 1, n))
    for (let i = n; i > layer; i--) board.setCell(n, i, board.getCell(n, i - 1))
    for (let i = n; i > layer; i--) board.setCell(i, layer, board.getCell(i - 1, layer))
    board.setCell(layer + 1, layer, temp)
  }
}
