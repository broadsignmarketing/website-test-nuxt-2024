<template>
	<h1>{{ t("staticCampaigns.seo.title") }}</h1>
	<h2>{{ t("staticCampaigns.hero.title") }}</h2>
	<p>{{ t("staticCampaigns.hero.blurb") }}</p>
</template>

<script setup>
const { t } = useI18n({
	useScope: "local",
});
</script>

<i18n src="~/i18n/static-campaigns.json"></i18n>
