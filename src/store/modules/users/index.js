import getters from "./getters.js";

export default {
	namespaced: true,
	state() {
		return {
			admin: {
				id: 1,
				username: "sudo",
				email: "admin@test.de",
				password: "12345",
			},
		};
	},
	getters,
};
