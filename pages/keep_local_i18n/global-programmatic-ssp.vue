<template>
	<h1>{{ t("globalProgrammaticSSP.seo.title") }}</h1>
	<h2>{{ t("globalProgrammaticSSP.hero.title") }}</h2>
	<p>{{ t("globalProgrammaticSSP.hero.blurb") }}</p>
</template>

<script setup>
const { t } = useI18n({
	useScope: "local",
});
</script>

<i18n src="~/i18n/global-programmatic-ssp.json"></i18n>
