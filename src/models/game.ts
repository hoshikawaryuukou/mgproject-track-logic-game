import { BoardTransformer } from './board-transformer'
import { Player } from './player'
import { WinChecker } from './win-checker'
import { Board } from './board'

export class Game {
  private boardSize: number = 4
  private boardTransformer: BoardTransformer
  private winChecker: WinChecker
  private player: Player
  private board: Board
  private boardPlaced: (Player | null)[][]
  private boardMoved: (Player | null)[][]
  private winner: Player | 'Draw' | null = null

  constructor(initialPlayer: Player) {
    this.boardTransformer = new BoardTransformer(this.boardSize)
    this.winChecker = new WinChecker(this.boardSize)
    this.player = initialPlayer
    this.board = new Board(this.boardSize)
    this.boardPlaced = this.board.getBoard()
    this.boardMoved = this.board.getBoard()
    this.winner = null
  }

  getPlayer(): Player {
    return this.player
  }

  getBoardPlaced(): ReadonlyArray<ReadonlyArray<Player | null>> {
    return this.boardPlaced
  }

  getBoardMoved(): ReadonlyArray<ReadonlyArray<Player | null>> {
    return this.boardMoved
  }

  getWinner(): Player | 'Draw' | null {
    return this.winner
  }

  placeStone(rowIndex: number, cellIndex: number) {
    if (this.winner !== null) {
      return
    }

    if (!this.board.isCellEmpty(rowIndex, cellIndex)) {
      return
    }

    this.board.setCell(rowIndex, cellIndex, this.player)
    this.boardPlaced = this.board.getBoard()

    this.boardTransformer.moveCounterClockwise(this.board)
    this.boardMoved = this.board.getBoard()

    const blackWins = this.winChecker.checkWin(this.board, Player.Black)
    const whiteWins = this.winChecker.checkWin(this.board, Player.White)
    if (blackWins && whiteWins) {
      this.winner = 'Draw'
    } else if (blackWins) {
      this.winner = Player.Black
    } else if (whiteWins) {
      this.winner = Player.White
    } else if (this.board.isFull()) {
      this.winner = 'Draw'
    } else {
      this.player = this.player === Player.Black ? Player.White : Player.Black
    }
  }
}
