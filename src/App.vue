<template>
	<div
		class="lg:w-[1100px] lg:h-screen mx-12 lg:mx-auto flex flex-col justify-between"
		:class="{ 'text-light': isDarkMode }"
	>
		<the-header @toggle-color="setDarkMode"></the-header>
		<main class="text-lg">
			<router-view v-slot="{ Component }">
				<transition name="route-change" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</main>
		<the-footer></the-footer>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.route-change-enter-from,
	.route-change-leave-to {
		opacity: 0;
		transform: translateY(100px);
	}

	.route-change-enter-active,
	.route-change-leave-active {
		transition: all 0.3s ease;
	}

	.route-change-enter-to,
	.route-change-leave-from {
		opacity: 1;
		transform: translateY(0);
	}

	.bg-dark {
		background: #101010;
		color: #f5f5f5;
	}

	.bg-light {
		background: #f5f5f5;
		color: #101010;
	}

	.markdown h3 {
		color: #228be6;
		margin-bottom: 40px;
		margin-top: 40px;
		font-size: 48px;
		letter-spacing: 0.6px;
		line-height: 1;
	}

	.markdown h4 {
		font-size: 32px;
		margin-bottom: 24px;
		margin-top: 24px;
	}

	.markdown img {
		border-radius: 12px;
		margin: 24px 0 24px 0;
	}

	.markdown a {
		color: #228be6;
		transition: all 0.2s;
	}

	.markdown a:hover {
		text-decoration: underline;
	}

	.markdown li {
		margin-bottom: 12px;
	}

	.markdown strong {
		letter-spacing: 0.6px;
		margin-bottom: 2px;
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
