<script setup lang="ts"></script>

<template>
  <div class="description">
    <h1>遊戲簡介</h1>
    <p>
      兩名玩家需要在 4x4
      棋盤上輪流放置棋子，並在每次放置後移動棋盤上的棋子。目標是讓自己的棋子率先形成橫向、縱向或對角線的連線！
    </p>

    <h1>遊戲規則</h1>
    <h2>1. 玩家與棋盤</h2>
    <ul>
      <li>遊戲由兩名玩家參與，玩家分別為 ⚫ 和 ⚪。</li>
      <li>棋盤為一個 4x4 的方格矩陣，每個方格初始時為空。</li>
    </ul>

    <h2>2. 放置棋子</h2>
    <ul>
      <li>每位玩家在自己的回合可以選擇一個空格放置自己的棋子。</li>
    </ul>

    <h2>3. 移動棋子</h2>
    <ul>
      <li>每次放置棋子後，棋盤上的所有棋子<strong>順時針移動一格</strong>。</li>
    </ul>

    <h2>4. 勝利條件</h2>
    <ul>
      <li>玩家棋子若能形成四顆連成一線（橫向、縱向或對角線），則該玩家獲勝。</li>
      <li>若棋盤填滿且無法形成連線，則遊戲平局。</li>
      <li>若無勝負且棋盤未填滿，則換另一位玩家進行下一回合。</li>
    </ul>
  </div>
</template>

<style scoped>
.description {
  font-family: Arial, sans-serif;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1,
h2,
h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

h1 {
  font-size: 1.75em; /* 調整字體大小 */
  border-bottom: 2px solid #2c3e50;
  padding-bottom: 10px;
}

h2 {
  font-size: 1.25em; /* 調整字體大小 */
  margin-top: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

strong {
  color: #e74c3c;
}

p {
  margin-bottom: 20px;
}
</style>
