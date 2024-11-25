// 試玩 game.ts
import { Game } from './game'

const game = new Game()

play(game, 0)
play(game, 0)
play(game, 0)
play(game, 0)
play(game, 5)
play(game, 5)

function play(game: Game, index: number) {
  game.placeStone(index)
  console.log(game.getState())
}
