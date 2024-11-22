<script setup lang="ts">
import { useGameStore } from '../stores/useGameStore'
import GameBoard from '@/components/GameBoard.vue'

const gameStore = useGameStore()
</script>

<template>
  <div class="game">
    <div class="container">
      <button @click="gameStore.initializeGame">Restart</button>
      <div class="spacer"></div>
      <div>Current Player: <span class="currentPlayer" :class="gameStore.player"></span></div>
      <div class="spacer"></div>
      <GameBoard />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .game {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spacer {
  height: 20px; /* Adjust the height as needed */
}

.currentPlayer {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
}

.currentPlayer.black {
  background-color: black;
  border: 1px solid white;
}

.currentPlayer.white {
  background-color: white;
  border: 1px solid black;
}
</style>
