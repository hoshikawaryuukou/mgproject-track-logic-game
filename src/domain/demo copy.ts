import { Game } from './game';
import { BoardPrinter } from './internal/board-printer';

const game = new Game('X');

run(0, 0);
run(1, 1);
run(2, 2);
run(3, 3);
run(0, 0);

function run(row: number, col: number) {
  game.play(row, col);
  BoardPrinter.print(game.getBoard());
  console.log(game.getResult());
  console.log();
}
