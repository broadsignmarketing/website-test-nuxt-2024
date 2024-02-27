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
			<!-- <ContentRendererMarkdown :value="data.body" v-if="data?.body" /> -->
			<div class="post_content" v-html="content" v-if="source === 'wp' && content" />
		</div>
	</div>
</template>

<script setup>
const { post } = defineProps(["post"]);

const { locale, setLocale } = useI18n();
const route = useRoute();
const slug = route.params.slug.join("/").replace(/\/$/, "");
const source = ref("content");

console.log(post);

let content = "";
let categories = [];
let tags = [];
let lang = "";
let translations = [];
let schema = "";
let detailedTranslations = [];

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
