<script setup lang="ts">
import { useGameStore } from '../stores/useGameStore'
import Board from '@/components/Board.vue'
import { ref, onMounted, computed } from 'vue'

const gameStore = useGameStore()
const boardRef = ref()
const interactable = ref(true)
const currentPlayerSymbol = computed(() => getPlayerSymbol(gameStore.currentPlayer))
const gameResult = computed(() =>
  gameStore.winner === null ? null : getWinnerSymbol(gameStore.winner),
)

const resetGame = (): void => {
  gameStore.initializeGame()
  boardRef.value?.resetStones()
  interactable.value = true
}

const handleCellClicked = async (position: number): Promise<void> => {
  if (interactable.value === false) {
    return
  }

  if (boardRef.value?.isCellEmpty(position) === false) {
    console.log('該位置已被佔用，請選擇其他位置。')
    return
  }

  gameStore.placeStone(position)
  boardRef.value?.addStone(position)
  interactable.value = false
  await new Promise((resolve) => setTimeout(resolve, 200))
  boardRef.value?.moveStones('clockwise')
  await new Promise((resolve) => setTimeout(resolve, 200))

  if (gameStore.winner !== null) {
    interactable.value = false
  } else {
    interactable.value = true
  }
}

const getPlayerSymbol = (player: string): string => (player === 'X' ? '⚫' : '⚪')

const getWinnerSymbol = (winner: string): string => {
  switch (winner) {
    case 'X':
      return '⚫'
    case 'O':
      return '⚪'
    default:
      return '😐'
  }
}

onMounted(() => {
  resetGame()
})
</script>

<template>
  <div class="about">
    <div>當前玩家: {{ currentPlayerSymbol }}</div>
    <div>遊戲結果: {{ gameResult }}</div>
    <Board ref="boardRef" @cellClicked="handleCellClicked" />
    <div class="buttons">
      <button class="reset-button" @click="resetGame">重置遊戲</button>
    </div>
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
