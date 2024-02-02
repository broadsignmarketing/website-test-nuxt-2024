<template>
	<h1>{{ $t("blog.blog") }}</h1>
	<div class="" v-if="isMounted && posts.length > 0">
		<BlogPostThumbnail v-for="post in posts" :post="post" :key="post.link" />
	</div>
	<div class="" v-else>
		<p>Loading...</p>
	</div>
</template>

<script setup>
const { locale } = useI18n();
const { WP_URL } = useRuntimeConfig().public;
const isMounted = ref(false);
const { data: posts } = await useFetch(`${WP_URL}/wp-json/wp/v2/posts?lang=${locale.value}`);

onMounted(() => {
	isMounted.value = true;
});
</script>
