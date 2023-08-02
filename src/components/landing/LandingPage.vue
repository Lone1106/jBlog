<template>
	<section class="w-full flex flex-col gap-12">
		<search-filter></search-filter>
		<post-item
			v-for="post in blogPosts"
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
	import PostItem from "./PostItem.vue";
	import SearchFilter from "./SearchFilter.vue";

	const store = useStore();
	const blogPosts = store.getters["posts/getAllPosts"];
</script>
