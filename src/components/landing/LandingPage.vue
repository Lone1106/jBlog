<template>
	<section
		class="w-full h-full lg:min-h-screen flex flex-col justify-start gap-12"
	>
		<search-filter @emit-filter="setFilter"></search-filter>
		<router-link
			to="/addPost"
			v-if="isAuth"
			class="w-48 text-center text-light rounded-xl px-1 py-2 border border-accent transition-colors hover:bg-accent hover:text-light"
		>
			Add new post
		</router-link>
		<post-item
			v-for="post in posts"
			:id="post.id"
			:title="post.title"
			:date="post.date"
			:description="post.description"
			:author="post.author"
			:tags="post.tags"
		></post-item>
	</section>
</template>

<script setup>
	import { useStore } from "vuex";
	import { computed } from "vue";

	import PostItem from "./PostItem.vue";
	import SearchFilter from "./SearchFilter.vue";

	const store = useStore();
	const allPosts = store.getters["posts/getAllPosts"];
	const isAuth = computed(() => store.getters["loggedInStatus"]);

	const posts = computed(() => store.getters["posts/filterPosts"]);

	function setFilter(query) {
		store.dispatch({
			type: "posts/setFilterValue",
			query,
		});
	}
</script>
