<template>
	<div
		class="lg:w-[1100px] h-screen mx-12 lg:mx-auto flex flex-col justify-between"
		:class="{ 'text-light': isDarkMode }"
	>
		<the-header @toggle-color="setDarkMode"></the-header>
		<main>
			<router-view></router-view>
		</main>
		<the-footer></the-footer>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.bg-dark {
		background: #101010;
	}

	.bg-light {
		background: #f5f5f5;
	}
</style>

<script setup>
	import { useStore } from "vuex";
	import { computed } from "vue";

	import TheHeader from "./components/layout/TheHeader.vue";
	import TheFooter from "./components/layout/TheFooter.vue";

	const store = useStore();
	const isDarkMode = computed(() => store.getters.isDarkMode);

	function setDarkMode() {
		store.dispatch("toggleDarkMode");
		const body = document.querySelector("body");

		if (isDarkMode.value) {
			body.classList.add("bg-dark");
			body.classList.remove("bg-light");
		} else if (!isDarkMode.value) {
			body.classList.add("bg-light");
			body.classList.remove("bg-dark");
		}
	}
</script>
