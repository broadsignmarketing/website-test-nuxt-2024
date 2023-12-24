<template>
	<h1>{{ $t("campaign-planning-ad-serving.seo.title") }}</h1>
	<h2>{{ $t("campaign-planning-ad-serving.hero.title") }}</h2>
	<p>{{ $t("campaign-planning-ad-serving.hero.blurb") }}</p>
</template>

<script setup>
const i18n = useI18n();
console.log(i18n.messages.value);
</script>
