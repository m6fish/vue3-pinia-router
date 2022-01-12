<template>
  <h3>Posts</h3>
  <div>
    <div
      v-for="{id, title, body} in list"
      :key="id"
      class="post"
    >
      <p class="post-title">
        {{ title }}
      </p>
      <div class="post-body">
        {{ body }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import usePostStore from "../store/index.js";

const store = usePostStore();

// 打資料
store.fetchData();

const list = store.getPosts;

</script>

<style lang="scss" scoped>

.post {
  border: 1px solid #333;
  border-radius: 5px;
  margin: 5px 0;

  .post-title {
    background: #333;
    color: #EEE;
    margin: 5px 0;
  }
}

</style>
