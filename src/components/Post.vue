<template>
  <h3>Posts</h3>
  <div>
    <div
      v-for="{id, title, body} in list"
      :key="id"
      class="post"
    >
      <div
        class="post-del"
        @click="delPost(id)"
      >
        {{ `userId:${id}` }} Delete
      </div>
      <p class="post-title">
        {{ title }}
      </p>
      <div class="post-body">
        {{ body }}
      </div>
      <div
        class="post-edit"
        @click="toEdit(id)"
      >
        Edit
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import usePostStore from "../store/index.js";

const store = usePostStore();

const list = computed(() => store.getPosts);

const delPost = async function (uid) {
	store.SendDelPost({ uid });
};

const router = useRouter();
const toEdit = function (uid) {
	router.push(`/edit/${uid}`);
};

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

  .post-del {
    cursor: pointer;
    &:hover {
      background: #333;
      color: #EEE;
    }
  }
}

</style>
