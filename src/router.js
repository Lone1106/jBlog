import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

const LandingPage = () => import("./components/landing/LandingPage.vue");
const LoginForm = () => import("./components/forms/LoginForm.vue");
const AddPostForm = () => import("./components/forms/AddPostForm.vue");
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
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

// ROUTE GUARD FOR ADD POST
// router.beforeEach((to, from) => {
// 	const auth = store.getters["loggedInStatus"];
// 	if (to.fullPath === "/addPost" && !auth) {
// 		router.replace("/");
// 		return false;
// 	}
// });
export default router;
