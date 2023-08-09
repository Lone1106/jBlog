<template>
	<div class="mb-4">
		<div class="flex justify-between">
			<label class="text-lg font-bold block mb-2" for="content">{{
				label
			}}</label>
			<slot></slot>
		</div>
		<textarea
			type="text"
			:value="modelValue"
			@change="$emit('update:modelValue', $event.target.value)"
			:id="id"
			:name="id"
			rows="10"
			class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors resize-none"
		></textarea>
	</div>
</template>

<script setup>
	const emit = defineEmits(["update:modelValue"]);
	const props = defineProps(["modelValue", "label", "id"]);
</script>
