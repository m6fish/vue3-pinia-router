<template>
  <h1>Edit</h1>
  <div>
    <div>
      <span>Title</span>
      <input
        v-model="formData.title"
        type="text"
        placeholder="Enter Title"
      >
    </div>
    <div>
      <span>Body</span>
      <input
        v-model="formData.body"
        type="text"
        placeholder="Enter body"
      >
    </div>
    <button @click="submit">
      Submit
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import usePostStore from "../store/index.js";

const store = usePostStore();
const route = useRoute();
const router = useRouter();

const uid = route.params.id;
const oldData = store.getThePost(uid);

const formData = reactive(oldData);

const submit = async function () {
	await store.SendEditPost(formData);

	// 轉回去原本的頁面
	router.push("/");
};

</script>

<style>

</style>
