<template>
	<section class="flex flex-col justify-center lg:items-center">
		<h2
			class="text-left w-full mb-10 text-5xl text-accent font-bold tracking-wider"
		>
			Add post
		</h2>
		<form class="w-full" @submit.prevent="addPost">
			<form-input
				id="title"
				label="Title"
				type="text"
				v-model.trim="formData.title"
			>
				<p
					class="text-sm text-red-700 font-bold"
					v-for="error in v$.title.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</form-input>

			<form-input
				id="description"
				label="Description"
				type="text"
				v-model.trim="formData.description"
			>
				<p
					class="text-sm text-red-700 font-bold"
					v-for="error in v$.description.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</form-input>

			<form-input
				id="tags"
				label="Tags (please seperate by comma)"
				type="text"
				v-model.trim="formData.tags"
			>
				<p
					class="text-sm text-red-700 font-bold"
					v-for="error in v$.tags.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</form-input>

			<textarea-input
				label="Markup"
				id="content"
				v-model.trim="formData.postContent"
			>
				<p
					class="text-sm text-red-700 font-bold"
					v-for="error in v$.postContent.$errors"
					:key="error.$uid"
				></p
			></textarea-input>

			<form-button text="Add" />
		</form>
	</section>
</template>

<script setup>
	import { reactive, computed } from "vue";
	import { useStore } from "vuex";
	import { v4 as uuidv4 } from "uuid";
	import { useRouter } from "vue-router";
	import { useVuelidate } from "@vuelidate/core";
	import { required } from "@vuelidate/validators";

	const store = useStore();
	const router = useRouter();

	const author = computed(() => store.getters["getCurrentAuthor"]);

	const formData = reactive({
		title: "",
		description: "",
		postContent: "",
		tags: "",
	});

	const rules = computed(() => {
		return {
			title: { required },
			description: { required },
			postContent: { required },
			tags: { required },
		};
	});

	const v$ = useVuelidate(rules, formData);

	async function addPost() {
		const result = await v$.value.$validate();

		if (result) {
			const tagsSplit = formData.tags.toUpperCase().split(",");
			const newPost = {
				id: uuidv4(),
				date: new Date().toLocaleDateString("en-gb"),
				title: formData.title,
				description: formData.description,
				tags: tagsSplit,
				author: author,
				content: formData.postContent,
			};

			store.dispatch({
				type: "posts/addNewPost",
				newPost,
			});
			router.replace("/");
		}
	}
</script>
