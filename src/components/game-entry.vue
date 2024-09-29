<script setup lang="ts">
  //import { useTaskStore } from '../stores/store';

  //const store = useTaskStore();
</script>

<template>
  <div class="runner">

  </div>
</template>

<style scoped>
  .runner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 2em;
    background-color: #f0f4f8;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    margin-bottom: 1.5rem;
    color: #333;
  }

  .input-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #555;
  }

  input {
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 200px;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  button {
    padding: 0.5em 1em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  .progress-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  progress {
    margin: 0.5rem 0;
    width: 100%;
    max-width: 300px;
  }

  span {
    font-weight: bold;
    color: #333;
  }
</style>
