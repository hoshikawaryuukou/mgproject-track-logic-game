import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { Game } from '../models/game'
import type { Cell, Player, Winner } from '@/models/types'

export const useGameStore = defineStore('game', () => {
  const game = ref<Game>(new Game())
  const stones = ref<Cell[]>([])
  const currentPlayer = ref<Player>()
  const winner = ref<Winner>()

  const initializeGame = () => {
    game.value = new Game()
  }

  const placeStone = (index: number) => {
    game.value.placeStone(index)
    const state = game.value.getState()

    stones.value = state.stones
    currentPlayer.value = state.currentPlayer
    winner.value = state.winner
  }

  return {
    currentPlayer,
    stones,
    winner,
    initializeGame,
    placeStone,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}
