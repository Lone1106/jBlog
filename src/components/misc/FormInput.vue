<template>
	<div class="mb-4">
		<div class="flex justify-between">
			<label class="text-lg font-bold block mb-2" :for="id">{{
				label
			}}</label>
			<slot></slot>
		</div>
		<input
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			:type="type"
			:id="id"
			:name="id"
			class="w-full mb-1 px-4 py-2 rounded-xl text-aside bg-inherit border border-aside focus:outline-none focus:border-accent transition-colors"
		/>
	</div>
</template>

<script setup>
	const emit = defineEmits(["update:modelValue"]);
	const props = defineProps(["modelValue", "type", "id", "label"]);
</script>
