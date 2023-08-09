<template>
	<button
		class="w-full py-1 px-0.5 border border-accent rounded-xl text-accent text-bold text-xl hover:bg-accent hover:text-light transition-colors"
	>
		{{ text }}
	</button>
</template>

<script setup>
	const props = defineProps(["text"]);
</script>
