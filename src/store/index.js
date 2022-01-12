import { defineStore } from "pinia";
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
		fetchData() {
			this.allPost = apiData;
			console.log(apiData);
		}
	}
});

export default usePostStore;
