<template>
	<header class="w-full flex justify-between items-center py-12">
		<div class="text-accent tracking-widest">
			<router-link to="/">
				<span class="text-2xl font-bold">j</span>
				<span class="text-1xl">Blog</span>
			</router-link>
		</div>

		<div class="flex justify-end gap-4 items-center">
			<div class="flex items-center">
				<transition name="toggle-mode" mode="out-in">
					<button v-if="isDarkMode" @click="toggleColor">
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

					<button v-else @click="toggleColor">
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
							<path
								d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
							></path>
						</svg>
					</button>
				</transition>
			</div>

			<router-link
				class="text-sm text-accent"
				v-if="!isLoggedIn"
				to="/login"
			>
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
					class="feather feather-log-in"
				>
					<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
					<polyline points="10 17 15 12 10 7"></polyline>
					<line x1="15" y1="12" x2="3" y2="12"></line>
				</svg>
			</router-link>
			<button
				v-if="isLoggedIn"
				@click="logout"
				class="text-sm text-accent"
			>
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
					class="feather feather-log-out"
				>
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
					<polyline points="16 17 21 12 16 7"></polyline>
					<line x1="21" y1="12" x2="9" y2="12"></line>
				</svg>
			</button>
		</div>
	</header>
</template>

<style scoped>
	.toggle-mode-enter-from,
	.toggle-mode-leave-to {
		transform: translateY(30px);
		opacity: 0;
	}

	.toggle-mode-enter-active,
	.toggle-mode-leave-active {
		transition: all 0.15s;
	}

	.toggle-mode-enter-to,
	.toggle-mode-leave-from {
		transform: translateY(0);
		opacity: 1;
	}
</style>

<script setup>
	import { useStore } from "vuex";
	import { computed } from "vue";
	import { useRouter } from "vue-router";

	const emit = defineEmits(["toggleColor"]);

	const store = useStore();
	const router = useRouter();

	const isDarkMode = computed(() => store.getters.isDarkMode);
	const toggleColor = () => emit("toggleColor");

	const isLoggedIn = computed(() => store.getters.loggedInStatus);
	const logout = () => {
		store.dispatch("toggleLogin");
		router.replace("/");
	};
</script>
