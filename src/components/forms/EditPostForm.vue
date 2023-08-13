<template>
	<section class="flex flex-col justify-center lg:items-center">
		<h2
			class="text-left w-full mb-10 text-5xl text-accent font-bold tracking-wider"
		>
			Edit Post
		</h2>
		<form class="w-full" @submit.prevent="updatePost">
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
				>
					{{ error.$message }}
				</p></textarea-input
			>

			<form-button text="Update" />
		</form>
	</section>
</template>

<script setup>
	import { reactive, computed, onMounted } from "vue";
	import { useStore } from "vuex";
	import { v4 as uuidv4 } from "uuid";
	import { useRouter } from "vue-router";
	import { useVuelidate } from "@vuelidate/core";
	import { required } from "@vuelidate/validators";

	const props = defineProps(["postId"]);

	const store = useStore();
	const router = useRouter();

	const author = computed(() => store.getters["getCurrentAuthor"]);

	const post = computed(() => {
		const allPosts = store.getters["posts/getAllPosts"];
		return allPosts.find((p) => p.id === props.postId);
	});

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

	async function updatePost() {
		const result = await v$.value.$validate();

		if (result) {
			const tagsSplit = formData.tags.split(",");
			const updatedPost = {
				id: post.value.id,
				date: post.value.date,
				title: formData.title,
				description: formData.description,
				tags: tagsSplit,
				content: formData.postContent,
				author: post.value.author,
			};

			store.dispatch({
				type: "posts/updatePost",
				updatedPost,
			});
			router.replace("/");
		}
	}

	onMounted(() => {
		formData.title = post.value.title;
		formData.description = post.value.description;
		formData.tags = post.value.tags.toString();
		formData.postContent = post.value.content;
	});
</script>
