import { defineStore } from "pinia";
import axios from "axios";
import apiData from "../API/data.json";

const usePostStore = defineStore({
	id: "posts",
	state: () => ({
		allPost: []
	}),
	getters: {
		getPosts() {
			return this.allPost;
		}
	},
	actions: {
		// 取得貼文資料
		async fetchData() {
			const { data, status } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
			if (status === 200) {
				this.allPost = data;
			}
		},
		// 送出新增貼文
		async SendPost(payload) {
			const res = await axios.post("https://jsonplaceholder.typicode.com/Posts", payload);
			this.addPost(payload);
		},
		// 新增頁面顯示貼文
		addPost(payload) {
			console.log(payload);
			const { userId, title, body } = payload;
			this.allPost.push({ id: userId, title, body });
		}
	}
});

export default usePostStore;
