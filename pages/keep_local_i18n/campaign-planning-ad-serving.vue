<template>
	<h1>{{ $t("campaignPlanningAdServing.seo.title") }}</h1>
	<h2>{{ t("campaignPlanningAdServing.hero.title") }}</h2>
	<p>{{ t("campaignPlanningAdServing.hero.blurb") }}</p>
</template>

<script setup>
const i18n = useI18n();
console.log(i18n.messages.value);
</script>
