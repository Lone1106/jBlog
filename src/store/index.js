import { createStore } from "vuex";

import userModule from "./modules/users/index.js";
import postsModule from "./modules/posts/index.js";

const store = createStore({
	modules: {
		users: userModule,
		posts: postsModule,
	},
});

export default store;
