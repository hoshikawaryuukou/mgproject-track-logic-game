import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Game } from '../models/game'
import { Player } from '../models/player'

export const useGameStore = defineStore('game', () => {
  const game = ref(new Game(Player.Black))
  const player = computed(() => game.value.getPlayer())
  const boardPlaced = computed(() => game.value.getBoardPlaced())
  const boardMoved = computed(() => game.value.getBoardMoved())
  const winner = computed(() => game.value.getWinner())

  const initializeGame = () => {
    game.value = new Game(Math.random() < 0.5 ? Player.Black : Player.White)
  }

  const placeStone = (rowIndex: number, cellIndex: number) => {
    game.value.placeStone(rowIndex, cellIndex)
  }

  return {
    player,
    boardPlaced,
    boardMoved,
    winner,
    initializeGame,
    placeStone,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}
