<template>
	<h1>{{ $t("blog.blog") }}</h1>
	<div class="">
		<BlogPostThumbnail v-for="post in posts" :post="post" :key="post.link" />
	</div>
</template>

<script setup>
const { locale } = useI18n();
const { WP_URL } = useRuntimeConfig().public;
const { data: posts } = await useFetch(`${WP_URL}/wp-json/wp/v2/posts?lang=${locale.value}`);
</script>
