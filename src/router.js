import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

import LandingPage from "./components/landing/LandingPage.vue";
const LoginForm = () => import("./components/forms/LoginForm.vue");
const AddPostForm = () => import("./components/forms/AddPostForm.vue");
const EditPostForm = () => import("./components/forms/EditPostForm.vue");
const Post = () => import("./components/post/Post.vue");
const NotFound = () => import("./components/notFound/NotFound.vue");

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/posts" },
		{ path: "/posts", component: LandingPage },
		{ path: "/posts/:postId", props: true, component: Post },
		{ path: "/login", component: LoginForm },
		{ path: "/addPost", component: AddPostForm },
		{ path: "/edit/:postId", component: EditPostForm, props: true },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

router.beforeEach((to, from) => {
	const auth = store.getters["loggedInStatus"];

	if (to.fullPath === "/addPost" && !auth) {
		router.replace("/");
		console.log(to);
		return false;
	}

	if (to.fullPath.includes("/edit") && !auth) {
		router.replace("/");
		return false;
	}
});
export default router;
