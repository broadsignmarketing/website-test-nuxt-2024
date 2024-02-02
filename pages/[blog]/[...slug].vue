<template>
	<div class="blog_post">
		<Head>
			<Title>{{ title }}</Title>
		</Head>
		<NuxtPicture class="hero" :src="featuredImage" height="500" width="900" />
		<h1>{{ title }}</h1>
		<p>Now : {{ new Date() }}</p>
		<p>{{ blogPostSlug(slug, locale) }}</p>
		<pre>{{ detailedTranslations }}</pre>
		<div class="post_content" v-html="content" />
	</div>
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
console.log(featuredImage);

const { categories, tags, lang, translations } = post;
const { schema } = post.yoast_head_json;
const detailedTranslations = post.detailed_translations;

setLocale(lang);

definePageMeta({
	layout: "blog-post",
});
</script>

<style lang="scss" scoped>
.hero {
	max-width: 900px;
	height: auto;
	width: 100%;
}

.post_content {
	max-width: 900px;
}
</style>
