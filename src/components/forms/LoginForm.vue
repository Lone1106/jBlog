<template>
	<section class="flex flex-col justify-center lg:items-center py-6">
		<h2
			class="text-left lg:w-[500px] mb-10 text-5xl text-accent font-bold tracking-wider"
		>
			Login
		</h2>
		<form class="w-full lg:w-[500px]" @submit.prevent="login">
			<form-input
				id="email"
				label="Email"
				type="email"
				v-model.trim="loginData.email"
			>
				<p
					class="text-sm text-red-700 font-bold"
					v-for="error in v$.email.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</form-input>

			<form-input
				id="password"
				label="Password"
				type="password"
				v-model.trim="loginData.password"
			>
				<p
					class="text-sm text-red-700 font-bold"
					v-for="error in v$.password.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</form-input>

			<form-button text="Login" />
		</form>
		<p class="text-aside text-sm mt-4">
			Dummy Account: Email: admin@test.de - PW: 12345
		</p>
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
