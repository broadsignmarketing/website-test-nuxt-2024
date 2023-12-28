<template>
	<NuxtLayout name="blog-post">
		<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
			<Head>
				<Title>{{ title }}</Title>
			</Head>
		</Html>
		<h1>{{ title }}</h1>
		<p>{{ blogPostSlug(slug, locale) }}</p>
		<pre>{{ detailedTranslations }}</pre>
	</NuxtLayout>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const i18n = useI18n();
const route = useRoute();
const slug = route.params.slug.join("/");

const { WP_URL } = useRuntimeConfig().public;
const { data } = await useFetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}`);
const post = data.value[0];

const title = post.title.rendered;
const { categories, tags, lang, translations } = post;
const { schema } = post.yoast_head_json;
const detailedTranslations = post.detailed_translations;

setLocale(lang);

console.log(slug, locale.value);
console.log(i18n);
</script>
