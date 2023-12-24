<template>
	<h1>{{ t("contentNetworkManagement.seo.title") }}</h1>
	<h2>{{ t("contentNetworkManagement.hero.title") }}</h2>
	<p>{{ t("contentNetworkManagement.hero.blurb") }}</p>
</template>

<script setup>
const { t } = useI18n({
	useScope: "local",
});
</script>

<i18n src="~/i18n/content-network-management.json"></i18n>
