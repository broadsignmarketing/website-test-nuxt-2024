<template>
	<pre>
		{{ data }}
</pre
	>
</template>

<script setup>
const route = useRoute();
console.log(route);
const { data } = await useAsyncData("post", () => queryContent("/").findOne());
</script>
