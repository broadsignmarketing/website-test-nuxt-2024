<template>
	<div class="blog_post">
		<Head>
			<Title>{{ title }}</Title>
		</Head>
		<div class="container">
			<BlogPostWP :post="post" v-if="source === 'wp' && content" />
			<BlogPostContent :post="post" v-if="source === 'content' && content" />
		</div>
	</div>
</template>

<script setup lang="ts">
const { post } = defineProps(["post"]);

const { locale, setLocale } = useI18n();
const route = useRoute();
const slug = route.params.slug.join("/").replace(/\/$/, "");
const source = ref("content");

let content = "";
const wpPost = ref("");
let categories = [];
let tags = [];
let lang = "";
let translations = [];
let schema = "";
let detailedTranslations = [];

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

/* watch(data, () => {
	if (!data.value) {
		const { data: wp } = useFetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
			onResponse({ request, response, options }) {
				// Process the response data
				console.log(response);
				source.value = "wp";
				wpPost.value = out.data.value[0];
			},
		});
	}
}); */

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
