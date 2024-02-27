<template>
	<h1>{{ $t("blog.blog") }}</h1>
	<div class="" v-if="isMounted && wp_posts.length > 0">
		<BlogPostThumbnail v-for="post in wp_posts" :post="post" :key="post.link" />
	</div>
	<div class="" v-else>
		<p>Loading...</p>
	</div>
</template>

<script setup>
const { locale } = useI18n();
const { WP_URL } = useRuntimeConfig().public;
const isMounted = ref(false);
const { data: wp_posts } = await useFetch(`${WP_URL}/wp-json/wp/v2/posts?lang=${locale.value}`);
const { data: content_posts } = await useAsyncData("content", () => queryContent("/").find());
console.log(wp_posts.value);
console.log(content_posts.value);

onMounted(() => {
	isMounted.value = true;
});
</script>
