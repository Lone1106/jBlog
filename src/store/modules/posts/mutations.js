export default {
	setFilter(state, query) {
		return (state.filter = query.query);
	},
	newPost(state, query) {
		return state.posts.unshift(query.newPost);
	},
};
