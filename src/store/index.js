import { defineStore } from "pinia";
import axios from "axios";

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
		// 取得特定的post
		getThePost(uid) {
			return this.allPost.find(({ userId }) => userId === +uid);
		},
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
		// 送出刪除貼文
		async SendDelPost(payload) {
			const { uid } = payload;
			const res = await axios.delete(`https://jsonplaceholder.typicode.com/Posts/${uid}`);
			this.delPost(uid);
		},
		// 送出修改貼文
		async SendEditPost(payload) {
			const { userId } = payload;
			const res = await axios.put(`https://jsonplaceholder.typicode.com/Posts/${userId}`);
			this.editPost(payload);
		},
		// 新增頁面顯示貼文
		addPost(payload) {
			const { userId, title, body } = payload;
			this.allPost.push({ id: userId, title, body });
		},
		// 刪除頁面顯示貼文
		delPost(uid) {
			const targetIdx = this.allPost.findIndex(({ id }) => id === uid);
			this.allPost.splice(targetIdx, 1);
		},
		// 修改頁面顯示貼文
		editPost(payload) {
			const { userId } = payload;
			const targetIdx = this.allPost.findIndex(({ id }) => id === userId);
			this.allPost[targetIdx] = { ...payload };
		}
	}
});

export default usePostStore;
