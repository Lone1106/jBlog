import getters from "./getters.js";

export default {
	namespaced: true,
	state() {
		return {
			admin: {
				id: 1,
				email: "admin@test.de",
				password: "12345",
			},
		};
	},
	getters,
};
