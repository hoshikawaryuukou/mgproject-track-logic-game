<script setup lang="ts">
import { useGameStore } from '../stores/useGameStore'
import Board from '@/components/Board.vue'
import { ref, onMounted } from 'vue'

const gameStore = useGameStore()

onMounted(() => {})
</script>

<template>
  <div class="about">
    <Board />
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
  background-color: #f44336; /* 重置按鈕的背景色 */
  color: white; /* 重置按鈕的文字顏色 */
}
</style>
