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
					date: "02/08/2023",
					title: "How to use this blog",
					description:
						"A short guide on how to use this dummy blog project.",
					tags: ["HTML", "CSS", "VUE"],
					author: "Jan",
					content: `In this blog post I will guide you through this VueJS blog
project. I will show you how to login to be able to add and
delete posts, as well as explain the routes that are currently
available and what else you can do and what is has to offer.

![Person writing on laptop](https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

### Routes guide & overview

- **/** The root route will automaticaly direct you to the posts
  route

- **/posts** The posts route will fetch all current posts sorted from new
  to old and display them

- **/posts/:postId** This route will fetch the data for the clicked post from the vue store and diplay it on a new page

- **/addPost** This route allows you to add a new post to the blog if you
  are signed in as a valid user. This route is guarded and only
  accessible if you are logged in

- **/login** You can login here with your user data. The test user data is
  provided in the readme file

### Functionality overview

- **Filter** You can filter all posts by typing something into the search
  bar and only posts with the entered text in their title will
  be displayed

- **Login** You can login to the blog with a valid user account
  (predefined in the readme file) to be able to add and deletet
  posts

- **Light and dark mode** You can toggle light and dark mode of the blog by clicking the sun or moon (depending on current mode) in the top right corner

- **Add/delete/edit posts** If you are logged in you can add new posts as well as edit and delete already existing posts. The form for adding new posts will take markdown as in its content area for you to write your post content

For more info about markdown click [here](https://de.wikipedia.org/wiki/Markdown#:~:text=Markdown%20ist%20eine%20vereinfachte%20Auszeichnungssprache,bei%20der%20Entwicklung%20der%20Syntax.)
`,
				},
				{
					id: 2,
					date: "02/08/2023",
					title: "A short guide on VueJS",
					description: "How to properly use VueJS.",
					tags: ["VUE"],
					author: "Jan",
					content:
						"#### This post only exists to test the filter functionality of the /posts route",
				},
			],
		};
	},
	getters,
	actions,
	mutations,
};
