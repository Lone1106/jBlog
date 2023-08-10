export default {
	setFilter(state, query) {
		return (state.filter = query.query);
	},
	resetSearchFilter(state) {
		return (state.filter = "");
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
	updateOnePost(state, query) {
		let postToUpdate = state.posts.findIndex(
			(post) => post.id === query.updatedPost.id,
		);
		return (state.posts[postToUpdate] = query.updatedPost);
	},
};
