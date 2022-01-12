<script setup>
import Post from "./components/Post.vue";
import AddPost from "./components/AddPost.vue";
</script>

<template>
  <h1>Post App</h1>
  <h2>Seeting all post.</h2>
  <hr>
  <AddPost />
  <hr>
  <Post />
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
</style>
