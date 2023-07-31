import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/landing/LandingPage.vue";
import LoginForm from "./components/forms/LoginForm.vue";
import AddPostForm from "./components/forms/AddPostForm.vue";
import Post from "./components/post/Post.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/posts" },
		{ path: "/posts", component: LandingPage },
		{ path: "/posts/:postId", props: true, component: Post },
		{ path: "/login", component: LoginForm },
		{ path: "/addPost", component: AddPostForm },
		{ path: "/:notFound(.*)", component: null },
	],
});

export default router;
