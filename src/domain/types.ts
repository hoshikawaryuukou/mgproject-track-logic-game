export type Player = 'X' | 'O';
export type Result = Player | 'tie' | 'invalid';
export type Cell = Player | null;
export type Board = Cell[][];

export interface GameCore {
  placeFlag(row: number, col: number): Result;
}
