<template>
	<section class="flex flex-col justify-center lg:items-center">
		<h2
			class="text-left lg:w-[500px] mb-10 text-5xl text-accent font-bold tracking-wider"
		>
			Login
		</h2>
		<form class="w-full lg:w-[500px]" @submit.prevent="login">
			<div class="mb-4">
				<div class="flex justify-between">
					<label
						class="text-lg font-bold block mb-2 text-aside"
						:class="{ 'text-red-700': isEmailError }"
						for="email"
						>Email</label
					>
					<p class="text-sm text-red-700 font-bold" v-if="isEmailError">
						Please enter a valid email
					</p>
				</div>
				<input
					v-model="email"
					type="email"
					id="email"
					name="email"
					class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
					:class="{ 'border-red-700': isEmailError }"
					@keyup="resetError"
				/>
			</div>

			<div class="mb-8">
				<div class="flex justify-between">
					<label
						class="text-lg font-bold block mb-2 text-aside"
						:class="{ 'text-red-700': isPasswordError }"
						for="password"
						>Password</label
					>
					<p class="text-sm text-red-700 font-bold" v-if="isPasswordError">
						Please enter a password
					</p>
				</div>

				<input
					v-model="password"
					type="password"
					id="password"
					name="password"
					class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
					:class="{ 'border-red-700': isPasswordError }"
					@keyup="resetError"
				/>
			</div>

			<p class="mb-8 text-red-700 font-bold" v-if="isFormError">
				Please enter your login data
			</p>

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

	const isEmailError = ref(false);
	const isPasswordError = ref(false);
	const isFormError = ref(false);

	// JUST FOR SHOWCASE, should be done with firebase or similar...
	function login() {
		if (email.value === "" && password.value === "") {
			isEmailError.value = true;
			isPasswordError.value = true;
			isFormError.value = true;
		} else if (email.value === "") {
			isEmailError.value = true;
		} else if (password.value === "") {
			isPasswordError.value = true;
		} else if (
			email.value === testUser.email &&
			password.value === testUser.password
		) {
			store.dispatch("toggleLogin");
			router.push("/");
		} else {
			isError.value = true;
		}
	}

	function resetError() {
		isEmailError.value = false;
		isPasswordError.value = false;
		isFormError.value = false;
	}
</script>
