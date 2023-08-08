<template>
	<figure class="w-full">
		<router-link :to="navigateLink">
			<h2 class="text-3xl mb-2 font-bold">{{ title }}</h2>
			<p class="text-md lg:text-xl mb-2">{{ description }}</p>

			<tag-list :tags="tags" />

			<p class="text-aside">Added {{ date }} by {{ author }}</p>
			<p class="text-accent">Read post</p>
		</router-link>
	</figure>
</template>

<script setup>
	import { useRoute } from "vue-router";

	const props = defineProps([
		"id",
		"title",
		"date",
		"description",
		"author",
		"tags",
	]);

	const route = useRoute();
	const navigateLink = `${route.path}/${props.id}`;
</script>
