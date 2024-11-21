<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const gridSize: number = 4 // 方陣大小
const cellSize: number = 80 // 每個格子的大小 (px)
const catPositions = ref<number[]>([0, 15]) // 初始貓的位置
const mousePosition = ref<number>(5) // 初始老鼠的位置
let intervalId: number | null = null

const totalCells = computed<number>(() => gridSize * gridSize)

const getStyle = (position: number): { transform: string } => {
  const x = (position % gridSize) * cellSize
  const y = Math.floor(position / gridSize) * cellSize
  return {
    transform: `translate(${x}px, ${y}px)`,
  }
}

const isBoundaryCross = (oldPos: number, newPos: number): boolean => {
  // 防止水平越界
  const oldRow = Math.floor(oldPos / gridSize)
  const newRow = Math.floor(newPos / gridSize)
  return oldRow !== newRow && Math.abs(newPos - oldPos) === 1
}

const moveCharacters = (): void => {
  const directions: number[] = [-1, 1, -gridSize, gridSize] // 左, 右, 上, 下

  const move = (position: number): number => {
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]
    const newPosition = position + randomDirection
    if (
      newPosition >= 0 &&
      newPosition < totalCells.value &&
      !isBoundaryCross(position, newPosition)
    ) {
      return newPosition
    }
    return position
  }

  // 移動貓
  catPositions.value = catPositions.value.map((catPosition) => move(catPosition))

  // 移動老鼠
  mousePosition.value = move(mousePosition.value)

  // 判斷遊戲結束
  if (catPositions.value.includes(mousePosition.value)) {
    clearInterval(intervalId!)
    alert('老鼠被抓到了！')
  }
}

onMounted((): void => {
  intervalId = setInterval(moveCharacters, 1000) // 每秒移動一次
})

onBeforeUnmount((): void => {
  clearInterval(intervalId!)
})
</script>

<template>
  <div class="grid">
    <!-- 渲染格線 -->
    <div v-for="index in totalCells" :key="'cell-' + index" class="cell"></div>

    <!-- 渲染貓 -->
    <div
      v-for="(cat, index) in catPositions"
      :key="'cat-' + index"
      class="character cat"
      :style="getStyle(cat)"
    >
      🐱
    </div>

    <!-- 渲染老鼠 -->
    <div class="character mouse" :style="getStyle(mousePosition)">🐭</div>
  </div>
</template>

<style scoped>
.grid {
  position: relative;
  width: 320px; /* gridSize * cellSize */
  height: 320px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4x4 格線 */
  grid-template-rows: repeat(4, 1fr);
  gap: 0; /* 移除單元格間距 */
  border: 2px solid #000;
  background-color: #f8f8f8;
}
.cell {
  border: 1px solid #ddd;
}
.character {
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
