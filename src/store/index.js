import { createStore } from "vuex";

import userModule from "./modules/users/index.js";
import postsModule from "./modules/posts/index.js";

const store = createStore({
	state() {
		return {
			darkMode: true,
		};
	},
	mutations: {
		changeMode(state) {
			state.darkMode = !state.darkMode;
		},
	},
	getters: {
		isDarkMode(state) {
			return state.darkMode;
		},
	},
	actions: {
		toggleDarkMode(context) {
			context.commit("changeMode");
		},
	},
	modules: {
		users: userModule,
		posts: postsModule,
	},
});

export default store;
