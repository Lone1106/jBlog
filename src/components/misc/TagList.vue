<template>
	<ul class="mb-1 flex justify-start gap-2">
		<li
			v-for="tag in tags"
			class="text-aside text-sm border-aside border rounded-xl py-0.5 px-2"
		>
			{{ tag }}
		</li>
	</ul>
</template>

<script setup>
	const props = defineProps(["tags"]);
</script>
