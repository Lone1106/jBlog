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
						for="email"
						>Email</label
					>
					<p
						class="text-sm text-red-700 font-bold"
						v-for="error in v$.email.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</p>
				</div>
				<input
					v-model="loginData.email"
					type="email"
					id="email"
					name="email"
					class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
				/>
			</div>

			<div class="mb-8">
				<div class="flex justify-between">
					<label
						class="text-lg font-bold block mb-2 text-aside"
						for="password"
						>Password</label
					>
					<p
						class="text-sm text-red-700 font-bold"
						v-for="error in v$.password.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</p>
				</div>

				<input
					v-model="loginData.password"
					type="password"
					id="password"
					name="password"
					class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
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
	import { reactive, computed } from "vue";
	import { useStore } from "vuex";
	import { useRouter } from "vue-router";
	import { useVuelidate } from "@vuelidate/core";
	import { required, email } from "@vuelidate/validators";

	const router = useRouter();

	const store = useStore();
	const testUser = store.getters["users/getAdmin"];

	const loginData = reactive({
		email: "",
		password: "",
	});

	const rules = computed(() => {
		return {
			email: { required, email },
			password: { required },
		};
	});

	const v$ = useVuelidate(rules, loginData);

	async function login() {
		const result = await v$.value.$validate();

		if (result) {
			store.dispatch("toggleLogin");
			store.dispatch({
				type: "setAuthor",
				author: testUser.username,
			});
			router.push("/");
		}
	}
</script>
