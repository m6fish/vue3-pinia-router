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
		async fetchData() {
			const { data, status } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
			if (status === 200) {
				this.allPost = data;
			}
		}
	}
});

export default usePostStore;
