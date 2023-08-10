<template>
	<figure class="w-full mb-12">
		<router-link :to="navigateLink">
			<h2 class="text-3xl mb-2 font-bold">{{ title }}</h2>
			<p class="text-md lg:text-xl mb-2">{{ description }}</p>

			<tag-list :tags="tags" />

			<p class="text-aside">Added {{ date }} by {{ author }}</p>
			<p class="text-accent">Read post</p>
		</router-link>
		<div v-if="isAuth" class="mt-4">
			<router-link
				:to="updateRoute"
				class="inline-block mr-4 bg-green-600 rounded-xl py-1 px-10 tracking-wide hover:bg-green-700 transition-colors text-light"
			>
				Edit
			</router-link>
			<button
				class="mr-4 bg-red-600 rounded-xl py-1 px-10 tracking-wide hover:bg-red-700 transition-colors text-light"
				@click="deltePost(id)"
			>
				Delete
			</button>
		</div>
	</figure>
</template>

<script setup>
	import { useRoute } from "vue-router";
	import { useStore } from "vuex";
	import { computed } from "vue";

	const store = useStore();
	const isAuth = computed(() => store.getters["loggedInStatus"]);

	const props = defineProps([
		"id",
		"title",
		"date",
		"description",
		"author",
		"tags",
	]);

	function deltePost(postId) {
		store.dispatch({
			type: "posts/deleteOnePost",
			postId,
		});
	}

	const route = useRoute();
	const navigateLink = `${route.path}/${props.id}`;
	const updateRoute = `/edit/${props.id}`;
</script>
