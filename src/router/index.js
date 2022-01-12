import { createRouter, createWebHashHistory } from "vue-router";

import home from "../components/Home.vue";
import edit from "../components/EditPost.vue";

const routes = [
	{
		path: "/",
		component: home,
		meta: {
			keepAlive: true
		}
	},
	{ path: "/edit/:id", component: edit }
];

const router = createRouter({
	history: createWebHashHistory(),
	linkActiveClass: "active",
	routes
});

export default router;
