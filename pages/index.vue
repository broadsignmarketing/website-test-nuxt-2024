<template>
	<h1>{{ t("seo.title") }}</h1>
</template>

<script setup>
const i18n = useI18n();
console.log(i18n.messages.value);
const { t } = useI18n({
	useScope: "local",
});
</script>

<style lang="postcss">
h1 {
	color: black;
}
</style>

<i18n src="~/i18n/index.json"></i18n>
