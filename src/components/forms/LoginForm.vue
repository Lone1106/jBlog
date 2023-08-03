<template>
	<section class="flex flex-col justify-center items-center">
		<h2
			class="text-left lg:w-[500px] mb-10 text-5xl text-accent text-bold"
		>
			Login
		</h2>
		<form class="w-full lg:w-[500px]" @submit.prevent="login">
			<div class="mb-4">
				<label class="text-lg font-bold block mb-2 text-aside" for="email"
					>Email</label
				>
				<input
					v-model="email"
					type="email"
					id="email"
					name="email"
					class="w-full px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
				/>
			</div>

			<div class="mb-8">
				<label
					class="text-lg font-bold block mb-2 text-aside"
					for="password"
					>Password</label
				>
				<input
					v-model="password"
					type="password"
					id="password"
					name="password"
					class="w-full px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
				/>
			</div>

			<button
				class="w-full py-1 px-0.5 border border-accent rounded-xl text-accent text-bold text-xl hover:bg-accent hover:text-light transition-colors"
			>
				Login
			</button>
		</form>
	</section>
</template>

<script setup>
	import { ref } from "vue";
	import { useStore } from "vuex";
	import { useRouter } from "vue-router";

	const router = useRouter();

	const store = useStore();
	const testUser = store.getters["users/getAdmin"];

	const email = ref("");
	const password = ref("");

	// JUST FOR SHOWCASE, should be done with firebase or similar...
	function login() {
		if (
			email.value === testUser.email &&
			password.value === testUser.password
		) {
			store.dispatch("toggleLogin");
			router.push("/");
		} else {
			console.log("error");
		}
	}
</script>
