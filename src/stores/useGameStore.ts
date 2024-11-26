import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { Game } from '../models/game'
import { Player, type Winner } from '@/models/types'

export const useGameStore = defineStore('game', () => {
  const game = ref<Game>(new Game())
  const currentPlayer = ref<Player>(Player.Black)
  const winner = ref<Winner>(null)

  const initializeGame = () => {
    game.value = new Game()
    currentPlayer.value = Player.Black
    winner.value = null
  }

  const placeStone = (index: number) => {
    game.value.placeStone(index)
    const state = game.value.getState()
    console.log(state)
    currentPlayer.value = state.currentPlayer
    winner.value = state.winner
  }

  return {
    currentPlayer,
    winner,
    initializeGame,
    placeStone,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}
