export default {
	setFilterValue(context, payload) {
		context.commit("setFilter", payload);
	},
	addNewPost(context, payload) {
		context.commit("newPost", payload);
	},
	deleteOnePost(context, payload) {
		context.commit("deletePost", payload);
	},
};
