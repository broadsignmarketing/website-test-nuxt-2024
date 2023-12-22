<template>
	<div></div>
</template>

<script setup lang="ts">
const i18n = useI18n();

console.log(i18n.messages.value);

useHead({
	title: "My App",
	meta: [{ name: "description", content: "My amazing site." }],
	bodyAttrs: {
		class: "test",
	},
	script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>
