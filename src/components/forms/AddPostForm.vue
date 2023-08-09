<template>
	<section class="flex flex-col justify-center lg:items-center">
		<h2
			class="text-left w-full mb-10 text-5xl text-accent font-bold tracking-wider"
		>
			Add post
		</h2>
		<form class="w-full" @submit.prevent="addPost">
			<div class="mb-4">
				<div class="flex justify-between">
					<label
						class="text-lg font-bold block mb-2 text-aside"
						for="title"
						>Title</label
					>
					<p
						class="text-sm text-red-700 font-bold"
						v-for="error in v$.title.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</p>
				</div>
				<input
					v-model.trim="formData.title"
					type="text"
					id="title"
					name="title"
					class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
				/>
			</div>

			<div class="mb-4">
				<div class="flex justify-between">
					<label
						class="text-lg font-bold block mb-2 text-aside"
						for="description"
						>Description</label
					>
					<p
						class="text-sm text-red-700 font-bold"
						v-for="error in v$.description.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</p>
				</div>
				<input
					v-model.trim="formData.description"
					type="text"
					id="description"
					name="description"
					class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
				/>
			</div>

			<div class="mb-4">
				<div class="flex justify-between">
					<label
						class="text-lg font-bold block mb-2 text-aside"
						for="description"
						>Tags</label
					>
					<p
						class="text-sm text-red-700 font-bold"
						v-for="error in v$.tags.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</p>
				</div>

				<ul class="flex gap-4">
					<li class="flex items-center">
						<input
							v-model="formData.tags"
							value="HMTL"
							type="checkbox"
							name="html"
							id="html"
							class="mr-2"
						/>
						<label for="html" class="text-sm">HTML</label>
					</li>
					<li class="flex items-center">
						<input
							v-model="formData.tags"
							value="CSS"
							type="checkbox"
							name="css"
							id="css"
							class="mr-2"
						/>
						<label for="css" class="text-sm">CSS</label>
					</li>
					<li class="flex items-center">
						<input
							v-model="formData.tags"
							value="JS"
							type="checkbox"
							name="js"
							id="js"
							class="mr-2"
						/>
						<label for="js" class="text-sm">JS</label>
					</li>
					<li class="flex items-center">
						<input
							v-model="formData.tags"
							value="React"
							type="checkbox"
							name="react"
							id="react"
							class="mr-2"
						/>
						<label for="react" class="text-sm">React</label>
					</li>
					<li class="flex items-center">
						<input
							v-model="formData.tags"
							value="VueJS"
							type="checkbox"
							name="vue"
							id="vue"
							class="mr-2"
						/>
						<label for="vue" class="text-sm">Vue</label>
					</li>
					<li class="flex items-center">
						<input
							v-model="formData.tags"
							value="Python"
							type="checkbox"
							name="python"
							id="python"
							class="mr-2"
						/>
						<label for="python" class="text-sm">Python</label>
					</li>
				</ul>
			</div>

			<div class="mb-4">
				<div class="flex justify-between">
					<label
						class="text-lg font-bold block mb-2 text-aside"
						for="content"
						>Content</label
					>
					<p
						class="text-sm text-red-700 font-bold"
						v-for="error in v$.postContent.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</p>
				</div>
				<textarea
					v-model.trim="formData.postContent"
					type="text"
					id="content"
					name="content"
					rows="10"
					class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors resize-none"
				></textarea>
			</div>

			<button
				class="w-full py-1 px-0.5 border border-accent rounded-xl text-accent text-bold text-xl hover:bg-accent hover:text-light transition-colors"
			>
				Add
			</button>
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
		tags: [],
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
			const newPost = {
				id: uuidv4(),
				date: new Date().toLocaleDateString("en-gb"),
				title: formData.title,
				description: formData.description,
				tags: formData.tags,
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
