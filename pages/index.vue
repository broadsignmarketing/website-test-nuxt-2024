<template>
	<h1>{{ $t("index.seo.title") }}</h1>
	<h2>
		<span v-for="span in $tm('index.hero.title')">{{ $rt(span) }}</span>
	</h2>
	<p>{{ $t("index.hero.par") }}</p>
</template>

<script setup></script>

<style lang="scss" scoped>
h2 span {
	margin-right: 0.4ch;
}
</style>
