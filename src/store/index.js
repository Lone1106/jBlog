import { createStore } from "vuex";

import userModule from "./modules/users/index.js";
import postsModule from "./modules/posts/index.js";

const store = createStore({
	state() {
		return {
			darkMode: true,
			isLoggedIn: false,
		};
	},
	mutations: {
		changeMode(state) {
			state.darkMode = !state.darkMode;
		},
		setLoggedInStatus(state) {
			state.isLoggedIn = !state.isLoggedIn;
		},
	},
	getters: {
		isDarkMode(state) {
			return state.darkMode;
		},
		loggedInStatus(state) {
			return state.isLoggedIn;
		},
	},
	actions: {
		toggleDarkMode(context) {
			context.commit("changeMode");
		},
		toggleLogin(context) {
			context.commit("setLoggedInStatus");
		},
	},
	modules: {
		users: userModule,
		posts: postsModule,
	},
});

export default store;
