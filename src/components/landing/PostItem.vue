<template>
	<figure class="w-full mb-12">
		<router-link :to="navigateLink">
			<div class="flex justify-between mb-2">
				<h2 class="text-3xl font-bold">{{ title }}</h2>
				<div v-if="isAuth">
					<router-link :to="updateRoute" class="inline-block mr-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-edit hover:stroke-accent transition-colors"
						>
							<path
								d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
							></path>
							<path
								d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
							></path>
						</svg>
					</router-link>
					<button @click="deltePost(id)">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-delete hover:stroke-accent transition-colors"
						>
							<path
								d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
							></path>
							<line x1="18" y1="9" x2="12" y2="15"></line>
							<line x1="12" y1="9" x2="18" y2="15"></line>
						</svg>
					</button>
				</div>
			</div>
			<p class="text-md lg:text-xl mb-2">{{ description }}</p>

			<tag-list :tags="tags" />

			<p class="text-aside">Added {{ date }} by {{ author }}</p>
			<p class="text-accent">Read post</p>
		</router-link>
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
