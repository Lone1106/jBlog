import { createStore } from "vuex";

import userModule from "./modules/users/index.js";
import postsModule from "./modules/posts/index.js";

const store = createStore({
	state() {
		return {
			darkMode: true,
			isLoggedIn: false,
			currentAuthor: "",
		};
	},
	mutations: {
		changeMode(state) {
			state.darkMode = !state.darkMode;
		},
		setLoggedInStatus(state) {
			state.isLoggedIn = !state.isLoggedIn;
		},
		setCurrentAuthor(state, payload) {
			state.currentAuthor = payload.author;
		},
	},
	getters: {
		isDarkMode(state) {
			return state.darkMode;
		},
		loggedInStatus(state) {
			return state.isLoggedIn;
		},
		getCurrentAuthor(state) {
			return state.currentAuthor;
		},
	},
	actions: {
		toggleDarkMode(context) {
			context.commit("changeMode");
		},
		toggleLogin(context) {
			context.commit("setLoggedInStatus");
		},
		setAuthor(context, payload) {
			context.commit("setCurrentAuthor", payload);
		},
	},
	modules: {
		users: userModule,
		posts: postsModule,
	},
});

export default store;
