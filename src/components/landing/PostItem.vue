<template>
	<figure
		class="w-full hover:border-r-4 hover:border-accent transition-all pr-2"
	>
		<router-link :to="navigateLink">
			<h2 class="text-3xl mb-2">{{ title }}</h2>
			<p class="text-md lg:text-xl mb-4">{{ description }}</p>

			<ul class="mb-1 flex justify-start gap-2">
				<li
					v-for="tag in tags"
					class="text-aside text-sm border-aside border rounded-xl py-0.5 px-2"
				>
					{{ tag }}
				</li>
			</ul>

			<p class="text-aside">Added {{ date }} by {{ author }}</p>
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
