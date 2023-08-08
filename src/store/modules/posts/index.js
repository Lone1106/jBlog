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
					date: "2.8.2023",
					title: "How to use this blog",
					description:
						"A short guide on how to use this dummy blog project.",
					tags: ["HTML", "CSS", "VUE"],
					author: "Jan",
					content: `<div class="mb-8"><p>In this blog post I will guide you through this VueJS blog project. I will show you how to login to be able to add and delete posts, as well as explain the routes that are currently available and what else you can do and what is has to offer.</p></div><div class="mb-8"><img src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Person writing on laptop" class="w-full rounded-xl"></div><div class="mb-8"><h3 class="tracking-wide font-bold text-accent text-2xl mb-2">Routes guide & overview</h3><ul><li class="mb-2"><h4 class="font-bold text-xl">/</h4><p>The root route will automaticaly direct you to the posts route</p></li><li class="mb-2"><h4 class="font-bold text-xl">/posts</h4><p>The posts route will fetch all current posts sorted from new to old and display them</p></li><li class="mb-2"><h4 class="font-bold text-xl">/posts/:postId</h4><p>This route will fetch the data for the clicked post from the vue store and diplay it on a new page</p></li><li class="mb-2"><h4 class="font-bold text-xl">/addPost</h4><p>This route allows you to add a new post to the blog if you are signed in as a valid user. This route is guarded and only accessible if you are logged in</p></li><li class="mb-2"><h4 class="font-bold text-xl">/login</h4><p>You can login here with your user data. The test user data is provided in the readme file</p></li></ul></div><div class="mb-8"><h3 class="tracking-wide font-bold text-accent text-2xl mb-2">Functionality overview</h3><ul><li class="mb-2"><h4 class="font-bold text-xl">Filter</h4><p>You can filter all posts by typing something into the search bar and only posts with the entered text in their title will be displayed</p></li><li class="mb-2"><h4 class="font-bold text-xl">Login</h4><p>You can login to the blog with a valid user account (predefined in the readme file) to be able to add and deletet posts</p></li><li class="mb-2"><h4 class="font-bold text-xl">Light and dark mode</h4><p>You can toggle light and dark mode of the blog by clicking the sun or moon (depending on current mode) in the top right corner</p></li><li class="mb-2"><h4 class="font-bold text-xl">Add new posts</h4><p>If you are logged in you can add new posts to the store. The form will provide you with predefined snippets to make it easier to stay consistent. You can also use inline CSS and any valid HTML while adding new posts.</p></li><li class="mb-2"><h4 class="font-bold text-xl">Deleting Posts</h4><p>If you are logged in as a user, you will be able to delete posts from the main /posts route</p></li></ul></div>`,
				},
				{
					id: 2,
					date: "2.8.2023",
					title: "A short guide on VueJS",
					description: "How to properly use VueJS.",
					tags: ["VUE"],
					author: "Jan",
					content: "<h1>Testing placement for post 2</h1>",
				},
				{
					id: 3,
					date: "2.8.2023",
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
