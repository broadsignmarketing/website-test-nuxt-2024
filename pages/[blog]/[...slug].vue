<template>
	<div class="blog_post">
		<Head>
			<Title>{{ title }}</Title>
		</Head>
		<div class="container">
			<h2>Blaaaaaah</h2>
			<p>Now : {{ new Date() }}</p>
			<p>{{ source }}</p>
			<NuxtPicture class="hero" :src="hero" height="500" width="900" />
			<h1>{{ title }}</h1>
			<p>{{ slug }}</p>
			<ContentDoc :path="`blog/${locale}/${slug}`" v-if="source === 'content'" />
			<div class="post_content" v-html="content" v-if="source === 'wp'" />
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
const i18n = useI18n();
const route = useRoute();
const slug = route.params.slug.join("/");
const source = ref("content");

let content = "";
let categories = [];
let tags = [];
let lang = "";
let translations = [];
let schema = "";
let detailedTranslations = [];

const { WP_URL } = useRuntimeConfig().public;

const { data } = await useAsyncData("post", () => {
	let out = queryContent(`/blog/en/${slug}`).findOne();

	if (out) {
		source.value = "content";
		return out;
	}

	out = useFetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`);

	if (out) {
		source.value = "wp";
		post.value = out.data.value[0];
		return out.data.value[0];
	}
});

console.log(data.value);

const post = computed(() => {
	if (source.value === "content") {
		return data.value.body;
	}

	if (source.value === "wp") {
		return data.value;
	}

	return {};
});

const title = computed(() => {
	if (source.value === "content") {
		return data.value.title;
	}

	if (source.value === "wp") {
		return post.title.rendered;
	}

	return "";
});

const hero = computed(() => {
	if (source.value === "content") {
		return data.value.hero;
	}

	if (source.value === "wp") {
		return post._embedded["wp:featuredmedia"][0].source_url;
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
