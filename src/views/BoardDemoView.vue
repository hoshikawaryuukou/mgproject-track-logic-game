<script setup lang="ts">
import Board from '@/components/Board.vue'
import { ref, onMounted } from 'vue'

const boardRef = ref()

const moveStones = (direction: 'clockwise' | 'counterClockwise'): void => {
  boardRef.value?.moveStones(direction)
}

const resetStones = (): void => {
  boardRef.value?.resetStones()
}

const handleCellClicked = (position: number): void => {
  if (boardRef.value?.isCellEmpty(position) === false) {
    console.log('該位置已被佔用，請選擇其他位置。')
    return
  }

  boardRef.value?.addStone(position)
}

onMounted(() => {
  resetStones()
})
</script>

<template>
  <div class="about">
    <Board ref="boardRef" @cellClicked="handleCellClicked" />
    <div class="buttons">
      <button @click="moveStones('clockwise')" class="move-button">順時針移動</button>
      <button @click="moveStones('counterClockwise')" class="move-button">逆時針移動</button>
      <button @click="resetStones" class="reset-button">重置</button>
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
