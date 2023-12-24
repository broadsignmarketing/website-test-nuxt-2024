<template>
	<h1>{{ t("localSignageMessaging.seo.title") }}</h1>
	<h2>{{ t("localSignageMessaging.hero.title") }}</h2>
	<p>{{ t("localSignageMessaging.hero.blurb") }}</p>
</template>

<script setup>
const { t } = useI18n({
	useScope: "local",
});
</script>

<i18n src="~/i18n/local-signage-messaging.json"></i18n>
