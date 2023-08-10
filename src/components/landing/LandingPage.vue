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
		<transition-group tag="div" name="post-list" mode="out-in">
			<post-item
				v-for="post in posts"
				:key="post.id"
				:id="post.id"
				:title="post.title"
				:date="post.date"
				:description="post.description"
				:author="post.author"
				:tags="post.tags"
			></post-item>
		</transition-group>
	</section>
</template>

<style scoped>
	.post-list-enter-from,
	.post-list-leave-to {
		opacity: 0;
		transform: translateX(100px);
	}

	.post-list-enter-active,
	.post-list-leave-active {
		transition: all 0.3s ease;
	}

	.post-list-enter-to,
	.post-list-leave-from {
		opacity: 1;
		transform: translateX(0);
	}
</style>

<script setup>
	import { useStore } from "vuex";
	import { computed, onBeforeMount } from "vue";

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

	onBeforeMount(() => {
		store.dispatch("posts/resetFilter");
	});
</script>
