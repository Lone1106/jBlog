export default {
	setFilter(state, query) {
		return (state.filter = query.query);
	},
};
