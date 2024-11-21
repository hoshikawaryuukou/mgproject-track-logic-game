<script setup lang="ts">
import Try from '@/components/Try.vue'
import Board from '@/components/Board.vue'
</script>

<template>
  <div class="about">
    <!-- <Try /> -->
    <Board />
  </div>
</template>

<style>
.about {
  min-height: 100%; /* 填滿視窗高度 */
  display: flex; /* 啟用 Flexbox */
  align-items: center; /* 垂直置中 */
  justify-content: center; /* 水平置中 */
}
</style>
