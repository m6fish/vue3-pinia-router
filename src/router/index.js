import { createRouter, createWebHashHistory } from "vue-router";

import link1 from "../components/link1.vue";
import link2 from "../components/link2.vue";

const routes = [
	{ path: "/", component: link1 },
	{ path: "/about", component: link2 }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
