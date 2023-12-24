<template>
	<h1>{{ t("index.seo.title") }}</h1>
	<h2>{{ t("index.hero.title") }}</h2>
	<p>{{ t("index.hero.blurb") }}</p>
</template>

<script setup>
const { t } = useI18n({
	useScope: "local",
});
</script>

<i18n src="~/i18n/index.json"></i18n>
