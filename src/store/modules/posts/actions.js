export default {
	setFilterValue(context, payload) {
		context.commit("setFilter", payload);
	},
	resetFilter(context) {
		context.commit("resetSearchFilter");
	},
	addNewPost(context, payload) {
		context.commit("newPost", payload);
	},
	deleteOnePost(context, payload) {
		context.commit("deletePost", payload);
	},
	updatePost(context, payload) {
		context.commit("updateOnePost", payload);
	},
};
