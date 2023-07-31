<template>
	<the-header></the-header>
	<router-view></router-view>
	<the-footer></the-footer>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: "Inter", sans-serif;
		font-size: 62.5%;
	}
</style>

<script setup>
	import TheHeader from "./components/layout/TheHeader.vue";
	import TheFooter from "./components/layout/TheFooter.vue";
</script>
