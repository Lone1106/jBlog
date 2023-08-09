<template>
	<section class="w-full">
		<label class="text-bold text-xl mb-2 block">Search</label>
		<input
			type="text"
			placeholder="How to use this blog"
			class="w-full px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors placeholder:text-aside"
			v-model.trim="filterText"
			@keyup="emitFilter"
		/>
	</section>
</template>

<script setup>
	import { ref } from "vue";

	const emit = defineEmits(["emitFilter"]);

	let filterText = ref("");

	function emitFilter() {
		emit("emitFilter", filterText);
	}
</script>
