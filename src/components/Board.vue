<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{
  (e: 'cellClicked', position: number): void
}>()

const gridSize: number = 4
const totalCells: number = 16
const cellSize: number = 80
const counterClockwiseMap: number[] = [4, 0, 1, 2, 8, 9, 5, 3, 12, 10, 6, 7, 13, 14, 15, 11]
const clockwiseMap: number[] = [1, 2, 3, 7, 0, 6, 10, 11, 4, 5, 9, 15, 8, 12, 13, 14]
const stonePositions = ref<number[]>([])
const stoneTypes = ['⚫', '⚪']

const getStyle = (position: number): { transform: string } => {
  const x = (position % gridSize) * cellSize
  const y = Math.floor(position / gridSize) * cellSize
  return {
    transform: `translate(${x}px, ${y}px)`,
  }
}

const isCellEmpty = (position: number): boolean => !stonePositions.value.includes(position)

const addStone = (position: number): void => {
  if (stonePositions.value.length < totalCells) {
    stonePositions.value.push(position)
  }
}

const moveStones = (direction: 'clockwise' | 'counterClockwise'): void => {
  const moveMap = direction === 'clockwise' ? clockwiseMap : counterClockwiseMap
  stonePositions.value = stonePositions.value.map((pos) => moveMap[pos])
}

const resetStones = (): void => {
  stonePositions.value = Array.from(new Set<number>())
}

defineExpose({ isCellEmpty, addStone, moveStones, resetStones })
</script>

<template>
  <div class="board-container">
    <div class="board-grid">
      <!-- 渲染格線 -->
      <div
        v-for="(_pos, index) in totalCells"
        :key="'cell-' + index"
        class="board-cell"
        @click="() => emits('cellClicked', index)"
      ></div>

      <!-- 渲染石頭 -->
      <div
        v-for="(pos, index) in stonePositions"
        :key="'stone-' + index"
        class="board-stone"
        :style="getStyle(pos)"
        @click.stop
      >
        {{ stoneTypes[index % stoneTypes.length] }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.board-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.board-grid {
  position: relative;
  width: 320px;
  height: 320px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
  border: 2px solid #000;
  background-color: #f8f8f8;
  margin-bottom: 20px;
}
.board-cell {
  border: 1px solid #ddd;
}
.board-stone {
  pointer-events: none;
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  transition: transform 0.5s ease;
}
</style>
