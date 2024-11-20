<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '../stores/useGameStore'

const gameStore = useGameStore()
const isAnimating = ref(false)

async function placeStone(rowIndex: number, cellIndex: number) {
  if (gameStore.winner !== null) {
    alert('The game is already over!')
    return
  }

  if (gameStore.boardMoved[rowIndex][cellIndex] !== null) {
    alert('This position is already occupied!')
    return
  }

  gameStore.placeStone(rowIndex, cellIndex)

  isAnimating.value = true
  await new Promise((resolve) => setTimeout(resolve, 200))
  isAnimating.value = false

  if (gameStore.winner !== null) {
    await new Promise((resolve) => setTimeout(resolve, 200))
    alert(gameStore.winner)
  }
}
</script>

<template>
  <div class="board">
    <div
      v-for="(row, rowIndex) in isAnimating ? gameStore.boardPlaced : gameStore.boardMoved"
      :key="rowIndex"
      class="row"
    >
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        class="cell"
        @click="placeStone(rowIndex, cellIndex)"
      >
        <span v-if="cell" :class="cell"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background-color: black;
}

.row {
  display: contents;
}

.cell {
  width: 40px;
  height: 40px;
  background-color: #f0d9b5;
  position: relative;
}

.cell span {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.cell .black {
  background-color: black;
}

.cell .white {
  background-color: white;
}
</style>
