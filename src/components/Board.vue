<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const props = defineProps<{
  initialStonePositions: number[]
}>()

const emits = defineEmits<{
  (e: 'cellClicked', position: number): void
}>()

const gridSize: number = 4
const totalCells: number = 16
const cellSize: number = 80
const counterClockwiseMap: number[] = [4, 0, 1, 2, 8, 9, 5, 3, 12, 10, 6, 7, 13, 14, 15, 11]
const clockwiseMap: number[] = [1, 2, 3, 7, 0, 6, 10, 11, 4, 5, 9, 15, 8, 12, 13, 14]
const stonePositions = ref<number[]>(props.initialStonePositions || [])
const stoneTypes = ['⚫', '⚪']
const stoneTypeIndex = ref<number>(0)

const getStyle = (position: number): { transform: string } => {
  const x = (position % gridSize) * cellSize
  const y = Math.floor(position / gridSize) * cellSize
  return {
    transform: `translate(${x}px, ${y}px)`,
  }
}

const moveStones = (direction: 'clockwise' | 'counterClockwise'): void => {
  const moveMap = direction === 'clockwise' ? clockwiseMap : counterClockwiseMap
  stonePositions.value = stonePositions.value.map((pos) => moveMap[pos])
}

const resetStones = (): void => {
  const positions = new Set<number>()
  stonePositions.value = Array.from(positions)
}

const addStone = (position: number): void => {
  if (!stonePositions.value.includes(position) && stonePositions.value.length < totalCells) {
    stonePositions.value.push(position)
    stoneTypeIndex.value = (stoneTypeIndex.value + 1) % stoneTypes.length
  } else {
    alert('該位置已被佔用，請選擇其他位置。')
  }
}

defineExpose({ moveStones, resetStones })
</script>

<template>
  <div class="board-container">
    <div class="board-grid">
      <!-- 渲染格線 -->
      <div
        v-for="index in totalCells"
        :key="'cell-' + index"
        class="board-cell"
        @click="
          () => {
            addStone(index - 1)
            emits('cellClicked', index - 1)
          }
        "
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
  width: 320px; /* gridSize * cellSize */
  height: 320px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4x4 格線 */
  grid-template-rows: repeat(4, 1fr);
  gap: 0; /* 移除單元格間距 */
  border: 2px solid #000;
  background-color: #f8f8f8;
  margin-bottom: 20px; /* 增加底部空間 */
}
.board-cell {
  border: 1px solid #ddd;
}
.board-stone {
  pointer-events: none; /* 使石頭不會阻止點擊事件 */
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px; /* Emoji 的大小 */
  transition: transform 0.5s ease; /* 平滑移動動畫 */
}
</style>
