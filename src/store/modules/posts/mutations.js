export default {
	setFilter(state, query) {
		return (state.filter = query.query);
	},
	newPost(state, query) {
		return state.posts.unshift(query.newPost);
	},
	deletePost(state, query) {
		let postToDelete = state.posts.findIndex(
			(post) => post.id === query.postId,
		);
		return state.posts.splice(postToDelete, 1);
	},
};
