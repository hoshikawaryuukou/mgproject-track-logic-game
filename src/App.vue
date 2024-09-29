<script setup lang="ts">
  import GameEntry from './components/game-entry.vue';
</script>

<template>
  <div class="container">
    <GameEntry />
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
</style>
