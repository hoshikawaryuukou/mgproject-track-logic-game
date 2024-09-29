import { Board } from '../types';

export class BoardFactory {
  static createEmptyBoard(): Board {
    return Array(4)
      .fill(null)
      .map(() => Array(4).fill(null));
  }
}
