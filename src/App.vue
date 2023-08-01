<template>
	<div
		class="h-screen"
		:class="{ 'bg-light': !isDarkMode, 'bg-dark': isDarkMode }"
	>
		<div
			class="lg:w-[1100px] mx-12 lg:mx-auto"
			:class="{ 'text-light': isDarkMode }"
		>
			<the-header></the-header>
			<router-view></router-view>
			<the-footer></the-footer>
		</div>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<script setup>
	import { useStore } from "vuex";
	import { computed } from "vue";

	import TheHeader from "./components/layout/TheHeader.vue";
	import TheFooter from "./components/layout/TheFooter.vue";

	const store = useStore();
	const isDarkMode = computed(() => store.getters.isDarkMode);
</script>
