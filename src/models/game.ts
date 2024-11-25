import { Board, Direction } from './board'
import { Player, type Winner } from './types'

export class Game {
  private board: Board
  private currentPlayer: Player
  private winner: Winner

  constructor() {
    this.board = new Board()
    this.currentPlayer = Player.Black
    this.winner = null
  }

  placeStone(index: number) {
    if (this.winner !== null) {
      return
    }

    if (!this.board.isEmpty(index)) {
      return
    }

    this.board.placeStone(index, this.currentPlayer)
    this.board.moveStones(Direction.Clockwise)

    const isblackWin = this.board.checkWin(Player.Black)
    const isWhiteWin = this.board.checkWin(Player.White)
    if (isblackWin && isWhiteWin) {
      this.winner = 'Draw'
    } else if (isblackWin) {
      this.winner = Player.Black
    } else if (isWhiteWin) {
      this.winner = Player.White
    } else if (this.board.isFull()) {
      this.winner = 'Draw'
    } else {
      this.currentPlayer = this.currentPlayer === Player.Black ? Player.White : Player.Black
    }
  }

  getState() {
    return {
      stones: this.board.getStones(),
      currentPlayer: this.currentPlayer,
      winner: this.winner,
    }
  }
}
