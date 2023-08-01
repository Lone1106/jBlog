<template>
	<header class="w-full flex justify-between pt-12 pb-12">
		<div class="text-accent tracking-widest">
			<router-link to="/">
				<span class="text-4xl font-bold">j</span>
				<span class="text-2xl">Blog</span>
			</router-link>
		</div>
		<div>
			<button v-if="isDarkMode" @click="toggleDarkMode">
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
					class="feather feather-sun hover:stroke-accent transition-colors"
				>
					<circle cx="12" cy="12" r="5"></circle>
					<line x1="12" y1="1" x2="12" y2="3"></line>
					<line x1="12" y1="21" x2="12" y2="23"></line>
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
					<line x1="1" y1="12" x2="3" y2="12"></line>
					<line x1="21" y1="12" x2="23" y2="12"></line>
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
				</svg>
			</button>

			<button v-if="!isDarkMode" @click="toggleDarkMode">
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
					class="feather feather-moon hover:stroke-accent transition-colors"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			</button>
		</div>
	</header>
</template>

<script setup>
	import { useStore } from "vuex";
	import { computed } from "vue";

	const store = useStore();

	const isDarkMode = computed(() => store.getters.isDarkMode);
	const toggleDarkMode = () => store.dispatch("toggleDarkMode");
</script>