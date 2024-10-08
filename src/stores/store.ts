import { acceptHMRUpdate, defineStore } from 'pinia';

export const useTaskStore = defineStore('game-core', () => {});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
