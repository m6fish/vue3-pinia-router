<script setup>

import usePostStore from "./store/index.js";

const store = usePostStore();

// 打資料
store.fetchData();
</script>

<template>
  <h1>Post App</h1>
  <h2>Seeting all post.</h2>
  <hr>
  <p>
    <router-link to="/">
      Home
    </router-link>
  </p>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  border-radius: 5px;
  background: #333;
  color: #CCC;
}

</style>
