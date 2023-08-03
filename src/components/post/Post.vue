<template>
	<section
		class="w-full h-full lg:min-h-screen flex flex-col justify-start"
	>
		<div id="contentArea"></div>
	</section>
</template>

<script setup>
	import { useStore } from "vuex";
	import { onMounted } from "vue";

	const store = useStore();
	const props = defineProps(["postId"]);

	const allPosts = store.getters["posts/getAllPosts"];
	const post = allPosts.find((p) => p.id === Number(props.postId));

	onMounted(() => {
		const contentArea = document.getElementById("contentArea");
		contentArea.innerHTML = post.content;
	});
</script>
