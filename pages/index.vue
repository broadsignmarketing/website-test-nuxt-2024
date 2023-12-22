<template>
	<h1>{{ t("seo.title") }}</h1>
</template>

<script setup>
const { t } = useI18n({
	useScope: "local",
});
</script>

<i18n src="~/i18n/index.json"></i18n>
