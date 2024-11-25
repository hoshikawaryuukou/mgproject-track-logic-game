<script setup lang="ts">
import { useGameStore } from '../stores/useGameStore'
import Board from '@/components/Board.vue'
import { ref, onMounted } from 'vue'

const gameStore = useGameStore()
const boardRef = ref()
const initialStonePositions = ref<number[]>([])

const resetStones = (): void => {
  boardRef.value?.resetStones()
}

const handleCellClicked = (position: number): void => {
  gameStore.placeStone(position)
  boardRef.value = gameStore.stones
}

onMounted(() => {
  resetStones()
})
</script>

<template>
  <div class="about">
    <Board
      ref="boardRef"
      :initialStonePositions="initialStonePositions"
      @cellClicked="handleCellClicked"
    />
  </div>
</template>

<style>
.about {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.buttons {
  display: flex;
  gap: 10px;
}
.move-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
.reset-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f44336;
  color: white;
}
</style>
