<template>
	<section
		class="w-full h-full lg:min-h-screen flex flex-col justify-start"
	>
		<div class="mb-8">
			<h2
				class="uppercase text-accent text-4xl mb-4 font-bold tracking-wide"
			>
				{{ post.title }}
			</h2>
			<tag-list :tags="post.tags" />
			<p class="text-aside">Added {{ post.date }} by {{ post.author }}</p>
		</div>

		<figure
			class="markdown"
			v-html="markdown.render(post.content)"
		></figure>
	</section>
</template>

<script setup>
	import { useStore } from "vuex";
	import { onMounted } from "vue";
	import MarkdownIt from "markdown-it";

	const markdown = new MarkdownIt();
	const store = useStore();
	const props = defineProps(["postId"]);

	const allPosts = store.getters["posts/getAllPosts"];
	const post = allPosts.find((p) => p.id === Number(props.postId));
</script>
