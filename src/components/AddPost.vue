<template>
  <h3>Add Post</h3>
  <div>
    <div>
      <span>UserId</span>
      <input
        v-model="formData.userId"
        type="text"
        placeholder="Enter user id"
      >
    </div>
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
import usePostStore from "../store/index.js";

const formData = reactive({
	userId: "",
	title: "",
	body: ""
});

const store = usePostStore();

const submit = async function () {
	await store.SendPost(formData);

	// 成功後清空
	Object.assign(formData, {
		userId: "",
		title: "",
		body: ""
	});
};

</script>

<style>

</style>
