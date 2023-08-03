export default {
	getAllPosts(state) {
		return state.posts;
	},
	getFilter(state) {
		return state.filter;
	},
	filterPosts(state, getters) {
		return state.posts.filter((p) =>
			p.title.toLowerCase().includes(getters.getFilter.toLowerCase())
		);
	},
};
