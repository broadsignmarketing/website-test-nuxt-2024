<template>
	<Head>
		<Title>{{ title }}</Title>
	</Head>
	<NuxtImg class="hero" :src="featuredImage" />
	<h1>{{ title }}</h1>
	<p>{{ blogPostSlug(slug, locale) }}</p>
	<pre>{{ detailedTranslations }}</pre>
	<div class="post_content" v-html="content" />
</template>

<script setup>
const { locale, setLocale } = useI18n();
const i18n = useI18n();
const route = useRoute();
const slug = route.params.slug.join("/");

const { WP_URL } = useRuntimeConfig().public;
const { data } = await useFetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`);
const post = data.value[0];

const title = post.title.rendered;
const content = post.content.rendered;
const featuredImage = post._embedded["wp:featuredmedia"][0].source_url;
const { categories, tags, lang, translations } = post;
const { schema } = post.yoast_head_json;
const detailedTranslations = post.detailed_translations;

setLocale(lang);

console.log(slug, locale.value);
console.log(post);

definePageMeta({
	layout: "blog-post",
});
</script>

<style lang="scss">
.hero {
	max-width: 900px;
}

.post_content {
	max-width: 900px;
}
</style>
