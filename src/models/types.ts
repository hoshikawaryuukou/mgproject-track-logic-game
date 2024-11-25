export enum Player {
  Black = 'X',
  White = 'O',
}

export type WinLine = number[]

export type Winner = Player | 'Draw' | null

export type Cell = Player | null

export type GameState = {
  board: Cell[]
  currentPlayer: Player
  winner: Winner
}
