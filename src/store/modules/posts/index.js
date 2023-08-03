import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
	namespaced: true,
	state() {
		return {
			filter: "",
			posts: [
				{
					id: 1,
					date: "02-08-2023",
					title: "How to use this blog",
					description:
						"A short guide on how to use this dummy blog project.",
					tags: ["HTML", "CSS", "VUE"],
					author: "Jan",
					content: "<h1>Testing placement for post 1</h1>",
				},
				{
					id: 2,
					date: "02-08-2023",
					title: "A short guide on VueJS",
					description: "How to properly use VueJS.",
					tags: ["VUE"],
					author: "Jan",
					content: "<h1>Testing placement for post 2</h1>",
				},
				{
					id: 3,
					date: "02-08-2023",
					title: "Whats the meaning of life",
					description: "Let me tell you about the meaning of life!",
					tags: ["ADVICE"],
					author: "Jan",
					content: "<h1>Testing placement for post 3</h1>",
				},
			],
		};
	},
	getters,
	actions,
	mutations,
};
