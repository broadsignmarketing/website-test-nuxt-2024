<template>
	<div class="blog_post">
		<Head>
			<Title>{{ title }}</Title>
		</Head>
		<div class="container">
			<h2>Blaaaaaah</h2>
			<p>Now : {{ new Date() }}</p>
			<p>{{ source }}</p>
			<NuxtPicture class="hero" :src="hero" height="500" width="900" v-if="hero" />
			<h1 v-if="title">{{ title }}</h1>
			<p>{{ slug }}</p>
			<ContentDoc :path="`blog/${locale}/${slug}`" v-if="source === 'content'" />
			<div class="post_content" v-html="content" v-if="source === 'wp' && content" />
			<!--
			<p>{{ blogPostSlug(slug, locale) }}</p>
			<pre>{{ detailedTranslations }}</pre>
			<pre>{{ post }}</pre>
			-->
		</div>
	</div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const route = useRoute();
const slug = route.params.slug.join("/");
const source = ref("content");

console.log(locale.value, slug);

let content = "";
let wpPost = ref("");
let categories = [];
let tags = [];
let lang = "";
let translations = [];
let schema = "";
let detailedTranslations = [];

const { WP_URL } = useRuntimeConfig().public;

const { data } = await useAsyncData("post", () =>
	queryContent("blog")
		.where({ path: { $contains: slug }, locale: locale.value })
		.findOne()
);

const { data: wpData } = useFetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
	onResponse({ request, response, options }) {
		// Process the response data
		source.value = "wp";
		wpPost.value = out.data.value[0];
	},
});

console.log(data.value, wpData.value);

const post = computed(() => {
	if (source.value === "content" && post?.body) {
		return post;
	}

	if (source.value === "wp" && post) {
		return post;
	}

	return {};
});

const title = computed(() => {
	if (source.value === "content" && post.title) {
		return post.title;
	}

	if (source.value === "wp" && wpPost?.title?.rendered) {
		return wpPost.title.rendered;
	}

	return "";
});

const hero = computed(() => {
	if (source.value === "content" && post?.hero) {
		return post.hero;
	}

	if (source.value === "wp" && wpPost?._embedded?.["wp:featuredmedia"][0].source_url) {
		return wpPost._embedded["wp:featuredmedia"][0].source_url;
	}

	return "";
});

/* content = post.content.rendered;
	featuredImage =
	console.log(featuredImage);

	// ({ categories, tags, lang, translations } = post);
	// ({ schema } = post.yoast_head_json);
	detailedTranslations = post.detailed_translations; */

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
